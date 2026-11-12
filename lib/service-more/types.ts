// Extra content for the 20 service pages in the Services menu: the staircase of steps (how we deliver this service, in
// order) and two or three information sections. One file per category (web.tsx, mkt.tsx, auto.tsx, consult.tsx), keyed
// by the service's key in lib/services.tsx. Rendered by components/services/ServicePage.tsx.

// the icons a step can use (drawn in components/services/More.tsx)
export type StairIcon =
  | "search" | "chat" | "map" | "layout" | "pen" | "code" | "rocket" | "chart" | "mail" | "bolt" | "target"
  | "calendar" | "star" | "shield" | "cart" | "users" | "phone" | "refresh" | "file" | "settings" | "link"
  | "check" | "eye" | "list";

export type Stair = {
  title: string; // 2–4 words, e.g. "Map the journey"
  text: string; // one short sentence, at most about 90 characters
  icon: StairIcon;
};

// Each kind has three layouts, so pages don't all look alike. Leave `layout` out and lib/service-more/index.ts takes
// turns through them across the pages; set it to choose one for a section.
export type Layouts = {
  cards: "grid" | "bento" | "stack"; // a grid of numbered cards / one large card beside smaller ones / cards that stack as you scroll
  faq: "split" | "chat" | "tabs"; // the heading beside opening answers / a conversation / questions as tabs with one answer showing
  compare: "columns" | "toggle" | "table"; // two columns side by side / a switch between the two / matched rows, one against the other
  checklist: "tiles" | "rows" | "clipboard"; // the heading beside ticked tiles / a large numbered list / a card whose boxes tick themselves
};

// Each page uses two or three of these, each kind at most once, with a topic that suits that service.
export type MoreSection =
  // 3 or 4 cards, each a short title and one or two sentences
  | { kind: "cards"; layout?: Layouts["cards"]; label: string; heading: string; intro?: string; items: { title: string; text: string }[] }
  // 4 or 5 questions a customer would ask, with plain answers of one to three sentences
  | { kind: "faq"; layout?: Layouts["faq"]; label: string; heading: string; items: { q: string; a: string }[] }
  // two columns side by side, 3 or 4 points each. By default the left is the weaker way (crossed) and the right ours
  // (ticked): myths / facts, before / after. tone "options" shows two fair choices evenly, with plain bullets.
  | { kind: "compare"; layout?: Layouts["compare"]; label: string; heading: string; tone?: "options"; left: { title: string; items: string[] }; right: { title: string; items: string[] } }
  // a list of 4 to 6 short points (e.g. what to have ready, signs you need this)
  | { kind: "checklist"; layout?: Layouts["checklist"]; label: string; heading: string; intro?: string; items: string[] };

export type ServiceMore = {
  stairsHeading: string; // e.g. "How we build your online store"
  stairsIntro: string; // one sentence under it
  stairs: Stair[]; // 5 or 6 steps, in order
  sections: MoreSection[]; // 2 or 3, in the order they appear
};
