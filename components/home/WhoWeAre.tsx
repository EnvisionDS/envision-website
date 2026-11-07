// WHO WE ARE: a short brief on the company. The headline on the left, what we do on the right
export default function WhoWeAre() {
  return (
    <section className="block who" id="who">
      <div className="about-intro">
        <p className="eyebrow reveal">Who we are</p>
        <h2 className="st-vh">One Team. One Plan. One Goal.</h2>
      </div>
      <div className="wl-row" style={{ "--c": "#5b9be6" }}>
        <span className="wl-ico" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <circle cx="9" cy="8" r="3" />
            <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
            <circle cx="17" cy="9" r="2.4" />
            <path d="M15.5 14.2a4.5 4.5 0 0 1 5 4.8" />
          </svg>
        </span>
        <div>
          <p className="wl-t" aria-hidden="true">
            One Team.
          </p>
          <p className="wl-d">Strategy, design, build and marketing under one roof.</p>
        </div>
      </div>
      <p className="who-p">
        We're a Melbourne team of strategists, designers, developers and marketers. One team from first call to launch,
        so nothing gets lost between agencies.
      </p>
      <div className="wl-row" style={{ "--c": "#8fd3f4" }}>
        <span className="wl-ico" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <circle cx="6" cy="18" r="2.2" />
            <circle cx="18" cy="6" r="2.2" />
            <path d="M8 18h6a3 3 0 0 0 0-6h-4a3 3 0 0 1 0-6h6" />
          </svg>
        </span>
        <div>
          <p className="wl-t" aria-hidden="true">
            One Plan.
          </p>
          <p className="wl-d">Website, search, ads and follow-up, planned together.</p>
        </div>
      </div>
      <p className="who-p">
        Your website, search, ads, social media and follow-up in one connected plan, built around your goals and budget
        so every channel pulls the same way.
      </p>
      <div className="wl-row" style={{ "--c": "#7fe0c8" }}>
        <span className="wl-ico" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M3 17l6-6 4 4 8-8" />
            <path d="M14 7h7v7" />
          </svg>
        </span>
        <div>
          <p className="wl-t grad" aria-hidden="true">
            One Goal.
          </p>
          <p className="wl-d">Real, measurable growth for your business.</p>
        </div>
      </div>
      <div className="who-cell">
        <p className="who-p">
          Your growth is our measure: every call, form and booking tracked and reported in plain English.
        </p>{" "}
        <a className="who-more" href="/about">
          More about us <span aria-hidden="true">→</span>
        </a>{" "}
      </div>{" "}
      <span className="wl-line" aria-hidden="true">
        <i></i>
      </span>{" "}
    </section>
  );
}
