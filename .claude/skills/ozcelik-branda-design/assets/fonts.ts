/*
 * Özçelik Branda — next/font setup
 * Copy to app/fonts.ts (or app/lib/fonts.ts) and import in app/layout.tsx.
 *
 * The CSS variables (--font-montserrat, --font-open-sans, --font-oswald)
 * are referenced by tokens.css and the Tailwind config.
 */

import { Montserrat, Open_Sans, Oswald } from 'next/font/google';

export const montserrat = Montserrat({
  subsets: ['latin', 'latin-ext'],
  weight: ['600', '700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const openSans = Open_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-open-sans',
  display: 'swap',
});

export const oswald = Oswald({
  subsets: ['latin', 'latin-ext'],
  weight: ['500', '600'],
  variable: '--font-oswald',
  display: 'swap',
});

export const fontVariables = `${montserrat.variable} ${openSans.variable} ${oswald.variable}`;

/*
 * Usage in app/layout.tsx:
 *
 * import { fontVariables } from './fonts';
 * import './globals.css';
 *
 * export default function RootLayout({ children }: { children: React.ReactNode }) {
 *   return (
 *     <html lang="tr" className={fontVariables}>
 *       <body>{children}</body>
 *     </html>
 *   );
 * }
 *
 * Note: lang="tr" is important — it enables proper Turkish hyphenation
 * and screen-reader pronunciation of ş, ç, ğ, ı, ü, ö.
 */
