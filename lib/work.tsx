// Our work: the projects shown on the homepage, and the case study each one opens in its pop-up window.
// Every fact and number here comes from the project itself (its code and documents) or from the live site. Measured
// results (enquiries, traffic) go in `results`, and only once the client has shared them (EdenCare's are from their
// monthly report).
// the animated icon beside a figure (components/home/CaseWindow.tsx draws them)
export type StatIcon = "pages" | "paths" | "forms" | "clock" | "pin" | "home" | "check" | "map" | "folder" | "grid" | "building" | "inbox" | "phone" | "eye" | "cursor";
export type Stat = { value: string; label: string; icon: StatIcon };
export type Score = { label: string; score: number };
// measured results the client has shared (from their monthly report): the month, where the figures come from, and each
// figure with what it counts and how it changed on the month before
// a result: what's shown, plus each month's figure (oldest first, one per entry in Results.months) for the 3D chart,
// under a short name
export type Result = { value: string; label: string; change?: string; icon: StatIcon; short: string; series: number[] };
export type Results = { period: string; months: string[]; source: string; items: Result[] };
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
  // the case study tells it in order: who they are, the challenge, how we approached it (with what we built), results
  lede: string;
  about: string;
  challenge: string;
  approach: string;
  built: string[];
  stats: Stat[];
  scores: Score[];
  results?: Results;
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
    lede:
      "A warmer, clearer website for a Melbourne care provider, then the ads and monthly reporting to bring people to it.",
    about:
      "EdenCare Support Services is a Melbourne provider of NDIS disability support, in-home aged care and allied health. Their 12 services run from daily living support and dementia care to nursing and 24/7 support, 7 days a week, and they work alongside each person and their family to build a care plan around them.",
    challenge:
      "Their previous website was hard to find your way around: several services had no description, and there was no clear path for the people looking for support or for the professionals referring them. It needed to feel warm and trustworthy, not clinical, and make the next step obvious. Once it was live, it also needed the right people to find it.",
    approach:
      "We started with the two groups who come to the site, people looking for support and the professionals who refer them, and gave each a clear path from the first screen. Then we rebuilt every page in a warm, plain-English voice, gave each service its own page, and put the team in charge of their own content. Once the site was live, we sent Google Ads to it and report on what they bring in every month.",
    built: [
      "A full rebuild in a warm, plain-English voice",
      "Two clear paths from the first screen: “I'm looking for support” and “I'm a referral partner”",
      "A page for every service, from personal care to 24/7 support and nursing",
      "Online referral, contact and careers forms, protected from spam",
      "A dashboard where the team edits services, FAQs, testimonials and blog posts, and manages job applications",
      "Google Ads landing pages with conversion tracking",
    ],
    stats: [
      { value: "12", label: "services, each explained on its own page", icon: "pages" },
      { value: "2", label: "clear paths: for participants and for referral partners", icon: "paths" },
      { value: "4", label: "online forms, from referrals to job applications", icon: "forms" },
      { value: "1–2", label: "business days to reply to a referral", icon: "clock" },
    ],
    scores: [
      { label: "SEO", score: 100 },
      { label: "Accessibility", score: 96 },
    ],
    // EdenCare's monthly marketing report for October 2026 (the second full month of Google Ads), compared with
    // September. Left out on purpose: the ads' cost per enquiry, which the report itself says looks better than it is
    // (most of those enquiries followed searches for other providers).
    results: {
      period: "September–October 2026",
      months: ["August", "September", "October"],
      source:
        "From EdenCare's monthly reports for September and October: Google Analytics, Google Ads and Google Business Profile. August, before the first full month of ads, is the starting point.",
      items: [
        { value: "27", label: "enquiries through the website over the two months: phone taps, contact forms and email clicks", change: "More than doubled: 7 in August, 16 in October", icon: "inbox", short: "Enquiries", series: [7, 11, 16] },
        { value: "22", label: "taps on the phone number on the website over the two months", change: "More than doubled: 6 in August, 13 in October", icon: "phone", short: "Phone taps", series: [6, 9, 13] },
        { value: "341", label: "times their Google Business Profile was seen on Search and Maps over the two months", change: "Up 25%: 146 in August, 183 in October", icon: "eye", short: "Profile views", series: [146, 158, 183] },
        { value: "7.3%", label: "of people who saw the Google ads clicked through to the site, across both months", change: "Up from 5.1% in August", icon: "cursor", short: "Click rate (%)", series: [5.1, 7.2, 7.5] },
      ],
    },
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
    lede:
      "One clear, phone-friendly site for a mobile exercise physiology team, with a path for families and one for referrers.",
    about:
      "Greater Health is a mobile exercise physiology provider covering 64 suburbs across Melbourne's South East. Their exercise physiologists come to clients at home, the gym, the pool or the studio, with hydrotherapy and clinical Pilates, and they work across seven funding pathways.",
    challenge:
      "Their referral forms lived on an older website, so the buttons sent people somewhere else, and some funding schemes had no form at all. Families and the GPs and case managers who refer to them need different things, and they wanted one clear, phone-friendly site that served both.",
    approach:
      "We brought everything onto one site and split it from the first screen: Contact us for families, Make a referral for professionals. Each funding pathway got its own referral form, so no one is sent elsewhere, and we explained exercise physiology in plain language with real client video. Then we made it easy for everyone to use, from a larger-text switch to generous touch targets.",
    built: [
      "A new site that explains exercise physiology in plain language, with real client video",
      "Separate paths for families (Contact us) and professionals (Make a referral)",
      "An online referral form for each funding pathway, with file uploads and a reference number for every referral",
      "A map of the 64 suburbs they visit, at home, the gym, the pool or the studio",
      "Booking for a free 10-minute chat",
      "Built to be easy for everyone to use: a larger-text switch, a pause-motion switch and generous touch targets",
    ],
    stats: [
      { value: "64", label: "suburbs covered across the South East", icon: "pin" },
      { value: "7", label: "funding pathways, each with its own referral form", icon: "paths" },
      { value: "4", label: "places they come to you: home, gym, pool or studio", icon: "home" },
      { value: "144", label: "automated checks run on every change", icon: "check" },
    ],
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
    lede:
      "A website that shows how a national urban economics consultancy thinks, starting with a 3D map of real places.",
    about:
      "Macroplan is a national urban economics, property research and planning consultancy, advising developers, investors and government since 1985. Clients include the Victoria State Government, Mirvac, Lendlease and Coles, and the team works from offices in Melbourne, Sydney and Brisbane.",
    challenge:
      "Macroplan has been answering big questions about places for 40 years. The new site needed to show how they think, not just list what they do, and make that work easy to explore for three very different audiences: developers, investors and government.",
    approach:
      "We built the site around questions, the way Macroplan works. The homepage opens on an interactive 3D map of real places, each with the question Macroplan helps answer. Every project page is set out the same way, the question, what Macroplan did and the published figures, and each sector page starts with the question a client brings.",
    built: [
      "An interactive 3D map on the homepage: four real places, from the Melbourne CBD to the regions, each with the question Macroplan helps answer",
      "A page for each of seven projects, set out the same way: the question, what Macroplan did, and the published figures",
      "Six sector pages, from retail to energy, each starting with the question a client brings and the services that answer it",
      "A section on Brian Haratsis's new book, AI Cities, with his recent talks and earlier books",
      "The national team, and the Melbourne, Sydney and Brisbane offices on a map",
      "An enquiry form that asks which sector the question is about",
    ],
    stats: [
      { value: "4", label: "real places on the interactive map, each with its own question", icon: "map" },
      { value: "7", label: "projects, each told on its own page", icon: "folder" },
      { value: "6", label: "sectors, each with its own page", icon: "grid" },
      { value: "3", label: "offices: Melbourne, Sydney and Brisbane", icon: "building" },
    ],
    scores: [
      { label: "SEO", score: 100 },
      { label: "Accessibility", score: 100 },
    ],
  },
];
