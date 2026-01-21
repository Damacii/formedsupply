"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
  type CSSProperties,
  type KeyboardEvent,
  type PointerEvent,
} from "react";
import styles from "./Hero.module.css";

type HeroSlide = {
  id: string;
  src?: string;
  sku?: string;
  href?: string;
  className?: string;
};

const HERO_SLIDES_KEY = "formedSupplyHeroSlides";

export default function Hero() {
  const defaultSlides = useMemo<HeroSlide[]>(
    () => [
      { id: "default-1", className: styles.heroSlideOne, sku: "FS-101" },
      { id: "default-2", className: styles.heroSlideTwo, sku: "FS-204" },
      { id: "default-3", className: styles.heroSlideThree, sku: "FS-318" },
    ],
    []
  );
  const [customSlides, setCustomSlides] = useState<HeroSlide[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [storageError, setStorageError] = useState(false);
  const [isDirty, setIsDirty] = useState(false);
  const slides = customSlides.length ? customSlides : defaultSlides;
  const slideCount = slides.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const dragStartX = useRef(0);
  const dragMoved = useRef(false);
  const hasLoaded = useRef(false);
  const dragStyle = { "--drag-x": `${dragX}px` } as CSSProperties;
  const activeSlide = slides[activeIndex];
  const activeSku = activeSlide?.sku ?? "";

  useEffect(() => {
    const stored = window.localStorage.getItem(HERO_SLIDES_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as HeroSlide[];
        if (Array.isArray(parsed)) {
          setCustomSlides(
            parsed.map((slide) => ({
              id: slide.id || `stored-${Math.random().toString(16).slice(2)}`,
              src: slide.src,
              sku: slide.sku,
              href: slide.href,
            }))
          );
        }
      } catch {
        setCustomSlides([]);
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

  useEffect(() => {
    if (isDragging || isHovered || slideCount < 2) {
      return;
    }
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % slideCount);
    }, 3500);
    return () => window.clearInterval(timer);
  }, [isDragging, isHovered, slideCount]);

  useEffect(() => {
    if (activeIndex >= slideCount) {
      setActiveIndex(0);
    }
  }, [activeIndex, slideCount]);

  const handleCloseEditor = () => {
    setIsEditing(false);
    if (window.location.hash === "#edit-site") {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  };

  const handleSaveSlides = () => {
    if (!hasLoaded.current) return;
    try {
      if (customSlides.length === 0) {
        window.localStorage.removeItem(HERO_SLIDES_KEY);
      } else {
        window.localStorage.setItem(HERO_SLIDES_KEY, JSON.stringify(customSlides));
      }
      setStorageError(false);
      setIsDirty(false);
    } catch {
      setStorageError(true);
    }
  };

  const compressImage = async (file: File) => {
    const bitmap = await createImageBitmap(file);
    const maxSize = 2560;
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
    return canvas.toDataURL("image/webp", 0.95);
  };

  const handleImageUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files ?? []);
    if (!files.length) return;
    const uploads = await Promise.all(
      files.map(
        (file) =>
          new Promise<HeroSlide>((resolve, reject) => {
            compressImage(file)
              .then((dataUrl) => {
                resolve({
                  id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
                  src: dataUrl,
                  sku: "",
                  href: "",
                });
              })
              .catch(() => {
                const reader = new FileReader();
                reader.onload = () => {
                  resolve({
                    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
                    src: String(reader.result || ""),
                    sku: "",
                    href: "",
                  });
                };
                reader.onerror = () => reject(new Error("Failed to read image"));
                reader.readAsDataURL(file);
              });
          })
      )
    );
    setCustomSlides((prev) => [...prev, ...uploads]);
    setIsDirty(true);
    event.target.value = "";
  };

  const handleSlideMetaChange = (
    index: number,
    field: "sku" | "href",
    value: string
  ) => {
    setCustomSlides((prev) =>
      prev.map((slide, slideIndex) =>
        slideIndex === index ? { ...slide, [field]: value } : slide
      )
    );
    setIsDirty(true);
  };

  const handleRemoveSlide = (index: number) => {
    setCustomSlides((prev) => prev.filter((_, slideIndex) => slideIndex !== index));
    setIsDirty(true);
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    dragStartX.current = event.clientX;
    dragMoved.current = false;
    setIsDragging(true);
    (event.currentTarget as HTMLDivElement).setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const delta = event.clientX - dragStartX.current;
    if (Math.abs(delta) > 6) {
      dragMoved.current = true;
    }
    setDragX(delta);
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const delta = event.clientX - dragStartX.current;
    setIsDragging(false);
    setDragX(0);
    (event.currentTarget as HTMLDivElement).releasePointerCapture(event.pointerId);
    if (Math.abs(delta) < 40) {
      return;
    }
    setActiveIndex((index) => {
      if (delta > 0) {
        return (index - 1 + slideCount) % slideCount;
      }
      return (index + 1) % slideCount;
    });
  };

  const handlePointerCancel = () => {
    setIsDragging(false);
    setDragX(0);
    dragMoved.current = false;
  };

  const handleSliderClick = () => {
    if (isDragging || dragMoved.current) {
      return;
    }
    const href = activeSlide?.href;
    if (href) {
      window.location.href = href;
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      setActiveIndex((index) => (index - 1 + slideCount) % slideCount);
    }
    if (event.key === "ArrowRight") {
      setActiveIndex((index) => (index + 1) % slideCount);
    }
  };

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
          aria-label="Rotating product highlights"
          data-reveal
        >
          <div className={styles.heroSliderWrap}>
            <div
              className={`${styles.heroSlider} ${isDragging ? styles.heroSliderDragging : ""}`}
              style={dragStyle}
              role="group"
              aria-roledescription="carousel"
              aria-label="Product visuals"
              tabIndex={0}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerCancel}
              onKeyDown={handleKeyDown}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={handleSliderClick}
            >
              {slides.map((slide, index) => {
                const position =
                  index === activeIndex
                    ? styles.heroSlideFront
                    : index === (activeIndex + 1) % slideCount
                    ? styles.heroSlideMid
                    : styles.heroSlideBack;
                const slideStyle = slide.src
                  ? ({ backgroundImage: `url(${slide.src})` } as CSSProperties)
                  : undefined;
                return (
                  <div
                    key={slide.id}
                    className={`${styles.heroSlide} ${slide.className ?? ""} ${position}`}
                    style={slideStyle}
                    aria-hidden="true"
                  ></div>
                );
              })}
            </div>
            <div className={styles.heroSkuBox}>
              Product being shown is SKU:{" "}
              <span>{activeSku ? activeSku : "Unassigned"}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={`container ${styles.heroEditorAnchor}`} id="edit-site"></div>
      <div className={`container ${styles.heroEditor} ${isEditing ? styles.heroEditorOpen : ""}`}>
        <div className={styles.heroEditorHeader}>
          <div>
            <h2>Edit Site</h2>
            <p>Upload hero images and link each one to a SKU or product page.</p>
          </div>
          <div className={styles.heroEditorActions}>
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleSaveSlides}
              disabled={!isDirty}
            >
              Save Changes
            </button>
            <button className="btn btn-secondary" type="button" onClick={handleCloseEditor}>
              Close Editor
            </button>
          </div>
        </div>
        <div className={styles.heroEditorForm}>
          <label className={styles.heroEditorField}>
            <span>Upload hero images</span>
            <input type="file" accept="image/*" multiple onChange={handleImageUpload} />
          </label>
          {storageError ? (
            <p className={styles.heroEditorError}>
              Storage limit reached. Upload fewer/smaller images or refresh to clear saved
              data.
            </p>
          ) : null}
          {customSlides.length === 0 ? (
            <p className={styles.heroEditorEmpty}>No hero images uploaded yet.</p>
          ) : (
            <div className={styles.heroEditorList}>
              {customSlides.map((slide, index) => (
                <div key={slide.id} className={styles.heroEditorItem}>
                  <div className={styles.heroEditorThumb}>
                    {slide.src ? <img src={slide.src} alt="" /> : null}
                  </div>
                  <label className={styles.heroEditorField}>
                    <span>SKU</span>
                    <input
                      type="text"
                      value={slide.sku ?? ""}
                      onChange={(event) =>
                        handleSlideMetaChange(index, "sku", event.target.value)
                      }
                    />
                  </label>
                  <label className={styles.heroEditorField}>
                    <span>Product link</span>
                    <input
                      type="url"
                      value={slide.href ?? ""}
                      placeholder="https://"
                      onChange={(event) =>
                        handleSlideMetaChange(index, "href", event.target.value)
                      }
                    />
                  </label>
                  <button
                    className="btn btn-secondary"
                    type="button"
                    onClick={() => handleRemoveSlide(index)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
