// The About page's motion (components/about/AboutContent.tsx, styles/about-grand.css):
// - the title arrives letter by letter, and the manifesto lights word by word as it comes into view;
// - things below the first screen rise into view as they arrive (they play on their own, nothing follows the scroll);
// - the film: four chapters on a 20-second loop, with captions, a progress track, a timecode and a pause button;
// - three three.js scenes, each loaded as it nears the screen and paused while off it: the Envision mark assembling
//   out of light (the opening), the film's particles (listen, plan, build, improve), and Melbourne as a field of light
//   with signals going out (Where we are). On the light theme the scenes draw in ink and gold instead of light.
// With reduced motion everything is shown at rest: the mark assembled, the film on its first chapter (it plays if asked).

const clamp = (v, a = 0, b = 1) => (v < a ? a : v > b ? b : v);
const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const isLight = () => document.documentElement.dataset.theme === 'light';

export function initAboutGrand() {
  const main = document.querySelector('main.ag'); if (!main) return;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  split(main.querySelector('[data-split]'), 'c');
  split(main.querySelector('[data-words]'), 'w');
  requestAnimationFrame(() => main.classList.add('ag-ready'));
  reveals(main, reduce);
  const film = initFilm(main, reduce);
  initScenes(main, reduce, film);
}

// split a heading into words (and, for the title, letters), keeping the words readable to screen readers
function split(el, mode) {
  if (!el) return;
  el.setAttribute('aria-label', el.textContent.replace(/\s+/g, ' ').trim());
  let n = 0;
  (function walk(node) {
    [...node.childNodes].forEach((child) => {
      if (child.nodeType === 1) { walk(child); return; }
      if (child.nodeType !== 3) return;
      const frag = document.createDocumentFragment();
      child.textContent.split(/(\s+)/).forEach((part) => {
        if (!part) return;
        if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(' ')); return; }
        const w = document.createElement('span'); w.className = 'w'; w.setAttribute('aria-hidden', 'true');
        if (mode === 'c') [...part].forEach((ch) => { const c = document.createElement('span'); c.className = 'c'; c.textContent = ch; c.style.setProperty('--ci', n++); w.appendChild(c); });
        else { w.textContent = part; w.style.setProperty('--wi', n++); }
        frag.appendChild(w);
      });
      child.replaceWith(frag);
    });
  })(el);
}

// reveals: what starts below the first screen waits hidden, then rises into view in turn with whatever arrives with it
function reveals(main, reduce) {
  const els = [...main.querySelectorAll('.ag-rv, .ag-big')];
  if (reduce || !('IntersectionObserver' in window)) { els.forEach((el) => el.classList.add('in')); return; }
  els.forEach((el) => { if (el.getBoundingClientRect().top > innerHeight * 0.92) el.classList.add('pre'); });
  const io = new IntersectionObserver((es) => {
    es.filter((e) => e.isIntersecting)
      .sort((a, b) => (a.boundingClientRect.top - b.boundingClientRect.top) || (a.boundingClientRect.left - b.boundingClientRect.left))
      .forEach((e, i) => {
        const el = e.target; io.unobserve(el);
        el.style.setProperty('--d', (el.classList.contains('pre') ? i * 140 : 0) + 'ms');
        el.classList.remove('pre'); el.classList.add('in');
      });
  }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });
  els.forEach((el) => io.observe(el));
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

// ---------------------------------------------------------------- the three.js scenes
function initScenes(main, reduce, film) {
  const stages = [...main.querySelectorAll('.ag-stage[data-scene]')];
  if (!stages.length || !window.WebGLRenderingContext || !('IntersectionObserver' in window)) return;
  let three = null;
  const io = new IntersectionObserver((es) => es.forEach((e) => {
    if (!e.isIntersecting) return;
    io.unobserve(e.target);
    (three || (three = import('three'))).then((T) => mount(T, e.target, reduce, film)).catch(() => {});
  }), { rootMargin: '700px 0px' });
  stages.forEach((s) => io.observe(s));
}

const BUILD = { mark: buildMark, film: buildFilm, map: buildMap };

