import { useMemo } from 'react';

// while the mouse is over the element --lx and --ly go from -1 to 1 across it (left to right, top to
// bottom) and interactions.css uses them to nudge the artwork. touch is ignored. values are set
// straight on the element so nothing re-renders
export default function useLean() {
  return useMemo(
    () => ({
      onPointerMove(event) {
        if (event.pointerType !== 'mouse') return;
        const el = event.currentTarget;
        const box = el.getBoundingClientRect();
        if (!box.width || !box.height) return;
        const x = ((event.clientX - box.left) / box.width) * 2 - 1;
        const y = ((event.clientY - box.top) / box.height) * 2 - 1;
        el.style.setProperty('--lx', Math.max(-1, Math.min(1, x)).toFixed(3));
        el.style.setProperty('--ly', Math.max(-1, Math.min(1, y)).toFixed(3));
      },
      onPointerLeave(event) {
        event.currentTarget.style.removeProperty('--lx');
        event.currentTarget.style.removeProperty('--ly');
      },
    }),
    [],
  );
}
