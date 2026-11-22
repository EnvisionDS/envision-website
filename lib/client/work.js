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
    sizeFlows(); flowTick();
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

  // 03, how we approached it: a checklist that plays like a video as you scroll inside the window. When the chapter fits
  // the window it holds still (.pin) and the scroll works through it: for each item a cursor glides to its box, clicks,
  // and it ticks; the counter and bar follow, and once all are done the site goes "Live". If it doesn't fit (phones,
  // short windows) each item simply ticks as it scrolls past. With reduced motion it is shown complete.
  const flows = [...win.querySelectorAll('.cs-flow')];
  const clamp = (v) => Math.max(0, Math.min(1, v));
  function sizeFlows() {
    const vh = view.clientHeight;
    flows.forEach((f) => {
      if (f.offsetParent === null) return;
      f.style.setProperty('--vh', `${vh}px`);
      f.classList.remove('pin');
      const pin = f.querySelector('.cs-flow-pin');
      f.classList.toggle('pin', !reduce && innerWidth > 900 && pin.offsetHeight + 48 <= vh);
      f._done = -1; f._act = -2;
    });
  }
  function flowTick() {
    const vr = view.getBoundingClientRect();
    flows.forEach((f) => {
      if (f.offsetParent === null) return;
      const ck = f.querySelector('.ck'), rows = [...ck.querySelectorAll('.ck-row')], n = rows.length;
      const cursor = ck.querySelector('.ck-cursor');
      let done = n, act = -1, fin = true;
      if (!reduce && f.classList.contains('pin')) {
        const r = f.getBoundingClientRect(), span = r.height - vr.height;
        const p = span > 0 ? clamp((vr.top - r.top) / span) : 0;
        const q = ((p - 0.05) / 0.8) * n, i = Math.floor(q);   // each item has a turn; it ticks 45% of the way through
        done = q < 0 ? 0 : Math.min(n, i + (q - i >= 0.45 ? 1 : 0));
        act = q >= 0 && q < n ? i : -1;
        fin = done === n && p > 0.9;
      } else if (!reduce) {
        done = rows.filter((row) => row.getBoundingClientRect().top < vr.top + vr.height * 0.72).length;
        fin = done === n;
      }
      if (done === f._done && act === f._act && fin === ck.classList.contains('fin')) return;
      rows.forEach((row, k) => { row.classList.toggle('done', k < done); row.classList.toggle('act', k === act); });
      ck.querySelector('.ck-count b').textContent = done;
      ck.style.setProperty('--k', n ? done / n : 1);
      ck.classList.toggle('fin', fin);
      ck.classList.toggle('go', act >= 0);
      if (act >= 0) {
        const b = rows[act].querySelector('.ck-box').getBoundingClientRect(), c = ck.getBoundingClientRect();
        const x = b.left - c.left + b.width / 2 - 4, y = b.top - c.top + b.height / 2 - 3;
        cursor.style.setProperty('--cx', `${Math.round(x)}px`); cursor.style.setProperty('--cy', `${Math.round(y)}px`);
      }
      if (done > f._done && f._done >= 0 && act >= 0) { cursor.classList.remove('click'); void cursor.offsetWidth; cursor.classList.add('click'); }
      f._done = done; f._act = act;
    });
  }
  let ticking = false;
  view.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(() => { ticking = false; flowTick(); }); } }, { passive: true });
  addEventListener('resize', () => { if (!win.hidden) { sizeFlows(); flowTick(); } });

  // the figures: as a set of cards comes into view inside the window, its icons draw in and its numbers count up from
  // nothing (a figure that isn't a plain number, like "1–2", simply shows). Each time the window opens, they play again.
  const sets = [...win.querySelectorAll('.cs-glance, .cs-results')];
  function count(b) {
    const raw = b.dataset.count || '', m = raw.match(/^(\d+(?:\.\d+)?)(%?)$/);
    if (!m || reduce) { b.textContent = raw; return; }
    const end = parseFloat(m[1]), dp = (m[1].split('.')[1] || '').length, t0 = performance.now(), dur = 1400;
    (function step(now) {
      const k = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - k, 3);
      b.textContent = (end * e).toFixed(dp) + m[2];
      if (k < 1) requestAnimationFrame(step);
    })(t0);
  }
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      const el = e.target;
      if (e.isIntersecting && !el.classList.contains('play')) { el.classList.add('play'); el.querySelectorAll('[data-count]').forEach(count); }
      else if (!e.isIntersecting) el.classList.remove('play');
    }), { threshold: 0.3 });
    sets.forEach((el) => io.observe(el));
  } else sets.forEach((el) => el.classList.add('play'));
}
