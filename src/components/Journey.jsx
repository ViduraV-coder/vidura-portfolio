import { useRef } from 'react';
import useJourneyScroll from '../hooks/useJourneyScroll';
import { CHAPTERS, COPY } from '../data/site';
import { JOURNEY } from '../data/journey';
import JourneyMoon from './art/JourneyMoon';
import JourneyRoad from './art/JourneyRoad';
import ChapterIntro from './ui/ChapterIntro';
import Scenery from './ui/Scenery';
import SpineNode from './ui/SpineNode';

export default function Journey() {
  const chapter = CHAPTERS.journey;
  const rows = useRef(null);
  const road = useRef(null);
  const rail = useRef(null);
  useJourneyScroll(rows, road, rail);

  return (
    <section id="journey" className="chapSec">
      <Scenery section="journey">
        <JourneyMoon />
      </Scenery>
      <SpineNode time={chapter.time} color={chapter.color} />

      <div className="relative z-1 mb-10">
        <ChapterIntro chapter={chapter} caption={COPY.journey.caption}>
          The road <em>so far</em>
        </ChapterIntro>
      </div>

      <div className="relative z-1" ref={rows}>
        <JourneyRoad drawRef={road} />
        {/* the straight version of the road, for tablets and phones (hidden on wide screens) */}
        <div
          className="absolute top-2 bottom-[70px] left-[13px] hidden w-0 border-0 border-l-[3px] border-dotted border-[rgba(243,233,210,0.5)] max-tab:block"
          ref={rail}
          aria-hidden="true"
        >
          <span className="absolute inset-y-0 -left-[3px] w-[3px] origin-top [transform:scaleY(0)] rounded-[3px] bg-accent shadow-[0_0_12px_rgba(255,181,71,0.55)] will-change-transform" />
        </div>

        {JOURNEY.map((step, i) => {
          const right = i % 2 === 1;
          return (
            <div
              className={`relative flex h-[300px] items-center max-tab:block max-tab:h-auto max-tab:pb-[22px] max-tab:pl-[46px] ${right ? 'justify-end' : ''}`}
              key={step.title}
            >
              {/* "jnode" is how useJourneyScroll finds the dots, it adds is-lit once the line gets there */}
              <div className="jnode absolute top-[150px] left-1/2 size-7 [transform:translate(-50%,-50%)] rounded-full border-[6px] border-accent bg-deep max-tab:top-[34px] max-tab:left-3.5 max-tab:transition-[background,box-shadow] max-tab:duration-300 max-tab:ease-[ease] max-tab:[&.is-lit]:bg-accent max-tab:[&.is-lit]:shadow-[0_0_0_6px_rgba(255,181,71,0.16),0_0_20px_rgba(255,181,71,0.65)]" />
              {/* a faint navy tint under the glass keeps the small text readable where the scene gets brighter.
                  Below 1000px the cards slide over the moon, so the tint is much stronger there */}
              <article
                data-reveal={right ? 'right' : 'left'}
                className={`w-full max-w-[440px] rounded-3xl border border-[rgba(255,255,255,0.16)] p-[24px_28px] shadow-[0_24px_48px_-26px_rgba(0,0,0,0.8)] backdrop-blur-[14px] [background:linear-gradient(rgba(10,14,40,0.3),rgba(10,14,40,0.3)),rgba(255,255,255,0.08)] max-tab:m-0 max-tab:w-auto max-tab:max-w-[640px] max-tab:[background:linear-gradient(rgba(10,14,40,0.72),rgba(10,14,40,0.72)),rgba(255,255,255,0.08)] ${right ? 'mr-5' : 'ml-5'}`}
              >
                <div className="font-mono text-[12px] tracking-[0.12em] text-sky">{step.years}</div>
                <h3 className="mt-2 font-display text-[28px] font-medium text-cream">
                  {step.title}
                </h3>
                <div className="mt-0.5 text-[15px] font-bold text-amber">{step.org}</div>
                <div className="mt-2.5 text-[15px] leading-[1.6] text-[#d6dcf2]">{step.text}</div>
              </article>
            </div>
          );
        })}

        <div
          data-reveal
          className="relative flex h-[120px] items-center justify-center max-tab:h-auto max-tab:justify-start max-tab:pt-1 max-tab:pl-[46px]"
        >
          <a
            className="inline-flex items-center gap-3 rounded-full bg-accent px-[30px] py-4 text-[18px] font-bold text-ink shadow-[0_16px_36px_-14px_rgba(255,181,71,0.6)]"
            href="#contact"
          >
            {COPY.journey.next}
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path
                d="M3 9H15M15 9L10 4M15 9L10 14"
                stroke="#120F26"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
