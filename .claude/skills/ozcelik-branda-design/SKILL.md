---
name: ozcelik-branda-design
description: Design system principles, brand voice, color/typography tokens, and reusable copy banks for the Özçelik Branda Next.js B2B website. Use this skill whenever working in the /Users/oblite/Repos/ozcelik-web repository — any UI component, page, layout, hero, card, form, color choice, font usage, copy decision, or visual direction. Always invoke this skill for tasks involving Özçelik Branda branding, B2B textile/fabric supplier UI, or anything touching the branda / tente / şemsiye / minder / çanta product categories — even when the user doesn't explicitly mention design or branding. If the work happens in this repo, this skill applies.
---

# Özçelik Branda Design System

This skill encodes the brand DNA and design system for **Özçelik Branda** — a Turkish B2B technical-textile supplier serving cushion, umbrella, tent/tarpaulin, and bag manufacturers in Turkey and neighboring countries (Bulgaria, Greece, Iraq).

Apply these principles to every visual, copywriting, and code decision in this repo.

> **Always read `references/tokens.md` before generating styles or components**, and `references/copy-banks.md` before writing any product-category copy. They are the source of truth — do not invent values.

---

## Brand essence

| | |
|---|---|
| **Archetype** | Creator + Sage — *Yaratıcı & Güvenilir Çözüm Ortağı* |
| **Motto** | *Dayanıklılığın Dokusu, Üretimin Gücü.* |
| **Audience** | B2B üreticiler — minder, şemsiye, çadır/branda, çanta üreticileri. NOT end consumers. |
| **Primary tone** | Profesyonel, özgüvenli, güven veren |
| **Secondary tone** | Samimi, dinamik, cesur |
| **Markets** | Türkiye + Bulgaristan, Yunanistan, Irak |
| **Visual style** | *Doğal ve Sıcak Organik* — warm earth tones, natural light, fabric textures up close |

The two tones are intentional. Lead with professional confidence so a procurement manager trusts you; break corporate coldness with warm, direct phrases. Never sound like a consumer e-commerce site — there is no "Sepete Ekle" here, only "Teklif Al", "Numune İste", "Stok Sor".

---

## Visual direction: *Doğal ve Sıcak Organik*

Every screen should feel like sunlight on natural fabric, not a sterile spec sheet.

### Do

- Use the cream background `#F5F2EB` as the page surface — never pure white
- Show fabric textures up close — macro shots that reveal weave, fiber, color depth
- Use warm earth tones from the palette; let imagery breathe with generous whitespace
- Reserve the olive accent `#4A5D23` for CTAs, badges, and "Yeni" markers — use it like a highlight, not a fill
- Pair tight Montserrat headlines with relaxed Open Sans body
- Use Oswald sparingly for technical labels, badges, eyebrow text — uppercase, wide tracking

### Don't

- Don't use pure white `#FFFFFF` for page backgrounds (it kills the warmth)
- Don't use cold blues, vibrant gradients, or neon accents
- Don't use generic stock photos (handshakes, glass office buildings, abstract corporate)
- Don't use drop shadows, glassmorphism, or skeuomorphic effects — keep surfaces flat and textural
- Don't overuse Oswald — it's accent only, never body or headlines
- Don't write consumer-retail copy ("Hemen Satın Al", "Sepete Ekle", "Üye Ol İndirim Kazan")
- Don't use animation/motion as decoration — only to demonstrate fabric properties (water beading, wind resistance)

---

## Design tokens (quick reference)

Full specification with usage rules: **`references/tokens.md`**.

### Colors — palette: *Toprak ve Samimiyet*

| Role | Token | Hex | Where to use |
|---|---|---|---|
| Primary | `--color-primary` | `#8C5A35` | Brand mark, headlines, primary CTA fill |
| Secondary | `--color-secondary` | `#D9B382` | Hover states, supportive surfaces, dividers |
| Accent | `--color-accent` | `#4A5D23` | Badges, "Yeni" markers, inline highlights |
| Background | `--color-bg` | `#F5F2EB` | Page surface — default everywhere |
| Text | `--color-text` | `#2C2C2C` | Body copy, headings |

### Typography — combination: *Güçlü ve Net*

| Role | Family | Where to use |
|---|---|---|
| Heading | **Montserrat** (700/800) | h1–h4, hero, section titles |
| Body | **Open Sans** (400/600) | Paragraphs, lists, form labels, buttons |
| Accent / Eyebrow | **Oswald** (500/600, uppercase, tracking-wider) | Badges, "YENİ ÜRÜN", category eyebrows, technical specs labels |

Self-host all three via `next/font/google`. See **`assets/fonts.ts`** for the ready-to-use module.

---

## Code conventions

### Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS with brand tokens extended into theme
- **Fonts**: `next/font/google` self-hosted
- **Language**: Turkish UI copy, English code/comments

### Setup files (drop-in)

- `assets/tokens.css` — paste into `app/globals.css`
- `assets/tailwind.config.snippet.ts` — merge into `tailwind.config.ts`
- `assets/fonts.ts` — copy to `app/fonts.ts` and import in root layout

