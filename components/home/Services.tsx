import Icon from "@/components/site/Icon";
import { GROUPS, type GroupId } from "@/lib/menu";
import { SERVICE_BY_KEY } from "@/lib/services";

// what each card says about its category; its title, icon, colour, services and page come from the Services menu (lib/menu.tsx)
const SUMMARY: Record<GroupId, string> = {
  web: "We design, build and look after websites that read clearly, load fast and make it easy for people to get in touch.",
  mkt: "Search, ads, social media and local strategy that put you in front of the right people, in the suburbs that matter.",
  auto: "Systems that capture every lead, follow up automatically and give your team back their time, even after hours.",
  consult: "Clear advice on your strategy, systems and locations, so every decision rests on evidence, not guesswork.",
};

// SERVICES: four cards, two by two, one per category
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
      <div className="sv-grid">
        {GROUPS.map((g) => (
          <article className="sv-card reveal" style={{ "--c": g.color }} key={g.id}>
            <div className="sv-head">
              <h3 className="sv-t">{g.name}</h3>
              <span className="sv-ico" aria-hidden="true">
                <Icon>{g.icon}</Icon>
              </span>
            </div>
            <p className="sv-sum">{SUMMARY[g.id]}</p>
            <ul className="sv-links" aria-label={`${g.name} services`}>
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
            <a className="sv-btn" href={g.href}>
              <span>{g.explore}</span>
              <span className="sv-arrow" aria-hidden="true">
                &rarr;
              </span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
