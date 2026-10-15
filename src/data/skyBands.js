import { SKY_HEIGHT } from './fireflies';

// The sky is cut into bands (see StoryBackdrop). The same numbers are needed by the WebGL
// fireflies so they land exactly where the svg ones would.
export const BAND_COUNT = 10;
export const BAND_EDGES = Array.from({ length: BAND_COUNT + 1 }, (_, i) =>
  Math.round((i * SKY_HEIGHT) / BAND_COUNT),
);
// each band reaches a bit past its edges so fireflies that wander across the line (up to ~40
// units) and shooting stars (they travel ~190 units down) don't get clipped
export const PAD_TOP = 40;
export const PAD_BOTTOM = 200;

// the sky y where the band holding `y` starts drawing
export function bandStart(y) {
  const i = Math.min(BAND_COUNT - 1, Math.max(0, BAND_EDGES.findIndex((edge) => edge > y) - 1));
  return Math.max(0, BAND_EDGES[i] - PAD_TOP);
}
