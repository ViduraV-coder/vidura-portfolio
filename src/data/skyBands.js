import { SKY_HEIGHT } from './fireflies';

// the sky is cut into bands (see StoryBackdrop). the webgl fireflies need the same numbers to land where the svg ones do
export const BAND_COUNT = 10;
export const BAND_EDGES = Array.from({ length: BAND_COUNT + 1 }, (_, i) =>
  Math.round((i * SKY_HEIGHT) / BAND_COUNT),
);
// bands reach a bit past their edges so wandering fireflies (up to ~40 units) and shooting stars
// (~190 units down) don't get clipped
export const PAD_TOP = 40;
export const PAD_BOTTOM = 200;

// the sky y where the band holding `y` starts drawing
export function bandStart(y) {
  const i = Math.min(BAND_COUNT - 1, Math.max(0, BAND_EDGES.findIndex((edge) => edge > y) - 1));
  return Math.max(0, BAND_EDGES[i] - PAD_TOP);
}
