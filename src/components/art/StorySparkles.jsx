import { lazy, Suspense, useEffect, useState } from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';

// Three.js is a big download and nobody sees the night sky until they scroll down to it, so it
// only loads once the story is about a screen and a half away. It is skipped on phones (where the
// svg lights are paused while you scroll to keep things smooth), for people who ask for less
// motion, and wherever WebGL isn't available, and in all those cases the svg lights stay.
const FireflyCanvas = lazy(() => import('./FireflyCanvas'));
const FAST_ONLY = { failIfMajorPerformanceCaveat: true };

// "failIfMajorPerformanceCaveat" makes the browser say no when WebGL would be drawn in software
// (a machine with no graphics acceleration): there the svg lights are the better choice
function hasWebGL() {
  try {
    const probe = document.createElement('canvas');
    const gl = probe.getContext('webgl2', FAST_ONLY) || probe.getContext('webgl', FAST_ONLY);
    gl?.getExtension('WEBGL_lose_context')?.loseContext(); // give the test context back
    return Boolean(gl);
  } catch {
    return false;
  }
}

export default function StorySparkles() {
  const roomy = useMediaQuery('(min-width: 701px)');
  const calm = useMediaQuery('(prefers-reduced-motion: reduce)');
  const [near, setNear] = useState(false);

  useEffect(() => {
    const story = document.getElementById('story');
    if (!roomy || calm || !story || near) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasWebGL()) setNear(true);
      },
      { rootMargin: '80% 0px' },
    );
    observer.observe(story);
    return () => observer.disconnect();
  }, [roomy, calm, near]);

  if (!roomy || calm || !near) return null;

  // the wrapper clips the fixed canvas to the story, so the lights never spill over the sections
  // above and below
  return (
    <div
      className="pointer-events-none absolute inset-0 z-[1] [clip-path:inset(0)]"
      aria-hidden="true"
    >
      <Suspense fallback={null}>
        <FireflyCanvas />
      </Suspense>
    </div>
  );
}
