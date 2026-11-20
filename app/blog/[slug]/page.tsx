import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPost } from "@/components/blog/Blog";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import ServiceScripts from "@/components/scripts/ServiceScripts";
import { POSTS, POST_BY_SLUG } from "@/lib/blog";
import "@/lib/fonts/site";
import "@/styles/service.css";
import "@/styles/mega.css";
import "@/styles/blog.css";
import "@/lib/fonts/grand";
import "@/styles/grand-site.css";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = POST_BY_SLUG[(await params).slug];
  return p ? { title: `${p.title} | Envision`, description: p.excerpt } : {};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const p = POST_BY_SLUG[(await params).slug];
  if (!p) notFound();
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <SiteHeader current="blog" />
      <BlogPost p={p} />
      <SiteFooter href="/blog" label="Back to all posts" />
      <ServiceScripts page="blog" />
    </>
  );
}
