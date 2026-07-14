import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },

    sitemap: "https://hesaprehberi.com/sitemap.xml",
    host: "https://hesaprehberi.com",
  };
}