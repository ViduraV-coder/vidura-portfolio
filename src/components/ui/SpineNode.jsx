// the glowing dot on the thin line down the left edge of the story
export default function SpineNode({ time, color }) {
  return (
    <div className="spineN" style={{ '--c': color }} aria-hidden="true">
      <span className="spineN__dot" />
      <span className="spineT">{time}</span>
    </div>
  );
}
