import type { Metadata } from "next";
import { BlogIndex } from "@/components/blog/Blog";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import ServiceScripts from "@/components/scripts/ServiceScripts";
import "@/lib/fonts/site";
import "@/styles/service.css";
import "@/styles/mega.css";
import "@/styles/blog.css";
import "@/lib/fonts/grand";
import "@/styles/grand-site.css";

export const metadata: Metadata = {
  title: "Blogs | Envision",
  description: "Plain-English guides to websites, search, ads and follow-up for Melbourne businesses, from the Envision team.",
};

export default function Page() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <SiteHeader current="blog" />
      <BlogIndex />
      <SiteFooter href="/" label="Back to the homepage" />
      <ServiceScripts page="blog" />
    </>
  );
}
