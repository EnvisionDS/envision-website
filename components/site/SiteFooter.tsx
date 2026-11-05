// The footer line on every page but the homepage, and the torch (a soft light that follows the cursor).
export default function SiteFooter({ href = "/#services", label = "Back to all services" }: { href?: string; label?: string }) {
  return (
    <>
      <footer className="wrap foot">
        <span>© 2026 Envision Digital Solutions · Melbourne, Victoria</span>
        <a href={href} data-home="">
          {label}
        </a>
      </footer>
      <div className="torch" aria-hidden="true"></div>
    </>
  );
}
