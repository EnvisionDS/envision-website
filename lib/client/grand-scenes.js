// The site's three.js scenes, shared by every page (styles/grand-site.css has their stages and veils).
// A stage is any element with data-scene="<name>"; each is loaded as it nears the screen, drawn only while it's on
// screen, follows the theme (on the light theme the scenes draw in navy ink and gold instead of light) and leans a little
// towards the cursor. With reduced motion each is drawn once, at rest.
//
//   mark      the Envision mark (its eight arms, as in the favicon) assembling out of light, among stars
//   map       Melbourne as a field of light, rings pulsing out from the city, signals arcing off
//   sea       a sea of light running to the horizon; the cursor sends ripples across it (the homepage's opening)
//   rings     an armillary of four rings, one per group of services, turning about a core (Services)
//   ribbon    a ribbon of light twisting across the opening, in the service's colour (each service page)
//   converge  light spiralling in from every side to the middle, rings going out (Contact, behind the form)
//   dust      dust drifting slowly through the dark (the legal pages, the calls to book)
//   reel      a case study's figures forming out of light one after another (Our work)
//   areas     the Services page's four areas: four rings, each turning to face you in turn, then lined up, with the scroll
//   team      the homepage's Who we are: clusters of light into paths into the Envision mark, with the scroll
//   bars      a case study's results, the month before against this month, as bars rising in 3D (Our work)
//
// The About page adds its film (lib/client/about-grand.js) to the same engine.

export const clamp = (v, a = 0, b = 1) => (v < a ? a : v > b ? b : v);
export const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const isLight = () => document.documentElement.dataset.theme === 'light';

// Every scene also moves with the scroll (ctx.scroll, below) as well as on its own, so the pages never sit still.
//
// start every stage on the page (or under root) with the builders given (BUILDERS, plus any of the page's own)
export function initGrandScenes(root = document, builders = BUILDERS, ctx = {}) {
  const stages = [...root.querySelectorAll('[data-scene]')].filter((s) => builders[s.dataset.scene]);
  if (!stages.length || !window.WebGLRenderingContext || !('IntersectionObserver' in window)) return;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let three = null;
  const io = new IntersectionObserver((es) => es.forEach((e) => {
    if (!e.isIntersecting) return;
    io.unobserve(e.target);
    (three || (three = import('three'))).then((T) => mount(T, e.target, builders, Object.assign({ reduce }, ctx))).catch(() => {});
  }), { rootMargin: '700px 0px' });
  stages.forEach((s) => io.observe(s));
}

// one pointer for every scene on the page, eased
const POINTER = { x: 0, y: 0, tx: 0, ty: 0, on: false };
function listen() {
  if (POINTER.on) return; POINTER.on = true;
  if (matchMedia('(hover: hover)').matches) addEventListener('pointermove', (e) => { POINTER.tx = e.clientX / innerWidth * 2 - 1; POINTER.ty = e.clientY / innerHeight * 2 - 1; }, { passive: true });
}

function mount(THREE, el, builders, ctx) {
  let renderer;
  try { renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' }); } catch (e) { return; }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
  el.appendChild(renderer.domElement);
  const scene = new THREE.Scene(), camera = new THREE.PerspectiveCamera(40, 1, 0.1, 400);
  const reduce = ctx.reduce;
  if (!reduce) listen();
  const pointer = { x: 0, y: 0 };
  // scroll: how far the stage has travelled through the screen, 0 as its top comes up from the bottom, 0.5 when it's
  // centred, 1 as its bottom leaves the top; eased so the scenes glide with the page (lift = how far past the middle)
  const scroll = { p: 0.5, lift: 0 };
  const where = () => { const r = el.getBoundingClientRect(); return clamp((innerHeight - r.top) / (innerHeight + r.height)); };
  scroll.p = where();
  const api = builders[el.dataset.scene](THREE, scene, camera, Object.assign({}, ctx, { pointer, el, scroll }));

  function size() {
    const w = el.clientWidth, h = el.clientHeight; if (!w || !h) return;
    renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix();
    api.resize && api.resize(w, h, renderer.getPixelRatio());
  }
  function theme() { api.theme(isLight()); }
  size(); theme();
  new ResizeObserver(() => { size(); if (!running) frame(performance.now()); }).observe(el);
  new MutationObserver(() => { theme(); if (!running) frame(performance.now()); }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

  const t0 = performance.now();
  function frame(now) {
    POINTER.x += (POINTER.tx - POINTER.x) * 0.04; POINTER.y += (POINTER.ty - POINTER.y) * 0.04;
    pointer.x = POINTER.x; pointer.y = POINTER.y;
    if (!reduce) { scroll.p += (where() - scroll.p) * 0.12; scroll.lift = clamp((scroll.p - 0.5) * 2); }
    api.update(reduce ? 60 : (now - t0) / 1000);
    renderer.render(scene, camera);
  }
  frame(t0); el.classList.add('ready');
  let running = false, visible = false;
  function loop(now) { if (!visible || document.hidden) { running = false; return; } frame(now); requestAnimationFrame(loop); }
  const wake = () => { if (visible && !running && !document.hidden) { running = true; requestAnimationFrame(loop); } };
  if (!reduce || el.dataset.scene === 'film') {
    new IntersectionObserver(([e]) => { visible = e.isIntersecting; wake(); }).observe(el);
    document.addEventListener('visibilitychange', wake);
  }
}

// points that glow from a base colour to a bright one (aGlow 0…1), sized for the screen, soft-edged; a vertex body can
// also set fade (0…1), which dims a point without changing its colour (for distance, or the edges of a field)
export function glowPoints(THREE, extraUniforms, vertexBody) {
  return new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    uniforms: Object.assign({ uPx: { value: 1 }, uSize: { value: 1 }, uA: { value: new THREE.Color() }, uB: { value: new THREE.Color() }, uAlpha: { value: 1 } }, extraUniforms),
    vertexShader: `
      attribute float aSize; attribute float aGlow;
      uniform float uPx; uniform float uSize; varying float vGlow; varying float vFade;
      ${Object.keys(extraUniforms).map((k) => {
        const v = extraUniforms[k].value;
        const t = typeof v === 'number' ? 'float' : v && v.isVector2 ? 'vec2' : 'vec3';
        return `uniform ${t} ${k};`;
      }).join('\n')}
      ${vertexBody.decl || ''}
      void main() {
        vec3 p = position; float glow = aGlow; float fade = 1.0; float sz = 1.0;
        ${vertexBody.main || ''}
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = uSize * aSize * sz * uPx / max(0.1, -mv.z);
        vGlow = glow; vFade = fade;
      }`,
    fragmentShader: `
      uniform vec3 uA; uniform vec3 uB; uniform float uAlpha; varying float vGlow; varying float vFade;
      void main() {
        float d = length(gl_PointCoord - 0.5); if (d > 0.5) discard;
        float a = smoothstep(0.5, 0.0, d);
        gl_FragColor = vec4(mix(uA, uB, clamp(vGlow, 0.0, 1.0)), a * uAlpha * vFade * (0.3 + 0.7 * clamp(vGlow, 0.0, 1.0)));
      }`,
  });
}
export function setTheme(THREE, mat, light, dark, lightCols) {
  const c = light ? lightCols : dark;
  mat.uniforms.uA.value.set(c[0]); mat.uniforms.uB.value.set(c[1]);
  mat.blending = light ? THREE.NormalBlending : THREE.AdditiveBlending; mat.needsUpdate = true;
}
// a colour from the page (a CSS custom property on the stage, such as a service's --c), as a THREE.Color
function cssColour(THREE, el, name, fallback) {
  const v = getComputedStyle(el).getPropertyValue(name).trim();
  try { return new THREE.Color(v || fallback); } catch (e) { return new THREE.Color(fallback); }
}
const sphere = (R) => { const th = Math.random() * Math.PI * 2, ph = Math.acos(2 * Math.random() - 1); return [R * Math.sin(ph) * Math.cos(th), R * Math.sin(ph) * Math.sin(th), R * Math.cos(ph)]; };

