import { CHAPTERS, COPY } from '../data/site';
import { TOOLS } from '../data/toolkit';
import ChapterIntro from './ui/ChapterIntro';
import Scenery from './ui/Scenery';
import SpineNode from './ui/SpineNode';
import ToolCard from './ToolCard';

export default function Toolkit() {
  const chapter = CHAPTERS.toolkit;
  return (
    <section id="toolkit" className="chapSec">
      <Scenery section="toolkit" />
      <SpineNode time={chapter.time} color={chapter.color} />

      <div className="tkHead">
        <ChapterIntro chapter={chapter} caption={COPY.toolkit.caption} center>
          Tools I <em>reach for</em>
        </ChapterIntro>
        <p className="tkLead">{COPY.toolkit.lead}</p>
      </div>

      <div className="tkGrid">
        {TOOLS.map((tool) => (
          <ToolCard key={tool.name} tool={tool} />
        ))}
      </div>
    </section>
  );
}