function mount(THREE, el, reduce, film) {
  let renderer;
  try { renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' }); } catch (e) { return; }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
  el.appendChild(renderer.domElement);
  const scene = new THREE.Scene(), camera = new THREE.PerspectiveCamera(40, 1, 0.1, 400);
  const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
  const api = BUILD[el.dataset.scene](THREE, scene, camera, { film, reduce, pointer, el });

  function size() {
    const w = el.clientWidth, h = el.clientHeight; if (!w || !h) return;
    renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix();
    api.resize && api.resize(w, h, renderer.getPixelRatio());
  }
  function theme() { api.theme(isLight()); }
  size(); theme();
  new ResizeObserver(() => { size(); if (!running) frame(performance.now()); }).observe(el);
  new MutationObserver(() => { theme(); if (!running) frame(performance.now()); }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  if (!reduce && matchMedia('(hover: hover)').matches) addEventListener('pointermove', (e) => { pointer.tx = e.clientX / innerWidth * 2 - 1; pointer.ty = e.clientY / innerHeight * 2 - 1; }, { passive: true });

  const t0 = performance.now();
  function frame(now) {
    pointer.x += (pointer.tx - pointer.x) * 0.04; pointer.y += (pointer.ty - pointer.y) * 0.04;
    api.update(reduce ? 60 : (now - t0) / 1000);
    renderer.render(scene, camera);
  }
  frame(t0); el.classList.add('ready');
  let running = false, visible = false;
  function loop(now) { if (!visible) { running = false; return; } frame(now); requestAnimationFrame(loop); }
  if (!reduce || el.dataset.scene === 'film') new IntersectionObserver(([e]) => {
    visible = e.isIntersecting;
    if (visible && !running) { running = true; requestAnimationFrame(loop); }
  }).observe(el);
}

// points that glow from a base colour to a bright one (aGlow 0…1), sized for the screen, soft-edged
function glowPoints(THREE, extraUniforms, vertexBody) {
  return new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    uniforms: Object.assign({ uPx: { value: 1 }, uSize: { value: 1 }, uA: { value: new THREE.Color() }, uB: { value: new THREE.Color() }, uAlpha: { value: 1 } }, extraUniforms),
    vertexShader: `
      attribute float aSize; attribute float aGlow;
      uniform float uPx; uniform float uSize; varying float vGlow;
      ${Object.keys(extraUniforms).map((k) => `uniform ${typeof extraUniforms[k].value === 'number' ? 'float' : 'vec3'} ${k};`).join('\n')}
      ${vertexBody.decl || ''}
      void main() {
        vec3 p = position; float glow = aGlow;
        ${vertexBody.main || ''}
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = uSize * aSize * uPx / max(0.1, -mv.z);
        vGlow = glow;
      }`,
    fragmentShader: `
      uniform vec3 uA; uniform vec3 uB; uniform float uAlpha; varying float vGlow;
      void main() {
        float d = length(gl_PointCoord - 0.5); if (d > 0.5) discard;
        float a = smoothstep(0.5, 0.0, d);
        gl_FragColor = vec4(mix(uA, uB, clamp(vGlow, 0.0, 1.0)), a * uAlpha * (0.3 + 0.7 * clamp(vGlow, 0.0, 1.0)));
      }`,
  });
}
function setTheme(THREE, mat, light, dark, lightCols) {
  const c = light ? lightCols : dark;
  mat.uniforms.uA.value.set(c[0]); mat.uniforms.uB.value.set(c[1]);
  mat.blending = light ? THREE.NormalBlending : THREE.AdditiveBlending; mat.needsUpdate = true;
}

