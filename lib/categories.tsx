// Each service category's page: the general information. The services listed on it come from the Services menu
// (lib/menu.tsx), so they stay in step. components/services/CategoryPage.tsx lays it out.
import type { GroupId } from "./menu";
import type { Step } from "./services";

export type Category = {
  description: string;
  lede: string;
  photos: string[];
  overview: string[];
  servicesHeading: string;
  benefitsHeading: string;
  benefits: string[];
  bestFor: string;
  stepsHeading: string;
  steps: Step[];
  ctaText: string;
};

const reply = "We reply Monday to Friday, usually within one business day.";

export const CATEGORIES: Record<GroupId, Category> = {
  web: {
    description: "We design, build and look after websites that read clearly, load fast and make it easy for people to get in touch.",
    lede: "We design, build and look after websites that read clearly, load fast and make it easy for people to get in touch.",
    photos: ["/img/ph-web-designer.jpg", "/img/ph-web-dev.jpg", "/img/ph-team-laptops.jpg"],
    overview: [
      "Your website is usually the first place people check you out, and often where they decide whether to get in touch. It needs to look professional, but it also has to say the right thing clearly, work properly on a phone and make the next step obvious.",
      "We look after the whole job, from planning and design through to build, launch and ongoing care. Whether you need a new website, an online store or a better result from the site you already have, it's one team working towards more enquiries and sales.",
    ],
    servicesHeading: "Everything your website needs",
    benefitsHeading: "Websites that turn visitors into enquiries",
    benefits: [
      "Explains what you do in seconds",
      "Works properly on every phone and screen",
      "Loads fast and shows up in search",
      "Makes it easy to call, enquire or buy",
      "Stays secure and up to date after launch",
      "Comes with a plain-English handover",
    ],
    bestFor: "Businesses starting from scratch, rebuilding a site that's let them down, or selling online for the first time.",
    stepsHeading: "How we approach a website project",
    steps: [
      { title: "Plan", text: "We learn about your business and customers, and map out what the site needs to do.", get: "a clear plan and page structure" },
      { title: "Design", text: "We design the pages in your brand, built around the actions that matter most.", get: "designs to review" },
      { title: "Build", text: "We build it properly, so it's fast, secure and easy to manage.", get: "a working site to try" },
      { title: "Launch and look after", text: "We test everything, go live and stay on hand for updates and fixes.", get: "a live site and ongoing support" },
    ],
    ctaText: `Tell us about your business and what you need help with, and we'll talk through your website and the best next step. ${reply}`,
  },
  mkt: {
    description: "Search, ads, content and social media that put you in front of the right people, with clear reporting on what each one brings in.",
    lede: "Search, ads, content and social media that put you in front of the right people, in the suburbs that matter.",
    photos: ["/img/ph-mkt-phone.jpg", "/img/ph-owner-phone.jpg", "/img/ph-shop-counter.jpg"],
    overview: [
      "Good marketing puts you in front of people who already need what you offer, at the moment they're looking. That means being easy to find in search, showing up with the right ads, and having content and social media that build trust before anyone picks up the phone.",
      "We plan these channels together rather than one at a time, then track what each one brings in. You can see where your enquiries come from, and your budget goes to what's working.",
    ],
    servicesHeading: "Every channel, planned as one",
    benefitsHeading: "Be found by the people ready to buy",
    benefits: [
      "More of the right people finding you",
      "Ads aimed at people ready to buy",
      "Content that answers what customers ask",
      "A consistent presence people recognise",
      "Clear reports on what each channel brings in",
      "Budget moved to what's working",
    ],
    bestFor: "Businesses with a solid website that need more enquiries, or those spending on marketing without knowing what it brings in.",
    stepsHeading: "How we approach your marketing",
    steps: [
      { title: "Research", text: "We look at your customers, your competitors and what people are searching for.", get: "a picture of the opportunity" },
      { title: "Plan", text: "We choose the channels that suit your goals and budget, and how they'll work together.", get: "a marketing plan" },
      { title: "Launch", text: "We set up your campaigns and content, with tracking in place from day one.", get: "campaigns running and tracked" },
      { title: "Measure and improve", text: "We report on what's bringing in work and adjust as we learn.", get: "plain-English reports" },
    ],
    ctaText: `Tell us about your business and what you need help with, and we'll talk through your marketing and the best next step. ${reply}`,
  },
  auto: {
    description: "Systems that capture every lead, follow up automatically and give your team back their time, even after hours.",
    lede: "Systems that capture every lead, follow up automatically and give your team back their time, even after hours.",
    photos: ["/img/ph-auto-counter.jpg", "/img/ph-auto-dashboard.jpg", "/img/ph-salon.jpg"],
    overview: [
      "Plenty of enquiries are lost after they arrive: a slow reply, a missed follow-up, a booking nobody confirmed. Doing it all by hand takes time, and it gets harder as you grow.",
      "We set up the systems that handle this for you. Every lead lands in one place, follow-up happens automatically, and the tools you already use work together, so your team spends less time on admin and more time with customers.",
    ],
    servicesHeading: "From first enquiry to happy customer",
    benefitsHeading: "Every enquiry captured and followed up",
    benefits: [
      "Every enquiry captured in one place",
      "Faster replies, even after hours",
      "Fewer no-shows and more reviews",
      "Less copying between systems",
      "A clear view of every lead and job",
      "A setup your team will actually use",
    ],
    bestFor: "Busy owners and growing teams losing enquiries to slow replies, or spending too much of the day on admin.",
    stepsHeading: "How we approach your systems",
    steps: [
      { title: "Map", text: "We look at how enquiries and bookings move through your business today.", get: "a map of what happens now" },
      { title: "Set up", text: "We set up or tidy your CRM and build the follow-up your business needs.", get: "your system, ready to test" },
      { title: "Connect and test", text: "We connect your tools and test every step from start to finish.", get: "everything working together" },
      { title: "Train and refine", text: "We show your team how it works and fine-tune it once it's running.", get: "a team that's confident using it" },
    ],
    ctaText: `Tell us about your business and what you need help with, and we'll talk through your systems and the best next step. ${reply}`,
  },
  consult: {
    description: "Clear advice on your strategy, systems and locations, so every decision rests on evidence, not guesswork.",
    lede: "Clear advice on your strategy, systems and locations, so every decision rests on evidence, not guesswork.",
    photos: ["/img/ph-planning.jpg", "/img/ph-team-table.jpg", "/img/ph-shop-counter.jpg"],
    overview: [
      "Before you build, buy or spend, it helps to know where the real opportunity is. A second set of eyes can save you from the wrong website, the wrong software or the wrong location, all of which are expensive to undo.",
      "We work with you on the decisions behind your digital work: what to do first, which tools to choose, how your processes should run and where to focus. You get clear advice and a plan you can act on, whether or not we do the work that follows.",
    ],
    servicesHeading: "Advice for the decisions that matter",
    benefitsHeading: "Know where to focus before you spend",
    benefits: [
      "A clear view of where you stand",
      "Priorities ranked, so you know what comes first",
      "Decisions based on evidence",
      "Honest advice in plain English",
      "Fewer expensive wrong turns",
      "A plan you can act on, with or without us",
    ],
    bestFor: "Owners facing a big decision, planning their next stage of growth, or unsure where to focus next.",
    stepsHeading: "How we approach strategy work",
    steps: [
      { title: "Listen", text: "We talk through your goals, your challenges and the decision in front of you.", get: "a shared view of what matters" },
      { title: "Look at the evidence", text: "We review your data, your market and how things are working now.", get: "the facts in one place" },
      { title: "Advise", text: "We tell you what we'd do, why, and what it would take.", get: "a clear recommendation" },
      { title: "Plan the next steps", text: "We turn the advice into priorities, timing and budget.", get: "a plan you can act on" },
    ],
    ctaText: `Tell us about your business and what you need help with, and we'll talk through your plans and the best next step. ${reply}`,
  },
};
