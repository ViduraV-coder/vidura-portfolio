# Vidura Gam Hewage · Portfolio

[![CI](https://github.com/ViduraV-coder/vidura-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/ViduraV-coder/vidura-portfolio/actions/workflows/ci.yml)

Portfolio site for Vidura Gam Hewage, a freelance full-stack developer based in London. It is one long
page that starts in a painted night room, goes through Work, Toolkit and Journey, and ends at sunrise
over the city. It is aimed at UK clients first, with full-time roles as the second door.

**Live site:** <https://viduvish.dev>

![Link preview of the site](public/og.jpg)

## What is on the page

- **Hero:** a painted, lamplit attic with animated lights and a "Book a 15-minute call" button.
- **About:** a short introduction with an animated portrait.
- **Work:** six project cards with real screenshots that scroll on hover, a "Delivered" list on each,
  and a results strip taken from my CV.
- **Toolkit:** the five areas I work in (frontend, backend, cloud and tooling, motion and 3D, CMS and
  integrations).
- **Journey:** a timeline of study and work that draws itself as you scroll.
- **Contact:** book a call, copy my email, GitHub, LinkedIn and a CV download.

It also ships a custom 404 page, `robots.txt`, `sitemap.xml`, a link preview image, structured data
(JSON-LD) and a plain fallback for visitors with JavaScript turned off. It works from 320px phones up
to 4K and 5K screens, and respects "reduce motion".

## Built with

| Tool                 | Used for                                                                          |
| -------------------- | --------------------------------------------------------------------------------- |
| React 18 + Vite      | The page, the build and the dev server                                            |
| Tailwind CSS v4      | Styling, with a little plain CSS for keyframes and the painted scenery            |
| Three.js             | The firefly layer over the story sections (lazy loaded, only where WebGL is real) |
| GSAP + ScrollTrigger | Scroll reveals, count-ups and the Journey road (lazy loaded)                      |
| Cloudflare Pages     | Hosting, with caching and security headers from `public/_headers`                 |

## Getting started

You need Node 20.19 or newer.

```bash
npm install
npm run dev            # dev server at http://localhost:5173
npm run build          # production build into dist/
npm run preview        # serves dist/ at http://localhost:4173
npm run lint           # eslint
npm run format:check   # prettier check (npm run format fixes it)
npm run smoke          # health check of a running copy, see "Deploying"
```

### Configuration

Both settings are optional. Set nothing and the site still works. To use them, create a `.env` file
(git ignores it) or add the same names as environment variables in Cloudflare Pages (Settings,
Variables and secrets). They are read at build time, so changing one needs a redeploy.

| Variable                  | What it does                                                                                                                                    |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `VITE_BOOKING_URL`        | Overrides where the "Book a 15-minute call" buttons go. Must start with `https://`. The default is my Calendly page, set in `src/data/site.js`. |
| `VITE_CF_ANALYTICS_TOKEN` | Cloudflare Web Analytics token. Adds Cloudflare's small cookie-free beacon script. Without it no analytics script is added.                     |

Both values end up in the page, so they are not secrets. A value that fails the checks is ignored and
the build prints a warning.

## Project layout

```
index.html           title, description, link preview tags, JSON-LD, no-JavaScript fallback
public/              files copied as they are to the site root
  404.html             the not-found page
  robots.txt           crawler rules and the sitemap address
  sitemap.xml          the sitemap
  _headers             caching and security headers (Cloudflare Pages)
  Vidura-Gam-Hewage-CV.pdf, favicon.svg, og.jpg
scripts/smoke.mjs    post-deploy health check (files, headers, certificate)
src/
  data/                all the words and numbers, start here (site, work, results, journey, toolkit ...)
  components/          one file per section, plus cards, ui bits and the painted scenes (art/)
  hooks/               scroll, motion, clipboard and media-query hooks
  lib/motion.js        loads GSAP + ScrollTrigger after the first scroll or key press
  styles/              Tailwind setup, keyframes, scenery and responsive rules
  assets/              painted images (webp), project screenshots (shots/) and bundled fonts
```

## Editing the content

- **Text, links, email, booking page:** `src/data/site.js`.
- **Project cards:** `src/data/work.js`. Each project has a `delivered` list and a `result` slot
  (`null` until a client confirms a number, then a short line such as `'Orders up 40%'`).
- **Results strip:** `src/data/results.js` (currently the figures from my CV).
- **Screenshots:** `src/assets/shots/<slug>.webp`, named after the project slug in `work.js`
  (`st-anthonys`, `purehydro`, `fletching`, `imedra`, `natyadarshitha`, `willpower`). Use a whole
  home page as one tall picture, about 1440px wide. The card scrolls it on hover.
- **Testimonials:** the section is switched off for now. Fill in the quotes in
  `src/data/testimonials.js` and set `SHOW_TESTIMONIALS` to `true` to bring it back.
- **CV:** replace `public/Vidura-Gam-Hewage-CV.pdf` with a file of the same name.
- **Accent colour:** one variable at the top of `src/styles/base.css`.
- **Domain:** the addresses in `index.html`, `public/robots.txt` and `public/sitemap.xml` point at
  `https://viduvish.dev`. If the domain changes, search for it and replace every match.

## Deploying

The site is static. On Cloudflare Pages use build command `npm run build` and output directory
`dist` (add `NODE_VERSION` = `22` if the build asks for it). Pages picks up `public/_headers` and
`public/404.html` on its own. `robots.txt` and `sitemap.xml` are in `public/`, so they are served at the
site root. Any static host works if you upload what is inside `dist/`, but only Cloudflare and Netlify
read `_headers`.

After a deploy, check it:

```bash
npm run smoke -- https://viduvish.dev
```

It checks the home page and every file it links to, the CV, `robots.txt`, `sitemap.xml`, the 404
page, the security headers, caching, and (on https) the certificate, the http to https redirect and
HSTS. It exits with code 1 if anything fails. Run against `npm run preview` it will flag the header
lines, because only Cloudflare applies `_headers`.

**Rolling back:** Cloudflare dashboard, Workers & Pages, the project, Deployments, pick the last good
one and choose "Rollback to this deployment". Nothing is rebuilt, so it is live in seconds.

**Worth turning off:** Cloudflare Rocket Loader. It rewrites script tags and can fight the security
policy.

## Quality and analysis

Measured on 15 October 2026 against the production build, served with gzip and the headers from
`public/_headers`. These are lab numbers from a cloud sandbox, so treat them as a guide: real devices
and networks will differ.

### Performance (Lighthouse 13.5.0, median of 3 runs, first load)

|                          | Mobile (slow 4G, 4x slower CPU) | Desktop               |
| ------------------------ | ------------------------------- | --------------------- |
| Performance              | 76 (runs: 71, 76, 79)           | 96 (runs: 96, 95, 96) |
| Accessibility            | 100                             | 100                   |
| Best practices           | 100                             | 100                   |
| SEO                      | 100                             | 100                   |
| First Contentful Paint   | 2.7 s                           | 0.6 s                 |
| Largest Contentful Paint | 4.2 s                           | 1.2 s                 |
| Total Blocking Time      | 262 ms                          | 87 ms                 |
| Cumulative Layout Shift  | 0.005                           | 0.007                 |
| Speed Index              | 2.8 s                           | 1.1 s                 |

Mobile performance is the number to keep improving. The largest paint is the hero painting, and most of the first load is painted images. Lighthouse's mobile profile also simulates a slow phone on a slow connection, which is harsh on an image-led page.

The first load does not include Three.js or GSAP. They are fetched after the first scroll or key
press, and Three.js only on screens wider than 700px with motion allowed and real WebGL, so the
numbers above are what a visitor gets before any animation code arrives.

### Size of what is downloaded

| File                                       | Size         | Gzip   | When it loads                                             |
| ------------------------------------------ | ------------ | ------ | --------------------------------------------------------- |
| `index.html` (with the stylesheet inlined) | 66 kB        | 14 kB  | first load                                                |
| Main script (React and the page)           | 318 kB       | 86 kB  | first load                                                |
| GSAP + ScrollTrigger                       | 110 kB       | 44 kB  | after the first scroll or key press                       |
| Three.js fireflies                         | 517 kB       | 128 kB | near the story section, wide screens with real WebGL only |
| Fonts (seven woff2 files)                  | 208 kB total | n/a    | first load                                                |
| Images (44 webp files)                     | 2.7 MB total | n/a    | mostly with the page, the project screenshots lazily      |

First load is about 2.0 MB on mobile and 2.2 MB on desktop in 41 and 43 requests (Lighthouse's
count), 1.7 MB of it the painted images. The whole `dist/` folder is 4.2 MB.

### Accessibility

- **axe-core 4.14** (WCAG 2.0, 2.1 and 2.2 A and AA rules plus best practices): 0 violations at 1440,
  834 and 390px, with reduced motion on, and with the phone menu open.
- **Keyboard:** every link and button is reachable in a sensible order (22 tab stops) and each one
  shows a visible focus ring.
- **Reflow and zoom:** no horizontal scrolling or clipped text at 320px (400% zoom), including with
  the WCAG text-spacing overrides applied.
- **Reduced motion:** CSS and SVG animations stop, GSAP and Three.js are never downloaded, and every
  section is visible and complete.
- **Contrast:** text over the painted scenes was measured pixel by pixel at seven widths from 320 to 1440px. The few
  leftovers are decorative lanterns drifting behind a caption word.
- **Headings and landmarks:** one `h1`, no skipped levels, a `main`, a labelled `nav` and a `footer`.
  The site has no forms.
- Not tested with a screen reader or in real Safari and Firefox yet, only in Chromium.

### Security

- **Headers (`public/_headers`):** Content-Security-Policy (scripts from the site itself and the
  Cloudflare beacon only), Strict-Transport-Security, X-Content-Type-Options, X-Frame-Options,
  Referrer-Policy, Permissions-Policy and Cross-Origin-Opener-Policy. The free `*.pages.dev`
  addresses are marked `noindex`.
- **Dependencies:** `npm audit` reports 0 vulnerabilities.
- **Secrets and personal data:** scanned for keys, tokens, phone numbers and personal email
  addresses in the source and the build. Nothing found. The two environment variables are public by
  design.
- **Inputs:** the site has no forms, login or server. The email draft behind the call button is
  encoded, booking links must be `https://`, and links that open a new tab use `rel="noopener"`.

### Behaviour checks

37 end-to-end checks passed in Chromium with Playwright: navigation by mouse, touch and keyboard, the
mobile menu, copying the email (including when the browser blocks it), the CV download, the project
links, the booking links, the 404 page, the page with JavaScript switched off, and no console
errors or failed requests. The build was also tried with the environment variables unset, valid and
invalid.

### Analytics

Visit numbers come from Cloudflare Web Analytics (see `VITE_CF_ANALYTICS_TOKEN`). It sets no cookies,
so no consent banner is needed.

## Licence

© 2026 Vidura Gam Hewage. All rights reserved. The fonts (Fraunces, Zen Maru Gothic, DM Mono) are
bundled under the SIL Open Font License, see `src/assets/fonts/`.
