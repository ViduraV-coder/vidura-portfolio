import { IMG } from '../../assets';

export default function Lantern({ left, top, width, offset, dur, delay, hue, label }) {
  return (
    <div
      className="lantern"
      style={{
        left,
        top,
        width,
        margin: `${offset}px 0 0 ${offset}px`,
        animationDuration: `${dur}s`,
        animationDelay: `${delay}s`,
      }}
    >
      <img
        src={IMG.lantern}
        alt=""
        width="420"
        height="520"
        style={{ filter: `hue-rotate(${hue}deg) saturate(1.08)` }}
        loading="lazy"
      />
      <span>{label}</span>
    </div>
  );
}
