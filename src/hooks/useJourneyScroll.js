import { useEffect } from 'react';
import { afterFirstInput, loadMotion, prefersReducedMotion } from '../lib/motion';

// draws the road as you scroll past it (gsap scrolltrigger). pathRef must be an svg path with
// pathLength="1000". empty when the section top is 80% down the screen, full when its bottom hits
// the middle, with a bit of easing so it doesn't jump
//
// under 1000px the winding road becomes a straight line down the left. every step has its own bit of
// line (.jfill) from its dot to the next one and the last bit carries on as yellow dots. they grow
// with the scroll and each .jnode dot lights up when the line reaches it
export default function useJourneyScroll(sectionRef, pathRef) {
  useEffect(() => {
    const section = sectionRef.current;
    const path = pathRef.current;
    if (!section || !path) return undefined;

    const nodes = [...section.querySelectorAll('.jnode')];
    const bars = [...section.querySelectorAll('.jfill')];
    const narrow = window.matchMedia('(max-width: 1000px)');
    let lit = nodes.map(() => false);

    // where each dot and each bit of line sits, in px from the top of the section
    let nodeY = [];
    let barTop = [];
    let barLen = [];
    const measure = () => {
      const sectionTop = section.getBoundingClientRect().top;
      nodeY = nodes.map((node) => {
        const box = node.getBoundingClientRect();
        return box.top + box.height / 2 - sectionTop;
      });
      // the yellow sits inside the grey dotted line, so measure the grey one
      const tracks = bars.map((bar) => bar.parentElement.getBoundingClientRect());
      barTop = tracks.map((box) => box.top - sectionTop);
      barLen = tracks.map((box) => Math.max(1, box.height));
    };

    // amount is 0 to 1. the solid bars grow down from the top, the dotted one (.jdots) is uncovered from the
    // top instead because scaling it would stretch the dots
    const grow = (bar, amount) => {
      const part = Math.max(0, Math.min(1, amount));
      if (bar.classList.contains('jdots')) {
        bar.style.clipPath = `inset(0 0 ${((1 - part) * 100).toFixed(2)}% 0)`;
      } else {
        bar.style.transform = `scaleY(${part.toFixed(4)})`;
      }
    };

    // progress is 0 to 1 along the road, tip is how many px down the section the line has reached
    const draw = (progress, tip) => {
      path.style.strokeDasharray = `${Math.round(progress * 1000)} 1000`;
      if (!narrow.matches) return;
      bars.forEach((bar, i) => grow(bar, (tip - barTop[i]) / barLen[i]));
      nodes.forEach((node, i) => {
        const on = nodeY[i] <= tip;
        if (on !== lit[i]) {
          lit[i] = on;
          node.classList.toggle('is-lit', on);
        }
      });
    };

    // for people who asked for less motion the road is simply drawn in full, no measuring needed
    if (prefersReducedMotion()) {
      path.style.strokeDasharray = '1000 1000';
      bars.forEach((bar) => grow(bar, 1));
      nodes.forEach((node) => node.classList.add('is-lit'));
      return undefined;
    }

    let context;
    let cancelled = false;
    afterFirstInput()
      .then(loadMotion)
      .then(({ gsap }) => {
        if (cancelled) return;
        // measured after the first scroll, not at load - reading positions while the page is still being built
        // makes the browser lay everything out twice
        measure();
        context = gsap.context(() => {
          const run = { progress: 0 };
          // tween is declared first on purpose: if the page is already past the road when gsap loads (reload
          // part-way down, jump to Contact) onUpdate fires while the tween is still being created and a const
          // wouldn't exist yet
          let tween;
          const total = () => (tween ? tween.scrollTrigger.end - tween.scrollTrigger.start : 1);
          // scrub: 0.4 = the line catches up with your scroll over a moment
          tween = gsap.to(run, {
            progress: 1,
            ease: 'none',
            onUpdate: () => draw(run.progress, run.progress * total()),
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              end: 'bottom 50%',
              scrub: 0.4,
              onRefresh: measure,
            },
          });
          draw(run.progress, run.progress * total());
        });
      });

    return () => {
      cancelled = true;
      context?.revert();
    };
  }, [sectionRef, pathRef]);
}
