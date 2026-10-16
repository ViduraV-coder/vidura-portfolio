import { RESULTS } from '../data/results';

// "35%" -> { before: '', n: '35', after: '%' }. anything else ("Top 3", 1.2s) is shown as is, no count-up
function splitValue(value) {
  const m = /^(\D*)(\d+)([^\d.,].*)?$/.exec(value);
  return m ? { before: m[1], n: m[2], after: m[3] || '' } : null;
}

// a row of figures under the project cards (data/results.js)
export default function ResultsStrip() {
  return (
    <div className="relative z-1 mt-[72px] max-ph:mt-14">
      <div data-reveal className="font-mono text-[13px] tracking-[0.16em] text-sky">
        RESULTS
      </div>
      <h3
        data-reveal
        className="mt-3 font-display text-[clamp(28px,3vw,38px)] leading-[1.1] font-medium text-balance text-cream [text-shadow:0_1px_12px_rgba(6,10,40,0.7)]"
      >
        A few numbers
      </h3>

      <div className="mt-7 grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-4">
        {RESULTS.map((r) => {
          const parts = splitValue(r.value);
          return (
            <div
              data-reveal
              className="rounded-[20px] border border-[rgba(255,255,255,0.14)] px-[22px] py-5 shadow-[0_24px_48px_-28px_rgba(0,0,0,0.8)] backdrop-blur-[16px] [background:linear-gradient(rgba(10,14,40,0.3),rgba(10,14,40,0.3)),rgba(255,255,255,0.07)] max-ph:backdrop-blur-none max-ph:[background:rgba(36,44,104,0.8)]"
              key={r.label}
            >
              <div className="font-display text-[44px] leading-none font-medium text-amber tabular-nums">
                {parts ? (
                  <>
                    {parts.before}
                    <span data-count={parts.n} data-suffix={parts.after}>
                      {parts.n}
                      {parts.after}
                    </span>
                  </>
                ) : (
                  r.value
                )}
              </div>
              <div className="mt-2.5 text-[15px] leading-[1.45] text-haze">{r.label}</div>
              <div className="mt-3 font-mono text-[11px] tracking-[0.1em] text-sky uppercase">
                {r.where}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
