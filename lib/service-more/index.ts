import type { Layouts, MoreSection, ServiceMore } from "./types";
import { WEB } from "./web";
import { MKT } from "./mkt";
import { AUTO } from "./auto";
import { CONSULT } from "./consult";

// Each kind of section has three layouts. Going through the pages in menu order, each kind takes the next layout in
// turn, so the same kind of section looks different from one page to the next. A section with its own `layout` keeps it.
const ORDER: { [K in keyof Layouts]: Layouts[K][] } = {
  cards: ["grid", "bento", "stack"],
  faq: ["chat", "tabs", "split"],
  compare: ["toggle", "table", "columns"],
  checklist: ["rows", "tiles", "clipboard"], // in this order no page has both side-by-side layouts (questions "split", "tiles")
};

const turn: Record<keyof Layouts, number> = { cards: 0, faq: 0, compare: 0, checklist: 0 };
function withLayouts(all: Record<string, ServiceMore>) {
  const out: Record<string, ServiceMore> = {};
  for (const [key, m] of Object.entries(all)) {
    const sections = m.sections.map((s): MoreSection => {
      if (s.layout) return s;
      const list = ORDER[s.kind] as string[];
      return { ...s, layout: list[turn[s.kind]++ % list.length] } as MoreSection;
    });
    out[key] = { ...m, sections };
  }
  return out;
}

// the staircase and information sections for every service in the Services menu, by service key
export const MORE: Record<string, ServiceMore> = withLayouts({ ...WEB, ...MKT, ...AUTO, ...CONSULT });
