// Typing: the site's main animation. Every paragraph and list line in every section types itself out as it comes into
// view, while the heading above it rises. The whole paragraph is in place from the start, its untyped part unseen, so the
// page never moves as the words appear. The heroes keep their own animation. Visitors who ask for less motion get the text
// as it is: the "ty" class on <html> (app/layout.tsx) is only set otherwise.
const TYPED = 'main p, main li, section.block p, section.block li';
// not these: the heroes; small labels; text that belongs to a pack (Who we are) or runs its own typing (Who we are, the
// values wheel); and text the page's scripts write as you use them (the growth planner, the finder's answer, the form)
const SKIP = [
  '.hero *', '#hero *', '.eyebrow', '.label', '.crumbs', '.vf', '.contact-line', '.email', '.st-tag', '.pm-label', '.pm-t',
  '.wl-row *', '.who-p', '.vw-item *', '.gp li', '.gp-sr', '.fd-res *', '.sent *', '.legal-toc *',
].join(', ');
const PER_LETTER = 18, LONGEST = 2800;   // milliseconds; long paragraphs type faster so nobody waits

export const typingOn = () => document.documentElement.classList.contains('ty');

const typers = new WeakMap();

// Readies a paragraph (all of it unseen) and returns its controls: play(delay) types it, and resolves when it finishes.
export function typer(el) {
  if (typers.has(el)) return typers.get(el);
  const runs = [], walk = document.createTreeWalker(el, NodeFilter.SHOW_TEXT), nodes = [];
  while (walk.nextNode()) if (walk.currentNode.data.trim()) nodes.push(walk.currentNode);
  nodes.forEach((done) => {
    const text = done.data, rest = document.createElement('span');
    rest.className = 'ty-r'; rest.textContent = text; done.data = ''; done.after(rest);
    runs.push({ text, done, rest });
  });
  const total = runs.reduce((n, r) => n + r.text.length, 0);
  const caret = document.createElement('span');
  caret.className = 'ty-c'; caret.setAttribute('aria-hidden', 'true');
  let wait = 0, frame = 0, finished = null;

  function show(letters) {
    let left = letters, caretSet = false;
    runs.forEach((r) => {
      const k = Math.min(left, r.text.length); left -= k;
      if (r.done.data.length !== k) { r.done.data = r.text.slice(0, k); r.rest.textContent = r.text.slice(k); }
      if (!caretSet && k < r.text.length) { caretSet = true; if (caret.nextSibling !== r.rest) r.rest.before(caret); }
    });
  }
  function settle() {
    clearTimeout(wait); cancelAnimationFrame(frame);
    if (finished) { finished(); finished = null; }
  }
  function play(delay = 0) {
    settle(); show(0);
    return new Promise((resolve) => {
      finished = resolve;
      wait = setTimeout(() => {
        const start = performance.now(), length = Math.min(total * PER_LETTER, LONGEST);
        const tick = (now) => {
          const letters = Math.min(total, Math.ceil(((now - start) / length) * total));
          show(letters);
          if (letters < total) frame = requestAnimationFrame(tick);
          else { caret.remove(); settle(); }
        };
        frame = requestAnimationFrame(tick);
      }, delay);
    });
  }
  const controls = { play };
  typers.set(el, controls);
  return controls;
}

// Types each paragraph on the page as it arrives. Ones that arrive together start a moment apart, and a paragraph
// straight under a heading gives the heading a head start. Nothing starts until `ready` (the homepage's opening).
export function initTyping(ready = Promise.resolve()) {
  if (!typingOn()) return;
  const els = [...document.querySelectorAll(TYPED)].filter((el) => !el.matches(SKIP) && !el.querySelector('p, li') && el.textContent.trim());
  els.forEach((el) => { typer(el); if (el.matches('p')) el.classList.remove('reveal'); });
  document.documentElement.classList.add('ty-ready');
  ready.then(() => {
    const io = new IntersectionObserver((entries) => {
      entries.filter((e) => e.isIntersecting)
        .sort((a, b) => (a.boundingClientRect.top - b.boundingClientRect.top) || (a.boundingClientRect.left - b.boundingClientRect.left))
        .forEach((e, k) => {
          const h = e.target.previousElementSibling, underHeading = h && /^H[1-6]$/.test(h.tagName) && h.getBoundingClientRect().top > 0;
          typer(e.target).play((underHeading ? 420 : 160) + Math.min(k, 5) * 220);
          io.unobserve(e.target);
        });
    }, { threshold: 0.25, rootMargin: '0px 0px -6% 0px' });
    els.forEach((el) => io.observe(el));
  });
}

// Resolves once an element is properly on screen, or already scrolled past (so a quick scroll can't leave it unfinished)
export function whenInView(el) {
  return new Promise((resolve) => {
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting || e.boundingClientRect.bottom < 0)) { io.disconnect(); resolve(); }
    }, { threshold: 0.5, rootMargin: '0px 0px -8% 0px' });
    io.observe(el);
  });
}
