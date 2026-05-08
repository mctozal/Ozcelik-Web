import Image from "next/image";
import { Eyebrow } from "./Eyebrow";

const milestones = [
  {
    year: "1970",
    title: "Malatya'da kuruluş",
    body: "Kurucumuz Turan Özçelik tarafından, dürüst ve disiplinli çalışma ilkesiyle kuruldu.",
  },
  {
    year: "1978",
    title: "İstanbul şubesi",
    body: "İstanbul'a açılan şubemiz kısa sürede merkez büro hâline geldi.",
  },
  {
    year: "Bugün",
    title: "Yüksek tonajlı üretim",
    body: "Türkiye geneline ve bölge pazarlarına yüksek adetli imalat ve satış sürdürülüyor.",
  },
];

export function About() {
  return (
    <section id="hakkimizda" className="relative bg-bg py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg ring-1 ring-secondary/40">
              <Image
                src="/photos/about.jpg"
                alt="Özçelik Branda — kumaş ve üretim dokusu"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-text/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="font-[family-name:var(--font-accent)] text-[10px] uppercase tracking-[0.18em] text-bg/80">
                  Est. 1970 — Malatya / İstanbul
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Eyebrow>Hakkımızda</Eyebrow>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold leading-tight text-text md:text-4xl lg:text-5xl">
              Yarım asırdır üreticinin
              <br />
              <span className="text-primary">güvenilir tedarik ortağı.</span>
            </h2>
            <div className="mt-6 space-y-5 font-[family-name:var(--font-body)] text-base leading-relaxed text-text/80 md:text-lg">
              <p>
                1970 yılında kurucumuz{" "}
                <strong className="text-text">Turan Özçelik</strong> tarafından
                Malatya&apos;da kurulan firmamız, kısa zaman içerisinde dürüst
                ve disiplinli çalışmasının neticesini alarak büyüme ve yükselişe
                geçmiştir.
              </p>
              <p>
                1978 yılında İstanbul&apos;a açılan şubemiz bir süre sonra
                merkez büro hâline dönüşmüş; Türkiye geneline ve İstanbul&apos;a
                yüksek tonaj ve adetlerde imalat ve satış yapmaya başlamıştır.
              </p>
              <p>
                Bugün branda, tente, şemsiye, minder ve çanta üreticileri için
                tek noktadan teknik tekstil çözümleri sunuyor; Türkiye,
                Bulgaristan, Yunanistan ve Irak pazarlarına güvenilir tedarik
                sağlıyoruz.
              </p>
            </div>

            <ol className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-4">
              {milestones.map((m) => (
                <li key={m.year} className="border-t-2 border-accent pt-4">
                  <span className="font-[family-name:var(--font-accent)] text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    {m.year}
                  </span>
                  <h3 className="mt-2 font-[family-name:var(--font-heading)] text-lg font-semibold text-text">
                    {m.title}
                  </h3>
                  <p className="mt-2 font-[family-name:var(--font-body)] text-sm leading-relaxed text-text/70">
                    {m.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
