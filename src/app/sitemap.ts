import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  return ["pt", "en"].map((locale) => ({ url: `${base}/${locale}`, lastModified: new Date(), changeFrequency: "monthly", priority: locale === "pt" ? 1 : 0.9 }));
}
