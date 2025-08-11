import type { MetadataRoute } from "next";
import { statSync } from "node:fs";
import { join } from "node:path";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.bloxyapp.com";
  const getLastModified = (relativePath: string): string | undefined => {
    try {
      const stats = statSync(join(process.cwd(), relativePath));
      return stats.mtime.toISOString();
    } catch {
      return undefined;
    }
  };

  const entries: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: getLastModified("src/app/page.tsx") ?? undefined,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: getLastModified("src/app/privacy/page.tsx") ?? undefined,
      changeFrequency: "yearly",
      priority: 0.1,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: getLastModified("src/app/terms/page.tsx") ?? undefined,
      changeFrequency: "yearly",
      priority: 0.1,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: getLastModified("src/app/contact/page.tsx") ?? undefined,
      changeFrequency: "yearly",
      priority: 0.1,
    },
  ];

  return entries;
}


