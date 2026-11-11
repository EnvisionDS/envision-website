import { CASES } from "@/lib/work";

export default function OurWork() {
  return (
    <section className="block" id="work">
      <p className="eyebrow reveal">Our work</p>
      <h2 className="reveal">
        Businesses we have <span className="grad">helped grow</span>
      </h2>
      <p className="reveal">A look at websites we have built for local businesses, and how each one helps.</p>
      <div className="work">
        {CASES.map((c) => (
          <article className="proj reveal" style={{ "--c": c.color }} key={c.id}>
            <div className="win">
              <div className="bar">
                <i></i>
                <i></i>
                <i></i>
                <span>{c.domain}</span>
              </div>
              <div className="shot">
                <img src={c.shot} alt={c.shotAlt} loading="lazy" width="1460" height="900" />
              </div>
            </div>
            <div className="body">
              <span className="proj-logo">{c.logo}</span>
              <span className="tag">Website design and development</span>
              <h3>{c.name}</h3>
              <p>{c.summary}</p>
              <ul>
                {c.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <button className="visit" type="button" data-case={c.id} aria-haspopup="dialog">
                See how we helped <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </article>
        ))}
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
