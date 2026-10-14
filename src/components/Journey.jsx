import { useRef } from 'react';
import useScrollProgress from '../hooks/useScrollProgress';
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
  useScrollProgress(rows, road);

  return (
    <section id="journey" className="chapSec">
      <Scenery section="journey">
        <JourneyMoon />
      </Scenery>
      <SpineNode time={chapter.time} color={chapter.color} />

      <div className="journeyHead">
        <ChapterIntro chapter={chapter} caption={COPY.journey.caption}>
          The road <em>so far</em>
        </ChapterIntro>
      </div>

      <div className="jrows" ref={rows}>
        <JourneyRoad drawRef={road} />

        {JOURNEY.map((step, i) => (
          <div className={`jrow${i % 2 ? ' jrow--right' : ''}`} key={step.title}>
            <div className="jnode" />
            <article className="jcard">
              <div className="jcard__years">{step.years}</div>
              <h3 className="jcard__title">{step.title}</h3>
              <div className="jcard__org">{step.org}</div>
              <div className="jcard__text">{step.text}</div>
            </article>
          </div>
        ))}

        <div className="jend">
          <a className="jendBtn" href="#contact">
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
