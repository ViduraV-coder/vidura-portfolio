import { useRef } from 'react';
import useCopyToClipboard from '../hooks/useCopyToClipboard';
import { CHAPTERS, COPY, FOOTER, SITE } from '../data/site';
import ContactBackdrop from './art/ContactBackdrop';
import ChapterIntro from './ui/ChapterIntro';
import BookCall from './ui/BookCall';
import { GHOST_BUTTON } from './ui/classes';

export default function Contact() {
  const chapter = CHAPTERS.contact;
  const [copyStatus, copy] = useCopyToClipboard();
  const address = useRef(null);

  // clipboard blocked? select the address so ctrl+c still works
  const copyEmail = async () => {
    if (await copy(SITE.email)) return;
    const range = document.createRange();
    range.selectNodeContents(address.current);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  };

  return (
    <section id="contact" className="chapSec">
      <div className="sProps" aria-hidden="true">
        <ContactBackdrop />
      </div>

      <div className="relative z-2 mx-auto max-w-[980px] px-[clamp(20px,6.7vw,96px)] pt-[150px] pb-[150px] text-center before:pointer-events-none before:absolute before:inset-[34%_-4%_24%] before:-z-1 before:content-[''] before:[background:radial-gradient(closest-side,rgba(44,12,58,0.74),rgba(44,12,58,0))] max-lap:before:inset-[15%_-10%_22%] max-lap:before:[background:radial-gradient(closest-side,rgba(44,12,58,0.8),rgba(44,12,58,0.5)_62%,rgba(44,12,58,0))] max-tab:pt-[130px] max-ph:px-5 max-ph:pt-[110px] max-ph:pb-[250px] max-ph:before:inset-[8%_-16%_20%]">
        {/* sunrise is brightest behind the small text, so ::before puts a dark patch behind it and the text gets a shadow */}
        <ChapterIntro chapter={chapter} caption={COPY.contact.caption} size="contact" dawn center>
          Shall we build something <em>together?</em>
        </ChapterIntro>
        <p
          data-reveal
          className="mx-auto mt-3 max-w-[560px] text-[18px] leading-[1.65] text-balance text-[#fff5e2] [text-shadow:0_1px_2px_rgba(44,12,58,0.4),0_0_16px_rgba(44,12,58,0.5)]"
        >
          {COPY.contact.lead}
        </p>

        <BookCall
          data-reveal
          className="mt-9 inline-flex items-center gap-3 rounded-full bg-accent px-8 py-[18px] text-[18px] font-bold text-ink shadow-[0_16px_36px_-14px_rgba(255,181,71,0.6)]"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <rect x="2.5" y="4" width="15" height="13.5" rx="3" stroke="#120F26" strokeWidth="2" />
            <path
              d="M2.5 8.5H17.5M6.5 2.5V5.5M13.5 2.5V5.5"
              stroke="#120F26"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          {COPY.contact.book}
        </BookCall>
        <div
          data-reveal
          className="mx-auto mt-6 w-fit rounded-full bg-[rgba(44,12,58,0.55)] px-4 py-1.5 font-mono text-[12px] tracking-[0.14em] text-white uppercase [text-shadow:0_1px_2px_rgba(44,12,58,0.4),0_0_16px_rgba(44,12,58,0.5)]"
        >
          {COPY.contact.or}
        </div>
        <div
          data-reveal
          className="mt-4 inline-flex items-center gap-[22px] rounded-full bg-cream p-[12px_12px_12px_34px] shadow-[0_20px_50px_-18px_rgba(0,0,0,0.8),0_0_50px_-10px_rgba(255,181,71,0.35)] max-ph:flex max-ph:max-w-full max-ph:flex-wrap max-ph:justify-center max-ph:gap-2.5 max-ph:rounded-[30px] max-ph:p-[12px_14px_12px_22px]"
        >
          <span
            ref={address}
            className="font-display text-[24px] text-ink max-ph:text-[clamp(17px,5.2vw,24px)] max-ph:break-all"
          >
            {SITE.email}
          </span>
          <button
            type="button"
            className="rounded-full border-0 bg-accent px-6 py-3.5 text-[16px] font-bold text-ink"
            aria-live="polite"
            onClick={copyEmail}
          >
            {copyStatus === 'copied'
              ? COPY.contact.copied
              : copyStatus === 'failed'
                ? COPY.contact.copyFailed
                : COPY.contact.copy}
          </button>
        </div>

        <div data-reveal className="mt-[22px] flex flex-wrap justify-center gap-3">
          <a className={GHOST_BUTTON} href={SITE.github} target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>
          <a
            className={GHOST_BUTTON}
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
          <a className={GHOST_BUTTON} href={SITE.cv} download>
            {COPY.contact.cv} ↓
          </a>
        </div>
      </div>

      {/* fades into the dark city so the small print stays off the bright windows */}
      <footer className="absolute inset-x-0 bottom-0 z-2 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 bg-[linear-gradient(0deg,rgba(5,8,24,0.86),rgba(5,8,24,0.55)_70%,rgba(5,8,24,0))] px-[clamp(20px,6.7vw,96px)] py-[22px] font-mono text-[12px] tracking-[0.06em] text-cream max-ph:justify-center max-ph:pb-[18px] max-ph:text-center">
        <span className="flex flex-col gap-1.5 max-ph:items-center">
          <span>
            © {SITE.year} {SITE.name}
          </span>
          <span>{FOOTER.optimized}</span>
        </span>
        <span className="flex flex-wrap items-center gap-2">
          <span>{FOOTER.paintedWith}</span>
          {FOOTER.stack.map((item) => (
            <span
              className="rounded-full border border-[rgba(243,233,210,0.5)] px-2.5 py-1"
              key={item}
            >
              {item}
            </span>
          ))}
        </span>
        <a className="m-[-14px_-12px] p-[14px_12px] text-cream" href="#top">
          {FOOTER.backToTop}
        </a>
      </footer>
    </section>
  );
}
