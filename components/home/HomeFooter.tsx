export default function HomeFooter() {
  return (
    <footer>
      <div className="fcols">
        <div>
          <div className="fbrand">envision</div>
          <p style={{ fontSize: ".9rem" }}>Stop guessing. Start growing.</p>
          <p style={{ fontSize: ".85rem", marginTop: ".4rem" }}>Melbourne, Victoria, Australia</p>
        </div>
        <div>
          <h4>Quick links</h4>
          <ul>
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="/location-strategy">Location Strategy</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Core services</h4>
          <ul>
            <li>
              <a href="/services/website-design-and-development">Website Design</a>
            </li>
            <li>
              <a href="/services/seo-and-content-strategy">{"SEO & Content Strategy"}</a>
            </li>
            <li>
              <a href="/services/paid-ads-management">Paid Ads Management</a>
            </li>
            <li>
              <a href="/location-strategy">Location Strategy</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li>
              <a href="mailto:hello@envisionds.com.au">hello@envisionds.com.au</a>
            </li>
            <li>
              <a href="tel:+61399693883">03 9969 3883</a>
            </li>
          </ul>
          <h4 style={{ marginTop: "1.2rem" }}>Legal</h4>
          <ul>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms-and-conditions">{"Terms & Conditions"}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="fline">
        <span>© 2026 Envision Digital Solutions. All rights reserved.</span>
        <span>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener">
            Instagram
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener">
            LinkedIn
          </a>
        </span>
      </div>
    </footer>
  );
}
