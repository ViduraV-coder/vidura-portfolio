import { ABOUT } from '../data/site';
import AboutBackdrop from './art/AboutBackdrop';
import AboutBadge from './art/AboutBadge';
import AboutPortrait from './art/AboutPortrait';

export default function About() {
  return (
    <section id="about" className="aboutSec">
      <AboutBackdrop />

      <div className="abWrap">
        <AboutPortrait />
        <div className="abBadge" aria-hidden="true">
          <AboutBadge />
        </div>
      </div>

      <div className="abText">
        <div className="eyebrow">{ABOUT.eyebrow}</div>
        <h2 className="sectionTitle sectionTitle--about">
          Hello, traveller.
          <br />
          <em>I'm Vidura.</em>
        </h2>
        <p className="aboutLead">{ABOUT.lead}</p>
        <div className="stats">
          {ABOUT.stats.map((stat) => (
            <div className="stat" key={stat.value}>
              <div className="stat__value">{stat.value}</div>
              <div className="stat__label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
