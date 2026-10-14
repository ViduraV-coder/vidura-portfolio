import { RIBBON_MOTTO, RIBBON_SKILLS } from '../data/ribbons';

// list is rendered twice and the track slides by half its width (tickL / tickR keyframes),
// so the loop never visibly jumps
function Ribbon({ variant, items }) {
  return (
    <div className={`ribbon ribbon--${variant}`}>
      <div className="ribbon__track">
        {[0, 1].map((copy) =>
          items.map((label, i) => (
            <div className="ribbon__item" key={`${copy}-${i}`}>
              <span>{label}</span>
              <span className="ribbon__dot" />
            </div>
          )),
        )}
      </div>
    </div>
  );
}

export default function Ribbons() {
  return (
    <section className="rbnSec" aria-hidden="true">
      <Ribbon variant="a" items={RIBBON_SKILLS} />
      <Ribbon variant="b" items={RIBBON_MOTTO} />
    </section>
  );
}
