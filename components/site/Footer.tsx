import { GROUPS } from "@/lib/menu";
import { SERVICE_BY_KEY } from "@/lib/services";
import "@/styles/footer.css";

// The footer on every page: who we are, quick links and how to reach us; then every service, under its four areas; then
// the copyright line with Instagram and LinkedIn as their logos. Its look is in styles/footer.css. On the homepage
// "Home" goes to the top of the page; elsewhere, to the homepage.
export default function Footer({ onHome = false }: { onHome?: boolean }) {
  return (
    <footer className="sf">
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
              <a href={onHome ? "#hero" : "/"} data-home="">
                Home
              </a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/about">About us</a>
            </li>
            <li>
              <a href="/blog">Blogs</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
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
        </div>
        <div>
          <h4>Legal</h4>
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
      {/* every service, under its area */}
      <div className="fsvc">
        {GROUPS.map((g) => (
          <div key={g.id}>
            <h4>
              <a href={`/services#${g.id}`}>{g.name}</a>
            </h4>
            <ul>
              {g.items.map((k) => (
                <li key={k}>
                  <a href={SERVICE_BY_KEY[k].href}>{SERVICE_BY_KEY[k].name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="fline">
        <span>© 2026 Envision Digital Solutions. All rights reserved.</span>
        <span className="fsocial">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener" aria-label="Envision on Instagram">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4.2" />
              <circle cx="17.3" cy="6.7" r="1.1" className="dot" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener" aria-label="Envision on LinkedIn">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                className="fill"
                d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9.5 9h3.8v1.7h.06c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1V21h-4v-5.6c0-1.34-.02-3.06-1.86-3.06-1.87 0-2.15 1.46-2.15 2.96V21h-4z"
              />
            </svg>
          </a>
        </span>
      </div>
      {/* the sign-off: ENVISION written in light across the foot of the page, gathering as you arrive and lit by the
          cursor (lib/client/grand-scenes.js, "sign"); the word in type shows until the light takes over, or without it */}
      <div className="fsign" data-scene="sign" aria-hidden="true">
        <span className="fsign-word">ENVISION</span>
      </div>
    </footer>
  );
}
