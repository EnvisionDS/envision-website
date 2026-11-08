// The order things appear in a section: each piece waits its turn, so a section builds up one part after another
// instead of arriving all at once. slot() says how long a piece should wait before it starts, and books the time it needs.
const booked = new WeakMap();
const LONGEST_WAIT = 2600;   // milliseconds; a long list shouldn't leave someone looking at an empty space

export function slot(el, gap = 280) {
  const section = el.closest('section') || document.body, now = performance.now();
  const wait = Math.min(Math.max((booked.get(section) || 0) - now, 0), LONGEST_WAIT);
  booked.set(section, now + wait + gap);
  return Math.round(wait);
}
