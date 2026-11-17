import type { MetadataRoute } from "next";

// /robots.txt: everything may be crawled; points to the sitemap
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://envisiondigitalsolutions.com.au/sitemap.xml",
    host: "https://envisiondigitalsolutions.com.au",
  };
}
