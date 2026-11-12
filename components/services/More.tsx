import type { ReactNode } from "react";
import type { MoreSection, ServiceMore, StairIcon } from "@/lib/service-more/types";

// The extra parts of a service page (content in lib/service-more/, look in styles/service-more.css):
// the staircase of steps, and the information sections, each kind with its own layout.

const ICONS: Record<StairIcon, ReactNode> = {
  search: (<><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5" /></>),
  chat: (<><path d="M4 5h16v10H10l-6 4z" /><path d="M9 10h.01M12 10h.01M15 10h.01" /></>),
  map: (<><path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z" /><circle cx="12" cy="10" r="2.4" /></>),
  layout: (<><rect x="3" y="4.5" width="18" height="15" rx="2" /><path d="M3 9h18M9 9v10.5" /></>),
  pen: (<><path d="M4 20l4-1 11-11-3-3L5 16z" /><path d="M14 6l3 3" /></>),
  code: (<><path d="M9 7l-5 5 5 5M15 7l5 5-5 5" /></>),
  rocket: (<><path d="M12 3c3.5 2 5 5.5 5 9l-2.5 3h-5L7 12c0-3.5 1.5-7 5-9z" /><circle cx="12" cy="10" r="1.6" /><path d="M9.5 18l-1 3M14.5 18l1 3" /></>),
  chart: (<><path d="M3 17l6-6 4 4 8-8" /><path d="M15 7h6v6" /></>),
  mail: (<><rect x="3.5" y="5.5" width="17" height="13" rx="2" /><path d="M4 7l8 6 8-6" /></>),
  bolt: (<><path d="M13 3L5 13h6l-1 8 8-10h-6z" /></>),
  target: (<><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r=".6" /></>),
  calendar: (<><rect x="3.5" y="5" width="17" height="15" rx="2" /><path d="M3.5 10h17M8 3v4M16 3v4" /></>),
  star: (<><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z" /></>),
  shield: (<><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" /><path d="M9 12l2 2 4-4" /></>),
  cart: (<><path d="M3 4h2l2.4 10.5h10.2L20 7H6.2" /><circle cx="9" cy="19" r="1.4" /><circle cx="17" cy="19" r="1.4" /></>),
  users: (<><circle cx="9" cy="8.5" r="3.2" /><path d="M3 19c.6-3.2 3-5 6-5s5.4 1.8 6 5" /><path d="M15.5 5.6a3 3 0 0 1 0 5.8M17.5 14.4c1.8.7 3 2.3 3.5 4.6" /></>),
  phone: (<><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z" /></>),
  refresh: (<><path d="M20 11a8 8 0 0 0-14.6-4.5L4 8" /><path d="M4 4v4h4" /><path d="M4 13a8 8 0 0 0 14.6 4.5L20 16" /><path d="M20 20v-4h-4" /></>),
  file: (<><path d="M6 3h8l4 4v14H6z" /><path d="M14 3v4h4M9 12h6M9 16h6" /></>),
  settings: (<><circle cx="12" cy="12" r="3" /><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" /></>),
  link: (<><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1" /><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" /></>),
  check: (<><circle cx="12" cy="12" r="8.5" /><path d="M8 12.5l2.7 2.7L16 9.8" /></>),
  eye: (<><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" /><circle cx="12" cy="12" r="2.8" /></>),
  list: (<><path d="M9 6h11M9 12h11M9 18h11" /><path d="M4.5 6h.01M4.5 12h.01M4.5 18h.01" /></>),
};
const TICK = <path d="M5 12.5l4.5 4.5L19 7.5" />;
const CROSS = <path d="M7 7l10 10M17 7L7 17" />;
const DOT = <circle cx="12" cy="12" r="3" />;
const svg = (d: ReactNode) => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    {d}
  </svg>
);

// the steps, as a staircase that rises left to right; the light climbs it as it comes into view
export function Stairs({ m }: { m: ServiceMore }) {
  return (
    <section className="band" aria-labelledby="st-h">
      <div className="wrap">
        <div className="sec-head rv">
          <p className="label">Step by step</p>
          <h2 id="st-h">{m.stairsHeading}</h2>
          <p className="sec-intro">{m.stairsIntro}</p>
        </div>
        <ol className="stairs" style={{ "--n": m.stairs.length }}>
          {m.stairs.map((st, i) => (
            <li style={{ "--i": i }} key={st.title}>
              <div className="stair">
                <span className="stair-n">{String(i + 1).padStart(2, "0")}</span>
                <span className="stair-ico">{svg(ICONS[st.icon] ?? ICONS.check)}</span>
                <span className="stair-t">
                  <b>{st.title}</b>
                  <small>{st.text}</small>
                </span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Head({ s, id }: { s: MoreSection; id: string }) {
  return (
    <div className="sec-head rv">
      <p className="label">{s.label}</p>
      <h2 id={id}>{s.heading}</h2>
      {"intro" in s && s.intro ? <p className="sec-intro">{s.intro}</p> : null}
    </div>
  );
}

export function MoreBlock({ s, n }: { s: MoreSection; n: number }) {
  const id = `more-${n}`;
  if (s.kind === "cards")
    return (
      <section className="band" aria-labelledby={id}>
        <div className="wrap">
          <Head s={s} id={id} />
          <div className={`mcards rv n${s.items.length}`}>
            {s.items.map((it, i) => (
              <div className="mcard beam" key={it.title}>
                <span className="mcard-n">{String(i + 1).padStart(2, "0")}</span>
                <h3>{it.title}</h3>
                <p>{it.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  if (s.kind === "faq")
    return (
      <section className="band" aria-labelledby={id}>
        <div className="wrap faq-grid">
          <Head s={s} id={id} />
          <div className="faq rv">
            {s.items.map((it, i) => (
              <details key={it.q} open={i === 0}>
                <summary>
                  <span>{it.q}</span>
                  <i aria-hidden="true"></i>
                </summary>
                <p>{it.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    );
  if (s.kind === "compare")
    return (
      <section className="band" aria-labelledby={id}>
        <div className="wrap">
          <Head s={s} id={id} />
          <div className={`cmp rv${s.tone === "options" ? " even" : ""}`}>
            <div className="cmp-col was beam">
              <h3>{s.left.title}</h3>
              <ul>
                {s.left.items.map((t) => (
                  <li key={t}>
                    {svg(s.tone === "options" ? DOT : CROSS)}
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="cmp-col now beam">
              <h3>{s.right.title}</h3>
              <ul>
                {s.right.items.map((t) => (
                  <li key={t}>
                    {svg(s.tone === "options" ? DOT : TICK)}
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  return (
    <section className="band" aria-labelledby={id}>
      <div className="wrap chk-grid">
        <Head s={s} id={id} />
        <ul className="chk rv">
          {s.items.map((t) => (
            <li key={t}>
              {svg(TICK)}
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
