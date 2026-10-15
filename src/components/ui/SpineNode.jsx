// the glowing dot on the thin line down the left edge of the story
export default function SpineNode({ time, color }) {
  return (
    <div
      className="pointer-events-none absolute top-[130px] left-[clamp(14px,2.4vw,34px)] z-[3] flex items-center gap-2 max-tab:hidden"
      style={{ '--c': color }}
      aria-hidden="true"
    >
      <span className="size-[11px] rounded-full bg-(--c) shadow-[0_0_0_4px_rgba(255,255,255,0.08),0_0_16px_var(--c)]" />
      <span className="font-mono text-[11px] font-medium tracking-[0.08em] text-haze max-desk:hidden">
        {time}
      </span>
    </div>
  );
}
