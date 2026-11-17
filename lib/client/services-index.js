// The Services page (components/services/ServicesIndex.tsx): the four cards in the opening merge into the bar above the
// groups as you scroll, and the bar lights up the group you're reading, on narrow screens sliding it into view.
export function initServicesIndex() {
  var bar = document.getElementById('ixBar'); if (!bar) return;
  merge(bar);
  if (!('IntersectionObserver' in window)) return;
  var row = bar.firstElementChild, links = [].slice.call(bar.querySelectorAll('a'));
  function mark(id) {
    links.forEach(function (a) {
      var on = a.getAttribute('href') === '#' + id;
      a.classList.toggle('on', on);
      if (on) { a.setAttribute('aria-current', 'true'); if (row.scrollWidth > row.clientWidth) row.scrollTo({ left: a.offsetLeft - 16, behavior: 'smooth' }); }
      else a.removeAttribute('aria-current');
    });
  }
  // a group counts as the one you're reading once it crosses the upper part of the screen
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (en) { if (en.isIntersecting) mark(en.target.id); });
  }, { rootMargin: '-30% 0px -60% 0px' });
  links.forEach(function (a) { var g = document.querySelector(a.getAttribute('href')); if (g) io.observe(g); });
}

// The cards travel into the bar. Once you've scrolled past them (the bottom of the cards rises above the middle of the
// screen) the merge plays out on its own, not tied to the scroll: a stand-in for each card (fixed to the screen) moves
// from the card to its link in the bar, shrinking as it goes, the card's face fading out and the link's fading in; then
// the bar's own links take over. Scroll back up to the cards and it plays in reverse. While it plays the stand-ins follow
// wherever the cards and the bar are on screen, and the cards hold under the header rather than scrolling behind it.
// With reduced motion there's no journey: the bar simply swaps in.
function merge(bar) {
  var nav = document.querySelector('.ix-jump'); if (!nav) return;
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var pairs = [].slice.call(nav.querySelectorAll('.ix-jump-a')).map(function (card) {
    var link = bar.querySelector('a[href="' + card.getAttribute('href') + '"]'); if (!link) return null;
    var g = document.createElement('div'); g.className = 'ix-ghost'; g.setAttribute('aria-hidden', 'true'); g.style.setProperty('--c', card.style.getPropertyValue('--c'));
    var face = document.createElement('div'); face.className = 'ix-jump-a ixg-card'; face.innerHTML = card.innerHTML;
    var tag = document.createElement('div'); tag.className = 'ixg-link'; tag.innerHTML = link.innerHTML;
    g.appendChild(face); g.appendChild(tag); if (!reduce) document.body.appendChild(g);
    return { card: card, link: link, g: g, face: face, tag: tag };
  }).filter(Boolean);
  if (!pairs.length) return;
  document.documentElement.classList.add('ix-morph');

  var DUR = 1100;
  var ease = function (t) { return t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; };
  var clamp = function (t) { return t < 0 ? 0 : t > 1 ? 1 : t; };
  var lerp = function (a, b, t) { return a + (b - a) * t; };
  var t = 0, want = 0, last = 0, running = false;

  function paint() {
    var stick = parseFloat(getComputedStyle(bar).top) || 0;
    bar.classList.toggle('merged', t >= 1);
    bar.style.setProperty('--bp', clamp((t - .5) / .3).toFixed(3));
    nav.classList.toggle('gone', t > 0);
    var live = t > 0 && t < 1, e = ease(t);
    // read every position first, then move the stand-ins
    var pin = live ? Math.max(0, stick + 14 - nav.getBoundingClientRect().top) : 0;
    var rects = pairs.map(function (x) { return live ? [x.card.getBoundingClientRect(), x.link.getBoundingClientRect(), x.card.offsetWidth, x.card.offsetHeight] : null; });
    pairs.forEach(function (x, i) {
      x.g.classList.toggle('on', live); if (!live) return;
      var a = rects[i][0], b = rects[i][1], cw = rects[i][2], ch = rects[i][3];
      var w = lerp(a.width, b.width, e), h = lerp(a.height, b.height, e), st = x.g.style;
      st.left = lerp(a.left, b.left, e) + 'px'; st.top = lerp(a.top + pin, b.top, e) + 'px'; st.width = w + 'px'; st.height = h + 'px';
      st.setProperty('--fo', (1 - clamp((t - .4) / .55)).toFixed(3));
      x.face.style.width = cw + 'px'; x.face.style.height = ch + 'px';
      x.face.style.transform = 'scale(' + Math.min(w / cw, h / ch).toFixed(4) + ')';
      x.face.style.opacity = (1 - clamp((t - .15) / .4)).toFixed(3);
      x.tag.style.opacity = clamp((t - .45) / .35).toFixed(3);
    });
  }
  function tick(now) {
    var dt = Math.min(64, now - last); last = now;
    t = want > t ? Math.min(want, t + dt / DUR) : Math.max(want, t - dt / DUR);
    paint();
    if (t !== want) requestAnimationFrame(tick); else running = false;
  }
  // past the cards or back at them (a gap between the two lines keeps it from flickering at the edge)
  function check(first) {
    var r = nav.getBoundingClientRect(), H = innerHeight;
    if (r.bottom < H * .5) want = 1; else if (r.bottom > H * .62) want = 0;
    if (first || reduce) { t = want; paint(); return; }
    if (t !== want && !running) { running = true; last = performance.now(); requestAnimationFrame(tick); }
  }
  var queued = false;
  addEventListener('scroll', function () { if (!queued) { queued = true; requestAnimationFrame(function () { queued = false; check(); }); } }, { passive: true });
  addEventListener('resize', function () { check(); paint(); });
  check(true);
}
