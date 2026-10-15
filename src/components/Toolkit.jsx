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

      <div className="relative z-1 mx-auto mb-20 max-w-[760px] text-center max-tab:mb-[60px] max-ph:mb-11">
        <ChapterIntro chapter={chapter} caption={COPY.toolkit.caption} center>
          Tools I <em>reach for</em>
        </ChapterIntro>
        <p
          data-reveal
          className="mx-auto mt-3.5 max-w-[580px] text-[16px] leading-[1.65] text-balance text-mist [text-shadow:0_1px_12px_rgba(6,10,40,0.7)]"
        >
          {COPY.toolkit.lead}
        </p>
      </div>

      <div className="relative z-1 flex flex-wrap items-start justify-center gap-x-9 gap-y-11 max-ph:gap-x-0 max-ph:gap-y-[34px]">
        {TOOLS.map((tool) => (
          <ToolCard key={tool.name} tool={tool} />
        ))}
      </div>
    </section>
  );
}
