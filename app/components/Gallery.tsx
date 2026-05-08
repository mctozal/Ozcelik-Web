import Link from "next/link";
import { Eyebrow } from "./Eyebrow";
import { GalleryGrid } from "./GalleryGrid";
import { homepageGalleryPhotos } from "../lib/gallery-photos";

export function Gallery() {
  return (
    <section id="galeri" className="relative bg-bg py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Eyebrow>Galeri</Eyebrow>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold leading-tight text-text md:text-4xl lg:text-5xl">
              Atölyeden ve
              <br />
              <span className="text-primary">sahadan kareler.</span>
            </h2>
            <p className="mt-5 font-[family-name:var(--font-body)] text-base leading-relaxed text-text/70 md:text-lg">
              Kumaşlarımızın dokusu, rengi ve duruşu — üretim atölyemizden
              müşterilerimizin elinden çıkan ürünlere uzanan bir seçki.
            </p>
          </div>
          <Link
            href="/galeri"
            className="font-[family-name:var(--font-body)] text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            Tümünü Gör →
          </Link>
        </div>

        <div className="mt-12 md:mt-16">
          <GalleryGrid photos={homepageGalleryPhotos} />
        </div>

        <div className="mt-10 flex justify-center md:hidden">
          <Link
            href="/galeri"
            className="inline-flex items-center justify-center rounded-lg border border-text/30 bg-transparent px-6 py-3 font-[family-name:var(--font-body)] text-sm font-semibold text-text transition-colors hover:border-primary hover:text-primary"
          >
            Tüm Fotoğrafları Gör →
          </Link>
        </div>
      </div>
    </section>
  );
}
