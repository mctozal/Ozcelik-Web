import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "#hakkimizda", label: "Hakkımızda" },
  { href: "#urunlerimiz", label: "Ürünlerimiz" },
  { href: "#galeri", label: "Galeri" },
  { href: "#iletisim", label: "İletişim" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-secondary/30 bg-bg/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-8">
        <Link href="/" aria-label="Özçelik Branda — Ana Sayfa" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Özçelik Branda"
            width={280}
            height={80}
            priority
            className="h-7 w-auto md:h-9"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-[family-name:var(--font-body)] text-sm font-semibold text-text transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#iletisim"
          className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 font-[family-name:var(--font-body)] text-sm font-semibold text-bg transition-colors hover:bg-primary/90 md:px-5 md:py-2.5"
        >
          Teklif Al
        </a>
      </div>
    </header>
  );
}
