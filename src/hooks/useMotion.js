import { useEffect } from 'react';
import { afterFirstInput, loadMotion, prefersReducedMotion } from '../lib/motion';

// scroll animation for the whole page, starts on the first scroll:
//   [data-reveal]   fades and rises in when about to be seen (left / right slide in from the side on wide screens)
//   [data-count]    numbers count up when they appear
// anything already on screen is left alone, and nothing runs with reduced motion
export default function useMotion() {
  useEffect(() => {
    if (prefersReducedMotion()) return undefined;

    let context;
    let cancelled = false;

    afterFirstInput()
      .then(loadMotion)
      .then(({ gsap, ScrollTrigger }) => {
        if (cancelled) return;
        context = gsap.context(() => {
          const wide = window.innerWidth > 1000;
          const below = (el) => el.getBoundingClientRect().top > window.innerHeight * 0.9;

          const items = gsap.utils.toArray('[data-reveal]').filter(below);
          const offset = (el) => {
            const side = el.dataset.reveal;
            if (wide && side === 'left') return { x: -56, y: 0 };
            if (wide && side === 'right') return { x: 56, y: 0 };
            return { x: 0, y: 36 };
          };
          // opacity only, never visibility: focus has to be able to land on a card that is not revealed yet
          // (focusing it scrolls it into view, which reveals it)
          items.forEach((el) => gsap.set(el, { opacity: 0, ...offset(el) }));
          ScrollTrigger.batch(items, {
            start: 'top 90%',
            once: true,
            onEnter: (batch) =>
              batch.forEach((el, i) =>
                gsap.to(el, {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  duration: 0.9,
                  delay: i * 0.1,
                  ease: 'power3.out',
                  clearProps: 'transform,opacity',
                }),
              ),
          });

          gsap.utils
            .toArray('[data-count]')
            .filter(below)
            .forEach((el) => {
              const end = Number(el.dataset.count);
              const suffix = el.dataset.suffix || '';
              const shown = { n: 0 };
              el.textContent = `0${suffix}`;
              ScrollTrigger.create({
                trigger: el,
                start: 'top 92%',
                once: true,
                onEnter: () =>
                  gsap.to(shown, {
                    n: end,
                    duration: 1.6,
                    ease: 'power2.out',
                    onUpdate: () => {
                      el.textContent = `${Math.round(shown.n)}${suffix}`;
                    },
                    onComplete: () => {
                      el.textContent = `${end}${suffix}`;
                    },
                  }),
              });
            });
        });

        // fonts and images arriving move things, so measure once more when they have
        document.fonts?.ready.then(() => ScrollTrigger.refresh());
      });

    return () => {
      cancelled = true;
      context?.revert();
    };
  }, []);
}
