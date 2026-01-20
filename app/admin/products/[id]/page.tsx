"use client";

import { use, useEffect, useState } from "react";
import { supabase } from "../../../../lib/supabaseClient";
import { slugify } from "../../../../lib/slugify";
import { uploadProductImages } from "../../../../lib/uploadProductImages";
import styles from "../new/AdminProducts.module.css";
import AdminLoginPrompt from "../../../../components/AdminLoginPrompt";

type Role = "admin" | "user" | "guest";

type FormState = {
  sku: string;
  name: string;
  slug: string;
  description: string;
  type: string;
  style: string;
  size: string[];
  modelNumber: string;
  internalLink: string;
  moq: string;
  customizable: string;
};

type ProductImageRow = {
  id: string;
  url: string;
  alt: string | null;
  sort_order: number | null;
};

const initialState: FormState = {
  sku: "",
  name: "",
  slug: "",
  description: "",
  type: "",
  style: "",
  size: [],
  modelNumber: "",
  internalLink: "",
  moq: "",
  customizable: ""
};

const categoryOptions = [
  "Coffee Bags",
  "Cups & Drink Packaging",
  "Bags, Boxes, Carriers, Stickers",
  "Specialty Packaging & Accessories"
];

const subCategoryOptions: Record<string, string[]> = {
  "Cups & Drink Packaging": ["Lids", "Straws", "Cups", "Holders", "Sleeves"]
};

const sizeOptions = ["8oz", "12oz", "16oz", "20oz", "24oz"];

