export default function Hero() {
  return (
    <section id="hero">
      <canvas id="heroLens" aria-hidden="true"></canvas>{" "}
      {/* the copy sits in the middle of the dark "room"; the map and the hidden opportunities surround it */}{" "}
      <div className="hero-wrap">
        <p className="hero-eyebrow vf">
          <span className="vf-ret" aria-hidden="true">
            <i></i>
          </span>
          <span className="vf-t">Digital solutions agency</span>
          <i className="vf-sep" aria-hidden="true"></i>
          <span className="vf-t">Melbourne</span>
        </p>
        <p className="hero-svc" id="heroSvc" aria-hidden="true"></p>
        <h1 id="slot">
          <span className="slot-in">
            We bring your <span className="grad">visions</span> to life, and the <span className="grad">customers</span>{" "}
            to you.
          </span>
        </h1>
        <p className="sub">
          We're a Melbourne team of strategists, developers and creative thinkers. Websites, search, ads and automation,
          planned as one system that brings in real enquiries.
        </p>
        <div className="hero-ctas">
          {" "}
          <a className="pill solid" href="#services">
            Explore services
          </a>{" "}
          <a className="pill call to-work" href="#work">
            Our work
            <span className="ph" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M4 11h12.2l-4.6-4.6L13 5l7 7-7 7-1.4-1.4 4.6-4.6H4z" />
              </svg>
            </span>
          </a>{" "}
        </div>
      </div>
    </section>
  );
}
