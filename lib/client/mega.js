// Envision: the Services mega menu (homepage and service pages). It opens while the pointer is on the Services link or the
// panel, or when either has keyboard focus, and closes a moment after the pointer leaves, on Esc, or once a link is picked.
export function initMegaMenu() {
  var drop = document.getElementById('navDrop'); if (!drop) return;
  var host = drop.parentElement, link = host.querySelector('a[href="#services"], a[href="/#services"]');
  if (!link || matchMedia('(hover: none)').matches) return;
  var t = 0;
  link.setAttribute('aria-haspopup', 'true'); link.setAttribute('aria-expanded', 'false'); link.setAttribute('aria-controls', 'navDrop');
  function set(open) { host.classList.toggle('drop-open', open); link.setAttribute('aria-expanded', open); }
  function open() { clearTimeout(t); set(true); }
  function close() { clearTimeout(t); t = setTimeout(function () { set(false); }, 180); }
  [link, drop].forEach(function (el) { el.addEventListener('pointerenter', open); el.addEventListener('pointerleave', close); });
  link.addEventListener('focus', open); drop.addEventListener('focusin', open);
  drop.addEventListener('focusout', function (e) { if (!drop.contains(e.relatedTarget) && e.relatedTarget !== link) close(); });
  link.addEventListener('blur', function (e) { if (!drop.contains(e.relatedTarget)) close(); });
  drop.addEventListener('click', function (e) { if (e.target.closest('a')) { clearTimeout(t); set(false); } });
  addEventListener('keydown', function (e) { if (e.key === 'Escape' && host.classList.contains('drop-open')) { set(false); link.focus(); } });
}
