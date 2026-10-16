import { lazy, Suspense, useEffect, useState } from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';

// three.js is big and nobody sees the night sky until they scroll, so it only loads when the story is
// ~1.5 screens away. skipped on phones, with reduced motion and without webgl (the svg lights stay then)
const FireflyCanvas = lazy(() => import('./FireflyCanvas'));
const FAST_ONLY = { failIfMajorPerformanceCaveat: true };

// failIfMajorPerformanceCaveat = say no when webgl would run in software (no gpu), the svg lights are better there
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

  // wrapper clips the fixed canvas to the story so the lights never spill over neighbouring sections
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
