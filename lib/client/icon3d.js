// The service's icon in 3D, beside the title on each service page (components/services/ServicePage.tsx). The icon's own
// lines (its SVG in lib/services.tsx) become glossy tubes in the service's colour, with round ends and joins like the
// flat icon's. It plays on its own: a slow turn back and forth and a gentle float, leaning a little toward the pointer.
// It stops while it's off screen; with reduced motion it rests at a slight angle. Until three.js arrives (or without
// WebGL) the flat icon shows in its place.
export function initIcon3D() {
  var host = document.querySelector('[data-icon3d]'); if (!host) return;
  var src = host.querySelector('svg'); if (!src || !window.WebGLRenderingContext) return;
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  Promise.all([
    import('three'),
    import('three/addons/loaders/SVGLoader.js'),
    import('three/addons/environments/RoomEnvironment.js'),
    import('three/addons/utils/BufferGeometryUtils.js'),
  ]).then(function (m) { build(host, src, m[0], m[1].SVGLoader, m[2].RoomEnvironment, m[3].mergeGeometries, reduce); })
    .catch(function () { /* the flat icon stays */ });
}

function build(host, src, THREE, SVGLoader, RoomEnvironment, mergeGeometries, reduce) {
  var canvas = document.createElement('canvas'), renderer;
  try { renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true }); } catch (e) { return; }
  host.appendChild(canvas);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;

  var scene = new THREE.Scene(), pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  var key = new THREE.DirectionalLight(0xffffff, 1.6); key.position.set(3, 4, 6); scene.add(key);
  var camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100); camera.position.set(0, 0, 10);

  // the icon's lines: each straight piece a tube, with a ball at every point so ends and corners are round
  var R = 0.95, parts = [], up = new THREE.Vector3(0, 1, 0), m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), one = new THREE.Vector3(1, 1, 1);
  var data = new SVGLoader().parse(new XMLSerializer().serializeToString(src));
  data.paths.forEach(function (sp) {
    sp.subPaths.forEach(function (path) {
      var pts = [];
      path.getPoints(24).forEach(function (p) {
        var v = new THREE.Vector3(p.x - 12, 12 - p.y, 0);
        if (!pts.length || pts[pts.length - 1].distanceTo(v) > 0.01) pts.push(v);
      });
      if (pts.length > 2 && pts[0].distanceTo(pts[pts.length - 1]) < 0.01) pts.pop(), pts.push(pts[0].clone());
      pts.forEach(function (a, i) {
        var ball = new THREE.SphereGeometry(R, 20, 14); ball.translate(a.x, a.y, a.z); parts.push(ball);
        var b = pts[i + 1]; if (!b) return;
        var d = new THREE.Vector3().subVectors(b, a), len = d.length(); if (len < 0.01) return;
        var tube = new THREE.CylinderGeometry(R, R, len, 20, 1, true);
        q.setFromUnitVectors(up, d.normalize());
        tube.applyMatrix4(m4.compose(new THREE.Vector3().addVectors(a, b).multiplyScalar(0.5), q, one));
        parts.push(tube);
      });
    });
  });
  if (!parts.length) { canvas.remove(); return; }
  var geo = mergeGeometries(parts.map(function (g) { return g.index ? g.toNonIndexed() : g; }));
  parts.forEach(function (g) { g.dispose(); });
  geo.computeBoundingBox(); var box = geo.boundingBox, size = new THREE.Vector3(), mid = new THREE.Vector3();
  box.getSize(size); box.getCenter(mid); geo.translate(-mid.x, -mid.y, -mid.z);

  // the service's colour; on the light theme a deeper shade of it, so it stands out on the pale card
  var base = new THREE.Color((getComputedStyle(host).getPropertyValue('--c') || '#5b9be6').trim());
  var mat = new THREE.MeshPhysicalMaterial({ roughness: 0.2, metalness: 0.1, clearcoat: 1, clearcoatRoughness: 0.1, emissiveIntensity: 0.1 });
  function tint() {
    var light = document.documentElement.dataset.theme === 'light';
    var c = light ? base.clone().lerp(new THREE.Color('#0f1d30'), 0.38) : base;
    mat.color.copy(c); mat.emissive.copy(c); scene.environmentIntensity = light ? 0.75 : 1;
  }
  tint();
  var icon = new THREE.Mesh(geo, mat), rig = new THREE.Group(); rig.add(icon); scene.add(rig);

  // fit the icon to the frame, whatever its shape
  function fit() {
    var w = host.clientWidth, h = host.clientHeight; if (!w || !h) return;
    renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix();
    var viewH = 2 * camera.position.z * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)), viewW = viewH * camera.aspect;
    // in a wide frame (phones) the card naming the service sits bottom left, so the icon moves a little right of centre
    var wide = camera.aspect > 1.1;
    icon.scale.setScalar((wide ? 0.54 : 0.56) * Math.min(viewW, viewH) / Math.max(size.x, size.y));
    scene.position.x = wide ? viewW * 0.2 : 0;
  }
  fit();
  if ('ResizeObserver' in window) new ResizeObserver(function () { fit(); if (!running) draw(last); }).observe(host);

  // the pointer, as -1…1 across the frame (eased toward)
  var aim = { x: 0, y: 0 }, lean = { x: 0, y: 0 };
  if (!reduce && matchMedia('(hover: hover)').matches) addEventListener('pointermove', function (e) {
    var r = host.getBoundingClientRect();
    aim.x = Math.max(-1, Math.min(1, (e.clientX - (r.left + r.width / 2)) / (r.width * 0.8)));
    aim.y = Math.max(-1, Math.min(1, (e.clientY - (r.top + r.height / 2)) / (r.height * 0.8)));
  }, { passive: true });

  var last = 0;
  function draw(t) {
    var s = t / 1000;
    lean.x += (aim.x - lean.x) * 0.06; lean.y += (aim.y - lean.y) * 0.06;
    rig.rotation.y = (reduce ? 0.4 : Math.sin(s * 0.55) * 0.6) + lean.x * 0.35;
    rig.rotation.x = (reduce ? -0.12 : Math.sin(s * 0.42) * 0.12 - 0.05) + lean.y * 0.25;
    rig.position.y = reduce ? 0 : Math.sin(s * 0.9) * 0.08;
    renderer.render(scene, camera);
  }
  draw(0); host.classList.add('ready');
  new MutationObserver(function () { tint(); if (!running) draw(last); }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  if (reduce) return;

  var running = false;
  function loop(t) { if (!running) return; last = t; draw(t); requestAnimationFrame(loop); }
  function play(on) { if (on === running) return; running = on; if (on) requestAnimationFrame(loop); }
  if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { play(es[0].isIntersecting); }).observe(host);
  else play(true);
}
