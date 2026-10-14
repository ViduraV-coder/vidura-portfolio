// text and links for the whole page live in this file, the components only lay them out
export const SITE = {
  name: 'Vidura Gam Hewage',
  email: 'viduvish97@gmail.com',
  year: 2026,
  github: 'https://github.com/ViduraV-coder',
  linkedin: 'https://linkedin.com/in/vidura-vishwanath',
  resumeSubject: 'Résumé request',
};

export const NAV = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#toolkit', label: 'Toolkit' },
  { href: '#journey', label: 'Journey' },
];

export const NAV_CTA = { href: '#contact', label: "Let's talk" };

export const HERO = {
  badge: 'AVAILABLE FOR NEW ROLES',
  lead: 'Full-stack developer crafting fast, thoughtful products, with a soft spot for motion, 3D and late-night debugging.',
  primary: { href: '#work', label: 'See my work' },
  secondary: { href: '#contact', label: 'Say hello' },
  cue: 'SCROLL',
};

export const ABOUT = {
  eyebrow: '01 — ABOUT',
  lead: "I'm a full-stack developer who loves the moment a product stops feeling like software and starts feeling like a place. For more than five years I've built and shipped responsive web apps with Next.js, React, Node.js and Supabase, taking client projects alone from the first requirements call to launch, and I care about the small details people feel but never notice.",
  stats: [
    { value: '5+ yrs', label: 'building for the web' },
    { value: 'London', label: "where I'm based" },
    { value: '20+', label: 'projects delivered on schedule' },
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
    hint: 'Hover a card and the painted scene behind it leans toward your cursor.',
  },
  toolkit: {
    caption: 'Lanterns drift up from the workshop. Every one carries a tool I reach for.',
    lead: 'Five little night scenes, one for each part of the stack. On the live site every picture is a depth-mapped plane that leans toward your cursor.',
  },
  journey: {
    caption: 'The long road. Quiet, a little lonely, completely worth it.',
    next: 'Next chapter: your team?',
  },
  contact: {
    caption: 'First light, and the cat slept through all of it.',
    lead: "I'm open to new roles and interesting projects. Drop me a line and let's talk.",
    copy: 'Copy',
    copied: 'Copied!',
  },
};

export const FOOTER = {
  paintedWith: 'Painted with',
  stack: ['React', 'Three.js', 'GSAP', 'Tailwind'],
  backToTop: 'Back to top ↑',
};
