import type { ReactNode } from "react";
import { CASES, type Case, type Results, type StatIcon } from "@/lib/work";

// the animated icon beside each figure: drawn in as its section arrives, then its accent (.ca) keeps moving
// (styles/work.css)
const ICONS: Record<StatIcon, ReactNode> = {
  pages: (<><rect x="5" y="3" width="11" height="14" rx="1.5" /><rect className="ca" x="8" y="7" width="11" height="14" rx="1.5" /></>),
  paths: (<><path d="M12 21v-8M12 13L6 7M12 13l6-6" /><circle className="ca" cx="6" cy="6" r="1.8" /><circle className="ca" cx="18" cy="6" r="1.8" /></>),
  forms: (<><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M8 8h8M8 12h8" /><path className="ca" d="M8.5 16.5l2 2 4-4" /></>),
  clock: (<><circle cx="12" cy="12" r="8.5" /><path className="ca" d="M12 7v5l3 2" /></>),
  pin: (<><path d="M12 21s-6-5.5-6-11a6 6 0 0 1 12 0c0 5.5-6 11-6 11z" /><circle className="ca" cx="12" cy="10" r="2.2" /></>),
  home: (<><path d="M4 11l8-7 8 7" /><path d="M6 10v10h12V10" /><path className="ca" d="M10 20v-5h4v5" /></>),
  check: (<><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" /><path className="ca" d="M8.5 12.5l2.5 2.5 4.5-5" /></>),
  map: (<><path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z" /><path d="M9 4v14M15 6v14" /><circle className="ca" cx="12" cy="11" r="1.7" /></>),
  folder: (<><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><path className="ca" d="M8 13h8" /></>),
  grid: (<><rect x="4" y="4" width="7" height="7" rx="1" /><rect x="13" y="4" width="7" height="7" rx="1" /><rect x="4" y="13" width="7" height="7" rx="1" /><rect className="ca" x="13" y="13" width="7" height="7" rx="1" /></>),
  building: (<><path d="M5 21V5l7-2v18M12 8l7 2v11" /><path d="M3 21h18" /><path className="ca" d="M8 8v.01M8 12v.01M8 16v.01M16 13v.01M16 17v.01" /></>),
  inbox: (<><path d="M4 13l2.5-7h11L20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" /><path d="M4 13h4l1.5 2.5h5L16 13h4" /><path className="ca" d="M12 2.5v6M9.5 6L12 8.5 14.5 6" /></>),
  phone: (<><path d="M6.5 3.5h3l1.5 4-2 1.5a11 11 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2 2A16 16 0 0 1 4.5 5.5a2 2 0 0 1 2-2z" /><path className="ca" d="M15 3.5a6 6 0 0 1 5.5 5.5M15 7a2.5 2.5 0 0 1 2 2" /></>),
  eye: (<><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" /><circle className="ca" cx="12" cy="12" r="3" /></>),
  cursor: (<><path d="M5 4l5.5 15 2-6.5 6.5-2z" /><circle className="ca" cx="5" cy="4" r="3.2" /></>),
};
function StatIco({ name }: { name: StatIcon }) {
  return (
    <span className={`ci ci-${name}`} aria-hidden="true">
      <svg viewBox="0 0 24 24">{ICONS[name]}</svg>
    </span>
  );
}

// One project's case study, as the page inside the window
function Study({ c }: { c: Case }) {
  return (
    <article className="cs">
      <div className="cs-hero">
        <div className="cs-intro">
          <span className="cs-logo">{c.logo}</span>
          <p className="cs-ey">{`${c.sector} · ${c.place}`}</p>
          <h2 id={`cs-h-${c.id}`}>{`How we helped ${c.name}`}</h2>
          <p className="cs-lede">{c.lede}</p>
          <div className="cs-ctas">
            <a className="cs-btn" href={c.url} target="_blank" rel="noopener">
              Visit the live site <span aria-hidden="true">&#8599;</span>
            </a>
            <a className="cs-btn ghost" href="/contact">
              Book a discovery call <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <figure className="cs-shot">
          <img src={c.shot} alt={c.shotAlt} loading="lazy" width="1460" height="900" />
        </figure>
      </div>

      {/* THE STORY, in four numbered chapters: who they are, the challenge, how we approached it, the results */}
      <section className="cs-ch" aria-labelledby={`cs-a-${c.id}`}>
        <Head n="01" id={`cs-a-${c.id}`} t="Who they are" />
        <p className="cs-say">{c.about}</p>
      </section>

      <section className="cs-ch" aria-labelledby={`cs-c-${c.id}`}>
        <Head n="02" id={`cs-c-${c.id}`} t="The challenge" />
        <p className="cs-say">{c.challenge}</p>
      </section>

      {/* HOW WE APPROACHED IT, as a checklist that plays like a video while you scroll: the chapter holds still inside the
          window, a cursor works down the list and ticks each item off, the bar fills, and it ends on the site going live
          (lib/client/work.js; styles/work.css) */}
      <section className="cs-ch cs-flow" aria-labelledby={`cs-p-${c.id}`} style={{ "--n": c.built.length }}>
        <div className="cs-flow-pin">
          <div className="cs-flow-copy">
            <Head n="03" id={`cs-p-${c.id}`} t="How we approached it" />
            <p className="cs-say">{c.approach}</p>
          </div>
          <div className="ck">
            <div className="ck-top">
              <span className="ck-dots" aria-hidden="true">
                <i></i>
                <i></i>
                <i></i>
              </span>
              <span className="ck-title">{`What we built · ${c.name}`}</span>
              <span className="ck-count" aria-hidden="true">
                <b>0</b>
                {` of ${c.built.length}`}
              </span>
            </div>
            <div className="ck-bar" aria-hidden="true">
              <i></i>
            </div>
            <ol className="ck-list">
              {c.built.map((b) => (
                <li className="ck-row" key={b}>
                  <span className="ck-box" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M5 12.5l4.5 4.5L19 7.5" pathLength="1" />
                    </svg>
                  </span>
                  <span className="ck-t">{b}</span>
                  <span className="ck-tag" aria-hidden="true">
                    Done
                  </span>
                </li>
              ))}
            </ol>
            <div className="ck-live" aria-hidden="true">
              <span className="ck-pulse"></span>
              <b>Live</b>
              <span>{c.domain}</span>
            </div>
            <span className="ck-cursor" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M5 3l14 7.5-6.2 1.6L10 18z" />
              </svg>
              <i></i>
            </span>
          </div>
        </div>
      </section>

      {c.results ? <Progress c={c} r={c.results} /> : null}

      <div className="cs-next">
        <p>Want a website that does this for your business?</p>
        <a className="cs-btn" href="/contact">
          Book a discovery call <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </article>
  );
}

// 04, THE RESULTS: from where we started to now, played through month by month as you scroll inside the window. The
// chapter holds still (when it fits) while the timeline moves from the first month to the last, each month's bars rise
// in 3D (lib/client/grand-scenes.js, "bars") and each figure counts on to that month's number; at the end, how far each
// has come. The page is written with the latest figures, so it reads complete without the motion (lib/client/work.js).
const fmt = (v: number, unit?: string) => `${v}${unit ?? ""}`;
function Progress({ c, r }: { c: Case; r: Results }) {
  const last = r.months.length - 1;
  return (
    <section className="cs-ch cs-ch-wide cs-prog" aria-labelledby={`cs-r-${c.id}`} style={{ "--m": r.months.length }}>
      <div className="cs-prog-pin">
        <div className="cs-prog-head">
          <Head n="04" id={`cs-r-${c.id}`} t="The results" />
          <p className="cs-note">{r.source}</p>
        </div>
        <ol className="cs-tl" aria-hidden="true">
          <i className="cs-tl-fill"></i>
          {r.months.map((m, i) => (
            <li className={i === last ? "on" : undefined} key={m}>
              <span className="cs-tl-dot"></span>
              <b>{m}</b>
              <em>{i === 0 ? "Where we started" : i === last ? "Now" : "\u00a0"}</em>
            </li>
          ))}
        </ol>
        <div className="cs-res-grid cs-results">
          <figure className="cs-chart">
            <div className="cs-bars" data-scene="bars" data-bars={JSON.stringify(r.items.map((x) => x.series))} aria-hidden="true"></div>
            <ol className="cs-bars-key" aria-hidden="true">
              {r.items.map((x) => (
                <li key={x.short}>
                  <b>{x.short}</b>
                  <span>{x.series.map((v) => fmt(v, x.unit)).join(" → ")}</span>
                </li>
              ))}
            </ol>
            <figcaption className="cs-legend" aria-hidden="true">
              {r.months.map((m, i) => (
                <span className={`m${i === last ? " now" : i === 0 ? " was" : " mid"}`} key={m}>
                  {m}
                </span>
              ))}
            </figcaption>
          </figure>
          <div className="cs-stats">
            {r.items.map((x) => (
              <div className="cs-stat" key={x.short}>
                <StatIco name={x.icon} />
                <b className="cs-v" data-series={JSON.stringify(x.series)} data-unit={x.unit ?? ""} aria-hidden="true">
                  {fmt(x.series[last], x.unit)}
                </b>
                <span>{x.label}</span>
                <em className="cs-up">
                  <span aria-hidden="true">&uarr;</span> {x.change}
                </em>
                <span className="cs-sr">{r.months.map((m, i) => `${m}: ${fmt(x.series[i], x.unit)}`).join(", ")}.</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// a chapter's heading: its number, drawn as an outline, over the title
function Head({ n, id, t }: { n: string; id: string; t: string }) {
  return (
    <header className="cs-ch-h">
      <span className="cs-n" aria-hidden="true">{n}</span>
      <h3 id={id}>{t}</h3>
    </header>
  );
}

// OUR WORK, THE WINDOW: "See how we helped" opens that project's case study in what looks like a single browser window
// that fills the screen. It grows out of the card you clicked and shrinks back into it when you close it with the red
// button, Esc or a click outside. Behaviour in lib/client/work.js; look in styles/work.css.
// It sits at the top level of the page (app/page.tsx), outside the sections, so it covers the nav bar too.
export default function CaseWindow() {
  return (
    <div className="cw" id="caseWin" hidden>
      <div className="cw-backdrop" data-cw-close></div>
      <div className="cw-win" role="dialog" aria-modal="true" aria-labelledby={`cs-h-${CASES[0].id}`}>
        <div className="cw-bar">
          <div className="cw-lights">
            <button className="cw-light red" type="button" data-cw-close aria-label="Close the case study">
              <span aria-hidden="true">&times;</span>
            </button>
            <span className="cw-light yellow" aria-hidden="true"></span>
            <span className="cw-light green" aria-hidden="true"></span>
          </div>
          <span className="cw-nav" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M15 6l-6 6 6 6" />
            </svg>
            <svg viewBox="0 0 24 24">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </span>
          <span className="cw-url">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="5" y="11" width="14" height="10" rx="2" />
              <path d="M8 11V8a4 4 0 0 1 8 0v3" />
            </svg>
            <em>Case study</em>
            <span className="cw-domain">{CASES[0].domain}</span>
          </span>
          <a className="cw-live" href={CASES[0].url} target="_blank" rel="noopener">
            Visit live site <span aria-hidden="true">&#8599;</span>
          </a>
        </div>
        <div className="cw-view">
          {CASES.map((c) => (
            <div className="cw-pane" data-pane={c.id} data-domain={c.domain} data-url={c.url} style={{ "--c": c.color }} hidden key={c.id}>
              <Study c={c} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
