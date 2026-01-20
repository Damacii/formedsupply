"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function MotionController() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.add("js-enabled");
    const header = document.querySelector<HTMLElement>("[data-header]");

    const onScroll = () => {
      if (!header) return;
      if (window.scrollY > 8) {
        header.setAttribute("data-scrolled", "true");
      } else {
        header.removeAttribute("data-scrolled");
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const revealElements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const revealGroups = document.querySelectorAll<HTMLElement>("[data-reveal-group]");

    const reveal = (el: HTMLElement) => el.classList.add("is-visible");
    let observer: IntersectionObserver | null = null;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      revealElements.forEach(reveal);
      revealGroups.forEach((group) => {
        group.querySelectorAll<HTMLElement>(".reveal-item").forEach(reveal);
      });
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              reveal(entry.target as HTMLElement);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );

      revealElements.forEach((el) => observer.observe(el));

      revealGroups.forEach((group) => {
        const items = Array.from(
          group.querySelectorAll<HTMLElement>(".reveal-item")
        );
        items.forEach((item, index) => {
          item.style.transitionDelay = `${index * 90}ms`;
          observer.observe(item);
        });
      });

      document
        .querySelectorAll<HTMLElement>("#hero [data-reveal]")
        .forEach(reveal);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
}
