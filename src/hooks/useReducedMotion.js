import { useEffect } from 'react';

// base.css already stops the css animations for reduced motion, but svg <animate> tags
// ignore that, so pause those here (and resume if the setting is switched off).
export default function useReducedMotion() {
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => {
      document.querySelectorAll('svg').forEach((svg) => {
        if (query.matches) svg.pauseAnimations?.();
        else svg.unpauseAnimations?.();
      });
    };
    apply();
    query.addEventListener('change', apply);
    return () => query.removeEventListener('change', apply);
  }, []);
}
