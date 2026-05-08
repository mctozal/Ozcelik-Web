"use client";

import { useRef } from "react";

export type Review = {
  author: string;
  date: string;
  rating: number;
  body: string;
};

function Stars({ rating }: { rating: number }) {
  return (
    <div
      aria-label={`${rating} / 5 yıldız`}
      className="flex items-center gap-0.5 font-[family-name:var(--font-heading)] text-lg leading-none"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          aria-hidden
          className={i < rating ? "text-primary" : "text-text/15"}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="flex h-full flex-col bg-bg p-6 ring-1 ring-secondary/40 md:p-7">
      <Stars rating={review.rating} />
      <blockquote className="mt-4 flex-1 font-[family-name:var(--font-body)] text-base leading-relaxed text-text/85">
        &ldquo;{review.body}&rdquo;
      </blockquote>
      <footer className="mt-6 flex items-center justify-between border-t border-secondary/30 pt-4">
        <div>
          <div className="font-[family-name:var(--font-heading)] text-sm font-semibold text-text">
            {review.author}
          </div>
          <div className="font-[family-name:var(--font-accent)] text-[10px] uppercase tracking-[0.18em] text-text/50">
            {review.date}
          </div>
        </div>
        <span className="font-[family-name:var(--font-accent)] text-[10px] uppercase tracking-[0.18em] text-text/50">
          Google Haritalar
        </span>
      </footer>
    </article>
  );
}

export function ReviewSlider({ reviews }: { reviews: Review[] }) {
  const trackRef = useRef<HTMLUListElement>(null);

  const scroll = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("li");
    if (!card) return;
    const gap = parseFloat(window.getComputedStyle(track).columnGap || "0");
    track.scrollBy({
      left: direction * (card.clientWidth + gap),
      behavior: "smooth",
    });
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLUListElement> = (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      scroll(1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      scroll(-1);
    }
  };

  return (
    <div className="relative">
      <ul
        ref={trackRef}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        aria-label="Müşteri yorumları"
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 outline-none [-ms-overflow-style:none] [scrollbar-width:none] focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-secondary/15 [&::-webkit-scrollbar]:hidden"
      >
        {reviews.map((review, i) => (
          <li
            key={i}
            className="flex snap-start shrink-0 basis-full md:basis-[calc((100%-1.5rem)/2)] lg:basis-[calc((100%-3rem)/3)]"
          >
            <ReviewCard review={review} />
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center justify-end gap-3">
        <button
          type="button"
          onClick={() => scroll(-1)}
          aria-label="Önceki yorum"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-text/20 bg-bg text-text transition-all hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-secondary/15"
        >
          <span aria-hidden className="text-xl leading-none">
            ←
          </span>
        </button>
        <button
          type="button"
          onClick={() => scroll(1)}
          aria-label="Sonraki yorum"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-text/20 bg-bg text-text transition-all hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-secondary/15"
        >
          <span aria-hidden className="text-xl leading-none">
            →
          </span>
        </button>
      </div>
    </div>
  );
}
