// The About page, in a grander key than the rest of the site (styles/about-grand.css, lib/client/about-grand.js): a serif
// display face, ivory on near-black with a thread of gold, and three three.js scenes: the Envision mark built of light in
// the opening, a short looping film of how we work, and Melbourne as a field of light with signals going out. Between
// them: a manifesto that lights word by word, the three disciplines as tall pillars, the three principles, the values
// wheel (lib/client/about.js), a band of what we do, and the call to book. Everything plays on its own as it arrives.

const LIGHT = <path d="M5 12h14M13 6l6 6-6 6" />;

const PILLARS = [
  {
    n: "I",
    title: "Strategists",
    text: "We work out where your best opportunities are, who to reach and what to say, using location data and audience insight before any budget moves.",
    icon: (
      <>
        <circle cx="11" cy="11" r="6" />
        <path d="M20 20l-4.5-4.5" />
      </>
    ),
  },
  {
    n: "II",
    title: "Designers & developers",
    text: "We build fast, clear websites and connect the tools behind them, so every enquiry is captured and followed up.",
    icon: <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 6l-3 12" />,
  },
  {
    n: "III",
    title: "Marketers & creative thinkers",
    text: "We run your search, ads, social media and content, and keep every channel pulling in the same direction.",
    icon: (
      <>
        <path d="M4 10v4h3l6 4V6l-6 4z" />
        <path d="M17 9a4 4 0 0 1 0 6" />
      </>
    ),
  },
];

const PRINCIPLES = [
  {
    title: "Strategy before spending",
    text: "We find where your best opportunities are before recommending what to invest. Location data, audience insight and market context shape the plan before any budget moves.",
  },
  {
    title: "One system, not scattered tactics",
    text: "SEO, paid ads, website, social and location strategy are planned as one connected system. Every channel reinforces the same message instead of competing for attention.",
  },
  {
    title: "Plain English, every week",
    text: "Clear, honest updates on what's working, what's not, and what's changing. No jargon, no vanity metrics, just a straight read on where things stand and what happens next.",
  },
];

// the film's four chapters (lib/client/about-grand.js plays the scene for each in turn)
const CHAPTERS = [
  { t: "Listen", d: "A conversation about your business, your customers and your goals." },
  { t: "Plan", d: "Your audience, locations and channels, mapped into one plan." },
  { t: "Build", d: "Website, search, ads and follow-up, built to work together." },
  { t: "Improve", d: "Weekly check-ins on what's working, and what changes next." },
];

const MARQUEE = ["Strategy", "Websites", "Search", "Paid ads", "Automation", "Location insight", "Content", "Social media"];

