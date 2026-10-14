import { useCallback, useEffect, useRef, useState } from 'react';

// returns [copied, copy]. `copied` stays true for a couple of seconds so the button can say "Copied!"
export default function useCopyToClipboard(resetAfter = 2000) {
  const [copied, setCopied] = useState(false);
  const timer = useRef(0);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = useCallback(
    async (text) => {
      try {
        await navigator.clipboard.writeText(text);
      } catch {
        // no clipboard api (plain http, old browsers), so use a throwaway textarea instead
        const area = document.createElement('textarea');
        area.value = text;
        area.setAttribute('readonly', '');
        area.style.cssText = 'position:fixed;top:-100px;opacity:0';
        document.body.appendChild(area);
        area.select();
        try {
          document.execCommand('copy');
        } finally {
          document.body.removeChild(area);
        }
      }
      setCopied(true);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), resetAfter);
    },
    [resetAfter],
  );

  return [copied, copy];
}
