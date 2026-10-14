// the road behind the timeline. the bright line is drawn as you scroll (useScrollProgress)
export const ROAD =
  'M500 0 L500 150 C740 230 740 370 500 450 C260 530 260 670 500 750 C740 830 740 970 500 1050 C500 1110 500 1160 500 1200';

export default function JourneyRoad({ drawRef }) {
  return (
    <svg className="jsvg" aria-hidden="true" viewBox="0 0 1000 1320" preserveAspectRatio="none">
      <path
        d={ROAD}
        fill="none"
        stroke="#F3E9D2"
        strokeOpacity="0.5"
        strokeWidth="4"
        strokeDasharray="2 12"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
      <path
        ref={drawRef}
        d={ROAD}
        pathLength="1000"
        fill="none"
        style={{ stroke: 'var(--accent)' }}
        strokeWidth="5"
        strokeDasharray="760 1000"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
      <defs>
        <radialGradient id="jLan">
          <stop offset="0" stopColor="#FFD27A" stopOpacity="0.95" />
          <stop offset="0.45" stopColor="#FFB547" stopOpacity="0.3" />
          <stop offset="1" stopColor="#FFB547" stopOpacity="0" />
        </radialGradient>
      </defs>
      <g>
        <circle r="26" fill="url(#jLan)" opacity="0.9">
          <animateMotion dur="18s" repeatCount="indefinite" path={ROAD} />
        </circle>
        <circle r="4.2" fill="#FFE9B8">
          <animateMotion dur="18s" repeatCount="indefinite" path={ROAD} />
        </circle>
      </g>
    </svg>
  );
}
