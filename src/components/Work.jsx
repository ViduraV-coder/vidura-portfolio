import { CHAPTERS, COPY } from '../data/site';
import { PROJECTS } from '../data/work';
import BokehBand from './art/BokehBand';
import ChapterIntro from './ui/ChapterIntro';
import Scenery from './ui/Scenery';
import SpineNode from './ui/SpineNode';
import ResultsStrip from './ResultsStrip';
import Testimonials from './Testimonials';
import WorkCard from './WorkCard';

export default function Work() {
  const chapter = CHAPTERS.work;
  return (
    <section id="work" className="chapSec">
      <Scenery section="work">
        <BokehBand />
      </Scenery>
      <SpineNode time={chapter.time} color={chapter.color} />

      <div className="relative z-1 mb-[52px] max-w-[620px]">
        <ChapterIntro chapter={chapter} caption={COPY.work.caption}>
          Things I've <em>built</em>
        </ChapterIntro>
        <div
          data-reveal
          className="mt-4 font-mono text-[13px] leading-[1.6] tracking-[0.04em] text-mist"
        >
          {COPY.work.hint}
        </div>
      </div>

      {/* the grid is also the container the cards measure themselves against (@container/work) */}
      <div className="@container/work relative z-1 grid grid-cols-[repeat(12,minmax(0,1fr))] gap-7 max-ph:gap-[18px]">
        {PROJECTS.map((project) => (
          <WorkCard key={project.n} project={project} />
        ))}
      </div>

      <ResultsStrip />
      <Testimonials />
    </section>
  );
}
