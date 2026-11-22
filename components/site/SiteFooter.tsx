import Footer from "./Footer";

// The footer on every page but the homepage (the full site footer, components/site/Footer.tsx), and the torch (a soft
// light that follows the cursor). href and label are no longer shown; they're kept so the pages that pass them still work.
export default function SiteFooter(_: { href?: string; label?: string }) {
  return (
    <>
      <Footer />
      <div className="torch" aria-hidden="true"></div>
    </>
  );
}
