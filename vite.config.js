import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// two small build tweaks to index.html so first paint doesn't wait:
// 1. the stylesheet is ~7 KB gzipped, so it goes in a <style> tag instead of a blocking request
// 2. the hero painting is the biggest thing on screen but react only asks for it after the js runs,
//    so it's preloaded from the html with high priority
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
          // font urls inside are relative to /assets/ but now they live in the page itself
          const css = String(bundle[file].source).replaceAll('url(./', 'url(./assets/');
          out = out.replace(cssLink[0], `<style>${css}</style>`);
          delete bundle[file];
        }
      }

      // phones get a smaller copy of the picture (HeroScene.jsx), so each size is only preloaded where it is used
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

// cloudflare web analytics: page views without cookies, so no consent banner. only added when
// VITE_CF_ANALYTICS_TOKEN is set (see the README). on cloudflare pages you can switch it on in the
// dashboard instead (Pages > project > Metrics > Web Analytics) and leave this alone
function analytics(token) {
  // tokens are plain letters and digits, anything else is dropped with a build warning so a typo can't
  // break the page or put odd text into the html
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
      '\n[build] VITE_BOOKING_URL has to start with https://, so it was ignored and the default booking page is used.\n',
    );
  }
  return {
    // relative links so the build works from any folder
    base: './',
    plugins: [react(), tailwindcss(), fasterFirstPaint(), analytics(env.VITE_CF_ANALYTICS_TOKEN)],
    build: {
      // keep the images as real files so the browser can cache them
      assetsInlineLimit: 0,
      // the one big chunk is three.js, loaded on demand when someone scrolls towards the night sky (StorySparkles.jsx)
      chunkSizeWarningLimit: 600,
    },
  };
});
