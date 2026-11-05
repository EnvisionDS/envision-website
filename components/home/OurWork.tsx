export default function OurWork() {
  return (
    <section className="block" id="work">
      <p className="eyebrow reveal">Our work</p>
      <h2 className="reveal">
        Businesses we have <span className="grad">helped grow</span>
      </h2>
      <p className="reveal">A look at websites we have built for local businesses. Click through to see them live.</p>
      <div className="work">
        {" "}
        <a className="proj reveal" href="https://www.edencaredisability.org/" target="_blank" rel="noopener">
          {" "}
          <div className="win">
            <div className="bar">
              <i></i>
              <i></i>
              <i></i>
              <span>edencaredisability.org</span>
            </div>
            <div className="shot">
              <em>EdenCare · Melbourne</em>
              <b>We are a Trusted NDIS, Aged Care and Allied Health Provider</b>
            </div>
          </div>
          <div className="body">
            {" "}
            <span className="tag">Website design and development</span> <h3>EdenCare</h3>
            <p>
              A Melbourne provider of NDIS disability support, in-home aged care and allied health. The site sets out
              their services, from daily living support and dementia care to nursing and 24/7 support, and introduces a
              multilingual team.
            </p>
            <ul>
              <li>NDIS</li>
              <li>Aged care</li>
              <li>Allied health</li>
            </ul>{" "}
            <span className="visit">
              Visit the site <span>↗</span>
            </span>{" "}
          </div>{" "}
        </a>{" "}
        <a className="proj reveal" href="https://greater-health.com.au/" target="_blank" rel="noopener">
          {" "}
          <div className="win">
            <div className="bar">
              <i></i>
              <i></i>
              <i></i>
              <span>greater-health.com.au</span>
            </div>
            <div className="shot">
              <em>Greater Health · South East Melbourne</em>
              <b>Exercise Physiology that comes to your home, gym, pool or studio</b>
            </div>
          </div>
          <div className="body">
            {" "}
            <span className="tag">Website design and development</span> <h3>Greater Health</h3>
            <p>
              A mobile exercise physiology provider covering 64 suburbs across Melbourne's South East, with hydrotherapy
              and clinical Pilates. The site brings online booking, referrals for GPs and case managers, and seven
              funding pathways into one clear journey.
            </p>
            <ul>
              <li>Online booking</li>
              <li>Referrals</li>
              <li>Local service areas</li>
            </ul>{" "}
            <span className="visit">
              Visit the site <span>↗</span>
            </span>{" "}
          </div>{" "}
        </a>{" "}
      </div>
      <div className="proof-sub reveal" id="reviews">
        <h3>What our clients say about us</h3>
      </div>{" "}
      {/* REVIEWS: replace each slot with the client's real words. For a filled card, remove "slot" from the class,
       put the review in the blockquote, their initials in .av, and their name and business under it. */}{" "}
      <div className="reviews">
        <figure className="review slot reveal">
          <div className="stars" aria-hidden="true">
            ★★★★★
          </div>
          <blockquote>Review from EdenCare to be added.</blockquote>
          <figcaption className="who">
            <span className="av">EC</span>
            <span>
              <b>EdenCare</b>
              <span>NDIS, aged care and allied health</span>
            </span>
          </figcaption>
        </figure>
        <figure className="review slot reveal">
          <div className="stars" aria-hidden="true">
            ★★★★★
          </div>
          <blockquote>Review from Greater Health to be added.</blockquote>
          <figcaption className="who">
            <span className="av">GH</span>
            <span>
              <b>Greater Health</b>
              <span>Mobile exercise physiology</span>
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
