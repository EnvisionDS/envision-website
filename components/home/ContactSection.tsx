export default function ContactSection() {
  return (
    <section className="block finale" id="contact">
      <p className="eyebrow reveal">Final step</p>
      <h2 className="reveal" style={{ marginLeft: "auto", marginRight: "auto" }}>
        If marketing currently feels confusing, <span className="grad">we can make it clear.</span>
      </h2>
      <p className="reveal">
        Book a strategy conversation and we will map your highest-value opportunities across channel, messaging, and
        conversion flow. We reply with a strategy conversation, usually within one business day.
      </p>
      <div className="cta-row reveal">
        <a className="pill call" href="mailto:hello@envisionds.com.au">
          Envision what’s next
          <span className="ph" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M6.6 2.8c.5-.5 1.3-.5 1.8 0l2.4 2.4c.5.5.5 1.3 0 1.8L9.6 8.2c-.3.3-.3.8-.1 1.1 1.2 2.1 3 3.9 5.1 5.1.4.2.8.2 1.1-.1l1.2-1.2c.5-.5 1.3-.5 1.8 0l2.4 2.4c.5.5.5 1.3 0 1.8l-1.5 1.5c-1 1-2.6 1.4-4 .9C10.4 17.9 6.1 13.6 4.3 8.4c-.5-1.4-.1-3 .9-4z" />
            </svg>
          </span>
        </a>
        <a className="cta-ghost" href="tel:+61399693883">
          Call 03 9969 3883
        </a>
      </div>
      <p className="email reveal">
        <a href="mailto:hello@envisionds.com.au">hello@envisionds.com.au</a>
        {" \u00a0·\u00a0 "}
        <a href="tel:+61399693883">03 9969 3883</a>
      </p>
      <div className="facts">
        <div className="fact reveal">
          <b>Book a strategy call</b>
          <span>
            Send us a quick brief and we will reply with a time that works for both of us, usually within one business
            day.
          </span>
        </div>
        <div className="fact reveal">
          <b>Response time</b>
          <span>
            We reply to enquiries Monday to Friday, between 9am and 5pm AEST. Weekend messages get answered first thing
            Monday.
          </span>
        </div>
        <div className="fact reveal">
          <b>Based in Melbourne</b>
          <span>We work with businesses across Melbourne, Victoria, and remotely throughout Australia.</span>
        </div>
      </div>
    </section>
  );
}
