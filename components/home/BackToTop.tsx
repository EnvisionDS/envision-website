// BACK TO TOP: appears once you leave the hero; its ring fills with light as you scroll down
export default function BackToTop() {
  return (
    <button className="to-top" id="toTop" type="button" aria-label="Back to top" title="Back to top">
      {" "}
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle className="tt-track" cx="24" cy="24" r="21" />
        <circle className="tt-fill" cx="24" cy="24" r="21" pathLength="100" />
        <path className="tt-arrow" d="M24 31V17M17.5 23.5 24 17l6.5 6.5" />
      </svg>{" "}
    </button>
  );
}
