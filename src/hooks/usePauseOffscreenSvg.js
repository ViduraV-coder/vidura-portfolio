import { useEffect } from 'react';

// The painted scenes use svg <animate> tags, and the browser keeps running every one of them
// even when the picture is miles off screen. Add it all up and an idle page was using a big slice
// of the main thread (worse on phones), so each svg is paused while it's out of view and carries
// on once it scrolls back in.
export default function usePauseOffscreenSvg() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const animated = [...document.querySelectorAll('svg')].filter(
      (svg) =>
        !svg.parentElement.closest('svg') &&
        svg.querySelector('animate, animateTransform, animateMotion, set'),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          // reduced motion keeps everything paused (see useReducedMotion)
          if (isIntersecting && !reduced.matches) target.unpauseAnimations();
          else target.pauseAnimations();
        });
      },
      // start them a little before they scroll into view so nothing visibly "wakes up"
      { rootMargin: '200px 0px' },
    );

    animated.forEach((svg) => observer.observe(svg));
    return () => observer.disconnect();
  }, []);
}
