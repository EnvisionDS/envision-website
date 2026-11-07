export default function Services() {
  return (
    <section className="block panel tone-ink" id="services">
      <p className="eyebrow reveal">Services</p>
      <h2 className="reveal">
        Everything you need to <span className="grad">grow smarter</span>.
      </h2>
      <p className="reveal">
        Websites, digital marketing, automation and CRM, and consulting: four connected areas, planned as one system so
        each part makes the next one work harder. Start with one, or let us bring them together.
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
            {" "}
            <span className="st-num" aria-hidden="true">
              01
            </span>{" "}
            <p className="st-tag">Websites</p>
            <h3>Websites that turn visitors into enquiries</h3>
            <p className="st-sum">
              We design, build and look after websites that read clearly, load fast and make it easy for people to get
              in touch.
            </p>
            <ul className="st-links" aria-label="Websites services">
              <li>
                <a href="/services/website-design-and-development">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="16" rx="2" />
                    <path d="M3 9h18M9 9v11" />
                  </svg>
                  Website design
                </a>
              </li>
              <li>
                <a href="/services/website-development">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 6l-3 12" />
                  </svg>
                  Website development
                </a>
              </li>
              <li>
                <a href="/services/ux-ui-design">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 19l7-7 3 3-7 7z" />
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18z" />
                    <path d="M2 2l7.6 7.6" />
                    <circle cx="11" cy="11" r="2" />
                  </svg>
                  UX/UI design
                </a>
              </li>
              <li>
                <a href="/services/conversion">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="12" r="8" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="12" cy="12" r=".6" />
                  </svg>
                  Conversion optimisation
                </a>
              </li>
              <li>
                <a href="/services/website-maintenance">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z" />
                  </svg>
                  Website maintenance
                </a>
              </li>
            </ul>
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
            {" "}
            <span className="st-num" aria-hidden="true">
              02
            </span>{" "}
            <p className="st-tag">Digital marketing</p>
            <h3>Be found by the people ready to buy</h3>
            <p className="st-sum">
              Search, ads, social media and local strategy that put you in front of the right people, in the suburbs
              that matter.
            </p>
            <ul className="st-links" aria-label="Digital marketing services">
              <li>
                <a href="/services/seo-and-content-strategy">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="11" cy="11" r="6" />
                    <path d="M20 20l-4.5-4.5" />
                  </svg>
                  SEO and local search
                </a>
              </li>
              <li>
                <a href="/services/content-creation">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4 20h4L19 9l-4-4L4 16z" />
                    <path d="M13 7l4 4" />
                  </svg>
                  Content creation
                </a>
              </li>
              <li>
                <a href="/services/google-business-profile">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 21s-6-5.5-6-11a6 6 0 0 1 12 0c0 5.5-6 11-6 11z" />
                    <circle cx="12" cy="10" r="2" />
                  </svg>
                  Google Business Profile
                </a>
              </li>
              <li>
                <a href="/services/paid-ads-management">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M9 9l10 4-4 1.5L13.5 19z" />
                    <path d="M5 5l2 2M9 3v2M3 9h2" />
                  </svg>
                  Google Ads and Meta Ads
                </a>
              </li>
              <li>
                <a href="/services/social-media">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4 5h16v11H9l-5 4z" />
                  </svg>
                  Social media management
                </a>
              </li>
            </ul>
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
            {" "}
            <span className="st-num" aria-hidden="true">
              03
            </span>{" "}
            <p className="st-tag">Automation and CRM</p>
            <h3>Every enquiry captured and followed up</h3>
            <p className="st-sum">
              Systems that capture every lead, follow up automatically and give your team back their time, even after
              hours.
            </p>
            <ul className="st-links" aria-label="Automation and CRM services">
              <li>
                <a href="/services/crm-setup">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="5" y="3" width="14" height="18" rx="2" />
                    <circle cx="12" cy="10" r="2.5" />
                    <path d="M8.5 17a3.5 3.5 0 0 1 7 0" />
                  </svg>
                  CRM setup and clean-up
                </a>
              </li>
              <li>
                <a href="/services/email-crm">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 7l9 6 9-6" />
                  </svg>
                  Email follow-up sequences
                </a>
              </li>
              <li>
                <a href="/services/lead-capture">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4 13l2.5-8h11L20 13v6H4z" />
                    <path d="M4 13h4l1.5 2.5h5L16 13h4" />
                  </svg>
                  Lead capture into your CRM
                </a>
              </li>
              <li>
                <a href="/services/call-form-tracking">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4 20V11M10 20V5M16 20v-6M21 20H3" />
                  </svg>
                  Call and form tracking
                </a>
              </li>
              <li>
                <a href="/services/booking-reminders">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="4" y="5" width="16" height="16" rx="2" />
                    <path d="M4 10h16M9 3v4M15 3v4M9.5 15.5l2 2 3.5-4" />
                  </svg>
                  Booking confirmations and reminders
                </a>
              </li>
              <li>
                <a href="/services/review-requests">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 4l2.4 5 5.4.6-4 3.7 1.1 5.4L12 16l-4.9 2.7 1.1-5.4-4-3.7 5.4-.6z" />
                  </svg>
                  Review requests
                </a>
              </li>
              <li>
                <a href="/services/connecting-tools">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M9 7V3M15 7V3M7 7h10v4a5 5 0 0 1-10 0z" />
                    <path d="M12 16v5" />
                  </svg>
                  Connecting your tools
                </a>
              </li>
            </ul>
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
            {" "}
            <span className="st-num" aria-hidden="true">
              04
            </span>{" "}
            <p className="st-tag">Consulting</p>
            <h3>Clear answers before you commit</h3>
            <p className="st-sum">
              Know where your best opportunities are before you spend, with local data and clear recommendations.
            </p>
            <ul className="st-links" aria-label="Consulting services">
              <li>
                <a href="/location-strategy">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z" />
                    <path d="M9 4v14M15 6v14" />
                  </svg>
                  Location strategy
                </a>
              </li>
            </ul>
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
                  <span>Suburb A</span>
                  <i></i>
                </div>
                <div className="sp-loc-r best" style={{ "--w": "92%", "--i": "1" }}>
                  <span>Suburb B</span>
                  <i></i>
                </div>
                <div className="sp-loc-r" style={{ "--w": "64%", "--i": "2" }}>
                  <span>Suburb C</span>
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
