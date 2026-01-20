"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../../../lib/supabaseClient";
import { slugify } from "../../../../lib/slugify";
import { uploadProductImages } from "../../../../lib/uploadProductImages";
import styles from "./AdminProducts.module.css";
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

export default function NewProductPage() {
  const [role, setRole] = useState<Role>("guest");
  const [loading, setLoading] = useState(true);
  const [hasUser, setHasUser] = useState(false);
  const [email, setEmail] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>(initialState);
  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState<{ type: "error" | "success"; text: string } | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [sizeOpen, setSizeOpen] = useState(false);

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

  const handleChange = (field: keyof FormState, value: string | boolean | string[]) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(null);
    setSubmitting(true);

    try {
      const { data, error } = await supabase
        .from("products")
        .insert({
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
        .select("id")
        .single();

      if (error || !data) {
        throw error || new Error("Failed to insert product");
      }

      if (files.length) {
        const uploads = await uploadProductImages({
          supabase,
          productId: data.id,
          files
        });

        const imageRows = uploads.map((upload, index) => ({
          product_id: data.id,
          url: upload.url,
          alt: `${form.name} image ${index + 1}`,
          sort_order: index
        }));

        const { error: imageError } = await supabase
          .from("product_images")
          .insert(imageRows);

        if (imageError) {
          throw imageError;
        }
      }

      setStatus({ type: "success", text: "Product created successfully." });
      setForm(initialState);
      setFiles([]);
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
        description="Sign in to create new products."
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

  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.headerRow}>
            <h1>Add Product</h1>
            <button className={styles.signOut} type="button" onClick={handleSignOut}>
              Sign out
            </button>
          </div>
          <p>Create a new product with supplier-ready specifications.</p>
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
                accept="image/*"
                multiple
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
              <div
                className={styles.multiSelect}
                tabIndex={0}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                    setSizeOpen(false);
                  }
                }}
              >
                <button
                  className={styles.multiSelectToggle}
                  type="button"
                  onClick={() => setSizeOpen((prev) => !prev)}
                >
                  {form.size.length ? form.size.join(", ") : "Select sizes"}
                </button>
                {sizeOpen ? (
                  <div className={styles.multiSelectPanel}>
                    {sizeOptions.map((size) => (
                      <label key={size} className={styles.multiSelectOption}>
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
                ) : null}
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

          {status && (
            <div
              className={status.type === "success" ? styles.success : styles.error}
              role="status"
            >
              {status.text}
            </div>
          )}

          <button className="btn btn-primary" type="submit" disabled={submitting}>
            {submitting ? "Saving..." : "Create product"}
          </button>
        </form>
      </div>
    </div>
  );
}