// ---- the homepage's opening: a sea of light running to the horizon, slow swells crossing it, the brightest light on
// the crests; the cursor sends rings out across the water. Motes of light rise above it.
function buildSea(THREE, scene, camera, { pointer, reduce, scroll }) {
  const mobile = innerWidth < 760, COLS = mobile ? 150 : 260, ROWS = mobile ? 90 : 130, W = 34, D = 30;
  const P = new Float32Array(COLS * ROWS * 3), G = new Float32Array(COLS * ROWS), Z = new Float32Array(COLS * ROWS);
  let i = 0;
  for (let r = 0; r < ROWS; r++) for (let c = 0; c < COLS; c++, i++) {
    const zz = -D + (r / (ROWS - 1)) * (D + 3); // far to near
    P[i * 3] = (c / (COLS - 1) - 0.5) * W + (Math.random() - 0.5) * 0.06; P[i * 3 + 1] = 0; P[i * 3 + 2] = zz + (Math.random() - 0.5) * 0.06;
    G[i] = Math.random(); Z[i] = 0.55 + Math.random() * 0.7;
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(P, 3)); g.setAttribute('aGlow', new THREE.BufferAttribute(G, 1)); g.setAttribute('aSize', new THREE.BufferAttribute(Z, 1));
  const mat = glowPoints(THREE, { uT: { value: 0 }, uP: { value: new THREE.Vector2(0, -4) }, uPT: { value: -10 } }, {
    main: `
      float x = p.x, z = p.z;
      float h = sin(x * 0.32 + uT * 0.55) * 0.34 + sin(z * 0.45 - uT * 0.7 + x * 0.12) * 0.28 + sin((x + z) * 0.9 + uT * 1.1) * 0.08;
      // the cursor's rings, spreading from where it points on the water
      float dd = distance(vec2(x, z), uP);
      float ring = sin(dd * 2.6 - uT * 3.2) * exp(-dd * 0.32) * 0.32;
      h += ring;
      p.y = h - 1.6;
      float crest = clamp(h * 1.4 + 0.25, 0.0, 1.0);
      glow = 0.12 + crest * 0.75 + aGlow * 0.12 + max(ring, 0.0) * 1.2;
      // the far water fades into the horizon, the near edge out of the frame; the sides fade too
      fade = smoothstep(-30.0, -18.0, z) * 0.75 + 0.25 * smoothstep(-30.0, -24.0, z);
      fade *= 1.0 - smoothstep(10.0, 17.0, abs(x));
      sz = 0.7 + crest * 0.6;`,
  });
  const sea = new THREE.Points(g, mat); scene.add(sea);

  // motes: specks of light rising slowly above the water
  const NM = mobile ? 160 : 320, MP = new Float32Array(NM * 3), MG = new Float32Array(NM), MZ = new Float32Array(NM);
  for (let k = 0; k < NM; k++) { MP[k * 3] = (Math.random() - 0.5) * 26; MP[k * 3 + 1] = Math.random() * 7; MP[k * 3 + 2] = -Math.random() * 24 + 2; MG[k] = Math.random(); MZ[k] = 0.8 + Math.random() * 2.2; }
  const mg = new THREE.BufferGeometry();
  mg.setAttribute('position', new THREE.BufferAttribute(MP, 3)); mg.setAttribute('aGlow', new THREE.BufferAttribute(MG, 1)); mg.setAttribute('aSize', new THREE.BufferAttribute(MZ, 1));
  const mmat = glowPoints(THREE, { uT: { value: 0 } }, {
    main: `p.y = mod(p.y + uT * (0.12 + aGlow * 0.18), 7.0) - 1.2; p.x += sin(uT * 0.3 + aGlow * 30.0) * 0.4;
           glow = 0.3 + 0.7 * (0.5 + 0.5 * sin(uT * (0.8 + aGlow) + aGlow * 50.0));
           fade = smoothstep(-1.2, 0.2, p.y) * (1.0 - smoothstep(4.0, 5.8, p.y)) * smoothstep(-24.0, -12.0, p.z);`,
  });
  const motes = new THREE.Points(mg, mmat); scene.add(motes);

  const look = new THREE.Vector3(0, -0.6, -10), ray = new THREE.Raycaster(), plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 1.6), hit = new THREE.Vector3(), ndc = new THREE.Vector2();
  let last = { x: 9, y: 9 };
  return {
    resize(w, h, px) {
      [mat, mmat].forEach((m) => { m.uniforms.uPx.value = px * Math.min(1.25, h / 760); });
      mat.uniforms.uSize.value = 34; mmat.uniforms.uSize.value = 30;
    },
    theme(light) {
      setTheme(THREE, mat, light, ['#0f3a6e', '#e3f4ff'], ['#c2ccd9', '#1561ad']); // the logo's blue in the troughs, gold-white on the crests
      setTheme(THREE, mmat, light, ['#1561ad', '#e3f4ff'], ['#8fb4d9', '#16457d']);
      mat.uniforms.uAlpha.value = light ? 0.75 : 0.95; mmat.uniforms.uAlpha.value = light ? 0.55 : 0.8;
    },
    update(t) {
      mat.uniforms.uT.value = t; mmat.uniforms.uT.value = t;
      // scrolling on, the camera rises and glides out over the water
      camera.position.set(pointer.x * 0.8, 1.15 - pointer.y * 0.25 + scroll.lift * 1.6, 6.5 - scroll.lift * 3.2);
      camera.lookAt(look);
      // where the cursor points on the water: the rings spread from there
      if (Math.abs(pointer.x - last.x) + Math.abs(pointer.y - last.y) > 0.002) {
        ndc.set(pointer.x, -pointer.y); ray.setFromCamera(ndc, camera);
        if (ray.ray.intersectPlane(plane, hit) && hit.z > -26) mat.uniforms.uP.value.set(hit.x, hit.z);
        last = { x: pointer.x, y: pointer.y };
      }
      if (reduce) mat.uniforms.uP.value.set(0, -40);
    },
  };
}

