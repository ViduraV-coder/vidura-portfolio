import { CHAPTERS, COPY } from '../data/site';
import { TOOLS } from '../data/toolkit';
import ChapterIntro from './ui/ChapterIntro';
import Scenery from './ui/Scenery';
import ToolCard from './ToolCard';

export default function Toolkit() {
  const chapter = CHAPTERS.toolkit;
  return (
    <section id="toolkit" className="chapSec">
      <Scenery section="toolkit" />

      <div className="relative z-1 mx-auto mb-20 max-w-[760px] text-center max-tab:mb-[60px] max-ph:mb-11">
        <ChapterIntro chapter={chapter} caption={COPY.toolkit.caption} center>
          Tools I <em>reach for</em>
        </ChapterIntro>
      </div>

      <div className="relative z-1 flex flex-wrap items-start justify-center gap-x-9 gap-y-11 max-ph:gap-x-0 max-ph:gap-y-[34px]">
        {TOOLS.map((tool) => (
          <ToolCard key={tool.name} tool={tool} />
        ))}
      </div>
    </section>
  );
}
