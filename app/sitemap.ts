import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://hesaprehberi.com";

  const routes = [
    "",
    "/hesaplamalar",
    "/hesaplamalar/kdv-hesaplama",
    "/hesaplamalar/kredi-hesaplama",
    "/hesaplamalar/faiz-hesaplama",
    "/hesaplamalar/maas-hesaplama",
    "/hesaplamalar/doviz-hesaplama",
    "/hesaplamalar/enflasyon-hesaplama",
    "/blog",
    "/hakkimizda",
    "/iletisim",
    "/gizlilik-politikasi",
    "/kullanim-sartlari",
    "/cerez-politikasi",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : route.startsWith("/hesaplamalar/") ? 0.9 : 0.7,
  }));
}