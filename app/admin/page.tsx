"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "../../lib/supabaseClient";
import AdminLoginPrompt from "../../components/AdminLoginPrompt";
import styles from "./AdminPage.module.css";

type Role = "admin" | "user" | "guest";

type ProductSummary = {
  id: string;
  name: string;
  sku: string | null;
  slug: string;
  type: string | null;
  is_active: boolean;
  created_at: string;
  product_name: string | null;
};

type ProductImageRow = {
  product_id: string;
  url: string;
  alt: string | null;
  sort_order: number | null;
};

export default function AdminHome() {
  const [loading, setLoading] = useState(true);
  const [hasUser, setHasUser] = useState(false);
  const [role, setRole] = useState<Role>("guest");
  const [products, setProducts] = useState<ProductSummary[]>([]);
  const [productImages, setProductImages] = useState<Map<string, ProductImageRow[]>>(
    new Map()
  );
  const [productsLoading, setProductsLoading] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    const loadUser = async () => {
      const { data } = await supabase.auth.getUser();
      const user = data.user;

      if (!user) {
        setHasUser(false);
        setRole("guest");
        setLoading(false);
        return;
      }

      const { data: profile } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .single();

      setHasUser(true);
      setRole((profile?.role as Role) || "user");
      setLoading(false);
    };

    loadUser();

    const { data: subscription } = supabase.auth.onAuthStateChange(() => {
      loadUser();
    });

    return () => {
      subscription?.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    const loadProducts = async () => {
      setProductsLoading(true);
      const { data, error } = await supabase
        .from("products")
        .select("id, name, sku, slug, type, is_active, created_at, product_name")
        .order("created_at", { ascending: false });

      if (!error && data) {
        const items = data as ProductSummary[];
        setProducts(items);

        if (items.length) {
          const productIds = items.map((item) => item.id);
          const { data: images } = await supabase
            .from("product_images")
            .select("product_id, url, alt, sort_order")
            .in("product_id", productIds)
            .order("sort_order", { ascending: true });

          const imageMap = new Map<string, ProductImageRow[]>();
          (images as ProductImageRow[] | null)?.forEach((image) => {
            const existing = imageMap.get(image.product_id) ?? [];
            existing.push(image);
            imageMap.set(image.product_id, existing);
          });

          setProductImages(imageMap);
        }
      }
      setProductsLoading(false);
    };

    if (role === "admin") {
      loadProducts();
    }
  }, [role]);

  const categories = Array.from(
    new Set(products.map((product) => product.type).filter(Boolean) as string[])
  ).sort((a, b) => a.localeCompare(b));

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      categoryFilter === "All" || product.type === categoryFilter;
    const query = searchTerm.trim().toLowerCase();
    if (!query) {
      return matchesCategory;
    }
    const nameMatch = product.name.toLowerCase().includes(query);
    const skuMatch = (product.sku ?? "").toLowerCase().includes(query);
    return matchesCategory && (nameMatch || skuMatch);
  });

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    window.location.href = "/admin";
  };

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

  const handleDelete = async (productId: string) => {
    const confirmed = window.confirm("Delete this product? This cannot be undone.");
    if (!confirmed) {
      return;
    }

    const { error } = await supabase.from("products").delete().eq("id", productId);
    if (!error) {
      setProducts((prev) => prev.filter((product) => product.id !== productId));
      setProductImages((prev) => {
        const next = new Map(prev);
        next.delete(productId);
        return next;
      });
    }
  };

  const toggleDetails = (productId: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(productId)) {
        next.delete(productId);
      } else {
        next.add(productId);
      }
      return next;
    });
  };

  if (loading) {
    return (
      <div style={{ padding: "4rem 0" }}>
        <div className="container">Loading...</div>
      </div>
    );
  }

  if (!hasUser) {
    return <AdminLoginPrompt title="Admin login" description="Sign in to manage products." />;
  }

  if (role !== "admin") {
    return (
      <div className={styles.page}>
        <div className="container">
          <h1>Access denied</h1>
          <p>You do not have permission to view this page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <h1>Admin Hub</h1>
            <p>Dashboard for products, orders, and account management.</p>
          </div>
          <div className={styles.headerActions}>
            <Link className="btn btn-secondary" href="/admin/orders">
              Check New Orders
            </Link>
            <Link className="btn btn-primary" href="/admin/products/new">
              Add Product
            </Link>
            <Link className="btn btn-secondary" href="/#edit-site">
              Edit Site
            </Link>
            <button className="btn btn-secondary" type="button" onClick={handleSignOut}>
              Sign out
            </button>
          </div>
        </div>

        <div className={styles.list}>
          <div className={styles.listHeader}>
            <h2>Products</h2>
            <div className={styles.filters}>
              <select
                className={styles.selectInput}
                value={categoryFilter}
                onChange={(event) => setCategoryFilter(event.target.value)}
                aria-label="Filter by category"
              >
                <option value="All">All categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <input
                className={styles.searchInput}
                type="search"
                placeholder="Search by name or SKU"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                aria-label="Search by name or SKU"
              />
            </div>
            {productsLoading ? <span>Loading…</span> : null}
          </div>
          {filteredProducts.length === 0 && !productsLoading ? (
            <p className={styles.empty}>No products yet.</p>
          ) : (
            <div className={styles.cards}>
              {filteredProducts.map((product) => (
                <article key={product.id} className={styles.card}>
                  <div className={styles.mediaFrame}>
                    <div className={styles.cardMedia}>
                      {(() => {
                        const image = productImages.get(product.id)?.[0];
                        const src = resolveImageUrl(image?.url ?? null);
                        return src ? (
                          <img src={src} alt={image?.alt ?? product.name} />
                        ) : (
                          <div className={styles.imagePlaceholder} aria-hidden="true"></div>
                        );
                      })()}
                    </div>
                  </div>
                  <div className={styles.cardBody}>
                    <div className={styles.cardHeader}>
                      <h3>{product.name}</h3>
                      <span className={product.is_active ? styles.active : styles.inactive}>
                        {product.is_active ? "Active" : "Inactive"}
                      </span>
                    </div>
                    <p className={styles.subtitle}>{product.type ?? "Uncategorized"}</p>
                    <p className={styles.meta}>SKU: {product.sku ?? "—"}</p>
                    {expandedIds.has(product.id) ? (
                      <div className={styles.details}>
                        <p>Name: {product.name}</p>
                        <p>SKU: {product.sku ?? "—"}</p>
                        <p>Internal link: {product.product_name ?? "—"}</p>
                      </div>
                    ) : null}
                  </div>
                  <div className={styles.cardActions}>
                    <Link className="btn btn-primary" href={`/admin/products/${product.id}`}>
                      Edit
                    </Link>
                    <button
                      className="btn btn-secondary"
                      type="button"
                      onClick={() => toggleDetails(product.id)}
                    >
                      {expandedIds.has(product.id) ? "Hide details" : "View details"}
                    </button>
                    <button
                      className="btn btn-secondary"
                      type="button"
                      onClick={() => handleDelete(product.id)}
                    >
                      Delete
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
