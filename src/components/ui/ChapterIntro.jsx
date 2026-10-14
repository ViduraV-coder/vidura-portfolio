import ChapterPill from './ChapterPill';

export default function ChapterIntro({
  chapter,
  caption,
  center = false,
  titleClass = '',
  children,
}) {
  return (
    <>
      <ChapterPill time={chapter.time} name={chapter.name} color={chapter.color} />
      <div className="eyebrow">{chapter.eyebrow}</div>
      <h2 className={`sectionTitle ${titleClass}`.trim()}>{children}</h2>
      <p className={`caption${center ? ' caption--center' : ''}`}>{caption}</p>
    </>
  );
}
