import useLean from '../hooks/useLean';
import useScrollPreview from '../hooks/useScrollPreview';
import AnthonyFx from './art/work/AnthonyFx';
import FletchingFx from './art/work/FletchingFx';
import ImedraFx from './art/work/ImedraFx';
import NatyaFx from './art/work/NatyaFx';
import PurehydroFx from './art/work/PurehydroFx';
import WillpowerFx from './art/work/WillpowerFx';
import BrowserFrame from './BrowserFrame';

// the animated lights that sit on top of each backdrop, keyed by project slug
const FX = {
  'st-anthonys': AnthonyFx,
  purehydro: PurehydroFx,
  fletching: FletchingFx,
  imedra: ImedraFx,
  natyadarshitha: NatyaFx,
  willpower: WillpowerFx,
};

// tailwind needs whole class strings, so the sizes the data file can ask for are spelled out
const SPAN = { 5: 'col-span-5', 7: 'col-span-7', 12: 'col-span-12' };
const HEIGHT = { 540: 'h-[540px]', 680: 'h-[680px]' };

// three layouts: "card" is the tall one (picture on top, words at the bottom), "wide" is a banner with the
// browser on the right, "flip" has it on the left. when the grid is too narrow for two cards (container
// query, ~968px) everything stacks: browser, then words. wide banners also stack below max-lap (1180px)
const LAYOUT = {
  card: {
    box: '@max-[968px]/work:col-[1/-1] @max-[968px]/work:flex @max-[968px]/work:h-auto @max-[968px]/work:flex-col',
    text: 'right-0 bottom-0 left-0 px-8 pt-[90px] pb-[30px] bg-[linear-gradient(180deg,rgba(5,8,24,0)_0%,rgba(5,8,24,0.92)_46%)]',
    title: 'mt-1.5 text-[36px]',
    desc: 'mt-1.5 leading-[1.5] text-[rgba(243,233,210,0.9)]',
    delivered: 'mt-3',
    tags: 'mt-3.5',
  },
  wide: {
    box: 'max-lap:flex max-lap:h-auto max-lap:flex-col @max-[968px]/work:col-[1/-1] @max-[968px]/work:flex @max-[968px]/work:h-auto @max-[968px]/work:flex-col',
    text: 'top-0 bottom-0 left-0 flex w-[56%] flex-col justify-center py-0 pr-10 pl-11 bg-[linear-gradient(90deg,rgba(5,8,24,0.92)_0%,rgba(5,8,24,0.7)_62%,rgba(5,8,24,0)_100%)]',
    title: 'mt-2 text-[40px] leading-[1.05]',
    // dark halo so the words stay readable over a bright sunset
    desc: 'mt-2.5 max-w-[min(460px,calc(89%-90px))] max-lap:max-w-[460px] leading-[1.55] text-[rgba(243,233,210,0.92)] [text-shadow:0_1px_12px_rgba(5,8,24,0.85)]',
    // both lines stop before the browser frame, which starts mid-banner (text box is 56% + padding,
    // the sum below is what is left)
    delivered: 'mt-3.5 max-w-[min(460px,calc(89%-90px))] max-lap:max-w-none',
    tags: 'mt-4',
  },
  flip: {
    box: 'max-lap:flex max-lap:h-auto max-lap:flex-col @max-[968px]/work:col-[1/-1] @max-[968px]/work:flex @max-[968px]/work:h-auto @max-[968px]/work:flex-col',
    text: 'top-0 right-0 bottom-0 flex w-[40%] flex-col justify-center py-0 pr-11 pl-[calc(7%+36px)] bg-[linear-gradient(270deg,rgba(5,8,24,0.92)_0%,rgba(5,8,24,0.76)_78%,rgba(5,8,24,0)_100%)]',
    title: 'mt-2 text-[40px] leading-[1.05]',
    desc: 'mt-2.5 max-w-[460px] leading-[1.55] text-[rgba(243,233,210,0.92)] [text-shadow:0_1px_12px_rgba(5,8,24,0.85)]',
    delivered: 'mt-3.5 max-w-[460px] max-lap:max-w-none',
    tags: 'mt-4',
  },
};

