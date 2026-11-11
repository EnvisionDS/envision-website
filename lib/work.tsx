// Our work: the projects shown on the homepage, and the case study each one opens in its pop-up window.
// Every fact and number here comes from the project itself (its code and documents) or from the live site. Add measured
// results (enquiries, traffic) only once the client has shared them.
export type Stat = { value: string; label: string };
export type Score = { label: string; score: number };
export type Shot = { src: string; alt: string; caption: string };
export type Case = {
  id: string;
  name: string;
  domain: string;
  url: string;
  sector: string;
  place: string;
  color: string;
  logo: React.ReactNode;
  shot: string;
  shotAlt: string;
  headline: string;
  summary: string;
  tags: string[];
  brief: string;
  built: string[];
  stats: Stat[];
  gallery: Shot[];
  stack: string[];
  scores: Score[];
};

// Google Lighthouse, desktop, measured on the live sites (re-measure before quoting new figures)
export const SCORES_MEASURED = "November 2026";

export const CASES: Case[] = [
  {
    id: "edencare",
    name: "EdenCare",
    domain: "edencaredisability.org",
    url: "https://www.edencaredisability.org/",
    sector: "NDIS, aged care and allied health",
    place: "Melbourne",
    color: "#1f9d57",
    logo: (
      <span className="logo-eden">
        <img src="/img/work/eden-mark.svg" alt="" width="34" height="25" />
        <span>
          Eden<b>Care</b>
        </span>
      </span>
    ),
    shot: "/img/work/eden-home.jpg",
    shotAlt: "The EdenCare homepage: Reach Your Full Potential",
    headline: "Reach Your Full Potential",
    summary:
      "A Melbourne provider of NDIS disability support, in-home aged care and allied health. The site sets out their services, from daily living support and dementia care to nursing and 24/7 support, and introduces their team.",
    tags: ["NDIS", "Aged care", "Allied health"],
    brief:
      "EdenCare's previous website was hard to find your way around: several services had no description, and there was no clear path for the people looking for support or for the professionals referring them. They wanted a site that felt warm and trustworthy, not clinical, and made the next step obvious.",
    built: [
      "A full rebuild in a warm, plain-English voice",
      "Two clear paths from the first screen: “I'm looking for support” and “I'm a referral partner”",
      "A page for every service, from personal care to 24/7 support and nursing",
      "Online referral, contact and careers forms, protected from spam",
      "A dashboard where the team edits services, FAQs, testimonials and blog posts, and manages job applications",
      "Google Ads landing pages with conversion tracking",
    ],
    stats: [
      { value: "12", label: "services, each explained on its own page" },
      { value: "2", label: "clear paths: for participants and for referral partners" },
      { value: "4", label: "online forms, from referrals to job applications" },
      { value: "1–2", label: "business days to reply to a referral" },
    ],
    gallery: [
      {
        src: "/img/work/eden-about.jpg",
        alt: "EdenCare's introduction: a trusted NDIS, aged care and allied health provider",
        caption: "Who they are, in a sentence, with the essentials beside it: registered NDIS provider, 12 services, 7 days a week.",
      },
      {
        src: "/img/work/eden-services.jpg",
        alt: "EdenCare's services, each in its own card",
        caption: "Every service in one place, each with a clear description and its own page.",
      },
    ],
    stack: ["Next.js", "Vercel (Sydney)", "PostgreSQL", "Resend email", "Google Tag Manager"],
    scores: [
      { label: "SEO", score: 100 },
      { label: "Accessibility", score: 96 },
    ],
  },
  {
    id: "greater-health",
    name: "Greater Health",
    domain: "greater-health.com.au",
    url: "https://greater-health.com.au/",
    sector: "Mobile exercise physiology",
    place: "South East Melbourne",
    color: "#2b99e8",
    logo: <img className="logo-gh" src="/img/work/gh-logo.png" alt="" width="102" height="36" />,
    shot: "/img/work/gh-home.jpg",
    shotAlt: "The Greater Health homepage: Exercise Physiology that comes to your local gym",
    headline: "Exercise Physiology that comes to you",
    summary:
      "A mobile exercise physiology provider covering 64 suburbs across Melbourne's South East, with hydrotherapy and clinical Pilates. The site brings online booking, referrals for GPs and case managers, and seven funding pathways into one clear journey.",
    tags: ["Online booking", "Referrals", "Local service areas"],
    brief:
      "Greater Health's referral forms lived on an older website, so the buttons sent people somewhere else, and some funding schemes had no form at all. They wanted one clear, phone-friendly site, with separate paths for families and for the GPs and case managers who refer to them.",
    built: [
      "A new site that explains exercise physiology in plain language, with real client video",
      "Separate paths for families (Contact us) and professionals (Make a referral)",
      "An online referral form for each funding pathway, with file uploads and a reference number for every referral",
      "A map of the 64 suburbs they visit, at home, the gym, the pool or the studio",
      "Booking for a free 10-minute chat",
      "Built to be easy for everyone to use: a larger-text switch, a pause-motion switch and generous touch targets",
    ],
    stats: [
      { value: "64", label: "suburbs covered across the South East" },
      { value: "7", label: "funding pathways, each with its own referral form" },
      { value: "4", label: "places they come to you: home, gym, pool or studio" },
      { value: "144", label: "automated checks run on every change" },
    ],
    gallery: [
      {
        src: "/img/work/gh-ep.jpg",
        alt: "Greater Health explains exercise physiology, with myth-or-fact cards",
        caption: "Exercise physiology, explained simply, with quick myth-or-fact cards.",
      },
      {
        src: "/img/work/gh-how.jpg",
        alt: "How it works: from a free chat to your goal",
        caption: "How it works, from a free chat to your goal, in three steps.",
      },
    ],
    stack: ["Eleventy", "Vercel (Sydney)", "Amazon SES email", "Halaxy booking", "GSAP animation"],
    scores: [
      { label: "SEO", score: 100 },
      { label: "Accessibility", score: 90 },
    ],
  },
  {
    id: "macroplan",
    name: "Macroplan",
    domain: "macroplan.com.au",
    url: "https://macroplan.com.au/",
    sector: "Urban economics, property research and planning",
    place: "Melbourne, Sydney and Brisbane",
    color: "#d4b477",
    logo: <img className="logo-macro" src="/img/work/macro-logo.png" alt="" width="100" height="26" />,
    shot: "/img/work/macro-home.jpg",
    shotAlt: "The Macroplan homepage: Know what a place can become, over a 3D map of Melbourne's CBD",
    headline: "Know what a place can become",
    summary:
      "A national urban economics, property research and planning consultancy, advising developers, investors and government since 1985. The site opens on an interactive 3D map of real places and shows how Macroplan thinks, through its projects, sectors and people.",
    tags: ["Interactive 3D map", "Project pages", "Sector pages"],
    brief:
      "Macroplan has been answering big questions about places for 40 years, for clients such as the Victoria State Government, Mirvac, Lendlease and Coles. The new site needed to show how they think, not just list what they do, and make that work easy to explore for developers, investors and government.",
    built: [
      "An interactive 3D map on the homepage: four real places, from the Melbourne CBD to the regions, each with the question Macroplan helps answer",
      "A page for each of seven projects, set out the same way: the question, what Macroplan did, and the published figures",
      "Six sector pages, from retail to energy, each starting with the question a client brings and the services that answer it",
      "A section on Brian Haratsis's new book, AI Cities, with his recent talks and earlier books",
      "The national team, and the Melbourne, Sydney and Brisbane offices on a map",
      "An enquiry form that asks which sector the question is about",
    ],
    stats: [
      { value: "4", label: "real places on the interactive map, each with its own question" },
      { value: "7", label: "projects, each told on its own page" },
      { value: "6", label: "sectors, each with its own page" },
      { value: "3", label: "offices: Melbourne, Sydney and Brisbane" },
    ],
    gallery: [
      {
        src: "/img/work/macro-work.jpg",
        alt: "Macroplan's work page: We answer the big questions",
        caption: "Seven projects, each set out the same way: the question, what Macroplan did, and the figures.",
      },
      {
        src: "/img/work/macro-sector.jpg",
        alt: "Macroplan's retail sector page: Places people choose",
        caption: "A page for every sector, starting with the question a client brings.",
      },
    ],
    stack: ["Next.js", "Vercel", "WebGL 3D map", "GSAP animation", "Lenis smooth scrolling"],
    scores: [
      { label: "SEO", score: 100 },
      { label: "Accessibility", score: 100 },
    ],
  },
];
