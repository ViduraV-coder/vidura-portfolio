import { useSyncExternalStore } from 'react';

// true while the media query matches, and it updates if the window is resized across it
export default function useMediaQuery(query) {
  const subscribe = (notify) => {
    const list = window.matchMedia(query);
    list.addEventListener('change', notify);
    return () => list.removeEventListener('change', notify);
  };
  return useSyncExternalStore(subscribe, () => window.matchMedia(query).matches);
}
