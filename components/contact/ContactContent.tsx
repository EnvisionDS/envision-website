// The contact page: the enquiry form in a frame over a dim backdrop, like the homepage pop-up (styles/contact.css,
// lib/client/contact-form.js). The homepage pop-up loads this page and takes its frame.
export default function ContactContent() {
  return (
    <>
      {/* CONTACT: its own page, laid out like a pop-up (a frame over a dim backdrop, with a × to close). */}
      {/* The homepage loads the frame below (#contactFrame) into its pop-up, so this is the one place to edit the form. */}
      <div className="cx-bg" aria-hidden="true"></div>
      <main className="cx-wrap">
        <div className="frame" id="contactFrame">
          {" "}
          <a className="close" href="/" id="contactClose" aria-label="Close">
            ×
          </a>{" "}
          <div>
            <p className="eyebrow">Get in touch</p>
            <h2 id="contactTitle">Send us a brief and we will take it from there.</h2>
            <p>
              Whether you are starting fresh, rebuilding something that is not working, or looking to expand into new
              areas, we will map the highest-leverage next step.
            </p>
            <p className="prefer">Prefer email? Tap the address below to copy it across.</p>{" "}
            <button className="copy-email" type="button" id="copyEmail">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3 5h18v14H3z" />
                <path d="M3 6l9 7 9-7" />
              </svg>
              hello@envisionds.com.au <small>copied</small>
            </button>{" "}
          </div>
          <form className="form" id="enquiry" noValidate>
            {" "}
            <label>
              <span>
                Full name <span className="req">*</span>
              </span>
              <input name="name" type="text" placeholder="Jane Smith" autoComplete="name" required />
            </label>{" "}
            <label>
              <span>
                Email address <span className="req">*</span>
              </span>
              <input name="email" type="email" placeholder="jane@example.com" autoComplete="email" required />
            </label>{" "}
            <label>
              <span>
                Phone <span className="opt">(optional)</span>
              </span>
              <input name="phone" type="tel" placeholder="04xx xxx xxx" autoComplete="tel" />
            </label>{" "}
            <label>
              <span>
                Website <span className="opt">(optional)</span>
              </span>
              <input
                name="website"
                type="text"
                inputMode="url"
                placeholder="www.yourwebsite.com.au"
                autoComplete="url"
              />
            </label>{" "}
            <label className="full">
              <span>Service of interest</span>{" "}
              <select name="service">
                <option value="">Select a service (optional)</option>
                <optgroup label="Websites">
                  <option data-slug="website-design">Website design</option>
                  <option data-slug="website-development">Website development</option>
                  <option data-slug="ux-ui-design">UX/UI design</option>
                  <option data-slug="conversion">Conversion optimisation</option>
                  <option data-slug="speed-technical-fixes">Speed and technical fixes</option>
                  <option data-slug="call-form-tracking">Call and form tracking</option>
                  <option data-slug="website-maintenance">Website maintenance</option>
                </optgroup>
                <optgroup label="Digital marketing">
                  <option data-slug="seo">SEO and local search</option>
                  <option data-slug="content-creation">Content creation</option>
                  <option data-slug="google-business-profile">Google Business Profile</option>
                  <option data-slug="paid-ads">Google Ads and Meta Ads</option>
                  <option data-slug="social-media">Social media management</option>
                  <option data-slug="location-strategy">Location strategy</option>
                </optgroup>
                <optgroup label="Automation and CRM">
                  <option data-slug="crm-setup">CRM setup and clean-up</option>
                  <option data-slug="email-crm">Email follow-up sequences</option>
                  <option data-slug="lead-capture">Lead capture into your CRM</option>
                  <option data-slug="booking-reminders">Booking confirmations and reminders</option>
                  <option data-slug="review-requests">Review requests</option>
                  <option data-slug="connecting-tools">Connecting your tools</option>
                  <option data-slug="automation">Automation (general)</option>
                </optgroup>
                <option data-slug="not-sure">Not sure yet</option>
              </select>{" "}
            </label>{" "}
            <label className="full">
              <span>
                How can we help? <span className="req">*</span>
              </span>
              <textarea
                name="message"
                placeholder="Tell us a bit about your business and what you are looking to achieve..."
                required
              />
              <span className="err" id="errMsg"></span>
            </label>{" "}
            <button className="send" type="submit">
              Send Enquiry{" "}
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>{" "}
            <div className="sent">
              <h3>Thanks, your enquiry is ready to send.</h3>
              <p>
                Your email app should have opened with everything filled in. If it didn't, copy the message below and
                send it to <b>hello@envisionds.com.au</b>.
              </p>
              <pre id="sentText"></pre>
              <div className="row">
                <button className="ghost" type="button" id="copyMsg">
                  Copy message
                </button>
                <a className="ghost" id="mailAgain" href="#">
                  Open email app again
                </a>
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
