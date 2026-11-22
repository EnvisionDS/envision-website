// The Services menu: four groups, each with its own colour, and the services in each (in menu order). The groups have
// no pages of their own. The mega menu, the Services page, the page labels, the mobile menu and the contact form read from here.
import type { ReactNode } from "react";

export type GroupId = "web" | "mkt" | "auto" | "consult";
export type MenuGroup = {
  id: GroupId;
  name: string;
  color: string;
  icon: ReactNode;
  summary: string; // a sentence about the group, on the Services page
  items: string[];
};

export const MENU_TITLE = "Our services";
export const MENU_FOOT = {
  text: "Not sure where to start? Three quick questions will point you there.",
  link: "Find your starting point",
  anchor: "finder",
};

export const GROUPS: MenuGroup[] = [
  {
    id: "web",
    name: "Web Design & Development",
    color: "#5b9be6",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M8 20h8M12 16v4" />
      </>
    ),
    summary: "We design, build and look after websites that read clearly, load fast and make it easy for people to get in touch.",
    items: ["website-design", "ecommerce", "ux-ui-design", "conversion", "website-maintenance"],
  },
  {
    id: "mkt",
    name: "Digital Marketing",
    color: "#5b9be6",
    icon: (
      <>
        <path d="M4 10v4h3l6 4V6l-6 4z" />
        <path d="M17 9a4 4 0 0 1 0 6M19.5 6.5a7.5 7.5 0 0 1 0 11" />
      </>
    ),
    summary: "Search, ads, social media and local strategy that put you in front of the right people, in the suburbs that matter.",
    items: ["seo", "paid-ads", "content-creation", "social-media", "call-form-tracking"],
  },
  {
    id: "auto",
    name: "Automation & CRM",
    color: "#2f80c9",
    icon: (
      <>
        <rect x="3" y="3" width="6" height="6" rx="1.5" />
        <rect x="15" y="15" width="6" height="6" rx="1.5" />
        <path d="M9 6h6a3 3 0 0 1 3 3v6" />
        <path d="M15.5 12.5L18 15l2.5-2.5" />
      </>
    ),
    summary: "Systems that capture every lead, follow up automatically and give your team back their time, even after hours.",
    items: ["crm-setup", "lead-capture", "booking-reminders", "automation", "connecting-tools"],
  },
  {
    id: "consult",
    name: "Strategy & Consulting",
    color: "#5b9be6",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M15.5 8.5l-2 5-5 2 2-5z" />
      </>
    ),
    summary: "Clear advice on your strategy, systems and locations, so every decision rests on evidence, not guesswork.",
    items: ["digital-strategy", "audits", "software-selection", "process-reviews", "location-strategy"],
  },
];
