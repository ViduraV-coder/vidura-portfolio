import { useCallback, useEffect, useRef, useState } from 'react';

// returns [status, copy]. status is 'idle', 'copied' or 'failed' and goes back to 'idle' after a
// couple of seconds, so the button can say "Copied!" (or ask for a manual copy) and then reset
export default function useCopyToClipboard(resetAfter = 2000) {
  const [status, setStatus] = useState('idle');
  const timer = useRef(0);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = useCallback(
    async (text) => {
      let done;
      try {
        await navigator.clipboard.writeText(text);
        done = true;
      } catch {
        // no clipboard api (plain http, an iframe, a blocked permission), so try a throwaway textarea
        const area = document.createElement('textarea');
        area.value = text;
        area.setAttribute('readonly', '');
        area.style.cssText = 'position:fixed;top:-100px;opacity:0';
        document.body.appendChild(area);
        area.select();
        try {
          done = document.execCommand('copy');
        } catch {
          done = false;
        } finally {
          document.body.removeChild(area);
        }
      }
      setStatus(done ? 'copied' : 'failed');
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setStatus('idle'), resetAfter);
      return done;
    },
    [resetAfter],
  );

  return [status, copy];
}
