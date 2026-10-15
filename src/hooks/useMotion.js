import { useEffect } from 'react';
import { afterFirstInput, loadMotion, prefersReducedMotion } from '../lib/motion';

// Page-wide scroll animation with GSAP, switched on by the first scroll:
//   [data-hero-copy]   the hero text drifts up and fades as the hero scrolls away
//   [data-reveal]      fades and rises into place the first time it is about to be seen
//                      ("left" and "right" slide in from the side on wide screens)
//   [data-count]       numbers count up to their value when they appear
// Things already on screen are left alone, and nothing is touched for people who ask for less
// motion.
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

          // hero text
          const heroCopy = document.querySelector('[data-hero-copy]');
          if (heroCopy) {
            gsap.to(heroCopy, {
              y: -70,
              opacity: 0,
              ease: 'none',
              scrollTrigger: { trigger: '#top', start: 'top top', end: 'bottom 40%', scrub: true },
            });
          }

          // reveals
          const items = gsap.utils.toArray('[data-reveal]').filter(below);
          const offset = (el) => {
            const side = el.dataset.reveal;
            if (wide && side === 'left') return { x: -56, y: 0 };
            if (wide && side === 'right') return { x: 56, y: 0 };
            return { x: 0, y: 36 };
          };
          // opacity only, never visibility: keyboard focus has to be able to land on a card that has
          // not been revealed yet (focusing it scrolls it into view, which reveals it)
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

          // numbers
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
