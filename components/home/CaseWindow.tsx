import type { ReactNode } from "react";
import { CASES, SCORES_MEASURED, type Case, type StatIcon } from "@/lib/work";

const TICK = (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
);

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
          <p className="cs-lede">{c.summary}</p>
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

      {/* at a glance: the figures form out of light one after another in 3D (lib/client/grand-scenes.js, "reel"), and the
          card for the figure on show lights up beside it */}
      <section className="cs-glance" aria-label="At a glance">
        <div className="cs-reel" data-scene="reel" data-items={JSON.stringify(c.stats.map((s) => s.value))} aria-hidden="true"></div>
        <div className="cs-stats">
          {c.stats.map((s) => (
            <div className="cs-stat" key={s.label}>
              <StatIco name={s.icon} />
              <b data-count={s.value}>{s.value}</b>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {c.results ? (
        <section className="cs-results" aria-labelledby={`cs-r-${c.id}`}>
          <div className="cs-results-head">
            <p className="cs-label" id={`cs-r-${c.id}`}>{`Results · ${c.results.period}`}</p>
            <p className="cs-note">{c.results.source}</p>
          </div>
          <div className="cs-res-grid">
            {/* each month side by side, oldest first, as bars rising in 3D (lib/client/grand-scenes.js, "bars") */}
            <figure className="cs-chart">
              <div
                className="cs-bars"
                data-scene="bars"
                data-bars={JSON.stringify(c.results.items.map((r) => r.series))}
                aria-hidden="true"
              ></div>
              <ol className="cs-bars-key">
                {c.results.items.map((r) => (
                  <li key={r.short}>
                    <b>{r.short}</b>
                    <span>{r.series.join(" → ")}</span>
                  </li>
                ))}
              </ol>
              <figcaption className="cs-legend">
                {c.results.months.map((m, i) => (
                  <span className={`m${i === c.results!.months.length - 1 ? " now" : i === 0 ? " was" : " mid"}`} key={m}>
                    {m}
                  </span>
                ))}
              </figcaption>
            </figure>
          <div className="cs-stats">
            {c.results.items.map((r) => (
              <div className="cs-stat" key={r.label}>
                <StatIco name={r.icon} />
                <b data-count={r.value}>{r.value}</b>
                <span>{r.label}</span>
                {r.change ? (
                  <em className="cs-up">
                    <span aria-hidden="true">&uarr;</span> {r.change}
                  </em>
                ) : null}
              </div>
            ))}
          </div>
          </div>
        </section>
      ) : null}

      <section className="cs-two">
        <div>
          <p className="cs-label">The brief</p>
          <p className="cs-text">{c.brief}</p>
          <p className="cs-label cs-gap">Scores on the live site</p>
          <div className="cs-scores">
            {c.scores.map((s) => (
              <div className="cs-score" style={{ "--s": s.score }} key={s.label}>
                <span className="cs-ring" aria-hidden="true">
                  <svg viewBox="0 0 36 36">
                    <circle cx="18" cy="18" r="15.9" />
                    <circle className="v" cx="18" cy="18" r="15.9" pathLength="100" />
                  </svg>
                  <b>{s.score}</b>
                </span>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
          <p className="cs-note">{`Google Lighthouse, desktop, measured ${SCORES_MEASURED}.`}</p>
        </div>
        <div>
          <p className="cs-label">What we built</p>
          <ul className="cs-built">
            {c.built.map((b) => (
              <li key={b}>
                {TICK}
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="cs-gallery" aria-label="Pages from the site">
        {c.gallery.map((g) => (
          <figure key={g.src}>
            <img src={g.src} alt={g.alt} loading="lazy" />
            <figcaption>{g.caption}</figcaption>
          </figure>
        ))}
      </section>

      <div className="cs-foot">
        <div>
          <p className="cs-label">Built with</p>
          <ul className="cs-stack">
            {c.stack.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
        <div className="cs-next">
          <p>Want a website that does this for your business?</p>
          <a className="cs-btn" href="/contact">
            Book a discovery call <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </article>
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
