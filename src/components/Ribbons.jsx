import { RIBBON_MOTTO, RIBBON_SKILLS } from '../data/ribbons';

const VARIANTS = {
  a: {
    band: 'top-[58px] [transform:rotate(-2.2deg)] bg-accent font-display text-[34px] text-ink italic border-[rgba(18,15,38,0.4)] shadow-[0_18px_40px_-20px_rgba(255,181,71,0.45)]',
    track: 'animate-[tickL_150s_linear_infinite]',
    dot: 'bg-ink',
  },
  b: {
    band: 'top-[108px] [transform:rotate(1.6deg)] bg-[#16225c] font-mono text-[30px] font-medium tracking-[0.1em] text-sky border-[rgba(143,220,255,0.4)] shadow-[0_18px_40px_-20px_rgba(0,0,0,0.8)]',
    track: 'animate-[tickR_110s_linear_infinite]',
    dot: 'bg-go',
  },
};

// list is rendered twice and the track slides by half its width (tickL / tickR keyframes),
// so the loop never visibly jumps
function Ribbon({ variant, items }) {
  const v = VARIANTS[variant];
  return (
    <div
      className={`absolute -right-[60px] -left-[60px] flex items-center gap-11 overflow-hidden border-x-0 border-y-2 border-dashed py-4 whitespace-nowrap ${v.band}`}
    >
      <div className={`flex w-max items-center pl-[60px] ${v.track}`}>
        {[0, 1].map((copy) =>
          items.map((label, i) => (
            <div className="flex items-center gap-11 pr-11" key={`${copy}-${i}`}>
              <span>{label}</span>
              <span className={`size-2.5 rounded-full ${v.dot}`} />
            </div>
          )),
        )}
      </div>
    </div>
  );
}

export default function Ribbons() {
  return (
    <section
      className="relative h-[230px] overflow-hidden bg-night max-ph:[zoom:0.62]"
      aria-hidden="true"
    >
      <Ribbon variant="a" items={RIBBON_SKILLS} />
      <Ribbon variant="b" items={RIBBON_MOTTO} />
    </section>
  );
}
