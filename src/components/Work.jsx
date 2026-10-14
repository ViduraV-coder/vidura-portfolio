import { CHAPTERS, COPY } from '../data/site';
import { PROJECTS } from '../data/work';
import BokehBand from './art/BokehBand';
import ChapterIntro from './ui/ChapterIntro';
import Scenery from './ui/Scenery';
import SpineNode from './ui/SpineNode';
import WorkCard from './WorkCard';

export default function Work() {
  const chapter = CHAPTERS.work;
  return (
    <section id="work" className="chapSec">
      <Scenery section="work">
        <BokehBand />
      </Scenery>
      <SpineNode time={chapter.time} color={chapter.color} />

      <div className="workHead">
        <ChapterIntro chapter={chapter} caption={COPY.work.caption}>
          Things I've <em>built</em>
        </ChapterIntro>
        <div className="workHint">{COPY.work.hint}</div>
      </div>

      <div className="wgrid">
        {PROJECTS.map((project) => (
          <WorkCard key={project.n} project={project} />
        ))}
      </div>
    </section>
  );
}
