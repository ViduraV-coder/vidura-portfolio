import { useEffect } from 'react';

// Draws the road while you scroll past it. `pathRef` has to be an svg path with pathLength="1000".
// Empty when the section top is 80% down the screen, full when its bottom reaches the middle.
//
// Below 1000px wide the winding road is swapped for a straight rail down the left (journey.css).
// `railRef` is the bright fill inside it: it grows with the scroll, and each .jnode dot lights up
// as the line reaches it.
export default function useScrollProgress(sectionRef, pathRef, railRef) {
  useEffect(() => {
    const section = sectionRef.current;
    const path = pathRef.current;
    const rail = railRef.current;
    if (!section || !path || !rail) return undefined;

    const nodes = [...section.querySelectorAll('.jnode')];
    const narrow = window.matchMedia('(max-width: 1000px)');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let lit = nodes.map(() => false);
    let frame = 0;

    // where the rail starts and ends, in px down from the top of the section (offsetTop is
    // relative to the section because .jrows is position: relative)
    let railTop = 0;
    let railLen = 1;
    let nodeY = [];
    const measure = () => {
      railTop = rail.offsetTop;
      railLen = Math.max(1, rail.offsetHeight);
      nodeY = nodes.map((node) => {
        const box = node.getBoundingClientRect();
        return box.top + box.height / 2 - section.getBoundingClientRect().top;
      });
    };

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

    if (reduced) {
      measure();
      draw(1, Infinity);
      return undefined;
    }

    const update = () => {
      frame = 0;
      const box = section.getBoundingClientRect();
      const view = window.innerHeight;
      const start = view * 0.8;
      const end = view * 0.5;
      const total = box.height - (end - start);
      draw(Math.max(0, Math.min(1, (start - box.top) / total)), start - box.top);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    const onResize = () => {
      measure();
      onScroll();
    };

    measure();
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    // fonts and images arriving can make the cards taller, which moves the dots
    const watcher = 'ResizeObserver' in window ? new ResizeObserver(onResize) : null;
    watcher?.observe(section);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      watcher?.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [sectionRef, pathRef, railRef]);
}
