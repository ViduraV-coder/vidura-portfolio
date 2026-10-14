// two rings of text turning in opposite directions. textLength stops a gap opening at the end of each ring

export default function AboutBadge() {
  return (
    <>
      <svg width="150" height="150" viewBox="0 0 150 150" aria-hidden="true">
        <defs>
          <path id="aBadgeO" d="M75 75 m-62 0 a62 62 0 1 1 124 0 a62 62 0 1 1 -124 0" />
          <path id="aBadgeI" d="M75 75 m-38 0 a38 38 0 1 1 76 0 a38 38 0 1 1 -76 0" />
        </defs>
        <circle
          cx="75"
          cy="75"
          r="53"
          fill="none"
          stroke="#120F26"
          strokeOpacity="0.5"
          strokeWidth="1"
          strokeDasharray="1.5 4"
          strokeLinecap="round"
        />
        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 75 75"
            to="360 75 75"
            dur="28s"
            repeatCount="indefinite"
          />
          <text fontFamily="DM Mono, monospace" fontSize="11.5" fontWeight="500" fill="#120F26">
            <textPath href="#aBadgeO" textLength="389.5" lengthAdjust="spacing">
              FULL-STACK DEVELOPER • NIGHT OWL •&#160;
            </textPath>
          </text>
        </g>
        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="360 75 75"
            to="0 75 75"
            dur="36s"
            repeatCount="indefinite"
          />
          <text fontFamily="DM Mono, monospace" fontSize="9" fontWeight="500" fill="#120F26">
            <textPath href="#aBadgeI" textLength="238.7" lengthAdjust="spacing">
              LONDON • OPEN TO WORK •&#160;
            </textPath>
          </text>
        </g>
        <path d="M75 60 L80 70 L90 75 L80 80 L75 90 L70 80 L60 75 L70 70 Z" fill="#120F26" />
      </svg>
    </>
  );
}