// ---- Services: an armillary of four rings of light (one for each group of services, in its colour), each turning on
// its own axis about a bright core, with a spark running round each ring
function buildRings(THREE, scene, camera, { pointer, el, scroll }) {
  camera.position.set(0, 0, 11);
  const mobile = innerWidth < 760, PER = mobile ? 1500 : 2600;
  const cols = ['--g1', '--g2', '--g3', '--g4'].map((n, k) => cssColour(THREE, el, n, ['#5b9be6', '#8fd3f4', '#2f80c9', '#5b9be6'][k]));
  const rig = new THREE.Group(); scene.add(rig);
  const rings = [], mats = [];
  const TILT = [[0.35, 0, 0.1], [1.15, 0.4, 0], [0.9, -0.9, 0.3], [1.5, 1.2, -0.4]], RAD = [3.2, 2.75, 2.35, 1.95];
  for (let k = 0; k < 4; k++) {
    const P = new Float32Array(PER * 3), G = new Float32Array(PER), Z = new Float32Array(PER);
    for (let i = 0; i < PER; i++) {
      const a = Math.random() * Math.PI * 2, band = (Math.random() - 0.5) * 0.18, lift = (Math.random() - 0.5) * 0.06;
      const R = RAD[k] + band; P[i * 3] = Math.cos(a) * R; P[i * 3 + 1] = Math.sin(a) * R; P[i * 3 + 2] = lift;
      G[i] = Math.random() < 0.08 ? 0.9 : 0.25 + Math.random() * 0.35; Z[i] = 0.5 + Math.random() * 0.9;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(P, 3)); g.setAttribute('aGlow', new THREE.BufferAttribute(G, 1)); g.setAttribute('aSize', new THREE.BufferAttribute(Z, 1));
    const m = glowPoints(THREE, { uT: { value: 0 }, uK: { value: k } }, {
      main: `float a = atan(p.y, p.x); float run = mod(uT * (0.35 + uK * 0.07) + uK * 1.7, 6.2831853) - 3.14159265;
             float d = abs(mod(a - run + 3.14159265, 6.2831853) - 3.14159265);
             glow = aGlow + exp(-d * d * 18.0) * 1.2; sz = 1.0 + exp(-d * d * 30.0) * 1.6;`,
    });
    const pts = new THREE.Points(g, m), gimbal = new THREE.Group(), spin = new THREE.Group();
    spin.add(pts); gimbal.add(spin); gimbal.rotation.set(TILT[k][0], TILT[k][1], TILT[k][2]); rig.add(gimbal);
    rings.push(spin); mats.push(m);
  }
  // the core, and a faint sphere of dust round the whole
  const NC = mobile ? 900 : 1600, CP = new Float32Array(NC * 3), CG = new Float32Array(NC), CZ = new Float32Array(NC);
  for (let i = 0; i < NC; i++) {
    const core = i < NC * 0.45, [x, y, z] = sphere(core ? Math.pow(Math.random(), 2.2) * 0.75 : 3.6 + Math.random() * 2.4);
    CP[i * 3] = x; CP[i * 3 + 1] = y; CP[i * 3 + 2] = z; CG[i] = core ? 0.6 + Math.random() * 0.4 : Math.random() * 0.3; CZ[i] = core ? 0.6 + Math.random() : 0.4 + Math.random() * 0.5;
  }
  const cg = new THREE.BufferGeometry();
  cg.setAttribute('position', new THREE.BufferAttribute(CP, 3)); cg.setAttribute('aGlow', new THREE.BufferAttribute(CG, 1)); cg.setAttribute('aSize', new THREE.BufferAttribute(CZ, 1));
  const cmat = glowPoints(THREE, { uT: { value: 0 } }, { main: 'glow = aGlow * (0.75 + 0.25 * sin(uT * 1.5 + aGlow * 40.0)); p *= 1.0 + 0.04 * sin(uT * 0.8);' });
  const core = new THREE.Points(cg, cmat); rig.add(core);

  return {
    resize(w, h, px) {
      const wide = w / h > 1.1;
      rig.position.set(wide ? 3.4 : 0, wide ? 0 : 1.6, 0); rig.scale.setScalar(wide ? 1 : 0.62);
      [...mats, cmat].forEach((m) => { m.uniforms.uPx.value = px * Math.min(1.2, h / 820); m.uniforms.uSize.value = 26; });
    },
    theme(light) {
      mats.forEach((m, k) => {
        const c = cols[k].clone();
        if (light) setTheme(THREE, m, true, null, ['#' + c.clone().lerp(new THREE.Color('#f2f6fa'), 0.55).getHexString(), '#' + c.clone().lerp(new THREE.Color('#0f1d30'), 0.45).getHexString()]);
        else setTheme(THREE, m, false, ['#' + c.clone().multiplyScalar(0.45).getHexString(), '#' + c.clone().lerp(new THREE.Color('#e3f4ff'), 0.6).getHexString()]);
        m.uniforms.uAlpha.value = light ? 0.8 : 0.9;
      });
      setTheme(THREE, cmat, light, ['#1561ad', '#e3f4ff'], ['#c3ccd8', '#1561ad']);
    },
    update(t) {
      rings.forEach((r, k) => { r.rotation.z = t * (k % 2 ? -0.07 : 0.05) * (1 + k * 0.15); });
      mats.forEach((m) => { m.uniforms.uT.value = t; }); cmat.uniforms.uT.value = t;
      // scrolling on, the rings swing round and open towards you
      rig.rotation.y = t * 0.06 + pointer.x * 0.3 + (scroll.p - 0.5) * 2.4; rig.rotation.x = Math.sin(t * 0.13) * 0.15 + pointer.y * 0.2 - scroll.lift * 0.5;
      rig.scale.setScalar(1 + scroll.lift * 0.35);
    },
  };
}

