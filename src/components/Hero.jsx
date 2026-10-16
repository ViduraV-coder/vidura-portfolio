import { HERO } from '../data/site';
import HeroScene from './art/HeroScene';
import Nav from './Nav';
import BookCall from './ui/BookCall';

// the underline under "the web." and the shape it sways to, same path commands so the browser can blend them
const UNDERLINE = [
  'M2 8 C22 0 38 14 58 6 S98 2 118 8 S160 12 198 4',
  'M2 6 C22 12 38 0 58 8 S98 10 118 5 S160 2 198 8',
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-night">
      <div className="heroArt">
        <HeroScene />
        <div className="heroShade--vignette" />
        <div className="heroShade--left" />
        <div className="heroShade--bottom" />
      </div>

      <Nav />

      <div className="absolute bottom-[4%] left-[5%] z-[4] w-[44%] text-cream max-tab:bottom-[6%] max-tab:w-[54%] max-ph:right-5 max-ph:bottom-[26px] max-ph:left-5 max-ph:z-[5] max-ph:w-auto">
        <div className="inline-flex items-center gap-2.5 rounded-full border border-white/16 bg-[rgba(10,14,40,0.6)] px-4 py-2 font-mono text-[13px] tracking-[0.08em] text-cream backdrop-blur-[10px]">
          <span className="relative size-2">
            <span className="absolute inset-0 animate-[dotPing_1.9s_cubic-bezier(0,0,0.2,1)_infinite] rounded-full bg-go" />
            <span className="relative block size-2 rounded-full bg-go shadow-[0_0_8px_rgba(91,227,143,0.7)]" />
          </span>
          {HERO.badge}
        </div>
        <h1 className="mt-4 font-display text-[clamp(38px,4vw,58px)] leading-none font-medium tracking-[-0.025em] text-cream max-xs:text-[34px]">
          I build worlds
          <br />
          that <em className="font-normal">live</em> on{' '}
          <span className="relative inline-block">
            the web.
            <svg
              className="absolute -bottom-1.5 left-0 h-3 w-full"
              aria-hidden="true"
              viewBox="0 0 200 14"
              preserveAspectRatio="none"
            >
              {/* draws itself once (pathLength 1 makes the dash numbers simple), then the curve sways slowly */}
              <path
                d={UNDERLINE[0]}
                pathLength="1"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="4"
                strokeLinecap="round"
                className="animate-[drawLine_1.1s_ease-out_0.5s_backwards] [stroke-dasharray:1_2]"
              >
                <animate
                  attributeName="d"
                  values={`${UNDERLINE[0]};${UNDERLINE[1]};${UNDERLINE[0]}`}
                  dur="4.5s"
                  begin="1.8s"
                  repeatCount="indefinite"
                  calcMode="spline"
                  keyTimes="0;0.5;1"
                  keySplines="0.45 0 0.55 1;0.45 0 0.55 1"
                />
              </path>
            </svg>
          </span>
        </h1>
        <p className="mt-[18px] max-w-[520px] text-[18px] leading-[1.55] text-moon max-ph:text-[16px]">
          {HERO.lead}
        </p>
        <div className="mt-[22px] flex flex-wrap gap-3">
          <a
            className="inline-flex items-center gap-3.5 rounded-full bg-accent p-2 pl-[26px] text-[17px] font-bold text-ink shadow-[0_14px_34px_-12px_rgba(255,181,71,0.5)]"
            href={HERO.primary.href}
          >
            {HERO.primary.label}
            <span className="inline-flex size-[38px] items-center justify-center rounded-full bg-ink">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M8 2V14M8 14L3 9M8 14L13 9"
                  stroke="#F3E9D2"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
          <BookCall className="inline-flex h-[54px] items-center rounded-full border border-white/22 bg-[rgba(10,14,40,0.6)] px-[26px] text-[17px] font-bold text-cream backdrop-blur-[12px]">
            {HERO.secondary.label}
          </BookCall>
        </div>
      </div>

      <div
        className="absolute right-[5%] bottom-[18px] z-[4] flex items-center gap-2.5 rounded-full border border-white/16 bg-[rgba(10,14,40,0.6)] px-4 py-2 font-mono text-[12px] tracking-[0.18em] text-cream backdrop-blur-[10px] max-ph:hidden"
        aria-hidden="true"
      >
        {HERO.cue}
        <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
          <path
            d="M6 1V12M6 12L2 8M6 12L10 8"
            stroke="#F3E9D2"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
