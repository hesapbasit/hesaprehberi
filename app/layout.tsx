import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL("https://hesaprehberi.vercel.app"),

  title: {
    default: "HesapRehberi | Tüm Hesaplamalar Tek Yerde",
    template: "%s | HesapRehberi",
  },

  description:
    "Kredi, KDV, faiz, maaş, döviz ve enflasyon hesaplamalarını ücretsiz ve hızlı şekilde yapın.",

  keywords: [
    "hesaplama",
    "kredi hesaplama",
    "KDV hesaplama",
    "faiz hesaplama",
    "maaş hesaplama",
    "döviz hesaplama",
    "enflasyon hesaplama",
  ],

  applicationName: "HesapRehberi",

  authors: [
    {
      name: "HesapRehberi",
    },
  ],

  creator: "HesapRehberi",
  publisher: "HesapRehberi",

  alternates: {
    canonical: "/",
  },

  verification: {
    google: "AHbCnRhY8MW2JgCt88JEcRV18T0ws4Dp02MyqepeFDo",
  },

  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://hesaprehberi.vercel.app",
    siteName: "HesapRehberi",
    title: "HesapRehberi | Tüm Hesaplamalar Tek Yerde",
    description:
      "Kredi, KDV, faiz, maaş, döviz ve enflasyon hesaplamalarını ücretsiz yapın.",
  },

  twitter: {
    card: "summary_large_image",
    title: "HesapRehberi",
    description:
      "Kredi, KDV, faiz, maaş, döviz ve enflasyon hesaplamalarını ücretsiz yapın.",
  },

  robots: {
    index: true,
    follow: true,
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
        {children}
      </body>
    </html>
  );
}