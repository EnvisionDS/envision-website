import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CategoryPage from "@/components/services/CategoryPage";
import ServicePage from "@/components/services/ServicePage";
import "@/lib/fonts/site";
import "@/styles/service.css";
import "@/styles/mega.css";
import { CATEGORIES } from "@/lib/categories";
import { GROUPS } from "@/lib/menu";
import { SERVICES } from "@/lib/services";

type Props = { params: Promise<{ slug: string }> };

// every service and service category at /services/<name> (lib/services.tsx, lib/menu.tsx); location strategy has its own
// address, as on the live site
const inServices = SERVICES.filter((s) => s.href.startsWith("/services/"));
const find = (slug: string) => inServices.find((s) => s.href === `/services/${slug}`);
const findGroup = (slug: string) => GROUPS.find((g) => g.href === `/services/${slug}`);

export const dynamicParams = false;

export function generateStaticParams() {
  return [...inServices, ...GROUPS].map((s) => ({ slug: s.href.slice("/services/".length) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug, s = find(slug), g = findGroup(slug);
  if (g) return { title: `${g.name} | Envision`, description: CATEGORIES[g.id].description };
  return s ? { title: s.metaTitle, description: s.description } : {};
}

export default async function Page({ params }: Props) {
  const slug = (await params).slug, s = find(slug), g = findGroup(slug);
  if (g) return <CategoryPage g={g} />;
  if (!s) notFound();
  return <ServicePage s={s} />;
}
