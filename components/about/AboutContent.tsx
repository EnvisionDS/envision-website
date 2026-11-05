// The About page: the team, how we work and the values wheel (styles/about.css, lib/client/about.js).
export default function AboutContent() {
  return (
    <>
      <main id="main">
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="crumbs">
                <a href="/" data-home="">
                  Home
                </a>
                <span aria-hidden="true">/</span>
                <span>About</span>
              </p>
              <p className="vf">
                <span className="vf-ret" aria-hidden="true">
                  <i></i>
                </span>
                <span>About Envision</span>
              </p>
              <h1>Digital marketing meets smarter decision-making.</h1>
              <p className="lede">
                A Melbourne team of strategists, developers and creative thinkers, helping local businesses get found,
                earn trust and turn interest into real enquiries.
              </p>
              <div className="ctas">
                <a className="btn" href="/contact">
                  Book a discovery call <span aria-hidden="true">→</span>
                </a>
                <a className="btn ghost" href="/#work" data-home="">
                  See our work
                </a>
              </div>
            </div>
            <div className="ab-photos" aria-hidden="true">
              <div className="abp-main">
                <img src="/img/ph-team-table.jpg" alt="" />
              </div>
              <div className="abp-side">
                <img src="/img/ph-planning.jpg" alt="" />
              </div>{" "}
              <span className="abp-chip">
                <i>
                  <svg viewBox="0 0 24 24">
                    <path d="M12 21s-6-5.5-6-11a6 6 0 0 1 12 0c0 5.5-6 11-6 11z" />
                    <circle cx="12" cy="10" r="2" />
                  </svg>
                </i>
                <span>
                  <b>Melbourne based</b>Strategy, build and growth in one team
                </span>
              </span>{" "}
            </div>
          </div>
        </section>
        <section className="band" aria-labelledby="ov-h">
          <div className="wrap two rv">
            <p className="label" id="ov-h">
              Who we are
            </p>
            <div className="prose">
              <p>
                Most businesses spend on marketing before they know who they're targeting, where those people actually
                are, or what to say to them. We fix that first. Envision combines digital marketing with location
                insight, so every dollar you spend is aimed at a real customer in a real place, and you can see what it
                brought back.
              </p>
              <p>
                Whether you're starting from scratch, rebuilding something that isn't working, or expanding into new
                areas, you get the strategy and the execution from one team.
              </p>
            </div>
          </div>
        </section>
        <section className="band" aria-labelledby="tm-h">
          <div className="wrap">
            <div className="sec-head rv">
              <p className="label">The team</p>
              <h2 id="tm-h">Strategy, build and growth under one roof</h2>
            </div>
            <div className="ab-cards">
              <div className="ab-card beam rv">
                <span className="ico" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="6" />
                    <path d="M20 20l-4.5-4.5" />
                  </svg>
                </span>
                <h3>Strategists</h3>
                <p>
                  We work out where your best opportunities are, who to reach and what to say, using location data and
                  audience insight before any budget moves.
                </p>
              </div>
              <div className="ab-card beam rv">
                <span className="ico" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 6l-3 12" />
                  </svg>
                </span>
                <h3>Designers and developers</h3>
                <p>
                  We build fast, clear websites and connect the tools behind them, so every enquiry is captured and
                  followed up.
                </p>
              </div>
              <div className="ab-card beam rv">
                <span className="ico" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M4 10v4h3l6 4V6l-6 4z" />
                    <path d="M17 9a4 4 0 0 1 0 6" />
                  </svg>
                </span>
                <h3>Marketers and creative thinkers</h3>
                <p>
                  We run your search, ads, social media and content, and keep every channel pulling in the same
                  direction.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="band" aria-labelledby="ap-h">
          <div className="wrap">
            <div className="sec-head rv">
              <p className="label">Our approach</p>
              <h2 id="ap-h">What makes our approach different</h2>
            </div>
            <div className="ab-cards">
              <div className="ab-card beam rv">
                <span className="n">01</span>
                <h3>Strategy before spending</h3>
                <p>
                  We find where your best opportunities are before recommending what to invest. Location data, audience
                  insight and market context shape the plan before any budget moves.
                </p>
              </div>
              <div className="ab-card beam rv">
                <span className="n">02</span>
                <h3>One system, not scattered tactics</h3>
                <p>
                  SEO, paid ads, website, social and location strategy are planned as one connected system. Every
                  channel reinforces the same message instead of competing for attention.
                </p>
              </div>
              <div className="ab-card beam rv">
                <span className="n">03</span>
                <h3>Plain English, every week</h3>
                <p>
                  Clear, honest updates on what's working, what's not, and what's changing. No jargon, no vanity
                  metrics, just a straight read on where things stand and what happens next.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="band" aria-label="What we stand for">
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
                  <article className="vw-item" id="vw-mission" style={{ "--c": "#ee6c4d" }} data-label="Mission">
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
                  <article className="vw-item" id="vw-vision" style={{ "--c": "#8fd3f4" }} data-label="Vision">
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
                  <article className="vw-item" id="vw-integrity" style={{ "--c": "#7fe0c8" }} data-label="Integrity">
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
                    style={{ "--c": "#f2b84b" }}
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
                  <article className="vw-item" id="vw-resilience" style={{ "--c": "#b58cf0" }} data-label="Resilience">
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
                    style={{ "--c": "#4fc3f7" }}
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
                  <article className="vw-item" id="vw-clarity" style={{ "--c": "#9ccc65" }} data-label="Clarity">
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
        <section className="cta-band" aria-labelledby="cta-h">
          <div className="wrap cta rv">
            <p className="label">Next step</p>
            <h2 id="cta-h">Book a discovery call</h2>
            <p>
              Tell us about your business and where you want to grow, and we'll recommend the best place to start. We
              reply Monday to Friday, usually within one business day.
            </p>
            <div className="ctas">
              <a className="btn" href="/contact">
                Book a discovery call <span aria-hidden="true">→</span>
              </a>
              <a className="btn ghost" href="tel:+61399693883">
                Call 03 9969 3883
              </a>
            </div>
            <p className="contact-line">
              Email <span className="sel">hello@envisionds.com.au</span> · Phone{" "}
              <span className="sel">03 9969 3883</span>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
