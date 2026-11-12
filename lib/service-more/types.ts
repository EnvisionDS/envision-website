// Extra content for the 20 service pages in the Services menu: the staircase of steps (how we deliver this service, in
// order) and two or three information sections. One file per category (web.tsx, mkt.tsx, auto.tsx, consult.tsx), keyed
// by the service's key in lib/services.tsx. Rendered by components/services/ServicePage.tsx.

// the icons a step can use (drawn in components/services/Stairs.tsx)
export type StairIcon =
  | "search" | "chat" | "map" | "layout" | "pen" | "code" | "rocket" | "chart" | "mail" | "bolt" | "target"
  | "calendar" | "star" | "shield" | "cart" | "users" | "phone" | "refresh" | "file" | "settings" | "link"
  | "check" | "eye" | "list";

export type Stair = {
  title: string; // 2–4 words, e.g. "Map the journey"
  text: string; // one short sentence, at most about 90 characters
  icon: StairIcon;
};

// Each page uses two or three of these, each kind at most once, with a topic that suits that service.
export type MoreSection =
  // 3 or 4 cards, each a short title and one or two sentences
  | { kind: "cards"; label: string; heading: string; intro?: string; items: { title: string; text: string }[] }
  // 4 or 5 questions a customer would ask, with plain answers of one to three sentences
  | { kind: "faq"; label: string; heading: string; items: { q: string; a: string }[] }
  // two columns side by side, 3 or 4 points each. By default the left is the weaker way (crossed) and the right ours
  // (ticked): myths / facts, before / after. tone "options" shows two fair choices evenly, with plain bullets.
  | { kind: "compare"; label: string; heading: string; tone?: "options"; left: { title: string; items: string[] }; right: { title: string; items: string[] } }
  // a list of 4 to 6 short points (e.g. what to have ready, signs you need this)
  | { kind: "checklist"; label: string; heading: string; intro?: string; items: string[] };

export type ServiceMore = {
  stairsHeading: string; // e.g. "How we build your online store"
  stairsIntro: string; // one sentence under it
  stairs: Stair[]; // 5 or 6 steps, in order
  sections: MoreSection[]; // 2 or 3, in the order they appear
};
