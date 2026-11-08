// Every service page's content. app/services/[slug]/page.tsx (and app/location-strategy) render these through
// components/services/ServicePage.tsx. "key" is the service's short name (used by the contact form's ?service=),
// "href" its address, "group" its column in the Services menu (lib/menu.tsx) and "color" its accent.
import type { ReactNode } from "react";
import type { GroupId } from "./menu";

export type Step = { title: string; text: string; get: string };
export type Included = ReactNode | { id: string; text: ReactNode };
export type Pair = { key: string; icon: ReactNode; title: string; text: string; cta: string };
export type Service = {
  key: string;
  href: string;
  group: GroupId;
  color: string;
  name: string;
  metaTitle: string;
  description: string;
  kicker: string;
  title: string;
  lede: string;
  photos: string[];
  icon: ReactNode;
  overview: ReactNode[];
  includedHeading: string;
  included: Included[];
  bestFor: string;
  extra?: ReactNode;
  stepsHeading: string;
  steps: Step[];
  pairs: Pair[];
  ctaText: string;
  prev: string;
  next: string;
};

export const SERVICES: Service[] = [
  {
    key: "website-design",
    href: "/services/website-design-and-development",
    group: "web",
    color: "#5b9be6",
    name: "Website design",
    metaTitle: "Website design | Envision",
    description:
      "A website is only as valuable as the results it creates. We design and build websites that communicate clearly, load fast, and are structured to turn visitors into enquiries.",
    kicker: "Web Design & Development",
    title: "Website design",
    lede: "A website is only as valuable as the results it creates. We design and build websites that communicate clearly, load fast, and are structured to turn visitors into enquiries.",
    photos: ["/img/ph-web-designer.jpg", "/img/ph-web-dev.jpg", "/img/ph-team-laptops.jpg"],
    icon: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18M9 9v11" />
      </>
    ),
    overview: [
      "Whether you are starting from scratch or rebuilding, we focus on a clean, professional result that actually works. Every page has a job: say the right thing to the right person, and make the next step obvious.",
    ],
    includedHeading: "What you get with website design",
    included: [
      "Page structure and messaging planned around how your customers decide",
      "Design in your brand, built to read clearly on a phone",
      "Fast, search-friendly development",
      "Enquiry-focused layouts, forms and calls to action",
      "Call and form tracking, launch, and a plain-English handover",
      {
        id: "maintenance",
        text: "Ongoing website maintenance after launch: updates, fixes and small changes, so your site stays fast, secure and current",
      },
    ],
    bestFor: "Businesses starting from nothing, or whose current site looks fine but isn't bringing in enquiries.",
    stepsHeading: "How we design your website",
    steps: [
      {
        title: "Discover",
        text: "We talk through your business, your customers and what the site needs to do, and look at what you have now.",
        get: "a clear brief",
      },
      {
        title: "Structure",
        text: "We plan the pages, the messaging and the path from first visit to enquiry, before any design starts.",
        get: "a sitemap and page outlines",
      },
      {
        title: "Design",
        text: "We design the key pages in your brand, mobile first, and refine them with you.",
        get: "approved designs for every page type",
      },
      {
        title: "Build and launch",
        text: "We build, test on real devices, connect tracking, launch, and walk you through it.",
        get: "a live site and a plain-English handover",
      },
    ],
    pairs: [
      {
        key: "seo",
        icon: (
          <>
            <circle cx="11" cy="11" r="6.5" />
            <path d="M16 16l4.5 4.5" />
          </>
        ),
        title: "SEO & local search",
        text: "If your ideal customers are searching online and not finding you, we fix that.",
        cta: "Read about SEO and content",
      },
      {
        key: "conversion",
        icon: (
          <>
            <circle cx="12" cy="12" r="8" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="12" cy="12" r=".6" />
          </>
        ),
        title: "Conversion optimisation",
        text: "Traffic that does not convert is wasted opportunity.",
        cta: "Read about conversion",
      },
    ],
    ctaText:
      "Tell us about your business and what you need help with, and we'll talk through your website design and the best next step. We reply Monday to Friday, usually within one business day.",
    prev: "location-strategy",
    next: "ecommerce",
  },
  {
    key: "website-development",
    href: "/services/website-development",
    group: "web",
    color: "#5b9be6",
    name: "Website development",
    metaTitle: "Website development | Envision",
    description: "A fast, secure website built properly, so it's easy to manage and ready to grow with you.",
    kicker: "Web Design & Development",
    title: "Website development",
    lede: "A fast, secure website built properly, so it's easy to manage and ready to grow with you.",
    photos: ["/img/ph-web-dev.jpg", "/img/ph-team-laptops.jpg", "/img/ph-web-designer.jpg"],
    icon: (
      <>
        <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 6l-3 12" />
      </>
    ),
    overview: [
      "Good design only works if the site behind it is built well. We develop websites that load quickly, work on every device, are easy for you to update, and connect to the tools you already use, from booking systems to your CRM.",
      "Whether it's a new build from an approved design or rebuilding a site that has become slow or hard to manage, we focus on clean, reliable development you won't have to fight with later.",
    ],
    includedHeading: "What you get",
    included: [
      "Development from approved designs, mobile first",
      "An easy-to-edit content management system",
      "Forms, booking and CRM connections",
      "Speed, security and search-friendly foundations",
      "Testing across browsers and devices",
      "Launch, redirects and a plain-English handover",
    ],
    bestFor: "Businesses with a new design ready to build, or a site that has become slow, fragile or hard to update.",
    stepsHeading: "How we build your website",
    steps: [
      {
        title: "Scope",
        text: "We confirm the pages, features and integrations, and agree the platform that suits how you'll manage the site.",
        get: "a clear build scope",
      },
      {
        title: "Build",
        text: "We develop the site from the approved designs, with clean code and content you can edit yourself.",
        get: "a staging site to review",
      },
      {
        title: "Test",
        text: "We check speed, forms, tracking and every page on phones, tablets and desktops before anything goes live.",
        get: "a site that is ready to launch",
      },
      {
        title: "Launch",
        text: "We go live, set up redirects from old pages, and show you how to make everyday changes.",
        get: "a live site and a handover guide",
      },
    ],
    pairs: [
      {
        key: "website-design",
        icon: (
          <>
            <rect x="3" y="4" width="18" height="16" rx="2" />
            <path d="M3 9h18M9 9v11" />
          </>
        ),
        title: "Website design",
        text: "A website is only as valuable as the results it creates. We design and build websites that communicate clearly, load fast, and are structured to turn visitors into enquiries.",
        cta: "Find out more",
      },
      {
        key: "conversion",
        icon: (
          <>
            <circle cx="12" cy="12" r="8" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="12" cy="12" r=".6" />
          </>
        ),
        title: "Conversion optimisation",
        text: "Traffic that does not convert is wasted opportunity.",
        cta: "Read about conversion",
      },
    ],
    ctaText:
      "Tell us about your business and what you need help with, and we'll talk through your website build and the best next step. We reply Monday to Friday, usually within one business day.",
    prev: "website-design",
    next: "ecommerce",
  },
  {
    key: "ecommerce",
    href: "/services/e-commerce-websites",
    group: "web",
    color: "#5b9be6",
    name: "E-commerce websites",
    metaTitle: "E-commerce websites | Envision",
    description: "Online stores that are easy to browse, simple to buy from and straightforward for you to run.",
    kicker: "Web Design & Development",
    title: "E-commerce websites",
    lede: "Online stores that are easy to browse, simple to buy from and straightforward for you to run.",
    photos: ["/img/ph-web-dev.jpg", "/img/ph-shop-counter.jpg", "/img/ph-owner-phone.jpg"],
    icon: (
      <>
        <circle cx="9" cy="20" r="1.4" />
        <circle cx="18" cy="20" r="1.4" />
        <path d="M2 3h3l2.6 12.5h11L21 7H6" />
      </>
    ),
    overview: [
      "An online store has one job: make it easy for the right people to find a product and buy it. That comes down to clear product pages, a simple checkout and a site that works properly on a phone.",
      "We plan, design and build your store on the platform that suits your range and budget, set up payments and shipping, and make sure orders fit the way you already work.",
    ],
    includedHeading: "What you get",
    included: [
      "Store structure and categories planned around how people shop",
      "Product, cart and checkout pages designed for phones first",
      "Payments, shipping and tax set up",
      "Your products loaded, or moved across from your current store",
      "Search-friendly pages and sales tracking",
      "A plain-English handover so you can run it day to day",
    ],
    bestFor:
      "Businesses selling online for the first time, or with a store that's hard to manage or hard to buy from.",
    stepsHeading: "How we build your store",
    steps: [
      {
        title: "Plan",
        text: "We look at your products, customers and how orders are handled, and choose the platform that fits.",
        get: "a store plan",
      },
      {
        title: "Design",
        text: "We design the pages that matter most, from product pages through to checkout, in your brand.",
        get: "designs to review",
      },
      {
        title: "Build and load",
        text: "We build the store, set up payments and shipping, and load your products.",
        get: "a working store to try",
      },
      {
        title: "Test and launch",
        text: "We run real test orders from start to finish, then launch and show you how it all works.",
        get: "a live store and a handover",
      },
    ],
    pairs: [
      {
        key: "conversion",
        icon: (
          <>
            <circle cx="12" cy="12" r="8" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="12" cy="12" r=".6" />
          </>
        ),
        title: "Conversion optimisation",
        text: "Traffic that does not convert is wasted opportunity.",
        cta: "Find out more",
      },
      {
        key: "paid-ads",
        icon: (
          <>
            <path d="M9 9l10 4-4 1.5L13.5 19z" />
            <path d="M5 5l2 2M9 3v2M3 9h2" />
          </>
        ),
        title: "Google Ads & Meta Ads",
        text: "Google Ads and Meta Ads campaigns that target the right people with the right message. No wasted clicks on low-fit audiences.",
        cta: "Find out more",
      },
    ],
    ctaText:
      "Tell us about your business and what you need help with, and we'll talk through your online store and the best next step. We reply Monday to Friday, usually within one business day.",
    prev: "website-design",
    next: "ux-ui-design",
  },
  {
    key: "ux-ui-design",
    href: "/services/ux-ui-design",
    group: "web",
    color: "#5b9be6",
    name: "UX/UI design",
    metaTitle: "UX/UI design | Envision",
    description:
      "Screens and journeys designed around how your customers think, so your website or app is easy to use and easy to say yes to.",
    kicker: "Web Design & Development",
    title: "UX/UI design",
    lede: "Screens and journeys designed around how your customers think, so your website or app is easy to use and easy to say yes to.",
    photos: ["/img/ph-team-laptops.jpg", "/img/ph-web-designer.jpg", "/img/ph-web-dev.jpg"],
    icon: (
      <>
        <path d="M12 19l7-7 3 3-7 7z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18z" />
        <path d="M2 2l7.6 7.6" />
        <circle cx="11" cy="11" r="2" />
      </>
    ),
    overview: [
      "People decide in seconds whether something feels easy. UX (user experience) is how a visitor moves through your site or app: what they look for, where they get stuck, what makes them act. UI (user interface) is what they see and tap along the way.",
      "We research how your customers think, map the journeys that matter, and design clear, on-brand screens that make the next step obvious, then hand them over ready to build.",
    ],
    includedHeading: "What you get with UX/UI design",
    included: [
      "Research into who your customers are and what they're trying to do",
      "User journeys and site structure planned around the actions that matter",
      "Wireframes that settle the layout before any visual design",
      "Interface design in your brand, built for phones first",
      "Clickable prototypes you can try before anything is built",
      "A simple design system and a developer-ready handover",
    ],
    bestFor:
      "Businesses planning a new website or app, or whose current one gets visitors who leave without getting in touch.",
    stepsHeading: "How we design your experience",
    steps: [
      {
        title: "Understand",
        text: "We talk to you, look at your data and, where we can, your customers, to learn what they need and where they drop off.",
        get: "a short findings summary",
      },
      {
        title: "Map and wireframe",
        text: "We map the key journeys and sketch each screen's layout, so the structure is right before it looks finished.",
        get: "user journeys and wireframes",
      },
      {
        title: "Design and prototype",
        text: "We design the screens in your brand and link them into a clickable prototype you can test on your phone.",
        get: "a prototype to review",
      },
      {
        title: "Test and hand over",
        text: "We test the prototype with real people, refine what trips them up, and hand over everything the build needs.",
        get: "final designs and a handover pack",
      },
    ],
    pairs: [
      {
        key: "website-design",
        icon: (
          <>
            <rect x="3" y="4.5" width="18" height="15" rx="2" />
            <path d="M3 9h18M6.5 6.8h.01M9 6.8h.01" />
          </>
        ),
        title: "Website design",
        text: "A website is only as valuable as the results it creates. We design and build websites that communicate clearly, load fast, and are structured to turn visitors into enquiries.",
        cta: "Find out more",
      },
      {
        key: "conversion",
        icon: (
          <>
            <circle cx="12" cy="12" r="8" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="12" cy="12" r=".6" />
          </>
        ),
        title: "Conversion optimisation",
        text: "Traffic that does not convert is wasted opportunity.",
        cta: "Find out more",
      },
    ],
    ctaText:
      "Tell us about your business and what you need help with, and we'll talk through UX/UI design and the best next step. We reply Monday to Friday, usually within one business day.",
    prev: "ecommerce",
    next: "conversion",
  },
  {
    key: "conversion",
    href: "/services/conversion",
    group: "web",
    color: "#b58cf0",
    name: "Conversion optimisation",
    metaTitle: "Conversion optimisation | Envision",
    description: "Traffic that does not convert is wasted opportunity.",
    kicker: "Web Design & Development",
    title: "Conversion optimisation",
    lede: "Traffic that does not convert is wasted opportunity.",
    photos: ["/img/ph-web-designer.jpg", "/img/ph-web-dev.jpg", "/img/ph-team-laptops.jpg"],
    icon: (
      <>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="12" cy="12" r=".6" />
      </>
    ),
    overview: [
      "We review your key pages, simplify the visitor journey, improve your calls to action, and remove the friction that stops people from taking the next step. Often the fastest win is not more traffic; it is doing more with the traffic you already have.",
    ],
    includedHeading: "What you get with conversion",
    included: [
      "Review of your highest-traffic and highest-value pages",
      "Simplifying the path from landing to enquiry",
      "Clearer calls to action, forms and phone prompts",
      "Call, form and booking tracking so you can see what works",
      "Testing changes and keeping what wins",
    ],
    bestFor: "Businesses already getting visitors, from ads or search, but too few of them are becoming enquiries.",
    stepsHeading: "How we turn more visitors into enquiries",
    steps: [
      {
        title: "Review",
        text: "We look at your traffic, your highest-value pages and where visitors drop off before getting in touch.",
        get: "a list of the biggest leaks",
      },
      {
        title: "Prioritise",
        text: "We rank the fixes by likely impact and effort, so the quick wins go first.",
        get: "a prioritised action plan",
      },
      {
        title: "Improve",
        text: "We rework calls to action, forms, layout and messaging on the pages that matter most.",
        get: "updated pages, live and tracked",
      },
      {
        title: "Test and keep",
        text: "We measure each change against real enquiries and keep what wins.",
        get: "a regular report on what changed and why",
      },
    ],
    pairs: [
      {
        key: "website-design",
        icon: (
          <>
            <rect x="3" y="4.5" width="18" height="15" rx="2" />
            <path d="M3 9h18M6.5 6.8h.01M9 6.8h.01" />
          </>
        ),
        title: "Website design",
        text: "A website is only as valuable as the results it creates. We design and build websites that communicate clearly, load fast, and are structured to turn visitors into enquiries.",
        cta: "Read about website design",
      },
      {
        key: "paid-ads",
        icon: (
          <>
            <path d="M4 10v4h3l7 4V6L7 10H4z" />
            <path d="M17.5 9.5a3.5 3.5 0 0 1 0 5" />
          </>
        ),
        title: "Google Ads & Meta Ads",
        text: "Google Ads and Meta Ads campaigns that target the right people with the right message. No wasted clicks on low-fit audiences.",
        cta: "Read about paid ads",
      },
    ],
    ctaText:
      "Tell us about your business and what you need help with, and we'll talk through converting more of your visitors and the best next step. We reply Monday to Friday, usually within one business day.",
    prev: "ux-ui-design",
    next: "website-maintenance",
  },
  {
    key: "website-maintenance",
    href: "/services/website-maintenance",
    group: "web",
    color: "#5b9be6",
    name: "Website maintenance & support",
    metaTitle: "Website maintenance & support | Envision",
    description: "Ongoing care that keeps your website fast, secure and up to date, so you can focus on your business.",
    kicker: "Web Design & Development",
    title: "Website maintenance & support",
    lede: "Ongoing care that keeps your website fast, secure and up to date, so you can focus on your business.",
    photos: ["/img/ph-web-designer.jpg", "/img/ph-web-dev.jpg", "/img/ph-team-laptops.jpg"],
    icon: (
      <>
        <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z" />
      </>
    ),
    overview: [
      "A website needs looking after once it's live. Software needs updating, small things break, content goes out of date and security risks change.",
      "Our maintenance service takes care of that for you, with regular updates, checks and fixes, plus help with the small changes you need along the way.",
    ],
    includedHeading: "What you get",
    included: [
      "Software, plugin and security updates",
      "Regular checks for errors, broken links and downtime",
      "Fixes when something isn't working",
      "Help with small content changes, like text and images",
      "Speed and performance checks",
      "A simple monthly summary of what we've done",
    ],
    bestFor: "Businesses that want their website looked after properly, without having to manage it themselves.",
    stepsHeading: "How we look after your website",
    steps: [
      {
        title: "Health check",
        text: "We review your site, its platform and its hosting to see what needs attention now.",
        get: "a starting health report",
      },
      {
        title: "Plan",
        text: "We agree what is covered, how often we check in, and how you send us change requests.",
        get: "a maintenance plan that fits your budget",
      },
      {
        title: "Look after",
        text: "We keep everything updated, watch for problems and fix issues as they come up.",
        get: "a site that stays fast and secure",
      },
      {
        title: "Report",
        text: "Each month we let you know what we've updated, fixed and changed.",
        get: "a monthly summary",
      },
    ],
    pairs: [
      {
        key: "conversion",
        icon: (
          <>
            <circle cx="12" cy="12" r="8" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="12" cy="12" r=".6" />
          </>
        ),
        title: "Conversion optimisation",
        text: "Traffic that does not convert is wasted opportunity.",
        cta: "Read about conversion",
      },
      {
        key: "website-development",
        icon: (
          <>
            <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 6l-3 12" />
          </>
        ),
        title: "Website development",
        text: "A fast, secure website built properly, so it's easy to manage and ready to grow with you.",
        cta: "Find out more",
      },
    ],
    ctaText:
      "Tell us about your business and what you need help with, and we'll talk through looking after your website and the best next step. We reply Monday to Friday, usually within one business day.",
    prev: "conversion",
    next: "seo",
  },
  {
    key: "seo",
    href: "/services/seo-and-content-strategy",
    group: "mkt",
    color: "#7fe0c8",
    name: "SEO & local search",
    metaTitle: "SEO & local search | Envision",
    description: "If your ideal customers are searching online and not finding you, we fix that.",
    kicker: "Digital Marketing",
    title: "SEO & local search",
    lede: "If your ideal customers are searching online and not finding you, we fix that.",
    photos: ["/img/ph-mkt-phone.jpg", "/img/ph-owner-phone.jpg", "/img/ph-shop-counter.jpg"],
    icon: (
      <>
        <circle cx="11" cy="11" r="6" />
        <path d="M20 20l-4.5-4.5" />
      </>
    ),
    overview: [
      "We build intent-led pages, optimise your site structure, and develop content that brings qualified, local traffic to your business over time. The aim is not traffic for its own sake; it is the searches that turn into calls.",
    ],
    includedHeading: "What you get with SEO and content",
    included: [
      "Local keyword and intent research",
      "Service and suburb pages built around what people actually search",
      "Site structure, speed and technical fixes",
      "A content plan you can keep up with",
      "Google Business Profile and local signals",
      "Monthly reporting on rankings, traffic and enquiries",
    ],
    bestFor:
      "Businesses whose customers search before they buy, and who want a channel that compounds rather than one that stops when the spend stops.",
    stepsHeading: "How we grow your search visibility",
    steps: [
      {
        title: "Research",
        text: "We look at what your customers search for, who ranks now, and where your site stands.",
        get: "a keyword and competitor map",
      },
      {
        title: "Fix the foundations",
        text: "We sort out the site structure, speed and technical issues holding your rankings back.",
        get: "a search-ready website",
      },
      {
        title: "Build content",
        text: "We create service and suburb pages, and a content plan built around real searches.",
        get: "new pages that target real demand",
      },
      {
        title: "Grow and report",
        text: "We track rankings, traffic and enquiries each month, and adjust the plan.",
        get: "a monthly report and next steps",
      },
    ],
    pairs: [
      {
        key: "website-design",
        icon: (
          <>
            <rect x="3" y="4.5" width="18" height="15" rx="2" />
            <path d="M3 9h18M6.5 6.8h.01M9 6.8h.01" />
          </>
        ),
        title: "Website design",
        text: "A website is only as valuable as the results it creates. We design and build websites that communicate clearly, load fast, and are structured to turn visitors into enquiries.",
        cta: "Read about website design",
      },
      {
        key: "paid-ads",
        icon: (
          <>
            <path d="M4 10v4h3l7 4V6L7 10H4z" />
            <path d="M17.5 9.5a3.5 3.5 0 0 1 0 5" />
          </>
        ),
        title: "Google Ads & Meta Ads",
        text: "Google Ads and Meta Ads campaigns that target the right people with the right message. No wasted clicks on low-fit audiences.",
        cta: "Read about paid ads",
      },
    ],
    ctaText:
      "Tell us about your business and what you need help with, and we'll talk through SEO and local search and the best next step. We reply Monday to Friday, usually within one business day.",
    prev: "website-maintenance",
    next: "paid-ads",
  },
  {
    key: "google-business-profile",
    href: "/services/google-business-profile",
    group: "mkt",
    color: "#7fe0c8",
    name: "Google Business Profile",
    metaTitle: "Google Business Profile | Envision",
    description: "Show up in Google Maps and local searches, with a profile that makes people want to call.",
    kicker: "Digital Marketing",
    title: "Google Business Profile",
    lede: "Show up in Google Maps and local searches, with a profile that makes people want to call.",
    photos: ["/img/ph-shop-counter.jpg", "/img/ph-mkt-phone.jpg", "/img/ph-owner-phone.jpg"],
    icon: (
      <>
        <path d="M12 21s-6-5.5-6-11a6 6 0 0 1 12 0c0 5.5-6 11-6 11z" />
        <circle cx="12" cy="10" r="2" />
      </>
    ),
    overview: [
      "When someone searches for a service near them, your Google Business Profile is often the first thing they see, before your website.",
      "We set up or tidy up your profile so it's complete, accurate and convincing: the right categories, services, photos, hours and service areas, plus regular posts and reviews. That helps you appear in the map results and gives people a reason to choose you.",
    ],
    includedHeading: "What you get",
    included: [
      "Profile setup, verification help or a full clean-up",
      "Categories, services and service areas set up properly",
      "Photos, descriptions and details that sell",
      "Regular posts and updates",
      "A system for getting and answering reviews",
      "Reporting on calls, direction requests and website clicks",
    ],
    bestFor: "Local businesses that rely on people nearby finding them, from clinics and trades to cafes and studios.",
    stepsHeading: "How we improve your profile",
    steps: [
      {
        title: "Audit",
        text: "We review your profile against local competitors and check every detail.",
        get: "a list of gaps and quick wins",
      },
      {
        title: "Optimise",
        text: "We update categories, services, areas, photos and descriptions so your profile is complete.",
        get: "a stronger, complete profile",
      },
      {
        title: "Keep it active",
        text: "We post updates and help you collect and reply to reviews.",
        get: "a profile that stays fresh",
      },
      {
        title: "Report",
        text: "We track the calls, direction requests and clicks your profile brings in.",
        get: "regular results in plain English",
      },
    ],
    pairs: [
      {
        key: "seo",
        icon: (
          <>
            <circle cx="11" cy="11" r="6" />
            <path d="M20 20l-4.5-4.5" />
          </>
        ),
        title: "SEO & local search",
        text: "If your ideal customers are searching online and not finding you, we fix that.",
        cta: "Find out more",
      },
      {
        key: "review-requests",
        icon: (
          <>
            <path d="M12 4l2.4 5 5.4.6-4 3.7 1.1 5.4L12 16l-4.9 2.7 1.1-5.4-4-3.7 5.4-.6z" />
          </>
        ),
        title: "Review requests",
        text: "More reviews from happy customers, asked at the right moment, without you having to remember.",
        cta: "Find out more",
      },
    ],
    ctaText:
      "Tell us about your business and what you need help with, and we'll talk through your Google Business Profile and the best next step. We reply Monday to Friday, usually within one business day.",
    prev: "seo",
    next: "paid-ads",
  },
  {
    key: "paid-ads",
    href: "/services/paid-ads-management",
    group: "mkt",
    color: "#f2b84b",
    name: "Google Ads & Meta Ads",
    metaTitle: "Google Ads & Meta Ads | Envision",
    description:
      "Google Ads and Meta Ads campaigns that target the right people with the right message. No wasted clicks on low-fit audiences.",
    kicker: "Digital Marketing",
    title: "Google Ads & Meta Ads",
    lede: "Google Ads and Meta Ads campaigns that target the right people with the right message. No wasted clicks on low-fit audiences.",
    photos: ["/img/ph-mkt-phone.jpg", "/img/ph-owner-phone.jpg", "/img/ph-shop-counter.jpg"],
    icon: (
      <>
        <path d="M9 9l10 4-4 1.5L13.5 19z" />
        <path d="M5 5l2 2M9 3v2M3 9h2" />
      </>
    ),
    overview: [
      "We focus on lead quality, not just volume, and optimise continuously to improve results. Ads, landing pages and follow-up are planned together so the promise in the ad is the promise on the page.",
    ],
    includedHeading: "What you get with paid ads",
    included: [
      "Campaign strategy and audience targeting",
      "Ad copy and creative direction",
      "Google Ads and Meta Ads setup, including conversion tracking",
      "Landing page alignment",
      "Weekly optimisation and bid management",
      "Plain-English reporting every week",
    ],
    bestFor:
      "Businesses that need enquiries now, are testing a new area or offer, or want a predictable lead channel alongside SEO. Not sure? See the 90-day trial on the home page.",
    stepsHeading: "How we run your ads",
    steps: [
      {
        title: "Plan",
        text: "We agree goals, budget, audiences and areas, and make sure tracking is in place.",
        get: "a campaign plan",
      },
      {
        title: "Build",
        text: "We write the ads, set up the campaigns and match each one to the right landing page.",
        get: "campaigns ready to launch",
      },
      {
        title: "Launch",
        text: "We go live and watch the first results closely, adjusting bids and targeting early.",
        get: "live campaigns, tracked from day one",
      },
      {
        title: "Optimise",
        text: "Each week we cut what isn't working and move budget towards what brings in enquiries.",
        get: "a weekly report and next actions",
      },
    ],
    pairs: [
      {
        key: "conversion",
        icon: (
          <>
            <circle cx="12" cy="12" r="8" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="12" cy="12" r=".6" />
          </>
        ),
        title: "Conversion optimisation",
        text: "Traffic that does not convert is wasted opportunity.",
        cta: "Read about conversion",
      },
      {
        key: "seo",
        icon: (
          <>
            <circle cx="11" cy="11" r="6.5" />
            <path d="M16 16l4.5 4.5" />
          </>
        ),
        title: "SEO & local search",
        text: "If your ideal customers are searching online and not finding you, we fix that.",
        cta: "Read about SEO and content",
      },
    ],
    ctaText:
      "Tell us about your business and what you need help with, and we'll talk through Google Ads and Meta Ads and the best next step. We reply Monday to Friday, usually within one business day.",
    prev: "seo",
    next: "content-creation",
  },
  {
    key: "content-creation",
    href: "/services/content-creation",
    group: "mkt",
    color: "#7fe0c8",
    name: "Content creation",
    metaTitle: "Content creation | Envision",
    description: "Words, photos and videos that answer your customers' questions and help them choose you.",
    kicker: "Digital Marketing",
    title: "Content creation",
    lede: "Words, photos and videos that answer your customers' questions and help them choose you.",
    photos: ["/img/ph-owner-phone.jpg", "/img/ph-shop-counter.jpg", "/img/ph-mkt-phone.jpg"],
    icon: (
      <>
        <path d="M4 20h4L19 9l-4-4L4 16z" />
        <path d="M13 7l4 4" />
      </>
    ),
    overview: [
      "Good content does two jobs: it helps people find you, and it helps them decide you're the right business to call.",
      "We create content around the questions your customers actually ask, from service pages, guides and FAQs to photos, short videos and social posts, all in your voice. Every piece has a purpose, whether that's ranking for a search, answering a common concern, or giving your ads and emails something worth sharing.",
    ],
    includedHeading: "What you get",
    included: [
      "Research into the questions your customers ask",
      "Service pages, guides, FAQs and case studies, written in your voice",
      "Photos, short videos and graphics for your site and social media",
      "Content edited for search and tied to your services and suburbs",
      "A realistic publishing calendar",
      "Reporting on which content brings in enquiries",
    ],
    bestFor:
      "Businesses whose customers research before they buy, or who know they should post more but never have the time.",
    stepsHeading: "How we create your content",
    steps: [
      {
        title: "Research",
        text: "We gather the questions your customers ask, what they search for, and what competitors already cover.",
        get: "a list of content ideas",
      },
      {
        title: "Plan",
        text: "We turn those into a content calendar, ranked by what is most likely to bring in enquiries.",
        get: "a content calendar",
      },
      {
        title: "Create",
        text: "We write, shoot and design the content in your voice, and publish it ready for search and social.",
        get: "new content, live where your customers look",
      },
      {
        title: "Measure",
        text: "We track which pieces bring in traffic and enquiries, and create the next round around them.",
        get: "regular results and next ideas",
      },
    ],
    pairs: [
      {
        key: "seo",
        icon: (
          <>
            <circle cx="11" cy="11" r="6" />
            <path d="M20 20l-4.5-4.5" />
          </>
        ),
        title: "SEO & local search",
        text: "If your ideal customers are searching online and not finding you, we fix that.",
        cta: "Find out more",
      },
      {
        key: "social-media",
        icon: (
          <>
            <path d="M4 5h16v11H9l-5 4z" />
          </>
        ),
        title: "Social media management",
        text: "Social media works when it is consistent, clear, and built around your audience.",
        cta: "Find out more",
      },
    ],
    ctaText:
      "Tell us about your business and what you need help with, and we'll talk through your content and the best next step. We reply Monday to Friday, usually within one business day.",
    prev: "paid-ads",
    next: "social-media",
  },
  {
    key: "social-media",
    href: "/services/social-media",
    group: "mkt",
    color: "#f48fb1",
    name: "Social media management",
    metaTitle: "Social media management | Envision",
    description: "Social media works when it is consistent, clear, and built around your audience.",
    kicker: "Digital Marketing",
    title: "Social media management",
    lede: "Social media works when it is consistent, clear, and built around your audience.",
    photos: ["/img/ph-owner-phone.jpg", "/img/ph-shop-counter.jpg", "/img/ph-mkt-phone.jpg"],
    icon: (
      <>
        <path d="M4 5h16v11H9l-5 4z" />
      </>
    ),
    overview: [
      "We create content strategies and manage your presence in a way that builds genuine trust and drives real enquiry behaviour, not just likes. Posting is the easy part; saying something that makes the right person get in touch is the work.",
    ],
    includedHeading: "What you get with social media",
    included: [
      "Content strategy tied to what your customers are weighing up",
      "A realistic posting calendar",
      "Content creation and scheduling",
      "Community and message management",
      "Boosting and suburb-targeted promotion where it earns its keep",
    ],
    bestFor: "Local businesses where trust and familiarity decide the sale: clinics, trades, hospitality, studios.",
    stepsHeading: "How we run your social media",
    steps: [
      {
        title: "Get to know you",
        text: "We learn your business, your customers and your voice, and review your current accounts.",
        get: "a clear starting point",
      },
      {
        title: "Plan",
        text: "We set the content themes, posting rhythm and the platforms worth your time.",
        get: "a content plan and calendar",
      },
      {
        title: "Create and post",
        text: "We create, schedule and publish content, and manage comments and messages.",
        get: "consistent, on-brand posting",
      },
      {
        title: "Review",
        text: "We look at what's getting engagement and enquiries, and refine the plan.",
        get: "a monthly report and updates",
      },
    ],
    pairs: [
      {
        key: "paid-ads",
        icon: (
          <>
            <path d="M4 10v4h3l7 4V6L7 10H4z" />
            <path d="M17.5 9.5a3.5 3.5 0 0 1 0 5" />
          </>
        ),
        title: "Google Ads & Meta Ads",
        text: "Google Ads and Meta Ads campaigns that target the right people with the right message. No wasted clicks on low-fit audiences.",
        cta: "Read about paid ads",
      },
      {
        key: "email-crm",
        icon: (
          <>
            <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
            <path d="M4 7l8 6 8-6" />
          </>
        ),
        title: "Email follow-up sequences",
        text: "Most leads do not buy immediately.",
        cta: "Read about email and CRM",
      },
    ],
    ctaText:
      "Tell us about your business and what you need help with, and we'll talk through your social media and the best next step. We reply Monday to Friday, usually within one business day.",
    prev: "content-creation",
    next: "call-form-tracking",
  },
  {
    key: "call-form-tracking",
    href: "/services/call-form-tracking",
    group: "mkt",
    color: "#7fe0c8",
    name: "Campaign tracking & reporting",
    metaTitle: "Campaign tracking & reporting | Envision",
    description: "Know exactly which campaigns, pages and searches are bringing in calls and enquiries.",
    kicker: "Digital Marketing",
    title: "Campaign tracking & reporting",
    lede: "Know exactly which campaigns, pages and searches are bringing in calls and enquiries.",
    photos: ["/img/ph-team-laptops.jpg", "/img/ph-web-designer.jpg", "/img/ph-web-dev.jpg"],
    icon: (
      <>
        <path d="M4 20V11M10 20V5M16 20v-6M21 20H3" />
      </>
    ),
    overview: [
      "Most businesses can see their website visits, but not which visits turned into phone calls or form enquiries. We set up tracking for calls, forms and bookings, connected to Google Analytics and your ad accounts, so every enquiry links back to where it came from.",
      "That means you can put your budget into what works, and stop paying for what doesn't.",
    ],
    includedHeading: "What you get",
    included: [
      "Call, form and booking tracking",
      "Regular reports, in plain English, on what's working",
      "Google Analytics and Google Tag Manager setup",
      "Conversion tracking for Google Ads and Meta Ads",
      "A simple dashboard of enquiries by source",
      "Regular checks to keep tracking accurate",
    ],
    bestFor: "Businesses spending on ads or SEO who can't say for sure which channel brings in their customers.",
    stepsHeading: "How we set up your tracking and reporting",
    steps: [
      {
        title: "Map",
        text: "We list every way a customer can get in touch, and every channel sending you traffic.",
        get: "a tracking plan",
      },
      {
        title: "Set up",
        text: "We install call, form and booking tracking, and connect it to analytics and your ad accounts.",
        get: "tracking live across your site",
      },
      {
        title: "Verify",
        text: "We test every call, form and booking path to make sure each one is recorded correctly.",
        get: "numbers you can trust",
      },
      {
        title: "Report",
        text: "We give you a simple view of enquiries by source, and go through it with you.",
        get: "a dashboard and regular check-ins",
      },
    ],
    pairs: [
      {
        key: "conversion",
        icon: (
          <>
            <circle cx="12" cy="12" r="8" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="12" cy="12" r=".6" />
          </>
        ),
        title: "Conversion optimisation",
        text: "Traffic that does not convert is wasted opportunity.",
        cta: "Find out more",
      },
      {
        key: "paid-ads",
        icon: (
          <>
            <path d="M9 9l10 4-4 1.5L13.5 19z" />
            <path d="M5 5l2 2M9 3v2M3 9h2" />
          </>
        ),
        title: "Google Ads & Meta Ads",
        text: "Google Ads and Meta Ads campaigns that target the right people with the right message. No wasted clicks on low-fit audiences.",
        cta: "Find out more",
      },
    ],
    ctaText:
      "Tell us about your business and what you need help with, and we'll talk through tracking your calls and enquiries and the best next step. We reply Monday to Friday, usually within one business day.",
    prev: "social-media",
    next: "crm-setup",
  },
  {
    key: "crm-setup",
    href: "/services/crm-setup",
    group: "auto",
    color: "#9ccc65",
    name: "CRM setup & optimisation",
    metaTitle: "CRM setup & optimisation | Envision",
    description: "Every enquiry in one place, so nothing slips through and your team always knows what's next.",
    kicker: "Automation & CRM",
    title: "CRM setup & optimisation",
    lede: "Every enquiry in one place, so nothing slips through and your team always knows what's next.",
    photos: ["/img/ph-auto-counter.jpg", "/img/ph-auto-dashboard.jpg", "/img/ph-salon.jpg"],
    icon: (
      <>
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <circle cx="12" cy="10" r="2.5" />
        <path d="M8.5 17a3.5 3.5 0 0 1 7 0" />
      </>
    ),
    overview: [
      "Leads come in by phone, email, web forms and social messages, and without a proper system some are bound to be missed.",
      "We set up a CRM that suits the size of your business, or clean up the one you already have, so every enquiry is captured, assigned and followed up. You get a clear view of your pipeline, and a system your team will actually use.",
    ],
    includedHeading: "What you get",
    included: [
      "Choosing a CRM that fits your business and budget",
      "Setup, or a clean-up of your existing CRM",
      "Importing and tidying your contacts",
      "Pipelines and stages that match how you sell",
      "Your website forms and other lead sources connected",
      "Training so your team uses it confidently",
    ],
    bestFor: "Businesses tracking leads in inboxes, spreadsheets or memory, or with a CRM nobody uses properly.",
    stepsHeading: "How we set up your CRM",
    steps: [
      {
        title: "Review",
        text: "We look at how enquiries come in now, who handles them, and where they get lost.",
        get: "a map of your enquiry process",
      },
      {
        title: "Set up",
        text: "We set up or restructure your CRM with pipelines, stages and fields that match how you work.",
        get: "a CRM built around your business",
      },
      {
        title: "Connect and import",
        text: "We bring in your existing contacts and connect your forms and lead sources.",
        get: "every enquiry landing in one place",
      },
      {
        title: "Train",
        text: "We show your team how to use it day to day, and refine it after the first few weeks.",
        get: "a team using it confidently",
      },
    ],
    pairs: [
      {
        key: "email-crm",
        icon: (
          <>
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M3 7l9 6 9-6" />
          </>
        ),
        title: "Email follow-up sequences",
        text: "Most leads do not buy immediately.",
        cta: "Find out more",
      },
      {
        key: "lead-capture",
        icon: (
          <>
            <path d="M4 13l2.5-8h11L20 13v6H4z" />
            <path d="M4 13h4l1.5 2.5h5L16 13h4" />
          </>
        ),
        title: "Lead capture & follow-ups",
        text: "Enquiries from your website, ads and social media go straight into your CRM, with no copying and pasting.",
        cta: "Find out more",
      },
    ],
    ctaText:
      "Tell us about your business and what you need help with, and we'll talk through your CRM and the best next step. We reply Monday to Friday, usually within one business day.",
    prev: "call-form-tracking",
    next: "lead-capture",
  },
  {
    key: "email-crm",
    href: "/services/email-crm",
    group: "auto",
    color: "#4fc3f7",
    name: "Email follow-up sequences",
    metaTitle: "Email and CRM nurture | Envision",
    description: "Most leads do not buy immediately.",
    kicker: "Automation & CRM",
    title: "Email and CRM nurture",
    lede: "Most leads do not buy immediately.",
    photos: ["/img/ph-auto-dashboard.jpg", "/img/ph-salon.jpg", "/img/ph-auto-counter.jpg"],
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </>
    ),
    overview: [
      "We build practical email nurture sequences and CRM workflows that keep warm leads engaged, answer their concerns, and guide them back to a decision when they are ready. This is where many good opportunities quietly die without it.",
    ],
    includedHeading: "What you get with email and CRM",
    included: [
      "CRM setup or clean-up, so every enquiry is captured",
      "Welcome and follow-up sequences written in your voice",
      "Segmenting by service, area or stage",
      "Re-engagement flows for leads that went quiet",
      "Reporting on replies, bookings and revenue, not open rates",
    ],
    bestFor:
      "Services with a longer decision cycle, quotes that need chasing, or a list of past customers that never hears from you.",
    stepsHeading: "How we set up your email follow-up",
    steps: [
      {
        title: "Map",
        text: "We map how a lead becomes a customer, and where follow-up usually stops.",
        get: "a follow-up plan",
      },
      {
        title: "Write",
        text: "We write welcome, follow-up and re-engagement emails in your voice.",
        get: "email sequences ready to review",
      },
      {
        title: "Build",
        text: "We set up the sequences in your CRM or email platform, segmented by service, area or stage.",
        get: "automated follow-up, live",
      },
      {
        title: "Refine",
        text: "We track replies, bookings and revenue, and rework the emails that underperform.",
        get: "regular results and improvements",
      },
    ],
    pairs: [
      {
        key: "automation",
        icon: (
          <>
            <path d="M13 3L5 13h6l-1 8 8-10h-6z" />
          </>
        ),
        title: "Workflow automation",
        text: "Smart automations that handle the repetitive parts of your marketing and follow-up process.",
        cta: "Read about automation",
      },
      {
        key: "conversion",
        icon: (
          <>
            <circle cx="12" cy="12" r="8" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="12" cy="12" r=".6" />
          </>
        ),
        title: "Conversion optimisation",
        text: "Traffic that does not convert is wasted opportunity.",
        cta: "Read about conversion",
      },
    ],
    ctaText:
      "Tell us about your business and what you need help with, and we'll talk through your email follow-up and the best next step. We reply Monday to Friday, usually within one business day.",
    prev: "crm-setup",
    next: "lead-capture",
  },
  {
    key: "lead-capture",
    href: "/services/lead-capture",
    group: "auto",
    color: "#9ccc65",
    name: "Lead capture & follow-ups",
    metaTitle: "Lead capture & follow-ups | Envision",
    description:
      "Enquiries from your website, ads and social media go straight into your CRM, and follow-up starts automatically.",
    kicker: "Automation & CRM",
    title: "Lead capture & follow-ups",
    lede: "Enquiries from your website, ads and social media go straight into your CRM, and follow-up starts automatically.",
    photos: ["/img/ph-salon.jpg", "/img/ph-auto-counter.jpg", "/img/ph-auto-dashboard.jpg"],
    icon: (
      <>
        <path d="M4 13l2.5-8h11L20 13v6H4z" />
        <path d="M4 13h4l1.5 2.5h5L16 13h4" />
      </>
    ),
    overview: [
      "Every time someone fills in a form, messages you on social media or responds to an ad, that lead should land in one place straight away.",
      "We connect your lead sources to your CRM, so each enquiry is recorded with where it came from, the right person is notified, and follow-up can start immediately. No more leads sitting in an inbox or getting lost between systems.",
    ],
    includedHeading: "What you get",
    included: [
      "Website forms connected to your CRM",
      "Leads from Google Ads, Meta and social messages",
      "Automatic follow-up emails and texts, so every lead hears back quickly",
      "The source recorded on every lead",
      "Instant alerts to the right person",
      "Duplicate checks and clean data",
    ],
    bestFor: "Businesses getting enquiries from several places and losing track of some of them.",
    stepsHeading: "How we set up lead capture and follow-up",
    steps: [
      {
        title: "Audit your sources",
        text: "We list every place enquiries come from, and how they're handled now.",
        get: "a full list of lead sources",
      },
      {
        title: "Connect",
        text: "We connect each source to your CRM, with the details and source recorded.",
        get: "every lead flowing into one place",
      },
      {
        title: "Alert",
        text: "We set up notifications so the right person knows the moment a lead arrives.",
        get: "faster responses to new leads",
      },
      {
        title: "Test and monitor",
        text: "We test each path end to end, and keep an eye on it after launch.",
        get: "a system you can rely on",
      },
    ],
    pairs: [
      {
        key: "crm-setup",
        icon: (
          <>
            <rect x="5" y="3" width="14" height="18" rx="2" />
            <circle cx="12" cy="10" r="2.5" />
            <path d="M8.5 17a3.5 3.5 0 0 1 7 0" />
          </>
        ),
        title: "CRM setup & optimisation",
        text: "Every enquiry in one place, so nothing slips through and your team always knows what's next.",
        cta: "Find out more",
      },
      {
        key: "booking-reminders",
        icon: (
          <>
            <rect x="4" y="5" width="16" height="16" rx="2" />
            <path d="M4 10h16M9 3v4M15 3v4M9.5 15.5l2 2 3.5-4" />
          </>
        ),
        title: "Booking reminders & review requests",
        text: "Automatic confirmations and reminders that cut no-shows and save your team time.",
        cta: "Find out more",
      },
    ],
    ctaText:
      "Tell us about your business and what you need help with, and we'll talk through capturing your leads and the best next step. We reply Monday to Friday, usually within one business day.",
    prev: "crm-setup",
    next: "booking-reminders",
  },
  {
    key: "booking-reminders",
    href: "/services/booking-reminders",
    group: "auto",
    color: "#9ccc65",
    name: "Booking reminders & review requests",
    metaTitle: "Booking reminders & review requests | Envision",
    description: "Automatic confirmations, reminders and review requests that cut no-shows and save your team time.",
    kicker: "Automation & CRM",
    title: "Booking reminders & review requests",
    lede: "Automatic confirmations, reminders and review requests that cut no-shows and save your team time.",
    photos: ["/img/ph-auto-counter.jpg", "/img/ph-auto-dashboard.jpg", "/img/ph-salon.jpg"],
    icon: (
      <>
        <rect x="4" y="5" width="16" height="16" rx="2" />
        <path d="M4 10h16M9 3v4M15 3v4M9.5 15.5l2 2 3.5-4" />
      </>
    ),
    overview: [
      "Every booking should get a quick confirmation, and a reminder before the appointment. Doing that by hand takes time and is easy to forget.",
      "We automate booking confirmations, reminders and review requests by email or SMS, connected to your booking system or calendar, so customers turn up prepared and your team spends less time chasing.",
    ],
    includedHeading: "What you get",
    included: [
      "Instant booking confirmations",
      "Reminders by email or SMS before appointments",
      "Easy rescheduling and cancellation links",
      "Review requests sent after each appointment",
      "Connections to your booking system or calendar",
      "Messages written in your voice",
    ],
    bestFor: "Clinics, studios, trades and service businesses that run on appointments.",
    stepsHeading: "How we automate your bookings and reviews",
    steps: [
      {
        title: "Review",
        text: "We look at how bookings are made now, and where no-shows or double handling happen.",
        get: "a clear picture of the gaps",
      },
      {
        title: "Write",
        text: "We write confirmations, reminders and follow-ups that sound like you.",
        get: "messages ready to review",
      },
      {
        title: "Automate",
        text: "We connect the messages to your booking system or calendar and set the timing.",
        get: "automatic confirmations and reminders",
      },
      {
        title: "Fine-tune",
        text: "We check the results, like no-shows and reschedules, and adjust the timing and wording.",
        get: "a smoother booking process",
      },
    ],
    pairs: [
      {
        key: "review-requests",
        icon: (
          <>
            <path d="M12 4l2.4 5 5.4.6-4 3.7 1.1 5.4L12 16l-4.9 2.7 1.1-5.4-4-3.7 5.4-.6z" />
          </>
        ),
        title: "Review requests",
        text: "More reviews from happy customers, asked at the right moment, without you having to remember.",
        cta: "Find out more",
      },
      {
        key: "connecting-tools",
        icon: (
          <>
            <path d="M9 7V3M15 7V3M7 7h10v4a5 5 0 0 1-10 0z" />
            <path d="M12 16v5" />
          </>
        ),
        title: "System integrations",
        text: "Your website, CRM, calendar, phone and email working together, instead of in separate boxes.",
        cta: "Find out more",
      },
    ],
    ctaText:
      "Tell us about your business and what you need help with, and we'll talk through automating your bookings and the best next step. We reply Monday to Friday, usually within one business day.",
    prev: "lead-capture",
    next: "automation",
  },
  {
    key: "review-requests",
    href: "/services/review-requests",
    group: "auto",
    color: "#9ccc65",
    name: "Review requests",
    metaTitle: "Review requests | Envision",
    description: "More reviews from happy customers, asked at the right moment, without you having to remember.",
    kicker: "Automation & CRM",
    title: "Review requests",
    lede: "More reviews from happy customers, asked at the right moment, without you having to remember.",
    photos: ["/img/ph-auto-dashboard.jpg", "/img/ph-salon.jpg", "/img/ph-auto-counter.jpg"],
    icon: (
      <>
        <path d="M12 4l2.4 5 5.4.6-4 3.7 1.1 5.4L12 16l-4.9 2.7 1.1-5.4-4-3.7 5.4-.6z" />
      </>
    ),
    overview: [
      "Reviews are one of the first things people check before choosing a local business, and they help you show up in Google Maps. Most happy customers will leave one if they are asked at the right time and it is easy to do.",
      "We automate review requests after a job or appointment, with a simple link to your Google profile, and help you respond to the reviews that come in.",
    ],
    includedHeading: "What you get",
    included: [
      "Automatic review requests after each job or appointment",
      "Email or SMS messages with a one-tap review link",
      "A gentle follow-up if there's no response",
      "Alerts when new reviews come in",
      "Help writing replies to reviews",
      "Reporting on your review count and rating",
    ],
    bestFor: "Local businesses with happy customers, but not enough reviews to show for it.",
    stepsHeading: "How we automate review requests",
    steps: [
      {
        title: "Pick the moment",
        text: "We work out the best point to ask, usually right after a job or appointment.",
        get: "the right timing for your business",
      },
      {
        title: "Write",
        text: "We write short, friendly requests with a direct link to leave a review.",
        get: "messages ready to go",
      },
      {
        title: "Automate",
        text: "We connect the requests to your CRM, booking system or job software.",
        get: "requests sent automatically",
      },
      {
        title: "Respond and track",
        text: "We help you reply to new reviews, and track how your rating and review count grow.",
        get: "regular review reports",
      },
    ],
    pairs: [
      {
        key: "google-business-profile",
        icon: (
          <>
            <path d="M12 21s-6-5.5-6-11a6 6 0 0 1 12 0c0 5.5-6 11-6 11z" />
            <circle cx="12" cy="10" r="2" />
          </>
        ),
        title: "Google Business Profile",
        text: "Show up in Google Maps and local searches, with a profile that makes people want to call.",
        cta: "Find out more",
      },
      {
        key: "booking-reminders",
        icon: (
          <>
            <rect x="4" y="5" width="16" height="16" rx="2" />
            <path d="M4 10h16M9 3v4M15 3v4M9.5 15.5l2 2 3.5-4" />
          </>
        ),
        title: "Booking reminders & review requests",
        text: "Automatic confirmations and reminders that cut no-shows and save your team time.",
        cta: "Find out more",
      },
    ],
    ctaText:
      "Tell us about your business and what you need help with, and we'll talk through getting more reviews and the best next step. We reply Monday to Friday, usually within one business day.",
    prev: "booking-reminders",
    next: "automation",
  },
  {
    key: "automation",
    href: "/services/automation",
    group: "auto",
    color: "#9ccc65",
    name: "Workflow automation",
    metaTitle: "Workflow automation | Envision",
    description: "Smart automations that handle the repetitive parts of your marketing and follow-up process.",
    kicker: "Automation & CRM",
    title: "Workflow automation",
    lede: "Smart automations that handle the repetitive parts of your marketing and follow-up process.",
    photos: ["/img/ph-auto-counter.jpg", "/img/ph-auto-dashboard.jpg", "/img/ph-salon.jpg"],
    icon: (
      <>
        <rect x="3" y="3" width="6" height="6" rx="1.5" />
        <rect x="15" y="15" width="6" height="6" rx="1.5" />
        <path d="M9 6h6a3 3 0 0 1 3 3v6" />
        <path d="M15.5 12.5L18 15l2.5-2.5" />
      </>
    ),
    overview: [
      "From lead capture to booking confirmations to re-engagement flows, automation helps you do more without adding more to your plate. We connect the tools you already use so nothing falls through the cracks between them.",
    ],
    includedHeading: "What you get with automation",
    included: [
      "Lead capture from website, ads and social straight into your CRM",
      "Instant acknowledgements, booking confirmations and reminders",
      "Handoffs and alerts so the right person follows up fast",
      "Review requests and re-engagement flows",
      "Connecting your website, CRM, calendar, phone and email tools",
    ],
    bestFor: "Busy owners and small teams who lose enquiries to slow replies, double handling or missed follow-ups.",
    stepsHeading: "How we automate your workflows",
    steps: [
      {
        title: "Map",
        text: "We map how enquiries come in, and where follow-up slows down or stops.",
        get: "a map of your enquiry process",
      },
      {
        title: "Plan",
        text: "We choose the automations that will save the most time and catch the most leads.",
        get: "a prioritised automation plan",
      },
      {
        title: "Build",
        text: "We set up lead capture, alerts, confirmations and follow-ups across your tools.",
        get: "automations live and tested",
      },
      {
        title: "Improve",
        text: "We review response times and results, and refine what's running.",
        get: "regular results and improvements",
      },
    ],
    pairs: [
      {
        key: "email-crm",
        icon: (
          <>
            <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
            <path d="M4 7l8 6 8-6" />
          </>
        ),
        title: "Email follow-up sequences",
        text: "Most leads do not buy immediately.",
        cta: "Read about email and CRM",
      },
      {
        key: "conversion",
        icon: (
          <>
            <circle cx="12" cy="12" r="8" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="12" cy="12" r=".6" />
          </>
        ),
        title: "Conversion optimisation",
        text: "Traffic that does not convert is wasted opportunity.",
        cta: "Read about conversion",
      },
    ],
    ctaText:
      "Tell us about your business and what you need help with, and we'll talk through automating your follow-up and the best next step. We reply Monday to Friday, usually within one business day.",
    prev: "booking-reminders",
    next: "connecting-tools",
  },
  {
    key: "connecting-tools",
    href: "/services/connecting-tools",
    group: "auto",
    color: "#9ccc65",
    name: "System integrations",
    metaTitle: "System integrations | Envision",
    description: "Your website, CRM, calendar, phone and email working together, instead of in separate boxes.",
    kicker: "Automation & CRM",
    title: "System integrations",
    lede: "Your website, CRM, calendar, phone and email working together, instead of in separate boxes.",
    photos: ["/img/ph-salon.jpg", "/img/ph-auto-counter.jpg", "/img/ph-auto-dashboard.jpg"],
    icon: (
      <>
        <path d="M9 7V3M15 7V3M7 7h10v4a5 5 0 0 1-10 0z" />
        <path d="M12 16v5" />
      </>
    ),
    overview: [
      "Most small businesses use several tools that don't talk to each other, so information gets typed in twice, updates get missed and jobs fall through the cracks.",
      "We connect the tools you already use, so details flow between them automatically: a new enquiry creates a contact, a booking updates your calendar, a won job triggers the next step. Less admin for you, fewer mistakes, and faster replies for your customers.",
    ],
    includedHeading: "What you get",
    included: [
      "A review of the tools you use and how they connect",
      "Your website, CRM, calendar, phone and email connected",
      "Automations that remove double handling",
      "Handoffs and alerts so the right person follows up",
      "Testing and monitoring of every connection",
      "Simple documentation of how it all works",
    ],
    bestFor: "Busy owners and small teams who spend too much time copying information between systems.",
    stepsHeading: "How we connect your tools",
    steps: [
      {
        title: "Map",
        text: "We map the tools you use, and how information moves between them today.",
        get: "a map of your systems",
      },
      {
        title: "Plan",
        text: "We work out which connections and automations will save the most time.",
        get: "a prioritised automation plan",
      },
      {
        title: "Connect",
        text: "We build and test the connections, starting with the biggest time savers.",
        get: "tools working together",
      },
      {
        title: "Support",
        text: "We monitor the connections and adjust them as your business changes.",
        get: "documentation and ongoing support",
      },
    ],
    pairs: [
      {
        key: "crm-setup",
        icon: (
          <>
            <rect x="5" y="3" width="14" height="18" rx="2" />
            <circle cx="12" cy="10" r="2.5" />
            <path d="M8.5 17a3.5 3.5 0 0 1 7 0" />
          </>
        ),
        title: "CRM setup & optimisation",
        text: "Every enquiry in one place, so nothing slips through and your team always knows what's next.",
        cta: "Find out more",
      },
      {
        key: "lead-capture",
        icon: (
          <>
            <path d="M4 13l2.5-8h11L20 13v6H4z" />
            <path d="M4 13h4l1.5 2.5h5L16 13h4" />
          </>
        ),
        title: "Lead capture & follow-ups",
        text: "Enquiries from your website, ads and social media go straight into your CRM, with no copying and pasting.",
        cta: "Find out more",
      },
    ],
    ctaText:
      "Tell us about your business and what you need help with, and we'll talk through connecting your tools and the best next step. We reply Monday to Friday, usually within one business day.",
    prev: "automation",
    next: "digital-strategy",
  },
  {
    key: "digital-strategy",
    href: "/services/digital-strategy-and-planning",
    group: "consult",
    color: "#ee6c4d",
    name: "Digital strategy & planning",
    metaTitle: "Digital strategy & planning | Envision",
    description: "A clear plan for your website, marketing and systems, so your time and budget go to what matters most.",
    kicker: "Strategy & Consulting",
    title: "Digital strategy & planning",
    lede: "A clear plan for your website, marketing and systems, so your time and budget go to what matters most.",
    photos: ["/img/ph-planning.jpg", "/img/ph-team-table.jpg", "/img/ph-team-laptops.jpg"],
    icon: (
      <>
        <path d="M5 21V4" />
        <path d="M5 4h12l-2.5 4L17 12H5" />
      </>
    ),
    overview: [
      "Most businesses don't need more marketing ideas. They need to know which few things will make the biggest difference, in what order, and what it will take.",
      "We look at where your business is, where you want it to go and what you're already doing, then turn that into a practical plan with priorities, timing and budget. You can run it yourself, or we can help deliver it.",
    ],
    includedHeading: "What you get",
    included: [
      "A review of your goals, customers and competitors",
      "A look at what your website and marketing are delivering now",
      "Priorities ranked by effort and likely impact",
      "A roadmap with timing and budget",
      "The measures that will show whether it's working",
      "A walkthrough of the plan with you and your team",
    ],
    bestFor:
      "Owners who know they need to do more online but aren't sure where to start, or who are spending without a clear plan.",
    stepsHeading: "How we build your plan",
    steps: [
      {
        title: "Listen",
        text: "We talk through your goals, your customers and what you've tried so far.",
        get: "a shared view of your goals",
      },
      {
        title: "Review",
        text: "We look at your website, marketing, results and competitors to see where you stand.",
        get: "a summary of where you are now",
      },
      {
        title: "Plan",
        text: "We work out what matters most and put it in order, with timing and budget.",
        get: "your priorities and roadmap",
      },
      {
        title: "Walk through",
        text: "We take you and your team through the plan and agree the first steps.",
        get: "a plan you can act on",
      },
    ],
    pairs: [
      {
        key: "audits",
        icon: (
          <>
            <rect x="5" y="4" width="14" height="17" rx="2" />
            <path d="M9 4V3h6v1" />
            <path d="M8.5 13l2.5 2.5 4.5-5" />
          </>
        ),
        title: "Website & marketing audits",
        text: "An honest look at what's working, what isn't and what to fix first across your website and marketing.",
        cta: "Find out more",
      },
      {
        key: "location-strategy",
        icon: (
          <>
            <path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z" />
            <path d="M9 4v14M15 6v14" />
          </>
        ),
        title: "Location strategy",
        text: "Before spending on marketing, it pays to understand where your best opportunities actually are.",
        cta: "Find out more",
      },
    ],
    ctaText:
      "Tell us about your business and what you need help with, and we'll talk through your digital strategy and the best next step. We reply Monday to Friday, usually within one business day.",
    prev: "connecting-tools",
    next: "audits",
  },
  {
    key: "audits",
    href: "/services/website-and-marketing-audits",
    group: "consult",
    color: "#ee6c4d",
    name: "Website & marketing audits",
    metaTitle: "Website & marketing audits | Envision",
    description: "An honest look at what's working, what isn't and what to fix first across your website and marketing.",
    kicker: "Strategy & Consulting",
    title: "Website & marketing audits",
    lede: "An honest look at what's working, what isn't and what to fix first across your website and marketing.",
    photos: ["/img/ph-team-laptops.jpg", "/img/ph-auto-dashboard.jpg", "/img/ph-planning.jpg"],
    icon: (
      <>
        <rect x="5" y="4" width="14" height="17" rx="2" />
        <path d="M9 4V3h6v1" />
        <path d="M8.5 13l2.5 2.5 4.5-5" />
      </>
    ),
    overview: [
      "It's hard to see what's holding your marketing back when you're close to it. A website can look fine while enquiries slip away, and ad spend can keep running without anyone checking what it brings in.",
      "We review your website, search presence, ads, social media and tracking, then give you clear findings in plain English with a ranked list of what to fix. You can act on it yourself, or have us do the work.",
    ],
    includedHeading: "What you get",
    included: [
      "Website review: speed, structure, messaging and mobile experience",
      "Search review: visibility, local listings and technical health",
      "Ads and social review: spend, targeting and results",
      "Tracking check: whether your numbers can be trusted",
      "A comparison with your main competitors",
      "A ranked list of fixes, in plain English",
    ],
    bestFor:
      "Businesses whose website or marketing isn't delivering, or who want a second opinion before spending more.",
    stepsHeading: "How we run your audit",
    steps: [
      {
        title: "Get access",
        text: "We agree what to look at and get read-only access to your website, ads and analytics.",
        get: "a clear scope",
      },
      {
        title: "Review",
        text: "We go through each channel and compare what we find with your main competitors.",
        get: "a full review",
      },
      {
        title: "Report",
        text: "We write up what's working and what isn't, without the jargon.",
        get: "plain-English findings",
      },
      {
        title: "Agree next steps",
        text: "We walk you through the findings and rank what to fix first.",
        get: "a prioritised list of fixes",
      },
    ],
    pairs: [
      {
        key: "digital-strategy",
        icon: (
          <>
            <path d="M5 21V4" />
            <path d="M5 4h12l-2.5 4L17 12H5" />
          </>
        ),
        title: "Digital strategy & planning",
        text: "A clear plan for your website, marketing and systems, so your time and budget go to what matters most.",
        cta: "Find out more",
      },
      {
        key: "conversion",
        icon: (
          <>
            <circle cx="12" cy="12" r="8" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="12" cy="12" r=".6" />
          </>
        ),
        title: "Conversion optimisation",
        text: "Traffic that does not convert is wasted opportunity.",
        cta: "Find out more",
      },
    ],
    ctaText:
      "Tell us about your business and what you need help with, and we'll talk through an audit of your website and marketing and the best next step. We reply Monday to Friday, usually within one business day.",
    prev: "digital-strategy",
    next: "software-selection",
  },
  {
    key: "software-selection",
    href: "/services/software-and-platform-selection",
    group: "consult",
    color: "#ee6c4d",
    name: "Software & platform selection",
    metaTitle: "Software & platform selection | Envision",
    description: "Help choosing the right CRM, website platform or business tools, so you buy what fits and skip what you won't use.",
    kicker: "Strategy & Consulting",
    title: "Software & platform selection",
    lede: "Help choosing the right CRM, website platform or business tools, so you buy what fits and skip what you won't use.",
    photos: ["/img/ph-auto-dashboard.jpg", "/img/ph-team-table.jpg", "/img/ph-web-dev.jpg"],
    icon: (
      <>
        <path d="M12 3l9 5-9 5-9-5z" />
        <path d="M3 13l9 5 9-5" />
      </>
    ),
    overview: [
      "There's no shortage of tools promising to run your business better, and the wrong choice is expensive to undo. Every demo looks good. The cost shows up later, in wasted subscriptions, workarounds and data stuck in the wrong place.",
      "We work out what you actually need, compare the realistic options against your budget and the tools you already use, and give you a clear recommendation. If you'd like, we can then set it up and connect it.",
    ],
    includedHeading: "What you get",
    included: [
      "A clear list of what the tool needs to do",
      "A review of your current tools and subscriptions",
      "A shortlist of options compared side by side",
      "Costs compared, including setup and ongoing fees",
      "A clear recommendation and the reasons for it",
      "A plan for setting it up and moving your data",
    ],
    bestFor:
      "Businesses outgrowing spreadsheets, replacing a system that isn't working, or unsure which CRM or platform to choose.",
    stepsHeading: "How we help you choose",
    steps: [
      {
        title: "Work out what you need",
        text: "We talk to the people who'll use it and agree what it has to do.",
        get: "a list of requirements",
      },
      {
        title: "Shortlist",
        text: "We narrow the options down to the few that suit your size and budget.",
        get: "a shortlist",
      },
      {
        title: "Compare",
        text: "We put them side by side on features, fit and full cost.",
        get: "a side-by-side comparison",
      },
      {
        title: "Recommend",
        text: "We tell you which one we'd choose, why, and what it takes to get started.",
        get: "a clear recommendation",
      },
    ],
    pairs: [
      {
        key: "crm-setup",
        icon: (
          <>
            <rect x="5" y="3" width="14" height="18" rx="2" />
            <circle cx="12" cy="10" r="2.5" />
            <path d="M8.5 17a3.5 3.5 0 0 1 7 0" />
          </>
        ),
        title: "CRM setup & optimisation",
        text: "Every enquiry in one place, so nothing slips through and your team always knows what's next.",
        cta: "Find out more",
      },
      {
        key: "connecting-tools",
        icon: (
          <>
            <path d="M9 7V3M15 7V3M7 7h10v4a5 5 0 0 1-10 0z" />
            <path d="M12 16v5" />
          </>
        ),
        title: "System integrations",
        text: "Your website, CRM, calendar, phone and email working together, instead of in separate boxes.",
        cta: "Find out more",
      },
    ],
    ctaText:
      "Tell us about your business and what you need help with, and we'll talk through choosing the right software and the best next step. We reply Monday to Friday, usually within one business day.",
    prev: "audits",
    next: "process-reviews",
  },
  {
    key: "process-reviews",
    href: "/services/business-process-reviews",
    group: "consult",
    color: "#ee6c4d",
    name: "Business process reviews",
    metaTitle: "Business process reviews | Envision",
    description: "See how work really moves through your business, and where time, money and enquiries are being lost.",
    kicker: "Strategy & Consulting",
    title: "Business process reviews",
    lede: "See how work really moves through your business, and where time, money and enquiries are being lost.",
    photos: ["/img/ph-team-table.jpg", "/img/ph-planning.jpg", "/img/ph-auto-counter.jpg"],
    icon: (
      <>
        <circle cx="6" cy="6" r="2.5" />
        <circle cx="18" cy="18" r="2.5" />
        <path d="M8.5 6H15a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h6.5" />
      </>
    ),
    overview: [
      "Processes grow as a business grows, and few are ever designed on purpose. Over time, small workarounds turn into double handling, slow replies and jobs that depend on one person remembering.",
      "We map how your enquiries, bookings and jobs move through your business today, find where things slow down or go missing, and recommend what to simplify, change or automate first.",
    ],
    includedHeading: "What you get",
    included: [
      "Conversations with the people who do the work",
      "Your key processes mapped from enquiry to finished job",
      "Bottlenecks, double handling and gaps identified",
      "Recommendations on what to simplify, change or automate",
      "Priorities ranked by time saved and effort needed",
      "A clear plan for making the changes",
    ],
    bestFor:
      "Growing teams feeling stretched, where admin is eating into the day or work keeps falling through the cracks.",
    stepsHeading: "How we review your processes",
    steps: [
      {
        title: "Talk to the team",
        text: "We sit down with the people doing the work to hear how it really happens.",
        get: "a picture of how things run",
      },
      {
        title: "Map",
        text: "We lay out your key processes from start to finish, including the workarounds.",
        get: "your processes, mapped",
      },
      {
        title: "Find the gaps",
        text: "We pinpoint where time is lost, work doubles up and enquiries go missing.",
        get: "a list of what's slowing you down",
      },
      {
        title: "Recommend",
        text: "We rank what to change first and show what it would take.",
        get: "a plan for the changes",
      },
    ],
    pairs: [
      {
        key: "automation",
        icon: (
          <>
            <rect x="3" y="3" width="6" height="6" rx="1.5" />
            <rect x="15" y="15" width="6" height="6" rx="1.5" />
            <path d="M9 6h6a3 3 0 0 1 3 3v6" />
            <path d="M15.5 12.5L18 15l2.5-2.5" />
          </>
        ),
        title: "Workflow automation",
        text: "Smart automations that handle the repetitive parts of your marketing and follow-up process.",
        cta: "Find out more",
      },
      {
        key: "software-selection",
        icon: (
          <>
            <path d="M12 3l9 5-9 5-9-5z" />
            <path d="M3 13l9 5 9-5" />
          </>
        ),
        title: "Software & platform selection",
        text: "Help choosing the right CRM, website platform or business tools, so you buy what fits and skip what you won't use.",
        cta: "Find out more",
      },
    ],
    ctaText:
      "Tell us about your business and what you need help with, and we'll talk through reviewing your processes and the best next step. We reply Monday to Friday, usually within one business day.",
    prev: "software-selection",
    next: "location-strategy",
  },
  {
    key: "location-strategy",
    href: "/location-strategy",
    group: "consult",
    color: "#ee6c4d",
    name: "Location strategy",
    metaTitle: "Location strategy | Envision",
    description: "Before spending on marketing, it pays to understand where your best opportunities actually are.",
    kicker: "Strategy & Consulting",
    title: "Location strategy",
    lede: "Before spending on marketing, it pays to understand where your best opportunities actually are.",
    photos: ["/img/ph-shop-counter.jpg", "/img/ph-mkt-phone.jpg", "/img/ph-owner-phone.jpg"],
    icon: (
      <>
        <path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z" />
        <path d="M9 4v14M15 6v14" />
      </>
    ),
    overview: [
      "Location Strategy helps businesses make smarter decisions about where to open, expand, advertise, or focus their growth. Instead of guessing, we use location-based data and market insights to identify stronger opportunities. Whether you are choosing your first premises, considering a second location, or trying to reach better-fit customers in nearby areas, it gives you a clearer picture before you commit.",
      "Once we understand where the best opportunities are, we build the right digital strategy around it: local SEO, suburb-based landing pages, Google Ads, Meta Ads, website updates, and content targeting the right audience. When your marketing is built on a clear understanding of your local market, every dollar goes further.",
    ],
    includedHeading: "What you get with location strategy",
    included: [
      "Customer demographics and local demand by suburb",
      "Nearby competitor and opportunity-gap analysis",
      "Accessibility, visibility and search behaviour",
      "A suburb or area comparison with recommended targets",
      "Marketing recommendations built on the findings",
    ],
    bestFor:
      "Choosing a first premises, weighing up a second location, or deciding which nearby areas to advertise in first.",
    extra: (
      <section className="band" aria-labelledby="loc-h">
        <div className="wrap">
          <div className="sec-head rv">
            <p className="label">In detail</p>
            <h2 id="loc-h">Who it suits, what we look at, what you get</h2>
          </div>
          <div className="cols rv">
            <div className="col beam">
              <h3>Who it is for</h3>
              <ul>
                <li>Cafes and restaurants</li>
                <li>Clinics and allied health providers</li>
                <li>Gyms and fitness studios</li>
                <li>Retail stores</li>
                <li>Service-based businesses</li>
                <li>Franchises</li>
                <li>New business owners choosing their first location</li>
                <li>Existing businesses looking to expand</li>
              </ul>
            </div>
            <div className="col beam">
              <h3>What we look at</h3>
              <ul>
                <li>Customer demographics</li>
                <li>Nearby competitors</li>
                <li>Local demand</li>
                <li>Suburb and area trends</li>
                <li>Accessibility and visibility</li>
                <li>Search behaviour</li>
                <li>Opportunity gaps</li>
                <li>Local marketing potential</li>
              </ul>
            </div>
            <div className="col beam">
              <h3>What you receive</h3>
              <ul>
                <li>Location opportunity summary</li>
                <li>Competitor and area insights</li>
                <li>Suburb or area comparison</li>
                <li>Recommended target areas</li>
                <li>Marketing recommendations based on the location insights</li>
              </ul>
            </div>
          </div>
          <div className="snap beam rv">
            <div>
              <p className="label">Free offer · No cost, no obligation</p>
              <h3>Get a free Location Strategy snapshot for your area.</h3>
              <p>
                Book a strategy call and we will put together a focused snapshot of your local market: where the
                opportunity is, who your competitors are, and which areas are worth targeting first. You keep it whether
                you proceed with us or not.
              </p>
            </div>
            <ul className="incl tight">
              <li>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                <span>Suburb and area opportunity summary</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                <span>Nearby competitor overview</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                <span>Local demand and search behaviour</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                <span>Recommended target areas</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    ),
    stepsHeading: "How we build your location strategy",
    steps: [
      {
        title: "Brief",
        text: "We learn about your business, your customers and the decision you're facing.",
        get: "a clear question to answer",
      },
      {
        title: "Research",
        text: "We look at demographics, competitors, local demand, search behaviour and area trends.",
        get: "the data behind the decision",
      },
      {
        title: "Compare",
        text: "We compare suburbs or areas side by side and highlight the opportunity gaps.",
        get: "a ranked shortlist of areas",
      },
      {
        title: "Recommend",
        text: "We recommend where to focus, and the marketing to build around it.",
        get: "a location plan you can act on",
      },
    ],
    pairs: [
      {
        key: "seo",
        icon: (
          <>
            <circle cx="11" cy="11" r="6.5" />
            <path d="M16 16l4.5 4.5" />
          </>
        ),
        title: "SEO & local search",
        text: "If your ideal customers are searching online and not finding you, we fix that.",
        cta: "Read about SEO and content",
      },
      {
        key: "paid-ads",
        icon: (
          <>
            <path d="M4 10v4h3l7 4V6L7 10H4z" />
            <path d="M17.5 9.5a3.5 3.5 0 0 1 0 5" />
          </>
        ),
        title: "Google Ads & Meta Ads",
        text: "Google Ads and Meta Ads campaigns that target the right people with the right message. No wasted clicks on low-fit audiences.",
        cta: "Read about paid ads",
      },
    ],
    ctaText:
      "Tell us about your business and what you need help with, and we'll talk through your location strategy and the best next step. We reply Monday to Friday, usually within one business day.",
    prev: "process-reviews",
    next: "website-design",
  },
];

export const SERVICE_BY_KEY: Record<string, Service> = Object.fromEntries(SERVICES.map((s) => [s.key, s]));