// ---- each service: a ribbon of light twisting across the opening, in the service's colour, a highlight travelling
// along it; its edges brighter than its middle, like silk catching the light
function buildRibbon(THREE, scene, camera, { pointer, el, scroll }) {
  camera.position.set(0, 0, 10);
  const mobile = innerWidth < 760, NU = mobile ? 320 : 560, NV = mobile ? 18 : 26;
  const P = new Float32Array(NU * NV * 3), G = new Float32Array(NU * NV), Z = new Float32Array(NU * NV);
  let i = 0;
  for (let a = 0; a < NU; a++) for (let b = 0; b < NV; b++, i++) {
    P[i * 3] = a / (NU - 1) + (Math.random() - 0.5) / NU; P[i * 3 + 1] = b / (NV - 1); P[i * 3 + 2] = 0;
    G[i] = Math.random(); Z[i] = 0.5 + Math.random() * 0.8;
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(P, 3)); g.setAttribute('aGlow', new THREE.BufferAttribute(G, 1)); g.setAttribute('aSize', new THREE.BufferAttribute(Z, 1));
  const mat = glowPoints(THREE, { uT: { value: 0 } }, {
    main: `
      float u = p.x, v = p.y - 0.5;
      float s = u * 6.2831853;
      float tw = s * 0.55 + uT * 0.35;                         // the twist along its length
      vec3 c = vec3(-11.0 + u * 22.0, sin(s * 0.5 + uT * 0.25) * 1.5 + sin(s * 1.3 - uT * 0.4) * 0.35, cos(s * 0.45 + uT * 0.2) * 1.8);
      float wdt = 1.25 + 0.45 * sin(s * 0.8 + uT * 0.3);
      p = c + vec3(0.0, cos(tw), sin(tw)) * v * wdt;
      float edge = pow(abs(v) * 2.0, 3.0);
      float run = fract(uT * 0.06);
      float hl = exp(-pow((u - run) * 9.0, 2.0)) + exp(-pow((u - run + 1.0) * 9.0, 2.0));
      glow = 0.12 + edge * 0.6 + hl * 0.7 + aGlow * 0.08 + max(0.0, sin(tw)) * 0.15;
      fade = smoothstep(0.0, 0.12, u) * (1.0 - smoothstep(0.88, 1.0, u));
      sz = 0.8 + edge * 0.5 + hl * 0.6;`,
  });
  const ribbon = new THREE.Points(g, mat), rig = new THREE.Group(); rig.add(ribbon); scene.add(rig);
  const base = cssColour(THREE, el, '--c', '#5b9be6');
  return {
    resize(w, h, px) {
      const wide = w / h > 1.1;
      rig.position.set(wide ? 1.2 : 0, wide ? -0.6 : 1.4, 0); rig.rotation.z = wide ? 0.22 : 0.5; rig.scale.setScalar(wide ? 1 : 0.6);
      mat.uniforms.uPx.value = px * Math.min(1.2, h / 760); mat.uniforms.uSize.value = 26;
    },
    theme(light) {
      const c = base.clone();
      if (light) setTheme(THREE, mat, true, null, ['#' + c.clone().lerp(new THREE.Color('#f2f6fa'), 0.6).getHexString(), '#' + c.clone().lerp(new THREE.Color('#0f1d30'), 0.5).getHexString()]);
      else setTheme(THREE, mat, false, ['#' + c.clone().multiplyScalar(0.35).getHexString(), '#' + c.clone().lerp(new THREE.Color('#e3f4ff'), 0.55).getHexString()]);
      mat.uniforms.uAlpha.value = light ? 0.7 : 0.85;
    },
    update(t) {
      mat.uniforms.uT.value = t;
      // scrolling on, the ribbon twists and drifts up
      rig.rotation.y = pointer.x * 0.18 + (scroll.p - 0.5) * 0.9; rig.rotation.x = -0.15 + pointer.y * 0.12; rig.rotation.z = (scroll.p - 0.5) * 0.6;
      rig.position.y = scroll.lift * 0.8;
    },
  };
}

// ---- Contact: light spiralling in from every side towards the middle (where the form sits), and rings going out
// from it, like a call answered
function buildConverge(THREE, scene, camera, { pointer, scroll }) {
  camera.position.set(0, 0, 12);
  const mobile = innerWidth < 760, N = mobile ? 4000 : 8000;
  const P = new Float32Array(N * 3), G = new Float32Array(N), Z = new Float32Array(N);
  for (let i = 0; i < N; i++) { P[i * 3] = Math.random(); P[i * 3 + 1] = Math.random() * Math.PI * 2; P[i * 3 + 2] = (Math.random() - 0.5); G[i] = Math.random(); Z[i] = 0.5 + Math.random() * 1.1; }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(P, 3)); g.setAttribute('aGlow', new THREE.BufferAttribute(G, 1)); g.setAttribute('aSize', new THREE.BufferAttribute(Z, 1));
  const mat = glowPoints(THREE, { uT: { value: 0 }, uAspect: { value: 1.6 } }, {
    main: `
      float f = fract(p.x + uT * (0.035 + aGlow * 0.02));      // 0 far out … 1 arrived
      float r = mix(13.0, 0.4, pow(f, 0.8));
      float a = p.y + f * 3.4 + uT * 0.02;
      p = vec3(cos(a) * r * uAspect * 0.75, sin(a) * r * 0.75, p.z * (1.0 - f) * 3.0);
      // the outgoing rings
      float w = mod(uT * 1.4, 10.0), ring = exp(-pow(r - w, 2.0) * 1.4) * (1.0 - w / 10.0);
      glow = 0.15 + pow(f, 2.0) * 0.6 + ring * 0.9;
      fade = smoothstep(0.0, 0.25, f) * (1.0 - smoothstep(0.93, 1.0, f));
      sz = 0.8 + ring * 0.8;`,
  });
  const pts = new THREE.Points(g, mat); scene.add(pts);
  return {
    resize(w, h, px) { mat.uniforms.uAspect.value = Math.max(1, w / h); mat.uniforms.uPx.value = px * Math.min(1.2, h / 820); mat.uniforms.uSize.value = 24; },
    theme(light) { setTheme(THREE, mat, light, ['#123d70', '#e3f4ff'], ['#c3ccd8', '#1561ad']); mat.uniforms.uAlpha.value = light ? 0.75 : 0.9; },
    update(t) { mat.uniforms.uT.value = t; pts.rotation.y = pointer.x * 0.12; pts.rotation.x = pointer.y * 0.08; pts.rotation.z = (scroll.p - 0.5) * 1.4; },
  };
}

