import { HERO } from '../data/site';
import HeroScene from './art/HeroScene';
import Nav from './Nav';

export default function Hero() {
  return (
    <section id="top">
      <div className="heroArt">
        <HeroScene />
        <div className="heroShade--vignette" />
        <div className="heroShade--left" />
        <div className="heroShade--bottom" />
      </div>

      <Nav />

      <div className="heroText">
        <div className="heroBadge">
          <span />
          {HERO.badge}
        </div>
        <h1 className="heroTitle">
          I build worlds
          <br />
          that <em>live</em> on{' '}
          <span className="heroTitle__mark">
            the web.
            <svg aria-hidden="true" viewBox="0 0 200 14" preserveAspectRatio="none">
              <path
                d="M2 8 C22 0 38 14 58 6 S98 2 118 8 S160 12 198 4"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>
        <p className="heroLead">{HERO.lead}</p>
        <div className="heroActions">
          <a className="btnPrimary" href={HERO.primary.href}>
            {HERO.primary.label}
            <span className="btnPrimary__icon">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M8 2V14M8 14L3 9M8 14L13 9"
                  stroke="#F3E9D2"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
          <a className="btnGhost" href={HERO.secondary.href}>
            {HERO.secondary.label}
          </a>
        </div>
      </div>

      <div className="heroCue" aria-hidden="true">
        {HERO.cue}
        <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
          <path
            d="M6 1V12M6 12L2 8M6 12L10 8"
            stroke="#F3E9D2"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
