import type { Metadata } from "next";

import type { CalculatorItem } from "@/lib/calculators";

const baseUrl = "https://hesaprehberi.vercel.app";

type CreatePageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  image = "/logo.jpg",
  noIndex = false,
}: CreatePageMetadataOptions): Metadata {
  const canonicalPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl = `${baseUrl}${canonicalPath}`;

  return {
    title,
    description,

    keywords,

    alternates: {
      canonical: canonicalPath,
    },

    openGraph: {
      type: "website",
      locale: "tr_TR",
      url: canonicalUrl,
      siteName: "HesapRehberi",
      title,
      description,
      images: [
        {
          url: image,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary",
      title,
      description,
      images: [image],
    },

    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
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
}

export function createCalculatorMetadata(
  calculator: CalculatorItem,
): Metadata {
  const title = calculator.title;

  const description =
    calculator.description ||
    `${calculator.title} aracını ücretsiz kullanın. Sonucunuzu hızlı ve kolay şekilde hesaplayın.`;

  const keywords = Array.from(
    new Set([
      calculator.title,
      calculator.shortTitle,
      calculator.category,
      ...calculator.keywords,
      "hesaplama",
      "ücretsiz hesaplama",
      "online hesaplama",
    ]),
  ).filter((keyword): keyword is string => Boolean(keyword));

  return createPageMetadata({
    title,
    description,
    path: calculator.href,
    keywords,
  });
}