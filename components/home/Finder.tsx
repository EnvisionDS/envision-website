// FIND YOUR SERVICE (v119): three quick questions. Every answer sends light to the services that fit,
// so the constellation on the right brightens as you go; the brightest star at the end is the recommended starting point.
export default function Finder() {
  return (
    <section className="block" id="finder">
      <p className="eyebrow reveal">Find your starting point</p>
      <h2 className="reveal">
        Not sure what you need? <span className="grad">Follow the light.</span>
      </h2>
      <p className="reveal">
        Three quick questions. Each answer points the light at the services that fit, and the brightest one is where we
        would start.
      </p>
      <div className="fd">
        <div className="fd-stage" aria-live="polite">
          <div className="fd-prog" aria-hidden="true">
            <i className="on"></i>
            <i></i>
            <i></i>
            <span className="fd-count">Question 1 of 3</span>
          </div>
          <div className="fd-q on" data-q="1">
            <h3>Where is your business right now?</h3>
            <div className="fd-opts">
              <button className="fd-opt" type="button" data-a="launch">
                <span className="k">A</span>
                <span>Just starting out, or about to open</span>
              </button>
              <button className="fd-opt" type="button" data-a="quiet">
                <span className="k">B</span>
                <span>Up and running, but enquiries are quiet</span>
              </button>
              <button className="fd-opt" type="button" data-a="stalled">
                <span className="k">C</span>
                <span>Busy, but growth has stalled</span>
              </button>
              <button className="fd-opt" type="button" data-a="expand">
                <span className="k">D</span>
                <span>Planning to expand to a new area</span>
              </button>
            </div>
          </div>
          <div className="fd-q" data-q="2">
            <h3>What is getting in the way the most?</h3>
            <div className="fd-opts">
              <button className="fd-opt" type="button" data-a="site">
                <span className="k">A</span>
                <span>We have no website, or ours is letting us down</span>
              </button>
              <button className="fd-opt" type="button" data-a="found">
                <span className="k">B</span>
                <span>People can't find us on Google</span>
              </button>
              <button className="fd-opt" type="button" data-a="convert">
                <span className="k">C</span>
                <span>Visitors look around but don't get in touch</span>
              </button>
              <button className="fd-opt" type="button" data-a="follow">
                <span className="k">D</span>
                <span>Leads go cold, or follow-up eats our time</span>
              </button>
              <button className="fd-opt" type="button" data-a="where">
                <span className="k">E</span>
                <span>We're not sure where our best customers are</span>
              </button>
            </div>
          </div>
          <div className="fd-q" data-q="3">
            <h3>When do you need to see results?</h3>
            <div className="fd-opts">
              <button className="fd-opt" type="button" data-a="now">
                <span className="k">A</span>
                <span>This month</span>
              </button>
              <button className="fd-opt" type="button" data-a="months">
                <span className="k">B</span>
                <span>Over the next few months</span>
              </button>
              <button className="fd-opt" type="button" data-a="long">
                <span className="k">C</span>
                <span>We're building for the long term</span>
              </button>
              <button className="fd-opt" type="button" data-a="before">
                <span className="k">D</span>
                <span>Before we sign a lease or commit to a spot</span>
              </button>
            </div>
          </div>
          <div className="fd-res">
            <p className="lab">Your starting point</p>
            <h3>
              Start with <em></em>
            </h3>
            <p className="why"></p>
            <div className="pairs">
              <span>Pairs well with</span>
            </div>
            <div className="fd-acts">
              {" "}
              <a className="pill call fd-talk" href="mailto:hello@envisionds.com.au">
                Talk to us about this
                <span className="ph" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M6.6 2.8c.5-.5 1.3-.5 1.8 0l2.4 2.4c.5.5.5 1.3 0 1.8L9.6 8.2c-.3.3-.3.8-.1 1.1 1.2 2.1 3 3.9 5.1 5.1.4.2.8.2 1.1-.1l1.2-1.2c.5-.5 1.3-.5 1.8 0l2.4 2.4c.5.5.5 1.3 0 1.8l-1.5 1.5c-1 1-2.6 1.4-4 .9C10.4 17.9 6.1 13.6 4.3 8.4c-.5-1.4-.1-3 .9-4z" />
                  </svg>
                </span>
              </a>{" "}
              <a className="fd-see" href="/services/website-design-and-development">
                See how it works →
              </a>{" "}
              <button className="fd-again" type="button">
                Start again
              </button>{" "}
            </div>
          </div>
          <div className="fd-nav">
            <button className="fd-back" type="button" hidden>
              ← Back
            </button>
            <span className="fd-tip">Hover an answer to see where the light goes</span>
          </div>
        </div>
        <div className="fd-sky" aria-hidden="true">
          <svg viewBox="0 0 400 400">
            <defs>
              <radialGradient id="fdCore">
                <stop offset="0" stopColor="#98c1d9" stopOpacity=".35" />
                <stop offset="1" stopColor="#98c1d9" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle className="fd-ring" cx="200" cy="200" r="120" />
            <circle className="fd-ring d" cx="200" cy="200" r="92" />
            <circle className="fd-ring" cx="200" cy="200" r="55" />
            <g className="beams" />
            <g className="fd-stars" />
            <circle className="core-glow" cx="200" cy="200" r="52" />
            <circle className="core" cx="200" cy="200" r="6" />
            <text className="core-t" x="200" y="232">
              you
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}
