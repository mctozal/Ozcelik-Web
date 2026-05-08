import type { Metadata } from "next";
import { fontVariables } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Özçelik Branda — Dayanıklılığın Dokusu, Üretimin Gücü",
  description:
    "1970'ten beri branda, tente, şemsiye, minder ve çanta üreticilerine güvenilir tedarik. Türkiye, Bulgaristan, Yunanistan ve Irak pazarlarına hızlı sevkiyat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${fontVariables} h-full antialiased`}>
      <body className="min-h-full bg-bg text-text flex flex-col">
        {children}
      </body>
    </html>
  );
}
