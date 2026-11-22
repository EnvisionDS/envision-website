// The About page's motion (components/about/AboutContent.tsx, styles/about-grand.css):
// - its text arrives the way it does on every page (lib/client/service.js): the title and paragraphs word by word,
//   headings whole, labels settling, cards as one;
// - the film: four chapters on a 20-second loop, with captions, a progress track, a timecode and a pause button;
// - three three.js scenes (the engine, the mark and Melbourne are shared with the rest of the site: grand-scenes.js), each loaded as it nears the screen and paused while off it: the Envision mark assembling
//   out of light (the opening), the film's particles (listen, plan, build, improve), and Melbourne as a field of light
//   with signals going out (Where we are). On the light theme the scenes draw in ink and gold instead of light.
// With reduced motion everything is shown at rest: the mark assembled, the film on its first chapter (it plays if asked).

import { BUILDERS, initGrandScenes, glowPoints, setTheme, clamp, ease } from './grand-scenes';
import { buildGlobe } from './globe';

export function initAboutGrand() {
  const main = document.querySelector('main.ag'); if (!main) return;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const film = initFilm(main, reduce);
  initGrandScenes(main, Object.assign({}, BUILDERS, { film: buildFilm, globe: buildGlobe }), { film });
}

// the film: a clock that runs while the film is on screen and playing, and the captions, track and timecode it drives
function initFilm(main, reduce) {
  const box = main.querySelector('[data-film]'); if (!box) return null;
  const caps = [...box.querySelectorAll('.ag-cap')], lis = [...box.querySelectorAll('.ag-track li')];
  const tc = box.querySelector('.ag-tc'), btn = box.querySelector('.ag-play');
  const CH = 5, N = caps.length, TOTAL = CH * N;
  const film = { t: 0.001, CH, N, playing: !reduce, visible: false };
  let cur = -1, last = 0, running = false;
  function paint() {
    const k = Math.floor(film.t / CH) % N;
    if (k !== cur) { caps.forEach((c, i) => c.classList.toggle('on', i === k)); lis.forEach((l, i) => l.classList.toggle('on', i === k)); cur = k; }
    lis.forEach((l, i) => l.firstElementChild.style.setProperty('--p', clamp((film.t - i * CH) / CH).toFixed(3)));
    tc.textContent = '00:' + String(Math.floor(film.t)).padStart(2, '0') + ' / 00:' + TOTAL;
  }
  function loop(now) {
    if (!(film.playing && film.visible)) { running = false; return; }
    film.t = (film.t + Math.min(0.1, (now - last) / 1000)) % TOTAL; last = now;
    paint(); requestAnimationFrame(loop);
  }
  function go() { if (!running && film.playing && film.visible) { running = true; last = performance.now(); requestAnimationFrame(loop); } }
  btn.addEventListener('click', () => {
    film.playing = !film.playing;
    btn.setAttribute('aria-pressed', String(!film.playing));
    btn.setAttribute('aria-label', film.playing ? 'Pause the film' : 'Play the film');
    go();
  });
  if (reduce) { btn.setAttribute('aria-pressed', 'true'); btn.setAttribute('aria-label', 'Play the film'); }
  if ('IntersectionObserver' in window) new IntersectionObserver(([e]) => { film.visible = e.isIntersecting; go(); }, { threshold: 0.2 }).observe(box);
  else { film.visible = true; go(); }
  paint();
  return film;
}

