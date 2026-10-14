import useLean from '../hooks/useLean';
import BackendArt from './art/tools/BackendArt';
import CloudArt from './art/tools/CloudArt';
import CmsArt from './art/tools/CmsArt';
import FrontendArt from './art/tools/FrontendArt';
import MotionArt from './art/tools/MotionArt';

const ART = {
  Frontend: FrontendArt,
  Backend: BackendArt,
  Cloud: CloudArt,
  Motion: MotionArt,
  Cms: CmsArt,
};

export default function ToolCard({ tool }) {
  const lean = useLean();
  const Art = ART[tool.art];

  return (
    <div
      className="archWrap"
      style={{ marginTop: tool.offset, animation: `aBob 7s ease-in-out ${tool.delay}s infinite` }}
      {...lean}
    >
      <div className="arch">
        <Art />
      </div>

      <div className="toolCard">
        {tool.badge ? (
          <div className="toolCard__row">
            <h3 className="toolCard__title">{tool.name}</h3>
            <span className="toolCard__badge">{tool.badge}</span>
          </div>
        ) : (
          <h3 className="toolCard__title">{tool.name}</h3>
        )}
        <div className="toolCard__tag">{tool.tag}</div>
        <div className="toolCard__chips">
          {tool.chips.map((chip) => (
            <span className="chip" key={chip}>
              {chip}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
