import type { MetadataRoute } from "next";

import { calculators } from "@/lib/calculators";

const baseUrl = "https://hesaprehberionline.com";

const blogSlugs = [
  "gecelik-faiz-hesaplama-rehberi",
  "basit-faiz-bilesik-faiz-farki",
  "mevduat-faizi-hesaplama-rehberi",
  "tasit-kredisi-hesaplama-rehberi",
  "tarim-kredisi-rehberi",
  "kredi-karsilastirma-rehberi",
  "mevduat-getiri-hedefi-rehberi",
  "kira-artis-hesaplama-rehberi",
  "doviz-cevirme-nasil-yapilir",
  "kredi-taksiti-nasil-hesaplanir",
  "kredi-faizi-nasil-hesaplanir",
  "vadeli-mevduat-hesaplama-rehberi",
  "mevduat-faiz-yenileme-rehberi",
  "kdv-nasil-hesaplanir",
  "su-ihtiyaci-hesaplama-rehberi",
  "mevduat-erken-bozma-kaybi-rehberi",
  "esnaf-kredisi-rehberi",
  "ihtiyac-kredisi-hesaplama-rehberi",
  "ticari-kredi-rehberi",
  "mevduat-reel-getiri-hesaplama",
  "ideal-kilo-hesaplama-rehberi",
  "stopaj-hesaplama-rehberi",
  "yuzde-hesaplama-rehberi",
  "vadeli-mevduat-faizi-nasil-hesaplanir",
  "gun-hesaplama-rehberi",
  "yas-hesaplama-rehberi",
  "mevduat-vade-karsilastirma-rehberi",
  "indirim-hesaplama-rehberi",
  "kdv-dahil-ve-haric-hesaplama-nasil-yapilir",
  "gelir-vergisi-hesaplama-rehberi",
  "bilesik-faiz-hesaplama-rehberi",
  "kobi-kredisi-rehberi",
  "vucut-yag-orani-hesaplama-rehberi",
  "konut-kredisi-hesaplama-rehberi",
  "enflasyon-hesaplamasi-nasil-yapilir",
  "faiz-hesaplama-rehberi",
  "kredi-erken-kapama-rehberi",
  "bazal-metabolizma-hesaplama-rehberi",
  "kredi-yapilandirma-rehberi",
  "gebelik-hesaplama-rehberi",
  "kalori-ihtiyaci-hesaplama-rehberi",
  "mevduat-faiz-orani-karsilastirma-rehberi",
  "gunluk-faiz-hesaplama-rehberi",
  "maas-hesaplama-nasil-yapilir",
  "bsmv-nedir-nasil-hesaplanir",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/hesaplamalar`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hakkimizda`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/iletisim`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/gizlilik-politikasi`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/kullanim-sartlari`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cerez-politikasi`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const calculatorPages: MetadataRoute.Sitemap = calculators.map(
    (calculator) => ({
      url: `${baseUrl}${calculator.href}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    }),
  );

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...calculatorPages, ...blogPages];
}