// ---- the opening: the Envision mark (its eight arms, as in the favicon) assembling out of light, among stars
function buildMark(THREE, scene, camera, { reduce, pointer }) {
  camera.position.set(0, 0, 10);
  const mobile = innerWidth < 760, N = mobile ? 7000 : 12000, S = 2.7 / 50;
  const pos = new Float32Array(N * 3), start = new Float32Array(N * 3), glow = new Float32Array(N), size = new Float32Array(N), delay = new Float32Array(N);
  const TRI = [[50.3, 45], [53.6, 30], [57.6, 31.2]], P = [55.6, 30.6], Q = [48, 18.7], LW = 3.6;
  const rot = (x, y, k) => { const a = (k * Math.PI) / 4, dx = x - 50, dy = y - 50; return [dx * Math.cos(a) - dy * Math.sin(a), dx * Math.sin(a) + dy * Math.cos(a)]; };
  for (let i = 0; i < N; i++) {
    const k = i % 8, r = Math.random();
    let x, y;
    if (r < 0.5) { // the blade
      let a = Math.random(), b = Math.random(); if (a + b > 1) { a = 1 - a; b = 1 - b; }
      x = TRI[0][0] + a * (TRI[1][0] - TRI[0][0]) + b * (TRI[2][0] - TRI[0][0]);
      y = TRI[0][1] + a * (TRI[1][1] - TRI[0][1]) + b * (TRI[2][1] - TRI[0][1]);
    } else if (r < 0.86) { // the stroke, with round ends
      const u = Math.random(), ang = Math.random() * Math.PI * 2, rr = Math.sqrt(Math.random()) * LW / 2;
      x = P[0] + (Q[0] - P[0]) * u + Math.cos(ang) * rr; y = P[1] + (Q[1] - P[1]) * u + Math.sin(ang) * rr;
    } else { // the disc's edge and an outer ring of dust
      const outer = r > 0.95, ang = Math.random() * Math.PI * 2, rr = outer ? 62 + (Math.random() - 0.5) * 2 : 48 + (Math.random() - 0.5) * 0.8;
      x = 50 + Math.cos(ang) * rr; y = 50 + Math.sin(ang) * rr;
    }
    const [dx, dy] = r < 0.86 ? rot(x, y, k) : [x - 50, y - 50];
    pos[i * 3] = dx * S; pos[i * 3 + 1] = -dy * S; pos[i * 3 + 2] = (Math.random() - 0.5) * (r < 0.86 ? 0.28 : 0.1);
    const d = Math.hypot(dx, dy) / 50;
    glow[i] = r < 0.86 ? clamp(0.25 + d * 0.9) : 0.18;
    size[i] = r < 0.86 ? 0.6 + Math.random() * 1.1 : 0.4 + Math.random() * 0.5;
    const th = Math.random() * Math.PI * 2, ph = Math.acos(2 * Math.random() - 1), R = 7 + Math.random() * 9;
    start[i * 3] = R * Math.sin(ph) * Math.cos(th); start[i * 3 + 1] = R * Math.sin(ph) * Math.sin(th); start[i * 3 + 2] = R * Math.cos(ph) - 4;
    delay[i] = Math.random() * 0.9 + d * 0.5;
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('aStart', new THREE.BufferAttribute(start, 3));
  g.setAttribute('aGlow', new THREE.BufferAttribute(glow, 1)); g.setAttribute('aSize', new THREE.BufferAttribute(size, 1)); g.setAttribute('aDelay', new THREE.BufferAttribute(delay, 1));
  const mat = glowPoints(THREE, { uT: { value: 0 } }, {
    decl: 'attribute vec3 aStart; attribute float aDelay;',
    main: `float m = clamp((uT - aDelay) / 2.2, 0.0, 1.0); m = m < 0.5 ? 4.0 * m * m * m : 1.0 - pow(-2.0 * m + 2.0, 3.0) / 2.0;
           p = mix(aStart, position, m) + vec3(sin(uT * 0.7 + aDelay * 9.0), cos(uT * 0.6 + aDelay * 7.0), 0.0) * 0.012;
           glow = aGlow * (0.75 + 0.25 * sin(uT * 1.3 + aDelay * 20.0)) + (1.0 - m) * 0.4;`,
  });
  const mark = new THREE.Points(g, mat), rig = new THREE.Group(); rig.add(mark); scene.add(rig);

  // stars, far off, twinkling
  const NS = mobile ? 900 : 1800, sp = new Float32Array(NS * 3), sg = new Float32Array(NS), ss = new Float32Array(NS);
  for (let i = 0; i < NS; i++) {
    const th = Math.random() * Math.PI * 2, ph = Math.acos(2 * Math.random() - 1), R = 30 + Math.random() * 60;
    sp[i * 3] = R * Math.sin(ph) * Math.cos(th); sp[i * 3 + 1] = R * Math.sin(ph) * Math.sin(th); sp[i * 3 + 2] = -Math.abs(R * Math.cos(ph));
    sg[i] = Math.random(); ss[i] = 0.5 + Math.random() * 1.6;
  }
  const sgeo = new THREE.BufferGeometry();
  sgeo.setAttribute('position', new THREE.BufferAttribute(sp, 3)); sgeo.setAttribute('aGlow', new THREE.BufferAttribute(sg, 1)); sgeo.setAttribute('aSize', new THREE.BufferAttribute(ss, 1));
  const smat = glowPoints(THREE, { uT: { value: 0 } }, { main: 'glow = 0.15 + 0.5 * (0.5 + 0.5 * sin(uT * (0.6 + aGlow) + aGlow * 40.0)) * aGlow;' });
  const stars = new THREE.Points(sgeo, smat); scene.add(stars);

  return {
    resize(w, h, px) {
      const wide = w / h > 1.1;
      // beside the title on a wide screen; on a tall one, in the space above it
      const viewH = 2 * camera.position.z * Math.tan((camera.fov * Math.PI) / 360);
      rig.position.set(wide ? 2.6 : 0, wide ? 0.2 : viewH * 0.31, 0); rig.scale.setScalar(wide ? 1 : 0.6);
      [mat, smat].forEach((m) => { m.uniforms.uPx.value = px * Math.min(1, h / 900) * 1.4; });
      mat.uniforms.uSize.value = 26; smat.uniforms.uSize.value = 60;
    },
    theme(light) {
      setTheme(THREE, mat, light, ['#7a6640', '#fff4dc'], ['#b9a27a', '#2a2014']);
      setTheme(THREE, smat, light, ['#3a3530', '#e9e2d0'], ['#c9bda6', '#7b6a4c']);
      mat.uniforms.uAlpha.value = light ? 0.85 : 0.9; smat.uniforms.uAlpha.value = light ? 0.5 : 0.8;
    },
    update(t) {
      mat.uniforms.uT.value = reduce ? 60 : t; smat.uniforms.uT.value = t;
      rig.rotation.z = -t * 0.035;
      rig.rotation.y = Math.sin(t * 0.22) * 0.32 + pointer.x * 0.25;
      rig.rotation.x = Math.sin(t * 0.17) * 0.12 + pointer.y * 0.15;
      stars.rotation.y = t * 0.004 + pointer.x * 0.04; stars.rotation.x = pointer.y * 0.03;
    },
  };
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
    theme(light) { setTheme(THREE, mat, light, ['#6b5a3a', '#fff1d2'], ['#6b5a3a', '#fff1d2']); }, // the film is always shown on black
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

// ---- Melbourne: a field of light thinning out to the suburbs, the bay left dark, the city's towers in the middle,
// rings of light pulsing out from the centre and signals arcing off to the places around it
function buildMap(THREE, scene, camera, { pointer, reduce }) {
  const mobile = innerWidth < 760, COLS = mobile ? 110 : 170, ROWS = mobile ? 80 : 110, SP = 0.13;
  const P = [], G = [], Z = [], D = [];
  const bay = (x, z) => { const bx = (x + 0.3) / 2.6, bz = (z - 2.6) / 2.2; return bx * bx + bz * bz < 1; }; // Port Phillip, south of the city
  for (let r = 0; r < ROWS; r++) for (let c = 0; c < COLS; c++) {
    const x = (c - COLS / 2) * SP + (Math.random() - 0.5) * 0.05, z = (r - ROWS / 2) * SP + (Math.random() - 0.5) * 0.05, d = Math.hypot(x, z);
    if (bay(x, z) || Math.random() > 0.42 + 0.58 * Math.exp(-d / 5.5)) continue;
    P.push(x, Math.sin(x * 0.9) * Math.cos(z * 0.7) * 0.06, z); G.push(0.2 + 0.35 * Math.exp(-d / 2.5)); Z.push(0.5 + Math.random() * 0.7); D.push(d);
  }
  for (let i = 0; i < (mobile ? 900 : 1600); i++) { // the city's towers
    const a = Math.random() * Math.PI * 2, rr = Math.pow(Math.random(), 1.6) * 0.9, x = Math.cos(a) * rr, z = Math.sin(a) * rr, h = (1 - rr / 0.9) * (0.4 + Math.random() * 1.4);
    P.push(x, Math.random() * h, z); G.push(0.5 + Math.random() * 0.5); Z.push(0.5 + Math.random() * 0.6); D.push(Math.hypot(x, z));
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(P, 3)); g.setAttribute('aGlow', new THREE.Float32BufferAttribute(G, 1));
  g.setAttribute('aSize', new THREE.Float32BufferAttribute(Z, 1)); g.setAttribute('aDist', new THREE.Float32BufferAttribute(D, 1));
  const mat = glowPoints(THREE, { uT: { value: 0 } }, {
    decl: 'attribute float aDist;',
    main: `float ph = aDist - mod(uT * 1.6, 14.0); float ring = exp(-ph * ph * 2.5) * exp(-aDist * 0.12);
           float ph2 = aDist - mod(uT * 1.6 + 7.0, 14.0); ring += exp(-ph2 * ph2 * 2.5) * exp(-aDist * 0.12);
           glow = aGlow + ring * 0.9; p.y += ring * 0.08;`,
  });
  const field = new THREE.Points(g, mat), rig = new THREE.Group(); rig.add(field); scene.add(rig);

  // signals: arcs from the city to places around it, with a spark running along each
  const arcs = [], lineMat = new THREE.LineBasicMaterial({ transparent: true, opacity: 0.35 });
  const sparkG = new THREE.BufferGeometry(), NA = mobile ? 6 : 9, sparkP = new Float32Array(NA * 3);
  for (let i = 0; i < NA; i++) {
    let x, z; do { const a = -Math.PI * (0.08 + Math.random() * 0.84), rr = 2.6 + Math.random() * 5; x = Math.cos(a) * rr * 1.2; z = Math.sin(a) * rr * 0.8; } while (bay(x, z)); // off to the north, east and west, away from the viewer
    const curve = new THREE.QuadraticBezierCurve3(new THREE.Vector3(0, 0.6, 0), new THREE.Vector3(x / 2, 1.6 + Math.hypot(x, z) * 0.25, z / 2), new THREE.Vector3(x, 0.05, z));
    const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(curve.getPoints(48)), lineMat); rig.add(line);
    arcs.push({ curve, off: i / NA, speed: 0.16 + Math.random() * 0.08 });
  }
  sparkG.setAttribute('position', new THREE.BufferAttribute(sparkP, 3));
  sparkG.setAttribute('aGlow', new THREE.Float32BufferAttribute(new Array(NA).fill(1), 1)); sparkG.setAttribute('aSize', new THREE.Float32BufferAttribute(new Array(NA).fill(2.6), 1));
  const sparkM = glowPoints(THREE, {}, {}), sparks = new THREE.Points(sparkG, sparkM); rig.add(sparks);
  const v = new THREE.Vector3(), look = new THREE.Vector3();

  return {
    resize(w, h, px) {
      const wide = w / h > 1.1;
      [mat, sparkM].forEach((m) => { m.uniforms.uPx.value = px * Math.min(1.2, h / 800); });
      mat.uniforms.uSize.value = 42; sparkM.uniforms.uSize.value = 40;
      look.set(wide ? -2.6 : 0, wide ? -0.3 : -1.6, wide ? 0.4 : 0);
    },
    theme(light) {
      setTheme(THREE, mat, light, ['#5c4a2c', '#fff0cf'], ['#b8a684', '#3a2a12']);
      setTheme(THREE, sparkM, light, ['#f1dcae', '#ffffff'], ['#8c6a2c', '#5a400f']);
      lineMat.color.set(light ? '#8c6a2c' : '#d2b27a'); lineMat.opacity = light ? 0.45 : 0.35;
      mat.uniforms.uAlpha.value = light ? 0.8 : 0.95;
    },
    update(t) {
      mat.uniforms.uT.value = t;
      arcs.forEach((a, i) => { a.curve.getPoint(reduce ? 0.7 : (a.off + t * a.speed) % 1, v); sparkP[i * 3] = v.x; sparkP[i * 3 + 1] = v.y; sparkP[i * 3 + 2] = v.z; });
      sparkG.attributes.position.needsUpdate = true;
      const ang = Math.sin(t * 0.06) * 0.3 + pointer.x * 0.12 + 0.3;
      camera.position.set(Math.sin(ang) * 9, 4 - pointer.y * 0.4, Math.cos(ang) * 9);
      camera.lookAt(look);
    },
  };
}
