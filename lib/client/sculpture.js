// The particle sculpture beside a service's overview (components/services/ServicePage.tsx, the shapes in lib/sculpt.ts).
// A few thousand points drift in from a loose cloud and gather into the service's shape, in the service's colour. They
// part around the pointer, and a click scatters them for a moment before they gather again. three.js only loads once the
// sculpture is near the screen, it stops drawing while off screen, and with reduced motion it just shows the shape.

var R = Math.random, PI = Math.PI;

// each shape fills an array with n points (x, y, z), roughly within a ball of radius 2 around the middle
var SHAPES = {
  globe: function (n, put) {
    for (var i = 0; i < n; i++) {
      var m = i % 10, lat, lon;
      if (m < 3) { lat = ((Math.floor(R() * 9) + .5) / 9 - .5) * PI; lon = R() * 2 * PI; }          // lines of latitude
      else if (m < 6) { lon = Math.floor(R() * 12) / 12 * 2 * PI; lat = (R() - .5) * PI; }            // lines of longitude
      else if (m < 9) { lat = Math.asin(2 * R() - 1); lon = R() * 2 * PI; }                            // the surface
      else { var a = R() * 2 * PI; put(i, Math.cos(a) * 2.1, Math.sin(a) * .55 * 2.1 * .3, Math.sin(a) * 2.1); continue; } // a ring around it
      put(i, 1.5 * Math.cos(lat) * Math.cos(lon), 1.5 * Math.sin(lat), 1.5 * Math.cos(lat) * Math.sin(lon));
    }
  },
  knot: function (n, put) {
    for (var i = 0; i < n; i++) {
      var t = R() * 2 * PI, r = Math.cos(3 * t) + 2.1, j = .16;
      put(i, .58 * r * Math.cos(2 * t) + (R() - .5) * j, .58 * r * Math.sin(2 * t) + (R() - .5) * j, -.58 * Math.sin(3 * t) * 1.3 + (R() - .5) * j);
    }
  },
  funnel: function (n, put) {
    for (var i = 0; i < n; i++) {
      var a = R() * 2 * PI;
      if (i % 6) {
        var h = i % 3 ? Math.floor(R() * 14) / 13 : R(), rad = .2 + 1.45 * Math.pow(h, 1.5);
        put(i, rad * Math.cos(a), -.8 + h * 2.2, rad * Math.sin(a));
      } else { var d = R(); put(i, Math.cos(a) * .12 * R(), -.85 - d * 1.1, Math.sin(a) * .12 * R()); } // what comes out the bottom
    }
  },
  panels: function (n, put) {
    var W = 2.3, H = 1.5;
    for (var i = 0; i < n; i++) {
      var p = i % 3, ox = (p - 1) * .55, oy = (1 - p) * .42 - .05, oz = (p - 1) * .7, x, y, f = R();
      if (f < .4) { // the outline
        var e = R() * 2 * (W + H);
        if (e < W) { x = e; y = 0; } else if (e < W + H) { x = W; y = e - W; } else if (e < 2 * W + H) { x = e - W - H; y = H; } else { x = 0; y = e - 2 * W - H; }
        x -= W / 2; y -= H / 2;
      } else if (f < .5) { x = (R() - .5) * W; y = H / 2 - .22; } // the bar along the top
      else if (f < .54) { var k = Math.floor(R() * 3), a = R() * 2 * PI; x = -W / 2 + .14 + k * .13 + Math.cos(a) * .035; y = H / 2 - .11 + Math.sin(a) * .035; } // the three dots
      else if (f < .76) { x = -W / 2 + .15 + R() * (W * .48); y = H / 2 - .4 - R() * .5; } // a picture block
      else { var l = Math.floor(R() * 4); x = -W / 2 + .15 + R() * (W - .3) * (l === 3 ? .5 : .9); y = -H / 2 + .2 + l * .14; } // lines of text
      put(i, x + ox, y + oy, oz);
    }
  },
  wave: function (n, put) {
    for (var i = 0; i < n; i++) {
      var x, z;
      if (i % 2) { x = (Math.floor(R() * 26) / 25 - .5) * 4; z = (R() - .5) * 2.8; } else { x = (R() - .5) * 4; z = (Math.floor(R() * 16) / 15 - .5) * 2.8; }
      put(i, x, .38 * Math.sin(x * 1.5 + z * .9) * Math.cos(z * 1.2) + x * .16, z);
    }
  },
  rings: function (n, put) {
    for (var i = 0; i < n; i++) {
      var a = R() * 2 * PI, k = i % 7;
      if (k === 6) { var r0 = R() * .14; put(i, Math.cos(a) * r0, Math.sin(a) * r0, 0); continue; } // the bullseye
      var r = .35 + k * .3 + (R() - .5) * .03;
      put(i, Math.cos(a) * r, Math.sin(a) * r, (k % 2 ? .08 : -.08) * (5 - k));
    }
  },
  lattice: function (n, put) {
    var g = [-1.1, -.37, .37, 1.1];
    for (var i = 0; i < n; i++) {
      var ax = i % 3, u = g[Math.floor(R() * 4)], v = g[Math.floor(R() * 4)], t = (R() * 2 - 1) * 1.1;
      if (R() < .25) t = g[Math.floor(R() * 4)] + (R() - .5) * .06; // brighter where the lines meet
      put(i, ax === 0 ? t : u, ax === 1 ? t : (ax === 0 ? u : v), ax === 2 ? t : v);
    }
  },
  helix: function (n, put) {
    for (var i = 0; i < n; i++) {
      var t = R(), y = (t - .5) * 3.6, a = t * 2.4 * 2 * PI, j = .05;
      if (i % 10 < 7) { var s = i % 2 ? PI : 0; put(i, .85 * Math.cos(a + s) + (R() - .5) * j, y, .85 * Math.sin(a + s) + (R() - .5) * j); }
      else { var tr = Math.floor(t * 22) / 22, yr = (tr - .5) * 3.6, ar = tr * 2.4 * 2 * PI, q = R() * 2 - 1; put(i, .85 * Math.cos(ar) * q, yr, .85 * Math.sin(ar) * q); } // the rungs
    }
  },
  bars: function (n, put) {
    for (var i = 0; i < n; i++) {
      if (i % 8 === 0) { put(i, (R() - .5) * 3.4, -1.1, (R() - .5) * 1.6); continue; } // the floor
      var bx = Math.floor(R() * 5), bz = Math.floor(R() * 2), h = .45 + bx * .42 + bz * .15, cx = -1.4 + bx * .7, cz = -.35 + bz * .7, w = .2;
      var e = Math.floor(R() * 12), t = R(), x, y, z;
      if (e < 4) { x = cx + (e & 1 ? w : -w); z = cz + (e & 2 ? w : -w); y = -1.1 + t * h; }               // the uprights
      else if (e < 8) { y = -1.1 + (e < 6 ? 0 : h); x = cx + (t * 2 - 1) * w; z = cz + (e & 1 ? w : -w); }  // along the front and back
      else { y = -1.1 + (e < 10 ? 0 : h); z = cz + (t * 2 - 1) * w; x = cx + (e & 1 ? w : -w); }            // along the sides
      put(i, x, y, z);
    }
  },
  links: function (n, put) {
    for (var i = 0; i < n; i++) {
      var a = R() * 2 * PI, b = R() * 2 * PI, rr = 1 + .14 * Math.cos(b), w = .14 * Math.sin(b);
      if (i % 2) put(i, -.55 + rr * Math.cos(a), rr * Math.sin(a), w);
      else put(i, .55 + rr * Math.cos(a), w, rr * Math.sin(a));
    }
  },
};

