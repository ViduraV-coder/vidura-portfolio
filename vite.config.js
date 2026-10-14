import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Two small build-time tweaks to the generated index.html so the first paint doesn't wait:
// 1. the stylesheet is only ~7 KB gzipped, so it goes straight into a <style> tag instead of
//    being a separate blocking request
// 2. the hero background photo is the biggest thing on screen at load, but React only asks for it
//    once the JS has run, so it's preloaded from the HTML with a high priority
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

      const hero = Object.keys(bundle).find((name) => /(^|\/)heroRoom-[\w-]+\.webp$/.test(name));
      if (hero) {
        const tag = `<link rel="preload" as="image" type="image/webp" fetchpriority="high" href="./${hero}" />`;
        out = out.replace('</head>', `    ${tag}\n  </head>`);
      }
      return out;
    },
  };
}

export default defineConfig({
  // relative links, so the build works from any folder (github pages project sites, a sub-directory, the domain root)
  base: './',
  plugins: [react(), fasterFirstPaint()],
  build: {
    // keep the images as real files so the browser can cache them
    assetsInlineLimit: 0,
  },
});
