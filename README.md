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
    work.js             the project cards
    toolkit.js          the five toolkit cards
    journey.js          the timeline
    ribbons.js          the two scrolling ribbons under the hero
    decor.js            where the foliage, sparks and lanterns sit
  components/           one file per section (Hero, About, Work, ...) plus the cards
    ui/                 small shared pieces (chapter heading, foliage, lantern ...)
    art/                the painted scenes and their animated lights
      tools/            one file per toolkit arch
      work/             the lights over each work card
  hooks/                useLean, useScrollPreview, useScrollProgress, useCopyToClipboard, useReducedMotion,
                        usePauseOffscreenSvg
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

**Screenshots on the work cards.** Each card shows a real screenshot of the site. They live in
`src/assets/shots/`, named after the project, and can be swapped for new ones:

```
st-anthonys.webp
purehydro.webp
fletching.webp
imedra.webp
natyadarshitha.webp
willpower.webp
```

(A card with no picture falls back to a plain wireframe.)

jpg, png, webp and avif all work and nothing else needs editing. Use the whole home page as one tall
picture. The card shows the top of it, and while you hover the card the page scrolls slowly down,
pauses, scrolls back up and repeats (on a touch screen it just keeps going). Screenshots about 1440px
wide look sharpest.

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
- Work cards: on a wide screen they sit on a 12-column grid, `span` in `src/data/work.js` is how many
  columns a card takes. Today that's four rows: St. Anthony's (7) and Purehydro (5), Fletching (5) and
  Imedra (7), then Natyadarshitha (12) and WillPower (12) on a row each. To add a card, add an object
  to `PROJECTS`, drop `<slug>.webp` in `src/assets/shots/`, paint a backdrop for `src/assets/img/work/`
  and give it a lights overlay in `src/components/art/work/` (copy one of the small ones).
- 1180px and down: the About portrait shrinks to stay next to the text, the two wide work cards stack.
- 1000px and down: tablet layout with a round menu button instead of the nav links (the "Let's talk"
  button moves into that menu).
- 1000px and down: the Journey road becomes a dotted rail on the left, with a dot for each stop. The
  amber fill and the lit dots follow your scrolling (`useScrollProgress`, `.jrail` in `responsive.css`).
- 700px and down: phone layout. Lantern names are hidden here, they would be about 5px tall.
- Work cards: whenever the two top cards can't sit side by side (about 1118px and narrower) every card
  stacks the same way, browser window on top and the words underneath, so the six screenshots are the
  same size. This one is a container query on `.wgrid`, not a media query.

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

## Speed

- `vite.config.js` has a small plugin that, at build time, puts the stylesheet straight into
  `index.html` (it's only ~7 KB gzipped, so it's one less request before the first paint) and preloads
  the big hero painting, which React would otherwise only ask for once the JavaScript has run.
- `usePauseOffscreenSvg` pauses the SVG `<animate>` tags on any picture that is off screen and starts
  them again just before it scrolls into view. Without it the page keeps the browser busy even when
  nothing visible is moving. On phones and tablets it also holds them (and the scenery's css loops,
  through an `is-scrolling` class on `<html>`) still while the page is being scrolled, then lets them
  carry on a moment after it stops. The slow zoom behind each work card and the self-scrolling
  screenshots are held the same way.
- The long night sky behind Work, Tools, Journey and Contact is cut into ten bands (`StoryBackdrop.jsx`,
  firefly data in `src/data/fireflies.js`) so each band can pause on its own. One page-tall svg is
  always "on screen" somewhere, which meant every firefly animated all the time.
- On phones (700px and under) the Tools cards don't bob and use a solid tint instead of the frosted-glass
  blur, with lighter shadows. Those were the most expensive things to repaint while scrolling.
- Everything in `dist/assets/` has a hashed file name, so tell your host to cache it for a long time
  (Netlify, Vercel and Cloudflare Pages already do). Make sure gzip or brotli is on for text files.

## Before going live

- The addresses in `index.html` (canonical, `og:url`, `og:image`, `twitter:image`, the json-ld), in
  `public/robots.txt` and in `public/sitemap.xml` all point at `https://viduvish.dev`. If you end up on
  a different domain, search for `viduvish.dev` and change every match.
- The current screenshots are fairly small. If you have the chance, replace them with whole-page
  captures about 1440px wide so the hover preview is sharper.
- The footer says "Painted with React, Three.js, GSAP, Tailwind", which is copy from the design. This
  build only uses React and plain CSS, so change `FOOTER.stack` in `src/data/site.js` to whatever you
  want it to say.
- The hero painting is 1672px wide, so it is enlarged on a 4K screen. Replace the files in
  `src/assets/img/hero/` with bigger versions (same names, same framing) if you want it sharper.

## Fonts

Fraunces, Zen Maru Gothic and DM Mono are bundled in `src/assets/fonts/` (Latin characters only) under
the SIL Open Font License. The licence texts are next to the files. Nothing is loaded from Google.
