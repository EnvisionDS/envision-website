import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/services/ServicePage";
import "@/lib/fonts/site";
import "@/styles/service.css";
import "@/styles/mega.css";
import { SERVICES } from "@/lib/services";

type Props = { params: Promise<{ slug: string }> };

// every service at /services/<name> (lib/services.tsx); location strategy has its own address, as on the live site
const inServices = SERVICES.filter((s) => s.href.startsWith("/services/"));
const find = (slug: string) => inServices.find((s) => s.href === `/services/${slug}`);

export const dynamicParams = false;

export function generateStaticParams() {
  return inServices.map((s) => ({ slug: s.href.slice("/services/".length) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = find((await params).slug);
  return s ? { title: s.metaTitle, description: s.description } : {};
}

export default async function Page({ params }: Props) {
  const s = find((await params).slug);
  if (!s) notFound();
  return <ServicePage s={s} />;
}
