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

// the steps, as a staircase that rises left to right: one line draws the treads and risers as it comes into view, each
// step's icon sits on its tread with the words just under it, and a soft fill below makes the stairs solid
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
              <span className="stair-n" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              <div className="stair">
                <span className="stair-ico">{svg(ICONS[st.icon] ?? ICONS.check)}</span>
                <b>{st.title}</b>
                <small>{st.text}</small>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Head({ s, id, center }: { s: MoreSection; id: string; center?: boolean }) {
  return (
    <div className={`sec-head rv${center ? " center" : ""}`}>
      <p className="label">{s.label}</p>
      <h2 id={id}>{s.heading}</h2>
      {"intro" in s && s.intro ? <p className="sec-intro">{s.intro}</p> : null}
    </div>
  );
}

const nn = (i: number) => String(i + 1).padStart(2, "0");
const band = (id: string, kind: string, layout: string | undefined, body: ReactNode) => (
  <section className={`band more more-${kind}-${layout}`} aria-labelledby={id}>
    {body}
  </section>
);

// One information section. Each kind has three layouts (see lib/service-more/types.ts); the look of each is in
// styles/service-more.css, and the moving parts (tabs, the switch, the boxes ticking) in lib/client/service.js.
export function MoreBlock({ s, n }: { s: MoreSection; n: number }) {
  const id = `more-${n}`;

  if (s.kind === "cards") {
    // cards that stack on top of one another as you scroll down
    if (s.layout === "stack")
      return band(id, s.kind, s.layout,
        <div className="wrap">
          <Head s={s} id={id} />
          <ol className="mstack" style={{ "--n": s.items.length }}>
            {s.items.map((it, i) => (
              <li style={{ "--i": i }} key={it.title}>
                <div className="mstack-card beam">
                  <span className="mstack-n">{nn(i)}</span>
                  <div>
                    <h3>{it.title}</h3>
                    <p>{it.text}</p>
                  </div>
                  <span className="mstack-of" aria-hidden="true">{`${nn(i)} / ${nn(s.items.length - 1)}`}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>);
    // one large card (the first point) beside the smaller ones; the plain grid otherwise
    return band(id, s.kind, s.layout,
      <div className="wrap">
        <Head s={s} id={id} />
        <div className={`mcards rv n${s.items.length}${s.layout === "bento" ? " bento" : ""}`}>
          {s.items.map((it, i) => (
            <div className="mcard beam" key={it.title}>
              <span className="mcard-n">{nn(i)}</span>
              <h3>{it.title}</h3>
              <p>{it.text}</p>
            </div>
          ))}
        </div>
      </div>);
  }

  if (s.kind === "faq") {
    // a conversation: the customer asks, we answer
    if (s.layout === "chat")
      return band(id, s.kind, s.layout,
        <div className="wrap">
          <Head s={s} id={id} center />
          <dl className="chat" data-play="">
            {s.items.map((it, i) => (
              <div className="chat-pair" style={{ "--i": i }} key={it.q}>
                <dt className="bub q">{it.q}</dt>
                <dd className="bub a">
                  <span className="chat-av" aria-hidden="true">E</span>
                  <span>{it.a}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>);
    // the questions as tabs, with one answer showing at a time
    if (s.layout === "tabs")
      return band(id, s.kind, s.layout,
        <div className="wrap">
          <Head s={s} id={id} />
          <div className="qtabs rv" data-tabs="">
            <div className="qt-list" role="tablist" aria-orientation="vertical" aria-labelledby={id}>
              {s.items.map((it, i) => (
                <button type="button" role="tab" id={`${id}-t${i}`} aria-controls={`${id}-p${i}`} aria-selected={i === 0} tabIndex={i === 0 ? 0 : -1} aria-label={it.q} key={it.q}>
                  <span className="qt-n">{nn(i)}</span>
                  <span>{it.q}</span>
                </button>
              ))}
            </div>
            <div className="qt-panels beam">
              {s.items.map((it, i) => (
                <div role="tabpanel" id={`${id}-p${i}`} aria-labelledby={`${id}-t${i}`} hidden={i !== 0} className="qt-panel" key={it.q}>
                  <span className="qt-mark" aria-hidden="true">{nn(i)}</span>
                  <p className="qt-q">{it.q}</p>
                  <p className="qt-a">{it.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>);
    return band(id, s.kind, s.layout,
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
      </div>);
  }

  if (s.kind === "compare") {
    const opt = s.tone === "options";
    const mark = (side: "l" | "r") => svg(opt ? DOT : side === "l" ? CROSS : TICK);
    // a switch between the two sides, one showing at a time
    if (s.layout === "toggle")
      return band(id, s.kind, s.layout,
        <div className="wrap">
          <Head s={s} id={id} center />
          <div className={`flip rv${opt ? " even" : ""}`} data-flip="">
            <div className="flip-sw" role="tablist" aria-labelledby={id}>
              <span className="flip-knob" aria-hidden="true"></span>
              {[s.left, s.right].map((side, i) => (
                <button type="button" role="tab" id={`${id}-t${i}`} aria-controls={`${id}-p${i}`} aria-selected={i === 0} tabIndex={i === 0 ? 0 : -1} key={side.title}>
                  {side.title}
                </button>
              ))}
            </div>
            {[s.left, s.right].map((side, i) => (
              <ul role="tabpanel" id={`${id}-p${i}`} aria-labelledby={`${id}-t${i}`} hidden={i !== 0} className={`flip-p ${i ? "now" : "was"}`} key={side.title}>
                {side.items.map((t, k) => (
                  <li style={{ "--k": k }} key={t}>
                    {mark(i ? "r" : "l")}
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            ))}
            <p className="flip-hint" aria-hidden="true">{`Switch to see ${opt ? "the other option" : "the difference"}`}</p>
          </div>
        </div>);
    // matched rows: each point on the left set against its partner on the right
    if (s.layout === "table") {
      const rows = Math.max(s.left.items.length, s.right.items.length);
      return band(id, s.kind, s.layout,
        <div className="wrap">
          <Head s={s} id={id} />
          <table className={`vs rv${opt ? " even" : ""}`}>
            <thead>
              <tr>
                <th scope="col">{s.left.title}</th>
                <td aria-hidden="true"></td>
                <th scope="col">{s.right.title}</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: rows }, (_, i) => (
                <tr style={{ "--i": i }} key={i}>
                  <td className="was" data-h={s.left.title}>{s.left.items[i] ? <>{mark("l")}<span>{s.left.items[i]}</span></> : null}</td>
                  <td className="vs-mid" aria-hidden="true"><span>{opt ? "or" : "\u2192"}</span></td>
                  <td className="now" data-h={s.right.title}>{s.right.items[i] ? <>{mark("r")}<span>{s.right.items[i]}</span></> : null}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>);
    }
    return band(id, s.kind, s.layout,
      <div className="wrap">
        <Head s={s} id={id} />
        <div className={`cmp rv${opt ? " even" : ""}`}>
          <div className="cmp-col was beam">
            <h3>{s.left.title}</h3>
            <ul>
              {s.left.items.map((t) => (
                <li key={t}>
                  {mark("l")}
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
                  {mark("r")}
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>);
  }

  // checklist: a large numbered list
  if (s.layout === "rows")
    return band(id, s.kind, s.layout,
      <div className="wrap">
        <Head s={s} id={id} center />
        <ol className="mrows rv">
          {s.items.map((t, i) => (
            <li key={t}>
              <span className="mrows-n">{nn(i)}</span>
              <span className="mrows-t">{t}</span>
              <span className="mrows-tick" aria-hidden="true">{svg(TICK)}</span>
            </li>
          ))}
        </ol>
      </div>);
  // a card whose boxes tick themselves one by one as it comes into view
  if (s.layout === "clipboard")
    return band(id, s.kind, s.layout,
      <div className="wrap">
        <div className="clip beam" data-play="" style={{ "--n": s.items.length }}>
          <div className="clip-top">
            <Head s={s} id={id} />
            <p className="clip-count" aria-hidden="true">
              <b>
                {[0, ...s.items].map((_, i) => (
                  <span key={i}>{i}</span>
                ))}
              </b>
              {` / ${s.items.length}`}
            </p>
          </div>
          <ul className="clip-list">
            {s.items.map((t, i) => (
              <li style={{ "--i": i }} key={t}>
                <span className="clip-box" aria-hidden="true">
                  <svg viewBox="0 0 24 24">{TICK}</svg>
                </span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>);
  return band(id, s.kind, s.layout,
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
    </div>);
}
