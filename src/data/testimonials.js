// quotes from people I've worked with. three slots: the first is the client's and shown larger, the other two
// are colleagues. a slot with no quote and name stays hidden on the live site (a dashed box in `npm run dev`).
// write the quote without quote marks, the site adds them. a blank line starts a new paragraph
//   kind     'client' (the featured card, keep it first) or 'colleague'
//   quote    what they said
//   name     who said it
//   role     job title
//   company  where they work

// the whole "What people say" section is off for now, set this to true to bring it back
export const SHOW_TESTIMONIALS = false;

export const TESTIMONIALS = [
  { kind: 'client', quote: '', name: '', role: '', company: '' },
  {
    kind: 'colleague',
    quote: `I really appreciate how well you bring my UI/UX designs to life. You do an amazing job turning my designs into fully functional, responsive interfaces while making sure the animations and interactions feel just right.

It’s great to see how you combine your technical skills with an understanding of the design itself. Working with you has been a great experience, and I’m genuinely impressed with the quality of your work.`,
    name: 'Hashen Tharindu',
    role: 'Graphic Designer, UI/UX',
    company: 'Squarcle',
  },
  { kind: 'colleague', quote: '', name: '', role: '', company: '' },
];
