export type GalleryPhoto = {
  src: string;
  alt: string;
  featured?: boolean;
};

const range = (n: number) =>
  Array.from({ length: n }, (_, i) => String(i + 1).padStart(2, "0"));

const SOCIAL_IDS = [
  "8858", "8859", "8861", "8862", "8863", "8864", "8865", "8866",
  "8867", "8868", "8869", "8870", "8871", "8872", "8873", "8874",
  "8875", "8876", "8877", "8878", "8879", "8880", "8881",
];

const socialPhotos: GalleryPhoto[] = SOCIAL_IDS.map((id) => ({
  src: `/photos/gallery/${id}.jpg`,
  alt: "Özçelik Branda atölye karesi",
}));

const atolyePhotos: GalleryPhoto[] = range(12).map((n) => ({
  src: `/photos/gallery/atolye/atolye-${n}.jpg`,
  alt: "Özçelik Branda atölye ve kumaş çekimi",
}));

const livingCanvasPhotos: GalleryPhoto[] = range(34).map((n) => ({
  src: `/photos/gallery/living-canvas/lc-${n}.jpg`,
  alt: "Living Canvas akrilik kumaş — renk ve doku",
}));

const koleksiyonPhotos: GalleryPhoto[] = range(40).map((n) => ({
  src: `/photos/gallery/koleksiyon/ats-${n}.jpg`,
  alt: "ATS akrilik kumaş — renk kartelası",
}));

export const gallerySections = [
  {
    slug: "atolye",
    title: "Atölye & Kompozisyon",
    description:
      "Üretim atölyemizden ve kumaşların doğal ışıkta ortaya çıkan dokusundan kareler.",
    photos: [...socialPhotos, ...atolyePhotos],
  },
  {
    slug: "living-canvas",
    title: "Living Canvas Koleksiyonu",
    description:
      "Akrilik dokuma serimizin geniş renk yelpazesinden seçkiler.",
    photos: livingCanvasPhotos,
  },
  {
    slug: "koleksiyon",
    title: "ATS Akrilik Kartelası",
    description:
      "ATS serisinin düz, ekose ve saten varyasyonlarıyla tüm renk kartelası.",
    photos: koleksiyonPhotos,
  },
] as const;

export const galleryPhotos: GalleryPhoto[] = gallerySections.flatMap(
  (s) => s.photos,
);

export const homepageGalleryPhotos: GalleryPhoto[] = [
  { src: "/photos/gallery/8881.jpg", alt: "Atölyeden geniş kare", featured: true },
  { src: "/photos/gallery/8859.jpg", alt: "Kumaş kompozisyonu" },
  { src: "/photos/gallery/8862.jpg", alt: "Doğal ışıkta kumaş dokusu" },
  { src: "/photos/gallery/8866.jpg", alt: "Renkli kumaş dizilişi" },
  { src: "/photos/gallery/8869.jpg", alt: "Kumaş yakın çekim" },
  { src: "/photos/gallery/8872.jpg", alt: "Kumaş örnek karesi" },
  { src: "/photos/gallery/8876.jpg", alt: "Kumaş kombinasyon detayı" },
];
