import { CHAPTERS, COPY } from '../data/site';
import { PROJECTS } from '../data/work';
import BokehBand from './art/BokehBand';
import ChapterIntro from './ui/ChapterIntro';
import Scenery from './ui/Scenery';
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

      {/* between 701 and 1000px the moon sits right of the heading, so keep the words clear of it */}
      <div className="relative z-1 mb-[52px] max-w-[620px] max-tab:min-ph:max-w-[max(340px,calc(100vw-441px))]">
        <ChapterIntro chapter={chapter} caption={COPY.work.caption}>
          Things I've <em>built</em>
        </ChapterIntro>
      </div>

      {/* also the container the cards size against (@container/work) */}
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
