import Icon from "@/components/site/Icon";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import ServiceScripts from "@/components/scripts/ServiceScripts";
import { GROUPS } from "@/lib/menu";
import { SERVICE_BY_KEY, type Service } from "@/lib/services";

const TICK = <path d="M5 12.5l4.5 4.5L19 7.5" />;

export function Ctas({ href }: { href: string }) {
  return (
    <div className="ctas">
      <a className="btn" href={href}>
        Book a discovery call <span aria-hidden="true">&rarr;</span>
      </a>
      <a className="btn ghost" href="tel:+61399693883">
        Call 03 9969 3883
      </a>
    </div>
  );
}

// One service's page: the hero with its photos, an overview, what's included, the steps, services that pair with it,
// a call to book, and the previous / next service. The content is in lib/services.tsx; the look in styles/service.css.
export default function ServicePage({ s }: { s: Service }) {
  const group = GROUPS.find((g) => g.id === s.group)!;
  const prev = SERVICE_BY_KEY[s.prev], next = SERVICE_BY_KEY[s.next];
  return (
    <>
      {/* the service's colour, which every accent on the page picks up */}
      <style dangerouslySetInnerHTML={{ __html: `body{--c:${s.color}}` }} />
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
                <a href={group.href}>{group.name}</a>
                <span aria-hidden="true">/</span>
                <span>{s.name}</span>
              </p>
              <p className="vf">
                <span className="vf-ret" aria-hidden="true">
                  <i></i>
                </span>
                <span>{s.kicker}</span>
              </p>
              <h1>{s.title}</h1>
              <p className="lede">{s.lede}</p>
              <Ctas href={`/contact?service=${s.key}`} />
            </div>
            {/* three photos cross-fade, with progress bars and a card naming the service */}
            <div className="ph-hero" aria-hidden="true">
              <div className="ph-frame">
                <div className="ph-slides" aria-hidden="true">
                  {s.photos.map((src) => (
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
                  <Icon hidden={false}>{s.icon}</Icon>
                </i>
                <span>
                  <b>{s.name}</b>
                  {group.name}
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
              {s.overview.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="band" aria-labelledby="in-h">
          <div className="wrap">
            <div className="sec-head rv">
              <p className="label">What&apos;s included</p>
              <h2 id="in-h">{s.includedHeading}</h2>
            </div>
            <ul className="incl rv">
              {s.included.map((x, i) => {
                const item = x && typeof x === "object" && "id" in x ? x : { id: undefined, text: x };
                return (
                  <li className="beam" id={item.id} key={i}>
                    <Icon>{TICK}</Icon>
                    <span>{item.text}</span>
                  </li>
                );
              })}
            </ul>
            <div className="fit beam rv">
              <p className="label">Best for</p>
              <p className="fit-t">{s.bestFor}</p>
            </div>
          </div>
        </section>

        {s.extra}

        <section className="band" aria-labelledby="st-h">
          <div className="wrap">
            <div className="sec-head rv">
              <p className="label">Our process, step by step</p>
              <h2 id="st-h">{s.stepsHeading}</h2>
            </div>
            <ol className="steps">
              {s.steps.map((st, i) => (
                <li className="rv" key={i}>
                  <span className="n">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{st.title}</h3>
                  <p>{st.text}</p>
                  <span className="get">{`You get: ${st.get}`}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="band" aria-labelledby="pr-h">
          <div className="wrap">
            <div className="sec-head rv">
              <p className="label">Pairs well with</p>
              <h2 id="pr-h">Services that work alongside it</h2>
            </div>
            <div className="pairs rv">
              {s.pairs.map((p) => {
                const t = SERVICE_BY_KEY[p.key];
                return (
                  <a className="pair beam" href={t.href} style={{ "--c": t.color }} key={p.key}>
                    <span className="ico" aria-hidden="true">
                      <Icon hidden={false}>{p.icon}</Icon>
                    </span>
                    <span className="pair-t">{p.title}</span>
                    <span className="pair-l">{p.text}</span>
                    <span className="pair-go">
                      {`${p.cta} `}
                      <span aria-hidden="true">&rarr;</span>
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <section className="cta-band" aria-labelledby="cta-h">
          <div className="wrap cta rv">
            <p className="label">Next step</p>
            <h2 id="cta-h">Book a discovery call</h2>
            <p>{s.ctaText}</p>
            <Ctas href={`/contact?service=${s.key}`} />
            <p className="contact-line">
              Email <span className="sel">hello@envisionds.com.au</span> · Phone <span className="sel">03 9969 3883</span>
            </p>
          </div>
        </section>

        <nav className="pager wrap" aria-label="More services">
          <a href={prev.href} style={{ "--c": prev.color }}>
            <small>Previous service</small>
            <span>{`\u2190 ${prev.name}`}</span>
          </a>
          <a href={next.href} style={{ "--c": next.color }} className="next">
            <small>Next service</small>
            <span>{`${next.name} \u2192`}</span>
          </a>
        </nav>
      </main>

      <SiteFooter />
      <ServiceScripts />
    </>
  );
}
