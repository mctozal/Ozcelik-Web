/*
 * Özçelik Branda — Tailwind theme extension
 * Merge this `theme.extend` block into your tailwind.config.ts.
 *
 * The fontFamily entries reference CSS variables set by next/font (see assets/fonts.ts).
 */

import type { Config } from 'tailwindcss';

const ozcelikTheme: Partial<Config['theme']> = {
  extend: {
    colors: {
      primary: 'var(--color-primary)',     // #8C5A35
      secondary: 'var(--color-secondary)', // #D9B382
      accent: 'var(--color-accent)',       // #4A5D23
      bg: 'var(--color-bg)',               // #F5F2EB
      text: 'var(--color-text)',           // #2C2C2C
    },
    fontFamily: {
      heading: ['var(--font-heading)'],
      body: ['var(--font-body)'],
      accent: ['var(--font-accent)'],
    },
    letterSpacing: {
      eyebrow: '0.18em',
    },
  },
};

export default ozcelikTheme;

/*
 * Example merge in tailwind.config.ts:
 *
 * import type { Config } from 'tailwindcss';
 * import ozcelikTheme from './ozcelik-theme';  // or inline
 *
 * const config: Config = {
 *   content: ['./app/**\/*.{ts,tsx}', './components/**\/*.{ts,tsx}'],
 *   theme: ozcelikTheme,
 * };
 *
 * export default config;
 */