export default function AboutContent() {
  return (
    <>
      <main id="main" className="ag">
        {/* the opening: the mark built of light, and the page's title */}
        <section className="ag-hero" aria-labelledby="ag-h">
          <div className="ag-stage" data-scene="mark" aria-hidden="true"></div>
          <div className="ag-hero-veil" aria-hidden="true"></div>
          <div className="ag-wrap ag-hero-in">
            <p className="ag-crumbs">
              <a href="/" data-home="">
                Home
              </a>
              <span aria-hidden="true">/</span>
              <span>About us</span>
            </p>
            <p className="ag-kicker">Envision Digital Solutions · Melbourne</p>
            <h1 id="ag-h" className="ag-title">
              Digital marketing meets <em>smarter</em> decision-making.
            </h1>
            <div className="ag-hero-foot">
              <p className="wr">
                A Melbourne team of strategists, developers and creative thinkers, helping local businesses get found,
                earn trust and turn interest into real enquiries.
              </p>
              <div className="ag-ctas">
                <a className="ag-btn" href="/contact">
                  Book a discovery call{" "}
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    {LIGHT}
                  </svg>
                </a>
                <a className="ag-btn ghost" href="/#work" data-home="">
                  See our work
                </a>
              </div>
            </div>
          </div>
          <a className="ag-scroll" href="#ag-manifesto" aria-label="Scroll to the next section">
            <span></span>
          </a>
        </section>

        {/* the manifesto: lit word by word as it arrives */}
        <section className="ag-manifesto" id="ag-manifesto" aria-label="Who we are">
          <div className="ag-wrap">
            <p className="ag-eyebrow rv">
              <span>01</span> Who we are
            </p>
            <p className="ag-big wr">
              Most businesses spend on marketing before they know who they&apos;re targeting, where those people actually
              are, or what to say to them. <em>We fix that first.</em>
            </p>
            <div className="ag-two">
              <p className="wr">
                Envision combines digital marketing with location insight, so every dollar you spend is aimed at a real
                customer in a real place, and you can see what it brought back.
              </p>
              <p className="wr">
                Whether you&apos;re starting from scratch, rebuilding something that isn&apos;t working, or expanding into
                new areas, you get the strategy and the execution from one team.
              </p>
            </div>
          </div>
        </section>

        {/* the film: a looping scene in four chapters, with a player's controls */}
        <section className="ag-film" aria-labelledby="ag-film-h">
          <div className="ag-wrap">
            <div className="ag-head">
              <p className="ag-eyebrow rv">
                <span>02</span> How we work
              </p>
              <h2 id="ag-film-h" className="rv">
                From first call to a phone <em>that rings.</em>
              </h2>
            </div>
            <figure className="ag-screen rv" data-film="">
              <div className="ag-stage" data-scene="film" aria-hidden="true"></div>
              <span className="ag-bars" aria-hidden="true"></span>
              <figcaption className="ag-caps">
                {CHAPTERS.map((c, i) => (
                  <span className="ag-cap" data-i={i} key={c.t}>
                    <b>
                      <i>{`0${i + 1}`}</i> {c.t}
                    </b>
                    <span>{c.d}</span>
                  </span>
                ))}
              </figcaption>
              <div className="ag-player">
                <button className="ag-play" type="button" aria-label="Pause the film" aria-pressed="false">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path className="pa" d="M8 5v14M16 5v14" />
                    <path className="pl" d="M8 5l11 7-11 7z" />
                  </svg>
                </button>
                <ol className="ag-track" aria-hidden="true">
                  {CHAPTERS.map((c) => (
                    <li key={c.t}>
                      <i></i>
                      <span>{c.t}</span>
                    </li>
                  ))}
                </ol>
                <span className="ag-tc" aria-hidden="true">
                  00:00
                </span>
              </div>
            </figure>
          </div>
        </section>

        {/* the team: three disciplines as tall pillars */}
        <section className="ag-pillars-band" aria-labelledby="ag-team-h">
          <div className="ag-wrap">
            <div className="ag-head">
              <p className="ag-eyebrow rv">
                <span>03</span> The team
              </p>
              <h2 id="ag-team-h" className="rv">
                Strategy, build and growth, <em>under one roof.</em>
              </h2>
            </div>
            <div className="ag-pillars">
              {PILLARS.map((p, i) => (
                <article className="ag-pillar rv" style={{ "--i": i }} key={p.title}>
                  <span className="ag-numeral" aria-hidden="true">
                    {p.n}
                  </span>
                  <span className="ag-pico" aria-hidden="true">
                    <svg viewBox="0 0 24 24">{p.icon}</svg>
                  </span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                  <span className="ag-shine" aria-hidden="true"></span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* the approach: three principles, each with a gold line that draws across */}
        <section className="ag-principles" aria-labelledby="ag-ap-h">
          <div className="ag-wrap">
            <div className="ag-head">
              <p className="ag-eyebrow rv">
                <span>04</span> Our approach
              </p>
              <h2 id="ag-ap-h" className="rv">
                What makes our approach <em>different.</em>
              </h2>
            </div>
            <ol className="ag-rows">
              {PRINCIPLES.map((p, i) => (
                <li className="ag-row rv" key={p.title}>
                  <span className="ag-row-n" aria-hidden="true">{`0${i + 1}`}</span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                  <span className="ag-rule" aria-hidden="true"></span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Melbourne: the city as a field of light, with signals going out from it */}
        <section className="ag-place" aria-labelledby="ag-place-h">
          <div className="ag-stage" data-scene="map" aria-hidden="true"></div>
          <div className="ag-place-veil" aria-hidden="true"></div>
          <div className="ag-wrap ag-place-in">
            <p className="ag-eyebrow rv">
              <span>05</span> Where we are
            </p>
            <h2 id="ag-place-h" className="rv">
              Melbourne based. Aimed at <em>where your customers are.</em>
            </h2>
            <p className="wr">
              Location insight sits at the heart of how we plan: who your customers are, where they are, and what will
              reach them there, before any budget moves.
            </p>
            <span className="ag-pin rv" aria-hidden="true">
              <i></i>
              <b>Melbourne, Victoria</b>
              <small>37.81° S · 144.96° E</small>
            </span>
          </div>
        </section>

        <section className="band ag-values" aria-label="What we stand for">
          <div className="wrap">
            <div className="vw" id="values">
              <div className="bo-top rv">
                <div>
                  <span className="gv-tag">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 21s-7-4.4-7-10.2A4.3 4.3 0 0 1 12 8a4.3 4.3 0 0 1 7 2.8C19 16.6 12 21 12 21z" />
                    </svg>
                    Our values
                  </span>{" "}
                  <h3 className="bo-h">
                    What we <span className="grad">stand for</span>
                  </h3>
                </div>
                <div className="bo-side">
                  <p>
                    Our mission, our vision, and the six values behind every decision we make. Eight arms on our logo,
                    one for each. Pick a ring to turn the wheel.
                  </p>
                </div>
              </div>
              <div className="vw-grid">
                <div className="vw-wheel" id="vwWheel">
                  <div className="vw-glow"></div>
                  <div className="vw-beam" aria-hidden="true"></div>
                  <div className="vw-spin" id="vwSpin"></div>
                </div>
                <div className="vw-panel" id="vwPanel" aria-live="polite">
                  <article className="vw-item" id="vw-mission" style={{ "--c": "#c8734f" }} data-label="Mission">
                    {" "}
                    <span className="vw-ico" aria-hidden="true">
                      <svg viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="8.5" />
                        <circle cx="12" cy="12" r="4.5" />
                        <circle cx="12" cy="12" r=".8" />
                      </svg>
                    </span>{" "}
                    <p className="vw-tag">Our mission</p>
                    <h4>Help businesses grow by combining strategy, technology and creativity.</h4>
                    <p className="vw-p">
                      We build tailored solutions that make your business easier to find, easier to choose and easier to
                      run. Then we measure what each one brings back, so the value is something you can see.
                    </p>
                    <ul className="vw-pts">
                      <li>
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M5 12.5l4.5 4.5L19 7.5" />
                        </svg>
                        <span>Strategy first, shaped around your goals</span>
                      </li>
                      <li>
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M5 12.5l4.5 4.5L19 7.5" />
                        </svg>
                        <span>Real, measurable results, reported in plain English</span>
                      </li>
                      <li>
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M5 12.5l4.5 4.5L19 7.5" />
                        </svg>
                        <span>Lasting value for every client, not quick fixes</span>
                      </li>
                    </ul>
                  </article>
                  <article className="vw-item" id="vw-vision" style={{ "--c": "#f1dcae" }} data-label="Vision">
                    {" "}
                    <span className="vw-ico" aria-hidden="true">
                      <svg viewBox="0 0 24 24">
                        <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </span>{" "}
                    <p className="vw-tag">Our vision</p>
                    <h4>Every business equipped to thrive, adapt and lead in the digital world.</h4>
                    <p className="vw-p">
                      Innovative, data-driven tools used to be something only big companies could afford. We want local
                      businesses to have them too, set up simply and working together.
                    </p>
                    <ul className="vw-pts">
                      <li>
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M5 12.5l4.5 4.5L19 7.5" />
                        </svg>
                        <span>Data-driven decisions, made simple</span>
                      </li>
                      <li>
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M5 12.5l4.5 4.5L19 7.5" />
                        </svg>
                        <span>Technology that grows with the business</span>
                      </li>
                      <li>
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M5 12.5l4.5 4.5L19 7.5" />
                        </svg>
                        <span>Local businesses leading, not catching up</span>
                      </li>
                    </ul>
                  </article>
                  <article
                    className="vw-item"
                    id="vw-customer"
                    style={{ "--c": "#5b9be6" }}
                    data-label="Customer-centric"
                  >
                    {" "}
                    <span className="vw-ico" aria-hidden="true">
                      <svg viewBox="0 0 24 24">
                        <circle cx="12" cy="8" r="3.5" />
                        <path d="M5 20c.8-3.8 3.6-6 7-6s6.2 2.2 7 6" />
                      </svg>
                    </span>{" "}
                    <p className="vw-tag">Value 01 · Customer-centricity</p>
                    <h4>Your goals set our direction.</h4>
                    <p className="vw-p">
                      We start with what you need to achieve and shape every recommendation around it. Your growth is
                      how we measure our own success.
                    </p>
                    <ul className="vw-pts">
                      <li>
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M5 12.5l4.5 4.5L19 7.5" />
                        </svg>
                        <span>We listen before we recommend</span>
                      </li>
                      <li>
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M5 12.5l4.5 4.5L19 7.5" />
                        </svg>
                        <span>A named contact and a clear measure of success for every client</span>
                      </li>
                      <li>
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M5 12.5l4.5 4.5L19 7.5" />
                        </svg>
                        <span>Advice that fits your stage and your budget</span>
                      </li>
                    </ul>
                  </article>
                  <article className="vw-item" id="vw-integrity" style={{ "--c": "#d2b27a" }} data-label="Integrity">
                    {" "}
                    <span className="vw-ico" aria-hidden="true">
                      <svg viewBox="0 0 24 24">
                        <path d="M12 3l7 3v5.5c0 4.4-3 7.8-7 9.5-4-1.7-7-5.1-7-9.5V6z" />
                        <path d="M8.8 12.2l2.2 2.2 4.4-4.6" />
                      </svg>
                    </span>{" "}
                    <p className="vw-tag">Value 02 · Integrity</p>
                    <h4>We do what we say.</h4>
                    <p className="vw-p">
                      Honest advice and clear terms, even when the honest answer is that you don’t need something yet.
                      Our actions match our words.
                    </p>
                    <ul className="vw-pts">
                      <li>
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M5 12.5l4.5 4.5L19 7.5" />
                        </svg>
                        <span>Scope, price and timing agreed in writing before we start</span>
                      </li>
                      <li>
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M5 12.5l4.5 4.5L19 7.5" />
                        </svg>
                        <span>No promises we can’t keep</span>
                      </li>
                      <li>
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M5 12.5l4.5 4.5L19 7.5" />
                        </svg>
                        <span>Straight answers on what’s working and what isn’t</span>
                      </li>
                    </ul>
                  </article>
                  <article
                    className="vw-item"
                    id="vw-reliability"
                    style={{ "--c": "#e39b4f" }}
                    data-label="Reliability"
                  >
                    {" "}
                    <span className="vw-ico" aria-hidden="true">
                      <svg viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="8.5" />
                        <path d="M12 7.5V12l3 2" />
                      </svg>
                    </span>{" "}
                    <p className="vw-tag">Value 03 · Reliability</p>
                    <h4>Consistent work, on time, without surprises.</h4>
                    <p className="vw-p">
                      High-quality work delivered the same way every time, with open and proactive communication from
                      the first call to the latest report.
                    </p>
                    <ul className="vw-pts">
                      <li>
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M5 12.5l4.5 4.5L19 7.5" />
                        </svg>
                        <span>Dates we plan for, and keep</span>
                      </li>
                      <li>
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M5 12.5l4.5 4.5L19 7.5" />
                        </svg>
                        <span>Updates before you have to ask</span>
                      </li>
                      <li>
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M5 12.5l4.5 4.5L19 7.5" />
                        </svg>
                        <span>Requests written down, so nothing gets missed</span>
                      </li>
                    </ul>
                  </article>
                  <article className="vw-item" id="vw-resilience" style={{ "--c": "#b7a3c9" }} data-label="Resilience">
                    {" "}
                    <span className="vw-ico" aria-hidden="true">
                      <svg viewBox="0 0 24 24">
                        <path d="M3 19l6.5-11 4 6.5 2.5-3.5L21 19z" />
                      </svg>
                    </span>{" "}
                    <p className="vw-tag">Value 04 · Resilience</p>
                    <h4>Steady when things get hard.</h4>
                    <p className="vw-p">
                      Algorithms change, campaigns dip and deadlines move. We stay calm, find the fix and keep things
                      moving, so you can keep trusting the plan.
                    </p>
                    <ul className="vw-pts">
                      <li>
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M5 12.5l4.5 4.5L19 7.5" />
                        </svg>
                        <span>Problems raised early, with a fix in hand</span>
                      </li>
                      <li>
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M5 12.5l4.5 4.5L19 7.5" />
                        </svg>
                        <span>Calm, practical support when something breaks</span>
                      </li>
                      <li>
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M5 12.5l4.5 4.5L19 7.5" />
                        </svg>
                        <span>In it for the long term</span>
                      </li>
                    </ul>
                  </article>
                  <article
                    className="vw-item"
                    id="vw-adaptability"
                    style={{ "--c": "#8db2b0" }}
                    data-label="Adaptability"
                  >
                    {" "}
                    <span className="vw-ico" aria-hidden="true">
                      <svg viewBox="0 0 24 24">
                        <path d="M20 12a8 8 0 0 1-14 5.3M4 12a8 8 0 0 1 14-5.3" />
                        <path d="M18 3v3.7h-3.7M6 21v-3.7h3.7" />
                      </svg>
                    </span>{" "}
                    <p className="vw-tag">Value 05 · Adaptability</p>
                    <h4>Always learning, so you don’t have to.</h4>
                    <p className="vw-p">
                      Digital moves fast. We keep up with new tools and trends, test them properly, and bring you only
                      what is worth your time and budget.
                    </p>
                    <ul className="vw-pts">
                      <li>
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M5 12.5l4.5 4.5L19 7.5" />
                        </svg>
                        <span>New ideas tested before they’re recommended</span>
                      </li>
                      <li>
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M5 12.5l4.5 4.5L19 7.5" />
                        </svg>
                        <span>Strategies refined from real results</span>
                      </li>
                      <li>
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M5 12.5l4.5 4.5L19 7.5" />
                        </svg>
                        <span>Ready for whatever changes next</span>
                      </li>
                    </ul>
                  </article>
                  <article className="vw-item" id="vw-clarity" style={{ "--c": "#c9b45a" }} data-label="Clarity">
                    {" "}
                    <span className="vw-ico" aria-hidden="true">
                      <svg viewBox="0 0 24 24">
                        <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" />
                      </svg>
                    </span>{" "}
                    <p className="vw-tag">Value 06 · Clarity</p>
                    <h4>Complex made simple.</h4>
                    <p className="vw-p">
                      We started Envision to bridge the gap between technology and business strategy. That means no
                      jargon and no black boxes: you will always know what we are doing and why.
                    </p>
                    <ul className="vw-pts">
                      <li>
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M5 12.5l4.5 4.5L19 7.5" />
                        </svg>
                        <span>Plain-English reports</span>
                      </li>
                      <li>
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M5 12.5l4.5 4.5L19 7.5" />
                        </svg>
                        <span>One clear next step at a time</span>
                      </li>
                      <li>
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M5 12.5l4.5 4.5L19 7.5" />
                        </svg>
                        <span>Powerful tools made easy to use</span>
                      </li>
                    </ul>
                  </article>
                  <div className="vw-foot" hidden>
                    <span className="vw-count" id="vwCount">
                      01 / 08
                    </span>
                    <div className="vw-nav">
                      <button className="vw-prev" type="button" aria-label="Previous">
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                      </button>
                      <button className="vw-next" type="button" aria-label="Next">
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* a band of what we do, drifting by */}
        <section className="ag-marquee" aria-label="What we do">
          <div className="ag-mq" aria-hidden="true">
            {[0, 1].map((k) => (
              <span className="ag-mq-run" key={k}>
                {MARQUEE.map((m) => (
                  <span key={m}>
                    {m}
                    <i>✦</i>
                  </span>
                ))}
              </span>
            ))}
          </div>
          <p className="ag-sr">{MARQUEE.join(", ")}</p>
        </section>

        {/* the close */}
        <section className="ag-close" aria-labelledby="ag-close-h">
          <div className="ag-close-glow" aria-hidden="true"></div>
          <div className="ag-wrap">
            <p className="ag-eyebrow rv">Next step</p>
            <h2 id="ag-close-h" className="rv">
              Let&apos;s talk about <em>what&apos;s next.</em>
            </h2>
            <p className="wr">
              Tell us about your business and what you need help with, and we&apos;ll show you where we&apos;d start.
            </p>
            <div className="ag-ctas rv">
              <a className="ag-btn" href="/contact">
                Book a discovery call{" "}
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  {LIGHT}
                </svg>
              </a>
              <a className="ag-btn ghost" href="tel:+61399693883">
                Call 03 9969 3883
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
