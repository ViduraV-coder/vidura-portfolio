import { useState } from 'react';

// stand-in for a site with no screenshot yet: boxes in the project's two colours
function Wireframe({ colors: [c1, c2] }) {
  return (
    <div
      className="flex aspect-[16/10] flex-col gap-2.5 overflow-hidden bg-[#f4f6ff] px-[18px] py-4"
      style={{ '--c1': c1, '--c2': c2 }}
    >
      <div className="flex items-center gap-2">
        <span className="h-2 w-9 rounded-[4px] bg-[#0d1438]" />
        <span className="flex-1" />
        <span className="h-1.5 w-[22px] rounded-[3px] bg-[#c3cbe6]" />
        <span className="h-1.5 w-[22px] rounded-[3px] bg-[#c3cbe6]" />
        <span className="h-1.5 w-[22px] rounded-[3px] bg-[#c3cbe6]" />
        <span className="h-3.5 w-[38px] rounded-[7px] bg-(--c2)" />
      </div>
      <div className="flex flex-[1.25] flex-col justify-center gap-2 rounded-xl bg-[linear-gradient(135deg,var(--c1),var(--c2))] px-[18px]">
        <span className="h-3 w-[56%] rounded-[6px] bg-[rgba(255,255,255,0.92)]" />
        <span className="h-2 w-[38%] rounded-[4px] bg-[rgba(255,255,255,0.6)]" />
        <span className="mt-1 h-3.5 w-[24%] rounded-[7px] bg-[rgba(255,255,255,0.95)]" />
      </div>
      <div className="flex flex-1 gap-2.5">
        <span className="flex-1 rounded-[10px] bg-[#e3e8fa]" />
        <span className="flex-1 rounded-[10px] bg-[#e3e8fa]" />
        <span className="flex-1 rounded-[10px] bg-[#e3e8fa]" />
      </div>
    </div>
  );
}

// The window shows a 16:10 slice of the page, so its height is this much of its width.
const WINDOW = 0.625;

// A screenshot is usually a whole page, much taller than the window. work.css scrolls it on hover;
// how far it has to travel and how long a loop takes depends on the picture, so work it out once
// the picture has loaded. Returns the two css variables, or null if there is nothing to scroll.
function scrollFor(img) {
  const ratio = img.naturalHeight / img.naturalWidth;
  if (ratio < WINDOW * 1.05) return null;
  const hidden = 1 - WINDOW / ratio;
  const travel = (ratio - WINDOW) * 500; // px, for a window around 500px wide
  const down = Math.min(14, Math.max(5, travel / 110)); // roughly 110px a second
  // going down takes 45% of a loop, the same again for the way back up, and a short pause at each end
  return { '--shift': `${(-hidden * 100).toFixed(2)}%`, '--loop': `${(down / 0.45).toFixed(1)}s` };
}

// Where the window sits in each card layout. The stacked versions (after a container query on the
// work grid, and for the wide banners also max-lap) put it in the flow above the words.
const SPOT = {
  card: 'top-11 left-1/2 w-[66%] max-w-[470px] [transform:translateX(-50%)_perspective(1200px)_rotateX(7deg)]',
  wide: 'top-1/2 right-[6%] w-[46%] max-w-[560px] [transform:translateY(-50%)_perspective(1400px)_rotateY(-7deg)_rotateX(3deg)]',
  flip: 'top-1/2 left-[6%] w-[44%] max-w-[560px] [transform:translateY(-50%)_perspective(1400px)_rotateY(7deg)_rotateX(3deg)]',
};

const STACK_ON = {
  card: '@max-[968px]/work:relative @max-[968px]/work:order-1 @max-[968px]/work:inset-auto @max-[968px]/work:mx-auto @max-[968px]/work:mt-[46px] @max-[968px]/work:w-[min(80%,560px)] @max-[968px]/work:max-w-none @max-[968px]/work:[transform:perspective(1200px)_rotateX(5deg)]',
  wide: 'max-lap:relative max-lap:order-1 max-lap:inset-auto max-lap:mx-auto max-lap:mt-[46px] max-lap:w-[min(80%,560px)] max-lap:max-w-none max-lap:[transform:perspective(1200px)_rotateX(5deg)] @max-[968px]/work:relative @max-[968px]/work:order-1 @max-[968px]/work:inset-auto @max-[968px]/work:mx-auto @max-[968px]/work:mt-[46px] @max-[968px]/work:w-[min(80%,560px)] @max-[968px]/work:max-w-none @max-[968px]/work:[transform:perspective(1200px)_rotateX(5deg)]',
};
STACK_ON.flip = STACK_ON.wide;

// fake browser window: a real screenshot if there is one, otherwise the coloured wireframe
export default function BrowserFrame({ kind, domain, title, wire, screenshot }) {
  const [scroll, setScroll] = useState(null);

  return (
    <div
      className={`wframe absolute overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.9)] bg-[rgba(244,246,255,0.96)] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8),0_0_50px_-10px_rgba(255,255,255,0.18)] max-ph:mt-14! max-ph:w-[88%]! ${SPOT[kind]} ${STACK_ON[kind]}`}
      aria-hidden="true"
    >
      <div className="flex items-center gap-[7px] bg-[rgba(232,236,250,0.97)] px-3.5 py-2.5">
        <span className="size-[9px] rounded-full bg-[#ff8a7a]" />
        <span className="size-[9px] rounded-full bg-[#ffd27a]" />
        <span className="size-[9px] rounded-full bg-[#8ed69b]" />
        <span className="ml-2.5 flex h-5 flex-1 items-center overflow-hidden rounded-[10px] bg-[#d5dbef] px-3 font-mono text-[11px] whitespace-nowrap text-[#4a5578]">
          {domain}
        </span>
      </div>
      {screenshot ? (
        // the screenshot is a whole page seen through a 16:10 window
        <div className="aspect-[16/10] overflow-hidden bg-[#f4f6ff]">
          <img
            className="wframe__shot block h-auto w-full [transition:transform_0.9s_ease] group-[.is-previewing]/card:[animation:shotScroll_var(--loop,24s)_ease-in-out_infinite] group-[.is-previewing]/card:will-change-transform [@media(hover:none)]:[animation:shotScroll_var(--loop,24s)_ease-in-out_infinite]"
            style={scroll}
            src={screenshot}
            alt={`${title} home page`}
            loading="lazy"
            onLoad={(event) => setScroll(scrollFor(event.currentTarget))}
          />
        </div>
      ) : (
        <Wireframe colors={wire} />
      )}
    </div>
  );
}
