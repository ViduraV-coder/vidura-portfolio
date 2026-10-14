import { useEffect } from 'react';

// The painted scenes use svg <animate> tags, and the browser keeps running every one of them
// even when the picture is miles off screen. Add it all up and an idle page was using a big slice
// of the main thread (worse on phones), so each svg is paused while it's out of view and carries
// on once it scrolls back in.
//
// On touch screens they also hold still while the page is actually moving. Re-drawing a dozen
// glowing scenes every frame on top of scrolling is what made the Tools section stutter on
// phones, and nobody can see a firefly twinkle while a thumb is flinging the page anyway. A short
// moment after the scrolling stops they pick up exactly where they left off. The matching CSS
// loops are held by the "is-scrolling" class (see animations.css).
export default function usePauseOffscreenSvg() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;

    const root = document.documentElement;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const phone = window.matchMedia('(max-width: 700px)');
    const touch = window.matchMedia('(hover: none)');

    const animated = [...document.querySelectorAll('svg')].filter(
      (svg) =>
        !svg.parentElement.closest('svg') &&
        svg.querySelector('animate, animateTransform, animateMotion, set'),
    );

    const onScreen = new Set();
    let scrolling = false;
    let settleTimer = 0;

    // reduced motion keeps everything paused (see useReducedMotion)
    const sync = (svg) => {
      if (onScreen.has(svg) && !scrolling && !reduced.matches) svg.unpauseAnimations();
      else svg.pauseAnimations();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (isIntersecting) onScreen.add(target);
          else onScreen.delete(target);
          sync(target);
        });
      },
      {
        // start them a little before they scroll into view so nothing visibly "wakes up". Phone
        // cards are tall, so a big margin would keep the neighbours above and below running too.
        rootMargin: phone.matches ? '80px 0px' : '200px 0px',
      },
    );

    const onScroll = () => {
      if (!phone.matches && !touch.matches) return;
      if (!scrolling) {
        scrolling = true;
        root.classList.add('is-scrolling');
        onScreen.forEach(sync);
      }
      clearTimeout(settleTimer);
      settleTimer = setTimeout(() => {
        scrolling = false;
        root.classList.remove('is-scrolling');
        onScreen.forEach(sync);
      }, 160);
    };

    animated.forEach((svg) => observer.observe(svg));
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      clearTimeout(settleTimer);
      root.classList.remove('is-scrolling');
    };
  }, []);
}
