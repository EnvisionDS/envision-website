// Envision service pages: theme switch, the torch, beams on cards, the lens, reveals, and a quiet return home.
import { slot } from './sequence';

export function initServicePage() {
  var root = document.documentElement;
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches, touch = matchMedia('(hover: none)').matches;

  // light / dark (shared with the home page through the same saved setting)
  var btn = document.getElementById('themeBtn');
  function label() { var l = root.dataset.theme === 'light', t = l ? 'Switch to dark mode' : 'Switch to light mode'; btn.setAttribute('aria-label', t); btn.title = t; }
  if (btn) {
    label();
    btn.addEventListener('click', function () {
      var light = root.dataset.theme !== 'light';
      var apply = function () { if (light) root.dataset.theme = 'light'; else delete root.dataset.theme; label(); try { localStorage.setItem('envision-theme', light ? 'light' : 'dark'); } catch (e) {} };
      if (!document.startViewTransition || reduce) { apply(); return; }
      var b = btn.getBoundingClientRect(), x = b.left + b.width / 2, y = b.top + b.height / 2, r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
      var vt = document.startViewTransition(apply);
      vt.ready.then(function () { root.animate({ clipPath: ['circle(0px at ' + x + 'px ' + y + 'px)', 'circle(' + r + 'px at ' + x + 'px ' + y + 'px)'] }, { duration: 700, easing: 'cubic-bezier(.4,0,.2,1)', pseudoElement: '::view-transition-new(root)' }); });
    });
  }

  // going back to the home page (by a link or the browser's back button) skips its opening animation
  try { sessionStorage.setItem('envision-skip-intro', '1'); } catch (e) {}

  // the torch, and a beam inside each card
  var torch = document.querySelector('.torch');
  if (!touch && !reduce && torch) {
    addEventListener('pointermove', function (e) { torch.style.setProperty('--mx', e.clientX + 'px'); torch.style.setProperty('--my', e.clientY + 'px'); torch.classList.add('on'); }, { passive: true });
    document.addEventListener('pointerleave', function () { torch.classList.remove('on'); });
  }
  document.querySelectorAll('.beam').forEach(function (el) {
    el.addEventListener('pointermove', function (e) { var r = el.getBoundingClientRect(); el.style.setProperty('--x', (e.clientX - r.left) + 'px'); el.style.setProperty('--y', (e.clientY - r.top) + 'px'); });
    el.addEventListener('pointerleave', function () { el.style.setProperty('--x', '-999px'); el.style.setProperty('--y', '-999px'); });
  });

  // the lens follows the torch; on touch screens its light drifts on its own
  var lens = document.querySelector('.lens');
  if (lens && !reduce) {
    if (!touch) addEventListener('pointermove', function (e) { var r = lens.getBoundingClientRect(); lens.style.setProperty('--lx', (e.clientX - r.left) + 'px'); lens.style.setProperty('--ly', (e.clientY - r.top) + 'px'); }, { passive: true });
    else (function drift(t) { var w = lens.offsetWidth; lens.style.setProperty('--lx', (w * (.5 + .3 * Math.sin(t / 1900))) + 'px'); lens.style.setProperty('--ly', (w * (.5 + .25 * Math.sin(t / 1300 + 1))) + 'px'); requestAnimationFrame(drift); })(0);
  }

  // reveal: only things below the first screen start hidden, so the page is complete as it loads
  if (!reduce && 'IntersectionObserver' in window) {
    // things that arrive together float up one after another
    var io = new IntersectionObserver(function (es) {
      es.filter(function (en) { return en.isIntersecting; })
        .sort(function (a, b) { return (a.boundingClientRect.top - b.boundingClientRect.top) || (a.boundingClientRect.left - b.boundingClientRect.left); })
        .forEach(function (en) {
          var el = en.target; io.unobserve(el);
          if (el.classList.contains('mo-small')) {       // a page title's line keeps its timing; below the hero, each waits its turn
            var h = el.previousElementSibling, withHead = h && h.classList.contains('mo-split') && !h.classList.contains('mo-small') && h.getBoundingClientRect().top > 0;
            el.style.setProperty('--mb', el.closest('.hero') ? (withHead ? '420ms' : '160ms') : slot(el, 420) + 'ms'); el.classList.add('mo-in');
          } else if (el.classList.contains('mo-split')) {
            if (!el.closest('.hero')) el.style.setProperty('--hb', slot(el, 460) + 'ms');
            el.classList.add('mo-in');
          } else { el.style.setProperty('--rd', slot(el) + 'ms'); el.classList.add('in'); el.classList.remove('pre'); }
        });
    }, { rootMargin: '0px 0px -12% 0px' });
    // headings: split into words that rise from behind a mask as they arrive
    var heads = [].slice.call(document.querySelectorAll('h1, .sec-head h2, #cta-h'));
    heads.forEach(function (h) {
      var i = 0;
      [].slice.call(h.childNodes).forEach(function (n) {
        if (n.nodeType !== 3) return;
        var frag = document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach(function (p) {
          if (!p) return;
          if (/^\s+$/.test(p)) { frag.appendChild(document.createTextNode(p)); return; }
          var m = document.createElement('span'), w = document.createElement('span');
          m.className = 'mo-m'; w.className = 'mo-w'; w.textContent = p; w.style.setProperty('--wi', i++); m.appendChild(w); frag.appendChild(m);
        });
        n.replaceWith(frag);
      });
      h.classList.add('mo-split');
    });
    heads.forEach(function (h) { io.observe(h); });
    // the smaller text: paragraphs rise word by word, each waiting its turn in the section (a page title's line waits for the title)
    var paras = [].slice.call(document.querySelectorAll('.lede, .prose p, .fit-t, .cta > p:not(.contact-line)'));
    paras.forEach(function (p) {
      var i = 0;
      (function walk(node) {
        [].slice.call(node.childNodes).forEach(function (n) {
          if (n.nodeType === 1 && /^(SPAN|EM|STRONG|B|I|A)$/.test(n.tagName)) { walk(n); return; }
          if (n.nodeType !== 3) return;
          var frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach(function (t, k) {
            if (!t) return;
            if (/^\s+$/.test(t)) { frag.appendChild(document.createTextNode(t)); return; }
            var w = document.createElement('span'); w.className = 'mo-w'; w.textContent = t; w.style.setProperty('--wi', i++);
            var prev = k === 0 && n.previousSibling && n.previousSibling.nodeType === 1 ? n.previousSibling : null;
            var host = prev ? (prev.classList.contains('mo-m') ? prev : [].slice.call(prev.querySelectorAll('.mo-m')).pop()) : null;
            if (host) { host.appendChild(w); return; }
            var m = document.createElement('span'); m.className = 'mo-m'; m.appendChild(w); frag.appendChild(m);
          });
          n.replaceWith(frag);
        });
      })(p);
      p.classList.add('mo-split', 'mo-small');
    });
    paras.forEach(function (p) { io.observe(p); });
    document.querySelectorAll('.rv').forEach(function (el) { if (el.getBoundingClientRect().top > innerHeight) { el.classList.add('pre'); io.observe(el); } });
  }
}
