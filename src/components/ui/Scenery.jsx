import { DECOR } from '../../data/decor';
import Foliage from './Foliage';
import Lantern from './Lantern';
import Spark from './Spark';

// decorations behind a section. order matters: responsive.css hides every other lantern on phones
// with :nth-child(odd)
export default function Scenery({ section, children }) {
  const { foliage, sparks, lanterns } = DECOR[section];
  return (
    <div className="sProps" aria-hidden="true">
      {children}
      {foliage.map((f, i) => (
        <Foliage key={i} {...f} />
      ))}
      {sparks.map((s, i) => (
        <Spark key={i} {...s} />
      ))}
      {lanterns.map((l) => (
        <Lantern key={l.label} {...l} />
      ))}
    </div>
  );
}
