# Reference Components — Özçelik Branda

Start from these patterns when building new components. They embody the design system — copy, adapt, don't reinvent. All examples assume the Tailwind config and `next/font` setup from `assets/`.

## Table of contents

1. [Button variants](#button-variants)
2. [Eyebrow / badge](#eyebrow--badge)
3. [Category hero](#category-hero)
4. [Five-up category grid](#five-up-category-grid)
5. [Fabric/product card](#fabricproduct-card)
6. [B2B quote form](#b2b-quote-form)

---

## Button variants

```tsx
// components/Button.tsx
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-primary text-bg hover:bg-primary/90 active:bg-primary/80 disabled:bg-primary/40',
  secondary:
    'bg-transparent text-primary border border-primary hover:bg-primary/5',
  ghost:
    'bg-transparent text-text hover:text-primary',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', className, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3',
        'font-body font-semibold text-sm md:text-base transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg',
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  ),
);
Button.displayName = 'Button';
```

**Usage:**

```tsx
<Button>Teklif Al</Button>
<Button variant="secondary">Kartelayı İncele</Button>
<Button variant="ghost">Detaylı Bilgi →</Button>
```

---

## Eyebrow / badge

```tsx
// components/Eyebrow.tsx
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-accent text-xs font-semibold uppercase tracking-[0.18em] text-accent">
      {children}
    </span>
  );
}

// components/Badge.tsx
export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center bg-accent px-2.5 py-1 font-accent text-xs font-semibold uppercase tracking-wider text-bg">
      {children}
    </span>
  );
}
```

**Usage:**

```tsx
<Eyebrow>Branda Kumaşları</Eyebrow>
<Badge>Yeni</Badge>
<Badge>UV 50+</Badge>
<Badge>Stoktan Teslim</Badge>
```

---

## Category hero

A full-bleed macro fabric photo with overlay copy from the bank. Use this as the top of every category page.

```tsx
// components/CategoryHero.tsx
import Image from 'next/image';
import { Button } from './Button';
import { Eyebrow } from './Eyebrow';

interface CategoryHeroProps {
  eyebrow: string;          // e.g. "Branda Kumaşları"
  headline: string;          // from copy bank
  subheading: string;        // from copy bank
  imageSrc: string;          // macro fabric photo
  imageAlt: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export function CategoryHero({
  eyebrow,
  headline,
  subheading,
  imageSrc,
  imageAlt,
  primaryCta,
  secondaryCta,
}: CategoryHeroProps) {
  return (
    <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-text/70 via-text/30 to-transparent" />
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-4 pb-16 md:px-8 md:pb-24">
        <div className="max-w-2xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-4 font-heading text-4xl font-bold leading-tight text-bg md:text-5xl lg:text-6xl">
            {headline}
          </h1>
          <p className="mt-6 font-body text-lg leading-relaxed text-bg/90">
            {subheading}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={primaryCta.href}>
              <Button>{primaryCta.label}</Button>
            </a>
            {secondaryCta && (
              <a href={secondaryCta.href}>
                <Button variant="secondary" className="border-bg text-bg hover:bg-bg/10">
                  {secondaryCta.label}
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
```

**Usage (Branda category page):**

```tsx
<CategoryHero
  eyebrow="Branda Kumaşları"
  headline="Zorlu Şartların En Güçlü Kalkanı"
  subheading="UV ışınlarına ve suya karşı %100 koruma. Hızlı teslimat ve güçlü tedarik ağıyla yanınızdayız."
  imageSrc="/fotograflar/branda-makro.jpg"
  imageAlt="Yakın çekim ağır iş brandası dokusu"
  primaryCta={{ label: 'Teklif Al', href: '/teklif?kategori=branda' }}
  secondaryCta={{ label: 'Kataloğu İncele', href: '/katalog/branda' }}
/>
```

---

## Five-up category grid

Use on the homepage. Each card uses its category's headline + secondary CTA from the copy bank.

```tsx
// components/CategoryGrid.tsx
import Image from 'next/image';
import { Eyebrow } from './Eyebrow';

interface CategoryItem {
  slug: 'branda' | 'tente' | 'semsiye' | 'minder' | 'canta';
  label: string;
  headline: string;
  imageSrc: string;
  href: string;
}

export function CategoryGrid({ items }: { items: CategoryItem[] }) {
  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 max-w-2xl">
          <Eyebrow>Ürün Kategorileri</Eyebrow>
          <h2 className="mt-3 font-heading text-3xl font-bold text-text md:text-4xl">
            Tek Noktadan Çözüm
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-text/80 md:text-lg">
            Branda, tente, şemsiye, minder ve çanta üreticileri için
            sektörün en geniş kumaş yelpazesi.
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li key={item.slug}>
              <a
                href={item.href}
                className="group block overflow-hidden rounded-lg bg-secondary/10 transition-colors hover:bg-secondary/20"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={item.imageSrc}
                    alt={item.label}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <Eyebrow>{item.label}</Eyebrow>
                  <h3 className="mt-3 font-heading text-xl font-semibold text-text md:text-2xl">
                    {item.headline}
                  </h3>
                  <span className="mt-4 inline-block font-body text-sm font-semibold text-primary">
                    Koleksiyonu Keşfet →
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
```

---

## Fabric/product card

Used in catalog grids. Calm, technical, focused on the texture.

```tsx
// components/FabricCard.tsx
import Image from 'next/image';
import { Badge } from './Badge';

interface FabricCardProps {
  name: string;             // e.g. "İmperteks 600D"
  category: string;         // e.g. "Çanta Kumaşı"
  imageSrc: string;
  badges?: string[];        // from copy bank
  specs: { label: string; value: string }[]; // 2-3 max
  href: string;
}

export function FabricCard({ name, category, imageSrc, badges, specs, href }: FabricCardProps) {
  return (
    <a
      href={href}
      className="group flex flex-col overflow-hidden rounded-lg bg-bg ring-1 ring-secondary/40 transition-all hover:ring-primary"
    >
      <div className="relative aspect-square overflow-hidden bg-secondary/10">
        <Image
          src={imageSrc}
          alt={`${name} kumaş dokusu`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {badges && badges.length > 0 && (
          <div className="absolute left-3 top-3 flex flex-wrap gap-2">
            {badges.map((b) => (
              <Badge key={b}>{b}</Badge>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="font-accent text-xs uppercase tracking-wider text-text/60">
          {category}
        </span>
        <h3 className="mt-2 font-heading text-lg font-semibold text-text">{name}</h3>
        <dl className="mt-4 space-y-1.5 font-body text-sm">
          {specs.map((s) => (
            <div key={s.label} className="flex justify-between gap-4">
              <dt className="text-text/60">{s.label}</dt>
              <dd className="font-semibold text-text">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </a>
  );
}
```

---

## B2B quote form

Minimal, B2B-focused. Submit text is "Teklif Talep Et" — never "Gönder" or "Kaydet".

```tsx
// components/QuoteForm.tsx
'use client';
import { Button } from './Button';
import { Eyebrow } from './Eyebrow';

const categories = [
  { value: 'branda', label: 'Branda' },
  { value: 'tente', label: 'Tente Kumaşları' },
  { value: 'semsiye', label: 'Şemsiye Kumaşları' },
  { value: 'minder', label: 'Minder Kumaşları' },
  { value: 'canta', label: 'Çanta Kumaşları' },
];

export function QuoteForm() {
  return (
    <form className="mx-auto max-w-2xl space-y-6">
      <header>
        <Eyebrow>Teklif Talebi</Eyebrow>
        <h2 className="mt-3 font-heading text-3xl font-bold text-text">
          Tedarikinizi Birlikte Planlayalım
        </h2>
        <p className="mt-3 font-body text-base text-text/70">
          İhtiyacınızı paylaşın, satış ekibimiz aynı gün içinde dönüş yapsın.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Field label="Firma Adı" name="company" required />
        <Field label="Yetkili" name="contact" required />
        <Field label="E-posta" name="email" type="email" required />
        <Field label="Telefon" name="phone" type="tel" required />
      </div>

      <div>
        <label className="block font-body text-sm font-semibold text-text">
          Ürün Kategorisi
        </label>
        <select
          name="category"
          required
          className="mt-2 w-full rounded-lg border border-secondary/60 bg-bg px-4 py-3 font-body text-base text-text focus:border-primary focus:outline-none"
        >
          <option value="">Seçiniz...</option>
          {categories.map((c) => (
            <option key={c.value} value={c.value}>{c.label}</option>
          ))}
        </select>
      </div>

      <Field label="Tahmini Metraj (m)" name="quantity" type="number" />

      <div>
        <label className="block font-body text-sm font-semibold text-text">
          Notunuz <span className="font-normal text-text/60">(opsiyonel)</span>
        </label>
        <textarea
          name="note"
          rows={4}
          placeholder="Renk, gramaj, kullanım alanı gibi detayları paylaşabilirsiniz."
          className="mt-2 w-full rounded-lg border border-secondary/60 bg-bg px-4 py-3 font-body text-base text-text focus:border-primary focus:outline-none"
        />
      </div>

      <Button type="submit" className="w-full md:w-auto">
        Teklif Talep Et
      </Button>
    </form>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required,
}: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block font-body text-sm font-semibold text-text">
        {label}{required && <span className="ml-0.5 text-accent">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-lg border border-secondary/60 bg-bg px-4 py-3 font-body text-base text-text focus:border-primary focus:outline-none"
      />
    </div>
  );
}
```
