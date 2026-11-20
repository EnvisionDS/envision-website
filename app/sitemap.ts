import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/services";
import { POSTS } from "@/lib/blog";

// /sitemap.xml: every page on the site, for search engines
const SITE = "https://envisiondigitalsolutions.com.au";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (path: string, priority: number, changeFrequency: "weekly" | "monthly" | "yearly" = "monthly") => ({
    url: SITE + path,
    lastModified: now,
    changeFrequency,
    priority,
  });
  return [
    page("/", 1, "weekly"),
    page("/services", 0.9),
    ...[...new Set(SERVICES.map((s) => s.href))].map((href) => page(href, 0.85)),
    page("/about", 0.7),
    page("/blog", 0.7, "weekly"),
    ...POSTS.map((p) => page(`/blog/${p.slug}`, 0.6)),
    page("/contact", 0.6, "yearly"),
    page("/privacy-policy", 0.3, "yearly"),
    page("/terms-and-conditions", 0.3, "yearly"),
  ];
}
