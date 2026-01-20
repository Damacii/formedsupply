import styles from "./Differentiators.module.css";

export default function Differentiators() {
  return (
    <section id="products" className={styles.differentiators}>
      <div className="container">
        <div className="section-header">
          <p className="section-label">Why operators choose us</p>
          <h2>What makes Formed Supply different</h2>
        </div>
        <div className={styles.diffGrid} data-reveal-group>
          <div className={`${styles.featureCard} reveal-item`}>
            <h3>Supplier-level reliability</h3>
            <p>Industrial sourcing, tracked delivery, and partners built for scale.</p>
          </div>
          <div className={`${styles.featureCard} reveal-item`}>
            <h3>Proof before print</h3>
            <p>Digital proofs and checks before production to protect your brand.</p>
          </div>
          <div className={`${styles.diffVisual} reveal-item`} aria-hidden="true">
            <div className={styles.stackBase}></div>
            <div className={styles.stackMid}></div>
            <div className={styles.stackTop}></div>
            <div className={styles.stackBadge}>Formed</div>
          </div>
          <div className={`${styles.featureCard} reveal-item`}>
            <h3>Consistent reorders</h3>
            <p>Save specs, repeats, and colors for every location and season.</p>
          </div>
          <div className={`${styles.featureCard} reveal-item`}>
            <h3>Built for food &amp; beverage</h3>
            <p>Materials, finishes, and turnaround designed for service teams.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
