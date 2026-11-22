import type { ReactNode } from "react";

// WHO WE ARE: held on screen while the visitor scrolls through it (styles/home-who.css). One line at a time, One Team,
// One Plan, One Goal, beside a 3D scene that follows the scroll (lib/client/grand-scenes.js, "team"): scattered
// clusters of light (the team) line up into paths meeting at one point (the plan), then form the Envision mark (the goal).
const STEPS: { c: string; t: string; grad?: boolean; d: string; p: string; icon: ReactNode }[] = [
  {
    c: "#5b9be6",
    t: "One Team.",
    d: "Strategy, design, build and marketing under one roof.",
    p: "We're a Melbourne team of strategists, designers, developers and marketers. One team from first call to launch, so nothing gets lost between agencies.",
    icon: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
        <circle cx="17" cy="9" r="2.4" />
        <path d="M15.5 14.2a4.5 4.5 0 0 1 5 4.8" />
      </>
    ),
  },
  {
    c: "#8fd3f4",
    t: "One Plan.",
    d: "Website, search, ads and follow-up, planned together.",
    p: "Your website, search, ads, social media and follow-up in one connected plan, built around your goals and budget so every channel pulls the same way.",
    icon: (
      <>
        <circle cx="6" cy="18" r="2.2" />
        <circle cx="18" cy="6" r="2.2" />
        <path d="M8 18h6a3 3 0 0 0 0-6h-4a3 3 0 0 1 0-6h6" />
      </>
    ),
  },
  {
    c: "#5b9be6",
    t: "One Goal.",
    grad: true,
    d: "Real, measurable growth for your business.",
    p: "Your growth is our measure: every call, form and booking tracked and reported in plain English.",
    icon: (
      <>
        <path d="M3 17l6-6 4 4 8-8" />
        <path d="M14 7h7v7" />
      </>
    ),
  },
];

export default function WhoWeAre() {
  return (
    <section className="block who wa" id="who">
      <div className="wa-pin">
        <div className="g-stage wa-stage" data-scene="team" aria-hidden="true"></div>
        <div className="wa-in">
          <div className="about-intro">
            <p className="eyebrow reveal">Who we are</p>
            <h2 className="st-vh">One Team. One Plan. One Goal.</h2>
          </div>
          <ol className="wa-steps">
            {STEPS.map((s, i) => (
              <li className={`wa-step${i === 0 ? " on" : ""}`} style={{ "--c": s.c }} key={s.t}>
                <div className="wl-row">
                  <span className="wl-ico" aria-hidden="true">
                    <svg viewBox="0 0 24 24">{s.icon}</svg>
                  </span>
                  <div>
                    <p className={`wl-t${s.grad ? " grad" : ""}`} aria-hidden="true">
                      {s.t}
                    </p>
                    <p className="wl-d">{s.d}</p>
                  </div>
                </div>
                <p className="wa-p">{s.p}</p>
                {i === STEPS.length - 1 ? (
                  <a className="who-more" href="/about">
                    More about us <span aria-hidden="true">→</span>
                  </a>
                ) : null}
              </li>
            ))}
          </ol>
          <ol className="wa-dots" aria-hidden="true">
            {STEPS.map((s, i) => (
              <li className={i === 0 ? "on" : undefined} key={s.t}>
                <i></i>
                <span>{s.t.replace(".", "")}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
