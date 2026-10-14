# Vidura Gam Hewage, portfolio

My portfolio site. One long page that starts in a painted night room, goes through Work, Toolkit and
Journey, and ends at sunrise over the city. React 18 and Vite, plain CSS, no UI library.

It works from small phones (320px) up to 4K and 5K screens.

## Running it

You need Node 20.19 or newer.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # builds into dist/
npm run preview    # serves dist/ at http://localhost:4173
npm run lint       # eslint
npm run format     # prettier
```

## Where things are

```
index.html              title, description, link preview tags
public/                 favicon.svg, og.jpg (the link preview picture)
src/
  main.jsx, App.jsx     entry and the page, top to bottom
  data/                 all the words and numbers, start here
    site.js             name, email, links, headings, captions, footer
    work.js             the three project cards
    toolkit.js          the five toolkit cards
    journey.js          the timeline
    ribbons.js          the two scrolling ribbons under the hero
    decor.js            where the foliage, sparks and lanterns sit
  components/           one file per section (Hero, About, Work, ...) plus the cards
    ui/                 small shared pieces (chapter heading, foliage, lantern ...)
    art/                the painted scenes and their animated lights
      tools/            one file per toolkit arch
      work/             the lights over each work card
  hooks/                useLean, useScrollProgress, useCopyToClipboard, useReducedMotion
  styles/
    animations.css      every @keyframes in one place
    base.css            accent colour and the page wrapper
    hero.css ... contact.css   one file per section
    interactions.css    hover lean, focus rings
    responsive.css      tablet, phone and big-screen rules, keep it last
    fonts.css           the bundled fonts
  assets/
    img/                the painted pictures (webp)
    shots/              project screenshots go here
    fonts/              Fraunces, Zen Maru Gothic, DM Mono (woff2) and their licences
    index.js            one import list, use IMG.name anywhere
```

The files in `components/art/` are mostly positions, percentages and SVG animation for the paintings.
You shouldn't need to touch them unless you swap a picture.

## Changing things

Text and links: `src/data/site.js`. Projects: `src/data/work.js`. Toolkit chips: `src/data/toolkit.js`.
Timeline: `src/data/journey.js`.

**Screenshots on the work cards.** The cards show a wireframe until you add a real picture. Drop a
screenshot of each site into `src/assets/shots/` named after the project:

```
st-anthonys.jpg
purehydro.jpg
willpower.jpg
```

jpg, png, webp and avif all work and nothing else needs editing. The frame crops to 16:10 from the
top, so shoot the top of the home page at about 1600px wide.

**Accent colour.** One variable at the top of `src/styles/base.css`:

```css
:root {
  --accent: #ffb547; /* try #6fd3ff, #5be38f or #ff8a6b */
}
```

The paintings keep their own lamplight, only the interface colour changes.

## Responsive notes

- 1600px and up: the whole page is scaled up in steps (1.1x at 1600, 1.35x at 1920, 1.7x at 2400, 2x
  at 2880, 2.66x at 3840, and so on) so big screens get the same layout rather than a small page in a
  big window. It uses CSS `zoom`, which Chrome, Edge, Safari and Firefox 126+ support. Older Firefox
  just shows the normal size.
- 1180px and down: the About portrait shrinks to stay next to the text, the wide work card stacks.
- 1000px and down: tablet layout with a round menu button instead of the nav links.
- 760px and down: the Journey road becomes a dotted line on the left.
- 700px and down: phone layout.

All of it lives in `responsive.css`.

If the visitor has "reduce motion" switched on, the CSS and SVG animations stop, the hover lean is off
and the road is shown fully drawn.

## Deploying

`npm run build` makes a static site in `dist/`. Links are relative, so it works at the root of a
domain, in a sub-folder, or on a GitHub Pages project URL.

- Netlify: build command `npm run build`, publish directory `dist` (or drag the `dist` folder onto
  app.netlify.com/drop).
- Vercel: import the repo, it picks up Vite on its own.
- Cloudflare Pages: build command `npm run build`, output directory `dist`.
- GitHub Pages: add `.github/workflows/pages.yml` with the usual checkout, setup-node, `npm ci`,
  `npm run build`, upload-pages-artifact (path `dist`) and deploy-pages steps, then set Pages to
  "GitHub Actions" in the repo settings.
- Anywhere else: upload what's inside `dist/`.

## Before going live

- In `index.html` change `og:image` to the full address, e.g. `https://your-domain.com/og.jpg`, and add
  `<link rel="canonical" href="https://your-domain.com/" />`. Chat apps need the full URL for link
  previews.
- Add the work screenshots (above).
- The footer says "Painted with React, Three.js, GSAP, Tailwind", which is copy from the design. This
  build only uses React and plain CSS, so change `FOOTER.stack` in `src/data/site.js` to whatever you
  want it to say.
- The Toolkit intro says the pictures are "depth-mapped planes". They lean toward the cursor, but they
  are flat images with a small shift. Reword `COPY.toolkit.lead` in `site.js` if you want it exact.
- The hero painting is 1672px wide, so it is enlarged on a 4K screen. Replace the files in
  `src/assets/img/hero/` with bigger versions (same names, same framing) if you want it sharper.

## Fonts

Fraunces, Zen Maru Gothic and DM Mono are bundled in `src/assets/fonts/` (Latin characters only) under
the SIL Open Font License. The licence texts are next to the files. Nothing is loaded from Google.
