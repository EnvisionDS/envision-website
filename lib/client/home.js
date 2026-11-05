// The homepage's behaviour: the intro, the torch, the headlines, the nav, the pop-up, the finder, the growth planner,
// the services stack and the motion. Every part is one block below, in the order the page used to load them.
import { initContactForm } from './contact-form';
import { initMegaMenu } from './mega';

export function initHome() {
  (function () {
    const box = document.getElementById('introWord');
    const intro = document.getElementById('intro');
    const stage = document.getElementById('stage');
    let resolveIntro;
    window.introDone = new Promise(res => { resolveIntro = res; });
    // coming back from a service page, or arriving on a link to a section, skips the opening
    let skipIntro = false;
    try { skipIntro = sessionStorage.getItem('envision-skip-intro') === '1'; sessionStorage.removeItem('envision-skip-intro'); } catch (e) {}
    if (skipIntro || /^#[\w-]+$/.test(location.hash)) {
      intro.classList.add('gone');
      const arrive = () => {
        document.getElementById('logo').classList.remove('waiting');
        const t = location.hash && document.getElementById(location.hash.slice(1)), html = document.documentElement;
        if (t) { html.style.scrollBehavior = 'auto'; t.scrollIntoView(); requestAnimationFrame(() => { html.style.scrollBehavior = ''; }); }
        else document.dispatchEvent(new Event('intro:dock'));          // back to where you were
        resolveIntro();
      };
      if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', arrive); else arrive();
      return;
    }

    // the live word: one box per letter, laid out exactly like the nav logo so the dock lands on it
    [...'envision'].forEach(ch => box.appendChild(Object.assign(document.createElement('span'), { textContent: ch })));

    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {    // no motion: the word is simply there, then docks
      intro.classList.add('mark-still'); setTimeout(dock, 900); return;
    }

    // 1. THE MARK: build the logo in the middle of the screen (a 100 x 100 drawing, the same as favicon.svg)
    intro.classList.add('mark-on');
    const NS = 'http://www.w3.org/2000/svg', EASE_OUT = 'cubic-bezier(.2,.8,.2,1)', EASE_IN = 'cubic-bezier(.6,0,.8,.4)';
    const markEl = Object.assign(document.createElement('div'), { id: 'introMark' });
    const glow = Object.assign(document.createElement('div'), { className: 'glow' });
    const spin = Object.assign(document.createElement('div'), { className: 'spin' });   // turns the disc, arms and rings together
    const svg = document.createElementNS(NS, 'svg'); svg.setAttribute('viewBox', '0 0 100 100');
    // night version of the logo, to match the site: a dark disc with a fine outline, and arms that light up from the
    // centre outwards in the site's blue-to-ice gradient (the gradient is drawn along the top arm and turns with each copy)
    svg.innerHTML = '<defs><radialGradient id="imDisc"><stop offset="0" stop-color="#17202d"/><stop offset="1" stop-color="#0c1016"/></radialGradient>'
      + '<linearGradient id="imArm" gradientUnits="userSpaceOnUse" x1="50" y1="47" x2="50" y2="14"><stop offset="0" stop-color="#1561ad"/><stop offset=".5" stop-color="#5b9be6"/><stop offset="1" stop-color="#8fd3f4"/></linearGradient>'
      + '<filter id="imGlow" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="1.4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>'
      + '<circle cx="50" cy="50" r="48" fill="url(#imDisc)" stroke="#3d5a80" stroke-width=".8"/><g filter="url(#imGlow)"></g>';
    const disc = svg.querySelector('circle'), armLayer = svg.querySelector('g[filter]'), arms = [], rings = [];
    const RING = { x: 44.7, y: 13.5, d: 16.4, w: 3.6 };   // the top arm's ring (centre, outer size, line width); the other seven turn in 45° steps
    for (let i = 0; i < 8; i++) {
      const g = document.createElementNS(NS, 'g'); g.setAttribute('transform', `rotate(${i * 45} 50 50)`);
      g.innerHTML = '<g><polygon points="50.3,45 53.6,30 57.6,31.2" fill="url(#imArm)"/><polyline points="55.6,30.6 48,18.7" fill="none" stroke="url(#imArm)" stroke-width="3.6" stroke-linecap="round"/></g>';
      armLayer.appendChild(g); arms.push(g.firstChild);
      const t = i * Math.PI / 4, ox = RING.x - 50, oy = RING.y - 50;
      const cx = 50 + ox * Math.cos(t) - oy * Math.sin(t), cy = 50 + ox * Math.sin(t) + oy * Math.cos(t);
      const ring = Object.assign(document.createElement('div'), { className: 'intro-ring' });
      Object.assign(ring.style, { left: (cx - RING.d / 2) + '%', top: (cy - RING.d / 2) + '%', width: RING.d + '%', height: RING.d + '%',
                                  borderWidth: `calc(var(--marksz) * ${RING.w / 100})` });
      rings.push(ring);
    }
    [disc, ...arms].forEach(el => { el.style.transformOrigin = '50px 50px'; });   // grow and shrink from the centre of the disc
    spin.append(svg, ...rings); markEl.append(glow, spin); stage.insertBefore(markEl, box);

    // the build: disc rises, arms grow out one after another, a ring pops onto each, and the whole mark turns into place
    glow.animate([{ opacity: 0, transform: 'scale(.6)' }, { opacity: 1, transform: 'scale(1)' }], { duration: 1000, easing: EASE_OUT, fill: 'both' });
    disc.animate([{ opacity: 0, transform: 'scale(.4)' }, { opacity: 1, transform: 'scale(1.05)', offset: .7 }, { opacity: 1, transform: 'scale(1)' }], { duration: 700, easing: EASE_OUT, fill: 'both' });
    arms.forEach((a, i) => a.animate([{ transform: 'scale(0)' }, { transform: 'scale(1)' }], { duration: 450, delay: 300 + i * 45, easing: EASE_OUT, fill: 'both' }));
    rings.forEach((r, i) => r.animate([{ opacity: 0, transform: 'scale(0)' }, { opacity: 1, transform: 'scale(1.2)', offset: .65 }, { opacity: 1, transform: 'scale(1)' }],
                                     { duration: 380, delay: 640 + i * 45, easing: EASE_OUT, fill: 'both' }));
    const turn = spin.animate([{ transform: 'rotate(-110deg)' }, { transform: 'rotate(0deg)' }], { duration: 1900, easing: 'cubic-bezier(.3,.7,.25,1)', fill: 'both' });

    // let go once the mark has finished turning (waiting on the animation itself, not a clock, so a slow or
    // background tab can't start the release before the logo is built), and once the word's font is in so its
    // letters can be measured
    const font = document.fonts && document.fonts.load ? document.fonts.load('700 1em Sora') : Promise.resolve();
    Promise.all([Promise.race([font, new Promise(r => setTimeout(r, 1200))]), turn.finished]).then(() => setTimeout(release, 50));
    // safety net: if the browser stops drawing frames (some background or power-saving states), the animations stall
    // and their 'finished' never comes, so after a few seconds on screen, jump each step to its end and carry on
    const rescue = () => setTimeout(() => {
      if (document.hidden) { document.addEventListener('visibilitychange', rescue, { once: true }); return; }
      if (intro.classList.contains('docking')) return;
      intro.querySelectorAll('*').forEach(el => el.getAnimations().forEach(a => { try { a.finish(); } catch (e) {} }));
      rescue();                                              // the next step's animations may now be waiting too
    }, 3500);
    setTimeout(rescue, 1500);

    // 2. THE RELEASE: the disc and arms fold away; each ring flies to a letter and becomes it
    function release() {
      const sr = stage.getBoundingClientRect(), fs = parseFloat(getComputedStyle(box).fontSize);
      const letters = [...box.children];
      // pair rings with letters left to right, so the rings on the left of the logo become the first letters
      const from = rings.map(r => { const b = r.getBoundingClientRect(); return { x: b.left + b.width / 2 - sr.left, y: b.top + b.height / 2 - sr.top, d: b.width, bw: r.style.borderWidth }; })
                        .sort((a, b) => a.x - b.x);
      rings.forEach(r => { r.style.visibility = 'hidden'; });
      arms.forEach((a, i) => a.animate([{ transform: 'scale(1)' }, { transform: 'scale(0)' }], { duration: 320, delay: i * 20, easing: EASE_IN, fill: 'forwards' }));
      const folded = disc.animate([{ opacity: 1, transform: 'scale(1)' }, { opacity: 0, transform: 'scale(.2)' }], { duration: 560, delay: 120, easing: EASE_IN, fill: 'forwards' });
      const faded = glow.animate([{ opacity: 1, transform: 'scale(1)' }, { opacity: 0, transform: 'scale(1.7)' }], { duration: 900, easing: 'ease-out', fill: 'forwards' });

      const FLY = 720, STEP = 40, landed = [];
      letters.forEach((letter, k) => {
        const f = from[k], b = letter.getBoundingClientRect();
        const tx = b.left + b.width / 2 - sr.left, ty = b.top + b.height * .58 - sr.top;   // land on the body of the letter (below the cap line)
        const end = fs * .5 / f.d;                                                           // shrink to about the letter's x-height
        const ring = Object.assign(document.createElement('div'), { className: 'intro-ring' });
        Object.assign(ring.style, { left: (f.x - f.d / 2) + 'px', top: (f.y - f.d / 2) + 'px', width: f.d + 'px', height: f.d + 'px', borderWidth: f.bw });
        stage.appendChild(ring);
        const dx = tx - f.x, dy = ty - f.y, lift = -fs * .35;                                // a slight arc on the way
        ring.animate([{ transform: 'translate(0,0) scale(1)' },
                      { transform: `translate(${dx * .55}px, ${dy * .55 + lift}px) scale(${(1 + end) / 2})`, offset: .55 },
                      { transform: `translate(${dx}px, ${dy}px) scale(${end})` }],
                     { duration: FLY, delay: k * STEP, easing: 'cubic-bezier(.55,0,.3,1)', fill: 'forwards' });
        // as it lands, the ring tightens and fades while its letter sharpens into place
        const landAt = k * STEP + FLY - 140;
        ring.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 260, delay: landAt, easing: 'ease-out', fill: 'forwards' }).onfinish = () => ring.remove();
        landed.push(letter.animate([{ opacity: 0, transform: 'scale(.55)', filter: 'blur(6px)' }, { opacity: 1, transform: 'scale(1)', filter: 'blur(0)' }],
                                   { duration: 420, delay: landAt, easing: EASE_OUT, fill: 'forwards' }).finished);
      });
      Promise.all([folded.finished, faded.finished]).then(() => markEl.remove());
      Promise.all(landed).then(() => setTimeout(dock, 370));   // a beat with the whole word, then it docks
    }

    // 4. THE DOCK: the word flies into the nav logo (FLIP: measure both, then one transform does the journey)
    function dock() {
      const from = box.getBoundingClientRect();      // FIRST: the big word, centre of screen
      const logo = document.getElementById('logo');  // (looked up here: the sidebar is further down the page than this script)
      const to   = document.getElementById('logoText').getBoundingClientRect();   // LAST: the small word (letters only, not the icon)
      const sx = to.width / from.width, sy = to.height / from.height;   // INVERT: how much smaller (width and height separately, so it can't be off by a pixel)
      const dx = to.left - from.left, dy = to.top - from.top;

      document.dispatchEvent(new Event('intro:dock'));   // (the page can now jump to a remembered scroll position, unseen behind the backdrop)
      intro.classList.add('docking');                // (in light mode the word turns dark on the way)
      box.classList.add('dock');                     // PLAY: one transform does the whole journey
      box.style.transform = `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})`;

      const lightMode = document.documentElement.getAttribute('data-theme') === 'light';
      setTimeout(() => intro.classList.add('unveil'), lightMode ? 250 : 450);   // backdrop fades while it's still travelling (sooner in light mode, as the word turns dark)
      setTimeout(resolveIntro, 700);                          // homepage animations begin
      // the moment the journey ends, show the real logo and drop the intro layer in the same frame
      let landed = false;
      const land = () => { if (landed) return; landed = true; logo.classList.remove('waiting'); intro.classList.add('gone'); const m = document.getElementById('introMark'); if (m) m.remove(); };
      box.addEventListener('transitionend', e => { if (e.propertyName === 'transform') land(); });
      setTimeout(land, 1300);   // safety net
    }
  })();

  // ================= THE TORCH (JS half): follow the cursor, with a little lag so it feels like a held light =================
  (function () {
    const torch = document.getElementById('torch');
    if (!torch || matchMedia('(hover: none)').matches) return;
    const target = { x: -1000, y: -1000 }, pos = { x: -1000, y: -1000 };
    let seen = false;
    addEventListener('pointermove', e => { target.x = e.clientX; target.y = e.clientY; if (!seen) { seen = true; pos.x = e.clientX; pos.y = e.clientY; } });
    document.addEventListener('pointerleave', () => { target.x = -1000; target.y = -1000; });
    (function tick() {
      pos.x += (target.x - pos.x) * 0.18;           // lerp: the beam trails the cursor slightly
      pos.y += (target.y - pos.y) * 0.18;
      torch.style.setProperty('--mx', pos.x + 'px');
      torch.style.setProperty('--my', pos.y + 'px');
      requestAnimationFrame(tick);
    })();
  })();

  // ================= ROTATING HEADLINES: read by torchlight =================
  // Each title is a list of pieces; a piece marked g:true is painted with the brand gradient. A soft light travels across
  // the title letter by letter, like a torch, and each letter appears as the light reaches it. After a pause a cursor
  // appears at the end and the title is backspaced away, letter by letter, before the light reads in the next. The first is the brand line;
  // the rest are one hook line for each main group of services.
  (async function () {
    const h1 = document.getElementById('slot');
    const TITLES = [
      Object.assign([{ t: 'We bring your ' }, { t: 'visions', g: true }, { t: ' to life, and the ' }, { t: 'customers', g: true }, { t: ' to you.' }],
        { label: null }),
      Object.assign([{ t: 'A website that turns ' }, { t: 'visitors', g: true }, { t: ' into ' }, { t: 'enquiries.', g: true }],
        { label: ['Website design', 'Conversion'] }),
      Object.assign([{ t: 'Be ' }, { t: 'found', g: true }, { t: ' first, in the suburbs that ' }, { t: 'matter.', g: true }],
        { label: ['SEO', 'Location strategy'] }),
      Object.assign([{ t: 'Ads and socials that reach people ' }, { t: 'ready to buy.', g: true }],
        { label: ['Paid ads', 'Social media'] }),
      Object.assign([{ t: 'Every enquiry ' }, { t: 'followed up', g: true }, { t: ', even after hours.' }],
        { label: ['Email & CRM', 'Automation'] }),
    ];   // label: the services a title speaks for, shown under the fixed label above the headline (none for the first)
    const HOLD = 3800, STEP = 42, FADE = 380;
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const torch = Object.assign(document.createElement('i'), { className: 'slot-torch' });
    const caret = Object.assign(document.createElement('i'), { className: 'slot-caret' });
    torch.setAttribute('aria-hidden', 'true'); caret.setAttribute('aria-hidden', 'true');
    let chars = [];
    // one <span> per letter, all unseen to begin with, inside a block that the headline box centres
    function build(title, box, hidden) {
      const inner = Object.assign(document.createElement('span'), { className: 'slot-in' }), letters = [];
      title.forEach(piece => {
        const wrap = piece.g ? Object.assign(document.createElement('span'), { className: 'grad' }) : inner;
        [...piece.t].forEach(ch => { const sp = Object.assign(document.createElement('span'), { textContent: ch }); if (hidden) sp.className = 'hide'; wrap.appendChild(sp); letters.push(sp); });
        if (piece.g) inner.appendChild(wrap);
      });
      box.textContent = ''; box.appendChild(inner);
      return letters;
    }
    function layout(title) { chars = build(title, h1, true); h1.appendChild(torch); h1.appendChild(caret); }
    const at = sp => { const b = h1.getBoundingClientRect(), r = sp.getBoundingClientRect(); return `translate(${r.left - b.left + r.width / 2}px, ${r.top - b.top + r.height / 2}px)`; };
    // the torch travels across the title; each letter lights up as it passes, and stays lit
    async function read() {
      torch.style.transition = 'none'; torch.style.transform = at(chars[0]); torch.offsetWidth; torch.style.transition = '';
      torch.classList.add('on');
      for (const sp of chars) {
        torch.style.transform = at(sp);
        sp.classList.remove('hide'); sp.classList.add('lit'); setTimeout(() => sp.classList.remove('lit'), 300);
        await sleep(sp.textContent === ' ' ? STEP * 1.5 : STEP);
      }
      torch.classList.remove('on');
    }
    // the cursor sits just after a letter (or before the first one)
    function place(sp, before) {
      const b = h1.getBoundingClientRect(), r = sp.getBoundingClientRect();
      caret.style.height = r.height * .82 + 'px';
      caret.style.transform = `translate(${(before ? r.left : r.right) - b.left}px, ${r.top - b.top + r.height * .09}px)`;
    }
    // backspace: the cursor blinks at the end for a moment, then the letters go one by one from the last
    async function erase() {
      const last = chars.length - 1;
      place(chars[last]); caret.classList.add('on');
      await sleep(700);
      caret.classList.add('typing');
      for (let k = last; k >= 0; k--) {
        chars[k].classList.add('gone');
        if (k > 0) place(chars[k - 1]); else place(chars[0], true);
        await sleep(chars[k].textContent === ' ' ? 45 : 28);
      }
      caret.classList.remove('typing');
      await sleep(380);
      caret.classList.remove('on');
    }
    // the services line under the fixed label: fades out with the old headline, and in with the new one
    const svc = document.getElementById('heroSvc');
    function relabel(label) {
      if (!svc) return;
      svc.classList.remove('on');
      if (!label) return;
      setTimeout(() => { svc.innerHTML = label.map(t => `<span>${t}</span>`).join('<i></i>'); svc.classList.add('on'); }, FADE + 900);
    }
    // Reserve the height of the tallest title so the copy around the headline never moves between titles.
    // The hidden copy is absolutely placed inside the hero column, so it gets the same width the real headline would.
    function reserve() {
      const ghost = h1.cloneNode(false);
      ghost.removeAttribute('id'); ghost.setAttribute('aria-hidden', 'true');
      Object.assign(ghost.style, { position: 'absolute', left: '0', top: '0', visibility: 'hidden', pointerEvents: 'none', minHeight: '0' });
      h1.parentNode.appendChild(ghost);
      let tallest = 0;
      TITLES.forEach(title => { build(title, ghost, false); tallest = Math.max(tallest, ghost.getBoundingClientRect().height); });
      ghost.remove();
      h1.style.minHeight = Math.ceil(tallest) + 'px';
    }
    let resizing = 0;
    addEventListener('resize', () => { cancelAnimationFrame(resizing); resizing = requestAnimationFrame(reserve); });

    layout(TITLES[0]);                                         // the first title waits, unseen, behind the intro…
    reserve();
    await window.introDone;
    await document.fonts.ready;                                // measure only once the real font is in, so the torch lands on each letter
    reserve();
    await sleep(450);
    for (let i = 0, first = true; ; i = (i + 1) % TITLES.length, first = false) {   // …then each title is read, held, and swapped for the next
      if (!first) { layout(TITLES[i]); await sleep(300); }
      await read();
      await sleep(HOLD);
      relabel(TITLES[(i + 1) % TITLES.length].label);            // the services line changes over while the title is backspaced
      await erase();
    }
  })();

  // ================= LIGHT CHAPTER FADE =================
  // Once the light section's top passes the middle of the screen, --t is set to 1 and the whole section eases from
  // dark to light in under a second (--t is registered with @property so it can be animated). It goes back to 0,
  // and fades back to dark, once the section's bottom rises above 40% of the screen or you scroll back up.
  (function () {
    const secs = [...document.querySelectorAll('section.block.light')]; if (!secs.length) return;
    let ticking = false;
    function update() {
      ticking = false;
      const H = innerHeight;
      const on = secs.some(sec => { const r = sec.getBoundingClientRect(); return r.top <= H * 0.5 && r.bottom >= H * 0.4; });
      document.body.style.setProperty('--t', on ? 1 : 0);
    }
    addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    addEventListener('resize', update); update();
  })();

  // ================= THE HERO MARK DRAWS ITSELF once the intro word has docked into the nav =================
  (function () {
    const mark = document.getElementById('heroMark'); if (!mark) return;
    (window.introDone || Promise.resolve()).then(() => setTimeout(() => mark.classList.add('drawn'), 250));
  })();

  // ================= NAV HIGHLIGHT: the link for the part of the page you're in is underlined =================
  // Each link owns everything from its own target down to the next linked target: Home covers the hero and
  // "What your audience is thinking"; Our work covers the client sites and the reviews below them.
  // A link takes over the moment its section's top slides under the nav bar, which is also where a click lands it.
  (function () {
    const nav = document.querySelector('nav');
    const links = [...document.querySelectorAll('#topLinks a[href^="#"]')];
    const targets = links.map(a => document.querySelector(a.getAttribute('href')));
    let ticking = false;
    function update() {
      ticking = false;
      const line = nav.offsetHeight + 2;
      let cur = -1, best = -Infinity;
      targets.forEach((el, i) => { const t = el ? el.getBoundingClientRect().top : Infinity; if (t <= line && t > best) { best = t; cur = i; } });
      links.forEach((a, i) => a.classList.toggle('on', i === cur));
    }
    addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    addEventListener('resize', update); update();
  })();

  // ================= NAV, PAST THE HERO: once the hero has scrolled out from under the bar, it turns white with blue
  // words; back over the hero it returns to normal =================
  (function () {
    const nav = document.querySelector('nav'), hero = document.getElementById('hero');
    nav.classList.remove('blue');
    if (!hero) return;
    let on = null, queued = false;
    function check() {
      queued = false;
      const past = hero.getBoundingClientRect().bottom <= nav.offsetHeight;
      if (past !== on) { on = past; nav.classList.toggle('scrolled', past); }
    }
    addEventListener('scroll', () => { if (!queued) { queued = true; requestAnimationFrame(check); } }, { passive: true });
    check();
  })();

  // ================= REMEMBER WHERE YOU WERE =================
  // The scroll position is saved as you go. On a refresh the intro plays as normal, and the moment
  // it starts docking (while the page is still hidden behind the intro's backdrop) the page jumps
  // back to where you were — so when the backdrop fades you're on the same section, not the top.
  (function () {
    const KEY = 'envision-scroll';
    try { history.scrollRestoration = 'manual'; } catch (e) {}           // stop the browser doing its own (badly-timed) restore
    let saved = 0;
    try { saved = Number(sessionStorage.getItem(KEY)) || 0; } catch (e) {}
    window.scrollTo(0, 0);                                                 // the intro always starts from a still page
    let t;
    const save = () => { try { sessionStorage.setItem(KEY, String(window.scrollY)); } catch (e) {} };
    addEventListener('scroll', () => { clearTimeout(t); t = setTimeout(save, 150); }, { passive: true });
    addEventListener('pagehide', save); addEventListener('beforeunload', save);   // and right before a refresh, just in case
    document.addEventListener('intro:dock', () => {
      if (saved < 10) return;
      const html = document.documentElement, prev = html.style.scrollBehavior;
      html.style.scrollBehavior = 'auto';                                  // jump, don't glide
      window.scrollTo(0, Math.min(saved, html.scrollHeight - innerHeight));
      requestAnimationFrame(() => { html.style.scrollBehavior = prev; });
    }, { once: true });
  })();

  // ================= CONTACT POP-UP (behaviour) =================
  // /contact is the contact page. Every link to it on this page opens its frame here instead, as a pop-up: the frame
  // is loaded in from /contact (once, ahead of time), and while it's open the address bar shows /contact, so the
  // back button closes it and a reload lands on the page itself. Esc, the ×, or clicking the backdrop closes it too.
  // The form's own behaviour is in contact.js. If the frame can't be loaded, the link simply goes to the page.
  // (the enquiry form's behaviour is imported from contact-form.js)

  (function () {
    const modal = document.getElementById('modal'), morph = document.getElementById('morph');
    let frame = document.getElementById('contactFrame');
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    let lastFocus = null, origin = null, timers = [], loading = null, pushed = false;
    const setBox = (el, r) => Object.assign(el.style, { top: r.top + 'px', left: r.left + 'px', width: r.width + 'px', height: r.height + 'px' });
    const FRAME_BG = '#0c1119';
    const clearTimers = () => { timers.forEach(clearTimeout); timers = []; };

    // fetch /contact and swap its frame in for the empty one here
    function load() {
      if (!loading) loading = fetch('/contact').then(r => { if (!r.ok) throw 0; return r.text(); }).then(html => {
        const src = new DOMParser().parseFromString(html, 'text/html').getElementById('contactFrame');
        if (!src) throw 0;
        const fresh = document.importNode(src, true);
        frame.replaceWith(fresh); frame = fresh;
        initContactForm(frame);
        frame.querySelector('.close').addEventListener('click', e => { e.preventDefault(); close(); });
        return frame;
      }).catch(() => { loading = null; return null; });
      return loading;
    }
    const firstField = () => frame.querySelector('input');

    // OPEN: (1) freeze the page, (2) park the pill exactly on the clicked button, (3) let it grow into the frame's box,
    // (4) fade the real frame in over it, (5) hide the pill.
    function show(btn) {
      clearTimers();
      lastFocus = document.activeElement; origin = btn || null;
      modal.classList.add('open'); modal.setAttribute('aria-hidden', 'false'); document.body.classList.add('modal-open');
      if (reduce || !btn) { modal.classList.add('show'); timers.push(setTimeout(() => firstField().focus(), 300)); return; }
      const from = btn.getBoundingClientRect();                       // measured after the scrollbar is gone, so it lines up exactly
      morph.style.transition = 'none';
      setBox(morph, from); Object.assign(morph.style, { borderRadius: '999px', background: '#5f83a8', opacity: 1 });
      btn.classList.add('lift');
      morph.offsetWidth;                                               // force the browser to paint the start position
      morph.style.transition = '';
      setBox(morph, frame.getBoundingClientRect());
      Object.assign(morph.style, { borderRadius: '28px', background: FRAME_BG });
      timers.push(setTimeout(() => modal.classList.add('show'), 420));
      timers.push(setTimeout(() => { morph.style.opacity = 0; firstField().focus(); }, 700));
    }
    // CLOSE: the reverse; the frame's contents drop away and the pill shrinks back into the button.
    function hide() {
      clearTimers();
      modal.classList.remove('show'); modal.setAttribute('aria-hidden', 'true');
      const btn = origin, canReturn = btn && !reduce && (() => { const r = btn.getBoundingClientRect(); return r.bottom > 0 && r.top < innerHeight; })();
      if (canReturn) {
        morph.style.transition = 'none';
        setBox(morph, frame.getBoundingClientRect()); Object.assign(morph.style, { borderRadius: '28px', background: FRAME_BG, opacity: 1 });
        morph.offsetWidth; morph.style.transition = '';
        timers.push(setTimeout(() => {                                 // wait a beat for the contents to fade, then shrink
          document.body.classList.remove('modal-open');
          setBox(morph, btn.getBoundingClientRect()); Object.assign(morph.style, { borderRadius: '999px', background: '#5f83a8' });
        }, 180));
        timers.push(setTimeout(() => { morph.style.opacity = 0; btn.classList.remove('lift'); modal.classList.remove('open'); }, 760));
      } else {
        document.body.classList.remove('modal-open'); modal.classList.remove('open'); morph.style.opacity = 0;
        if (btn) btn.classList.remove('lift');
      }
      if (lastFocus) lastFocus.focus({ preventScroll: true });
    }
    const isOpen = () => modal.classList.contains('open') && modal.getAttribute('aria-hidden') === 'false';
    // the address bar follows the pop-up: open adds a /contact entry, closing steps back off it
    function open(btn) {
      return load().then(f => {
        if (!f) { location.href = '/contact'; return; }
        if (!pushed) { history.pushState({ envContact: true }, '', '/contact'); pushed = true; }
        show(btn);
      });
    }
    function close() { if (pushed) history.back(); else hide(); }
    addEventListener('popstate', e => {
      const want = !!(e.state && e.state.envContact);
      pushed = want;
      if (want && !isOpen()) show(null); else if (!want && isOpen()) hide();
    });

    document.addEventListener('click', e => {
      const a = e.target.closest('a[href="/contact"], a[href^="mailto:"]');
      if (!a || a.closest('footer, #contactFrame') || e.metaKey || e.ctrlKey || e.shiftKey) return;
      e.preventDefault(); open(a);
    });
    modal.addEventListener('click', e => { if (!frame.contains(e.target)) close(); });
    addEventListener('keydown', e => { if (e.key === 'Escape' && isOpen()) close(); });
    // older links to /#contact still open it
    if (location.hash === '#contact') (window.introDone || Promise.resolve()).then(() => setTimeout(() => open(null), 350));
    // load the frame ahead of time, once the page has settled
    (window.introDone || Promise.resolve()).then(() => ('requestIdleCallback' in window ? requestIdleCallback(load) : setTimeout(load, 1500)));
  })();

  // ================= ROADMAP CAPTURE: no server yet, so it opens an email asking for the plan =================
  (function () {
    const f = document.getElementById('roadmap'); if (!f) return;
    f.addEventListener('submit', e => {
      e.preventDefault();
      const em = f.email.value.trim(); if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) { f.email.focus(); f.email.style.borderColor = '#ee6c4d'; return; }
      location.href = 'mailto:hello@envisionds.com.au?subject=' + encodeURIComponent('Send me the 90-Day Marketing Clarity Plan') + '&body=' + encodeURIComponent('Hi Envision,\n\nPlease send the free 90-Day Marketing Clarity Plan to ' + em + '.\n\nThanks');
      f.querySelector('.go').textContent = 'Check your email app';
    });
  })();

  // ================= SERVICE DETAILS ACCORDION: click a row to open it (and close the others).
  // Any link to a service (#svc-1 … #svc-8: the carousel's "Read more", the side rail) opens that row and scrolls to it. =================
  (function () {
    const items = [...document.querySelectorAll('.svc-detail')]; if (!items.length) return;
    function set(item, open) { item.classList.toggle('open', open); item.querySelector('.svc-head').setAttribute('aria-expanded', open); }
    function toggle(item, force) {
      const open = force !== undefined ? force : !item.classList.contains('open');
      items.forEach(it => set(it, it === item ? open : false));
    }
    items.forEach(it => it.querySelector('.svc-head').addEventListener('click', () => toggle(it)));
    document.addEventListener('click', e => {
      const a = e.target.closest('a[href^="#svc-"]'); if (!a) return;
      const item = document.querySelector(a.getAttribute('href')); if (!item || !item.classList.contains('svc-detail')) return;
      e.preventDefault(); e.stopImmediatePropagation();
      toggle(item, true);
      setTimeout(() => item.scrollIntoView({ block: 'start' }), 60);
    }, true);
  })();

  // ================= LAYER 2: REVEAL-ON-SCROLL (JS half) =================
  // things that arrive together float up one after another, top to bottom, left to right
  const observer = new IntersectionObserver((entries) => {
    entries.filter(e => e.isIntersecting)
      .sort((a, b) => (a.boundingClientRect.top - b.boundingClientRect.top) || (a.boundingClientRect.left - b.boundingClientRect.left))
      .forEach((e, k) => { const el = e.target; el.style.setProperty('--rd', Math.min(k, 6) * 90 + 'ms'); if (el.offsetHeight > 420) el.style.setProperty('--rb', '0px'); el.classList.add('visible'); observer.unobserve(el); });
  }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // ================================================================
  // EXERCISES
  // 1. --grad in :root is the brand gradient used for the words, the card labels and the logo cubes.
  // 2. Which words get the gradient: wrap them in <span class="grad">.
  // 3. LOGO_SIZE in the 3D script sets the logo's size; #logoStage height/margin-bottom set how much
  // of it runs off the bottom of the screen.
  // ================================================================
  // ================= MOBILE MENU: on phones the nav links live behind a two-line button =================
  (function () {
    const btn = document.getElementById('menuBtn'), menu = document.getElementById('mobileMenu');
    menu.innerHTML = document.getElementById('topLinks').innerHTML;
    // Services opens the same three groups as the desktop menu, each a tap-to-open list
    const svc = menu.querySelector('a[href="#services"]'), drop = document.getElementById('navDrop');
    if (svc && drop) {
      const toggle = document.createElement('button'), groups = document.createElement('div');
      toggle.type = 'button'; toggle.className = 'mm-svc'; toggle.textContent = 'Services'; toggle.setAttribute('aria-expanded', 'false');
      groups.className = 'mm-groups'; groups.hidden = true;
      drop.querySelectorAll('.mg-col').forEach(col => {
        const d = document.createElement('details');
        d.setAttribute('style', col.getAttribute('style'));
        d.innerHTML = '<summary>' + col.querySelector('.mg-h').innerHTML + '</summary>' + col.querySelector('ul').outerHTML + col.querySelector('.mg-ex').outerHTML;
        groups.appendChild(d);
      });
      const find = drop.querySelector('.mg-foot a').cloneNode(true); find.className = 'mm-find'; groups.appendChild(find);
      toggle.addEventListener('click', () => { groups.hidden = !groups.hidden; toggle.setAttribute('aria-expanded', !groups.hidden); });
      svc.replaceWith(toggle, groups);
    }
    const set = open => { menu.hidden = !open; btn.setAttribute('aria-expanded', open); btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu'); };
    btn.addEventListener('click', () => set(menu.hidden));
    menu.addEventListener('click', e => { if (e.target.closest('a')) set(false); });
    addEventListener('keydown', e => { if (e.key === 'Escape') set(false); });
  })();

  // ================= HERO LENS (JS half) =================
  // Thin rings and a ring of tick marks, like an iris or a camera aperture. Each frame they are drawn twice: once
  // very faint everywhere, and once bright but masked to the torch beam, so only the part you point at lights up.
  // The lens centre leans a little towards the cursor, the tick ring turns slowly, and a click "refocuses" it.
  (function () {
    const hero = document.getElementById('hero'), cv = document.getElementById('heroLens'); if (!cv) return;
    const ctx = cv.getContext('2d'), lit = document.createElement('canvas'), lctx = lit.getContext('2d');
    const torch = document.getElementById('torch');
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches, touch = matchMedia('(hover: none)').matches;
    let W = 0, H = 0, CH = 0, DPR = 1, R = 260, rot = 0, focus = 0, focusAt = -1e9, running = true, last = performance.now();
    const beam = { x: 0, y: 0, tx: 0, ty: 0, k: 1 };
    let user = false, inside = false;
    function size() {
      const r = hero.getBoundingClientRect(); W = Math.round(r.width); H = Math.round(r.height); CH = Math.round(H * 1.3);   // the canvas runs 30% into the next section
      DPR = Math.min(2, devicePixelRatio || 1); R = W < 700 ? 170 : 260;
      cv.width = lit.width = W * DPR; cv.height = lit.height = CH * DPR; cv.style.height = CH + 'px';
    }
    function lens(c, a, cx, cy, sc) {                       // draws the whole aperture at opacity a
      c.save(); c.translate(cx, cy); c.scale(sc, sc);
      const base = Math.min(H * .54, W * .48) / (770 * 1.15);  // sized so the outer ring always fits on screen
      c.strokeStyle = `rgba(152,193,217,${a})`; c.lineWidth = 1 / sc;
      [140, 230, 330, 450, 600, 770].forEach(r => { c.beginPath(); c.arc(0, 0, r * base * 1.15, 0, 7); c.stroke(); });
      // the tick ring (turns slowly)
      c.save(); c.rotate(rot); const tr = 520 * base * 1.15;
      for (let k = 0; k < 180; k++) { const ang = k / 180 * Math.PI * 2, long = k % 15 === 0, L = long ? 16 : 6;
        c.beginPath(); c.moveTo(Math.cos(ang) * tr, Math.sin(ang) * tr); c.lineTo(Math.cos(ang) * (tr + L), Math.sin(ang) * (tr + L)); c.stroke(); }
      // one coral marker riding the tick ring: the single warm accent
      c.fillStyle = `rgba(238,108,77,${Math.min(1, a * 1.6)})`; c.beginPath(); c.arc(tr + 8, 0, 3.2, 0, 7); c.fill();
      c.restore();
      // a dashed ring turning the other way
      c.save(); c.rotate(-rot * 1.6); c.setLineDash([2, 10]); c.beginPath(); c.arc(0, 0, 380 * base * 1.15, 0, 7); c.stroke(); c.restore();
      // crosshair hairlines through the centre, fading out
      c.beginPath(); c.moveTo(-900 * base, 0); c.lineTo(-170 * base, 0); c.moveTo(170 * base, 0); c.lineTo(900 * base, 0);
      c.moveTo(0, -700 * base); c.lineTo(0, -170 * base); c.moveTo(0, 170 * base); c.lineTo(0, 700 * base); c.stroke();
      c.restore();
    }
    addEventListener('pointermove', e => {
      const r = hero.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
      inside = x >= 0 && y >= 0 && x <= r.width && y <= r.height;
      if (torch && !touch) torch.classList.toggle('off', inside || torch.dataset.explore === '1');
      if (!inside) return;
      user = true; beam.tx = x; beam.ty = y;
    }, { passive: true });
    hero.addEventListener('pointerdown', e => {
      if (e.target.closest('a, button')) return;
      const r = hero.getBoundingClientRect(); beam.tx = e.clientX - r.left; beam.ty = e.clientY - r.top; user = true; focusAt = performance.now();
    });
    function frame(now) {
      if (!running) return;
      const dt = Math.min(50, now - last); last = now;
      if (!user || touch) { const t = now / 1000; beam.tx = W * (.5 + .3 * Math.sin(t * .31)); beam.ty = H * (.46 + .22 * Math.sin(t * .47 + 1)); }
      const e = user && !touch ? .18 : .04; beam.x += (beam.tx - beam.x) * e; beam.y += (beam.ty - beam.y) * e;
      if (!reduce) rot += dt * .00004;
      // a click refocuses the lens: it tightens, then settles back
      const f = Math.max(0, 1 - (now - focusAt) / 700); focus = Math.sin(f * Math.PI) * .07;
      const cx = W / 2 + (beam.x - W / 2) * .06, cy = H * .56 + (beam.y - H * .56) * .06, sc = 1 - focus;
      ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clearRect(0, 0, cv.width, cv.height); ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      lens(ctx, .07, cx, cy, sc);                                     // the faint everywhere-pass
      lctx.setTransform(1, 0, 0, 1, 0, 0); lctx.clearRect(0, 0, lit.width, lit.height); lctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      lens(lctx, .75, cx, cy, sc);                                    // the bright pass…
      lctx.globalCompositeOperation = 'destination-in';               // …kept only inside the beam
      let g = lctx.createRadialGradient(beam.x, beam.y, 0, beam.x, beam.y, R);
      g.addColorStop(0, 'rgba(0,0,0,1)'); g.addColorStop(.5, 'rgba(0,0,0,.45)'); g.addColorStop(1, 'rgba(0,0,0,0)');
      lctx.fillStyle = g; lctx.fillRect(0, 0, W, CH); lctx.globalCompositeOperation = 'source-over';
      ctx.setTransform(1, 0, 0, 1, 0, 0); if (lit.width && lit.height) ctx.drawImage(lit, 0, 0); ctx.setTransform(DPR, 0, 0, DPR, 0, 0);   // (a hero with no size yet has nothing to draw)
      // the light itself: a soft wash
      ctx.globalCompositeOperation = 'lighter';
      g = ctx.createRadialGradient(beam.x, beam.y, 0, beam.x, beam.y, R * 1.3);
      const wk = document.documentElement.dataset.theme === 'light' ? .45 : 1;   // softer on the light page, where it shows as a shadow
      g.addColorStop(0, `rgba(170,215,240,${.13 * wk})`); g.addColorStop(.45, `rgba(120,180,225,${.05 * wk})`); g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g; ctx.fillRect(beam.x - R * 1.3, beam.y - R * 1.3, R * 2.6, R * 2.6);
      ctx.globalCompositeOperation = 'source-over';
      // the focus ring that runs out from the centre on a click
      if (f > 0) { ctx.strokeStyle = `rgba(152,193,217,${.5 * f})`; ctx.lineWidth = 1.2; ctx.beginPath(); ctx.arc(cx, cy, (1 - f) * Math.max(W, H) * .7, 0, 7); ctx.stroke(); }
      // the cursor: a small lens ring
      if (!touch && inside) { ctx.strokeStyle = 'rgba(224,251,252,.85)'; ctx.lineWidth = 1.2; ctx.beginPath(); ctx.arc(beam.tx, beam.ty, 12, 0, 7); ctx.stroke(); ctx.fillStyle = '#e0fbfc'; ctx.beginPath(); ctx.arc(beam.tx, beam.ty, 1.8, 0, 7); ctx.fill(); }
      requestAnimationFrame(frame);
    }
    size(); beam.x = beam.tx = W / 2; beam.y = beam.ty = H * .46;
    addEventListener('resize', size);
    new IntersectionObserver(([en]) => { const was = running; running = en.isIntersecting; if (running && !was) { last = performance.now(); requestAnimationFrame(frame); } }).observe(hero);
    requestAnimationFrame(frame);
  })();

  // ================= QUESTION CARDS (JS half): a soft glow follows the cursor inside each card =================
  (function () {
    document.querySelectorAll('.bq').forEach(c => c.addEventListener('pointermove', e => {
      const r = c.getBoundingClientRect();
      c.style.setProperty('--x', (e.clientX - r.left) + 'px'); c.style.setProperty('--y', (e.clientY - r.top) + 'px');
    }));
  })();

  // ================= FIND YOUR SERVICE: scoring + the constellation =================
  (function () {
    const sec = document.getElementById('finder'); if (!sec) return;
    const SV = [  // pg: the service's own page
      { id: 1, n: 'Website', pg: '/services/website-design-and-development',     full: 'website design and development', c: '#5b9be6', why: 'Your website is where people decide whether to get in touch. We would build one that is clear, fast and set up to turn visitors into enquiries, so everything else you do has somewhere good to land.' },
      { id: 2, n: 'SEO', pg: '/services/seo-and-content-strategy',         full: 'SEO and content strategy',        c: '#7fe0c8', why: 'Your customers are already searching. We would make sure they find you first, with local SEO and content that keeps working for you month after month.' },
      { id: 3, n: 'Paid ads', pg: '/services/paid-ads-management',    full: 'paid ads',                        c: '#f2b84b', why: 'You need people calling soon. Google and Meta ads put you in front of the right people this month, and we keep the spend on audiences that actually convert.' },
      { id: 4, n: 'Social', pg: '/services/social-media',      full: 'social media marketing',          c: '#f48fb1', why: 'People need to see you, trust you and remember you. Consistent social content built around your audience keeps you front of mind until they are ready.' },
      { id: 5, n: 'Conversion', pg: '/services/conversion',  full: 'conversion optimisation',         c: '#b58cf0', why: 'People are already finding you, but too few get in touch. We would fix the gaps between visit and enquiry before you pay for more traffic.' },
      { id: 6, n: 'Email & CRM', pg: '/services/email-crm', full: 'email and CRM nurture',           c: '#4fc3f7', why: 'Most leads do not buy straight away. A simple nurture system keeps them warm and brings them back when they are ready, instead of letting them go cold.' },
      { id: 7, n: 'Automation', pg: '/services/automation',  full: 'automation',                      c: '#9ccc65', why: 'Your follow-up is eating time you do not have. We would automate the repetitive parts so every lead gets a fast reply without you chasing it.' },
      { id: 8, n: 'Location', pg: '/location-strategy',    full: 'location strategy',               c: '#ee6c4d', why: 'Where you show up matters as much as how. We would map demand, competitors and opportunity gaps first, so every dollar after that goes to the right area.' },
    ];
    // points each answer sends to each service (by id)
    const PTS = {
      launch: { 8: 3, 1: 3, 2: 1 },   quiet: { 2: 3, 3: 2, 4: 1 },   stalled: { 5: 3, 6: 2, 7: 1 },   expand: { 8: 4, 3: 1, 2: 1 },
      site:   { 1: 4, 5: 1 },         found: { 2: 4, 3: 1 },         convert: { 5: 4, 1: 1 },         follow: { 7: 3, 6: 3 },       where: { 8: 4, 4: 1 },
      now:    { 3: 3, 5: 1 },         months: { 4: 2, 2: 1, 3: 1, 6: 1 }, long: { 2: 2, 1: 1, 6: 1 }, before: { 8: 3 },
    };
    const MAX = 9;
    const svg = sec.querySelector('.fd-sky svg'), gB = svg.querySelector('.beams'), gS = svg.querySelector('.fd-stars'), NS = 'http://www.w3.org/2000/svg';
    const mk = (tag, at, p) => { const e = document.createElementNS(NS, tag); for (const k in at) e.setAttribute(k, at[k]); (p || svg).appendChild(e); return e; };
    const R = 120, stars = SV.map((sv, i) => {
      const a = -Math.PI / 2 + i * Math.PI / 4, x = 200 + R * Math.cos(a), y = 200 + R * Math.sin(a);
      const beam = mk('line', { class: 'beam', x1: 200, y1: 200, x2: x, y2: y }, gB);
      const g = mk('g', { class: 'fd-star' }, gS);
      mk('circle', { class: 'halo', cx: x, cy: y, r: 16 }, g); mk('circle', { class: 'win-ring', cx: x, cy: y, r: 14 }, g); mk('circle', { class: 'dot', cx: x, cy: y, r: 5 }, g);
      const c = Math.cos(a), lx = 200 + (R + 20) * c, ly = 200 + (R + 20) * Math.sin(a) + 4;
      const t = mk('text', { class: 'lbl', x: lx, y: ly, 'text-anchor': Math.abs(c) < .3 ? 'middle' : c > 0 ? 'start' : 'end' }, g); t.textContent = sv.n;
      [beam, g].forEach(el => el.style.setProperty('--c', sv.c));
      return { sv, beam, g };
    });
    const qs = [...sec.querySelectorAll('.fd-q')], res = sec.querySelector('.fd-res'), back = sec.querySelector('.fd-back'), tip = sec.querySelector('.fd-tip');
    const bars = [...sec.querySelectorAll('.fd-prog i')], count = sec.querySelector('.fd-count'), prog = sec.querySelector('.fd-prog');
    let step = 0, picks = [];

    function scores(list) { const s = {}; SV.forEach(v => s[v.id] = 0); list.forEach(k => { for (const id in PTS[k]) s[id] += PTS[k][id]; }); return s; }
    function paint(preview) {
      const s = scores(picks), p = preview ? PTS[preview] : {};
      stars.forEach(st => {
        const v = Math.min(1, s[st.sv.id] / MAX), h = p[st.sv.id] ? Math.min(1, p[st.sv.id] / 4) : 0;
        [st.beam, st.g].forEach(el => { el.style.setProperty('--v', v.toFixed(3)); el.style.setProperty('--h', h.toFixed(3)); });
        st.beam.style.opacity = h ? Math.min(1, .05 + v * .85 + h * .6) : '';
      });
    }
    function show(n) {
      step = n; sec.classList.remove('done'); res.classList.remove('on');
      stars.forEach(st => st.g.classList.remove('win', 'pair'));
      qs.forEach((q, i) => q.classList.toggle('on', i === n));
      bars.forEach((b, i) => b.classList.toggle('on', i <= n));
      prog.style.display = ''; count.textContent = 'Question ' + (n + 1) + ' of ' + qs.length;
      back.hidden = n === 0; tip.style.display = '';
      qs[n].querySelectorAll('.fd-opt').forEach(o => o.classList.toggle('picked', picks[n] === o.dataset.a));
      paint();
    }
    function finish() {
      const s = scores(picks), order = [...SV].sort((a, b) => s[b.id] - s[a.id] || (PTS[picks[1]][b.id] || 0) - (PTS[picks[1]][a.id] || 0));
      const win = order[0], pairs = order.slice(1, 3).filter(v => s[v.id] > 0);
      qs.forEach(q => q.classList.remove('on')); prog.style.display = 'none'; tip.style.display = 'none';
      res.style.setProperty('--c', win.c);
      res.querySelector('h3 em').textContent = win.full;
      res.querySelector('.why').textContent = win.why;
      const pb = res.querySelector('.pairs'); pb.querySelectorAll('a').forEach(a => a.remove());
      pairs.forEach(v => { const a = document.createElement('a'); a.href = v.pg; a.textContent = v.n; a.style.setProperty('--pc', v.c); pb.appendChild(a); });
      pb.style.display = pairs.length ? '' : 'none';
      res.querySelector('.fd-see').href = win.pg;
      const ans = qs.map((q, i) => '- ' + q.querySelector('h3').textContent + ' ' + q.querySelector('[data-a="' + picks[i] + '"] span:last-child').textContent).join('\n');
      res.querySelector('.fd-talk').href = 'mailto:hello@envisionds.com.au?subject=' + encodeURIComponent('Enquiry: ' + win.full) +
        '&body=' + encodeURIComponent('Hi Envision,\n\nYour service finder suggested ' + win.full + ' for us. Our answers:\n' + ans + '\n\nCould we have a chat about it?\n');
      stars.forEach(st => { st.g.classList.toggle('win', st.sv === win); st.g.classList.toggle('pair', pairs.includes(st.sv)); });
      sec.classList.add('done'); res.classList.add('on'); back.hidden = false;
      paint();
      stars.forEach(st => { const v = st.sv === win ? '1' : pairs.includes(st.sv) ? null : '.04'; if (v) [st.beam, st.g].forEach(el => el.style.setProperty('--v', v)); });
    }
    sec.querySelectorAll('.fd-opt').forEach(o => {
      o.addEventListener('pointermove', e => { const r = o.getBoundingClientRect(); o.style.setProperty('--x', (e.clientX - r.left) + 'px'); o.style.setProperty('--y', (e.clientY - r.top) + 'px'); });
      o.addEventListener('pointerenter', e => { if (e.pointerType !== 'touch') paint(o.dataset.a); });
      o.addEventListener('focus', () => paint(o.dataset.a));
      o.addEventListener('pointerleave', () => paint()); o.addEventListener('blur', () => paint());
      o.addEventListener('click', () => {
        picks[step] = o.dataset.a; picks.length = step + 1; o.classList.add('picked'); paint();
        setTimeout(() => step < qs.length - 1 ? show(step + 1) : finish(), 380);
      });
    });
    back.addEventListener('click', () => show(sec.classList.contains('done') ? qs.length - 1 : Math.max(0, step - 1)));
    sec.querySelector('.fd-again').addEventListener('click', () => { picks = []; show(0); });
    // the torch glow inside the constellation follows the pointer
    const sky = sec.querySelector('.fd-sky');
    sec.addEventListener('pointermove', e => { const r = sky.getBoundingClientRect(); sky.style.setProperty('--x', (e.clientX - r.left) + 'px'); sky.style.setProperty('--y', (e.clientY - r.top) + 'px'); });
    // clicking a star (after the result) jumps to that service
    stars.forEach(st => st.g.addEventListener('click', () => { const a = document.createElement('a'); a.href = st.sv.pg; document.body.appendChild(a); a.click(); a.remove(); }));
    if (matchMedia('(hover: none)').matches) tip.textContent = 'Tap an answer to send the light';
    show(0);
  })();

  // ================= LIGHT MODE + BACK TO TOP =================
  (function () {
    const root = document.documentElement, btn = document.getElementById('themeBtn');
    function label() { const l = root.dataset.theme === 'light'; const t = l ? 'Switch to dark mode' : 'Switch to light mode'; btn.setAttribute('aria-label', t); btn.title = t; }
    function apply(light) { if (light) root.dataset.theme = 'light'; else delete root.dataset.theme; label(); try { localStorage.setItem('envision-theme', light ? 'light' : 'dark'); } catch (e) {} }
    label();
    btn.addEventListener('click', () => {
      const light = root.dataset.theme !== 'light';
      const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!document.startViewTransition || reduce) { apply(light); return; }
      const b = btn.getBoundingClientRect(), x = b.left + b.width / 2, y = b.top + b.height / 2;
      const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
      const vt = document.startViewTransition(() => apply(light));
      vt.ready.then(() => root.animate({ clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
                                       { duration: 750, easing: 'cubic-bezier(.4,0,.2,1)', pseudoElement: '::view-transition-new(root)' }));
    });

    const top = document.getElementById('toTop'), hero = document.getElementById('hero');
    let ticking = false;
    function upd() {
      ticking = false;
      const max = document.documentElement.scrollHeight - innerHeight, y = scrollY;
      top.classList.toggle('on', y > hero.offsetHeight * .8);
      top.style.setProperty('--p', max > 0 ? Math.min(1, y / max).toFixed(3) : 0);
    }
    addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(upd); } }, { passive: true });
    top.addEventListener('click', () => { scrollTo({ top: 0, behavior: 'instant' }); arriveAt(document.getElementById('hero')); document.getElementById('logo').focus({ preventScroll: true }); });
    upd();
  })();

  // ================= NAV SERVICES MENU: mega.js (shared with the service pages) =================
  initMegaMenu();

  // ================= GROWTH PLANNER (JS half): the model, the curve, the lanes, the play-through and the scrubbing =================
  (function () {
    const box = document.getElementById('growth'); if (!box) return;
    const S = {"1": {"n": "Website", "a": 1.5, "r": 1.5, "L": 0.6, "g": 0.02, "e": "s", "steps": [[0, "Plan pages and messaging"], [0.5, "Design and build"], [1.5, "Launch with call and form tracking"], [3, "Site turns visits into enquiries"]], "c": "#5b9be6"}, "2": {"n": "SEO", "a": 1.5, "r": 4.5, "L": 1.0, "g": 0.09, "e": "l", "steps": [[0, "Research what locals search"], [1.5, "Service and suburb pages go live"], [3, "Rankings start to climb"], [6, "Traffic compounds month on month"]], "c": "#7fe0c8"}, "3": {"n": "Paid ads", "a": 0.5, "r": 1.5, "L": 1.0, "g": 0, "e": "q", "steps": [[0, "Tracking and campaign setup"], [0.5, "Campaigns go live"], [1.25, "Weekly optimisation"], [2, "Predictable lead flow"]], "c": "#f2b84b"}, "4": {"n": "Social", "a": 1, "r": 4, "L": 0.45, "g": 0.03, "e": "s", "steps": [[0, "Content strategy"], [1, "Posting calendar goes live"], [3, "Audience starts to trust you"], [5, "Steady enquiries from social"]], "c": "#f48fb1"}, "5": {"n": "Conversion", "a": 1, "r": 1.5, "L": 0.45, "g": 0.01, "e": "q", "steps": [[0, "Review your key pages"], [1, "Fixes go live"], [2.5, "More calls from the same traffic"]], "c": "#b58cf0"}, "6": {"n": "Email and CRM", "ln": "Email", "a": 1, "r": 2.5, "L": 0.45, "g": 0.04, "e": "s", "steps": [[0, "CRM set up or cleaned up"], [1, "Follow-up sequences go live"], [2.5, "Warm leads come back"], [4, "Repeat and referral business"]], "c": "#4fc3f7"}, "7": {"n": "Automation", "a": 0.75, "r": 1.5, "L": 0.35, "g": 0.02, "e": "q", "steps": [[0, "Connect the tools you use"], [0.75, "Follow-ups run on their own"], [2.25, "Faster replies win more jobs"]], "c": "#9ccc65"}, "8": {"n": "Location", "a": 0.75, "r": 1.25, "L": 0.3, "g": 0.01, "e": "s", "steps": [[0, "Suburb and competitor data"], [0.75, "Target areas chosen"], [2, "Spend goes where demand is"]], "c": "#ee6c4d"}}, B = {"1-2": 0.35, "1-5": 0.25, "3-5": 0.35, "1-3": 0.2, "2-4": 0.15, "6-7": 0.35, "2-6": 0.15, "3-6": 0.2, "4-6": 0.15, "2-8": 0.25, "3-8": 0.25, "4-8": 0.2, "2-5": 0.2, "3-7": 0.15, "1-4": 0.1};
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const M = 12, N = 240;
    const plot = document.getElementById('gpPlot'), col = document.getElementById('gpCol'), lanes = document.getElementById('gpLanes'), boxEl = document.getElementById('gpBox');
    const P = sel => plot.querySelector(sel);
    const picks = [...box.querySelectorAll('.gp-pick')], mixes = [...box.querySelectorAll('.gp-mixes button')];
    const out = { first: document.getElementById('gpFirst'), cons: document.getElementById('gpCons'), grow: document.getElementById('gpGrow') };
    const tip = document.getElementById('gpTip'), sr = document.getElementById('gpSr'), clipR = document.getElementById('gpClipR');
    const E = { s: x => x * x * (3 - 2 * x), q: x => 1 - Math.pow(1 - x, 2.4), l: x => Math.pow(x, 1.7) };
    const c = (id, t) => { const p = S[id]; if (t <= p.a) return 0; const x = (t - p.a) / p.r; return x >= 1 ? p.L + p.g * (t - p.a - p.r) : p.L * E[p.e](x); };
    const Dv = v => v / (v + 2.2), Y = v => 370 - Dv(v) * 330;
    function calc(sel) {
      const tot = new Float64Array(N + 1), sum0 = new Float64Array(N + 1), solo = {};
      sel.forEach(id => solo[id] = new Float64Array(N + 1));
      for (let i = 0; i <= N; i++) {
        const t = i / N * M, cv = {}; let s0 = 0;
        sel.forEach(id => { const v = c(id, t); cv[id] = v; solo[id][i] = v; s0 += v; });
        let bo = 0;
        for (const k in B) { const [a, b] = k.split('-'); if (a in cv && b in cv) { const x = Math.max(0, Math.min(1, (t - Math.max(S[a].a, S[b].a)) / 4)); bo += B[k] * x * x * (3 - 2 * x) * (cv[a] + cv[b]); } }
        sum0[i] = s0; tot[i] = s0 + bo;
      }
      return { tot, sum0, solo };
    }
    function states(tot, sel) {
      let f = null, co = null, gr = null;
      const comp = (sel || []).filter(id => S[id].g >= .03).map(id => S[id].a + S[id].r), ready = comp.length ? Math.min(...comp) : Infinity;
      for (let i = 0; i <= N; i++) {
        const v = tot[i], t = i / N * M;
        if (f === null && v >= .12) f = t;
        if (co === null && v >= .9) co = t;
        if (gr === null && t >= ready && v >= 2.2 && tot[Math.min(N, i + 20)] - v >= .05) gr = t;
      }
      return { f, co, gr, comp: comp.length > 0 };
    }
    const fmt = (t, first) => t === null ? null : first && t < 1 ? 'Within weeks' : '~Month ' + Math.max(1, Math.ceil(t));
    // each pick shows when that service, on its own, usually starts to show results
    picks.forEach(b => { const st = states(calc([+b.dataset.s]).tot, [+b.dataset.s]); b.querySelector('small').textContent = 'First results ' + fmt(st.f, 1).replace('~Month', '~month').replace('Within', 'within'); });

    const path = ys => { let d = ''; for (let i = 0; i <= N; i++) d += (i ? 'L' : 'M') + (i / N * 1000).toFixed(1) + ' ' + ys[i].toFixed(1); return d; };
    let sel = [], cur = null, curS = null, anim = 0, playing = false, m = M, prevSel = [], stNow = null, focusId = null, shown = true;
    const pins = [...plot.querySelectorAll('.gp-pin')], stems = [...plot.querySelectorAll('.gp-stems line')];
    function pinsUpd(mm) {
      pins.forEach((p, k) => {
        const t = stNow && sel.length ? stNow[p.dataset.k] : null, ln = stems[k];
        p.classList.toggle('gone', t === null); if (t === null) { ln.classList.remove('on'); return; }
        const x = t / M, y = yAt(t), was = p.classList.contains('on'), on = shown && (!playing || t <= mm + 1e-6);
        p.style.setProperty('--px', x.toFixed(4)); p.style.setProperty('--py', (y / 400).toFixed(4));
        p.classList.toggle('l', x < .12); p.classList.toggle('r', x > .86);
        ln.setAttribute('x1', (x * 1000).toFixed(1)); ln.setAttribute('x2', (x * 1000).toFixed(1)); ln.setAttribute('y1', (y + 12).toFixed(1)); ln.setAttribute('y2', '370');
        p.classList.toggle('on', on); ln.classList.toggle('on', on);
        if (on && !was && playing) { p.classList.add('say'); setTimeout(() => p.classList.remove('say'), 1500); }
      });
    }
    function setFocus(id) {
      focusId = id; const f = id !== null && sel.length > 1 && sel.includes(id);
      plot.classList.toggle('focus', f); lanes.classList.toggle('focus', id !== null && sel.includes(id));
      plot.querySelectorAll('.gp-solos path').forEach(p => p.classList.toggle('on', +p.dataset.id === id));
      lanes.querySelectorAll('.gp-lane').forEach(l => l.classList.toggle('focus', +l.dataset.id === id));
    }
    const toY = arr => Float64Array.from(arr, Y);
    function draw(yt, ys) {
      const dt = path(yt);
      P('.gp-line').setAttribute('d', dt);
      P('.gp-area').setAttribute('d', dt + 'L1000 370L0 370Z');
      P('.gp-sum0').setAttribute('d', path(ys));
      let back = ''; for (let i = N; i >= 0; i--) back += 'L' + (i / N * 1000).toFixed(1) + ' ' + ys[i].toFixed(1);
      P('.gp-bonus').setAttribute('d', dt + back + 'Z');
    }
    const yAt = mm => { if (!cur) return 370; const x = Math.max(0, Math.min(N, mm / M * N)), i = Math.floor(x), f = x - i; return cur[i] + ((cur[Math.min(N, i + 1)] - cur[i]) * f); };
    function place(mm) {
      m = mm; col.style.setProperty('--m', mm.toFixed(3));
      plot.style.setProperty('--dy', (yAt(mm) / 400 * 100).toFixed(2) + '%');
      col.classList.toggle('flip', mm > 6.2);
      pinsUpd(mm);
    }
    function narrate(mm) {
      const items = sel.map(id => { const p = S[id]; let st = null; p.steps.forEach(s => { if (s[0] <= mm + 1e-6) st = s; });
        return `<li style="--c0:${p.c}"><i></i><span><em>${p.n}</em> · ${st ? st[1] : 'Getting ready'}</span></li>`; }).join('');
      boxEl.innerHTML = `<b>${mm < .5 ? 'Start' : 'Month ' + Math.min(12, Math.max(1, Math.round(mm)))}</b><ul>${items || '<li><span>Pick a service to see its steps</span></li>'}</ul>`;
      lanes.querySelectorAll('.gp-st').forEach(d => d.classList.toggle('on', +d.dataset.t <= mm + 1e-6));
    }
    function buildLanes() {
      lanes.innerHTML = sel.map(id => {
        const p = S[id], a = p.a / M * 100, b = (p.a + p.r) / M * 100, old = prevSel.includes(id) ? ' old' : '';
        const steps = p.steps.map(s => `<i class="gp-st on" style="left:${(s[0] / M * 100).toFixed(2)}%" data-t="${s[0]}"><span>${s[0] < .5 ? 'Start' : 'Month ' + Math.ceil(s[0])} · ${s[1]}</span></i>`).join('');
        return `<div class="gp-lane${old}" data-id="${id}" style="--c0:${p.c}"><span class="gp-ln">${p.ln || p.n}</span><div class="gp-track">` +
               `<span class="gp-seg s1" style="left:0;width:${a.toFixed(2)}%">${a > 9 ? 'Set up' : ''}</span>` +
               `<span class="gp-seg s2" style="left:${a.toFixed(2)}%;width:${(b - a).toFixed(2)}%">${b - a > 16 ? 'Results build' : ''}</span>` +
               `<span class="gp-seg s3${p.g >= .03 ? ' comp' : ''}" style="left:${b.toFixed(2)}%;right:0">${p.g >= .03 ? 'Compounding' : p.g === 0 ? 'Steady while it runs' : 'Steady'}</span>${steps}</div></div>`;
      }).join('');
      fitLabels();
      lanes.querySelectorAll('.gp-st').forEach(d => d.addEventListener('pointerenter', () => d.classList.add('pop')));
      lanes.querySelectorAll('.gp-st').forEach(d => d.addEventListener('pointerleave', () => d.classList.remove('pop')));
    }
    function fitLabels() {
      const segs = [...lanes.querySelectorAll('.gp-seg')];
      segs.forEach(g => g.classList.remove('tight'));
      segs.forEach(g => { if (g.scrollWidth > g.clientWidth + 1) g.classList.add('tight'); });
    }
    if ('ResizeObserver' in window) { let w = 0; new ResizeObserver(es => { const nw = Math.round(es[0].contentRect.width); if (nw !== w) { w = nw; fitLabels(); } }).observe(lanes); }
    function setText(el, t) { if (el.textContent !== t) { el.textContent = t; el.classList.remove('flash'); void el.offsetWidth; el.classList.add('flash'); } }
    function update(first) {
      const res = calc(sel), st = states(res.tot, sel), ty = toY(res.tot), ts = toY(res.sum0); stNow = st;
      // the curve: glide from the old shape to the new one
      const fromT = cur || ty, fromS = curS || ts; cancelAnimationFrame(anim);
      if (first || reduce) { cur = ty; curS = ts; draw(ty, ts); place(m); }
      else {
        const t0 = performance.now();
        (function step(now) {
          const k = Math.min(1, (now - t0) / 650), e = 1 - Math.pow(1 - k, 3);
          cur = fromT.map((v, i) => v + (ty[i] - v) * e); curS = fromS.map((v, i) => v + (ts[i] - v) * e);
          draw(cur, curS); place(m);
          if (k < 1) anim = requestAnimationFrame(step);
        })(t0);
      }
      P('.gp-solos').innerHTML = sel.length > 1 ? sel.map(id => `<path d="${path(toY(res.solo[id]))}" data-id="${id}" style="--c0:${S[id].c}"/>`).join('') : '';
      plot.classList.toggle('multi', sel.length > 1); box.classList.toggle('multi', sel.length > 1);
      buildLanes(); prevSel = sel.slice(); setFocus(focusId);
      if (!playing) narrate(M);
      const none = !sel.length;
      setText(out.first, none ? '—' : fmt(st.f, 1) || 'Not yet');
      setText(out.cons, none ? '—' : fmt(st.co) || (sel.length === 1 ? 'Not on its own' : 'Not yet'));
      setText(out.grow, none ? '—' : fmt(st.gr) || (!st.comp ? 'Add SEO or email' : st.co === null ? (sel.length === 1 ? 'Not on its own' : 'Not yet') : 'Into year 2'));
      // the tip: the one service that would lift this mix the most
      const rest = Object.keys(S).map(Number).filter(id => !sel.includes(id));
      let best = null, gain = 0;
      rest.forEach(id => { const g = calc([...sel, id]).tot[N] - res.tot[N]; if (g > gain) { gain = g; best = id; } });
      tip.hidden = !best;
      if (best) { tip.dataset.s = best; tip.style.setProperty('--tc0', S[best].c); tip.textContent = none ? `Start with ${S[best].n.toLowerCase() === 'seo' ? 'SEO' : S[best].n}` : `Add ${S[best].n === 'SEO' ? 'SEO' : S[best].n.toLowerCase()} to grow faster`; }
      picks.forEach(b => b.setAttribute('aria-pressed', String(sel.includes(+b.dataset.s))));
      mixes.forEach(b => b.classList.toggle('on', b.dataset.mix.split(',').map(Number).sort().join() === sel.slice().sort().join()));
      sr.textContent = none ? 'No services picked.' : `${sel.map(id => S[id].n).join(', ')}: first results ${out.first.textContent}, steady enquiries ${out.cons.textContent}, always growing ${out.grow.textContent}.`;
    }
    const setSel = ids => { sel = [...new Set(ids)].sort((a, b) => a - b); update(); };
    picks.forEach(b => b.addEventListener('click', () => { const id = +b.dataset.s; setSel(sel.includes(id) ? sel.filter(x => x !== id) : [...sel, id]); }));
    mixes.forEach(b => b.addEventListener('click', () => setSel(b.dataset.mix.split(',').map(Number))));
    tip.addEventListener('click', () => setSel([...sel, +tip.dataset.s]));
    // point at a service (in the list or its lane) to see its own line
    picks.forEach(b => { b.addEventListener('pointerenter', e => { if (e.pointerType !== 'touch') setFocus(+b.dataset.s); }); b.addEventListener('pointerleave', () => setFocus(null)); });
    lanes.addEventListener('pointerover', e => { const l = e.target.closest('.gp-lane'); if (l) setFocus(+l.dataset.id); });
    lanes.addEventListener('pointerleave', () => setFocus(null));

    // play the timeline: the light travels the curve and the box narrates each step as it happens
    function play() {
      if (reduce) return;
      playing = true; shown = true; plot.classList.add('playing'); boxEl.classList.add('show'); col.style.setProperty('--ho', 1);
      const t0 = performance.now(), dur = 3600;
      (function step(now) {
        if (!playing) return;
        const k = Math.min(1, (now - t0) / dur), mm = k * M;
        clipR.setAttribute('width', (k * 1000 + 10).toFixed(1));
        place(mm); narrate(mm);
        if (k < 1) requestAnimationFrame(step); else setTimeout(stop, 700);
      })(t0);
    }
    function stop() { playing = false; plot.classList.remove('playing'); boxEl.classList.remove('show'); col.style.setProperty('--ho', 0); clipR.setAttribute('width', 1020); place(M); narrate(M); }
    document.getElementById('gpPlay').addEventListener('click', play);

    // scrub with the torch (or a finger) along the graph or the lanes
    const area = col, rectX = () => plot.getBoundingClientRect();
    let dragging = false;
    function scrub(e) { const r = rectX(); const mm = Math.max(0, Math.min(M, (e.clientX - r.left) / r.width * M)); if (playing) stop(); col.style.setProperty('--ho', 1); boxEl.classList.add('show'); place(mm); narrate(mm); }
    area.addEventListener('pointermove', e => { if (e.target.closest('button')) return; if (e.pointerType === 'touch' && !dragging) return; scrub(e); });
    area.addEventListener('pointerdown', e => { if (e.target.closest('button')) return; dragging = true; scrub(e); });
    addEventListener('pointerup', () => { dragging = false; }); area.addEventListener('pointercancel', () => { dragging = false; });
    area.addEventListener('pointerleave', e => { if (e.pointerType === 'touch' || playing) return; col.style.setProperty('--ho', 0); boxEl.classList.remove('show'); place(M); narrate(M); });

    setSel([1, 2]);
    update(true);
    if (!reduce && 'IntersectionObserver' in window) {
      clipR.setAttribute('width', 0); shown = false; place(0);
      const io = new IntersectionObserver(es => { if (es[0].isIntersecting) { io.disconnect(); setTimeout(play, 300); } }, { threshold: .45 });
      io.observe(plot);
    }
  })();

  // ================= BUILD ORDER (JS half): the steps rise into place, the torch lights the step under it,
  // and on touch screens the light climbs the stairs once =================
  (function () {
    const ol = document.getElementById('boStairs'); if (!ol) return;
    const steps = [...ol.querySelectorAll('.bo-step')], reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    steps.forEach(a => {
      a.addEventListener('pointermove', e => { const r = a.getBoundingClientRect(); a.style.setProperty('--lx', (e.clientX - r.left) + 'px'); a.style.setProperty('--ly', (e.clientY - r.top) + 'px'); });
      a.addEventListener('pointerleave', () => { a.style.setProperty('--lx', '-999px'); a.style.setProperty('--ly', '-999px'); });
    });
    if (!('IntersectionObserver' in window)) { ol.classList.add('in'); return; }
    const io = new IntersectionObserver(es => { if (!es[0].isIntersecting) return; io.disconnect(); ol.classList.add('in');
      if (matchMedia('(hover: none)').matches && !reduce) steps.forEach((a, i) => { setTimeout(() => a.classList.add('lit'), 900 + i * 260); setTimeout(() => a.classList.remove('lit'), 900 + i * 260 + 700); });
      setTimeout(() => steps[steps.length - 1].classList.add('lit'), 900 + steps.length * 260);
    }, { threshold: .3 });
    io.observe(ol);
  })();

  // ================= MOTION (v130, JS half): split headings into words, give gradient words their slice of the gradient,
  // rise them as they arrive, let headings drift up a little faster than the page, and float the hero copy away =================
  (function () {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const root = document.documentElement; root.classList.add('mo');
    const heads = [...document.querySelectorAll('section.block > h2, .about-intro > h2, .about-head, .gp-h, .bo-h')];
    let wi = 0;
    function word(text, g) {
      const m = document.createElement('span'), w = document.createElement('span');
      m.className = 'mo-m'; w.className = 'mo-w' + (g ? ' g' : ''); w.textContent = text; w.style.setProperty('--wi', wi++);
      m.appendChild(w); return m;
    }
    function walk(node, g, gid) {
      [...node.childNodes].forEach(n => {
        if (n.nodeType === 3) {
          const frag = document.createDocumentFragment(), parts = n.textContent.split(/(\s+)/);
          parts.forEach((p, k) => {
            if (!p) return;
            if (/^\s+$/.test(p)) { frag.appendChild(document.createTextNode(p)); return; }
            // punctuation glued to the word before it (e.g. "smarter.") joins that word's mask so it can't wrap on its own
            const prev = k === 0 && n.previousSibling && n.previousSibling.nodeType === 1 ? n.previousSibling : null;
            const host = prev ? (prev.classList.contains('mo-m') ? prev : [...prev.querySelectorAll('.mo-m')].pop()) : null;
            if (host) { const w = document.createElement('span'); w.className = 'mo-w'; w.textContent = p; w.style.setProperty('--wi', wi++); host.appendChild(w); return; }
            const m = word(p, g); if (g) m.firstChild.dataset.g = gid; frag.appendChild(m);
          });
          n.replaceWith(frag);
        } else if (n.nodeType === 1 && /^(SPAN|EM|STRONG|B|I|A)$/.test(n.tagName)) {
          const isG = n.classList.contains('grad');
          if (isG) { n.classList.add('mo-g'); n.dataset.gid = n.dataset.gid || Math.random().toString(36).slice(2, 8); }
          walk(n, g || isG, isG ? n.dataset.gid : gid);
        }
      });
    }
    heads.forEach(h => { wi = 0; h.classList.remove('reveal'); h.classList.add('mo-split'); walk(h, false, null); if (h.matches('section.block > h2, .about-head')) h.classList.add('mo-drift'); });

    // each gradient word shows its own slice of the one gradient, so the colour still runs across the phrase
    function paint() {
      document.querySelectorAll('.grad.mo-g').forEach(gEl => {
        const ws = [...gEl.querySelectorAll('.mo-w.g')]; if (!ws.length) return;
        const boxes = ws.map(w => w.parentNode.getBoundingClientRect());
        const lines = [];
        boxes.forEach(b => { let l = lines.find(l => Math.abs(l.top - b.top) < b.height / 2); if (!l) lines.push(l = { top: b.top, left: b.left, right: b.right }); l.left = Math.min(l.left, b.left); l.right = Math.max(l.right, b.right); });
        lines.sort((a, b) => a.top - b.top);
        const total = lines.reduce((a, l) => a + (l.right - l.left), 0) || 1;
        ws.forEach((w, k) => {
          const b = boxes[k]; let acc = 0;
          for (const l of lines) { if (Math.abs(l.top - b.top) < b.height / 2) { acc += b.left - l.left; break; } acc += l.right - l.left; }
          w.style.setProperty('--gw', total.toFixed(1) + 'px'); w.style.setProperty('--gx', (-acc).toFixed(1) + 'px');
        });
      });
    }
    paint(); if (document.fonts) document.fonts.ready.then(paint);
    let rt = 0; addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(paint, 120); });

    // rise when they arrive
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('mo-in'); io.unobserve(e.target); } }), { threshold: .3, rootMargin: '0px 0px -6% 0px' });
    heads.forEach(h => io.observe(h));

    // drift: headings move up a touch faster than the page, and the hero copy floats away as you leave it
    const hero = document.getElementById('hero'), drifters = heads.filter(h => h.classList.contains('mo-drift'));
    let ticking = false;
    function frame() {
      ticking = false;
      const vh = innerHeight;
      if (hero) { const hs = Math.max(0, Math.min(1, scrollY / (hero.offsetHeight * .9))); hero.style.setProperty('--hs', hs.toFixed(3)); }
      drifters.forEach(h => {
        const r = h.getBoundingClientRect(); if (r.bottom < -100 || r.top > vh + 100) return;
        const c = (r.top + r.height / 2 - vh / 2) / vh;
        h.style.setProperty('--pl', Math.max(-14, Math.min(14, c * 26)).toFixed(1) + 'px');
      });
    }
    addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(frame); } }, { passive: true });
    frame();
  })();

  // ================= SERVICES (v134, JS half): as each card arrives on top of the one before, the cards underneath
  // shrink a little and dim. Links to a service (#svc-1 … #svc-8) scroll to the point where that card has just landed
  // on the deck, and moving pictures only run while their card is near the screen. =================
  (function () {
    const stack = document.getElementById('svcStack'); if (!stack) return;
    const cards = [...stack.querySelectorAll('.st-card')], nav = document.querySelector('nav');
    const still = matchMedia('(prefers-reduced-motion: reduce)');
    const setNav = () => document.documentElement.style.setProperty('--navh', nav.offsetHeight + 'px');
    function frame() {
      // how far each card has arrived on the deck (0 = still below, 1 = landed)
      const arrived = cards.map(c => {
        const r = c.getBoundingClientRect();
        return Math.min(1, Math.max(0, 1 - (r.top - parseFloat(getComputedStyle(c).top)) / r.height));
      });
      cards.forEach((c, i) => {
        let depth = 0;
        if (!still.matches) for (let j = i + 1; j < cards.length; j++) depth += arrived[j];
        c.style.transform = depth ? `scale(${(1 - Math.min(depth, 4) * .04).toFixed(4)})` : '';
        c.style.setProperty('--dark', Math.min(.7, depth * .28).toFixed(3));
      });
    }
    let queued = false;
    addEventListener('scroll', () => { if (!queued) { queued = true; requestAnimationFrame(() => { queued = false; frame(); }); } }, { passive: true });
    addEventListener('resize', () => { setNav(); frame(); });
    setNav(); frame();
    // the bar grows once past the hero, so keep the cards' resting place in step with its height
    if ('ResizeObserver' in window) new ResizeObserver(() => { setNav(); frame(); }).observe(nav);

    // a sticky card's own position moves, so work out where it sits in the page before it sticks
    function goTo(id, smooth) {
      const i = cards.findIndex(c => c.id === id); if (i < 0) return false;
      const gap = parseFloat(getComputedStyle(stack).rowGap) || 0;
      const y = stack.getBoundingClientRect().top + scrollY + cards.slice(0, i).reduce((s, c) => s + c.offsetHeight + gap, 0) - parseFloat(getComputedStyle(cards[i]).top);
      scrollTo({ top: y + 2, behavior: 'instant' });
      if (smooth) arriveAt(cards[i]);
      return true;
    }
    document.addEventListener('click', e => {
      const a = e.target.closest('a[href^="#svc-"]');
      if (a && goTo(a.getAttribute('href').slice(1), true)) { e.preventDefault(); history.replaceState(null, '', a.getAttribute('href')); }
    });
    if (/^#svc-\d$/.test(location.hash)) addEventListener('load', () => goTo(location.hash.slice(1), false));

    if ('IntersectionObserver' in window) {
      const run = new IntersectionObserver(es => es.forEach(en => en.target.classList.toggle('st-run', en.isIntersecting)), { rootMargin: '120px 0px' });
      cards.forEach(c => run.observe(c));
    } else cards.forEach(c => c.classList.add('st-run'));
  })();

  // ================= MOTION, SMALLER TEXT (v133, JS half): the paragraphs under the headings rise word by word =================
  (function () {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
    document.documentElement.classList.add('mo');
    const paras = [...document.querySelectorAll('section.block > p:not(.eyebrow):not(.email), .about-intro > p:not(.eyebrow), .gp-p, .bo-side > p, .proof-sub > p')];
    paras.forEach(p => {
      let wi = 0;
      (function walk(node) {
        [...node.childNodes].forEach(n => {
          if (n.nodeType === 3) {
            const frag = document.createDocumentFragment();
            n.textContent.split(/(\s+)/).forEach((t, k) => {
              if (!t) return;
              if (/^\s+$/.test(t)) { frag.appendChild(document.createTextNode(t)); return; }
              const w = document.createElement('span'); w.className = 'mo-w'; w.textContent = t; w.style.setProperty('--wi', wi++);
              // punctuation straight after a link or bold word joins that word's mask so it can't wrap on its own
              const prev = k === 0 && n.previousSibling && n.previousSibling.nodeType === 1 ? n.previousSibling : null;
              const host = prev ? (prev.classList.contains('mo-m') ? prev : [...prev.querySelectorAll('.mo-m')].pop()) : null;
              if (host) { host.appendChild(w); return; }
              const m = document.createElement('span'); m.className = 'mo-m'; m.appendChild(w); frag.appendChild(m);
            });
            n.replaceWith(frag);
          } else if (n.nodeType === 1 && /^(SPAN|EM|STRONG|B|I|A|SMALL)$/.test(n.tagName)) walk(n);
        });
      })(p);
      p.classList.remove('reveal'); p.classList.add('mo-split', 'mo-small');
    });
    // a paragraph that arrives with its heading waits for the heading to start rising first
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (!e.isIntersecting) return;
      const h = e.target.previousElementSibling, withHead = h && h.classList.contains('mo-split') && !h.classList.contains('mo-small') && h.getBoundingClientRect().top > 0;
      e.target.style.setProperty('--mb', withHead ? '420ms' : '160ms');
      e.target.classList.add('mo-in'); io.unobserve(e.target);
    }), { threshold: .25, rootMargin: '0px 0px -6% 0px' });
    paras.forEach(p => io.observe(p));
  })();

  // ================= WHO WE ARE (JS half): the line joining the icons runs from the first icon's centre to the last one's,
  // with a light drifting down it. The lines and paragraphs rise into view like every other section. =================
  (function () {
    const sec = document.getElementById('who'), line = sec && sec.querySelector('.wl-line'); if (!line) return;
    const icons = [...sec.querySelectorAll('.wl-ico')];
    function set() {
      const pos = el => { let y = 0, x = 0; for (let n = el; n && n !== sec; n = n.offsetParent) { x += n.offsetLeft; y += n.offsetTop; } return [x, y]; };
      const ys = icons.map(i => pos(i)[1]), a = icons[0], h = ys[ys.length - 1] - ys[0];
      sec.style.setProperty('--lx', (pos(a)[0] + a.offsetWidth / 2) + 'px');
      sec.style.setProperty('--lt', (ys[0] + a.offsetHeight / 2) + 'px');
      sec.style.setProperty('--lh', h + 'px');
    }
    set(); addEventListener('resize', set); if (document.fonts) document.fonts.ready.then(set);

    line.classList.add('loop');
  })();

  function arriveAt(el) {
    if (!el) return;
    el.classList.remove('arrive'); void el.offsetWidth; el.classList.add('arrive');
    el.addEventListener('animationend', () => el.classList.remove('arrive'), { once: true });
  }
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#"]'), id = a && a.getAttribute('href').slice(1);
    if (!id || e.defaultPrevented) return;                     // (#svc-N links are handled by the services deck)
    const t = document.getElementById(id); if (!t) return;
    e.preventDefault();
    history.pushState(null, '', '#' + id);
    t.scrollIntoView({ behavior: 'instant', block: 'start' });
    arriveAt(t.closest('section') || t);
  });
}
