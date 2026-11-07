import type { Metadata } from "next";
import ContactContent from "@/components/contact/ContactContent";
import SiteHeader from "@/components/site/SiteHeader";
import ServiceScripts from "@/components/scripts/ServiceScripts";
import "@/lib/fonts/home";
import "@/styles/service.css";
import "@/styles/mega.css";
import "@/styles/contact.css";

export const metadata: Metadata = {
  title: "Contact Envision Digital Solutions",
  description: "Tell us about your business and what you want to achieve, and we'll map the most useful next step.",
};

// contact.css styles this page through a "cx" class on <html>; it goes on before the first paint
const CX = `document.documentElement.classList.add("cx");`;

export default function Page() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: CX }} />
      {/* the site nav, shown in its "past the hero" state (grown and blue) since this page has no hero */}
      <SiteHeader />
      <ContactContent />
      <ServiceScripts page="contact" />
    </>
  );
}
