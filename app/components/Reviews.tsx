import { Eyebrow } from "./Eyebrow";
import { ReviewSlider, type Review } from "./ReviewSlider";

const placeQuery = encodeURIComponent(
  "Özçelik Branda Tekstil Mollahüsrev Cemal Yener Tosyalı Cd 15 Fatih İstanbul",
);
const reviewsLink = `https://www.google.com/maps/search/?api=1&query=${placeQuery}`;

const reviews: Review[] = [
  {
    author: "Belma Nur Kartal",
    date: "1 yıl önce",
    rating: 5,
    body:
      "Tek kişilik fabrika 'Zula Atölyesi' olarak Özçelik Tekstil'le büyük bir şans eseri bir İstanbul yolculuğumda bu yaz tanıştım. Kapısından girdiğiniz anda, sadece kumaşların kalitesi, renk çeşitliliği ve fiyat performansı ile değil tüm…",
  },
  {
    author: "Dodo Handmade",
    date: "4 yıl önce",
    rating: 5,
    body:
      "Tasarlayıp ürettiğim ürünleri yurt dışında satıyorum. Amerikalılar, Avrupalılar tasarımlarımın yanı sıra özellikle kumaş kalitesini çok beğeniyorlar. Bütün mumlu kanvas kumaşlarım Özçelik'ten. Özçelik bence zor bir işi fazlasıyla başarıyor.",
  },
  {
    author: "elf yıldız",
    date: "11 ay önce",
    rating: 5,
    body:
      "Kumaşlarım elime ulaştı ve gerçekten beklentimin çok üzerinde bir kaliteyle karşılaştım. Dokular ve renkler hem görsel olarak hem de dokunuşta üst düzey kalitede. Sadece ürünlerle değil, aynı zamanda süreç boyunca gösterilen müşteri…",
  },
  {
    author: "Aysegül Obudak",
    date: "2 yıl önce",
    rating: 5,
    body:
      "Kumaş kalitesi şahane. Müşteri ilişkileri çok başarılı. Her sezon kumaş almaya gittiğimde çok yardımcı oluyorlar. Mumlu kanvasların kalitesini tek geçerim. En güzeli, en kalitelisi her zaman burada.",
  },
  {
    author: "Eren Çoban",
    date: "1 yıl önce",
    rating: 5,
    body:
      "Özçelik Branda'da çanta, şapka, minder ya da daha başka bir çok ürün üretebileceğiniz harika kumaşları sadece görmek ve onlara dokunmakla kalmıyorsunuz, Selim Bey ve diğer sohbetşinas arkadaşlardan hikayelerini de dinliyorsunuz.",
  },
  {
    author: "Kübra T.",
    date: "2 yıl önce",
    rating: 5,
    body:
      "Selim Bey, iş tecrübesiyle küçük/büyük tüm üreticilere yardımcı oluyor. Kumaşların nasıl işleneceğinden, ürüne dönüşünce nelere dikkat edilmesi gerektiğine kadar her türlü bilgiyi aktarıyor. Kumaş kalitesine zaten diyecek bir şey yok.",
  },
  {
    author: "Rumeysa Koç",
    date: "2 yıl önce",
    rating: 5,
    body:
      "Selim Bey ile tanıştığım için çok memnunum. Müşterisinin aklında soru işareti kalmasına asla müsade etmiyor. Numune olarak gönderdiği parçaları başka bir satıcıda bulabileceğime emin değilim, beklediğimden de hızlı gönderim sağladı.",
  },
  {
    author: "Gözde Akgüç",
    date: "2 yıl önce",
    rating: 5,
    body:
      "Kumaşları aldığım firma. Birçok yer denedim hem iletişim hem ürün olarak çok iyiler. Küçük müşteri, büyük müşteri ayrımı yapmadan yardımcı oluyorlar, bu çok önemli. Kumaşlar çok kaliteli.",
  },
  {
    author: "Nurdan Şener Maggi",
    date: "2 yıl önce",
    rating: 5,
    body:
      "Nuggita ailesi olarak övgüler aldığımız çantalarımızın kumaşlarının üreticisi olan harika firmayı herkese tavsiye ederiz. İyi ki varsınız.",
  },
];

export function Reviews() {
  return (
    <section className="relative bg-secondary/15 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 items-end gap-8 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7">
            <Eyebrow>Google Haritalar Yorumları</Eyebrow>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-4xl font-bold leading-tight text-text md:text-5xl lg:text-6xl">
              Mükemmel.
            </h2>
            <p className="mt-5 max-w-xl font-[family-name:var(--font-body)] text-base leading-relaxed text-text/70 md:text-lg">
              Müşterilerimizin kalitemize ve hizmetimize verdiği geri bildirimler,
              55 yıllık emeğimizin en güvenilir referansıdır.
            </p>
          </div>

          <div className="md:col-span-5">
            <div className="flex items-center gap-5 rounded-lg border border-secondary/60 bg-bg p-5">
              <div className="font-[family-name:var(--font-heading)] text-5xl font-bold text-primary">
                5.0
              </div>
              <div className="flex-1">
                <div
                  aria-label="5 / 5 yıldız"
                  className="flex items-center gap-0.5 font-[family-name:var(--font-heading)] text-lg leading-none text-primary"
                >
                  <span aria-hidden>★★★★★</span>
                </div>
                <div className="mt-1 font-[family-name:var(--font-body)] text-sm text-text/70">
                  94 değerlendirme
                </div>
                <div className="mt-1 font-[family-name:var(--font-accent)] text-[10px] uppercase tracking-[0.18em] text-text/50">
                  Google Haritalar
                </div>
              </div>
            </div>
            <a
              href={reviewsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block font-[family-name:var(--font-body)] text-sm font-semibold text-primary transition-colors hover:text-primary/80"
            >
              Tüm yorumları Google Haritalar&apos;da gör →
            </a>
          </div>
        </div>

        <div className="mt-12 md:mt-16">
          <ReviewSlider reviews={reviews} />
        </div>
      </div>
    </section>
  );
}
