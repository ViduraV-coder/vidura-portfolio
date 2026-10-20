// all the text and links for the page, the components only lay them out

// the booking link has to be a normal https url. anything else (typo, no https://, junk) is ignored and
// the default is used, so the button always works
function httpsLink(value) {
  if (!value) return '';
  try {
    const url = new URL(value);
    if (url.protocol === 'https:') return url.href;
  } catch {
    // not a url, falls through
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
  // the pdf lives in public/, swap the file and the link stays valid
  cv: `${import.meta.env.BASE_URL}Vidura-Gam-Hewage-CV.pdf`,
  // my calendly page. for another calendar (cal.com, a google appointment page...) set
  // VITE_BOOKING_URL=https://... in .env or the host's settings and that wins. set BOOKING_PAGE to ''
  // and the button opens a pre-written email instead
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
  badge: 'TAKING ON NEW PROJECTS',
  lead: 'Full-stack developer in London. I build fast websites and web apps, and I like motion, 3D and late-night debugging.',
  primary: { href: '#work', label: 'See my work' },
  secondary: { label: 'Book a 15-min call' },
  cue: 'SCROLL',
};

export const ABOUT = {
  eyebrow: '01 - ABOUT',
  lead: "I'm a full-stack developer with more than five years of building and shipping responsive web apps in Next.js, React, Node.js and Supabase. I take client projects on alone, from the first requirements call to launch, and I like sweating the small details.",
  stats: [
    { value: '5+ yrs', label: 'building for the web' },
    { value: 'London', label: "where I'm based" },
    { value: '15+', label: 'projects delivered on schedule' },
  ],
};

// the small label above each heading
export const CHAPTERS = {
  work: { eyebrow: '02 - SELECTED WORK' },
  toolkit: { eyebrow: '03 - TOOLKIT' },
  journey: { eyebrow: '04 - JOURNEY' },
  contact: { eyebrow: '05 - SAY HELLO' },
};

export const COPY = {
  work: {
    caption:
      'The valley switches its lights on, one window at a time. Each one is something I built.',
  },
  toolkit: {
    caption: 'Lanterns drift up from the workshop. Every one carries a tool I reach for.',
  },
  journey: {
    caption: 'The long road. Quiet, a bit lonely, and worth it.',
    next: 'Next chapter: your project?',
  },
  contact: {
    caption: 'First light, and the cat slept through all of it.',
    lead: "I'm taking on new client projects and I'm open to the right full-time role. Tell me what you're building.",
    book: 'Book a 15-minute call',
    or: 'or write to me directly',
    cv: 'Download CV',
    copy: 'Copy',
    copied: 'Copied!',
    copyFailed: 'Press Ctrl or Cmd + C',
  },
};

export const FOOTER = {
  paintedWith: 'Painted with',
  stack: ['React', 'Three.js', 'GSAP', 'Tailwind'],
  backToTop: 'Back to top ↑',
  optimized: 'Optimized with Claude',
};
