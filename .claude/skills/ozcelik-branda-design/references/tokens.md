# Design Tokens — Özçelik Branda

The complete token specification. SKILL.md has the quick reference; this file is the source of truth for values, scales, and usage rules.

## Color palette: *Toprak ve Samimiyet*

### Token table

| Role | CSS variable | Tailwind | Hex | OKLCH (approx) |
|---|---|---|---|---|
| Primary | `--color-primary` | `primary` | `#8C5A35` | warm earth brown |
| Secondary | `--color-secondary` | `secondary` | `#D9B382` | sand / tan |
| Accent | `--color-accent` | `accent` | `#4A5D23` | olive |
| Background | `--color-bg` | `bg` | `#F5F2EB` | cream |
| Text | `--color-text` | `text` | `#2C2C2C` | near-black |

### Usage rules

**Primary (`#8C5A35`)** — Toprak kahve.
- Brand mark
- Primary CTA fill (button background)
- Hovered link color
- Headline accent words (sparingly)
- *Never*: large flood-fill backgrounds — it's too heavy at scale

**Secondary (`#D9B382`)** — Kum/ten.
- Card hover state surfaces (with low opacity overlay)
- Section dividers
- Subtle backgrounds for callout boxes
- Disabled / outline button borders

**Accent (`#4A5D23`)** — Zeytin yeşili.
- Badges ("Yeni", "Stoklu", "UV 50+")
- "Yeni Ürün" eyebrow markers
- Inline highlight bars under section eyebrows
- Form success states
- *Never*: as a button fill (looks unbranded), as a body-text color

**Background (`#F5F2EB`)** — Krem.
- Default page surface — apply at `<body>` level
- Form field surfaces (slightly darker variant if needed: `#EFEBE0`)
- Card surfaces

**Text (`#2C2C2C`)** — Antrasit.
- Body copy (full opacity)
- Headings (full opacity)
- Muted text: `text-text/60` or `text-text/70` for secondary captions
- Light text on dark imagery: `text-bg` (use the cream as inverse)

### Derived states

For hover / active / disabled, do not invent new hex values. Use Tailwind opacity modifiers:

```tsx
<button className="bg-primary hover:bg-primary/90 active:bg-primary/80 disabled:bg-primary/40">
  Teklif Al
</button>
```

For overlays on imagery, use:
- `bg-text/40` for medium-dark overlay (text on photos)
- `bg-text/60` for heavy overlay (legibility critical)
- `bg-bg/80` for light overlay (photo washes warm cream)

---

## Typography: *Güçlü ve Net*

### Family roles

| Role | Family | Weights to load | Tailwind |
|---|---|---|---|
| Heading | Montserrat | 600, 700, 800 | `font-heading` |
| Body | Open Sans | 400, 500, 600, 700 | `font-body` |
| Accent / Eyebrow | Oswald | 500, 600 | `font-accent` |

### Sizing scale

Use Tailwind's default scale with these intended pairings:

| Use | Class | Size | Family |
|---|---|---|---|
| Hero title (H1) | `text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight` | 48-72px | Montserrat |
| Section title (H2) | `text-3xl md:text-4xl font-heading font-bold` | 30-36px | Montserrat |
| Card title (H3) | `text-xl md:text-2xl font-heading font-semibold` | 20-24px | Montserrat |
| Subheading (H4) | `text-lg font-heading font-semibold` | 18px | Montserrat |
| Eyebrow / Category label | `text-xs uppercase tracking-[0.18em] font-accent` | 12px | Oswald |
| Body large | `text-lg font-body leading-relaxed` | 18px | Open Sans |
| Body | `text-base font-body leading-relaxed` | 16px | Open Sans |
| Caption / Small | `text-sm font-body text-text/70` | 14px | Open Sans |
| Badge | `text-xs uppercase tracking-wider font-accent font-semibold` | 12px | Oswald |
| Button label | `text-sm md:text-base font-body font-semibold` | 14-16px | Open Sans |

### Line-height & spacing rules

- Hero `leading-tight` (1.1) — Montserrat looks weak with loose leading
- Body `leading-relaxed` (1.625) — Open Sans needs breathing room for Turkish diacritics (ş, ç, ğ, ı)
- Eyebrow / badges keep tracking wide (`tracking-wider` or custom `tracking-[0.18em]`)

### Don't

- Don't use Oswald for headlines — too narrow at large sizes, fights with Montserrat
- Don't use Open Sans for hero titles — feels generic
- Don't mix more than these three families
- Don't use italic Open Sans for emphasis — use `font-semibold` instead

---

## Spacing & layout

Use Tailwind's default spacing scale. For section rhythm:

| Use | Class |
|---|---|
| Section vertical padding (mobile) | `py-16` |
| Section vertical padding (desktop) | `md:py-24 lg:py-32` |
| Container max width | `max-w-7xl mx-auto px-4 md:px-8` |
| Card internal padding | `p-6 md:p-8` |
| Tight grid gap | `gap-4` |
| Standard grid gap | `gap-8` |
| Roomy grid gap | `gap-12 md:gap-16` |

The brand prefers generous whitespace — when in doubt, increase padding rather than compressing.

---

## Borders & corners

- Default radius: `rounded-lg` (8px) — for cards, buttons, inputs
- Sharp / industrial accents: `rounded-none` for badges, eyebrow underlines
- Pill: `rounded-full` for category chips and round CTAs
- Border color: `border-secondary/40` for subtle dividers, `border-primary` for emphatic outlines

Avoid heavy borders. The brand reads as soft and tactile — let surface contrast (cream vs imagery) do the visual separation work.

---

## Shadows

Default to **no shadows**. The visual style is flat and textural. The fabric textures themselves provide depth.

If a shadow is required for a floating element (modal, dropdown), use only:

```css
box-shadow: 0 4px 24px -8px rgba(44, 44, 44, 0.12);
```

Never use multiple stacked shadows or glow effects.

---

## Imagery rules

- **Format**: `next/image` always, with explicit width/height
- **Subject**: macro fabric texture, fabric in use (in natural settings — café terrace, courier bag in hand, beach umbrella from below), or natural-light fabric rolls
- **Lighting**: warm, golden-hour, natural — never harsh studio
- **Color grade**: slightly warm, low saturation; never cool/blue
- **Avoid**: people in business attire, abstract corporate, glass buildings, neon, white-cyclorama studio shots

For overlay text on photos, always include a warm overlay to keep contrast with the cream brand:

```tsx
<div className="relative">
  <Image src="..." alt="..." fill className="object-cover" />
  <div className="absolute inset-0 bg-gradient-to-t from-text/60 via-text/20 to-transparent" />
  <div className="relative z-10 ...">{/* overlay copy */}</div>
</div>
```
