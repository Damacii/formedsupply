"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Reviews.module.css";

const reviews = [
  {
    id: 1,
    text: "“Clean proofing process and fast turnaround. Our cafes stay stocked without chasing vendors.”",
    name: "Ops Director, Urban Bean"
  },
  {
    id: 2,
    text: "“We consolidated menus, labels, and cups into one supplier. Reorders are painless.”",
    name: "GM, Riverline Kitchen"
  },
  {
    id: 3,
    text: "“Formed understood our brand standards and matched color across every location.”",
    name: "Founder, Harbor Roasters"
  },
  {
    id: 4,
    text: "“We needed last-minute signage for a launch. They got it done with proof approval in hours.”",
    name: "Marketing, Slate Cafe"
  }
];

export default function Reviews() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[index] as HTMLElement | undefined;
    if (!card) return;
    track.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
  };

  const updateActiveIndex = () => {
    const track = trackRef.current;
    if (!track) return;
    const scrollLeft = track.scrollLeft;
    let closestIndex = 0;
    let minDistance = Infinity;

    Array.from(track.children).forEach((child, index) => {
      const distance = Math.abs((child as HTMLElement).offsetLeft - scrollLeft);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let rafId: number | null = null;

    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        updateActiveIndex();
        rafId = null;
      });
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    updateActiveIndex();

    return () => {
      track.removeEventListener("scroll", onScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section id="reviews" className={styles.reviews} aria-labelledby="reviews-title">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Reviews</p>
          <h2 id="reviews-title">Loved by operators.</h2>
        </div>
        <div
          className={styles.carousel}
          data-reveal
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              scrollToIndex(Math.max(0, activeIndex - 1));
            }
            if (event.key === "ArrowRight") {
              event.preventDefault();
              scrollToIndex(Math.min(reviews.length - 1, activeIndex + 1));
            }
          }}
        >
          <button
            className={styles.carouselBtn}
            type="button"
            aria-label="Previous review"
            onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
          >
            ←
          </button>
          <div className={styles.carouselTrack} ref={trackRef} data-carousel-track>
            {reviews.map((review) => (
              <article className={styles.reviewCard} aria-label={`Review ${review.id}`} key={review.id}>
                <div className={styles.stars} aria-hidden="true">
                  ★★★★★
                </div>
                <p>{review.text}</p>
                <div className={styles.reviewFooter}>
                  <span className={styles.reviewer}>{review.name}</span>
                  <span className={styles.reviewSource}>
                    <GoogleIcon />
                    Google
                  </span>
                </div>
              </article>
            ))}
          </div>
          <button
            className={styles.carouselBtn}
            type="button"
            aria-label="Next review"
            onClick={() => scrollToIndex(Math.min(reviews.length - 1, activeIndex + 1))}
          >
            →
          </button>
        </div>
        <div className={styles.carouselDots} role="tablist" aria-label="Review navigation">
          {reviews.map((review, index) => (
            <button
              key={review.id}
              type="button"
              aria-label={`Go to review ${index + 1}`}
              aria-current={activeIndex === index}
              onClick={() => scrollToIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function GoogleIcon() {
  return (
    <svg className={styles.googleMark} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#EA4335"
        d="M12 10.2v3.8h5.3c-.2 1.4-1.6 4.1-5.3 4.1-3.2 0-5.8-2.6-5.8-5.9S8.8 6.3 12 6.3c1.8 0 3 .7 3.7 1.4l2.5-2.4C16.7 3.8 14.6 3 12 3 7.6 3 4 6.6 4 10.9S7.6 18.8 12 18.8c4.8 0 7.9-3.4 7.9-8 0-.5-.1-.9-.1-1.3H12z"
      />
      <path
        fill="#34A853"
        d="M6.9 14.4l-.9 3.4C7.7 19.2 9.7 20 12 20c2.3 0 4.2-.8 5.6-2.1l-2.8-2.1c-.8.5-1.8.8-2.8.8-2.2 0-4.1-1.5-4.8-3.5l-1.7 1.3z"
      />
      <path
        fill="#FBBC05"
        d="M6.3 10.9c0-.7.1-1.4.3-2L4.9 7.6C4.3 8.8 4 9.8 4 10.9s.3 2.1.9 3.3l1.7-1.3c-.2-.6-.3-1.3-.3-2z"
      />
      <path
        fill="#4285F4"
        d="M20 10.9c0-.4-.1-.9-.2-1.3H12v3.8h5.3c-.2 1.1-.9 2.1-1.9 2.8l2.8 2.1c1.7-1.5 2.8-3.7 2.8-6.4z"
      />
    </svg>
  );
}
