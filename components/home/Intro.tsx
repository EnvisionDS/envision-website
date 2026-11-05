// BEGINNER'S GUIDE — read the comments top to bottom.
// A simple dark landing page:
// LAYER 0: Intro — the Envision logo builds itself, then its eight rings fly out and become the eight
// letters of "envision", and the word shrinks and docks onto the logo in the top-left of the nav.
// NAV:     logo (home) · Services / Our work / About / Contact · discovery-call button
// HERO:    big centred headline with gradient words, pill CTA, and the company logo built from
// ~2,000 tiny cubes (three.js) rising from the bottom of the screen.
// SERVICES: one large card per service; scrolling stacks them into a deck under the nav.
// ABOUT:   includes "What we stand for", the logo as a wheel holding the mission, vision and six values.
// LAYER 2: Reveal-on-scroll for the sections below.
// LAYER 0: INTRO
export default function Intro() {
  return (
    <div id="intro" aria-hidden="true">
      <div id="introBg"></div>
      <div id="stage">
        <div id="introWord"></div>
      </div>
    </div>
  );
}
