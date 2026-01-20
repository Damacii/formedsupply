import styles from "./Trusted.module.css";

export default function Trusted() {
  return (
    <section className={styles.trusted} aria-label="Trusted by">
      <div className="container">
        <p className="section-label">Trusted by</p>
        <div className={styles.logoMarquee} data-reveal>
          <div className={styles.logoTrack}>
            <svg viewBox="0 0 160 40" role="img" aria-label="Northline Coffee">
              <rect width="160" height="40" rx="8" fill="none" stroke="currentColor" strokeWidth="1.5"></rect>
              <text x="18" y="26" fontSize="14" fontFamily="system-ui, sans-serif">Northline</text>
            </svg>
            <svg viewBox="0 0 160 40" role="img" aria-label="Harbor Roasters">
              <rect width="160" height="40" rx="8" fill="none" stroke="currentColor" strokeWidth="1.5"></rect>
              <text x="18" y="26" fontSize="14" fontFamily="system-ui, sans-serif">Harbor</text>
            </svg>
            <svg viewBox="0 0 160 40" role="img" aria-label="Union Kitchen">
              <rect width="160" height="40" rx="8" fill="none" stroke="currentColor" strokeWidth="1.5"></rect>
              <text x="18" y="26" fontSize="14" fontFamily="system-ui, sans-serif">Union</text>
            </svg>
            <svg viewBox="0 0 160 40" role="img" aria-label="Drift Markets">
              <rect width="160" height="40" rx="8" fill="none" stroke="currentColor" strokeWidth="1.5"></rect>
              <text x="18" y="26" fontSize="14" fontFamily="system-ui, sans-serif">Drift</text>
            </svg>
            <svg viewBox="0 0 160 40" role="img" aria-label="Slate Cafe">
              <rect width="160" height="40" rx="8" fill="none" stroke="currentColor" strokeWidth="1.5"></rect>
              <text x="18" y="26" fontSize="14" fontFamily="system-ui, sans-serif">Slate</text>
            </svg>
            <svg viewBox="0 0 160 40" role="img" aria-label="Northline Coffee">
              <rect width="160" height="40" rx="8" fill="none" stroke="currentColor" strokeWidth="1.5"></rect>
              <text x="18" y="26" fontSize="14" fontFamily="system-ui, sans-serif">Northline</text>
            </svg>
            <svg viewBox="0 0 160 40" role="img" aria-label="Harbor Roasters">
              <rect width="160" height="40" rx="8" fill="none" stroke="currentColor" strokeWidth="1.5"></rect>
              <text x="18" y="26" fontSize="14" fontFamily="system-ui, sans-serif">Harbor</text>
            </svg>
            <svg viewBox="0 0 160 40" role="img" aria-label="Union Kitchen">
              <rect width="160" height="40" rx="8" fill="none" stroke="currentColor" strokeWidth="1.5"></rect>
              <text x="18" y="26" fontSize="14" fontFamily="system-ui, sans-serif">Union</text>
            </svg>
            <svg viewBox="0 0 160 40" role="img" aria-label="Drift Markets">
              <rect width="160" height="40" rx="8" fill="none" stroke="currentColor" strokeWidth="1.5"></rect>
              <text x="18" y="26" fontSize="14" fontFamily="system-ui, sans-serif">Drift</text>
            </svg>
            <svg viewBox="0 0 160 40" role="img" aria-label="Slate Cafe">
              <rect width="160" height="40" rx="8" fill="none" stroke="currentColor" strokeWidth="1.5"></rect>
              <text x="18" y="26" fontSize="14" fontFamily="system-ui, sans-serif">Slate</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