var VERT = [
  'attribute vec3 aStart; attribute float aRand;',
  'uniform float uP, uTime, uSize, uPush, uPx; uniform vec2 uMouse;',
  'varying float vA;',
  'void main() {',
  '  float p = clamp(uP * 1.3 - aRand * .3, 0., 1.); p = p * p * (3. - 2. * p);',
  '  vec3 pos = mix(aStart, position, p);',
  '  pos += normalize(position + 1e-4) * sin(uTime * 1.3 + aRand * 6.2832) * .022;',
  '  vec4 mv = modelViewMatrix * vec4(pos, 1.);',
  '  vec4 cp = projectionMatrix * mv;',
  '  vec2 d = cp.xy / cp.w - uMouse; float f = smoothstep(.38, 0., length(d)) * uPush;',
  '  cp.xy += normalize(d + 1e-5) * f * .2 * cp.w;',
  '  gl_Position = cp;',
  '  gl_PointSize = uSize * uPx * (.55 + aRand * .9) * (6. / -mv.z);',
  '  vA = (.6 + .5 * aRand) * (.35 + .65 * p) * (1. + f * 1.4);',
  '}',
].join('\n');
var FRAG = [
  'uniform vec3 uColor; varying float vA;',
  'void main() { float r = length(gl_PointCoord - .5); if (r > .5) discard; gl_FragColor = vec4(uColor, pow(1. - r * 2., 1.2) * vA); }',
].join('\n');

export function initSculpture() {
  var box = document.querySelector('.sculpt');
  if (!box || !('IntersectionObserver' in window)) { if (box) box.classList.add('off'); return; }
  var near = new IntersectionObserver(function (es) {
    if (!es[0].isIntersecting) return;
    near.disconnect();
    import('three').then(function (THREE) { build(THREE, box); }).catch(function () { box.classList.add('off'); });
  }, { rootMargin: '400px 0px' });
  near.observe(box);
}

