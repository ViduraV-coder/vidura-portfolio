import { useEffect } from 'react';

// the painted scenes use svg <animate> and the browser runs every one of them even when the picture is far
// off screen. an idle page was eating a big slice of the main thread (worse on phones), so each svg is
// paused while out of view and resumes when it scrolls back in
//
// on touch screens they also hold still while the page is moving. redrawing a dozen glowing scenes every
// frame on top of scrolling made the Tools section stutter on phones, and nobody sees a firefly twinkle
// while flinging the page anyway. they pick up again shortly after scrolling stops. the css loops follow
// the "is-scrolling" class (animations.css)
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
        // start slightly before they scroll in so nothing visibly wakes up. phone cards are tall, a big margin
        // would keep the neighbours above and below running too
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
