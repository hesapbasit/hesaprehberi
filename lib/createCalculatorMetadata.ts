import type { Metadata } from "next";

const SITE_URL = "https://www.hesaprehberi.com";
const SITE_NAME = "HesapRehberi";

type CreateCalculatorMetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  openGraph?: Metadata["openGraph"];
  twitter?: Metadata["twitter"];
  alternates?: Metadata["alternates"];
  robots?: Metadata["robots"];
};

export function createCalculatorMetadata({
  title,
  description,
  path,
  keywords = [],
  openGraph,
  twitter,
  alternates,
  robots,
}: CreateCalculatorMetadataOptions): Metadata {
  const canonicalUrl = path.startsWith("http")
    ? path
    : `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

  return {
    metadataBase: new URL(SITE_URL),

    title,
    description,
    keywords,

    alternates: alternates ?? {
      canonical: canonicalUrl,
    },

    openGraph: openGraph ?? {
      type: "website",
      locale: "tr_TR",
      url: canonicalUrl,
      title,
      description,
      siteName: SITE_NAME,
    },

    twitter: twitter ?? {
      card: "summary_large_image",
      title,
      description,
    },

    robots: robots ?? {
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