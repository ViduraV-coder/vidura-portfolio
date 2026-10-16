import { useState } from 'react';

// placeholder for a site with no screenshot yet
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

// the window is a 16:10 slice of the page (height as a share of width)
const WINDOW = 0.625;

// screenshots are whole pages, much taller than the window, and animations.css scrolls them on hover.
// distance and speed depend on the picture so this runs once it has loaded. null = nothing to scroll
function scrollFor(img) {
  const ratio = img.naturalHeight / img.naturalWidth;
  if (ratio < WINDOW * 1.05) return null;
  const hidden = 1 - WINDOW / ratio;
  const travel = (ratio - WINDOW) * 500; // px, for a window ~500px wide
  const down = Math.min(14, Math.max(5, travel / 110)); // roughly 110px a second
  // down takes 45% of a loop, same again back up, the rest is a pause at each end
  return { '--shift': `${(-hidden * 100).toFixed(2)}%`, '--loop': `${(down / 0.45).toFixed(1)}s` };
}

// where the window sits in each card layout. the stacked versions (narrow grid, or max-lap for
// the wide banners) put it above the words
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

// chrome's icons on a 16px grid in the current text colour, decoration only so no labels
const ICONS = {
  back: <path d="M13 8H3.5M7.5 4l-4 4 4 4" />,
  forward: <path d="M3 8h9.5M8.5 4l4 4-4 4" />,
  reload: (
    <>
      <path d="M13 8A5 5 0 1 1 11.5 4.4" />
      <path d="M12.5 1.8v3h-3" />
    </>
  ),
  plus: <path d="M8 3v10M3 8h10" />,
  close: <path d="M4 4l8 8M12 4l-8 8" />,
};

function Icon({ name, className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONS[name]}
    </svg>
  );
}

// minimise / maximise / close, windows 11 style
function WindowButtons() {
  return (
    <div className="ml-auto flex h-full text-[#202124]">
      {['M1 5.5h8', 'M1.5 1.5h7v7h-7z', 'M1.2 1.2l7.6 7.6M8.8 1.2L1.2 8.8'].map((d) => (
        <span className="flex w-[26px] items-center justify-center" key={d}>
          <svg
            className="size-[9px]"
            viewBox="0 0 10 10"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d={d} />
          </svg>
        </span>
      ))}
    </div>
  );
}

// fake chrome window (windows): the screenshot if there is one, otherwise the wireframe
export default function BrowserFrame({ kind, domain, title, wire, screenshot }) {
  const [scroll, setScroll] = useState(null);

  return (
    <div
      className={`wframe absolute overflow-hidden rounded-[10px] border border-[rgba(255,255,255,0.9)] bg-white [font-family:'Segoe_UI',Roboto,system-ui,sans-serif] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8),0_0_50px_-10px_rgba(255,255,255,0.18)] max-ph:mt-14! max-ph:w-[88%]! ${SPOT[kind]} ${STACK_ON[kind]}`}
      aria-hidden="true"
    >
      {/* tab strip */}
      <div className="flex h-[27px] items-end bg-[#dee1e6] pl-2">
        <div className="relative flex h-[22px] w-[142px] min-w-0 shrink items-center gap-1.5 rounded-t-[7px] bg-white px-2 text-[#3c4043] before:absolute before:bottom-0 before:-left-2 before:size-2 before:content-[''] before:[background:radial-gradient(circle_at_0_0,transparent_8px,#fff_8.5px)] after:absolute after:right-[-8px] after:bottom-0 after:size-2 after:content-[''] after:[background:radial-gradient(circle_at_100%_0,transparent_8px,#fff_8.5px)]">
          <span
            className="size-[11px] shrink-0 rounded-[3px]"
            style={{ background: `linear-gradient(135deg, ${wire[0]}, ${wire[1]})` }}
          />
          <span className="min-w-0 flex-1 truncate text-[10.5px] leading-none">{title}</span>
          <Icon name="close" className="size-[9px] shrink-0 text-[#5f6368]" />
        </div>
        <Icon name="plus" className="mb-[5px] ml-2 size-[11px] shrink-0 text-[#5f6368]" />
        <WindowButtons />
      </div>

      {/* toolbar */}
      <div className="flex h-[31px] items-center gap-1.5 border-b border-[#dadce0] bg-white px-2 text-[#5f6368]">
        <Icon name="back" className="size-[13px] shrink-0" />
        <Icon name="forward" className="size-[13px] shrink-0 text-[#bdc1c6]" />
        <Icon name="reload" className="size-[13px] shrink-0" />
        <span className="ml-0.5 flex h-5 min-w-0 flex-1 items-center gap-1.5 rounded-full bg-[#f1f3f4] px-2.5 text-[10.5px] whitespace-nowrap text-[#202124]">
          <svg
            className="size-[10px] shrink-0 text-[#5f6368]"
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            <rect x="3" y="7" width="10" height="7" rx="1.6" fill="currentColor" />
            <path
              d="M5.4 7V5.2a2.6 2.6 0 0 1 5.2 0V7"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
          <span className="min-w-0 truncate">{domain}</span>
        </span>
        <span className="flex size-[15px] shrink-0 items-end justify-center overflow-hidden rounded-full bg-[#9aa0a6]">
          <svg
            className="size-[13px] text-white"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
          >
            <circle cx="8" cy="6" r="2.6" />
            <path d="M2.8 16c0-3 2.3-5 5.2-5s5.2 2 5.2 5z" />
          </svg>
        </span>
        <svg className="size-3 shrink-0" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
          <circle cx="8" cy="3" r="1.3" />
          <circle cx="8" cy="8" r="1.3" />
          <circle cx="8" cy="13" r="1.3" />
        </svg>
      </div>
      {screenshot ? (
        // whole page seen through a 16:10 window
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
