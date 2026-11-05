import { initContactForm } from './contact-form';

// on its own page the × (or Esc) goes back to where the visitor came from on this site, or to the homepage
export function initContactPage() {
  var frame = document.getElementById('contactFrame'), close = document.getElementById('contactClose');
  initContactForm(frame);
  // a service page's "Book a discovery call" link names its service (/contact?service=landing-pages); pick it in the form
  try {
    var want = new URLSearchParams(location.search).get('service'), opt = want && frame.querySelector('option[data-slug="' + want.replace(/[^a-z-]/g, '') + '"]');
    if (opt) opt.selected = true;
  } catch (e) {}
  var fromSite = false;
  try { fromSite = !!document.referrer && new URL(document.referrer).origin === location.origin; } catch (e) {}
  function leave(e) { if (fromSite && history.length > 1) { if (e) e.preventDefault(); history.back(); } }
  close.addEventListener('click', leave);
  addEventListener('keydown', function (e) { if (e.key === 'Escape') { if (fromSite && history.length > 1) history.back(); else location.href = close.href; } });
  // clicking the backdrop closes it too, like a pop-up
  document.querySelector('.cx-wrap').addEventListener('click', function (e) { if (!frame.contains(e.target)) { if (fromSite && history.length > 1) history.back(); else location.href = close.href; } });
  frame.querySelector('input').focus({ preventScroll: true });
}
