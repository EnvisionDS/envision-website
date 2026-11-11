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
];
