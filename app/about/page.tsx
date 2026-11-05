import type { Metadata } from "next";
import AboutContent from "@/components/about/AboutContent";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import ServiceScripts from "@/components/scripts/ServiceScripts";
import "@/lib/fonts/site";
import "@/styles/service.css";
import "@/styles/mega.css";
import "@/styles/about.css";

export const metadata: Metadata = {
  title: "About us | Envision",
  description:
    "Envision Digital Solutions is a Melbourne team of strategists, developers and creative thinkers helping local businesses grow.",
};

export default function Page() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <SiteHeader current="about" />
      <AboutContent />
      <SiteFooter href="/" label="Back to the homepage" />
      <ServiceScripts page="about" />
    </>
  );
}