function build(THREE, box) {
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches, root = document.documentElement;
  var renderer;
  try { renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false, powerPreference: 'low-power' }); }
  catch (e) { box.classList.add('off'); return; }
  var px = Math.min(devicePixelRatio || 1, 1.75);
  renderer.setPixelRatio(px);
  renderer.setClearColor(0x000000, 0);
  box.appendChild(renderer.domElement);

  var n = innerWidth < 700 ? 2600 : 4200;
  var target = new Float32Array(n * 3), start = new Float32Array(n * 3), rand = new Float32Array(n);
  (SHAPES[box.dataset.shape] || SHAPES.globe)(n, function (i, x, y, z) { target[i * 3] = x; target[i * 3 + 1] = y; target[i * 3 + 2] = z; });
  for (var i = 0; i < n; i++) {
    var u = R() * 2 - 1, a = R() * 2 * PI, r = 3 + R() * 3, s = Math.sqrt(1 - u * u);
    start[i * 3] = r * s * Math.cos(a); start[i * 3 + 1] = r * u; start[i * 3 + 2] = r * s * Math.sin(a);
    rand[i] = R();
  }
  var geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(target, 3));
  geo.setAttribute('aStart', new THREE.BufferAttribute(start, 3));
  geo.setAttribute('aRand', new THREE.BufferAttribute(rand, 1));
  var uni = {
    uP: { value: reduce ? 1 : 0 }, uTime: { value: 0 }, uSize: { value: 3.6 }, uPush: { value: 0 }, uPx: { value: px },
    uMouse: { value: new THREE.Vector2(9, 9) }, uColor: { value: new THREE.Color() },
  };
  var mat = new THREE.ShaderMaterial({ uniforms: uni, vertexShader: VERT, fragmentShader: FRAG, transparent: true, depthWrite: false });
  var pts = new THREE.Points(geo, mat);
  var group = new THREE.Group(); group.add(pts);
  group.rotation.x = box.dataset.shape === 'rings' ? -.5 : box.dataset.shape === 'wave' ? .45 : .18;
  var scene = new THREE.Scene(); scene.add(group);
  var camera = new THREE.PerspectiveCamera(38, 1, .1, 50); camera.position.set(0, 0, 5.9);

  // the colour follows the service and the theme: glowing on dark, solid on light
  function paint() {
    var light = root.dataset.theme === 'light', c = new THREE.Color(getComputedStyle(document.body).getPropertyValue('--c').trim() || '#5b9be6');
    if (light) c.lerp(new THREE.Color('#0b1520'), .35); else c.lerp(new THREE.Color('#e0fbfc'), .3); // a little lighter on dark, or dark blues barely show
    uni.uColor.value.copy(c);
    mat.blending = light ? THREE.NormalBlending : THREE.AdditiveBlending; uni.uSize.value = light ? 3 : 3.6; mat.needsUpdate = true;
    draw();
  }
  function size() {
    var w = box.clientWidth, h = box.clientHeight; if (!w || !h) return;
    renderer.setSize(w, h, false); camera.aspect = w / h; camera.position.z = w < 500 ? 6.5 : 5.9; camera.updateProjectionMatrix(); draw();
  }
  function draw() { renderer.render(scene, camera); }
  paint(); size();
  new MutationObserver(paint).observe(root, { attributes: true, attributeFilter: ['data-theme'] });
  if ('ResizeObserver' in window) new ResizeObserver(size).observe(box); else addEventListener('resize', size);
  box.classList.add('ready');
  if (reduce) return;

  // the pointer parts the points and tilts the shape; a click scatters them
  var mx = 9, my = 9, tilt = { x: 0, y: 0 }, aim = { x: 0, y: 0 }, push = 0, over = false, goal = 1, scatterAt = -1;
  box.addEventListener('pointermove', function (e) {
    var b = box.getBoundingClientRect(); mx = (e.clientX - b.left) / b.width * 2 - 1; my = -((e.clientY - b.top) / b.height * 2 - 1);
    aim.x = my * .22; aim.y = mx * .35; over = true;
  });
  box.addEventListener('pointerleave', function () { over = false; aim.x = 0; aim.y = 0; });
  box.addEventListener('click', function () { goal = .12; scatterAt = performance.now(); });

  var on = false, last = 0, spin = 0, raf = 0;
  function frame(t) {
    raf = requestAnimationFrame(frame);
    var dt = Math.min((t - (last || t)) / 1000, .05); last = t;
    if (scatterAt > 0 && t - scatterAt > 420) { goal = 1; scatterAt = -1; }
    uni.uP.value += (goal - uni.uP.value) * (goal < 1 ? .14 : .022);
    uni.uTime.value = t / 1000;
    push += ((over ? 1 : 0) - push) * .08; uni.uPush.value = push;
    uni.uMouse.value.set(mx, my);
    spin += dt * .16;
    tilt.x += (aim.x - tilt.x) * .05; tilt.y += (aim.y - tilt.y) * .05;
    pts.rotation.set(tilt.x, spin + tilt.y, 0);
    draw();
  }
  function run(v) {
    if (v === on) return; on = v;
    if (on) { last = 0; raf = requestAnimationFrame(frame); } else cancelAnimationFrame(raf);
  }
  new IntersectionObserver(function (es) { run(es[0].isIntersecting && !document.hidden); }).observe(box);
  document.addEventListener('visibilitychange', function () { if (document.hidden) run(false); else { var b = box.getBoundingClientRect(); run(b.bottom > 0 && b.top < innerHeight); } });
}