// ---- the film: particles that listen (ripples), plan (a map of lines and a route), build (towers rising) and improve
// (a line climbing, with light running up it). The film's clock sets the chapter; each blends into the next.
function buildFilm(THREE, scene, camera, { film }) {
  camera.position.set(0, 0.2, 9);
  const mobile = innerWidth < 760, N = mobile ? 3600 : 6000;
  const pos = new Float32Array(N * 3), glow = new Float32Array(N), size = new Float32Array(N);
  const R1 = new Float32Array(N), R2 = new Float32Array(N), R3 = new Float32Array(N), R4 = new Float32Array(N);
  for (let i = 0; i < N; i++) { R1[i] = Math.random(); R2[i] = Math.random(); R3[i] = Math.random(); R4[i] = Math.random(); size[i] = 0.5 + Math.random() * 1.1; }
  const g = new THREE.BufferGeometry();
  const pa = new THREE.BufferAttribute(pos, 3), ga = new THREE.BufferAttribute(glow, 1);
  pa.setUsage(THREE.DynamicDrawUsage); ga.setUsage(THREE.DynamicDrawUsage);
  g.setAttribute('position', pa); g.setAttribute('aGlow', ga); g.setAttribute('aSize', new THREE.BufferAttribute(size, 1));
  const mat = glowPoints(THREE, {}, {});
  const pts = new THREE.Points(g, mat), rig = new THREE.Group(); rig.add(pts); scene.add(rig);
  const hash = (n) => { const s = Math.sin(n * 127.1) * 43758.5453; return s - Math.floor(s); };
  const ROUTE = [[-4.6, -1.6], [-2.4, -1.6], [-2.4, 0.4], [0.6, 0.4], [0.6, -0.9], [3.2, -0.9], [3.2, 1.6], [4.6, 1.6]];
  const out = [0, 0, 0, 0];

  // each chapter: where point i is at time tl into it (x, y, z) and how brightly it glows
  const CH = [
    (i, tl) => { // listen: ripples spreading out from the middle
      const ring = Math.floor(R1[i] * 18), ph = (ring / 18 + tl * 0.085) % 1, R = 0.15 + ph * 5.2, a = R2[i] * Math.PI * 2 + tl * 0.06 * (ring % 2 ? 1 : -1);
      out[0] = Math.cos(a) * R; out[1] = Math.sin(a) * R * 0.34 - 0.2; out[2] = Math.sin(a) * R * 0.55; out[3] = Math.pow(1 - ph, 1.6) * 0.95 + 0.05;
    },
    (i, tl) => { // plan: a grid of streets, and a route of light running through it
      if (R4[i] < 0.14) {
        const f = (R3[i] + tl * 0.12) % 1, seg = f * (ROUTE.length - 1), k = Math.floor(seg), u = seg - k, A = ROUTE[k], B = ROUTE[k + 1];
        out[0] = A[0] + (B[0] - A[0]) * u; out[1] = (A[1] + (B[1] - A[1]) * u) * 0.55; out[2] = -(A[1] + (B[1] - A[1]) * u) * 0.6; out[3] = 1;
        return;
      }
      let x, y;
      if (R1[i] < 0.5) { y = -2 + Math.floor(R2[i] * 9) * 0.5; x = -5 + R3[i] * 10; } else { x = -4.8 + Math.floor(R2[i] * 17) * 0.6; y = -2 + R3[i] * 4; }
      out[0] = x; out[1] = y * 0.55; out[2] = -y * 0.6; out[3] = 0.22 + 0.12 * Math.sin(tl * 2 + x * 1.3);
    },
    (i, tl) => { // build: towers rising from a plinth
      const idx = Math.floor(R1[i] * 24), gx = idx % 8, gz = Math.floor(idx / 8), H = 0.5 + hash(idx + 3) * 3, grow = ease(clamp((tl - hash(idx) * 0.8) / 2.2)), h = H * grow;
      const e = R3[i] * 4, side = Math.floor(e), s = e - side, w = 0.42;
      const ox = side === 0 ? -w + s * 2 * w : side === 1 ? w : side === 2 ? w - s * 2 * w : -w, oz = side === 0 ? -w : side === 1 ? -w + s * 2 * w : side === 2 ? w : w - s * 2 * w;
      out[0] = -4.2 + gx * 1.2 + ox; out[1] = -2 + R2[i] * h; out[2] = -1.2 + gz * 1.1 + oz; out[3] = 0.35 + 0.65 * Math.pow(R2[i], 2) * grow;
    },
    (i, tl) => { // improve: a line climbing, light running up it, the spread around it drawing in
      const u = R1[i], spread = (1 - u) * 0.5 * (1 - ease(clamp(tl / 3))) + 0.05;
      out[0] = -5 + u * 10; out[1] = -2.1 + 4.1 * Math.pow(u, 2.1) + (R2[i] - 0.5) * spread; out[2] = (R3[i] - 0.5) * spread * 1.6;
      const run = (tl * 0.32) % 1; out[3] = 0.2 + Math.exp(-Math.pow((u - run) * 12, 2)) * 0.9 + u * 0.15;
    },
  ];
  return {
    resize(w, h, px) { mat.uniforms.uPx.value = px * Math.min(1.2, h / 520); mat.uniforms.uSize.value = 22; rig.scale.setScalar(clamp((w / h) / 2.33, 0.42, 1)); rig.position.set(w / h > 1.6 ? 1.3 : 0, w / h < 1 ? 0.9 : 0, 0); },
    theme(light) { setTheme(THREE, mat, light, ['#16457d', '#e3f4ff'], ['#16457d', '#e3f4ff']); }, // the film is always shown on black
    update() {
      const T = film ? film.t : 0, L = film ? film.CH : 5, k = Math.floor(T / L) % 4, tl = T - Math.floor(T / L) * L, prev = (k + 3) % 4;
      const b = ease(clamp(tl / 1.4)), cur = CH[k], old = CH[prev];
      for (let i = 0; i < N; i++) {
        cur(i, tl); const x = out[0], y = out[1], z = out[2], gl = out[3];
        if (b < 1) { old(i, tl + L); pos[i * 3] = out[0] + (x - out[0]) * b; pos[i * 3 + 1] = out[1] + (y - out[1]) * b; pos[i * 3 + 2] = out[2] + (z - out[2]) * b; glow[i] = out[3] + (gl - out[3]) * b; }
        else { pos[i * 3] = x; pos[i * 3 + 1] = y; pos[i * 3 + 2] = z; glow[i] = gl; }
      }
      pa.needsUpdate = true; ga.needsUpdate = true;
      rig.rotation.y = Math.sin(T * 0.21) * 0.2; rig.rotation.x = 0.12 + Math.sin(T * 0.17) * 0.04;
    },
  };
}
