// The Services page: the bar above the groups lights up the group you're reading, and on narrow screens slides it into
// view (components/services/ServicesIndex.tsx).
export function initServicesIndex() {
  var bar = document.getElementById('ixBar'); if (!bar || !('IntersectionObserver' in window)) return;
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
