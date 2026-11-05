/*
   ================================================================
   BEGINNER'S GUIDE — read the comments top to bottom.
   A simple dark landing page:
   LAYER 0: Intro — the Envision logo builds itself, then its eight rings fly out and become the eight
           letters of "envision", and the word shrinks and docks onto the logo in the top-left of the nav.
   NAV:     logo (home) · Services / Our work / About / Contact · discovery-call button
   HERO:    big centred headline with gradient words, pill CTA, and the company logo built from
           ~2,000 tiny cubes (three.js) rising from the bottom of the screen.
   SERVICES: one large card per service; scrolling stacks them into a deck under the nav.
   ABOUT:   includes "What we stand for", the logo as a wheel holding the mission, vision and six values.
   LAYER 2: Reveal-on-scroll for the sections below.
   ================================================================
*/
import type { Metadata } from "next";
import Intro from "@/components/home/Intro";
import HomeNav from "@/components/home/HomeNav";
import ContactModal from "@/components/home/ContactModal";
import Hero from "@/components/home/Hero";
import WhoWeAre from "@/components/home/WhoWeAre";
import OurPromise from "@/components/home/OurPromise";
import Services from "@/components/home/Services";
import Finder from "@/components/home/Finder";
import HowWeWork from "@/components/home/HowWeWork";
import OurWork from "@/components/home/OurWork";
import Offers from "@/components/home/Offers";
import Topics from "@/components/home/Topics";
import Faq from "@/components/home/Faq";
import ContactSection from "@/components/home/ContactSection";
import BackToTop from "@/components/home/BackToTop";
import HomeFooter from "@/components/home/HomeFooter";
import HomeScripts from "@/components/scripts/HomeScripts";
import "@/lib/fonts/home";
import "@/styles/home-base.css";
import "@/styles/contact.css";
import "@/styles/mega.css";
import "@/styles/home.css";
import "@/styles/home-light.css";

export const metadata: Metadata = {
  title: "Envision Digital",
  description:
    "Websites, search visibility and conversion strategy for Melbourne businesses that want the phone to ring.",
};

// coming back from another page, or arriving on a link to a section, skips the opening: hide it before the first paint
// (lib/client/home.js then takes it down properly)
const SKIP_INTRO = `try { if (sessionStorage.getItem("envision-skip-intro") === "1" || /^#[\\w-]+$/.test(location.hash)) document.documentElement.dataset.skipIntro = ""; } catch (e) {}`;

export default function Home() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: SKIP_INTRO }} />
      <Intro />
      <div id="torch" aria-hidden="true">
        <div className="torch-glow"></div>
        <div className="torch-grid"></div>
      </div>
      <a className="skip" href="#who">
        Skip to content
      </a>
      <HomeNav />
      <ContactModal />
      <Hero />
      <WhoWeAre />
      <OurPromise />
      <Services />
      <Finder />
      <HowWeWork />
      <OurWork />
      <Offers />
      <Topics />
      <Faq />
      <ContactSection />
      <BackToTop />
      <HomeFooter />
      <HomeScripts />
    </>
  );
}