// the text block once its card has stacked
const STACKED_TEXT = {
  card: '@max-[968px]/work:relative @max-[968px]/work:order-2 @max-[968px]/work:w-auto @max-[968px]/work:bg-[linear-gradient(180deg,rgba(5,8,24,0)_0%,rgba(5,8,24,0.86)_12%,rgba(5,8,24,0.92)_100%)] @max-[968px]/work:p-[34px_40px_36px]',
  wide: 'max-lap:relative max-lap:order-2 max-lap:w-auto max-lap:bg-[linear-gradient(180deg,rgba(5,8,24,0)_0%,rgba(5,8,24,0.86)_12%,rgba(5,8,24,0.92)_100%)] max-lap:p-[34px_40px_36px] @max-[968px]/work:relative @max-[968px]/work:order-2 @max-[968px]/work:w-auto @max-[968px]/work:bg-[linear-gradient(180deg,rgba(5,8,24,0)_0%,rgba(5,8,24,0.86)_12%,rgba(5,8,24,0.92)_100%)] @max-[968px]/work:p-[34px_40px_36px]',
};
STACKED_TEXT.flip = STACKED_TEXT.wide;

export default function WorkCard({ project: p }) {
  const lean = useLean();
  const preview = useScrollPreview();
  const Fx = FX[p.slug];
  const kind = p.flip ? 'flip' : p.wide ? 'wide' : 'card';
  const layout = LAYOUT[kind];

  return (
    <article
      data-reveal
      className={`wcard group/card relative isolate overflow-hidden rounded-[32px] shadow-[0_30px_60px_-28px_rgba(0,0,0,0.9)] ${SPAN[p.span]} ${HEIGHT[p.height]} ${layout.box}`}
      {...lean}
      {...preview}
    >
      <div
        className="cardArt absolute inset-0 animate-[kenb_22s_ease-in-out_infinite_alternate] bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${p.backdrop})`, backgroundPosition: p.backdropPosition }}
      />
      <Fx />
      <BrowserFrame
        kind={kind}
        domain={p.domain}
        title={p.title}
        wire={p.wire}
        screenshot={p.screenshot}
      />
      <span
        className="absolute top-5 right-5 z-5 flex size-10 items-center justify-center rounded-full border border-[rgba(255,255,255,0.28)] bg-[rgba(10,14,40,0.62)] text-[18px] text-cream backdrop-blur-[10px]"
        aria-hidden="true"
      >
        ↗
      </span>

      <div className={`absolute max-ph:p-[26px_24px_28px]! ${layout.text} ${STACKED_TEXT[kind]}`}>
        {/* tighter tracking on phones so the long domain and its arrow fit on one line */}
        <div className="font-mono text-[13px] tracking-[0.14em] text-honey [text-shadow:0_1px_8px_rgba(5,8,24,0.85)] max-ph:text-[12px] max-ph:tracking-[0.06em] max-xxs:text-[11px] max-xxs:tracking-[0.03em]">
          {p.n} &nbsp;·&nbsp; {p.domain} ↗
        </div>
        <h3
          className={`font-display font-medium wrap-break-word text-cream max-ph:text-[30px]! @max-[968px]/work:text-[34px] ${layout.title}`}
        >
          {p.title}
        </h3>
        <div className={`text-[16px] ${layout.desc}`}>{p.desc}</div>
        {p.delivered?.length > 0 && (
          <ul
            className={`m-0 flex list-none flex-wrap gap-x-3.5 gap-y-0.5 p-0 font-mono text-[12px] leading-[1.55] text-[rgba(243,233,210,0.8)] [text-shadow:0_1px_8px_rgba(5,8,24,0.85)] ${layout.delivered}`}
          >
            <li className="tracking-[0.14em] text-honey uppercase">Delivered</li>
            {p.delivered.map((item) => (
              <li className="before:mr-1.5 before:text-honey before:content-['✓']" key={item}>
                {item}
              </li>
            ))}
          </ul>
        )}
        {/* appears once a real figure is added in data/work.js */}
        {p.result && (
          <div className="mt-3 inline-flex items-center gap-2 self-start rounded-full border border-[rgba(255,194,94,0.6)] bg-[rgba(255,194,94,0.12)] px-3 py-1 font-mono text-[12px] text-honey">
            <span aria-hidden="true">↗</span>
            {p.result}
          </div>
        )}
        <div className={`flex flex-wrap gap-2 ${layout.tags}`}>
          {p.tags.map((tag) => (
            <span
              className="rounded-full border border-[rgba(243,233,210,0.5)] px-3 py-[5px] font-mono text-[12px] text-cream"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* the whole card is one link */}
      <a
        className="absolute inset-0 z-6 focus-visible:rounded-[32px] focus-visible:[outline-offset:-6px]"
        href={p.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${p.title}`}
      />
    </article>
  );
}
