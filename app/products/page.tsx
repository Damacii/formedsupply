import ProductsPage from "../../components/ProductsPage";
import { supabaseServer } from "../../lib/supabaseServer";

type ProductImageRow = {
  product_id: string;
  url: string;
  alt: string | null;
  sort_order: number | null;
};

type ProductRow = {
  id: string;
  slug: string;
  name: string;
  type: string | null;
  colors: string[] | null;
};

type CategoryGroup = {
  name: string;
  items: {
    slug: string;
    name: string;
    category: string;
    primaryImage: string | null;
    hoverImage: string | null;
    imageAlt: string | null;
    colors: string[];
  }[];
};

export const revalidate = 60;

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

async function getProductsByCategory(): Promise<CategoryGroup[]> {
  const { data: products, error } = await supabaseServer
    .from("products")
    .select("id, slug, name, type, colors")
    .eq("is_active", true)
    .order("created_at", { ascending: false });

  if (error || !products) {
    console.error("Failed to load products:", error);
    return [];
  }

  if (!products.length) {
    return [];
  }

  const productIds = products.map((product) => product.id);
  const { data: images, error: imagesError } = await supabaseServer
    .from("product_images")
    .select("product_id, url, alt, sort_order")
    .in("product_id", productIds)
    .order("sort_order", { ascending: true });

  if (imagesError) {
    console.error("Failed to load product images:", imagesError);
  }

  const imagesByProduct = new Map<string, ProductImageRow[]>();
  (images ?? []).forEach((image) => {
    const existing = imagesByProduct.get(image.product_id) ?? [];
    existing.push(image);
    imagesByProduct.set(image.product_id, existing);
  });

  const categoryOrder: string[] = [];
  const grouped = new Map<string, CategoryGroup["items"]>();

  products.forEach((product: ProductRow) => {
    const category = product.type?.trim() || "Other";
    if (!grouped.has(category)) {
      grouped.set(category, []);
      categoryOrder.push(category);
    }

    const images = imagesByProduct.get(product.id) ?? [];
    const primary = resolveImageUrl(images[0]?.url ?? null);
    const hover = resolveImageUrl(images[1]?.url ?? null) ?? primary;
    const alt = images[0]?.alt ?? product.name;

    grouped.get(category)?.push({
      slug: product.slug,
      name: product.name,
      category,
      primaryImage: primary,
      hoverImage: hover,
      imageAlt: alt,
      colors: product.colors ?? []
    });
  });

  return categoryOrder.map((category) => ({
    name: category,
    items: grouped.get(category) ?? []
  }));
}

export default async function Products() {
  const categories = await getProductsByCategory();
  return <ProductsPage categories={categories} />;
}
