import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.siteFooter}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.footerBrand}>
          <Link className={styles.footerLogoRow} href="/" aria-label="Formed Supply home">
            <img
              className={styles.footerLogo}
              src="/assets/images/logo.png"
              alt="Formed Supply"
              width={180}
              height={52}
            />
          </Link>
          <p>Hospitality Procurement &amp; Logistics.</p>
          <div className={styles.footerSocials} aria-label="Social links">
            <a href="#" aria-label="Formed Supply on LinkedIn">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9h4v12H3V9Zm7.5 0H14v1.7h.1c.5-.9 1.9-1.9 3.9-1.9 4.2 0 5 2.8 5 6.5V21h-4v-5.1c0-1.2 0-2.8-1.7-2.8-1.7 0-2 1.3-2 2.7V21h-4V9Z"
                />
              </svg>
            </a>
            <a href="#" aria-label="Formed Supply on Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7Zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 8.5Zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 10.5Zm5.2-3.1a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z"
                />
              </svg>
            </a>
            <a href="#" aria-label="Formed Supply on X">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M4 4h4.6l3.5 4.9L16.4 4H20l-6 7.2L20.4 20h-4.6l-3.9-5.4L7.6 20H4l6.4-7.7L4 4Zm5.3 2 6.6 9.3h1.4L10.7 6H9.3Z"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className={styles.footerCol}>
          <h3>Products</h3>
          <a href="/products#coffee-bags">Coffee Bags</a>
          <a href="/products#cups-drink-packaging">Cups &amp; Drink Packaging</a>
          <a href="/products#bags-boxes-carriers-stickers">Bags, Boxes, Carriers, Stickers</a>
          <a href="/products#specialty-packaging-accessories">Specialty Packaging &amp; Accessories</a>
        </div>
        <div className={styles.footerCol}>
          <h3>Company</h3>
          <a href="#process">How It Works</a>
          <a href="#reviews">Reviews</a>
          <a href="#lead">Request a Quote</a>
        </div>
        <div className={styles.footerCol}>
          <h3>Legal</h3>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Accessibility</a>
        </div>
        <div className={styles.footerCol}>
          <h3>Contact</h3>
          <p>orders@formedsupply.com</p>
          <p>+1 (555) 019-2834</p>
        </div>
      </div>
      <div className={styles.footerDivider}></div>
      <div className={styles.footerBottom}>
        <p>&copy; 2026 Formed Supply LLC. All rights reserved.</p>
      </div>
    </footer>
  );
}
