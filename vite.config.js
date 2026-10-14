import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // relative links, so the build works from any folder (github pages project sites, a sub-directory, the domain root)
  base: './',
  plugins: [react()],
  build: {
    // keep the images as real files so the browser can cache them
    assetsInlineLimit: 0,
  },
});
