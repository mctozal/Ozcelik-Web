import { Montserrat, Open_Sans, Oswald } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

export const openSans = Open_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

export const oswald = Oswald({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600"],
  variable: "--font-oswald",
  display: "swap",
});

export const fontVariables = `${montserrat.variable} ${openSans.variable} ${oswald.variable}`;
