import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Eyebrow } from "../components/Eyebrow";
import { GalleryGrid } from "../components/GalleryGrid";
import { gallerySections, galleryPhotos } from "../lib/gallery-photos";

export const metadata: Metadata = {
  title: "Galeri — Özçelik Branda",
  description:
    "Özçelik Branda atölyesinden, Living Canvas akrilik koleksiyonundan ve ATS renk kartelasından geniş seçki. Fotoğraflar büyütülebilir ve kaydırılabilir.",
};

export default function GaleriPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-bg pb-20 md:pb-28">
        <section className="border-b border-secondary/40 bg-bg pt-14 pb-12 md:pt-20 md:pb-16">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <Eyebrow>Galeri</Eyebrow>
            <div className="mt-3 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold leading-tight text-text md:text-5xl lg:text-6xl">
                Atölyeden ve
                <br />
                <span className="text-primary">sahadan kareler.</span>
              </h1>
              <Link
                href="/#galeri"
                className="font-[family-name:var(--font-body)] text-sm font-semibold text-primary transition-colors hover:text-primary/80"
              >
                ← Anasayfaya Dön
              </Link>
            </div>
            <p className="mt-6 max-w-2xl font-[family-name:var(--font-body)] text-base leading-relaxed text-text/70 md:text-lg">
              Toplam {galleryPhotos.length} kareyle Özçelik Branda&apos;nın
              atölye atmosferi, kumaş dokusu ve renk yelpazesi. Bir fotoğrafın
              üzerine tıklayarak büyütüp inceleyebilir, ok tuşları veya kaydırma
              ile gezinebilirsiniz.
            </p>

            <nav className="mt-8 flex flex-wrap gap-3" aria-label="Galeri bölümleri">
              {gallerySections.map((section) => (
                <a
                  key={section.slug}
                  href={`#${section.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-text/20 bg-bg px-4 py-2 font-[family-name:var(--font-body)] text-sm font-semibold text-text transition-colors hover:border-primary hover:text-primary"
                >
                  {section.title}
                  <span className="font-[family-name:var(--font-accent)] text-[10px] uppercase tracking-[0.18em] text-text/50">
                    {section.photos.length}
                  </span>
                </a>
              ))}
            </nav>
          </div>
        </section>

        {gallerySections.map((section) => (
          <section
            key={section.slug}
            id={section.slug}
            className="scroll-mt-24 pt-16 md:pt-20"
          >
            <div className="mx-auto max-w-7xl px-4 md:px-8">
              <div className="mb-8 flex flex-col gap-2 md:mb-10 md:flex-row md:items-end md:justify-between">
                <div className="max-w-2xl">
                  <Eyebrow>{section.title}</Eyebrow>
                  <h2 className="mt-3 font-[family-name:var(--font-heading)] text-2xl font-bold text-text md:text-3xl lg:text-4xl">
                    {section.title}
                  </h2>
                  <p className="mt-3 font-[family-name:var(--font-body)] text-sm leading-relaxed text-text/70 md:text-base">
                    {section.description}
                  </p>
                </div>
                <span className="font-[family-name:var(--font-accent)] text-xs uppercase tracking-[0.18em] text-text/50">
                  {section.photos.length} kare
                </span>
              </div>
              <GalleryGrid photos={[...section.photos]} />
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}
