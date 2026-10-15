// text and links for the whole page live in this file, the components only lay them out

// Only a normal https link is accepted for the booking button. A typo, a link without https://
// or something odd pasted into the setting is ignored and the default booking page is used, so the
// button always works and nothing strange can end up in an href.
function httpsLink(value) {
  if (!value) return '';
  try {
    const url = new URL(value);
    if (url.protocol === 'https:') return url.href;
  } catch {
    // not a link at all, handled below
  }
  if (import.meta.env.DEV)
    console.warn(`VITE_BOOKING_URL ignored, it needs to start with https:// (got "${value}")`);
  return '';
}

const BOOKING_PAGE = 'https://calendly.com/viduvish97/15-min-meeting';

export const SITE = {
  name: 'Vidura Gam Hewage',
  email: 'hello@viduvish.dev',
  year: 2026,
  github: 'https://github.com/ViduraV-coder',
  linkedin: 'https://linkedin.com/in/vidura-vishwanath',
  // the PDF lives in public/. Replace the file to update it, the link stays the same
  cv: `${import.meta.env.BASE_URL}Vidura-Gam-Hewage-CV.pdf`,
  // My Calendly page for the 15-minute call. To use another calendar (Cal.com, a Google appointment
  // page...) set VITE_BOOKING_URL=https://... in a .env file or in the host's settings, it takes
  // priority. Make BOOKING_PAGE an empty string and the button opens an email that already says
  // "I'd like a 15-minute call" instead.
  booking: httpsLink(import.meta.env.VITE_BOOKING_URL) || BOOKING_PAGE,
};

const CALL_SUBJECT = '15-minute intro call';
const CALL_BODY = `Hi Vidura,

I'd like to book a 15-minute call about my project.

What I need:
Rough timeline:
Good times for me (UK time):
`;

// where every "Book a 15-minute call" button points
export const BOOK_CALL = SITE.booking
  ? { href: SITE.booking, external: true }
  : {
      href: `mailto:${SITE.email}?subject=${encodeURIComponent(CALL_SUBJECT)}&body=${encodeURIComponent(CALL_BODY)}`,
      external: false,
    };

export const NAV = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#toolkit', label: 'Toolkit' },
  { href: '#journey', label: 'Journey' },
];

export const NAV_CTA = { href: '#contact', label: "Let's talk" };

export const HERO = {
  badge: 'TAKING ON NEW UK PROJECTS',
  lead: 'Full-stack developer crafting fast, thoughtful products, with a soft spot for motion, 3D and late-night debugging.',
  primary: { href: '#work', label: 'See my work' },
  secondary: { label: 'Book a 15-min call' },
  cue: 'SCROLL',
};

export const ABOUT = {
  eyebrow: '01 — ABOUT',
  lead: "I'm a full-stack developer who loves the moment a product stops feeling like software and starts feeling like a place. For more than five years I've built and shipped responsive web apps with Next.js, React, Node.js and Supabase, taking client projects alone from the first requirements call to launch, and I care about the small details people feel but never notice.",
  stats: [
    { value: '5+ yrs', label: 'building for the web' },
    { value: 'London', label: "where I'm based" },
    { value: '15+', label: 'projects delivered on schedule' },
  ],
};

// time + name make the little clock pill, color is the glow on the spine dot,
// eyebrow is the small label above each heading
export const CHAPTERS = {
  work: { time: '21:40', name: 'NIGHTFALL', color: '#8FDCFF', eyebrow: '02 — SELECTED WORK' },
  toolkit: { time: '23:30', name: 'LANTERNS', color: '#FFB547', eyebrow: '03 — TOOLKIT' },
  journey: { time: '02:10', name: 'THE LONG ROAD', color: '#E58FD0', eyebrow: '04 — JOURNEY' },
  contact: { time: '05:50', name: 'FIRST LIGHT', color: '#FFB278', eyebrow: '05 — SAY HELLO' },
};

export const COPY = {
  work: {
    caption:
      'The valley switches its lights on, one window at a time. Each one is something I built.',
    hint: 'Six windows lit so far, with more on the way.',
  },
  toolkit: {
    caption: 'Lanterns drift up from the workshop. Every one carries a tool I reach for.',
    lead: 'Five little night scenes, one for each part of the stack, each with its own lamp left on.',
  },
  journey: {
    caption: 'The long road. Quiet, a little lonely, completely worth it.',
    next: 'Next chapter: your project?',
  },
  contact: {
    caption: 'First light, and the cat slept through all of it.',
    lead: "I'm taking on new client projects in the UK, and I'm open to the right full-time role. Tell me what you're building and we'll take it from there.",
    book: 'Book a 15-minute call',
    or: 'or write to me directly',
    cv: 'Download CV',
    copy: 'Copy',
    copied: 'Copied!',
    copyFailed: 'Press Ctrl+C',
  },
};

export const FOOTER = {
  paintedWith: 'Painted with',
  stack: ['React', 'Three.js', 'GSAP', 'Tailwind'],
  backToTop: 'Back to top ↑',
};
