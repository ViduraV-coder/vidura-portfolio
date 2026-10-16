// gsap + scrolltrigger stay out of the first load. the page works without them (nothing is hidden until
// they run) and they download on the first scroll, touch or key press, well before anything needs animating

let loaded;

// clicking a link like "#work" can be the first thing someone does. the browser starts a smooth scroll,
// then gsap arrives and scrolltrigger's first measuring pass puts the page back, cancelling it, so the
// click looks dead. the jump is remembered here and finished once scrolltrigger has settled. any
// scrolling by the person cancels it so it never drags them back
let jump = null;
window.addEventListener('hashchange', () => {
  jump = { hash: location.hash, at: performance.now() };
});
['wheel', 'touchmove', 'keydown'].forEach((name) =>
  window.addEventListener(name, () => (jump = null), { passive: true }),
);

function finishJump() {
  if (!jump) return;
  if (performance.now() - jump.at > 4000) {
    jump = null;
    return;
  }
  let id = '';
  try {
    id = decodeURIComponent(jump.hash.slice(1));
  } catch {
    // hand-typed address with a broken % sequence, nothing to scroll to
  }
  const target = id && document.getElementById(id);
  if (target && Math.abs(target.getBoundingClientRect().top) > 8) target.scrollIntoView();
}

export function loadMotion() {
  loaded ||= Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(
    ([{ gsap }, { ScrollTrigger }]) => {
      gsap.registerPlugin(ScrollTrigger);
      // phone address bars growing and shrinking fire resize events all the time, ignore those
      ScrollTrigger.config({ ignoreMobileResize: true });
      ScrollTrigger.addEventListener('refresh', finishJump);
      window.setTimeout(finishJump, 600);
      return { gsap, ScrollTrigger };
    },
  );
  return loaded;
}

export const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// resolves on the first sign someone is using the page (straight away if the browser reopened it
// part-way down)
export function afterFirstInput() {
  return new Promise((resolve) => {
    if (window.scrollY > 0) {
      resolve();
      return;
    }
    const events = ['scroll', 'wheel', 'touchstart', 'keydown', 'pointerdown'];
    const done = () => {
      events.forEach((name) => window.removeEventListener(name, done));
      resolve();
    };
    events.forEach((name) => window.addEventListener(name, done, { passive: true }));
  });
}
