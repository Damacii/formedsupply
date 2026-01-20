import { notFound } from "next/navigation";
import ProductDetail from "../../../components/ProductDetail";
import { supabaseServer } from "../../../lib/supabaseServer";
import type { ProductRecord } from "../../../components/ProductDetail";

const resolveImageUrl = (url: string | null) => {
  if (!url) {
    return null;
  }

  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }

  const baseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!baseUrl) {
    return url;
  }

  const trimmed = url.replace(/^\/+/, "");
  return `${baseUrl}/storage/v1/object/public/product-images/${trimmed}`;
};

async function getProduct(slug: string): Promise<ProductRecord | null> {
  const { data, error } = await supabaseServer
    .from("products")
    .select(
      `slug,
      id,
      name,
      sku,
      description,
      type,
      style,
      material,
      plastic_type,
      industrial_use,
      place_of_origin,
      model_number,
      brand_name,
      product_name,
      colors,
      size,
      moq,
      logo,
      feature,
      sample_available,
      packaging_details`
    )
    .eq("slug", slug)
    .eq("is_active", true)
    .maybeSingle();

  if (error || !data) {
    if (error) {
      console.error("Failed to load product:", error);
    }
    return null;
  }

  const { data: images, error: imagesError } = await supabaseServer
    .from("product_images")
    .select("url, alt, sort_order")
    .eq("product_id", data.id)
    .order("sort_order", { ascending: true });

  if (imagesError) {
    console.error("Failed to load product images:", imagesError);
  }

  const normalizedImages = (images ?? []).map((image) => ({
    ...image,
    url: resolveImageUrl(image.url)
  }));

  return { ...(data as ProductRecord), product_images: normalizedImages };
}

export default async function ProductPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}
