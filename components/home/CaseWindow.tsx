import { CASES, SCORES_MEASURED, type Case } from "@/lib/work";

const TICK = (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
);

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

      <section className="cs-stats" aria-label="At a glance">
        {c.stats.map((s) => (
          <div className="cs-stat" key={s.label}>
            <b>{s.value}</b>
            <span>{s.label}</span>
          </div>
        ))}
      </section>

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

// OUR WORK, THE WINDOW: "See how we helped" opens the projects in what looks like a browser window that fills the screen.
// Each project is a tab: switch between them, close a tab with its ×, bring a closed one back with +, and close the whole
// window with the red button, Esc or a click outside. Behaviour in lib/client/work.js; look in styles/work.css.
// It sits at the top level of the page (app/page.tsx), outside the sections, so it covers the nav bar too.
export default function CaseWindow() {
  return (
    <div className="cw" id="caseWin" hidden>
      <div className="cw-backdrop" data-cw-close></div>
      <div className="cw-win" role="dialog" aria-modal="true" aria-label="Our work">
        <div className="cw-top">
          <div className="cw-lights">
            <button className="cw-light red" type="button" data-cw-close aria-label="Close window">
              <span aria-hidden="true">&times;</span>
            </button>
            <span className="cw-light yellow" aria-hidden="true"></span>
            <span className="cw-light green" aria-hidden="true"></span>
          </div>
          <div className="cw-tabs" role="tablist" aria-label="Projects">
            {CASES.map((c) => (
              <div className="cw-tab" data-tab={c.id} data-domain={c.domain} data-url={c.url} style={{ "--c": c.color }} key={c.id}>
                <button className="cw-tab-go" type="button" role="tab" id={`cw-tab-${c.id}`} aria-controls={`cw-pane-${c.id}`}>
                  <i aria-hidden="true"></i>
                  {c.name}
                </button>
                <button className="cw-tab-x" type="button" aria-label={`Close the ${c.name} tab`}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            ))}
            <div className="cw-add">
              <button className="cw-plus" type="button" aria-label="Open a closed project" aria-expanded="false" hidden>
                <span aria-hidden="true">+</span>
              </button>
              <div className="cw-menu" hidden>
                {CASES.map((c) => (
                  <button type="button" data-open={c.id} key={c.id} style={{ "--c": c.color }}>
                    <i aria-hidden="true"></i>
                    {c.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="cw-bar">
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
            <div className="cw-pane" role="tabpanel" id={`cw-pane-${c.id}`} aria-labelledby={`cw-tab-${c.id}`} data-pane={c.id} style={{ "--c": c.color }} hidden key={c.id}>
              <Study c={c} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
