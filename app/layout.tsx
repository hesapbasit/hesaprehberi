import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Navbar from "@/components/layout/Navbar";

import "./globals.css";

const baseUrl = "https://hesaprehberi.vercel.app";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: {
    default: "HesapRehberi | Tüm Hesaplamalar Tek Yerde",
    template: "%s | HesapRehberi",
  },

  description:
    "Kredi, KDV, faiz, maaş, döviz, vergi, kira, mevduat, tarih ve sağlık hesaplamalarını ücretsiz ve hızlı şekilde yapın.",

  keywords: [
    "hesaplama",
    "kredi hesaplama",
    "KDV hesaplama",
    "faiz hesaplama",
    "maaş hesaplama",
    "döviz hesaplama",
    "enflasyon hesaplama",
    "gelir vergisi hesaplama",
    "kira artış hesaplama",
    "mevduat faizi hesaplama",
    "yaş hesaplama",
    "gün hesaplama",
    "VKİ hesaplama",
  ],

  applicationName: "HesapRehberi",

  authors: [
    {
      name: "HesapRehberi",
      url: baseUrl,
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
    url: baseUrl,
    siteName: "HesapRehberi",
    title: "HesapRehberi | Tüm Hesaplamalar Tek Yerde",
    description:
      "Finans, vergi, maaş, kira, tarih ve sağlık hesaplamalarını ücretsiz yapın.",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "HesapRehberi",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "HesapRehberi | Tüm Hesaplamalar Tek Yerde",
    description:
      "Finans, vergi, maaş, kira, tarih ve sağlık hesaplamalarını ücretsiz yapın.",
    images: ["/logo.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: "HesapRehberi",
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo.jpg`,
      },
      description:
        "Finans, vergi, maaş, kira, tarih ve sağlık alanlarında ücretsiz hesaplama araçları sunan platform.",
    },
    {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      url: baseUrl,
      name: "HesapRehberi",
      alternateName: "Hesap Rehberi",
      description:
        "Kredi, KDV, faiz, maaş, döviz, vergi, kira, mevduat, tarih ve sağlık hesaplamalarını ücretsiz yapın.",
      inLanguage: "tr-TR",
      publisher: {
        "@id": `${baseUrl}/#organization`,
      },
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />

        <Navbar />

        {children}
      </body>
    </html>
  );
}