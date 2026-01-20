import type { SupabaseClient } from "@supabase/supabase-js";

type UploadResult = {
  url: string;
  path: string;
};

type UploadOptions = {
  supabase: SupabaseClient;
  productId: string;
  files: File[];
};

export const uploadProductImages = async ({
  supabase,
  productId,
  files
}: UploadOptions): Promise<UploadResult[]> => {
  const uploads: UploadResult[] = [];

  for (const [index, file] of files.entries()) {
    const extension = file.name.split(".").pop() || "png";
    const path = `${productId}/${Date.now()}-${index}.${extension}`;

    const { error: uploadError } = await supabase.storage
      .from("product-images")
      .upload(path, file, {
        cacheControl: "3600",
        upsert: false,
        contentType: file.type || "image/png"
      });

    if (uploadError) {
      throw uploadError;
    }

    const { data } = supabase.storage.from("product-images").getPublicUrl(path);

    uploads.push({ url: data.publicUrl, path });
  }

  return uploads;
};
