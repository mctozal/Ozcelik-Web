import Image from "next/image";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-secondary/40 bg-bg py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <Image
            src="/logo.png"
            alt="Özçelik Branda"
            width={280}
            height={80}
            className="h-8 w-auto"
          />
          <p className="mt-3 font-[family-name:var(--font-body)] text-sm text-text/70">
            Dayanıklılığın Dokusu, Üretimin Gücü.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-[family-name:var(--font-body)] text-sm text-text/70">
          <a href="#hakkimizda" className="hover:text-primary">
            Hakkımızda
          </a>
          <a href="#urunlerimiz" className="hover:text-primary">
            Ürünlerimiz
          </a>
          <a href="#galeri" className="hover:text-primary">
            Galeri
          </a>
          <a href="#iletisim" className="hover:text-primary">
            İletişim
          </a>
          <span className="text-text/40">|</span>
          <span>© {year} Özçelik Branda</span>
        </div>
      </div>
    </footer>
  );
}
