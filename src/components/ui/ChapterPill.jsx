// the little clock pill above each heading. color is the glow on its dot; "dawn" is the lighter
// tint used on the pink sky at the end
export default function ChapterPill({ time, name, color, dawn = false }) {
  return (
    <div
      data-reveal
      className={`mb-5 inline-flex items-center gap-2.5 rounded-full border border-[rgba(255,255,255,0.16)] py-1.5 pr-[15px] pl-[11px] font-mono text-[12px] tracking-[0.14em] text-cream backdrop-blur-[8px] ${dawn ? 'bg-[rgba(36,10,50,0.4)]' : 'bg-[rgba(10,14,40,0.42)]'}`}
      style={{ '--c': color }}
    >
      <span className="size-2 rounded-full bg-(--c) shadow-[0_0_10px_var(--c)]" />
      {time} · {name}
    </div>
  );
}
