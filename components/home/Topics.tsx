// BEFORE YOU GET IN TOUCH (v118, open since v136): three honest questions with their answers
export default function Topics() {
  return (
    <section className="block questions" id="topics">
      <p className="eyebrow reveal">Before you get in touch</p>
      <h2 className="reveal">
        Will working with us <span className="grad">actually help your business?</span>
      </h2>
      <p className="reveal">
        Three honest answers to the questions we hear most, just as we would give them on the first call.
      </p>
      <div className="bqs">
        <article className="bq lit reveal">
          <div className="bq-head">
            <span className="n">01</span>
            <span className="tag">Fit</span>
          </div>
          <h3>Is this right for my business?</h3>
          <div className="bq-body">
            <p className="bq-lead">
              We work best with local, service-based businesses that rely on people nearby finding them, trusting them
              and getting in touch. If that is you, the odds are good. If it is not, we would rather say so on the first
              call.
            </p>
            <h4>A good fit if</h4>
            <ul>
              <li>You want more enquiries and bookings, not just more likes</li>
              <li>You can take on more work when it comes in</li>
              <li>You are starting out, rebuilding, or expanding into a new area</li>
              <li>You want a plain-English update every week</li>
            </ul>
            <h4>Probably not yet if</h4>
            <ul>
              <li>You need results inside a week</li>
              <li>Nobody is free to answer new enquiries</li>
              <li>You are only after the cheapest one-off job</li>
            </ul>{" "}
            <a className="bq-ask" href="/contact">
              Ask us about this <span>→</span>
            </a>{" "}
          </div>
        </article>
        <article className="bq lit reveal">
          <div className="bq-head">
            <span className="n">02</span>
            <span className="tag">Results</span>
          </div>
          <h3>How will I know it is working?</h3>
          <div className="bq-body">
            <p className="bq-lead">
              You will not need to read a dashboard to understand it. Each week we tell you, in plain English, what came
              in and what we are changing.
            </p>
            <h4>What we report on</h4>
            <ul>
              <li>Calls, form enquiries and bookings</li>
              <li>Where each enquiry came from</li>
              <li>What each enquiry cost you</li>
              <li>What we are changing next, and why</li>
            </ul>
            <h4>What we do not lead with</h4>
            <ul>
              <li>Impressions, reach or likes on their own</li>
              <li>Jargon you would need us to translate</li>
            </ul>{" "}
            <a className="bq-ask" href="/contact">
              Ask us about this <span>→</span>
            </a>{" "}
          </div>
        </article>
        <article className="bq lit reveal">
          <div className="bq-head">
            <span className="n">03</span>
            <span className="tag">Peace of mind</span>
          </div>
          <h3>What if it does not work?</h3>
          <div className="bq-body">
            <p className="bq-lead">
              Because we check results every week, problems show up early and we change course, rather than finding out
              months later.
            </p>
            <h4>What you can count on</h4>
            <ul>
              <li>An honest read every week, including what is not working</li>
              <li>A change of plan when the numbers say so</li>
              <li>No lock-in contract after the first 90 days</li>
              <li>The free location snapshot is yours to keep either way</li>
            </ul>{" "}
            <a className="bq-ask" href="/contact">
              Ask us about this <span>→</span>
            </a>{" "}
          </div>
        </article>
      </div>
    </section>
  );
}
