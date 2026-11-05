import ThemeButton from "@/components/site/ThemeButton";
import MegaMenu from "@/components/site/MegaMenu";

export default function HomeNav() {
  return (
    <nav>
      {" "}
      <a className="logo waiting" id="logo" href="#hero" aria-label="envision home">
        <span id="logoText">
          <span className="l">e</span>
          <span className="l">n</span>
          <span className="l">v</span>
          <span className="l">i</span>
          <span className="l">s</span>
          <span className="l">i</span>
          <span className="l">o</span>
          <span className="l">n</span>
        </span>
      </a>{" "}
      <div className="links" id="topLinks">
        <a href="#services">Services</a>
        <a href="#work">Our work</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="nav-end">
        <ThemeButton />
        <a className="nav-cta" id="navPill" href="/contact">
          <b className="nc-txt">
            <em className="nc-long">Book a </em>Discovery call
          </b>
          <span aria-hidden="true">→</span>
        </a>
      </div>{" "}
      <button
        className="menu-btn"
        id="menuBtn"
        type="button"
        aria-label="Open menu"
        aria-expanded="false"
        aria-controls="mobileMenu"
      >
        <span></span>
        <span></span>
      </button>{" "}
      <div className="mobile-menu" id="mobileMenu" hidden></div>
      <MegaMenu onHome />
    </nav>
  );
}
