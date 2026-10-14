import useCopyToClipboard from '../hooks/useCopyToClipboard';
import { CHAPTERS, COPY, FOOTER, SITE } from '../data/site';
import ContactBackdrop from './art/ContactBackdrop';
import ChapterIntro from './ui/ChapterIntro';
import SpineNode from './ui/SpineNode';

export default function Contact() {
  const chapter = CHAPTERS.contact;
  const [copied, copy] = useCopyToClipboard();
  const resume = `mailto:${SITE.email}?subject=${encodeURIComponent(SITE.resumeSubject)}`;

  return (
    <section id="contact" className="chapSec">
      <div className="sProps" aria-hidden="true">
        <ContactBackdrop />
      </div>
      <SpineNode time={chapter.time} color={chapter.color} />

      <div className="cWrap">
        <ChapterIntro
          chapter={chapter}
          caption={COPY.contact.caption}
          titleClass="sectionTitle--contact"
          center
        >
          Shall we build something <em>together?</em>
        </ChapterIntro>
        <p className="contactLead">{COPY.contact.lead}</p>

        <div className="cmail">
          <span className="cmail__addr">{SITE.email}</span>
          <button
            type="button"
            className="cmail__copy"
            aria-live="polite"
            onClick={() => copy(SITE.email)}
          >
            {copied ? COPY.contact.copied : COPY.contact.copy}
          </button>
        </div>

        <div className="contactLinks">
          <a className="contactLink" href={SITE.github} target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>
          <a className="contactLink" href={SITE.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </a>
          <a className="contactLink" href={resume}>
            Résumé on request
          </a>
        </div>
      </div>

      <footer className="cFoot">
        <span>
          © {SITE.year} {SITE.name}
        </span>
        <span className="cFoot__stack">
          <span>{FOOTER.paintedWith}</span>
          {FOOTER.stack.map((item) => (
            <span className="cFoot__chip" key={item}>
              {item}
            </span>
          ))}
        </span>
        <a href="#top">{FOOTER.backToTop}</a>
      </footer>
    </section>
  );
}
