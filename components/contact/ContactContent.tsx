import { GROUPS } from "@/lib/menu";
import { SERVICE_BY_KEY } from "@/lib/services";

// Web3Forms access key for the enquiry form (can be overridden with NEXT_PUBLIC_WEB3FORMS_KEY in Vercel)
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "2d57c18c-5738-4cce-8334-4ca63e5f06e4";

// The contact page: the enquiry form in a frame over a dim backdrop, like the homepage pop-up (styles/contact.css,
// lib/client/contact-form.js). The homepage pop-up loads this page and takes its frame.
export default function ContactContent() {
  return (
    <>
      {/* CONTACT: its own page, laid out like a pop-up (a frame over a dim backdrop, with a × to close). */}
      {/* The homepage loads the frame below (#contactFrame) into its pop-up, so this is the one place to edit the form. */}
      <div className="cx-bg" aria-hidden="true">
        {/* light spiralling in to the form, rings going out (lib/client/grand-scenes.js) */}
        <div className="g-stage" data-scene="converge"></div>
      </div>
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
          {/* the enquiry is emailed straight to hello@envisionds.com.au through Web3Forms (the form "Envision Contact Form"
              on web3forms.com); WEB3FORMS_KEY below is its access key, which is public by design. Without a key, Send
              would open the visitor's own email app instead */}
          <form className="form" id="enquiry" noValidate data-key={WEB3FORMS_KEY || undefined}>
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
                Phone <span className="req">*</span>
              </span>
              <input name="phone" type="tel" placeholder="04xx xxx xxx" autoComplete="tel" required />
            </label>{" "}
            <label>
              <span>Service of interest</span>{" "}
              <select name="service">
                <option value="">Select a service</option>
                {GROUPS.map((g) => (
                  <optgroup label={g.name} key={g.id}>
                    {g.items.map((key) => (
                      <option data-slug={key} key={key}>
                        {SERVICE_BY_KEY[key].name}
                      </option>
                    ))}
                  </optgroup>
                ))}
                <option data-slug="not-sure">Not sure yet</option>
              </select>{" "}
            </label>{" "}
            <label className="full">
              <span>How can we help?</span>
              <textarea
                name="message"
                placeholder="Tell us a bit about your business and what you are looking to achieve..."
              />
              <span className="err" id="errMsg" role="alert"></span>
            </label>{" "}
            {/* left empty by people; a bot that ticks it is quietly ignored */}
            <input className="hp" type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" />
            <button className="send" type="submit">
              Send Enquiry{" "}
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>{" "}
            <div className="thanks" role="status">
              <span className="thanks-tick" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
              </span>
              <h3>Thanks, we&apos;ve got your enquiry.</h3>
              <p>We&apos;ll be in touch soon, using the email address or phone number you gave us.</p>
            </div>
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
