import MegaMenu from "./MegaMenu";
import ThemeButton from "./ThemeButton";

// The nav bar on every page but the homepage.
export default function SiteHeader({ current }: { current?: "about" }) {
  return (
    <header className="top">
      <div className="wrap nav">
        <a className="logo" href="/#hero" data-home="">
          envision
        </a>
        <nav className="nav-links" aria-label="Main">
          <a href="/#services" data-home="">
            Services
          </a>
          <a href="/#work" data-home="">
            Our work
          </a>
          <a href="/about" aria-current={current === "about" ? "page" : undefined}>
            About
          </a>
          <a href="/contact">Contact</a>
        </nav>
        <div className="nav-end">
          <ThemeButton />
          <a className="nav-cta" href="/contact">
            <b className="nc-txt">
              <em className="nc-long">Book a </em>Discovery call
            </b>
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
      <MegaMenu />
    </header>
  );
}
