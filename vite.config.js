import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Two small build-time tweaks to the generated index.html so the first paint doesn't wait:
// 1. the stylesheet is only ~7 KB gzipped, so it goes straight into a <style> tag instead of
//    being a separate blocking request
// 2. the hero background painting is the biggest thing on screen at load, but React only asks for
//    it once the JS has run, so it's preloaded from the HTML with a high priority
function fasterFirstPaint() {
  return {
    name: 'faster-first-paint',
    enforce: 'post',
    transformIndexHtml(html, ctx) {
      const bundle = ctx.bundle;
      if (!bundle) return html; // dev server, nothing to do

      let out = html;

      const cssLink = out.match(/<link rel="stylesheet"[^>]*href="([^"]+)"[^>]*>/);
      if (cssLink) {
        const file = Object.keys(bundle).find((name) => cssLink[1].endsWith(name));
        if (file && bundle[file].source) {
          // the font urls inside are relative to /assets/, but now they live in the page itself
          const css = String(bundle[file].source).replaceAll('url(./', 'url(./assets/');
          out = out.replace(cssLink[0], `<style>${css}</style>`);
          delete bundle[file];
        }
      }

      // phones get a smaller copy of the picture (see HeroScene.jsx), so each size is preloaded
      // only on the screens that will use it
      const preload = (pattern, media) => {
        const file = Object.keys(bundle).find((name) => pattern.test(name));
        if (!file) return;
        const tag = `<link rel="preload" as="image" type="image/webp" fetchpriority="high" href="./${file}" media="${media}" />`;
        out = out.replace('</head>', `    ${tag}\n  </head>`);
      };
      preload(/(^|\/)heroRoom-[\w-]+\.webp$/, '(min-width: 701px)');
      preload(/(^|\/)heroRoomPhone-[\w-]+\.webp$/, '(max-width: 700px)');
      return out;
    },
  };
}

// Cloudflare Web Analytics: page views without cookies, so no consent banner is needed. It only
// goes into the page when VITE_CF_ANALYTICS_TOKEN is set (see the README). If the site is on
// Cloudflare Pages you can also switch it on in the dashboard (Pages > your project > Metrics >
// Web Analytics) and leave this alone, Cloudflare then adds the same script itself.
function analytics(token) {
  // Cloudflare's tokens are plain letters and digits. Anything else is left out (with a warning in
  // the build output), so a typo can't break the page or put odd text into the HTML
  if (token && !/^[\w-]{16,64}$/.test(token)) {
    console.warn(
      "\n[build] VITE_CF_ANALYTICS_TOKEN doesn't look like a Cloudflare token, so the analytics script was left out.\n",
    );
    token = '';
  }
  return {
    name: 'cloudflare-analytics',
    transformIndexHtml() {
      if (!token) return [];
      return [
        {
          tag: 'script',
          attrs: {
            defer: true,
            src: 'https://static.cloudflareinsights.com/beacon.min.js',
            'data-cf-beacon': JSON.stringify({ token }),
          },
          injectTo: 'body',
        },
      ];
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_');
  if (env.VITE_BOOKING_URL && !/^https:\/\//i.test(env.VITE_BOOKING_URL)) {
    console.warn(
      '\n[build] VITE_BOOKING_URL has to start with https://, so the buttons will open the email instead.\n',
    );
  }
  return {
    // relative links, so the build works from any folder (github pages project sites, a sub-directory, the domain root)
    base: './',
    plugins: [react(), tailwindcss(), fasterFirstPaint(), analytics(env.VITE_CF_ANALYTICS_TOKEN)],
    build: {
      // keep the images as real files so the browser can cache them
      assetsInlineLimit: 0,
      // the one big chunk is Three.js, which loads on demand once someone scrolls towards the night
      // sky (see StorySparkles.jsx), so it doesn't slow the first load
      chunkSizeWarningLimit: 600,
    },
  };
});
