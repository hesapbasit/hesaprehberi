import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    host: "https://hesaprehberionline.com",
    sitemap: "https://hesaprehberionline.com/sitemap.xml",
  };
}