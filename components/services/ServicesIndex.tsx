import Icon from "@/components/site/Icon";
import { Ctas } from "@/components/services/ServicePage";
import { GROUPS, MENU_FOOT } from "@/lib/menu";
import { SERVICE_BY_KEY } from "@/lib/services";

// The Services page (/services, from Services in the nav): every service in the menu, by group, then ways in by goal,
// services that work well together, how working with us goes, and a call to book. The look is in styles/services-index.css;
// the sticky bar that follows the groups is lib/client/services-index.js.

const ARROW = <path d="M5 12h14M13 6l6 6-6 6" />;
const total = GROUPS.reduce((n, g) => n + g.items.length, 0);

// a goal a customer might come with, and the services that answer it (keys from lib/services.tsx)
const GOALS: { goal: string; text: string; keys: string[] }[] = [
  { goal: "More enquiries from my website", text: "People visit, but not many call or fill in the form.", keys: ["conversion", "website-design"] },
  { goal: "Be found when people search", text: "Customers are looking for what you do, and finding someone else.", keys: ["seo", "paid-ads"] },
  { goal: "Stop losing leads", text: "Enquiries arrive in too many places and some never get a reply.", keys: ["lead-capture", "crm-setup"] },
  { goal: "Fewer no-shows", text: "Bookings that slip through the cracks, or forget to turn up.", keys: ["booking-reminders", "automation"] },
  { goal: "Less time on admin", text: "Copying the same details between systems, by hand, every day.", keys: ["connecting-tools", "process-reviews"] },
  { goal: "Know what's working", text: "You're spending on marketing but can't say what brings customers in.", keys: ["call-form-tracking", "audits"] },
  { goal: "A plan before I spend", text: "You know you need to do more online, but not where to start.", keys: ["digital-strategy", "location-strategy"] },
  { goal: "Sell online", text: "Starting an online store, or fixing one that's hard to run.", keys: ["ecommerce", "ux-ui-design"] },
];

// a few services that are often taken together, and why
const BUNDLES: { title: string; text: string; keys: string[] }[] = [
  {
    title: "Launch a new website",
    text: "A site built to bring in enquiries, found in search from the start, with tracking that shows which pages are working.",
    keys: ["website-design", "seo", "call-form-tracking"],
  },
  {
    title: "Fill the calendar",
    text: "Ads that bring people in, every enquiry captured straight away, and reminders that make sure they turn up.",
    keys: ["paid-ads", "lead-capture", "booking-reminders"],
  },
  {
    title: "Win back your time",
    text: "One place for every customer, the routine follow-ups done automatically, and your tools sharing what they know.",
    keys: ["crm-setup", "automation", "connecting-tools"],
  },
];

// how working with us goes, from the first call
const HOW: { title: string; text: string }[] = [
  { title: "A discovery call", text: "We talk about your business, your customers and what you want to change." },
  { title: "A plan and a quote", text: "You get a clear recommendation of what to do first, and what it will cost." },
  { title: "We get to work", text: "We build, set up or run the work, and keep you posted as it comes together." },
  { title: "We measure and improve", text: "We look at what's working, report back, and adjust from there." },
];

function Chip({ k }: { k: string }) {
  const s = SERVICE_BY_KEY[k];
  return (
    <a className="ix-chip" href={s.href} style={{ "--c": s.color }}>
      <Icon>{s.icon}</Icon>
      {s.name}
    </a>
  );
}

