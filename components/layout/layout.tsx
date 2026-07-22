import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://https://hesaprehberionline.com"),

  title: {
    default: "HesapRehberi | Tüm Hesaplamalar Tek Yerde",
    template: "%s | HesapRehberi",
  },

  description:
    "Kredi, KDV, faiz, maaş, döviz ve enflasyon hesaplamalarını ücretsiz ve hızlı şekilde yapın.",

  applicationName: "HesapRehberi",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "HesapRehberi",
    title: "HesapRehberi | Tüm Hesaplamalar Tek Yerde",
    description:
      "Kredi, KDV, faiz, maaş, döviz ve enflasyon hesaplamalarını ücretsiz yapın.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-slate-100 antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <Navbar />

          <div className="flex-1">{children}</div>

          <Footer />
        </div>
      </body>
    </html>
  );
}