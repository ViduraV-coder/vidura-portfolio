import useLean from '../hooks/useLean';
import BackendArt from './art/tools/BackendArt';
import CloudArt from './art/tools/CloudArt';
import CmsArt from './art/tools/CmsArt';
import FrontendArt from './art/tools/FrontendArt';
import MotionArt from './art/tools/MotionArt';

const ART = {
  Frontend: FrontendArt,
  Backend: BackendArt,
  Cloud: CloudArt,
  Motion: MotionArt,
  Cms: CmsArt,
};

export default function ToolCard({ tool }) {
  const lean = useLean();
  const Art = ART[tool.art];

  // --offset staggers the cards up and down, --delay offsets each card's bobbing. On phones the
  // cards sit in one column, so the stagger and the bobbing both stop (the bobbing kept the whole
  // blurred card re-compositing every frame).
  return (
    <div
      className="archWrap mt-(--offset) max-w-[372px] flex-[1_1_330px] animate-[aBob_7s_ease-in-out_var(--delay)_infinite] max-ph:mx-auto max-ph:mt-0 max-ph:mb-0 max-ph:max-w-[420px] max-ph:flex-[1_1_100%] max-ph:animate-none"
      style={{ '--offset': `${tool.offset}px`, '--delay': `${tool.delay}s` }}
      {...lean}
    >
      {/* the glow layers inside blend with "screen"; isolate keeps that blending to the arch itself
          instead of everything painted behind it on the page */}
      <div className="arch relative isolate aspect-[300/360] w-full overflow-hidden rounded-[150px_150px_26px_26px] border-[3px] border-[rgba(243,233,210,0.85)] bg-[#0b1340] shadow-[0_30px_60px_-26px_rgba(0,0,0,0.9),0_0_50px_-14px_rgba(255,181,71,0.22)] max-ph:shadow-[0_18px_30px_-20px_rgba(0,0,0,0.9),0_0_28px_-10px_rgba(255,181,71,0.22)]">
        <Art />
      </div>

      {/* the frosted blur is the costliest thing in this section to repaint, so on phones a more
          solid tint stands in for it */}
      <div className="mt-[18px] rounded-3xl border border-[rgba(255,255,255,0.14)] p-[22px_22px_24px] shadow-[0_24px_48px_-24px_rgba(0,0,0,0.8)] backdrop-blur-[14px] [background:linear-gradient(rgba(10,14,40,0.3),rgba(10,14,40,0.3)),rgba(255,255,255,0.07)] max-ph:shadow-[0_14px_24px_-16px_rgba(0,0,0,0.8)] max-ph:backdrop-blur-none max-ph:[background:rgba(36,44,104,0.8)]">
        <h3 className="font-display text-[26px] font-medium text-cream">{tool.name}</h3>
        <div className="mt-1 text-[15px] text-mist">{tool.tag}</div>
        <div className="mt-3.5 flex flex-wrap gap-1.5">
          {tool.chips.map((chip) => (
            <span
              className="rounded-full border border-[rgba(255,255,255,0.18)] bg-[rgba(10,14,40,0.42)] px-[11px] py-[5px] font-mono text-[12px] text-cream"
              key={chip}
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
