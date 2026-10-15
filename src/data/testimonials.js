// Quotes from people I've worked with. Three slots: the first is the client's and is shown
// larger, the other two are colleagues. A slot with no quote or name stays hidden on the live
// site (with `npm run dev` it shows as a dashed box, so you can see where it will go).
// Write the quote without quotation marks (the site adds them). A blank line starts a new paragraph.
//   kind     'client' (the featured card, keep it first) or 'colleague'
//   quote    what they said, in their words
//   name     who said it
//   role     their job title
//   company  where they work

// The whole "What people say" section is switched off for now. Set this to true to bring it back.
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