### Class naming

Prefer Tailwind utility classes referencing the brand tokens:

```tsx
<h1 className="font-heading text-4xl text-primary">Dayanıklılığın Dokusu</h1>
<p className="font-body text-base text-text/80">...</p>
<span className="font-accent uppercase tracking-wider text-accent">Yeni</span>
```

The tokens map to `font-heading`, `font-body`, `font-accent`, `text-primary`, `text-secondary`, `text-accent`, `text-text`, `bg-bg`, etc. — see the Tailwind snippet.

### Image guidance

All product/category imagery must be macro fabric textures, natural light, warm tones. Source photos live in `/fotograflar/` (already in repo). Always use `next/image` with proper `alt` text in Turkish.

---

## Copywriting principles

The full Turkish copy banks for all 5 product categories (headlines, subheadings, badges, CTAs) are in **`references/copy-banks.md`**. Read that file before writing any product-category copy and reuse phrases verbatim — they are pre-approved by the brand.

General rules:

1. **Speak to manufacturers, not end users.** "Üreticilerin tasarımına değer katan kumaşlar" — not "Bahçenizi güzelleştirin".
2. **Lead with the technical benefit, follow with the human payoff.** "UPF 50+ koruma — müşterilerinize güneşten çekinmeden gölge sunun."
3. **Use proper Turkish capitalization.** Brand name is "Özçelik Branda" (both words capitalized). Product category names lowercase in body text.
4. **Avoid retail consumer language.** No "satın al", "sepet", "üye ol", "kampanya". Use "teklif al", "numune iste", "tedarik başlat", "stok sor".
5. **Keep technical specs warm.** Don't bury the human benefit under jargon — pair every spec with what it does for the manufacturer.

### CTA hierarchy

| Tier | Purpose | Examples |
|---|---|---|
| Primary | Move toward a quote / order | *Teklif Al*, *Numune İste*, *Tedarik Başlat* |
| Secondary | Explore catalog | *Kartelayı İncele*, *Koleksiyonu Keşfet*, *Renkleri Gör* |
| Tertiary | Information | *Detaylı Bilgi*, *Teknik Özellikler*, *Bize Ulaşın* |

---

## Component patterns

Reference component code (hero, category card, button variants, B2B quote form) is in **`references/components.md`**. Read it when building new components — start from those patterns rather than from scratch.

Key structural choices:

- **Category hero**: large macro fabric photo, overlay copy from the bank, primary CTA bottom-left, eyebrow in Oswald uppercase
- **Five-up category grid** on the home page (branda, tente, şemsiye, minder, çanta) — each card uses its category's headline + secondary CTA
- **Product/fabric detail**: hero image + technical specs in a calm two-column layout (NOT a busy spec sheet)
- **B2B quote form**: minimal — company, contact, category, estimated metraj, optional note. Submit text: "Teklif Talep Et"

---

## Product categories

All 5 categories share the design system but have distinct copy banks and emotional emphasis:

| Slug | Turkish | Emphasis |
|---|---|---|
| `branda` | Branda | Industrial durability, weather resistance, heavy-duty |
| `tente` | Tente Kumaşları | Architectural elegance, color fastness, restaurants/hotels |
| `semsiye` | Şemsiye Kumaşları | UV protection, wind resistance, beach/hotel |
| `minder` | Minder Kumaşları | Indoor comfort + outdoor durability, cushion makers |
| `canta` | Çanta Kumaşları | Tear resistance, technical performance, outdoor/courier bags |

When building a category page, start by reading the matching section in `references/copy-banks.md` for that category's headlines, subheadings, badges, and CTAs.

---

## Reference files

| File | When to read |
|---|---|
| `references/tokens.md` | Before generating any styling, color, or typography code |
| `references/components.md` | Before building a new component (hero, card, form, button) |
| `references/copy-banks.md` | Before writing any Turkish UI copy for a product category |
| `assets/tokens.css` | Drop-in CSS file — paste into `app/globals.css` |
| `assets/tailwind.config.snippet.ts` | Tailwind theme extension to merge |
| `assets/fonts.ts` | `next/font` setup module |

---

## Self-check before delivering UI

Before reporting a UI task complete, verify:

- [ ] Background uses `bg-bg` (cream), not `bg-white`
- [ ] Headings use `font-heading` (Montserrat), not the system default
- [ ] Body uses `font-body` (Open Sans)
- [ ] Oswald is only on eyebrow/badge/spec-label elements, in uppercase with tracking
- [ ] Olive accent is reserved for CTAs/badges/highlights — not used as a fill or background
- [ ] Copy is in Turkish, addresses manufacturers (B2B), avoids retail consumer phrasing
- [ ] CTAs come from the approved hierarchy (no "Sepete Ekle" type strings)
- [ ] Imagery is macro fabric / natural light — no generic corporate stock
- [ ] No drop shadows, gradients, or glassmorphism — surfaces stay flat and textural
