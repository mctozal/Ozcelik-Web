"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { GalleryPhoto } from "../lib/gallery-photos";

const SWIPE_THRESHOLD = 50;

export function GalleryGrid({ photos }: { photos: GalleryPhoto[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const open = useCallback((i: number) => setActiveIndex(i), []);
  const close = useCallback(() => setActiveIndex(null), []);

  const next = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : (current + 1) % photos.length,
    );
  }, [photos.length]);

  const prev = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : (current - 1 + photos.length) % photos.length,
    );
  }, [photos.length]);

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };

    document.addEventListener("keydown", handleKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeIndex, close, next, prev]);

  const handleTouchStart: React.TouchEventHandler = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd: React.TouchEventHandler = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > SWIPE_THRESHOLD) prev();
    else if (delta < -SWIPE_THRESHOLD) next();
    touchStartX.current = null;
  };

  const active = activeIndex !== null ? photos[activeIndex] : null;

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
        {photos.map((photo, i) => (
          <li
            key={photo.src}
            className={photo.featured ? "col-span-2" : ""}
          >
            <button
              type="button"
              onClick={() => open(i)}
              aria-label={`${photo.alt} — büyük göster`}
              className={`group relative block w-full overflow-hidden rounded-lg ring-1 ring-secondary/40 transition-shadow hover:ring-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${
                photo.featured
                  ? "aspect-[3/2] md:aspect-[16/10]"
                  : "aspect-[4/5]"
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={
                  photo.featured
                    ? "(min-width: 1024px) 50vw, (min-width: 768px) 67vw, 100vw"
                    : "(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                }
                loading={i < 4 ? "eager" : "lazy"}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </button>
          </li>
        ))}
      </ul>

      {active && activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Galeri görüntüleyici"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-text/95"
          onClick={close}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            aria-label="Kapat"
            className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-bg/30 bg-text/40 text-bg transition-colors hover:border-bg hover:bg-text/60 md:right-6 md:top-6"
          >
            <span aria-hidden className="text-xl leading-none">
              ×
            </span>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Önceki fotoğraf"
            className="absolute left-2 top-1/2 z-10 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-bg/30 bg-text/40 text-bg transition-colors hover:border-bg hover:bg-text/60 md:left-6 md:h-14 md:w-14"
          >
            <span aria-hidden className="text-2xl leading-none">
              ←
            </span>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Sonraki fotoğraf"
            className="absolute right-2 top-1/2 z-10 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-bg/30 bg-text/40 text-bg transition-colors hover:border-bg hover:bg-text/60 md:right-6 md:h-14 md:w-14"
          >
            <span aria-hidden className="text-2xl leading-none">
              →
            </span>
          </button>

          <div
            className="relative h-full max-h-[88vh] w-full max-w-[92vw] md:max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              key={active.src}
              src={active.src}
              alt={active.alt}
              fill
              sizes="92vw"
              priority
              className="object-contain"
            />
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-text/60 px-4 py-1.5 font-[family-name:var(--font-accent)] text-xs uppercase tracking-[0.18em] text-bg md:bottom-6">
            {activeIndex + 1} / {photos.length}
          </div>
        </div>
      )}
    </>
  );
}
