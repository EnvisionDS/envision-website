// Typing: the headings and the lines under them that type themselves out on the homepage (everything else fades in).
// The whole text is in place from the start, its untyped part unseen, so the page never moves as the words appear.
// Visitors who ask for less motion get the text as it is: the "ty" class on <html> (app/layout.tsx) is only set otherwise.
// Each group types in order when it arrives. styles/typing.css hides these same parts until the script takes over.
import { slot } from './sequence';

const GROUPS = [
  ['#promise', ':scope > h2', ':scope > p:not(.eyebrow)'],
  ['.pm-head', ':scope > h3'],
  ['#services', ':scope > h2', ':scope > p:not(.eyebrow)'],
  ['.st-txt', ':scope > .st-sum'],
  ['#finder', ':scope > h2', ':scope > p:not(.eyebrow)'],
  ['#how .about-intro', ':scope > h2', ':scope > p:not(.eyebrow)'],
  ['#work', ':scope > h2', ':scope > p:not(.eyebrow)'],
];
const PER_LETTER = 18, LONGEST = 2800;   // milliseconds; long paragraphs type faster so nobody waits

const GAP = 140;   // between a heading finishing and the line under it starting

const typingOn = () => document.documentElement.classList.contains('ty');
const starts = new Map();

// Readies some text (all of it unseen). play(delay) types it and resolves when it finishes; length is how long that takes.
function typer(el) {
  const runs = [], walk = document.createTreeWalker(el, NodeFilter.SHOW_TEXT), nodes = [];
  while (walk.nextNode()) if (walk.currentNode.data.trim()) nodes.push(walk.currentNode);
  nodes.forEach((done) => {
    const text = done.data, rest = document.createElement('span');
    rest.className = 'ty-r'; rest.textContent = text; done.data = ''; done.after(rest);
    runs.push({ text, done, rest });
  });
  const total = runs.reduce((n, r) => n + r.text.length, 0);
  const caret = document.createElement('span');
  caret.className = 'ty-c'; caret.setAttribute('aria-hidden', 'true');

  function show(letters) {
    let left = letters, caretSet = false;
    runs.forEach((r) => {
      const k = Math.min(left, r.text.length); left -= k;
      if (r.done.data.length !== k) { r.done.data = r.text.slice(0, k); r.rest.textContent = r.text.slice(k); }
      if (!caretSet && k < r.text.length) { caretSet = true; if (caret.nextSibling !== r.rest) r.rest.before(caret); }
    });
  }
  const length = Math.min(total * PER_LETTER, LONGEST);
  const play = (delay = 0) => new Promise((resolve) => {
    show(0);
    setTimeout(() => {
      const start = performance.now();
      const tick = (now) => {
        const letters = Math.min(total, Math.ceil(((now - start) / length) * total));
        show(letters);
        if (letters < total) requestAnimationFrame(tick);
        else { caret.remove(); resolve(); }
      };
      requestAnimationFrame(tick);
    }, delay);
  });
  return { play, length };
}

// The parts that type. The fade-in scripts leave these alone.
export function isTyped(el) {
  return typingOn() && GROUPS.some(([root, ...parts]) =>
    [...document.querySelectorAll(root)].some((r) => parts.some((part) => r.querySelector(part) === el)));
}

// Called by the fade-in script as things arrive, so typing takes its turn with everything else in the section.
export function startTyping(el) {
  const start = starts.get(el);
  if (start) start();
  return !!start;
}

export function initTyping(observer, ready = Promise.resolve()) {
  if (!typingOn()) return;
  const groups = GROUPS.flatMap(([root, ...parts]) =>
    [...document.querySelectorAll(root)].map((r) => parts.map((part) => r.querySelector(part)).filter(Boolean)));
  groups.forEach((parts) => {
    const typed = parts.map(typer);
    parts.forEach((el) => el.classList.remove('reveal'));
    starts.set(parts[0], () => {
      const wait = slot(parts[0], 460) + 120;   // what comes next follows on while this types, rather than waiting for it to finish
      ready.then(async () => { for (let i = 0; i < typed.length; i++) await typed[i].play(i ? GAP : wait); });
    });
    observer.observe(parts[0]);
  });
  document.documentElement.classList.add('ty-ready');
}
