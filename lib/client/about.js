// Envision about page: the values wheel. Draws the mark as a wheel with a ring button on each arm, turns the chosen arm
// to point at the panel (straight down on a phone, where the panel sits below), and steps round on its own every few
// seconds while on screen, until someone picks a ring or uses the arrows.
export function initValuesWheel() {
  const root = document.getElementById('values'), wheel = document.getElementById('vwWheel'), spin = document.getElementById('vwSpin'), panel = document.getElementById('vwPanel');
  if (!root || !wheel || !spin || !panel) return;
  const items = [...panel.querySelectorAll('.vw-item')], n = items.length;
  const colour = el => el.style.getPropertyValue('--c').trim();
  // the mark's geometry (as in the favicon): arm k is the top arm turned 45°·k about the centre (50,50)
  const C = 50, RX = 44.7, RY = 13.5, BOX = 140, OFF = 20;
  const R = Math.hypot(RX - C, RY - C), theta0 = Math.atan2(RX - C, C - RY) * 180 / Math.PI;
  const at = (deg, r) => { const a = deg * Math.PI / 180; return [C + r * Math.sin(a), C - r * Math.cos(a)]; };
  const pct = v => ((v + OFF) / BOX * 100).toFixed(3) + '%';
  const arm = (fill, stroke) => `<polygon points="50.3,45 53.6,30 57.6,31.2" fill="${fill}"/><polyline points="55.6,30.6 48,18.7" fill="none" stroke="${stroke}" stroke-width="3.6" stroke-linecap="round"/>`;
  spin.innerHTML = `<svg class="vw-mark" viewBox="${-OFF} ${-OFF} ${BOX} ${BOX}" aria-hidden="true"><defs>
      <radialGradient id="vwDisc"><stop offset="0" stop-color="#17202d"/><stop offset="1" stop-color="#0c1016"/></radialGradient>
      <linearGradient id="vwArm" gradientUnits="userSpaceOnUse" x1="50" y1="47" x2="50" y2="14"><stop offset="0" stop-color="#1561ad"/><stop offset=".5" stop-color="#5b9be6"/><stop offset="1" stop-color="#8fd3f4"/></linearGradient>
      <filter id="vwGlow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
      <circle cx="50" cy="50" r="48" fill="url(#vwDisc)" stroke="#3d5a80" stroke-width=".6"/>
      <circle cx="50" cy="50" r="62" fill="none" stroke="rgba(152,193,217,.14)" stroke-width=".3" stroke-dasharray="1 2"/>
      ${items.map((it, k) => `<g class="vw-arm" transform="rotate(${45 * k} 50 50)"><g class="base">${arm('url(#vwArm)', 'url(#vwArm)')}</g><g class="lit" filter="url(#vwGlow)">${arm(colour(it), colour(it))}</g></g>`).join('')}
      <circle cx="50" cy="50" r="2.4" fill="#e0fbfc" opacity=".8"/></svg>`
    + items.map((it, k) => {
        const [rx, ry] = at(theta0 + 45 * k, R), [lx, ly] = at(theta0 + 45 * k, R + 24);
        return `<button class="vw-ring" type="button" style="left:${pct(rx)};top:${pct(ry)};--rc:${colour(it)}" aria-controls="${it.id}" aria-label="${it.dataset.label}">`
             + `<span>${it.querySelector('.vw-ico').innerHTML}</span></button><div class="vw-label" style="left:${pct(lx)};top:${pct(ly)}" aria-hidden="true"><span>${it.dataset.label}</span></div>`;
      }).join('');
  const arms = [...spin.querySelectorAll('.vw-arm')], rings = [...spin.querySelectorAll('.vw-ring')], labels = [...spin.querySelectorAll('.vw-label')];
  const beam = wheel.querySelector('.vw-beam'), count = document.getElementById('vwCount'), foot = panel.querySelector('.vw-foot');
  const narrow = matchMedia('(max-width: 860px)'), still = matchMedia('(prefers-reduced-motion: reduce)');
  root.classList.add('js'); foot.hidden = false;
  let cur = -1, rot = 0, auto = !still.matches, timer = 0, seen = false;

  function show(k) {
    k = (k + n) % n;
    if (k === cur) return;
    const c = colour(items[k]);
    // turn the shortest way round until this ring points at the panel
    const target = (narrow.matches ? 180 : 90) - (theta0 + 45 * k);
    rot += ((target - rot) % 360 + 540) % 360 - 180;
    wheel.style.setProperty('--rot', rot.toFixed(2) + 'deg');
    wheel.style.setProperty('--c', c); panel.style.setProperty('--c', c);
    arms.forEach((a, i) => a.classList.toggle('on', i === k));
    rings.forEach((r, i) => { r.classList.toggle('on', i === k); r.setAttribute('aria-pressed', i === k); });
    labels.forEach((l, i) => l.classList.toggle('on', i === k));
    items.forEach((it, i) => it.classList.toggle('on', i === k));
    beam.style.animation = 'none'; void beam.offsetWidth; beam.style.animation = '';
    count.textContent = String(k + 1).padStart(2, '0') + ' / ' + String(n).padStart(2, '0');
    cur = k;
  }
  const stop = () => { auto = false; clearInterval(timer); };
  const tick = () => { clearInterval(timer); if (auto && seen) timer = setInterval(() => { if (!document.hidden) show(cur + 1); }, 5000); };
  rings.forEach((r, i) => r.addEventListener('click', () => { stop(); show(i); }));
  panel.querySelector('.vw-prev').addEventListener('click', () => { stop(); show(cur - 1); });
  panel.querySelector('.vw-next').addEventListener('click', () => { stop(); show(cur + 1); });
  wheel.addEventListener('keydown', e => {
    const d = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key]; if (!d) return;
    e.preventDefault(); stop(); show(cur + d); rings[cur].focus();
  });
  narrow.addEventListener('change', () => { const k = cur; cur = -1; show(k); });
  show(0);
  if ('IntersectionObserver' in window) new IntersectionObserver(([e]) => { seen = e.isIntersecting; tick(); }, { threshold: .35 }).observe(wheel);
}
