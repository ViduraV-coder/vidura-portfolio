import { useEffect } from 'react';
import { afterFirstInput } from '../lib/motion';

// the big pictures further down the page (project cards, tool scenes, the sunrise) are loading="lazy" so they
// don't fight the hero for the connection on the first load. the moment someone scrolls or presses a key they
// are told to load anyway, which is seconds before anyone gets to them, so nothing pops in while scrolling
export default function useLazyArt() {
  useEffect(() => {
    let cancelled = false;
    afterFirstInput().then(() => {
      if (cancelled) return;
      document.querySelectorAll('img[data-soon]').forEach((img) => {
        img.loading = 'eager';
      });
    });
    return () => {
      cancelled = true;
    };
  }, []);
}
