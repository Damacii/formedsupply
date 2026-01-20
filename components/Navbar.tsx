"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./Navbar.module.css";

const links = [
  { href: "/products", label: "Products", external: false },
  { href: "#process", label: "How It Works", external: true },
  { href: "#reviews", label: "Reviews", external: true },
  { href: "#faq", label: "FAQ", external: true }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.siteHeader} data-header>
      <div className={`container ${styles.headerInner}`}>
        <Link className={styles.logoWrap} href="/" aria-label="Formed Supply home">
          <img
            className={styles.logoImage}
            src="/assets/images/logo.png"
            alt="Formed Supply"
            width={180}
            height={52}
          />
        </Link>
        <button
          className={styles.navToggle}
          type="button"
          aria-expanded={isOpen}
          aria-controls="primary-nav"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span className={styles.navToggleBar}></span>
          <span className={styles.navToggleBar}></span>
        </button>
        <nav
          id="primary-nav"
          className={`${styles.mainNav} ${isOpen ? styles.mainNavOpen : ""}`}
          aria-label="Primary"
          onClick={(event) => {
            if ((event.target as HTMLElement).tagName === "A") {
              setIsOpen(false);
            }
          }}
        >
          {links.map((link) =>
            link.external ? (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ) : (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            )
          )}
        </nav>
        <div className={styles.navActions}>
          <a className={`${styles.navAdmin} btn btn-secondary`} href="/#edit-site">
            Edit Site
          </a>
          <a className={`${styles.navCta} btn btn-primary`} href="/request-form">
            Request a Quote
          </a>
        </div>
      </div>
    </header>
  );
}
