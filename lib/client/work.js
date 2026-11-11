// Our work, the window (components/home/CaseWindow.tsx): "See how we helped" opens the projects in a browser-like window
// that fills the screen. Each project is a tab: switch between them, close one with its ×, bring a closed one back with +.
// The red button, Esc or a click outside closes the window; it opens again on the project you chose, with any tabs you
// closed still closed (unless you open one of them).
export function initWork() {
  const win = document.getElementById('caseWin'); if (!win) return;
  const box = win.querySelector('.cw-win'), view = win.querySelector('.cw-view');
  const tabs = [...win.querySelectorAll('.cw-tab')], panes = [...win.querySelectorAll('.cw-pane')];
  const plus = win.querySelector('.cw-plus'), menu = win.querySelector('.cw-menu');
  const domain = win.querySelector('.cw-domain'), live = win.querySelector('.cw-live');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const tab = id => tabs.find(t => t.dataset.tab === id);
  let current = null, returnTo = null, closing = 0;

  function sync() {
    const shut = tabs.filter(t => t.hidden);
    plus.hidden = !shut.length;
    menu.querySelectorAll('[data-open]').forEach(b => { b.hidden = !tab(b.dataset.open).hidden; });
    if (!shut.length) toggleMenu(false);
  }
  function select(id) {
    const t = tab(id); if (!t) return;
    t.hidden = false; current = id;
    tabs.forEach(x => { const on = x === t; x.classList.toggle('on', on); const b = x.querySelector('.cw-tab-go'); b.setAttribute('aria-selected', on); b.tabIndex = on ? 0 : -1; });
    panes.forEach(p => { p.hidden = p.dataset.pane !== id; });
    domain.textContent = t.dataset.domain; live.href = t.dataset.url;
    view.scrollTop = 0;
    sync();
  }
  function closeTab(id) {
    const t = tab(id), open = tabs.filter(x => !x.hidden);
    if (open.length === 1) { t.hidden = true; hide(); return; }   // closing the last tab closes the window
    const i = open.indexOf(t);
    t.hidden = true;
    if (current === id) select((open[i + 1] || open[i - 1]).dataset.tab); else sync();
  }
  function toggleMenu(open) {
    menu.hidden = !open; plus.setAttribute('aria-expanded', open);
  }

  function show(id, from) {
    clearTimeout(closing);
    returnTo = from || document.activeElement;
    if (tabs.every(t => t.hidden)) tabs.forEach(t => { t.hidden = false; });   // a fresh start after every tab was closed
    select(id);
    win.hidden = false; document.documentElement.classList.add('cw-on');
    requestAnimationFrame(() => requestAnimationFrame(() => win.classList.add('show')));
    tab(id).querySelector('.cw-tab-go').focus({ preventScroll: true });
  }
  function hide() {
    if (win.hidden) return;
    win.classList.remove('show'); toggleMenu(false);
    document.documentElement.classList.remove('cw-on');
    closing = setTimeout(() => { win.hidden = true; }, reduce ? 0 : 380);
    if (returnTo && returnTo.focus) returnTo.focus({ preventScroll: true });
  }

  // open from a card
  document.querySelectorAll('[data-case]').forEach(b => b.addEventListener('click', () => show(b.dataset.case, b)));

  // the tabs: choose, close, reopen
  tabs.forEach(t => {
    t.querySelector('.cw-tab-go').addEventListener('click', () => select(t.dataset.tab));
    t.querySelector('.cw-tab-x').addEventListener('click', e => { e.stopPropagation(); closeTab(t.dataset.tab); });
    t.addEventListener('auxclick', e => { if (e.button === 1) { e.preventDefault(); closeTab(t.dataset.tab); } });   // middle-click closes, as in a browser
  });
  plus.addEventListener('click', () => toggleMenu(menu.hidden));
  menu.querySelectorAll('[data-open]').forEach(b => b.addEventListener('click', () => { select(b.dataset.open); toggleMenu(false); tab(b.dataset.open).querySelector('.cw-tab-go').focus(); }));
  // arrow keys move between tabs, as tabs usually do
  win.querySelector('.cw-tabs').addEventListener('keydown', e => {
    if (!['ArrowLeft', 'ArrowRight'].includes(e.key) || !e.target.classList.contains('cw-tab-go')) return;
    const open = tabs.filter(t => !t.hidden), i = open.findIndex(t => t.dataset.tab === current);
    const next = open[(i + (e.key === 'ArrowRight' ? 1 : -1) + open.length) % open.length];
    select(next.dataset.tab); next.querySelector('.cw-tab-go').focus(); e.preventDefault();
  });

  // closing the window
  win.querySelectorAll('[data-cw-close]').forEach(b => b.addEventListener('click', hide));
  addEventListener('keydown', e => {
    if (win.hidden) return;
    if (e.key === 'Escape') { if (!menu.hidden) toggleMenu(false); else hide(); return; }
    if (e.key !== 'Tab') return;
    // keep the keyboard inside the window while it's open
    const items = [...box.querySelectorAll('a[href], button:not([disabled])')].filter(el => el.offsetParent !== null);
    const first = items[0], last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) { last.focus(); e.preventDefault(); }
    else if (!e.shiftKey && document.activeElement === last) { first.focus(); e.preventDefault(); }
  });
  document.addEventListener('click', e => { if (!menu.hidden && !e.target.closest('.cw-add')) toggleMenu(false); });
  // "Book a discovery call" inside the window: the window steps aside and the contact pop-up opens as usual
  box.addEventListener('click', e => { if (e.target.closest('a[href="/contact"]')) { returnTo = null; hide(); } }, true);
}
