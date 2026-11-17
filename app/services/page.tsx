import type { Metadata } from "next";
import ServicesIndex from "@/components/services/ServicesIndex";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import ServiceScripts from "@/components/scripts/ServiceScripts";
import "@/lib/fonts/site";
import "@/styles/service.css";
import "@/styles/mega.css";
import "@/styles/service-more.css";
import "@/styles/services-index.css";

export const metadata: Metadata = {
  title: "Services | Envision",
  description:
    "Every Envision service in one place: website design, SEO and ads, CRM and automation, and strategy for Melbourne businesses.",
};

// The Services page: every service in the menu, by group (components/services/ServicesIndex.tsx)
export default function Page() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <SiteHeader current="services" />
      <ServicesIndex />
      <SiteFooter href="/" label="Back to the homepage" />
      <ServiceScripts page="services" />
    </>
  );
}
