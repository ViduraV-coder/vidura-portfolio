export default function ChapterPill({ time, name, color }) {
  return (
    <div className="pill" style={{ '--c': color }}>
      <span className="pill__dot" />
      {time} · {name}
    </div>
  );
}
