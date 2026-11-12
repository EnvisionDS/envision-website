// The particle sculpture beside each service's overview (drawn with three.js by lib/client/sculpture.js): which shape
// the points gather into for each service. A service not listed here gets the globe.
export type Shape = "globe" | "knot" | "funnel" | "panels" | "wave" | "rings" | "lattice" | "helix" | "bars" | "links";

export const SHAPE: Record<string, Shape> = {
  // websites
  "website-design": "panels", // browser windows, layered
  "website-development": "helix", // code, built strand by strand
  ecommerce: "lattice", // a store of products, shelf on shelf
  "ux-ui-design": "wave", // the flow through a site
  conversion: "funnel", // visitors in, enquiries out
  "website-maintenance": "globe", // a site kept up, all the way round
  // marketing
  seo: "bars", // climbing the results
  "google-business-profile": "globe", // found on the map
  "paid-ads": "rings", // on target
  "content-creation": "wave",
  "social-media": "knot", // conversations that loop back
  "call-form-tracking": "funnel",
  // automation
  "crm-setup": "lattice", // every contact in its place
  "email-crm": "helix",
  "lead-capture": "funnel",
  "booking-reminders": "rings", // like a clock face
  "review-requests": "bars",
  automation: "knot", // one flow, running on its own
  "connecting-tools": "links", // two tools, joined
  // consulting
  "digital-strategy": "rings",
  audits: "bars",
  "software-selection": "lattice",
  "process-reviews": "knot",
  "location-strategy": "globe",
};
