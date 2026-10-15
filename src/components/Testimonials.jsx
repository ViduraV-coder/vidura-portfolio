import { SHOW_TESTIMONIALS, TESTIMONIALS } from '../data/testimonials';

// What people say about working with me (data/testimonials.js). The client's quote comes first and
// is bigger, the colleagues' sit under it. The whole section stays out of the page while
// SHOW_TESTIMONIALS is false. Once it is on, nothing is shown until a quote has a name; while you
// work on the site locally the empty slots show as dashed boxes so you can see where they go.
export default function Testimonials() {
  if (!SHOW_TESTIMONIALS) return null;
  const items = import.meta.env.DEV ? TESTIMONIALS : TESTIMONIALS.filter((t) => t.quote && t.name);
  if (items.length === 0) return null;
  // a colleague on their own gets a roomier card instead of a half-empty row
  const loneColleague = items.filter((t) => t.kind !== 'client').length === 1;

  return (
    <div className="relative z-1 mt-[72px] max-ph:mt-14">
      <div data-reveal className="font-mono text-[13px] tracking-[0.16em] text-sky">
        KIND WORDS
      </div>
      <h3
        data-reveal
        className="mt-3 font-display text-[clamp(28px,3vw,38px)] leading-[1.1] font-medium text-balance text-cream [text-shadow:0_1px_12px_rgba(6,10,40,0.7)]"
      >
        What people say
      </h3>

      <div className="mt-7 grid grid-cols-2 gap-4 max-ph:grid-cols-1">
        {items.map((t, i) => (
          <Quote item={t} lone={loneColleague} key={t.name || `slot-${i}`} />
        ))}
      </div>
    </div>
  );
}

function Quote({ item: t, lone }) {
  const featured = t.kind === 'client';
  const empty = !t.quote;
  const paragraphs = empty
    ? [`${featured ? 'Client' : 'Colleague'} quote goes here (data/testimonials.js).`]
    : t.quote.split(/\n\s*\n/);

  // the client's card is the one to notice: warm glow, amber edge, a bigger quote
  const box = featured
    ? `col-span-2 max-ph:col-span-1 px-10 py-9 max-ph:px-6 max-ph:py-7 ${
        empty
          ? 'border-dashed border-[rgba(255,194,94,0.5)] bg-[rgba(255,194,94,0.05)]'
          : 'border-[rgba(255,194,94,0.85)] [background:linear-gradient(135deg,rgba(255,194,94,0.3),rgba(255,255,255,0.08)_65%),rgba(10,14,40,0.35)] shadow-[0_0_0_1px_rgba(255,194,94,0.25),0_30px_90px_-24px_rgba(255,181,71,0.7)] max-ph:[background:linear-gradient(135deg,rgba(96,72,64,0.97),rgba(36,44,104,0.92)_70%)]'
      }`
    : `px-7 py-6 ${lone ? 'col-span-2 max-w-[760px] max-ph:col-span-1' : ''} ${
        empty
          ? 'border-dashed border-[rgba(243,233,210,0.35)] bg-[rgba(255,255,255,0.03)]'
          : 'border-[rgba(255,255,255,0.16)] [background:linear-gradient(rgba(10,14,40,0.5),rgba(10,14,40,0.5)),rgba(255,255,255,0.08)] shadow-[0_24px_48px_-26px_rgba(0,0,0,0.8)] max-ph:[background:rgba(36,44,104,0.8)]'
      }`;

  return (
    <figure
      data-reveal
      className={`relative m-0 overflow-hidden rounded-[24px] border backdrop-blur-[14px] max-ph:backdrop-blur-none ${box}`}
    >
      {featured && (
        <span
          className="pointer-events-none absolute top-5 right-9 font-display text-[170px] leading-[0.8] text-[rgba(255,194,94,0.2)] select-none max-ph:top-4 max-ph:right-5 max-ph:text-[120px]"
          aria-hidden="true"
        >
          “
        </span>
      )}
      <div
        className={`relative font-mono text-[11px] tracking-[0.14em] uppercase ${
          featured ? 'inline-block rounded-full bg-amber px-3 py-1 font-bold text-ink' : 'text-sky'
        }`}
      >
        {featured ? 'From a client' : 'From a colleague'}
      </div>
      <blockquote
        className={`relative m-0 mt-4 font-display leading-[1.45] italic ${
          featured ? 'text-[clamp(23px,2.4vw,32px)]' : 'text-[19px]'
        } ${empty ? 'text-mist' : 'text-cream'}`}
      >
        {paragraphs.map((text, n) => (
          <p className={n > 0 ? 'm-0 mt-3' : 'm-0'} key={n}>
            {empty ? text : n === 0 ? `“${text}` : text}
            {!empty && n === paragraphs.length - 1 ? '”' : ''}
          </p>
        ))}
      </blockquote>
      <figcaption className="relative mt-5">
        <div className="text-[15px] font-bold text-cream">{t.name || 'Name'}</div>
        <div className="mt-0.5 font-mono text-[12px] tracking-[0.04em] text-sky">
          {[t.role || 'Role', t.company || 'Company'].join(' · ')}
        </div>
      </figcaption>
    </figure>
  );
}
