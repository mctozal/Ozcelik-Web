import Image from "next/image";
import { Eyebrow } from "./Eyebrow";

type Product = {
  slug: string;
  label: string;
  headline: string;
  body: string;
  badges: string[];
  imageSrc: string;
};

const products: Product[] = [
  {
    slug: "dis-mekan",
    label: "Dış Mekan",
    headline: "Zorlu hava şartlarına meydan okuyan kumaşlar.",
    body:
      "UV ışınlarına ve suya karşı %100 koruma. Branda, tente ve şemsiye üreticileri için ağır iş dokuları, geniş ebat seçenekleri.",
    badges: ["UV Korumalı", "%100 Su Geçirmez", "Geniş Ebat"],
    imageSrc: "/photos/dis-mekan.jpg",
  },
  {
    slug: "akrilik-kumas",
    label: "Akrilik Kumaş",
    headline: "Solmayan renklerle estetik ve dayanıklılık.",
    body:
      "Yüksek renk haslığı sunan akrilik dokumalar. Tente, şemsiye ve dış mekan mobilyaları için mimari uyum sağlayan onlarca desen.",
    badges: ["Renk Garantili", "Su İtici", "Premium Kalite"],
    imageSrc: "/photos/akrilik.jpg",
  },
  {
    slug: "koton",
    label: "Koton",
    headline: "Doğal tuşeli, çok yönlü pamuklu kumaşlar.",
    body:
      "Minder, çanta ve iç mekan tekstili için yumuşak ve nefes alan koton dokular. Zengin renk kartelası, kolay dikim sağlayan stabilite.",
    badges: ["Yumuşak Tuşe", "Nefes Alan Doku", "Geniş Kartela"],
    imageSrc: "/photos/koton.jpg",
  },
];

export function Products() {
  return (
    <section
      id="urunlerimiz"
      className="relative bg-bg py-20 md:py-28 lg:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/60 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Eyebrow>Ürünlerimiz</Eyebrow>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold leading-tight text-text md:text-4xl lg:text-5xl">
              Tek noktadan tüm
              <br />
              <span className="text-primary">tekstil çözümleri.</span>
            </h2>
            <p className="mt-5 font-[family-name:var(--font-body)] text-base leading-relaxed text-text/70 md:text-lg">
              Üreticiler için üç ana koleksiyon — dış mekan dayanıklılığından
              akrilik estetiğine, doğal kotondan teknik dokumalara kadar.
            </p>
          </div>
          <a
            href="#iletisim"
            className="font-[family-name:var(--font-body)] text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            Tedarik Başlat →
          </a>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
          {products.map((p) => (
            <li key={p.slug}>
              <article className="group flex h-full flex-col overflow-hidden rounded-lg bg-secondary/10 ring-1 ring-secondary/40 transition-all hover:ring-primary">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={p.imageSrc}
                    alt={`${p.label} kumaş dokusu`}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-text/60 to-transparent" />
                  <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                    {p.badges.slice(0, 2).map((b) => (
                      <span
                        key={b}
                        className="inline-flex items-center bg-accent px-2.5 py-1 font-[family-name:var(--font-accent)] text-[10px] font-semibold uppercase tracking-wider text-bg"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6 md:p-8">
                  <Eyebrow>{p.label}</Eyebrow>
                  <h3 className="mt-3 font-[family-name:var(--font-heading)] text-xl font-semibold leading-snug text-text md:text-2xl">
                    {p.headline}
                  </h3>
                  <p className="mt-4 flex-1 font-[family-name:var(--font-body)] text-sm leading-relaxed text-text/70 md:text-base">
                    {p.body}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {p.badges.map((b) => (
                      <li
                        key={b}
                        className="font-[family-name:var(--font-body)] text-xs text-text/60"
                      >
                        · {b}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 inline-block font-[family-name:var(--font-body)] text-sm font-semibold text-primary">
                    Numune İste →
                  </span>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
