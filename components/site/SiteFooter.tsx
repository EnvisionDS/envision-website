// The footer line on every page but the homepage (with the legal pages), and the torch (a soft light that follows the cursor).
export default function SiteFooter({ href = "/#services", label = "Back to all services" }: { href?: string; label?: string }) {
  return (
    <>
      <footer className="wrap foot">
        <span>
          © 2026 Envision Digital Solutions · Melbourne, Victoria · <a href="/privacy-policy">Privacy Policy</a> ·{" "}
          <a href="/terms-and-conditions">{"Terms & Conditions"}</a>
        </span>
        <a href={href} data-home="">
          {label}
        </a>
      </footer>
      <div className="torch" aria-hidden="true"></div>
    </>
  );
}
