// The blog (components/blog/Blog.tsx): on /blog, the topic buttons show only that topic's posts; on a post, the panel
// beside the article marks the section being read.
export function initBlog() {
  var btns = [].slice.call(document.querySelectorAll('.bl-topic-btn')), cards = [].slice.call(document.querySelectorAll('.bl-grid .bl-card'));
  btns.forEach(function (b) {
    b.addEventListener('click', function () {
      var t = b.dataset.filter;
      btns.forEach(function (x) { var on = x === b; x.classList.toggle('on', on); x.setAttribute('aria-pressed', on ? 'true' : 'false'); });
      cards.forEach(function (c) {
        c.hidden = !!t && c.dataset.topic !== t;
        if (!c.hidden) { c.classList.remove('pre'); c.classList.add('in'); }   // a card shown by a filter appears at once
      });
    });
  });
  // the reading line: how far through the article the reader is
  var line = document.querySelector('.bl-progress'), body = document.querySelector('.bl-body');
  if (line && body) {
    var rTick = false;
    var rUpdate = function () {
      rTick = false;
      var r = body.getBoundingClientRect(), p = Math.max(0, Math.min(1, (innerHeight * 0.35 - r.top) / (r.height - innerHeight * 0.3)));
      line.style.setProperty('--rp', p.toFixed(4));
    };
    addEventListener('scroll', function () { if (!rTick) { rTick = true; requestAnimationFrame(rUpdate); } }, { passive: true });
    rUpdate();
  }
  var links = [].slice.call(document.querySelectorAll('.bl-toc a'));
  if (!links.length || !('IntersectionObserver' in window)) return;
  var heads = links.map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); }).filter(Boolean);
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (!e.isIntersecting) return;
      links.forEach(function (a) { a.classList.toggle('on', a.getAttribute('href') === '#' + e.target.id); });
    });
  }, { rootMargin: '-15% 0px -70% 0px' });
  heads.forEach(function (h) { io.observe(h); });
}
