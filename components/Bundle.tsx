import styles from "./Bundle.module.css";

export default function Bundle() {
  return (
    <section id="process" className={styles.bundle}>
      <div className={`container ${styles.bundleGrid}`}>
        <div className={styles.bundleContent} data-reveal>
          <p className="section-label">Featured bundle</p>
          <h2>Starter Pack for New Cafés</h2>
          <p>
            Everything you need to launch a branded service counter with consistent
            packaging.
          </p>
          <ul className={styles.bundleList}>
            <li>Cups + lids</li>
            <li>Labels</li>
            <li>Menus</li>
            <li>Window decal</li>
          </ul>
          <p className={styles.bundleNote}>
            Typical turnaround: 7–10 business days (rush available).
          </p>
          <a className="btn btn-primary" href="/request-form">
            Request Quote for Starter Pack
          </a>
        </div>
        <div className={styles.bundleVisual} aria-hidden="true" data-reveal>
          <div className={styles.bundleBlock}></div>
          <div className={styles.bundleBlock}></div>
          <div className={`${styles.bundleBlock} ${styles.bundleBlockWide}`}></div>
        </div>
      </div>
    </section>
  );
}
