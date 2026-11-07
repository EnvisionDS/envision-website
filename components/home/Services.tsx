import Icon from "@/components/site/Icon";
import { GROUPS, type GroupId } from "@/lib/menu";
import { SERVICE_BY_KEY } from "@/lib/services";

const groupName = (group: GroupId) => GROUPS.find((x) => x.id === group)!.name;

// a card's list of services, straight from the Services menu (lib/menu.tsx)
function Links({ group }: { group: GroupId }) {
  const g = GROUPS.find((x) => x.id === group)!;
  return (
    <ul className="st-links" aria-label={`${g.name} services`}>
      {g.items.map((key) => {
        const s = SERVICE_BY_KEY[key];
        return (
          <li key={key}>
            <a href={s.href}>
              <Icon>{s.icon}</Icon>
              {s.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default function Services() {
  return (
    <section className="block panel tone-ink" id="services">
      <p className="eyebrow reveal">Services</p>
      <h2 className="reveal">
        Everything you need to <span className="grad">grow smarter</span>.
      </h2>
      <p className="reveal">
        Web design, digital marketing, automation and strategy: four connected areas, planned as one system so each part
        makes the next one work harder. Start with one, or let us bring them together.
      </p>
      <div className="st" id="svcStack">
        <article className="st-card" id="svc-1" style={{ "--c": "#5b9be6", "--i": "0" }}>
          <div className="st-count" aria-hidden="true">
            <i className="on"></i>
            <i></i>
            <i></i>
            <i></i>
          </div>
          <div className="st-txt">
            <p className="st-cat">{groupName("web")}</p>
            <h3>Websites that turn visitors into enquiries</h3>
            <p className="st-sum">
              We design, build and look after websites that read clearly, load fast and make it easy for people to get
              in touch.
            </p>
            <Links group="web" />
          </div>
          <div className="st-vis" aria-hidden="true">
            <div className="st-slides" aria-hidden="true">
              <img src="/img/ph-web-designer.jpg" alt="" />
              <img src="/img/ph-web-dev.jpg" alt="" loading="lazy" />
              <img src="/img/ph-team-laptops.jpg" alt="" loading="lazy" />
            </div>
            <div className="st-glass">
              <div className="sp sp-web" aria-hidden="true">
                <div className="sp-mw">
                  <div className="sp-mw-top">
                    <i></i>
                    <i></i>
                    <i></i>
                  </div>{" "}
                  <i className="sp-mw-l" style={{ "--w": "42%", "--i": "0" }}></i>
                  <i className="sp-mw-l sp-mw-hero" style={{ "--w": "82%", "--i": "1" }}></i>
                  <i className="sp-mw-l" style={{ "--w": "64%", "--i": "2" }}></i>
                  <b className="sp-mw-btn">Get a quote</b>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article className="st-card" id="svc-2" style={{ "--c": "#7fe0c8", "--i": "1" }}>
          <div className="st-count" aria-hidden="true">
            <i></i>
            <i className="on"></i>
            <i></i>
            <i></i>
          </div>
          <div className="st-txt">
            <p className="st-cat">{groupName("mkt")}</p>
            <h3>Be found by the people ready to buy</h3>
            <p className="st-sum">
              Search, ads, social media and local strategy that put you in front of the right people, in the suburbs
              that matter.
            </p>
            <Links group="mkt" />
          </div>
          <div className="st-vis" aria-hidden="true">
            <div className="st-slides" aria-hidden="true">
              <img src="/img/ph-mkt-phone.jpg" alt="" />
              <img src="/img/ph-owner-phone.jpg" alt="" loading="lazy" />
              <img src="/img/ph-shop-counter.jpg" alt="" loading="lazy" />
            </div>
            <div className="st-glass">
              <div className="sp sp-seo" aria-hidden="true">
                <div className="sp-ms-q">
                  <svg viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="6" />
                    <path d="M20 20l-4.5-4.5" />
                  </svg>
                  <span className="sp-ms-t">plumber near me</span>
                </div>{" "}
                <div className="sp-ms-r">
                  <i style={{ "--a": "0", "--b": "1" }}></i>
                  <i style={{ "--a": "1", "--b": "2" }}></i>
                  <i className="sp-you" style={{ "--a": "2", "--b": "0" }}>
                    <b>Your business</b>
                  </i>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article className="st-card" id="svc-3" style={{ "--c": "#9ccc65", "--i": "2" }}>
          <div className="st-count" aria-hidden="true">
            <i></i>
            <i></i>
            <i className="on"></i>
            <i></i>
          </div>
          <div className="st-txt">
            <p className="st-cat">{groupName("auto")}</p>
            <h3>Every enquiry captured and followed up</h3>
            <p className="st-sum">
              Systems that capture every lead, follow up automatically and give your team back their time, even after
              hours.
            </p>
            <Links group="auto" />
          </div>
          <div className="st-vis" aria-hidden="true">
            <div className="st-slides" aria-hidden="true">
              <img src="/img/ph-auto-counter.jpg" alt="" />
              <img src="/img/ph-auto-dashboard.jpg" alt="" loading="lazy" />
              <img src="/img/ph-salon.jpg" alt="" loading="lazy" />
            </div>
            <div className="st-glass">
              <div className="sp sp-auto" aria-hidden="true">
                <div className="sp-mu-line">
                  <i className="sp-mu-dot"></i>
                </div>{" "}
                <span className="sp-mu-n" style={{ "--i": "0" }}>
                  Web form
                </span>
                <span className="sp-mu-n" style={{ "--i": "1" }}>
                  CRM
                </span>
                <span className="sp-mu-n" style={{ "--i": "2" }}>
                  Text sent ✓
                </span>
              </div>
            </div>
          </div>
        </article>
        <article className="st-card" id="svc-4" style={{ "--c": "#ee6c4d", "--i": "3" }}>
          <div className="st-count" aria-hidden="true">
            <i></i>
            <i></i>
            <i></i>
            <i className="on"></i>
          </div>
          <div className="st-txt">
            <p className="st-cat">{groupName("consult")}</p>
            <h3>Know where to focus before you spend</h3>
            <p className="st-sum">
              Clear advice on your strategy, systems and locations, so every decision rests on evidence, not guesswork.
            </p>
            <Links group="consult" />
          </div>
          <div className="st-vis" aria-hidden="true">
            <div className="st-slides" aria-hidden="true">
              <img src="/img/ph-planning.jpg" alt="" />
              <img src="/img/ph-team-table.jpg" alt="" loading="lazy" />
              <img src="/img/ph-shop-counter.jpg" alt="" loading="lazy" />
            </div>
            <div className="st-glass">
              <div className="sp sp-loc" aria-hidden="true">
                <div className="sp-loc-r" style={{ "--w": "46%", "--i": "0" }}>
                  <span>Website</span>
                  <i></i>
                </div>
                <div className="sp-loc-r best" style={{ "--w": "92%", "--i": "1" }}>
                  <span>Marketing</span>
                  <i></i>
                </div>
                <div className="sp-loc-r" style={{ "--w": "64%", "--i": "2" }}>
                  <span>Systems</span>
                  <i></i>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
