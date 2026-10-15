import { ABOUT, COPY, SITE } from '../data/site';
import AboutBackdrop from './art/AboutBackdrop';
import AboutBadge from './art/AboutBadge';
import AboutPortrait from './art/AboutPortrait';
import { Eyebrow, SectionTitle } from './ui/ChapterIntro';
import { GHOST_BUTTON } from './ui/classes';

export default function About() {
  return (
    <section
      id="about"
      className="relative flex flex-wrap items-center gap-x-[90px] gap-y-[70px] overflow-hidden bg-[linear-gradient(180deg,#070b1f_0%,#0a0f2e_100%)] px-[clamp(20px,6.7vw,96px)] pt-[90px] pb-[130px] max-lap:gap-11 max-tab:justify-center max-tab:gap-14 max-tab:pt-[72px] max-tab:pb-24 max-ph:gap-11 max-ph:px-5 max-ph:pt-14 max-ph:pb-20"
    >
      <AboutBackdrop />

      <div className="abWrap">
        <AboutPortrait />
        <div className="abBadge" aria-hidden="true">
          <AboutBadge />
        </div>
      </div>

      <div className="relative max-w-[640px] flex-[1_1_480px] max-lap:flex-[1_1_400px] max-tab:flex-[1_1_440px] max-ph:flex-[1_1_100%]">
        <Eyebrow>{ABOUT.eyebrow}</Eyebrow>
        <SectionTitle size="about">
          Hello, traveller.
          <br />
          <em>I'm Vidura.</em>
        </SectionTitle>
        <p
          data-reveal
          className="mt-[26px] text-[19px] leading-[1.75] text-haze max-ph:text-[17px]"
        >
          {ABOUT.lead}
        </p>
        <div className="mt-[34px] flex flex-wrap gap-4">
          {ABOUT.stats.map((stat) => (
            <div
              data-reveal
              className="flex-[1_1_150px] rounded-[20px] border border-white/14 bg-white/7 px-[22px] py-5 shadow-[0_24px_48px_-28px_rgba(0,0,0,0.8)] backdrop-blur-[16px]"
              key={stat.value}
            >
              <div className="font-display text-[30px] font-medium text-cream">{stat.value}</div>
              <div className="mt-1 text-[14px] text-mist">{stat.label}</div>
            </div>
          ))}
        </div>
        <a data-reveal className={`mt-6 inline-block ${GHOST_BUTTON}`} href={SITE.cv} download>
          {COPY.contact.cv} (PDF) ↓
        </a>
      </div>
    </section>
  );
}