// ---- gold dust drifting through the dark, near specks large and soft, far ones fine
function buildDust(THREE, scene, camera, { pointer, scroll }) {
  camera.position.set(0, 0, 10);
  const mobile = innerWidth < 760, N = mobile ? 700 : 1400;
  const P = new Float32Array(N * 3), G = new Float32Array(N), Z = new Float32Array(N);
  for (let i = 0; i < N; i++) { P[i * 3] = (Math.random() - 0.5) * 30; P[i * 3 + 1] = (Math.random() - 0.5) * 14; P[i * 3 + 2] = -Math.random() * 22 + 4; G[i] = Math.random(); Z[i] = Math.random() < 0.06 ? 3 + Math.random() * 4 : 0.5 + Math.random() * 1.2; }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(P, 3)); g.setAttribute('aGlow', new THREE.BufferAttribute(G, 1)); g.setAttribute('aSize', new THREE.BufferAttribute(Z, 1));
  const mat = glowPoints(THREE, { uT: { value: 0 } }, {
    main: `p.x += sin(uT * 0.05 + aGlow * 20.0) * 1.2 + uT * 0.06; p.x = mod(p.x + 15.0, 30.0) - 15.0;
           p.y += sin(uT * 0.11 + aGlow * 13.0) * 0.6;
           glow = 0.25 + 0.6 * (0.5 + 0.5 * sin(uT * (0.4 + aGlow * 0.8) + aGlow * 60.0));
           fade = (aSize > 2.5 ? 0.35 : 1.0) * smoothstep(-18.0, -6.0, p.z);`,
  });
  const pts = new THREE.Points(g, mat); scene.add(pts);
  return {
    resize(w, h, px) { mat.uniforms.uPx.value = px * Math.min(1.2, h / 800); mat.uniforms.uSize.value = 26; },
    theme(light) { setTheme(THREE, mat, light, ['#16457d', '#e3f4ff'], ['#c3ccd8', '#1561ad']); mat.uniforms.uAlpha.value = light ? 0.6 : 0.85; },
    // scrolling on, the camera travels forward through the dust
    update(t) { mat.uniforms.uT.value = t; camera.position.x = pointer.x * 0.6; camera.position.y = -pointer.y * 0.4; camera.position.z = 10 - (scroll.p - 0.5) * 7; camera.lookAt(0, 0, -6); },
  };
}

// ---- the opening: the Envision mark (its eight arms, as in the favicon) assembling out of light, among stars
function buildMark(THREE, scene, camera, { reduce, pointer, el, scroll }) {
  const centre = el && el.dataset.place === 'centre';
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
      if (centre) { rig.position.set(0, 0, 0); rig.scale.setScalar(wide ? 0.95 : 0.7); }
      else { rig.position.set(wide ? 2.6 : 0, wide ? 0.2 : viewH * 0.31, 0); rig.scale.setScalar(wide ? 1 : 0.6); }
      [mat, smat].forEach((m) => { m.uniforms.uPx.value = px * Math.min(1, h / 900) * 1.4; });
      mat.uniforms.uSize.value = 26; smat.uniforms.uSize.value = 60;
    },
    theme(light) {
      setTheme(THREE, mat, light, ['#1561ad', '#e3f4ff'], ['#9fb6d3', '#0f2d55']); // the logo's blue at the heart, light at the tips
      setTheme(THREE, smat, light, ['#1b2a44', '#dde9f4'], ['#c3ccd8', '#3d5a80']);
      mat.uniforms.uAlpha.value = light ? 0.85 : 0.9; smat.uniforms.uAlpha.value = light ? 0.5 : 0.8;
    },
    update(t) {
      mat.uniforms.uT.value = reduce ? 60 : t; smat.uniforms.uT.value = t;
      // scrolling on, the mark spins faster and comes towards you
      rig.rotation.z = -t * 0.035 - scroll.lift * 1.6;
      rig.rotation.y = Math.sin(t * 0.22) * 0.32 + pointer.x * 0.25;
      camera.position.z = 10 - scroll.lift * 3.5;
      rig.rotation.x = Math.sin(t * 0.17) * 0.12 + pointer.y * 0.15;
      stars.rotation.y = t * 0.004 + pointer.x * 0.04; stars.rotation.x = pointer.y * 0.03;
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
      setTheme(THREE, mat, light, ['#16457d', '#e3f4ff'], ['#b7c3d3', '#0f2d55']);
      setTheme(THREE, sparkM, light, ['#8fd3f4', '#ffffff'], ['#1561ad', '#0f3a6e']);
      lineMat.color.set(light ? '#1561ad' : '#5b9be6'); lineMat.opacity = light ? 0.45 : 0.35;
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


// ---- a case study's figures (Our work, components/home/CaseWindow.tsx): each number forms out of light in turn, the
// points bursting apart and gathering into the next, while the card for the figure on show lights up beside it. The
// case window stays dark in both themes, so this does too. With reduced motion the first figure is shown, at rest.
function textPoints(txt, N) {
  const W = 640, H = 300, c = document.createElement('canvas'); c.width = W; c.height = H;
  const x = c.getContext('2d'); let fs = 250;
  x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillStyle = '#fff';
  do { x.font = `600 ${fs}px Sora, "Segoe UI", sans-serif`; fs -= 10; } while (x.measureText(txt).width > W * 0.9 && fs > 40);
  x.fillText(txt, W / 2, H / 2 + 8);
  const d = x.getImageData(0, 0, W, H).data, pts = [];
  for (let y = 0; y < H; y += 2) for (let i = 0; i < W; i += 2) if (d[(y * W + i) * 4 + 3] > 140) pts.push(i, y);
  const out = new Float32Array(N * 3), k = pts.length / 2 || 1;
  for (let n = 0; n < N; n++) {
    const j = Math.floor(Math.random() * k) * 2;
    out[n * 3] = ((pts[j] || W / 2) - W / 2) / W * 8 + (Math.random() - 0.5) * 0.03;
    out[n * 3 + 1] = -((pts[j + 1] || H / 2) - H / 2) / W * 8 + (Math.random() - 0.5) * 0.03;
    out[n * 3 + 2] = (Math.random() - 0.5) * 0.35;
  }
  return out;
}
function buildReel(THREE, scene, camera, { el, reduce, pointer }) {
  camera.position.set(0, 0, 8.4);
  const values = JSON.parse(el.dataset.items || '[]'), N = innerWidth < 760 ? 1800 : 2600, HOLD = 3.6, MORPH = 1.3;
  const cards = [...(el.closest('.cs-glance') || el).querySelectorAll('.cs-stat')];
  let targets = null;
  const make = () => { targets = values.map((v) => textPoints(String(v), N)); };
  if (document.fonts && document.fonts.status !== 'loaded') document.fonts.ready.then(make); else make();
  const pos = new Float32Array(N * 3), glow = new Float32Array(N), size = new Float32Array(N), burst = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) { glow[i] = 0.45 + Math.random() * 0.55; size[i] = 0.55 + Math.random() * 0.9; const b = sphere(0.6 + Math.random() * 1.6); burst.set(b, i * 3); }
  const g = new THREE.BufferGeometry(), pa = new THREE.BufferAttribute(pos, 3);
  pa.setUsage(THREE.DynamicDrawUsage);
  g.setAttribute('position', pa); g.setAttribute('aGlow', new THREE.BufferAttribute(glow, 1)); g.setAttribute('aSize', new THREE.BufferAttribute(size, 1));
  const mat = glowPoints(THREE, {}, {}), pts = new THREE.Points(g, mat), rig = new THREE.Group(); rig.add(pts); scene.add(rig);
  const c = cssColour(THREE, el, '--c', '#5b9be6');
  let shown = -1;
  return {
    resize(w, h, px) { mat.uniforms.uPx.value = px * Math.min(1.3, h / 380); mat.uniforms.uSize.value = 20; rig.scale.setScalar(Math.min(1, (w / h) / 1.25)); },
    theme() { setTheme(THREE, mat, false, ['#' + c.clone().lerp(new THREE.Color('#0b1520'), 0.35).getHexString(), '#' + c.clone().lerp(new THREE.Color('#ffffff'), 0.55).getHexString()]); },
    update(t) {
      if (!targets || !targets.length) return;
      const n = targets.length, k = reduce ? 0 : Math.floor(t / HOLD) % n, tl = reduce ? HOLD : t - Math.floor(t / HOLD) * HOLD;
      const from = targets[(k + n - 1) % n], to = targets[k], m = ease(clamp(tl / MORPH)), push = Math.sin(Math.PI * m) * (t < HOLD ? 0 : 1);
      for (let i = 0; i < N * 3; i++) pos[i] = (t < HOLD && !reduce ? to[i] * ease(clamp(tl / MORPH)) + burst[i] * 2.4 * (1 - ease(clamp(tl / MORPH))) : from[i] + (to[i] - from[i]) * m + burst[i] * push);
      pa.needsUpdate = true;
      if (k !== shown) { cards.forEach((cd, i) => cd.classList.toggle('on', i === k)); shown = k; }
      rig.rotation.y = Math.sin(t * 0.5) * 0.18 + pointer.x * 0.2; rig.rotation.x = Math.sin(t * 0.37) * 0.06 + pointer.y * 0.1;
    },
  };
}

