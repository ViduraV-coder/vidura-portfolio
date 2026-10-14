import { useEffect } from 'react';

// Draws the road while you scroll past it. `pathRef` has to be an svg path with pathLength="1000".
// Empty when the section top is 80% down the screen, full when its bottom reaches the middle.
export default function useScrollProgress(sectionRef, pathRef) {
  useEffect(() => {
    const section = sectionRef.current;
    const path = pathRef.current;
    if (!section || !path) return undefined;

    const draw = (progress) => {
      path.style.strokeDasharray = `${Math.round(progress * 1000)} 1000`;
    };

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      draw(1);
      return undefined;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const box = section.getBoundingClientRect();
      const view = window.innerHeight;
      const start = view * 0.8;
      const end = view * 0.5;
      const total = box.height - (end - start);
      draw(Math.max(0, Math.min(1, (start - box.top) / total)));
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [sectionRef, pathRef]);
}
