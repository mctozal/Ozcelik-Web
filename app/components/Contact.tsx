import Image from "next/image";

const placeQuery = encodeURIComponent(
  "Molla Hüsrev Mah. Revani Çelebi Sok. No:18/A Fatih İstanbul",
);
const mapEmbedSrc = `https://www.google.com/maps?q=${placeQuery}&output=embed`;
const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${placeQuery}`;

const contactItems = [
  {
    label: "Telefon",
    value: "+90 212 823 34 67",
    href: "tel:+902128233467",
  },
  {
    label: "E-posta",
    value: "info@ozcelikbranda.com.tr",
    href: "mailto:info@ozcelikbranda.com.tr",
  },
  {
    label: "Adres",
    value:
      "Molla Hüsrev Mah. Revani Çelebi Sok. No:18/A\nFatih / İstanbul",
    href: directionsHref,
  },
];

export function Contact() {
  return (
    <section
      id="iletisim"
      className="relative overflow-hidden bg-text py-20 md:py-28 lg:py-32"
    >
      <Image
        src="/photos/cta.jpg"
        alt=""
        fill
        sizes="100vw"
        aria-hidden
        className="object-cover opacity-30 mix-blend-luminosity"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <span className="font-[family-name:var(--font-accent)] text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
              İletişim
            </span>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold leading-tight text-secondary md:text-4xl lg:text-5xl">
              Tedarik sürecinizi
              <br />
              <span className="text-secondary">birlikte planlayalım.</span>
            </h2>
            <p className="mt-5 max-w-lg font-[family-name:var(--font-body)] text-base leading-relaxed text-bg/80 md:text-lg">
              İhtiyacınızı paylaşın, satış ekibimiz aynı gün içinde dönüş
              yapsın. Numune talepleri ve toptan fiyat teklifleri için bize
              ulaşın.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="tel:+902128233467"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-[family-name:var(--font-body)] text-sm font-semibold text-bg transition-colors hover:bg-primary/90 md:text-base"
              >
                Hemen Arayın
              </a>
              <a
                href="mailto:info@ozcelikbranda.com.tr"
                className="inline-flex items-center justify-center rounded-lg border border-bg/40 bg-transparent px-6 py-3 font-[family-name:var(--font-body)] text-sm font-semibold text-bg transition-colors hover:bg-bg/10 md:text-base"
              >
                Numune İste
              </a>
            </div>
          </div>

          <ul className="space-y-6 lg:col-span-6">
            {contactItems.map((item) => (
              <li
                key={item.label}
                className="border-l-2 border-accent bg-bg/5 p-6 backdrop-blur-sm"
              >
                <a
                  href={item.href}
                  target={item.label === "Adres" ? "_blank" : undefined}
                  rel={
                    item.label === "Adres" ? "noopener noreferrer" : undefined
                  }
                  className="block transition-colors hover:text-secondary"
                >
                  <div className="font-[family-name:var(--font-accent)] text-[10px] font-semibold uppercase tracking-[0.18em] text-secondary">
                    {item.label}
                  </div>
                  <div className="mt-2 whitespace-pre-line font-[family-name:var(--font-heading)] text-lg font-semibold text-bg md:text-xl">
                    {item.value}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 md:mt-20">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <a
              href={directionsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="font-[family-name:var(--font-body)] text-sm font-semibold text-secondary transition-colors hover:text-bg"
            >
              Yol Tarifi Al →
            </a>
          </div>

          <div className="overflow-hidden rounded-lg ring-1 ring-bg/15">
            <iframe
              title="Özçelik Branda — Konum"
              src={mapEmbedSrc}
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full border-0 grayscale-[15%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
