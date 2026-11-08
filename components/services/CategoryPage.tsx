import Icon from "@/components/site/Icon";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import ServiceScripts from "@/components/scripts/ServiceScripts";
import { Ctas } from "@/components/services/ServicePage";
import { CATEGORIES } from "@/lib/categories";
import { GROUPS, MENU_FOOT, type MenuGroup } from "@/lib/menu";
import { SERVICE_BY_KEY } from "@/lib/services";

const TICK = <path d="M5 12.5l4.5 4.5L19 7.5" />;
const ASK = (
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M9.5 9.5a2.5 2.5 0 1 1 3.6 2.2c-.8.4-1.1 1-1.1 1.8" />
    <path d="M12 16.8h.01" />
  </>
);

// One service category's page: the hero with its photos, the general information, the services in the category, what it
// does for you, how we approach it, the other categories, and a call to book. The wording is in lib/categories.tsx and the
// list of services in lib/menu.tsx; the look is shared with the service pages (styles/service.css).
export default function CategoryPage({ g }: { g: MenuGroup }) {
  const c = CATEGORIES[g.id];
  const at = GROUPS.indexOf(g), others = GROUPS.filter((x) => x !== g);
  const prev = GROUPS[(at + GROUPS.length - 1) % GROUPS.length], next = GROUPS[(at + 1) % GROUPS.length];
  return (
    <>
      {/* the category's colour, which every accent on the page picks up */}
      <style dangerouslySetInnerHTML={{ __html: `body{--c:${g.color}}` }} />
      <a className="skip" href="#main">
        Skip to content
      </a>
      <SiteHeader />

      <main id="main">
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="crumbs">
                <a href="/#services" data-home="">
                  Services
                </a>
                <span aria-hidden="true">/</span>
                <span>{g.name}</span>
              </p>
              <h1>{g.name}</h1>
              <p className="lede">{c.lede}</p>
              <Ctas href="/contact" />
            </div>
            {/* three photos cross-fade, with progress bars and a card naming the category */}
            <div className="ph-hero" aria-hidden="true">
              <div className="ph-frame">
                <div className="ph-slides" aria-hidden="true">
                  {c.photos.map((src) => (
                    <img src={src} alt="" key={src} />
                  ))}
                </div>
                <span className="ph-dots" aria-hidden="true">
                  <i></i>
                  <i></i>
                  <i></i>
                </span>
              </div>
              <span className="ph-chip">
                <i>
                  <Icon hidden={false}>{g.icon}</Icon>
                </i>
                <span>
                  <b>{g.name}</b>
                  {`${g.items.length} services`}
                </span>
              </span>
            </div>
          </div>
        </section>

        <section className="band" aria-labelledby="ov-h">
          <div className="wrap two rv">
            <p className="label" id="ov-h">
              Overview
            </p>
            <div className="prose">
              {c.overview.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="band" aria-labelledby="sv-h">
          <div className="wrap">
            <div className="sec-head rv">
              <p className="label">Our services</p>
              <h2 id="sv-h">{c.servicesHeading}</h2>
            </div>
            <div className="pairs pairs-wide">
              {g.items.map((key) => {
                const s = SERVICE_BY_KEY[key];
                return (
                  <a className="pair beam rv" href={s.href} key={key}>
                    <span className="ico" aria-hidden="true">
                      <Icon hidden={false}>{s.icon}</Icon>
                    </span>
                    <span className="pair-t">{s.name}</span>
                    <span className="pair-l">{s.lede}</span>
                    <span className="pair-go">
                      {"Find out more "}
                      <span aria-hidden="true">&rarr;</span>
                    </span>
                  </a>
                );
              })}
              <a className="pair pair-ask beam rv" href={`/#${MENU_FOOT.anchor}`} data-home="">
                <span className="ico" aria-hidden="true">
                  <Icon hidden={false}>{ASK}</Icon>
                </span>
                <span className="pair-t">Not sure where to start?</span>
                <span className="pair-l">Three quick questions will point you there.</span>
                <span className="pair-go">
                  {`${MENU_FOOT.link} `}
                  <span aria-hidden="true">&rarr;</span>
                </span>
              </a>
            </div>
          </div>
        </section>

        <section className="band" aria-labelledby="in-h">
          <div className="wrap">
            <div className="sec-head rv">
              <p className="label">Why it matters</p>
              <h2 id="in-h">{c.benefitsHeading}</h2>
            </div>
            <ul className="incl rv">
              {c.benefits.map((b) => (
                <li className="beam" key={b}>
                  <Icon>{TICK}</Icon>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="fit beam rv">
              <p className="label">Best for</p>
              <p className="fit-t">{c.bestFor}</p>
            </div>
          </div>
        </section>

        <section className="band" aria-labelledby="st-h">
          <div className="wrap">
            <div className="sec-head rv">
              <p className="label">Our process, step by step</p>
              <h2 id="st-h">{c.stepsHeading}</h2>
            </div>
            <ol className="steps">
              {c.steps.map((st, i) => (
                <li className="rv" key={st.title}>
                  <span className="n">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{st.title}</h3>
                  <p>{st.text}</p>
                  <span className="get">{`You get: ${st.get}`}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="band" aria-labelledby="ot-h">
          <div className="wrap">
            <div className="sec-head rv">
              <p className="label">Explore more</p>
              <h2 id="ot-h">Our other services</h2>
            </div>
            <div className="pairs pairs-wide">
              {others.map((o) => (
                <a className="pair beam rv" href={o.href} style={{ "--c": o.color }} key={o.id}>
                  <span className="ico" aria-hidden="true">
                    <Icon hidden={false}>{o.icon}</Icon>
                  </span>
                  <span className="pair-t">{o.name}</span>
                  <span className="pair-l">{CATEGORIES[o.id].lede}</span>
                  <span className="pair-go">
                    {"Explore "}
                    <span aria-hidden="true">&rarr;</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-band" aria-labelledby="cta-h">
          <div className="wrap cta rv">
            <p className="label">Next step</p>
            <h2 id="cta-h">Book a discovery call</h2>
            <p>{c.ctaText}</p>
            <Ctas href="/contact" />
            <p className="contact-line">
              Email <span className="sel">hello@envisionds.com.au</span> · Phone <span className="sel">03 9969 3883</span>
            </p>
          </div>
        </section>

        <nav className="pager wrap" aria-label="More service categories">
          <a href={prev.href} style={{ "--c": prev.color }}>
            <small>Previous category</small>
            <span>{`← ${prev.name}`}</span>
          </a>
          <a href={next.href} style={{ "--c": next.color }} className="next">
            <small>Next category</small>
            <span>{`${next.name} →`}</span>
          </a>
        </nav>
      </main>

      <SiteFooter />
      <ServiceScripts />
    </>
  );
}