// ---- a case study's results: for each figure, a bar for each month side by side (oldest first), rising in 3D when
// they come into view (and again each time the window is reopened). The key under the chart lines up with the bars.
function buildBars(THREE, scene, camera, { el, reduce, pointer }) {
  // one group per figure, one bar per month (oldest first); older months greyer, the latest in the case's colour
  const data = JSON.parse(el.dataset.bars || '[]').map((d) => (Array.isArray(d) ? d : [d.b, d.a])), n = data.length || 1;
  const M = Math.max(1, ...data.map((d) => d.length));
  camera.fov = 16; camera.position.set(0, 2.4, 18);
  scene.add(new THREE.AmbientLight(0xffffff, 0.55));
  const key = new THREE.DirectionalLight(0xffffff, 1.3); key.position.set(4, 8, 6); scene.add(key);
  const rim = new THREE.DirectionalLight(0x8fd3f4, 0.6); rim.position.set(-6, 3, -4); scene.add(rim);
  const c = cssColour(THREE, el, '--c', '#5b9be6'), grey = new THREE.Color(0x3a4658);
  const mats = [...Array(M)].map((_, j) => {
    const f = M > 1 ? j / (M - 1) : 1;
    if (f === 0) return new THREE.MeshStandardMaterial({ color: grey, roughness: 0.55, metalness: 0.15 });
    const col = grey.clone().lerp(c, f === 1 ? 1 : 0.45);
    return new THREE.MeshStandardMaterial({ color: col, emissive: col, emissiveIntensity: 0.22 * f, roughness: 0.3 + 0.25 * (1 - f), metalness: 0.25 });
  });
  const box = new THREE.BoxGeometry(1, 1, 1); box.translate(0, 0.5, 0);
  const rig = new THREE.Group(); scene.add(rig);
  const groups = data.map((d) => {
    const max = Math.max(...d) || 1;
    return d.map((v, j) => { const m = new THREE.Mesh(box, mats[j]); rig.add(m); return { m, h: v / max }; });
  });
  const base = new THREE.Mesh(new THREE.BoxGeometry(1, 0.04, 1), new THREE.MeshStandardMaterial({ color: 0x1b2737, roughness: 0.8 }));
  rig.add(base);
  let H = 3, start = 0, last = -9;
  return {
    resize(w, h) {
      const viewH = 2 * camera.position.z * Math.tan((camera.fov * Math.PI) / 360), viewW = viewH * (w / h), step = viewW / n, bw = Math.min((step * 0.52) / M, 0.9);
      H = viewH * 0.62;
      groups.forEach((g, i) => {
        const x = (i - (n - 1) / 2) * step;
        g.forEach((p, j) => { p.m.position.set(x + (j - (g.length - 1) / 2) * bw * 1.24, -viewH * 0.36, 0); p.m.scale.set(bw, 0.001, bw); });
      });
      base.position.set(0, -viewH * 0.36 - 0.02, 0); base.scale.set(viewW * 0.94, 1, bw * 2.4);
      camera.lookAt(0, -viewH * 0.02, 0);
    },
    theme() {},
    update(t) {
      if (t - last > 1.5) start = t;   // the window was closed (or this was off screen): grow again
      last = t;
      const s = reduce ? 99 : t - start;
      groups.forEach((g, i) => g.forEach((p, j) => {
        const gr = ease(clamp((s - j * 0.4 - i * 0.12) / 1.3));
        p.m.scale.y = Math.max(0.001, H * p.h * gr);
      }));
      rig.rotation.y = Math.sin(t * 0.35) * 0.05 + pointer.x * 0.05;
    },
  };
}

