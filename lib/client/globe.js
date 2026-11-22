// Where we are, on the About page (components/about/AboutContent.tsx, styles/about-grand.css): the Earth made of points of
// light, the land drawn from the world-atlas map (Natural Earth, through topojson-client), an ocean of deep navy and a
// glow of atmosphere at its edge. The section is held on screen while the visitor scrolls through it, and the scroll
// carries the story: the globe turning slowly, then swinging round to Australia, then the camera closing in on Victoria,
// where a finer field of light shows the state's coastline, Melbourne glows brightest, and a pin rises over the city.
// The three passages of copy follow the same scroll. (This is the one effect on the site tied to the scroll, by request.)
// With reduced motion the globe rests facing Melbourne, part way in, and the copy is all shown.

const D = Math.PI / 180;
const MEL = { lat: -37.81, lon: 144.96 };
const clamp = (v, a = 0, b = 1) => (v < a ? a : v > b ? b : v);
const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const wrap = (a) => Math.atan2(Math.sin(a), Math.cos(a));
// a place on the globe (radius r) as x, y, z: north is up (+y), and longitude turns about the y axis
const toV = (lat, lon, r = 1) => [r * Math.cos(lat * D) * Math.cos(lon * D), r * Math.sin(lat * D), -r * Math.cos(lat * D) * Math.sin(lon * D)];

// draw the land onto a flat (equirectangular) canvas over a box of longitude and latitude, to test points against
function landRaster(land, box, W, H) {
  const c = document.createElement('canvas'); c.width = W; c.height = H;
  const x = c.getContext('2d'), [lo0, lo1, la0, la1] = box;
  const px = (lon) => ((lon - lo0) / (lo1 - lo0)) * W, py = (lat) => ((la1 - lat) / (la1 - la0)) * H;
  x.fillStyle = '#fff'; x.beginPath();
  // the land comes as one shape or a collection of them; gather every polygon
  const geoms = land.type === 'FeatureCollection' ? land.features.map((f) => f.geometry) : [land.geometry];
  const polys = geoms.flatMap((g) => (!g ? [] : g.type === 'MultiPolygon' ? g.coordinates : g.type === 'Polygon' ? [g.coordinates] : []));
  polys.forEach((poly) => poly.forEach((ring) => {
    ring.forEach(([lon, lat], i) => { if (i === 0) x.moveTo(px(lon), py(lat)); else x.lineTo(px(lon), py(lat)); });
    x.closePath();
  }));
  x.fill('evenodd');
  const d = x.getImageData(0, 0, W, H).data;
  return (lon, lat) => {
    const i = Math.floor(px(lon)), j = Math.floor(py(lat));
    return i >= 0 && j >= 0 && i < W && j < H && d[(j * W + i) * 4 + 3] > 120;
  };
}

const VERT = `
  attribute float aSize; attribute float aGlow; attribute float aLayer; attribute float aFade;
  uniform float uPx; uniform float uDetail; uniform float uT;
  varying float vA; varying float vG;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;
    float dist = -mv.z;
    gl_PointSize = aSize * uPx * clamp(3.2 / dist, 1.0, aLayer > 0.5 ? 2.2 : 3.2);
    vec3 n = normalize(mat3(modelViewMatrix) * position);
    float facing = dot(n, normalize(-mv.xyz));
    float layer = aLayer > 1.5 ? uDetail : aLayer > 0.5 ? uDetail : 1.0 - uDetail * 0.55;
    float twinkle = aLayer > 1.5 ? 0.75 + 0.25 * sin(uT * 2.0 + aGlow * 40.0) : 1.0;
    vA = smoothstep(-0.02, 0.3, facing) * layer * twinkle * aFade * (aLayer > 0.5 ? 0.55 : 1.0);
    vG = aGlow;
  }`;
const FRAG = `
  uniform vec3 uA; uniform vec3 uB; varying float vA; varying float vG;
  void main() {
    float d = length(gl_PointCoord - 0.5); if (d > 0.5) discard;
    gl_FragColor = vec4(mix(uA, uB, vG), smoothstep(0.5, 0.0, d) * vA);
  }`;

