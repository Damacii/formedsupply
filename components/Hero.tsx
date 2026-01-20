import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={`container ${styles.heroGrid}`}>
        <div className={styles.heroContent} data-reveal>
          <h1>Branded print &amp; supplies for coffee shops and restaurants.</h1>
          <p className={styles.heroSubhead}>
            Cups, menus, labels, packaging, signage — consistent, fast, and clean.
          </p>
          <div className={styles.heroActions}>
          <a className="btn btn-primary" href="/request-form">
            Request a Quote
          </a>
            <a className="btn btn-secondary" href="#products">
              View Products
            </a>
          </div>
          <div className={styles.trustRow} aria-label="Hero trust points">
            <span>Proof before print</span>
            <span>Quotes in 24 hours</span>
            <span>Reorder-ready</span>
          </div>
        </div>
        <div
          className={styles.heroVisual}
          role="img"
          aria-label="Abstract product mockup"
          data-reveal
        >
          <div className={styles.heroShapeA}></div>
          <div className={styles.heroShapeB}></div>
          <div className={styles.heroCard}>
            <div className={styles.heroCardLabel}>Formed Supply</div>
            <div className={styles.heroCardLines}></div>
            <div className={styles.heroCardLines}></div>
            <div className={`${styles.heroCardLines} ${styles.heroCardLinesShort}`}></div>
          </div>
          <div className={styles.heroTower}></div>
          <div className={`${styles.heroTower} ${styles.heroTowerSlim}`}></div>
        </div>
      </div>
    </section>
  );
}