// ---- the homepage's Who we are, held on screen while the visitor scrolls through it (components/home/WhoWeAre.tsx):
// the scroll carries the light from scattered clusters (One Team) into paths that meet at one point (One Plan), then into
// the Envision mark (One Goal). The line of copy beside it changes with each. With reduced motion it rests on the mark.
function buildTeam(THREE, scene, camera, { el, reduce, pointer }) {
  const section = el.closest('.wa'), steps = section ? [...section.querySelectorAll('.wa-step')] : [], dots = section ? [...section.querySelectorAll('.wa-dots li')] : [];
  camera.position.set(0, 0, 10);
  const mobile = innerWidth < 760, N = mobile ? 5000 : 9000;
  const A = new Float32Array(N * 3), B = new Float32Array(N * 3), C = new Float32Array(N * 3), pos = new Float32Array(N * 3), dir = new Float32Array(N * 3);
  const glow = new Float32Array(N), size = new Float32Array(N);
  const gauss = () => (Math.random() + Math.random() + Math.random() - 1.5) / 1.5;
  // One Team: six clusters (the disciplines) in a loose ring
  const CL = [...Array(6)].map((_, k) => { const a = (k / 6) * Math.PI * 2 + 0.3; return [Math.cos(a) * 1.9, Math.sin(a) * 1.35, (Math.random() - 0.5) * 0.8]; });
  // One Plan: four paths (website, search, ads, follow-up) sweeping in from the left to meet at one point
  const MEET = [2.3, 0, 0], START = [[-1.9, 1.6], [-2.1, 0.55], [-2.1, -0.55], [-1.9, -1.6]];
  // One Goal: the Envision mark's eight arms, as in the favicon
  const TRI = [[50.3, 45], [53.6, 30], [57.6, 31.2]], P0 = [55.6, 30.6], Q0 = [48, 18.7], LW = 3.6, S = 2.5 / 50;
  for (let i = 0; i < N; i++) {
    const c = CL[i % 6];
    A[i * 3] = c[0] + gauss() * 0.45; A[i * 3 + 1] = c[1] + gauss() * 0.45; A[i * 3 + 2] = c[2] + gauss() * 0.45;
    const k = i % 4, u = Math.random(), st = START[k], cx = (st[0] + MEET[0]) / 2, cy = st[1] * 0.25;
    const bx = (1 - u) * (1 - u) * st[0] + 2 * (1 - u) * u * cx + u * u * MEET[0], by = (1 - u) * (1 - u) * st[1] + 2 * (1 - u) * u * cy + u * u * MEET[1];
    B[i * 3] = bx + gauss() * 0.04; B[i * 3 + 1] = by + gauss() * 0.04; B[i * 3 + 2] = gauss() * 0.06;
    let x, y; const arm = i % 8, r = Math.random();
    if (r < 0.5) { let a = Math.random(), b = Math.random(); if (a + b > 1) { a = 1 - a; b = 1 - b; } x = TRI[0][0] + a * (TRI[1][0] - TRI[0][0]) + b * (TRI[2][0] - TRI[0][0]); y = TRI[0][1] + a * (TRI[1][1] - TRI[0][1]) + b * (TRI[2][1] - TRI[0][1]); }
    else if (r < 0.88) { const v = Math.random(), ang = Math.random() * Math.PI * 2, rr = Math.sqrt(Math.random()) * LW / 2; x = P0[0] + (Q0[0] - P0[0]) * v + Math.cos(ang) * rr; y = P0[1] + (Q0[1] - P0[1]) * v + Math.sin(ang) * rr; }
    else { const ang = Math.random() * Math.PI * 2, rr = 44.7 - 50, cx2 = 44.7, cy2 = 13.5; x = cx2 + Math.cos(ang) * 6.4; y = cy2 + Math.sin(ang) * 6.4; void rr; }
    const ar = (arm * Math.PI) / 4, dx = x - 50, dy = y - 50;
    C[i * 3] = (dx * Math.cos(ar) - dy * Math.sin(ar)) * S; C[i * 3 + 1] = -(dx * Math.sin(ar) + dy * Math.cos(ar)) * S; C[i * 3 + 2] = (Math.random() - 0.5) * 0.15;
    dir.set(sphere(0.5 + Math.random()), i * 3);
    glow[i] = 0.3 + Math.random() * 0.7; size[i] = 0.6 + Math.random() * 1.1;
  }
  const g = new THREE.BufferGeometry(), pa = new THREE.BufferAttribute(pos, 3); pa.setUsage(THREE.DynamicDrawUsage);
  g.setAttribute('position', pa); g.setAttribute('aGlow', new THREE.BufferAttribute(glow, 1)); g.setAttribute('aSize', new THREE.BufferAttribute(size, 1));
  const mat = glowPoints(THREE, {}, {}), rig = new THREE.Group(); rig.add(new THREE.Points(g, mat)); scene.add(rig);
  let p = reduce ? 1 : 0, shown = -1, wide = true;
  const target = () => {
    if (!section || reduce) return 1;
    const r = section.getBoundingClientRect(), span = r.height - innerHeight;
    return span > 0 ? clamp(-r.top / span) : 0;
  };
  return {
    resize(w, h, px) { wide = w / h > 1.1; mat.uniforms.uPx.value = px * Math.min(1.3, h / 760); mat.uniforms.uSize.value = 26; rig.position.set(wide ? 2.2 : 0, wide ? 0 : 1.5, 0); rig.scale.setScalar(wide ? 1 : 0.72); },
    theme(light) { setTheme(THREE, mat, light, ['#1561ad', '#e3f4ff'], ['#9fb6d3', '#0f3a6e']); },
    update(t) {
      p += (target() - p) * 0.09;
      const a = ease(clamp((p - 0.2) / 0.22)), b = ease(clamp((p - 0.56) / 0.24)), burst = Math.sin(Math.PI * a) * 0.5 + Math.sin(Math.PI * b) * 0.6;
      const wob = 0.04;
      for (let i = 0; i < N * 3; i++) {
        const ab = A[i] + (B[i] - A[i]) * a, v = ab + (C[i] - ab) * b;
        pos[i] = v + dir[i] * burst + Math.sin(t * 0.8 + i) * wob * (1 - b);
      }
      pa.needsUpdate = true;
      rig.rotation.z = (1 - b) * Math.sin(t * 0.15) * 0.15 - b * t * 0.05;
      rig.rotation.y = pointer.x * 0.25 + Math.sin(t * 0.2) * 0.15; rig.rotation.x = pointer.y * 0.15;
      const k = p < 0.36 ? 0 : p < 0.7 ? 1 : 2;
      if (k !== shown && !reduce) { steps.forEach((s, i) => s.classList.toggle('on', i === k)); dots.forEach((d, i) => d.classList.toggle('on', i <= k)); shown = k; }
    },
  };
}

