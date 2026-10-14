import useLean from '../hooks/useLean';
import AnthonyFx from './art/work/AnthonyFx';
import PurehydroFx from './art/work/PurehydroFx';
import WillpowerFx from './art/work/WillpowerFx';
import BrowserFrame from './BrowserFrame';

// the animated lights that sit on top of each backdrop, keyed by project slug
const FX = {
  'st-anthonys': AnthonyFx,
  purehydro: PurehydroFx,
  willpower: WillpowerFx,
};

export default function WorkCard({ project: p }) {
  const lean = useLean();
  const Fx = FX[p.slug];

  return (
    <article
      className={`wcard${p.wide ? ' wcardW' : ''}`}
      style={{ flex: p.flex, height: p.height }}
      {...lean}
    >
      <div
        className="cardArt"
        style={{
          backgroundImage: `url(${p.backdrop})`,
          backgroundSize: 'cover',
          backgroundPosition: p.backdropPosition,
        }}
      />
      <Fx />
      <BrowserFrame domain={p.domain} title={p.title} wire={p.wire} screenshot={p.screenshot} />
      <span className="wcard__visit" aria-hidden="true">
        ↗
      </span>

      <div className="wtext">
        <div className="wtext__meta">
          {p.n} &nbsp;·&nbsp; {p.domain} ↗
        </div>
        <h3 className="wtext__title">{p.title}</h3>
        <div className="wtext__desc">{p.desc}</div>
        <div className="wtext__tags">
          {p.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* the whole card is one link */}
      <a
        className="wcard__link"
        href={p.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${p.title}`}
      />
    </article>
  );
}
