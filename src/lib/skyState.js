import { useSyncExternalStore } from 'react';

// true while the webgl fireflies are running. the svg fireflies behind them switch off then, and carry on
// if webgl is missing or lost
let active = false;
const listeners = new Set();

export function setSkyActive(value) {
  if (active === value) return;
  active = value;
  listeners.forEach((notify) => notify());
}

export function useSkyActive() {
  return useSyncExternalStore(
    (notify) => {
      listeners.add(notify);
      return () => listeners.delete(notify);
    },
    () => active,
  );
}
