// quotes from people I've worked with. three slots: the first is the client's and shown larger, the other two
// are colleagues. a slot with no quote and name stays hidden on the live site (a dashed box in `npm run dev`).
// write the quote without quote marks, the site adds them. a blank line starts a new paragraph
//   kind     'client' (the featured card, keep it first) or 'colleague'
//   quote    what they said
//   name     who said it
//   role     job title
//   company  where they work

// set this to false to hide the whole "What people say" section
export const SHOW_TESTIMONIALS = true;

export const TESTIMONIALS = [
  { kind: 'client', quote: '', name: '', role: '', company: '' },
  {
    kind: 'colleague',
    quote: `I really appreciate how well you bring my UI/UX designs to life. You do an amazing job turning my designs into fully functional, responsive interfaces while making sure the animations and interactions feel just right.

It's great to see how you combine your technical skills with an understanding of the design itself. Working with you has been a great experience, and I'm genuinely impressed with the quality of your work.`,
    name: 'Hashen Tharindu',
    role: 'Graphic Designer, UI/UX',
    company: 'Squarcle',
  },
  {
    kind: 'colleague',
    quote: `Vidura is a developer I trust completely. We've teamed up on many websites and backend builds, and he consistently brings deep skill, steady follow-through, and a genuine appetite for finding better ways to solve problems. Long before AI tools came along, his creativity helped us ship front-end features that stood out. I'd recommend him to anyone without a second thought.`,
    name: 'Dilsara Kulasinghe',
    role: 'Founder & Principal Solutions Architect',
    company: 'Tetrad Global (Pvt) Ltd',
  },
];