// ---- the Services page's "Four areas, one system", held on screen while the visitor scrolls through it
// (components/services/ServicesIndex.tsx): four rings of light, one per area, spread at different tilts; as each area is
// told, its ring swings round to face you and glows while the others dim; at the end they line up as one system around
// a core that brightens. The copy beside it changes with each. With reduced motion it rests lined up.
function buildAreas(THREE, scene, camera, { el, reduce, pointer }) {
  const section = el.closest('.ix-story'), steps = section ? [...section.querySelectorAll('.ix-step')] : [], dots = section ? [...section.querySelectorAll('.ix-story-dots li')] : [];
  const STAGES = steps.length || 6;
  camera.position.set(0, 0, 9);
  const mobile = innerWidth < 760, NR = mobile ? 900 : 1500;
  const COLS = ['#1561ad', '#2f80c9', '#5b9be6', '#8fd3f4'], RADII = [1.15, 1.6, 2.05, 2.5];
  const SPREAD = [[0.9, 0.2], [-0.5, 0.9], [1.2, -0.7], [-1.1, -0.4]];   // each ring's tilt (x, y) while they're apart
  const rig = new THREE.Group(); scene.add(rig);
  const rings = RADII.map((R, k) => {
    const P = new Float32Array(NR * 3), G = new Float32Array(NR), Z = new Float32Array(NR);
    for (let i = 0; i < NR; i++) {
      const a = Math.random() * Math.PI * 2, w = (Math.random() - 0.5) * 0.08;
      P[i * 3] = Math.cos(a) * (R + w); P[i * 3 + 1] = Math.sin(a) * (R + w); P[i * 3 + 2] = (Math.random() - 0.5) * 0.06;
      G[i] = 0.3 + Math.random() * 0.7; Z[i] = 0.5 + Math.random() * 1;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(P, 3)); g.setAttribute('aGlow', new THREE.BufferAttribute(G, 1)); g.setAttribute('aSize', new THREE.BufferAttribute(Z, 1));
    const m = glowPoints(THREE, {}, {}), grp = new THREE.Group(); grp.add(new THREE.Points(g, m)); rig.add(grp);
    return { grp, m, col: COLS[k], lit: 0 };
  });
  // the core: a cluster of light at the centre that brightens when the rings line up
  const NC = mobile ? 600 : 1000, CP = new Float32Array(NC * 3), CG = new Float32Array(NC), CZ = new Float32Array(NC);
  for (let i = 0; i < NC; i++) { CP.set(sphere(Math.pow(Math.random(), 2) * 0.55), i * 3); CG[i] = Math.random(); CZ[i] = 0.5 + Math.random(); }
  const cg = new THREE.BufferGeometry();
  cg.setAttribute('position', new THREE.BufferAttribute(CP, 3)); cg.setAttribute('aGlow', new THREE.BufferAttribute(CG, 1)); cg.setAttribute('aSize', new THREE.BufferAttribute(CZ, 1));
  const cm = glowPoints(THREE, {}, {}), core = new THREE.Points(cg, cm); rig.add(core);
  let p = reduce ? 1 : 0, shown = -1, light = false;
  const target = () => {
    if (!section || reduce) return 1;
    const r = section.getBoundingClientRect(), span = r.height - innerHeight;
    return span > 0 ? clamp(-r.top / span) : 0;
  };
  return {
    resize(w, h, px) {
      const wide = w / h > 1.1;
      [cm, ...rings.map((r) => r.m)].forEach((m) => { m.uniforms.uPx.value = px * Math.min(1.3, h / 760); m.uniforms.uSize.value = 26; });
      rig.position.set(wide ? 2.4 : 0, wide ? 0 : 1.6, 0); rig.scale.setScalar(wide ? 1 : 0.62);
    },
    theme(l) {
      light = l;
      rings.forEach((r) => setTheme(THREE, r.m, l, ['#' + new THREE.Color(r.col).lerp(new THREE.Color('#050b16'), 0.4).getHexString(), '#e3f4ff'], ['#c3ccd8', r.col]));
      setTheme(THREE, cm, l, ['#1561ad', '#ffffff'], ['#9fb6d3', '#0f3a6e']);
    },
    update(t) {
      p += (target() - p) * 0.09;
      const s = p * STAGES, k = Math.min(STAGES - 1, Math.floor(s)), together = ease(clamp(s - (STAGES - 1.15)));
      rings.forEach((r, i) => {
        const focus = k === i + 1 ? 1 : 0;
        r.lit += (focus - r.lit) * 0.08;
        // apart, each at its own tilt; in focus, turned to face you; together, all facing you
        const face = Math.max(r.lit, together), tx = SPREAD[i][0] * (1 - face) + 0.12 * together, ty = SPREAD[i][1] * (1 - face);
        r.grp.rotation.set(tx + Math.sin(t * 0.2 + i) * 0.08 * (1 - face), ty + Math.cos(t * 0.17 + i) * 0.08 * (1 - face), t * (i % 2 ? -0.08 : 0.06) * (1 + i * 0.2));
        r.grp.scale.setScalar(1 + r.lit * 0.12);
        const dim = k >= 1 && k <= 4 ? 0.25 + 0.75 * r.lit : 0.55 + 0.45 * together;
        r.m.uniforms.uAlpha.value = (light ? 0.9 : 1) * dim;
      });
      cm.uniforms.uAlpha.value = 0.25 + 0.75 * together; core.scale.setScalar(0.8 + together * 0.5 + Math.sin(t * 2) * 0.03 * together);
      rig.rotation.y = pointer.x * 0.25; rig.rotation.x = pointer.y * 0.15;
      if (k !== shown && !reduce) { steps.forEach((st, i) => st.classList.toggle('on', i === k)); dots.forEach((d, i) => d.classList.toggle('on', i <= k)); shown = k; }
    },
  };
}

export const BUILDERS = { mark: buildMark, map: buildMap, sea: buildSea, rings: buildRings, ribbon: buildRibbon, converge: buildConverge, dust: buildDust, reel: buildReel, bars: buildBars, team: buildTeam, areas: buildAreas };
