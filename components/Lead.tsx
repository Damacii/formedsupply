"use client";

import { useState } from "react";
import styles from "./Lead.module.css";

export default function Lead() {
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    product: "",
    quantity: "",
    message: ""
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("");
    setSubmitting(true);

    try {
      const response = await fetch("/api/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        throw new Error("Unable to submit request.");
      }

      setStatus("Thanks! We'll reach out within 24 hours with a quote.");
      setForm({
        name: "",
        email: "",
        company: "",
        phone: "",
        product: "",
        quantity: "",
        message: ""
      });
    } catch (error) {
      setStatus("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="lead" className={styles.lead}>
      <div className={`container ${styles.leadGrid}`}>
        <div className={styles.leadCopy} data-reveal>
          <p className="section-label">Lead capture</p>
          <h2>Request pricing + turnaround.</h2>
          <p>Tell us what you need and we’ll send a supplier-ready quote.</p>
        </div>
        <form className={styles.leadForm} aria-label="Request form" data-reveal onSubmit={handleSubmit}>
          <div className={styles.formRow}>
            <input
              type="text"
              placeholder="Name"
              required
              value={form.name}
              onChange={(event) => handleChange("name", event.target.value)}
            />
            <input
              type="email"
              placeholder="Work email"
              required
              value={form.email}
              onChange={(event) => handleChange("email", event.target.value)}
            />
          </div>
          <div className={styles.formRow}>
            <input
              type="text"
              placeholder="Company"
              value={form.company}
              onChange={(event) => handleChange("company", event.target.value)}
            />
            <input
              type="tel"
              placeholder="Phone"
              value={form.phone}
              onChange={(event) => handleChange("phone", event.target.value)}
            />
          </div>
          <div className={styles.formRow}>
            <input
              type="text"
              placeholder="Product interest"
              value={form.product}
              onChange={(event) => handleChange("product", event.target.value)}
            />
            <input
              type="text"
              placeholder="Estimated quantity"
              value={form.quantity}
              onChange={(event) => handleChange("quantity", event.target.value)}
            />
          </div>
          <textarea
            placeholder="Project details"
            rows={4}
            value={form.message}
            onChange={(event) => handleChange("message", event.target.value)}
          ></textarea>
          <button className="btn btn-primary" type="submit" disabled={submitting}>
            {submitting ? "Sending..." : "Request a Quote"}
          </button>
          <p className={styles.formNote} role="status" aria-live="polite">
            {status}
          </p>
        </form>
      </div>
    </section>
  );
}
