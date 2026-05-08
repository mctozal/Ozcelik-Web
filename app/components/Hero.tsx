import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-full bg-bg">
      <div className="relative h-[42vh] min-h-[260px] w-full overflow-hidden md:h-[50vh]">
        <Image
          src="/photos/hero.jpg"
          alt="Yakın çekim teknik kumaş dokusu"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="relative z-10 mx-auto -mt-40 max-w-7xl px-4 md:-mt-52 md:px-8 lg:-mt-64">
        <div className="max-w-3xl bg-bg p-8 ring-1 ring-secondary/40 md:p-12 lg:p-14">
          <span className="font-[family-name:var(--font-accent)] text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            1970&apos;ten beri Özçelik Branda
          </span>
          <h1 className="mt-5 font-[family-name:var(--font-heading)] text-4xl font-bold leading-[1.05] text-text md:text-5xl lg:text-6xl">
            Dayanıklılığın Dokusu,
            <br />
            <span className="text-primary">Üretimin Gücü.</span>
          </h1>
          <p className="mt-6 font-[family-name:var(--font-body)] text-base leading-relaxed text-text/75 md:text-lg">
            Branda, tente, şemsiye, minder ve çanta üreticileri için kanıtlanmış
            kalite. Geniş ürün yelpazemiz ve güçlü stok yapımızla üretim
            bandınız hiç durmaz.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#iletisim"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-[family-name:var(--font-body)] text-sm font-semibold text-bg transition-colors hover:bg-primary/90 md:text-base"
            >
              Teklif Al
            </a>
            <a
              href="#urunlerimiz"
              className="inline-flex items-center justify-center rounded-lg border border-text/30 bg-transparent px-6 py-3 font-[family-name:var(--font-body)] text-sm font-semibold text-text transition-colors hover:border-primary hover:text-primary md:text-base"
            >
              Ürünlerimizi Keşfet
            </a>
          </div>
        </div>

        <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-secondary/40 pt-10 pb-16 md:mt-16 md:grid-cols-4 md:gap-8 md:pb-24">
          {[
            { value: "55+", label: "Yıllık Tecrübe" },
            { value: "4", label: "Aktif Sevkiyat Ülkesi" },
            { value: "1970", label: "Malatya Kuruluş" },
            { value: "Aynı Gün", label: "Teklif Yanıtı" },
          ].map((s) => (
            <div key={s.label}>
              <dt className="font-[family-name:var(--font-accent)] text-[10px] uppercase tracking-[0.18em] text-text/60">
                {s.label}
              </dt>
              <dd className="mt-2 font-[family-name:var(--font-heading)] text-2xl font-bold text-primary md:text-3xl">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