export default function ServicesIndex() {
  return (
    <main id="main">
      {/* the opening: what's here, and the four groups to jump to */}
      <section className="hero ix-hero">
        {/* four rings of light, one per group of services, turning about a core (lib/client/grand-scenes.js) */}
        <div
          className="g-stage"
          data-scene="rings"
          aria-hidden="true"
          style={Object.fromEntries(GROUPS.map((g, i) => [`--g${i + 1}`, g.color]))}
        ></div>
        <div className="g-veil left" aria-hidden="true"></div>
        <div className="wrap ix-hero-grid">
          <div className="hero-copy">
            <p className="crumbs">
              <a href="/" data-home="">
                Home
              </a>
              <span aria-hidden="true">/</span>
              <span>Services</span>
            </p>
            <p className="vf">
              <span className="vf-ret" aria-hidden="true">
                <i></i>
              </span>
              <span>Our services</span>
            </p>
            <h1>Everything we do, in one place</h1>
            <p className="lede">
              {`${total} services across websites, marketing, automation and strategy. Take one on its own, or let us put the right few together for you.`}
            </p>
            <Ctas href="/contact" />
          </div>
          <nav className="ix-jump" aria-label="Service areas">
            {GROUPS.map((g) => (
              <a href={`#${g.id}`} className="ix-jump-a beam" style={{ "--c": g.color }} key={g.id}>
                <span className="ix-jump-ico">
                  <Icon>{g.icon}</Icon>
                </span>
                <b>{g.name}</b>
                <small>{`${g.items.length} services`}</small>
                <span className="ix-jump-go" aria-hidden="true">
                  <Icon>{ARROW}</Icon>
                </span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* the groups, with a bar that stays at the top while they scroll by, showing which one you're in */}
      <div className="ix-groups">
      <div className="ix-bar" id="ixBar">
        <div className="wrap ix-bar-in">
          {GROUPS.map((g) => (
            <a href={`#${g.id}`} style={{ "--c": g.color }} key={g.id}>
              <Icon>{g.icon}</Icon>
              <span>{g.name}</span>
            </a>
          ))}
        </div>
      </div>

      {/* each group: a heading across the page with a line drawing in under it, then its services as a bento, the first
          one larger (on the left, then the right, group by group) */}
      {GROUPS.map((g, gi) => {
        const [lead, ...rest] = g.items;
        return (
          <section className="band ix-group" id={g.id} style={{ "--c": g.color }} aria-labelledby={`${g.id}-h`} key={g.id}>
            <div className="wrap">
              <header className="ix-gh rv">
                <span className="ix-group-ico" aria-hidden="true">
                  <Icon>{g.icon}</Icon>
                </span>
                <span className="ix-group-n">
                  {String(gi + 1).padStart(2, "0")}
                  <span aria-hidden="true">{` / ${String(GROUPS.length).padStart(2, "0")}`}</span>
                </span>
                <h2 id={`${g.id}-h`}>{g.name}</h2>
                <p>{g.summary}</p>
                <span className="ix-gh-rule" aria-hidden="true"></span>
              </header>
              <ul className={`ix-bento${gi % 2 ? " ix-flip" : ""}`}>
                {[lead, ...rest].map((k, i) => {
                  const s = SERVICE_BY_KEY[k];
                  return (
                    <li className={i === 0 ? "ix-feat" : undefined} key={k}>
                      <a className="ix-card beam rv" href={s.href}>
                        <span className="ix-card-top">
                          <span className="ix-svc-ico">
                            <Icon>{s.icon}</Icon>
                          </span>
                          <span className="ix-svc-go" aria-hidden="true">
                            <Icon>{ARROW}</Icon>
                          </span>
                        </span>
                        <b>{s.name}</b>
                        <span className="ix-card-d">{s.description}</span>
                        <small>
                          <em>Best for</em> {s.bestFor.replace(/ Not sure\?.*$/, "")}
                        </small>
                        {i === 0 ? (
                          <span className="ix-card-mark" aria-hidden="true">
                            <Icon>{s.icon}</Icon>
                          </span>
                        ) : null}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        );
      })}
      </div>

      {/* ways in by goal, for anyone who knows the problem but not the service */}
      <section className="band" aria-labelledby="goal-h">
        <div className="wrap">
          <div className="sec-head rv">
            <p className="label">Start with your goal</p>
            <h2 id="goal-h">Not sure what you need? Start with what you want to change</h2>
          </div>
          <ul className="ix-goals rv">
            {GOALS.map((x) => (
              <li className="ix-goal beam" key={x.goal}>
                <b>{x.goal}</b>
                <p>{x.text}</p>
                <span className="ix-goal-for">Try</span>
                <span className="ix-chips">
                  {x.keys.map((k) => (
                    <Chip k={k} key={k} />
                  ))}
                </span>
              </li>
            ))}
          </ul>
          <p className="ix-finder rv">
            {`Still not sure? ${MENU_FOOT.text.replace(/^Not sure where to start\? /, "")} `}
            <a href={`/#${MENU_FOOT.anchor}`} data-home="">
              {`${MENU_FOOT.link} `}
              <span aria-hidden="true">&rarr;</span>
            </a>
          </p>
        </div>
      </section>

      {/* services that are often taken together */}
      <section className="band" aria-labelledby="bun-h">
        <div className="wrap">
          <div className="sec-head rv">
            <p className="label">Better together</p>
            <h2 id="bun-h">Services that work well side by side</h2>
            <p className="sec-intro">Each service stands on its own, but a few are often taken together because each makes the others work harder.</p>
          </div>
          <div className="ix-bundles">
            {BUNDLES.map((b) => (
              <article className="ix-bundle beam rv" key={b.title}>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
                <div className="ix-stack">
                  {b.keys.map((k, i) => (
                    <span className="ix-stack-row" key={k}>
                      {i > 0 ? (
                        <span className="ix-plus" aria-hidden="true">
                          +
                        </span>
                      ) : null}
                      <Chip k={k} />
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* how working with us goes */}
      <section className="band" aria-labelledby="how-h">
        <div className="wrap">
          <div className="sec-head center rv">
            <p className="label">Working with us</p>
            <h2 id="how-h">What happens after you get in touch</h2>
          </div>
          <ol className="ix-how rv">
            {HOW.map((h, i) => (
              <li key={h.title} style={{ "--i": i }}>
                <span className="ix-how-n">{String(i + 1).padStart(2, "0")}</span>
                <b>{h.title}</b>
                <p>{h.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="cta-band" aria-labelledby="cta-h">
        <div className="g-stage" data-scene="dust" aria-hidden="true"></div>
        <div className="wrap cta rv">
          <p className="label">Next step</p>
          <h2 id="cta-h">Book a discovery call</h2>
          <p>Tell us what you&apos;re working on and we&apos;ll point you to the services that will make the biggest difference first.</p>
          <Ctas href="/contact" />
          <p className="contact-line">
            Email <span className="sel">hello@envisionds.com.au</span> · Phone <span className="sel">03 9969 3883</span>
          </p>
        </div>
      </section>
    </main>
  );
}
