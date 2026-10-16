import { useEffect, useRef } from 'react';
import useMediaQuery from '../hooks/useMediaQuery';

// things the ring grows over
const CLICKABLE = 'a, button, summary, [role="button"]';

// a mouse on a wide window gets a small amber dot plus a ring that drifts after it. phones, tablets, touch
// laptops in tablet mode and anyone with reduced motion keep the normal cursor
export default function Cursor() {
  const wide = useMediaQuery('(min-width: 1001px) and (hover: hover) and (pointer: fine)');
  const calm = useMediaQuery('(prefers-reduced-motion: reduce)');
  return wide && !calm ? <Pointer /> : null;
}

function Pointer() {
  const box = useRef(null);
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    const html = document.documentElement;
    const mouse = { x: 0, y: 0 };
    const trail = { x: 0, y: 0 };
    let frame = 0;
    let started = false;

    const put = (el, x, y) => {
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    // the ring covers a fifth of the gap every frame and stops once it has caught up
    const follow = () => {
      trail.x += (mouse.x - trail.x) * 0.2;
      trail.y += (mouse.y - trail.y) * 0.2;
      put(ring.current, trail.x, trail.y);
      const caughtUp = Math.abs(mouse.x - trail.x) < 0.2 && Math.abs(mouse.y - trail.y) < 0.2;
      frame = caughtUp ? 0 : requestAnimationFrame(follow);
    };

    const onMove = (e) => {
      if (e.pointerType !== 'mouse') return;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      put(dot.current, mouse.x, mouse.y);
      if (!started) {
        // first move: drop the ring straight under the pointer and only now hide the real cursor
        started = true;
        trail.x = mouse.x;
        trail.y = mouse.y;
        put(ring.current, trail.x, trail.y);
        html.classList.add('hasCursor');
        box.current.dataset.on = '';
      }
      if (!frame) frame = requestAnimationFrame(follow);
      const hot = e.target instanceof Element && e.target.closest(CLICKABLE);
      box.current.toggleAttribute('data-hot', Boolean(hot));
    };

    const onDown = () => box.current.setAttribute('data-down', '');
    const onUp = () => box.current.removeAttribute('data-down');
    const onLeave = () => box.current.removeAttribute('data-on');
    const onEnter = () => started && box.current.setAttribute('data-on', '');

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerdown', onDown);
    window.addEventListener('pointerup', onUp);
    html.addEventListener('mouseleave', onLeave);
    html.addEventListener('mouseenter', onEnter);

    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
      html.removeEventListener('mouseleave', onLeave);
      html.removeEventListener('mouseenter', onEnter);
      cancelAnimationFrame(frame);
      html.classList.remove('hasCursor');
    };
  }, []);

  return (
    <div className="cur" ref={box} aria-hidden="true">
      <div className="curRing" ref={ring}>
        <span />
      </div>
      <div className="curDot" ref={dot}>
        <span />
      </div>
    </div>
  );
}
