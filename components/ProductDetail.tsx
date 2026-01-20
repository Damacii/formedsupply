"use client";

import { useState } from "react";
import styles from "./ProductDetail.module.css";

type ProductImageRow = {
  url: string;
  alt: string | null;
  sort_order: number | null;
};

export type ProductRecord = {
  id?: string;
  slug: string;
  name: string;
  sku: string;
  description: string | null;
  type: string | null;
  style: string | null;
  material: string | null;
  plastic_type: string | null;
  industrial_use: string | null;
  place_of_origin: string | null;
  model_number: string | null;
  brand_name: string | null;
  product_name: string | null;
  colors: string[] | null;
  size: string | null;
  moq: number | null;
  logo: string | null;
  feature: string | null;
  sample_available: boolean | null;
  packaging_details: string | null;
  product_images: ProductImageRow[] | null;
};

const buildSpecs = (product: ProductRecord) =>
  [
    product.type && `Type: ${product.type}`,
    product.style && `Style: ${product.style}`,
    product.material && `Material: ${product.material}`,
    product.plastic_type && `Plastic type: ${product.plastic_type}`,
    product.industrial_use && `Industrial use: ${product.industrial_use}`,
    product.place_of_origin && `Place of origin: ${product.place_of_origin}`,
    product.model_number && `Model number: ${product.model_number}`,
    product.brand_name && `Brand name: ${product.brand_name}`,
    product.colors?.length ? `Colors: ${product.colors.join(", ")}` : null,
    product.size && `Size: ${product.size}`,
    typeof product.moq === "number" ? `MOQ: ${product.moq}` : null,
    product.logo && `Customizable: ${product.logo}`,
    product.feature && `Feature: ${product.feature}`,
    product.sample_available === null
      ? null
      : `Sample available: ${product.sample_available ? "Yes" : "No"}`,
    product.packaging_details && `Packaging details: ${product.packaging_details}`
  ].filter(Boolean) as string[];

export default function ProductDetail({ product }: { product: ProductRecord }) {
  const images = product.product_images ?? [];
  const thumbs = images.slice(0, 3);
  const specs = buildSpecs(product);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex] ?? images[0] ?? null;

  return (
    <section className={styles.page}>
      <div className={`container ${styles.layout}`}>
        <div className={styles.gallery}>
          <div className={styles.mediaMain}>
            {activeImage ? (
              <img
                className={styles.mediaImage}
                src={activeImage.url}
                alt={activeImage.alt ?? product.name}
              />
            ) : (
              <div className={styles.mediaPlaceholder} aria-hidden="true"></div>
            )}
          </div>
          <div className={styles.mediaThumbs}>
            {(thumbs.length ? thumbs : [null, null, null]).map((image, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={`${product.slug}-thumb-${index}`}
                  className={`${styles.mediaThumb} ${isActive ? styles.mediaThumbActive : ""}`}
                  type="button"
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(0)}
                  onBlur={() => setActiveIndex(0)}
                  aria-label={`View image ${index + 1}`}
                >
                  {image ? (
                    <img className={styles.mediaImage} src={image.url} alt="" loading="lazy" />
                  ) : (
                    <div className={styles.mediaPlaceholder}></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
        <div className={styles.details}>
          {product.type ? <p className="section-label">{product.type}</p> : null}
          <h1>{product.name}</h1>
          <p className={styles.sku}>SKU: {product.sku}</p>
          {product.description ? <p className={styles.description}>{product.description}</p> : null}
          {specs.length ? (
            <div className={styles.specs}>
              <h2>Specifications</h2>
              <ul>
                {specs.map((spec) => (
                  <li key={spec}>{spec}</li>
                ))}
              </ul>
            </div>
          ) : null}
          <a className="btn btn-primary" href="/request-form">
            Request a Quote for this Product
          </a>
        </div>
      </div>
    </section>
  );
}
