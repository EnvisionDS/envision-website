// MERGED: About + Why + single process
export default function HowWeWork() {
  return (
    <section className="block about panel navy" id="how">
      <div className="about-intro">
        <p className="eyebrow reveal">How we work</p>
        <h2 className="reveal">
          A plan that grows with you, <span className="grad">built in the right order</span>.
        </h2>
        <p className="reveal">
          See how results build over your first year, the order we put things in place, and the four steps from first
          call to a phone that rings.
        </p>
        <div className="how-photos reveal" aria-hidden="true">
          <div className="hp-main">
            <img src="/img/ph-team-laptops.jpg" alt="" loading="lazy" />
          </div>
          <div className="hp-side">
            <img src="/img/ph-planning.jpg" alt="" loading="lazy" />
          </div>{" "}
          <span className="ph-chip" style={{ "--c": "#8fd3f4" }}>
            <i>
              <svg viewBox="0 0 24 24">
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <path d="M8 9h8M8 13h8M8 17h4" />
              </svg>
            </i>
            <span>
              <b>90-day plan</b>Weekly milestones, in plain English
            </span>
          </span>{" "}
        </div>
      </div>{" "}
      {/* ================= GROWTH PLANNER: pick one service or several. The chart shows enquiries each month over the first
       year, one coloured band per service stacked on the others, with three milestones marked. A light plays along the
       year when it first appears. Illustrative only. ================= */}{" "}
      <div className="gp reveal" id="growth" aria-labelledby="gpTitle">
        <div className="gp-side">
          {" "}
          <span className="gv-tag">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 17l6-6 4 4 8-8" />
              <path d="M15 7h6v6" />
            </svg>
            Growth planner
          </span>{" "}
          <h3 className="gp-h" id="gpTitle">
            How your business <span className="grad">grows with us</span>
          </h3>
          <p className="gp-p">
            Pick a service, or mix a few. See how we set each one up, when results usually start, and how they build on
            each other.
          </p>
          <div className="gp-picks" role="group" aria-label="Services to include in the graph">
            <button className="gp-pick" type="button" aria-pressed="false" data-s="1" style={{ "--c0": "#5b9be6" }}>
              <span className="gp-pi" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="4.5" width="18" height="15" rx="2" />
                  <path d="M3 9h18M6.5 6.8h.01M9 6.8h.01" />
                </svg>
              </span>
              <span className="gp-pn">
                <b>Website</b>
                <small></small>
              </span>
              <span className="gp-pc" aria-hidden="true"></span>
            </button>
            <button className="gp-pick" type="button" aria-pressed="false" data-s="2" style={{ "--c0": "#7fe0c8" }}>
              <span className="gp-pi" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="6.5" />
                  <path d="M16 16l4.5 4.5" />
                </svg>
              </span>
              <span className="gp-pn">
                <b>SEO and content</b>
                <small></small>
              </span>
              <span className="gp-pc" aria-hidden="true"></span>
            </button>
            <button className="gp-pick" type="button" aria-pressed="false" data-s="3" style={{ "--c0": "#f2b84b" }}>
              <span className="gp-pi" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M4 10v4h3l7 4V6L7 10H4z" />
                  <path d="M17.5 9.5a3.5 3.5 0 0 1 0 5" />
                </svg>
              </span>
              <span className="gp-pn">
                <b>Paid ads</b>
                <small></small>
              </span>
              <span className="gp-pc" aria-hidden="true"></span>
            </button>
            <button className="gp-pick" type="button" aria-pressed="false" data-s="4" style={{ "--c0": "#f48fb1" }}>
              <span className="gp-pi" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M4 5h16v10H10l-6 4z" />
                  <path d="M9 10h.01M12 10h.01M15 10h.01" />
                </svg>
              </span>
              <span className="gp-pn">
                <b>Social media</b>
                <small></small>
              </span>
              <span className="gp-pc" aria-hidden="true"></span>
            </button>
            <button className="gp-pick" type="button" aria-pressed="false" data-s="5" style={{ "--c0": "#b58cf0" }}>
              <span className="gp-pi" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="8" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="12" cy="12" r=".6" />
                </svg>
              </span>
              <span className="gp-pn">
                <b>Conversion</b>
                <small></small>
              </span>
              <span className="gp-pc" aria-hidden="true"></span>
            </button>
            <button className="gp-pick" type="button" aria-pressed="false" data-s="6" style={{ "--c0": "#4fc3f7" }}>
              <span className="gp-pi" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
                  <path d="M4 7l8 6 8-6" />
                </svg>
              </span>
              <span className="gp-pn">
                <b>Email and CRM</b>
                <small></small>
              </span>
              <span className="gp-pc" aria-hidden="true"></span>
            </button>
            <button className="gp-pick" type="button" aria-pressed="false" data-s="7" style={{ "--c0": "#9ccc65" }}>
              <span className="gp-pi" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M13 3L5 13h6l-1 8 8-10h-6z" />
                </svg>
              </span>
              <span className="gp-pn">
                <b>Automation</b>
                <small></small>
              </span>
              <span className="gp-pc" aria-hidden="true"></span>
            </button>
            <button className="gp-pick" type="button" aria-pressed="false" data-s="8" style={{ "--c0": "#ee6c4d" }}>
              <span className="gp-pi" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z" />
                  <circle cx="12" cy="10" r="2.4" />
                </svg>
              </span>
              <span className="gp-pn">
                <b>Location strategy</b>
                <small></small>
              </span>
              <span className="gp-pc" aria-hidden="true"></span>
            </button>
          </div>
          <div className="gp-mixes">
            <span>Try a mix</span>
            <button type="button" data-mix="1,2">
              Get found
            </button>
            <button type="button" data-mix="3,5">
              Fast leads
            </button>
            <button type="button" data-mix="1,2,3,5,6,8">
              Full plan
            </button>
          </div>
        </div>
        <div className="gp-main">
          <div className="gp-sum">
            <div className="gp-stat s1">
              <span>
                <i>1</i>First enquiries
              </span>
              <b id="gpFirst">—</b>
              <small>The first calls and forms come in</small>
            </div>
            <div className="gp-stat s2">
              <span>
                <i>2</i>A steady flow
              </span>
              <b id="gpCons">—</b>
              <small>Enquiries arrive week after week</small>
            </div>
            <div className="gp-stat s3">
              <span>
                <i>3</i>Keeps climbing
              </span>
              <b id="gpGrow">—</b>
              <small>A few more each month than the last</small>
            </div>{" "}
            <button className="gp-tip" id="gpTip" type="button" hidden></button>{" "}
          </div>
          <div className="gp-plotcol" id="gpCol">
            <div className="gp-chart">
              <div className="gp-gut" aria-hidden="true">
                <span className="gp-yl">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 19V5M6 11l6-6 6 6" />
                  </svg>
                  Enquiries each month
                </span>
                <span className="gp-yl0">None yet</span>
              </div>
              <div className="gp-plot" id="gpPlot">
                {" "}
                <svg className="gp-svg" viewBox="0 0 1000 400" preserveAspectRatio="none" aria-hidden="true">
                  <defs>
                    <clipPath id="gpClip">
                      <rect id="gpClipR" x="-10" y="-10" width="1020" height="420" />
                    </clipPath>
                  </defs>
                  <g className="gp-grid">
                    <line x1="250" x2="250" y1="0" y2="370" />
                    <line x1="500" x2="500" y1="0" y2="370" />
                    <line x1="750" x2="750" y1="0" y2="370" />
                  </g>
                  <line className="gp-base" x1="0" x2="1000" y1="370" y2="370" />
                  <g clipPath="url(#gpClip)">
                    <g className="gp-layers" />
                    <path className="gp-line" />
                  </g>
                  <g className="gp-stems">
                    <line className="k1" />
                    <line className="k2" />
                    <line className="k3" />
                  </g>
                </svg>{" "}
                <i className="gp-cur" aria-hidden="true"></i>
                <i className="gp-dot" aria-hidden="true"></i>{" "}
                <div className="gp-pins" aria-hidden="true">
                  <i className="gp-pin k1" data-k="f">
                    <b>1</b>
                    <span>First enquiries</span>
                  </i>
                  <i className="gp-pin k2" data-k="co">
                    <b>2</b>
                    <span>A steady flow</span>
                  </i>
                  <i className="gp-pin k3" data-k="gr">
                    <b>3</b>
                    <span>Keeps climbing</span>
                  </i>
                </div>{" "}
                <button className="gp-play" id="gpPlay" type="button">
                  <span aria-hidden="true">▶</span> Play the year
                </button>{" "}
                <div className="gp-legend" id="gpKey" aria-hidden="true"></div>
              </div>
            </div>
            <div className="gp-x" aria-hidden="true">
              <span>Start</span>
              <span>
                <i>Month </i>3
              </span>
              <span>
                <i>Month </i>6
              </span>
              <span>
                <i>Month </i>9
              </span>
              <span>
                <i>Month </i>12<em> months</em>
              </span>
            </div>
            <div className="gp-box" id="gpBox" aria-hidden="true"></div>
          </div>
          <p className="gp-note">
            Each colour is one of the services you picked: the taller it is, the more enquiries it brings in. Services also
            help each other, so a mix grows faster than any one on its own.{" "}
            <span className="gp-hint">Press play, or drag across the graph, to see what happens each month. </span>
            Illustrative only, based on typical timings. Every business grows at its own pace.
          </p>
          <p className="gp-sr" id="gpSr" aria-live="polite"></p>
        </div>
      </div>{" "}
      <h3 className="about-head reveal">
        From first call to a phone that rings, <span className="grad">in four steps</span>
      </h3>
      <ol className="flow">
        <li className="reveal" style={{ "--c": "#1561ad" }}>
          {" "}
          <span className="ico">
            <svg viewBox="0 0 24 24">
              <path d="M4 5h16v11H8l-4 4z" />
              <path d="M8 9h8M8 12h5" />
            </svg>
          </span>{" "}
          <b className="n">01</b>
          <h3>Listen</h3>
          <p>A strategy call about your business, your customers and what has or hasn't worked so far.</p>{" "}
          <span className="get">You get: a clear read on where you stand</span>{" "}
        </li>
        <li className="reveal" style={{ "--c": "#2f80c9" }}>
          {" "}
          <span className="ico">
            <svg viewBox="0 0 24 24">
              <path d="M4 4h16v16H4z" />
              <path d="M8 9h8M8 13h8M8 17h4" />
            </svg>
          </span>{" "}
          <b className="n">02</b>
          <h3>Plan</h3>
          <p>We map your audience, locations and channels into one connected 90-day plan, in plain English.</p>{" "}
          <span className="get">You get: a 90-day plan with weekly milestones</span>{" "}
        </li>
        <li className="reveal" style={{ "--c": "#3aa6a0" }}>
          {" "}
          <span className="ico">
            <svg viewBox="0 0 24 24">
              <path d="M14 4l6 6-10 10H4v-6z" />
              <path d="M12 6l6 6" />
            </svg>
          </span>{" "}
          <b className="n">03</b>
          <h3>Build</h3>
          <p>
            Website, search, ads and follow-up are set up to work together, so every channel tells the same story.
          </p>{" "}
          <span className="get">You get: everything live and connected</span>{" "}
        </li>
        <li className="reveal" style={{ "--c": "#ee6c4d" }}>
          {" "}
          <span className="ico">
            <svg viewBox="0 0 24 24">
              <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
            </svg>
          </span>{" "}
          <b className="n">04</b>
          <h3>Improve</h3>
          <p>Weekly check-ins on what is bringing in enquiries, and we move budget and effort towards it.</p>{" "}
          <span className="get">You get: a weekly report and next actions</span>{" "}
        </li>
      </ol>
    </section>
  );
}