export function buildGlobe(THREE, scene, camera, { el, reduce, pointer }) {
  const section = el.closest('.ag-globe'), steps = section ? [...section.querySelectorAll('.ag-gstep')] : [], bar = section && section.querySelector('.ag-gprog i');
  const mobile = innerWidth < 760;
  camera.position.set(0, 0, 4.4);
  const root = new THREE.Group(), globe = new THREE.Group(); root.add(globe); scene.add(root);

  // the ocean (it also hides the far side's points) and the atmosphere's glow
  globe.add(new THREE.Mesh(new THREE.SphereGeometry(0.996, 72, 54), new THREE.MeshBasicMaterial({ color: 0x050d1c })));
  const atm = new THREE.Mesh(new THREE.SphereGeometry(1.14, 72, 54), new THREE.ShaderMaterial({
    transparent: true, side: THREE.BackSide, blending: THREE.AdditiveBlending, depthWrite: false,
    uniforms: { uC: { value: new THREE.Color('#2f80c9') }, uK: { value: 1 } },
    vertexShader: 'varying vec3 vN; void main(){ vN = normalize(normalMatrix * normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
    fragmentShader: 'uniform vec3 uC; uniform float uK; varying vec3 vN; void main(){ float i = pow(clamp(0.78 - dot(vN, vec3(0.0, 0.0, 1.0)), 0.0, 1.0), 2.6); gl_FragColor = vec4(uC * i * 1.6 * uK, i * uK); }',
  }));
  root.add(atm);

  const mat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    uniforms: { uPx: { value: 1 }, uDetail: { value: 0 }, uT: { value: 0 }, uA: { value: new THREE.Color('#2f80c9') }, uB: { value: new THREE.Color('#e3f4ff') } },
    vertexShader: VERT, fragmentShader: FRAG,
  });
  let points = null;

  // the pin over Melbourne: a beam of light and rings pulsing out from its foot
  const pin = new THREE.Group(); globe.add(pin);
  const foot = new THREE.Vector3(...toV(MEL.lat, MEL.lon, 1.001)), tip = new THREE.Vector3(...toV(MEL.lat, MEL.lon, 1.035));
  const beam = new THREE.Line(new THREE.BufferGeometry().setFromPoints([foot, tip]), new THREE.LineBasicMaterial({ color: 0xbfe9ff, transparent: true, opacity: 0 }));
  pin.add(beam);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.0019, 16, 12), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0 }));
  head.position.copy(tip); pin.add(head);
  const rings = [0, 1, 2].map(() => {
    const r = new THREE.Mesh(new THREE.RingGeometry(0.97, 1, 64), new THREE.MeshBasicMaterial({ color: 0x8fd3f4, transparent: true, opacity: 0, side: THREE.DoubleSide, depthWrite: false }));
    r.position.copy(foot); r.lookAt(foot.clone().multiplyScalar(2)); pin.add(r); return r;
  });

  // the land, as points: the whole world (layer 0), Victoria and its neighbours in finer detail (layer 1), and
  // Melbourne's glow (layer 2)
  Promise.all([import('topojson-client'), import('world-atlas/land-50m.json')]).then(([tc, mod]) => {
    const topo = mod.default || mod, land = tc.feature(topo, topo.objects.land);
    const world = landRaster(land, [-180, 180, -90, 90], 2048, 1024);
    const near = landRaster(land, [138, 152, -42, -32], 2200, 1572);
    const P = [], S = [], G = [], L = [], F = [];
    const add = (lat, lon, size, glow, layer, r = 1, fade = 1) => { P.push(...toV(lat, lon, r)); S.push(size); G.push(glow); L.push(layer); F.push(fade); };
    // the world: points spread evenly over the sphere, kept where there's land
    const N = mobile ? 70000 : 110000, gold = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2, lat = Math.asin(y) / D, lon = wrap(i * gold) / D;
      if (lat < -62 || !world(lon, lat)) continue;
      add(lat, lon, 2.4 + Math.random() * 1.2, 0.3 + Math.random() * 0.4, 0);
    }
    // Victoria and around it, on a fine grid
    const step = mobile ? 0.045 : 0.032;
    for (let lat = -39.4; lat < -33.8; lat += step) for (let lon = 140.6; lon < 150.4; lon += step) {
      const la = lat + (Math.random() - 0.5) * step * 0.6, lo = lon + (Math.random() - 0.5) * step * 0.6;
      if (!near(lo, la)) continue;
      const dm = Math.hypot(la - MEL.lat, (lo - MEL.lon) * 0.8);
      const edge = Math.min(la + 39.4, -33.8 - la, lo - 140.6, 150.4 - lo);   // fade out towards the edges of the detailed area
      add(la, lo, 1 + Math.random() * 0.5, clamp(0.25 + 0.75 * Math.exp(-dm / 1.1)), 1, 1.0008, clamp(edge / 1.6) * (0.35 + 0.65 * Math.exp(-dm / 3)));
    }
    // Melbourne: a dense glow, brightest in the middle
    for (let i = 0; i < (mobile ? 1600 : 2600); i++) {
      const a = Math.random() * Math.PI * 2, r = Math.pow(Math.random(), 1.8) * 0.42, la = MEL.lat + Math.sin(a) * r * 0.8, lo = MEL.lon + Math.cos(a) * r;
      if (!near(lo, la)) continue;
      add(la, lo, 0.8 + Math.random() * 0.8, 0.75 + Math.random() * 0.25, 2, 1.0012, 0.8);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(P, 3)); g.setAttribute('aSize', new THREE.Float32BufferAttribute(S, 1));
    g.setAttribute('aGlow', new THREE.Float32BufferAttribute(G, 1)); g.setAttribute('aLayer', new THREE.Float32BufferAttribute(L, 1)); g.setAttribute('aFade', new THREE.Float32BufferAttribute(F, 1));
    points = new THREE.Points(g, mat); globe.add(points);
  }).catch(() => {});

  // where the scroll has got to in the section (0 at its top, 1 at its end), eased so it glides
  let p = reduce ? 0.62 : 0, shown = -1;
  const target = () => {
    if (!section || reduce) return 0.62;
    const r = section.getBoundingClientRect(), span = r.height - innerHeight;
    return span > 0 ? clamp(-r.top / span) : 0;
  };
  // the turn that brings Melbourne to the front, north up
  const ty = -Math.PI / 2 - MEL.lon * D, tx = MEL.lat * D;
  let wide = true;

  return {
    resize(w, h, px) { mat.uniforms.uPx.value = px * (mobile ? 0.85 : 1); wide = w / h > 1.1; },
    theme() {},
    update(t) {
      p += (target() - p) * 0.08;
      mat.uniforms.uT.value = t;
      // 1) turning slowly; 2) swinging round to face Melbourne; 3) closing in
      const turn = ease(clamp((p - 0.12) / 0.32)), zoom = ease(clamp((p - 0.38) / 0.5));
      const spin = wrap(t * 0.12 + 2.2);
      // Melbourne sits a little below the middle (so the pin stands up into view), less so as the camera closes in
      const low = 0.16 * (1 - zoom) + 0.045 * zoom;
      globe.rotation.set(0.28 * (1 - turn) + (tx + low) * turn + pointer.y * 0.04 * (1 - zoom), ty + spin * (1 - turn) + pointer.x * 0.06 * (1 - zoom), 0, 'XYZ');
      // further back on a narrow screen, so the globe and then Victoria fit its width; on a wide screen the close-up
      // sits right of the copy
      const far = wide ? 4.4 : 5.6, near = wide ? 1.35 : 1.62;
      camera.position.set(wide ? -0.07 * zoom : 0, wide ? 0 : -0.11 * zoom, far + (near - far) * zoom);   // on a phone, Victoria above the copy
      // beside the copy at first, then filling the screen as it closes in
      root.position.set(wide ? 1.15 * (1 - zoom) : 0, wide ? 0 : 0.8 * (1 - zoom), 0);
      atm.material.uniforms.uK.value = 0.55 * (1 - zoom * 0.8);
      mat.uniforms.uDetail.value = ease(clamp((p - 0.55) / 0.3));
      // the pin rises once the globe has turned
      const pinOn = clamp((p - 0.42) / 0.15);
      beam.material.opacity = pinOn * 0.9; head.material.opacity = pinOn;
      rings.forEach((r, i) => {
        const k = ((t * 0.45 + i / 3) % 1);
        r.scale.setScalar(0.004 + k * (0.05 - 0.035 * zoom)); r.material.opacity = pinOn * (1 - k) * 0.8;
      });
      // the copy that goes with each stretch, and the progress line
      const k = p < 0.36 ? 0 : p < 0.7 ? 1 : 2;
      if (k !== shown && !reduce) { steps.forEach((s, i) => s.classList.toggle('on', i === k)); shown = k; }
      if (bar) bar.style.transform = `scaleX(${p.toFixed(3)})`;
    },
  };
}
