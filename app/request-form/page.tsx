"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./RequestForm.module.css";
import { supabase } from "../../lib/supabaseClient";

export default function RequestFormPage() {
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const animationRef = useRef<HTMLDivElement | null>(null);
  const [step, setStep] = useState(0);
  const [products, setProducts] = useState<
    {
      id: string;
      name: string;
      moq: number | null;
      image: string | null;
    }[]
  >([]);
  const [search, setSearch] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    language: "",
    address: "",
    contactMethod: "",
    instagramHandle: "",
    productSelections: [] as { id: string; name: string; moq: number | null }[],
    quantities: {} as Record<string, string>,
    logoColor: "",
    message: ""
  });
  const [logoFile, setLogoFile] = useState<File | null>(null);

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 10);
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
    return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("");
    setSubmitting(true);

    if (step < steps.length - 1) {
      handleNext();
      setSubmitting(false);
      return;
    }

    if (!form.name || !form.email) {
      setStatus("Name and work email are required.");
      setSubmitting(false);
      return;
    }

    if (form.productSelections.length === 0) {
      setStatus("Select at least one product.");
      setSubmitting(false);
      return;
    }

    const invalidQuantity = form.productSelections.find((product) => {
      const raw = form.quantities[product.id];
      if (!raw) return true;
      const value = Number(raw);
      if (Number.isNaN(value) || value <= 0) return true;
      if (product.moq && value < product.moq) return true;
      return false;
    });

    if (invalidQuantity) {
      setStatus("Please enter valid quantities (meet MOQ when listed).");
      setSubmitting(false);
      return;
    }

    try {
      let logoUrl = null;
      if (logoFile) {
        const extension = logoFile.name.split(".").pop() || "png";
        const safeName = logoFile.name.replace(/[^a-zA-Z0-9._-]/g, "_");
        const path = `requests/${Date.now()}-${safeName || `logo.${extension}`}`;
        const { error: uploadError } = await supabase.storage
          .from("request-logos")
          .upload(path, logoFile, {
            cacheControl: "3600",
            upsert: true,
            contentType: logoFile.type || "image/png"
          });

        if (uploadError) {
          setStatus("Logo upload failed, submitting without the logo.");
        } else {
          const { data } = supabase.storage.from("request-logos").getPublicUrl(path);
          logoUrl = data.publicUrl;
        }
      }

      const response = await fetch("/api/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          logoUrl
        })
      });

      if (!response.ok) {
        throw new Error("Unable to submit request.");
      }

      setStatus("Request received. Our team will reach out within 24 hours.");
      setSubmitted(true);
      setShowThankYou(false);
      setForm({
        name: "",
        email: "",
        company: "",
        phone: "",
        language: "",
        address: "",
        contactMethod: "",
        instagramHandle: "",
        productSelections: [],
        quantities: {},
        logoColor: "",
        message: ""
      });
      setLogoFile(null);
    } catch (error) {
      setStatus("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleNext = () => {
    if (step === 0 && (!form.name || !form.email)) {
      setStatus("Please add your name and work email.");
      return;
    }
    if (step === 1 && form.productSelections.length === 0) {
      setStatus("Select at least one product.");
      return;
    }
    setStatus("");
    setStep((prev) => Math.min(prev + 1, 1));
  };

  const handleBack = () => {
    setStatus("");
    setStep((prev) => Math.max(prev - 1, 0));
  };

  const steps = [
    { title: "Contact", description: "Tell us who to follow up with." },
    { title: "Products", description: "Select products and quantities." }
  ];

  useEffect(() => {
    const loadProducts = async () => {
      const { data } = await supabase
        .from("products")
        .select("id, name, moq, product_images (url, sort_order)")
        .eq("is_active", true)
        .order("created_at", { ascending: false });

      if (data) {
        const mapped = data.map((item: any) => {
          const image = Array.isArray(item.product_images) ? item.product_images[0] : null;
          const url =
            image?.url && image.url.startsWith("http")
              ? image.url
              : image?.url
                ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/product-images/${image.url.replace(/^\/+/, "")}`
                : null;
          return {
            id: item.id,
            name: item.name,
            moq: item.moq ?? null,
            image: url
          };
        });
        setProducts(mapped);
      }
    };

    loadProducts();
  }, []);

  useEffect(() => {
    const googleKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_KEY;
    if (!googleKey) {
      return;
    }
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${googleKey}&libraries=places`;
    script.async = true;
    script.onload = () => {
      const input = document.getElementById("address") as HTMLInputElement | null;
      const googleApi = (window as any).google;
      if (!input || !googleApi?.maps?.places) return;
      const autocomplete = new googleApi.maps.places.Autocomplete(input, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        if (place?.formatted_address) {
          handleChange("address", place.formatted_address);
        }
      });
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (!submitted || !animationRef.current) {
      return;
    }
    let animation: any;
    let isMounted = true;

    const startAnimation = () => {
      const lottie = (window as any).lottie;
      if (!lottie || !animationRef.current) return;
      animation = lottie.loadAnimation({
        container: animationRef.current,
        renderer: "svg",
        loop: false,
        autoplay: true,
        path: "/lottie/message-sent.json"
      });
      animation.addEventListener("complete", () => {
        if (isMounted) {
          setShowThankYou(true);
        }
      });
    };

    if (!(window as any).lottie) {
      const existingScript = document.querySelector<HTMLScriptElement>(
        "script[data-lottie-player]"
      );
      if (existingScript) {
        existingScript.addEventListener("load", startAnimation, { once: true });
      } else {
        const script = document.createElement("script");
        script.src = "https://unpkg.com/lottie-web@5.12.2/build/player/lottie.min.js";
        script.async = true;
        script.dataset.lottiePlayer = "true";
        script.addEventListener("load", startAnimation, { once: true });
        document.body.appendChild(script);
      }
    } else {
      startAnimation();
    }

    return () => {
      isMounted = false;
      if (animation && animation.destroy) {
        animation.destroy();
      }
    };
  }, [submitted]);

  useEffect(() => {
    if (!showThankYou) {
      return;
    }
    const timer = window.setTimeout(() => {
      window.location.href = "/";
    }, 2000);
    return () => window.clearTimeout(timer);
  }, [showThankYou]);

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return products;
    return products.filter((product) => product.name.toLowerCase().includes(query));
  }, [products, search]);

  const toggleProduct = (product: { id: string; name: string; moq: number | null }) => {
    setForm((prev) => {
      const exists = prev.productSelections.some((item) => item.id === product.id);
      if (exists) {
        const nextSelections = prev.productSelections.filter((item) => item.id !== product.id);
        const nextQuantities = { ...prev.quantities };
        delete nextQuantities[product.id];
        return { ...prev, productSelections: nextSelections, quantities: nextQuantities };
      }
      return {
        ...prev,
        productSelections: [...prev.productSelections, product]
      };
    });
  };

  const removeProduct = (productId: string) => {
    setForm((prev) => {
      const nextSelections = prev.productSelections.filter((item) => item.id !== productId);
      const nextQuantities = { ...prev.quantities };
      delete nextQuantities[productId];
      return { ...prev, productSelections: nextSelections, quantities: nextQuantities };
    });
  };

  const updateQuantity = (productId: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      quantities: { ...prev.quantities, [productId]: value }
    }));
  };

  const isInstagram = form.contactMethod === "Instagram";

  return (
    <section className={styles.page}>
      <div className={`container ${styles.layout}`}>
        <div className={styles.copy}>
          <h1>Request a quote.</h1>
          <div className={styles.trustRow}>
            <span>Proof before print</span>
            <span>Reorder-ready</span>
          </div>
          <p className={styles.oneLineNote}>
            Our team responds within 24 hours with a supplier-ready quote.
          </p>
        </div>
        {submitted ? (
          <div className={styles.thankYou} role="status" aria-live="polite">
            <div ref={animationRef} className={styles.thankYouAnimation}></div>
            {showThankYou ? (
              <p className={styles.thankYouMessage}>
                Thank you, a team member will contact you!
              </p>
            ) : null}
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.stepHeader}>
            <div>
              <p className={styles.stepEyebrow}>
                Step {step + 1} of {steps.length}
              </p>
              <h2>{steps[step].title}</h2>
              <p className={styles.stepDescription}>{steps[step].description}</p>
            </div>
            <div className={styles.stepper} aria-hidden="true">
              {steps.map((item, index) => (
                <span
                  key={item.title}
                  className={`${styles.stepDot} ${index <= step ? styles.stepDotActive : ""}`}
                ></span>
              ))}
            </div>
          </div>

          {step === 0 ? (
            <>
              <div className={styles.formRow}>
                <label>
                  Name *
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(event) => handleChange("name", event.target.value)}
                  />
                </label>
                <label>
                  Work email *
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(event) => handleChange("email", event.target.value)}
                  />
                </label>
              </div>
              <div className={styles.formRow}>
                <label>
                  Phone number
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(event) => handleChange("phone", formatPhone(event.target.value))}
                  />
                </label>
                <label>
                  Language
                  <select
                    value={form.language}
                    onChange={(event) => handleChange("language", event.target.value)}
                  >
                    <option value="">Select language</option>
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                    <option value="Arabic">Arabic</option>
                  </select>
                </label>
              </div>
              <label className={styles.fullWidth}>
                Shipping address
                <input
                  id="address"
                  type="text"
                  placeholder="Start typing your address"
                  value={form.address}
                  onChange={(event) => handleChange("address", event.target.value)}
                />
                {!process.env.NEXT_PUBLIC_GOOGLE_PLACES_KEY ? (
                  <span className={styles.helperText}>
                    Add `NEXT_PUBLIC_GOOGLE_PLACES_KEY` to enable address autocomplete.
                  </span>
                ) : null}
              </label>
              <div className={styles.formRow}>
                <label>
                  Preferred contact method
                  <select
                    value={form.contactMethod}
                    onChange={(event) => handleChange("contactMethod", event.target.value)}
                  >
                    <option value="">Select method</option>
                    <option value="Email">Email</option>
                    <option value="Text">Text</option>
                    <option value="WhatsApp">WhatsApp</option>
                    <option value="Instagram">Instagram</option>
                  </select>
                </label>
                {isInstagram ? (
                  <label>
                    Instagram username
                    <input
                      type="text"
                      placeholder="@yourhandle"
                      value={form.instagramHandle}
                      onChange={(event) => handleChange("instagramHandle", event.target.value)}
                    />
                  </label>
                ) : null}
              </div>
            </>
          ) : null}

          {step === 1 ? (
            <>
              <div className={styles.productsLayout}>
                <div className={styles.productsColumn}>
                  <label className={styles.fullWidth}>
                    Search products
                    <input
                      type="search"
                      placeholder="Search by product name"
                      value={search}
                      onChange={(event) => setSearch(event.target.value)}
                    />
                  </label>
                  {search.trim() ? (
                    <div className={styles.productList}>
                      {filteredProducts.map((product) => {
                        const selected = form.productSelections.some(
                          (item) => item.id === product.id
                        );
                        return (
                          <label
                            key={product.id}
                            className={`${styles.productRow} ${
                              selected ? styles.productRowActive : ""
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={selected}
                              onChange={() => toggleProduct(product)}
                            />
                            <div className={styles.productThumb}>
                              {product.image ? (
                                <img src={product.image} alt={product.name} />
                              ) : (
                                <div className={styles.imagePlaceholder}></div>
                              )}
                            </div>
                            <div className={styles.productMeta}>
                              <span className={styles.productName}>{product.name}</span>
                              <span className={styles.productMoq}>
                                {product.moq ? `MOQ ${product.moq}` : "No MOQ"}
                              </span>
                            </div>
                          </label>
                        );
                      })}
                    </div>
                  ) : null}
                  <div className={styles.formRow}>
                    <label>
                      Upload logo file
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(event) =>
                          setLogoFile(event.target.files?.[0] ?? null)
                        }
                      />
                    </label>
                    <label>
                      Logo color
                      <input
                        type="text"
                        placeholder="Black, white, Pantone 186"
                        value={form.logoColor}
                        onChange={(event) => handleChange("logoColor", event.target.value)}
                      />
                    </label>
                  </div>
                  <label className={styles.fullWidth}>
                    Project details
                    <textarea
                      rows={5}
                      value={form.message}
                      onChange={(event) => handleChange("message", event.target.value)}
                    ></textarea>
                  </label>
                </div>
                <div className={styles.productsColumn}>
                  <div className={styles.selectionPanel}>
                    <h3>Selected products</h3>
                    {form.productSelections.length ? (
                      <div className={styles.selectionList}>
                        {form.productSelections.map((product) => {
                          const image = products.find((item) => item.id === product.id)
                            ?.image;
                          return (
                            <div key={product.id} className={styles.selectionItem}>
                              <div className={styles.selectionMedia}>
                                {image ? (
                                  <img src={image} alt={product.name} />
                                ) : (
                                  <div className={styles.imagePlaceholder}></div>
                                )}
                              </div>
                            <div className={styles.selectionInfo}>
                              <p>{product.name}</p>
                              <span>
                                {product.moq ? `MOQ ${product.moq}` : "No MOQ listed"}
                              </span>
                            </div>
                            <input
                              type="number"
                              min={product.moq ?? 1}
                              value={form.quantities[product.id] ?? ""}
                              placeholder="Quantity"
                              onChange={(event) =>
                                updateQuantity(product.id, event.target.value)
                              }
                            />
                            <button
                              className={styles.removeButton}
                              type="button"
                              onClick={() => removeProduct(product.id)}
                            >
                              Remove
                            </button>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <p className={styles.empty}>No products selected yet.</p>
                    )}
                  </div>
                </div>
              </div>
            </>
          ) : null}

          <div className={styles.formActions}>
            <button
              className="btn btn-secondary"
              type="button"
              onClick={handleBack}
              disabled={step === 0}
            >
              Back
            </button>
            {step < steps.length - 1 ? (
              <button className="btn btn-primary" type="button" onClick={handleNext}>
                Continue
              </button>
            ) : (
          <button className="btn btn-primary" type="submit" disabled={submitting}>
            {submitting ? "Sending..." : "Request a Quote"}
          </button>
            )}
          </div>

          <p className={styles.formNote} role="status" aria-live="polite">
            {status}
          </p>
          </form>
        )}
      </div>
    </section>
  );
}
