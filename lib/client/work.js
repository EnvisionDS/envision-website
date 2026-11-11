// Our work, the window (components/home/CaseWindow.tsx): "See how we helped" opens that project's case study in a single
// browser-like window that fills the screen. It grows out of the card you clicked and, when you close it (the red button,
// Esc or a click outside), shrinks back into that card. Once it has landed, the case study's sections rise in one by one.
const CLOSE_MS = 520;   // keep in step with the closing transition in styles/work.css

export function initWork() {
  const win = document.getElementById('caseWin'); if (!win) return;
  const box = win.querySelector('.cw-win'), view = win.querySelector('.cw-view');
  const panes = [...win.querySelectorAll('.cw-pane')];
  const domain = win.querySelector('.cw-domain'), live = win.querySelector('.cw-live');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let returnTo = null, card = null, timer = 0;

  // where the window starts from (and goes back to): the card, scaled down to its size
  function fromCard() {
    if (reduce || !card) { box.style.removeProperty('--from'); return; }
    const r = card.getBoundingClientRect();
    const w = box.offsetWidth, h = box.offsetHeight, x = box.offsetLeft + w / 2, y = box.offsetTop + h / 2;
    const s = Math.min(Math.max(r.width / w, .3), .9);
    box.style.setProperty('--from', `translate(${Math.round(r.left + r.width / 2 - x)}px, ${Math.round(r.top + r.height / 2 - y)}px) scale(${s.toFixed(3)})`);
  }
  // load a project's pictures before it opens, so they don't arrive mid-animation
  function warm(id) {
    const p = panes.find(x => x.dataset.pane === id);
    if (p) p.querySelectorAll('img[loading="lazy"]').forEach(i => { i.loading = 'eager'; });
  }

  function show(id, from) {
    const pane = panes.find(p => p.dataset.pane === id); if (!pane) return;
    clearTimeout(timer);
    returnTo = from || document.activeElement; card = from && from.closest('.proj');
    warm(id);
    panes.forEach(p => { p.hidden = p !== pane; });
    domain.textContent = pane.dataset.domain; live.href = pane.dataset.url;
    box.setAttribute('aria-labelledby', `cs-h-${id}`);
    win.classList.remove('show', 'in');
    win.hidden = false; document.documentElement.classList.add('cw-on');
    view.scrollTop = 0;
    box.style.transition = 'none';   // jump straight to the card (measuring the window must not animate)…
    fromCard();
    void box.offsetWidth;
    box.style.transition = '';       // …then animate out of it
    requestAnimationFrame(() => {
      win.classList.add('show');
      timer = setTimeout(() => win.classList.add('in'), reduce ? 0 : 240);
    });
    win.querySelector('.cw-light.red').focus({ preventScroll: true });
  }
  function hide() {
    if (win.hidden || !win.classList.contains('show')) return;
    clearTimeout(timer);
    fromCard();
    win.classList.remove('show');
    document.documentElement.classList.remove('cw-on');
    timer = setTimeout(() => { win.hidden = true; win.classList.remove('in'); }, reduce ? 0 : CLOSE_MS);
    if (returnTo && returnTo.focus) returnTo.focus({ preventScroll: true });
  }

  // open from a card (and fetch its pictures as soon as someone shows interest)
  document.querySelectorAll('[data-case]').forEach(b => {
    b.addEventListener('click', () => show(b.dataset.case, b));
    const p = b.closest('.proj') || b;
    ['pointerenter', 'focusin', 'touchstart'].forEach(ev => p.addEventListener(ev, () => warm(b.dataset.case), { once: true, passive: true }));
  });

  // closing
  win.querySelectorAll('[data-cw-close]').forEach(b => b.addEventListener('click', hide));
  addEventListener('keydown', e => {
    if (win.hidden) return;
    if (e.key === 'Escape') { hide(); return; }
    if (e.key !== 'Tab') return;
    // keep the keyboard inside the window while it's open
    const items = [...box.querySelectorAll('a[href], button:not([disabled])')].filter(el => el.offsetParent !== null);
    const first = items[0], last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) { last.focus(); e.preventDefault(); }
    else if (!e.shiftKey && document.activeElement === last) { first.focus(); e.preventDefault(); }
  });
  // "Book a discovery call" inside the window: the window steps aside and the contact pop-up opens as usual
  box.addEventListener('click', e => { if (e.target.closest('a[href="/contact"]')) { returnTo = null; hide(); } }, true);
}
