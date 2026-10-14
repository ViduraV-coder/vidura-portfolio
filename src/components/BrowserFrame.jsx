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

// fake browser window: a real screenshot if there is one, otherwise the coloured wireframe
export default function BrowserFrame({ domain, title, wire, screenshot }) {
  return (
    <div className="wframe" aria-hidden="true">
      <div className="wframe__bar">
        <span className="wframe__dot" />
        <span className="wframe__dot" />
        <span className="wframe__dot" />
        <span className="wframe__url">{domain}</span>
      </div>
      {screenshot ? (
        <img className="wframe__shot" src={screenshot} alt={`${title} home page`} loading="lazy" />
      ) : (
        <Wireframe colors={wire} />
      )}
    </div>
  );
}
