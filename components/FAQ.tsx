import styles from "./FAQ.module.css";

const items = [
  {
    summary: "What is your typical turnaround?",
    text: "Most standard orders ship in 7–10 business days after proof approval."
  },
  {
    summary: "Do you have minimum order quantities?",
    text: "Yes. Minimums vary by item, but we keep them realistic for multi-location operators."
  },
  {
    summary: "What artwork files do you need?",
    text: "Vector files are preferred. We can work with high-resolution PDFs or AI files."
  },
  {
    summary: "Do you require deposits?",
    text: "We collect a deposit for first-time orders, with net terms available after onboarding."
  },
  {
    summary: "Do you deliver or allow pickup?",
    text: "Nationwide shipping is available, with select local pickup options by region."
  },
  {
    summary: "How do reorders work?",
    text: "We save specs, proofs, and color references so reorders are one click."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className={styles.faq} aria-labelledby="faq-title">
      <div className="container">
        <div className="section-header">
          <p className="section-label">FAQ</p>
          <h2 id="faq-title">Questions, answered.</h2>
        </div>
        <div className={styles.faqList} data-reveal>
          {items.map((item) => (
            <details key={item.summary} className={styles.faqItem}>
              <summary>{item.summary}</summary>
              <div className={styles.faqContent}>
                <p>{item.text}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
