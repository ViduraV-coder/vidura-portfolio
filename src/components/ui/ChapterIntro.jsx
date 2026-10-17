// label + heading + italic line, used by every chapter
// size = heading size, dawn = lighter colours for the pink sky in contact
const TITLE = {
  default: 'mt-4 text-[clamp(40px,5vw,72px)] leading-none tracking-[-0.02em]',
  about: 'mt-[18px] text-[clamp(38px,4.4vw,64px)] leading-[1.04] tracking-[-0.02em]',
  contact:
    'mt-[18px] text-[clamp(40px,6vw,88px)] leading-none tracking-[-0.025em] max-ph:text-[42px]',
};

const SHADOW = {
  night: '[text-shadow:0_1px_12px_rgba(6,10,40,0.7)]',
  dawn: '[text-shadow:0_1px_2px_rgba(44,12,58,0.55),0_0_16px_rgba(44,12,58,0.7)]',
};

export function Eyebrow({ children, dawn = false }) {
  return (
    <div
      data-reveal
      className={`font-mono text-[13px] tracking-[0.16em] ${dawn ? 'text-white [text-shadow:0_1px_2px_rgba(44,12,58,0.7),0_0_10px_rgba(44,12,58,0.9)]' : 'text-sky'}`}
    >
      {children}
    </div>
  );
}

export function SectionTitle({ size = 'default', children }) {
  return (
    <h2
      data-reveal
      className={`font-display font-medium text-cream [&_em]:font-normal ${TITLE[size]}`}
    >
      {children}
    </h2>
  );
}

export default function ChapterIntro({
  chapter,
  caption,
  center = false,
  size = 'default',
  dawn = false,
  children,
}) {
  return (
    <>
      <Eyebrow dawn={dawn}>{chapter.eyebrow}</Eyebrow>
      <SectionTitle size={size}>{children}</SectionTitle>
      <p
        data-reveal
        className={`mt-5 max-w-[540px] font-display text-[clamp(19px,1.6vw,23px)] leading-[1.45] font-normal italic ${center ? 'mx-auto' : ''} ${dawn ? 'text-balance text-[#fff5e2] ' + SHADOW.dawn : 'text-[#ede5d0] ' + SHADOW.night}`}
      >
        {caption}
      </p>
    </>
  );
}