export default function EditProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [role, setRole] = useState<Role>("guest");
  const [loading, setLoading] = useState(true);
  const [hasUser, setHasUser] = useState(false);
  const [email, setEmail] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>(initialState);
  const [files, setFiles] = useState<File[]>([]);
  const [images, setImages] = useState<ProductImageRow[]>([]);
  const [status, setStatus] = useState<{ type: "error" | "success"; text: string } | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [productLoading, setProductLoading] = useState(false);

  const isAdmin = role === "admin";

  useEffect(() => {
    const loadRole = async () => {
      const { data: userData } = await supabase.auth.getUser();
      const user = userData.user;

      if (!user) {
        setRole("guest");
        setHasUser(false);
        setEmail(null);
        setLoading(false);
        return;
      }

      const { data } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .single();

      setRole((data?.role as Role) || "user");
      setHasUser(true);
      setEmail(user.email ?? null);
      setLoading(false);
    };

    loadRole();
  }, []);

  useEffect(() => {
    setForm((prev) => ({ ...prev, slug: slugify(prev.name) }));
  }, [form.name]);

  useEffect(() => {
    const loadProduct = async () => {
      setProductLoading(true);
      const { data, error } = await supabase
        .from("products")
        .select(
          `sku,
          name,
          slug,
          description,
          type,
          style,
          model_number,
          size,
          moq,
          product_name,
          logo`
        )
        .eq("id", id)
        .single();

      if (error) {
        setStatus({ type: "error", text: "Failed to load product details." });
        setProductLoading(false);
        return;
      }

      if (data) {
        setForm({
          sku: data.sku ?? "",
          name: data.name ?? "",
          slug: data.slug ?? "",
          description: data.description ?? "",
          type: data.type ?? "",
          style: data.style ?? "",
          modelNumber: data.model_number ?? "",
          internalLink: data.product_name ?? "",
          size: data.size ? data.size.split(",").map((item: string) => item.trim()) : [],
          moq: data.moq?.toString() ?? "",
          customizable: data.logo ?? ""
        });
      }

      const { data: imageData, error: imageError } = await supabase
        .from("product_images")
        .select("id, url, alt, sort_order")
        .eq("product_id", id)
        .order("sort_order", { ascending: true });

      if (imageError) {
        setStatus({ type: "error", text: "Failed to load product images." });
      }

      if (imageData) {
        setImages(imageData as ProductImageRow[]);
      }

      setProductLoading(false);
    };

    if (isAdmin) {
      loadProduct();
    }
  }, [id, isAdmin]);

  const handleChange = (field: keyof FormState, value: string | boolean | string[]) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(null);
    setSubmitting(true);

    try {
      const { error } = await supabase
        .from("products")
        .update({
          sku: form.sku,
          slug: form.slug || slugify(form.name),
          name: form.name,
          description: form.description || null,
          type: form.type || null,
          style: form.style || null,
          model_number: form.modelNumber || null,
          product_name: form.internalLink || null,
          size: form.size.length ? form.size.join(", ") : null,
          moq: form.moq ? Number(form.moq) : null,
          logo: form.customizable || null
        })
        .eq("id", id);

      if (error) {
        throw error;
      }

      if (files.length) {
        const uploads = await uploadProductImages({
          supabase,
          productId: id,
          files
        });

        const imageRows = uploads.map((upload, index) => ({
          product_id: id,
          url: upload.url,
          alt: `${form.name} image ${images.length + index + 1}`,
          sort_order: images.length + index
        }));

        const { error: imageError } = await supabase
          .from("product_images")
          .insert(imageRows);

        if (imageError) {
          throw imageError;
        }

        setImages((prev) => [
          ...prev,
          ...imageRows.map((row, idx) => ({
            id: `${id}-${idx}-${Date.now()}`,
            url: row.url,
            alt: row.alt,
            sort_order: row.sort_order
          }))
        ]);
        setFiles([]);
      }

      setStatus({ type: "success", text: "Product updated successfully." });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong.";
      setStatus({ type: "error", text: message });
    } finally {
      setSubmitting(false);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    window.location.href = "/admin";
  };

  if (loading) {
    return (
      <div className={styles.page}>
        <div className="container">Loading...</div>
      </div>
    );
  }

  if (!hasUser) {
    return (
      <AdminLoginPrompt
        title="Admin login"
        description="Sign in to update products."
      />
    );
  }

  if (!isAdmin) {
    return (
      <div className={styles.page}>
        <div className="container">
          <h1>Access denied</h1>
          <p>You do not have permission to view this page.</p>
          {email && <p>Signed in as {email}.</p>}
        </div>
      </div>
    );
  }

  if (productLoading) {
    return (
      <div className={styles.page}>
        <div className="container">Loading product...</div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.headerRow}>
            <h1>Edit Product</h1>
            <button className={styles.signOut} type="button" onClick={handleSignOut}>
              Sign out
            </button>
          </div>
          <p>Update product specifications, category, and images.</p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.grid}>
            <label className={styles.fieldLabel}>
              Name *
              <input
                className={styles.fieldInput}
                required
                value={form.name}
                onChange={(event) => handleChange("name", event.target.value)}
              />
            </label>
            <label className={styles.fieldLabel}>
              SKU *
              <input
                className={styles.fieldInput}
                required
                value={form.sku}
                onChange={(event) => handleChange("sku", event.target.value)}
              />
            </label>
            <label className={`${styles.fieldLabel} ${styles.fullWidth}`}>
              Description
              <textarea
                className={styles.fieldTextarea}
                value={form.description}
                onChange={(event) => handleChange("description", event.target.value)}
              />
            </label>
            <label className={`${styles.fieldLabel} ${styles.fullWidth}`}>
              Images
              <input
                className={styles.fieldInput}
                type="file"
                multiple
                accept="image/*"
                onChange={(event) => setFiles(Array.from(event.target.files || []))}
              />
              <span className={styles.helperText}>
                Upload 2+ images. The second image shows on hover in the product grid.
              </span>
            </label>
            <label className={styles.fieldLabel}>
              Type
              <select
                className={styles.fieldInput}
                value={form.type}
                onChange={(event) => handleChange("type", event.target.value)}
              >
                <option value="">Select category</option>
                {categoryOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label className={styles.fieldLabel}>
              Sub category
              {subCategoryOptions[form.type]?.length ? (
                <select
                  className={styles.fieldInput}
                  value={form.style}
                  onChange={(event) => handleChange("style", event.target.value)}
                >
                  <option value="">Select sub category</option>
                  {subCategoryOptions[form.type].map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  className={styles.fieldInput}
                  value={form.style}
                  onChange={(event) => handleChange("style", event.target.value)}
                />
              )}
            </label>
            <label className={styles.fieldLabel}>
              Model Number
              <input
                className={styles.fieldInput}
                value={form.modelNumber}
                onChange={(event) => handleChange("modelNumber", event.target.value)}
              />
            </label>
            <label className={styles.fieldLabel}>
              Internal Link
              <input
                className={styles.fieldInput}
                value={form.internalLink}
                onChange={(event) => handleChange("internalLink", event.target.value)}
                placeholder="Internal link for team use"
              />
            </label>
            <label className={styles.fieldLabel}>
              Sizes
              <div className={styles.checkboxGroup}>
                {sizeOptions.map((size) => (
                  <label key={size} className={styles.checkboxChip}>
                    <input
                      type="checkbox"
                      checked={form.size.includes(size)}
                      onChange={(event) => {
                        const next = event.target.checked
                          ? [...form.size, size]
                          : form.size.filter((item) => item !== size);
                        handleChange("size", next as unknown as string);
                      }}
                    />
                    <span>{size}</span>
                  </label>
                ))}
              </div>
            </label>
            <label className={styles.fieldLabel}>
              MOQ
              <input
                className={styles.fieldInput}
                type="number"
                min="0"
                value={form.moq}
                onChange={(event) => handleChange("moq", event.target.value)}
              />
            </label>
            <label className={styles.fieldLabel}>
              Customizable
              <select
                className={styles.fieldInput}
                value={form.customizable}
                onChange={(event) => handleChange("customizable", event.target.value)}
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </label>
          </div>

          {images.length ? (
            <div className={styles.imageGrid}>
              {images.map((image) => (
                <div key={image.id} className={styles.imageThumb}>
                  <img src={image.url} alt={image.alt ?? "Product image"} />
                </div>
              ))}
            </div>
          ) : null}

          {status ? (
            <div className={status.type === "success" ? styles.success : styles.error}>
              {status.text}
            </div>
          ) : null}

          <button className="btn btn-primary" type="submit" disabled={submitting}>
            {submitting ? "Saving..." : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  );
}
