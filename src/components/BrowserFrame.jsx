import { useState } from 'react';

function Wireframe({ colors: [c1, c2] }) {
  return (
    <div className="wire" style={{ '--c1': c1, '--c2': c2 }}>
      <div className="wire__nav">
        <span className="wire__logo" />
        <span className="wire__grow" />
        <span className="wire__link" />
        <span className="wire__link" />
        <span className="wire__link" />
        <span className="wire__btn" />
      </div>
      <div className="wire__hero">
        <span className="wire__h1" />
        <span className="wire__h2" />
        <span className="wire__cta" />
      </div>
      <div className="wire__cards">
        <span className="wire__card" />
        <span className="wire__card" />
        <span className="wire__card" />
      </div>
    </div>
  );
}

// The window shows a 16:10 slice of the page, so its height is this much of its width.
const WINDOW = 0.625;

// A screenshot is usually a whole page, much taller than the window. work.css scrolls it on hover;
// how far it has to travel and how long a loop takes depends on the picture, so work it out once
// the picture has loaded. Returns the two css variables, or null if there is nothing to scroll.
function scrollFor(img) {
  const ratio = img.naturalHeight / img.naturalWidth;
  if (ratio < WINDOW * 1.05) return null;
  const hidden = 1 - WINDOW / ratio;
  const travel = (ratio - WINDOW) * 500; // px, for a window around 500px wide
  const down = Math.min(14, Math.max(5, travel / 110)); // roughly 110px a second
  // going down takes 45% of a loop, the same again for the way back up, and a short pause at each end
  return { '--shift': `${(-hidden * 100).toFixed(2)}%`, '--loop': `${(down / 0.45).toFixed(1)}s` };
}

// fake browser window: a real screenshot if there is one, otherwise the coloured wireframe
export default function BrowserFrame({ domain, title, wire, screenshot }) {
  const [scroll, setScroll] = useState(null);

  return (
    <div className="wframe" aria-hidden="true">
      <div className="wframe__bar">
        <span className="wframe__dot" />
        <span className="wframe__dot" />
        <span className="wframe__dot" />
        <span className="wframe__url">{domain}</span>
      </div>
      {screenshot ? (
        <div className="wframe__view">
          <img
            className="wframe__shot"
            style={scroll}
            src={screenshot}
            alt={`${title} home page`}
            loading="lazy"
            onLoad={(event) => setScroll(scrollFor(event.currentTarget))}
          />
        </div>
      ) : (
        <Wireframe colors={wire} />
      )}
    </div>
  );
}
