// The Services menu: four groups, each with its own colour and page, and the services in each (in menu order).
// The mega menu, the page labels, the category pages, the homepage's cards and mobile menu and the contact form read from here.
import type { ReactNode } from "react";

export type GroupId = "web" | "mkt" | "auto" | "consult";
export type MenuGroup = {
  id: GroupId;
  name: string;
  color: string;
  icon: ReactNode;
  href: string;
  explore: string;
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
    href: "/services/web-design-and-development",
    explore: "Explore web design & development",
    items: ["website-design", "ecommerce", "ux-ui-design", "conversion", "website-maintenance"],
  },
  {
    id: "mkt",
    name: "Digital Marketing",
    color: "#7fe0c8",
    icon: (
      <>
        <path d="M4 10v4h3l6 4V6l-6 4z" />
        <path d="M17 9a4 4 0 0 1 0 6M19.5 6.5a7.5 7.5 0 0 1 0 11" />
      </>
    ),
    href: "/services/digital-marketing",
    explore: "Explore digital marketing",
    items: ["seo", "paid-ads", "content-creation", "social-media", "call-form-tracking"],
  },
  {
    id: "auto",
    name: "Automation & CRM",
    color: "#9ccc65",
    icon: (
      <>
        <rect x="3" y="3" width="6" height="6" rx="1.5" />
        <rect x="15" y="15" width="6" height="6" rx="1.5" />
        <path d="M9 6h6a3 3 0 0 1 3 3v6" />
        <path d="M15.5 12.5L18 15l2.5-2.5" />
      </>
    ),
    href: "/services/automation-and-crm",
    explore: "Explore automation & CRM",
    items: ["crm-setup", "lead-capture", "booking-reminders", "automation", "connecting-tools"],
  },
  {
    id: "consult",
    name: "Strategy & Consulting",
    color: "#ee6c4d",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M15.5 8.5l-2 5-5 2 2-5z" />
      </>
    ),
    href: "/services/strategy-and-consulting",
    explore: "Explore strategy & consulting",
    items: ["digital-strategy", "audits", "software-selection", "process-reviews", "location-strategy"],
  },
];
