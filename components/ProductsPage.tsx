import Link from "next/link";
import styles from "./ProductsPage.module.css";

const toId = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

type ProductCard = {
  slug: string;
  name: string;
  category: string;
  primaryImage: string | null;
  hoverImage: string | null;
  imageAlt: string | null;
  colors: string[];
};

type CategoryGroup = {
  name: string;
  items: ProductCard[];
};

export default function ProductsPage({ categories }: { categories: CategoryGroup[] }) {
  if (!categories.length) {
    return (
      <div className={styles.page}>
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2>Products</h2>
              <p className={styles.empty}>No products are available yet.</p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      {categories.map((category) => (
        <section key={category.name} id={toId(category.name)} className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader} data-reveal>
              <h2>{category.name}</h2>
            </div>
            <div className={styles.grid} data-reveal-group>
              {category.items.map((item) => (
                <article key={item.slug} className={`${styles.card} reveal-item`}>
                  <div className={styles.mediaFrame}>
                    <div className={styles.cardMedia}>
                      {item.primaryImage ? (
                        <>
                          <img
                            className={styles.mediaPrimary}
                            src={item.primaryImage}
                            alt={item.imageAlt ?? item.name}
                            loading="lazy"
                          />
                          <img
                            className={styles.mediaHover}
                            src={item.hoverImage ?? item.primaryImage}
                            alt=""
                            aria-hidden="true"
                            loading="lazy"
                          />
                        </>
                      ) : (
                        <div className={styles.mediaPlaceholder} aria-hidden="true"></div>
                      )}
                    </div>
                  </div>
                  <div className={styles.cardBody}>
                    <span className={styles.tag}>Just In</span>
                    <h3>{item.name}</h3>
                    <p className={styles.subtitle}>{item.category ?? "Packaging"}</p>
                    <div className={styles.actions}>
                      <Link className={styles.viewLink} href={`/products/${item.slug}`}>
                        View product
                      </Link>
                      <Link className={styles.primaryLink} href="/request-form">
                        Request Quote
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
