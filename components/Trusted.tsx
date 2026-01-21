"use client";

import { useEffect, useRef, useState, type ChangeEvent } from "react";
import styles from "./Trusted.module.css";

type LogoItem = {
  id: string;
  src: string;
  alt: string;
};

const LOGO_STORAGE_KEY = "formedSupplyMarqueeLogos";

export default function Trusted() {
  const [customLogos, setCustomLogos] = useState<LogoItem[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [isDirty, setIsDirty] = useState(false);
  const [storageError, setStorageError] = useState(false);
  const hasLoaded = useRef(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(LOGO_STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as LogoItem[];
        if (Array.isArray(parsed)) {
          setCustomLogos(
            parsed.map((logo) => ({
              id: logo.id || `logo-${Math.random().toString(16).slice(2)}`,
              src: logo.src,
              alt: logo.alt || "Partner logo",
            }))
          );
        }
      } catch {
        setCustomLogos([]);
      }
    }
    hasLoaded.current = true;
    setIsDirty(false);
  }, []);

  useEffect(() => {
    const updateEditorState = () => {
      setIsEditing(window.location.hash === "#edit-site");
    };
    updateEditorState();
    window.addEventListener("hashchange", updateEditorState);
    return () => window.removeEventListener("hashchange", updateEditorState);
  }, []);

  const compressLogo = async (file: File) => {
    const bitmap = await createImageBitmap(file);
    const maxSize = 600;
    const scale = Math.min(1, maxSize / Math.max(bitmap.width, bitmap.height));
    const targetWidth = Math.round(bitmap.width * scale);
    const targetHeight = Math.round(bitmap.height * scale);
    const canvas = document.createElement("canvas");
    canvas.width = targetWidth;
    canvas.height = targetHeight;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      throw new Error("No canvas context");
    }
    ctx.drawImage(bitmap, 0, 0, targetWidth, targetHeight);
    return canvas.toDataURL("image/webp", 0.82);
  };

  const handleLogoUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files ?? []);
    if (!files.length) return;
    const uploads = await Promise.all(
      files.map(async (file) => {
        try {
          const dataUrl = await compressLogo(file);
          return {
            id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
            src: dataUrl,
            alt: file.name.replace(/\.[^/.]+$/, "") || "Partner logo",
          } satisfies LogoItem;
        } catch {
          return null;
        }
      })
    );
    setCustomLogos((prev) => [...prev, ...(uploads.filter(Boolean) as LogoItem[])]);
    setIsDirty(true);
    event.target.value = "";
  };

  const handleRemoveLogo = (index: number) => {
    setCustomLogos((prev) => prev.filter((_, logoIndex) => logoIndex !== index));
    setIsDirty(true);
  };

  const handleSaveLogos = () => {
    if (!hasLoaded.current) return;
    try {
      if (customLogos.length === 0) {
        window.localStorage.removeItem(LOGO_STORAGE_KEY);
      } else {
        window.localStorage.setItem(LOGO_STORAGE_KEY, JSON.stringify(customLogos));
      }
      setStorageError(false);
      setIsDirty(false);
    } catch {
      setStorageError(true);
    }
  };

  const logoItems = customLogos.length ? customLogos : null;
  const marqueeItems = logoItems ? [...logoItems, ...logoItems] : null;

  return (
    <section className={styles.trusted} aria-label="Trusted by">
      <div className="container">
        <p className="section-label">Trusted by</p>
        <div className={styles.logoMarquee} data-reveal>
          <div className={styles.logoTrack}>
            {marqueeItems ? (
              marqueeItems.map((logo, index) => (
                <img
                  key={`${logo.id}-${index}`}
                  className={styles.logoImage}
                  src={logo.src}
                  alt={logo.alt}
                />
              ))
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
        {isEditing ? (
          <div className={styles.logoEditor}>
            <div className={styles.logoEditorHeader}>
              <div>
                <h2>Edit Marquee Logos</h2>
                <p>Upload brand logos to display in the marquee.</p>
              </div>
              <div className={styles.logoEditorActions}>
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={handleSaveLogos}
                  disabled={!isDirty}
                >
                  Save Logos
                </button>
              </div>
            </div>
            <label className={styles.logoEditorField}>
              <span>Upload logos</span>
              <input type="file" accept="image/*" multiple onChange={handleLogoUpload} />
            </label>
            {storageError ? (
              <p className={styles.logoEditorError}>
                Storage limit reached. Upload fewer/smaller logos.
              </p>
            ) : null}
            {customLogos.length === 0 ? (
              <p className={styles.logoEditorEmpty}>No custom logos uploaded yet.</p>
            ) : (
              <div className={styles.logoEditorList}>
                {customLogos.map((logo, index) => (
                  <div key={logo.id} className={styles.logoEditorItem}>
                    <div className={styles.logoEditorThumb}>
                      <img src={logo.src} alt={logo.alt} />
                    </div>
                    <p>{logo.alt}</p>
                    <button
                      className="btn btn-secondary"
                      type="button"
                      onClick={() => handleRemoveLogo(index)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : null}
      </div>
    </section>
  );
}
