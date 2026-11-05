// OUR PROMISE: the commitments behind every project, and how we measure our work (what counts as
// success, and what doesn't)
export default function OurPromise() {
  return (
    <section className="block panel tone-slate promise" id="promise">
      <p className="eyebrow reveal">Our promise</p>
      <h2 className="reveal">
        We don't stop until <span className="grad">you grow</span>.
      </h2>
      <p className="reveal">
        Launching something is the start, not the finish. These are the commitments behind every project we take on,
        whatever the size of the budget.
      </p>
      <ol className="pm-list">
        <li className="pm-row reveal" style={{ "--c": "#5b9be6" }}>
          <span className="pm-n" aria-hidden="true">
            01
          </span>
          <h3>Value first, price second</h3>
          <p>
            We start by showing you what's possible: where the opportunity is and what it would take. Then we shape the
            work around your budget, not the other way round.
          </p>
          <span className="pm-ico" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="8" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="12" cy="12" r=".6" />
            </svg>
          </span>
        </li>
        <li className="pm-row reveal" style={{ "--c": "#8fd3f4" }}>
          <span className="pm-n" aria-hidden="true">
            02
          </span>
          <h3>Measured by enquiries, not likes</h3>
          <p>
            Success is calls, forms and bookings, traced back to where they came from. If something isn't bringing in
            work, we change it.
          </p>
          <span className="pm-ico" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M4 20V11M10 20V5M16 20v-6M2 20h20" />
            </svg>
          </span>
        </li>
        <li className="pm-row reveal" style={{ "--c": "#7fe0c8" }}>
          <span className="pm-n" aria-hidden="true">
            03
          </span>
          <h3>Honest when it's not working</h3>
          <p>
            Not every idea lands. When something underperforms we tell you early, in plain English, and move the effort
            to what does.
          </p>
          <span className="pm-ico" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M4 5h16v11H9l-5 4z" />
              <path d="M8.5 10.5h7" />
            </svg>
          </span>
        </li>
        <li className="pm-row reveal" style={{ "--c": "#f2b84b" }}>
          <span className="pm-n" aria-hidden="true">
            04
          </span>
          <h3>We don't stop at launch</h3>
          <p>
            A site going live or ads switching on is day one. We keep testing, improving and reporting, month after
            month, as your business grows.
          </p>
          <span className="pm-ico" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M20 11a8 8 0 1 0-2.3 5.7" />
              <path d="M20 4v7h-7" />
            </svg>
          </span>
        </li>
      </ol>
      <div className="pm-measure reveal">
        <div className="pm-head">
          <p className="pm-label">How we measure our work</p>
          <h3>If it doesn't bring in work, it doesn't count.</h3>
          <div className="pm-no">
            <p className="pm-t">What we don't count</p>
            <ul>
              <li>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 7l10 10M17 7L7 17" />
                </svg>
                <span>Likes and followers on their own</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 7l10 10M17 7L7 17" />
                </svg>
                <span>Impressions nobody acts on</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 7l10 10M17 7L7 17" />
                </svg>
                <span>Traffic that never gets in touch</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 7l10 10M17 7L7 17" />
                </svg>
                <span>Rankings for searches nobody makes</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pm-report">
          <div className="pr-top" aria-hidden="true">
            <span className="pr-dots">
              <i></i>
              <i></i>
              <i></i>
            </span>
            <b>Your monthly report</b>
            <span className="pr-live">
              <i></i>Tracked
            </span>
          </div>
          <p className="pm-t">What we count as success</p>
          <ul>
            <li>
              <span className="pr-ico" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M6.6 2.8c.5-.5 1.3-.5 1.8 0l2.4 2.4c.5.5.5 1.3 0 1.8L9.6 8.2c-.3.3-.3.8-.1 1.1 1.2 2.1 3 3.9 5.1 5.1.4.2.8.2 1.1-.1l1.2-1.2c.5-.5 1.3-.5 1.8 0l2.4 2.4c.5.5.5 1.3 0 1.8l-1.5 1.5c-1 1-2.6 1.4-4 .9C10.4 17.9 6.1 13.6 4.3 8.4c-.5-1.4-.1-3 .9-4z" />
                </svg>
              </span>
              <span className="pr-l">Phone calls</span>
              <span className="pr-track" aria-hidden="true">
                <i style={{ "--w": "84%" }}></i>
              </span>
              <span className="pr-tr" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M7 17L17 7M9 7h8v8" />
                </svg>
              </span>
            </li>
            <li>
              <span className="pr-ico" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <rect x="5" y="3" width="14" height="18" rx="2" />
                  <path d="M9 8h6M9 12h6M9 16h3" />
                </svg>
              </span>
              <span className="pr-l">Form enquiries</span>
              <span className="pr-track" aria-hidden="true">
                <i style={{ "--w": "68%" }}></i>
              </span>
              <span className="pr-tr" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M7 17L17 7M9 7h8v8" />
                </svg>
              </span>
            </li>
            <li>
              <span className="pr-ico" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <rect x="4" y="5" width="16" height="16" rx="2" />
                  <path d="M4 10h16M9 3v4M15 3v4M9.5 15.5l2 2 3.5-4" />
                </svg>
              </span>
              <span className="pr-l">Booked appointments</span>
              <span className="pr-track" aria-hidden="true">
                <i style={{ "--w": "74%" }}></i>
              </span>
              <span className="pr-tr" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M7 17L17 7M9 7h8v8" />
                </svg>
              </span>
            </li>
            <li>
              <span className="pr-ico" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M12 3v18M16.5 7.5c-.7-1.4-2.4-2.2-4.5-2.2-2.6 0-4.3 1.3-4.3 3.2 0 4.5 9 2.3 9 6.8 0 1.9-1.9 3.4-4.7 3.4-2.3 0-4-.9-4.8-2.4" />
                </svg>
              </span>
              <span className="pr-l">Cost per enquiry</span>
              <span className="pr-track" aria-hidden="true">
                <i style={{ "--w": "42%" }}></i>
              </span>
              <span className="pr-tr" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M7 7l10 10M17 9v8H9" />
                </svg>
              </span>
            </li>
            <li className="pr-src">
              <span className="pr-ico" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z" />
                  <circle cx="12" cy="10" r="2.3" />
                </svg>
              </span>
              <span className="pr-l">Where every lead came from</span>
              <span className="pr-track" aria-hidden="true">
                <i style={{ "--w": "41%" }}></i>
                <i style={{ "--w": "32%" }}></i>
                <i style={{ "--w": "25%" }}></i>
              </span>
              <span className="pr-tr"></span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
