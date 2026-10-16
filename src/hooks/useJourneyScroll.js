import { useEffect } from 'react';
import { afterFirstInput, loadMotion, prefersReducedMotion } from '../lib/motion';

// draws the road as you scroll past it (gsap scrolltrigger). pathRef must be an svg path with
// pathLength="1000". empty when the section top is 80% down the screen, full when its bottom hits
// the middle, with a bit of easing so it doesn't jump
//
// under 1000px the winding road becomes a straight rail down the left: railRef is the bright fill, it
// grows with the scroll and each .jnode dot lights up when the line reaches it
export default function useJourneyScroll(sectionRef, pathRef, railRef) {
  useEffect(() => {
    const section = sectionRef.current;
    const path = pathRef.current;
    const rail = railRef.current;
    if (!section || !path || !rail) return undefined;

    const nodes = [...section.querySelectorAll('.jnode')];
    const narrow = window.matchMedia('(max-width: 1000px)');
    let lit = nodes.map(() => false);

    // where the rail starts and ends in px from the top of the section (offsetTop works because it's
    // position: relative), and where each dot is
    let railTop = 0;
    let railLen = 1;
    let nodeY = [];
    const measure = () => {
      railTop = rail.offsetTop;
      railLen = Math.max(1, rail.offsetHeight);
      const sectionTop = section.getBoundingClientRect().top;
      nodeY = nodes.map((node) => {
        const box = node.getBoundingClientRect();
        return box.top + box.height / 2 - sectionTop;
      });
    };

    // progress is 0 to 1 along the road, tip is how many px down the section the line has reached
    const draw = (progress, tip) => {
      path.style.strokeDasharray = `${Math.round(progress * 1000)} 1000`;
      if (!narrow.matches) return;
      const fill = Math.max(0, Math.min(1, (tip - railTop) / railLen));
      rail.firstElementChild.style.transform = `scaleY(${fill.toFixed(4)})`;
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
      rail.firstElementChild.style.transform = 'scaleY(1)';
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
  }, [sectionRef, pathRef, railRef]);
}
