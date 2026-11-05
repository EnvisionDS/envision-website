export default function Offers() {
  return (
    <section className="block panel warm" id="offers">
      <p className="eyebrow reveal">Engagement</p>
      <h2 className="reveal">
        Clear scope, clear process, <span className="grad">clear outcomes</span>
      </h2>
      <div className="two">
        <div className="offer reveal">
          {" "}
          <span className="tag">What you get</span> <h3>A 90-day plan, then a weekly rhythm.</h3>
          <ul>
            <li>A tailored 90-day digital marketing roadmap</li>
            <li>Campaign execution across your highest-priority channels</li>
            <li>Weekly optimisation rhythm with plain-English reporting</li>
            <li>Clear focus on better-fit leads and conversion behaviour</li>
          </ul>
          <p style={{ fontSize: ".95rem" }}>
            Enter your email and we will send you our free 90-Day Marketing Clarity Plan, the same framework we use with
            clients.
          </p>
          <form className="capture" id="roadmap" noValidate>
            <input type="email" name="email" placeholder="you@business.com.au" required aria-label="Your email" />
            <button className="go" type="submit">
              Get my roadmap
            </button>
          </form>
        </div>
        <div className="offer hot reveal">
          {" "}
          <span className="tag">Trial offer · 90 days</span>{" "}
          <h3>Try paid ads for 3 months. You cover the spend, we handle everything else.</h3>
          <p style={{ fontSize: ".95rem" }}>
            Not sure if paid ads will work for your business? This trial is designed to remove the risk from finding
            out. You set the budget, we build and run the campaigns, and after 90 days you have real data to make a
            decision with.
          </p>
          <h4>What we handle</h4>
          <ul>
            <li>Campaign strategy and audience targeting</li>
            <li>Ad copy and creative direction</li>
            <li>Google Ads and Meta Ads setup</li>
            <li>Weekly optimisation and bid management</li>
            <li>Plain-English reporting every week</li>
          </ul>
          <h4>How it works</h4>
          <ul>
            <li>Starts with a strategy call to align on goals and targeting</li>
            <li>You set the ad budget, we make it work as hard as possible</li>
            <li>90-day window with clear weekly milestones</li>
            <li>No lock-in contract after the trial period</li>
          </ul>{" "}
          <a className="pill" href="/contact" style={{ justifySelf: "start" }}>
            Start my trial
          </a>{" "}
        </div>
      </div>{" "}
      {/* ================= HOW PRICING WORKS (v135): no fixed packages. Every plan starts from the client's budget, as a
       one-off project or a monthly plan, and grows with them when they're ready. ================= */}{" "}
      <div className="pr reveal" id="pricing">
        <div className="pr-head">
          {" "}
          <span className="tag">How pricing works</span>{" "}
          <h3>
            Pricing that starts with <span className="grad">your budget</span>, not a package.
          </h3>
          <p>
            Every business is at a different stage, so we don't sell fixed packages. Tell us what you're comfortable
            investing and we'll build the plan around it.
          </p>
        </div>
        <ol className="pr-steps">
          <li>
            <b className="pr-n">01</b>
            <h4>Tell us your budget</h4>
            <p>
              Share a figure you're comfortable with, monthly or one-off. There's no wrong answer, and no pressure to
              stretch it.
            </p>
          </li>
          <li>
            <b className="pr-n">02</b>
            <h4>We focus it where it counts</h4>
            <p>
              We put it into the one or two things most likely to bring in enquiries first, and we're upfront about what
              it can achieve, so there are no surprises.
            </p>
          </li>
          <li>
            <b className="pr-n">03</b>
            <h4>Grow at your own pace</h4>
            <p>
              As results come in, you can add more. A bigger budget lets us do more at once, and you decide when that
              makes sense.
            </p>
          </li>
        </ol>
        <div className="pr-foot">
          <p>
            <b>One-off projects</b>, like a new website, or <b>monthly plans and retainers</b> for ongoing marketing.
            Both are shaped around your budget.
          </p>
          <a className="pill" href="/contact">
            Talk to us about your budget
          </a>
        </div>
      </div>
    </section>
  );
}
