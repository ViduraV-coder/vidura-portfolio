import { useSyncExternalStore } from 'react';

// Whether the WebGL fireflies are up and running. While they are, the svg fireflies behind them
// are switched off, and if WebGL isn't there (or is lost) the svg ones simply carry on.
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
