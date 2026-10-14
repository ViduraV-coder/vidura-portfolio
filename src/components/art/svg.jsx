// small svg helpers for the painted scenes

const sec = (v) => (v == null ? undefined : `${v}s`);

// stars that fade in and out together. dots are [cx, cy, r]
export function Twinkle({ fill, values, dur, begin, dots }) {
  return (
    <g fill={fill}>
      <animate
        attributeName="opacity"
        values={values}
        dur={dur}
        begin={begin}
        repeatCount="indefinite"
      />
      {dots.map(([cx, cy, r], i) => (
        <circle key={i} cx={cx} cy={cy} r={r} />
      ))}
    </g>
  );
}

// drifting, blinking lights.
// items are [cx, cy, r, moveValues, moveDur, moveBegin, blinkValues, blinkDur, blinkBegin]
export function Fireflies({ fill, opacity, items }) {
  return (
    <g fill={fill} opacity={opacity}>
      {items.map(([cx, cy, r, move, moveDur, moveBegin, blink, blinkDur, blinkBegin], i) => (
        <circle key={i} cx={cx} cy={cy} r={r}>
          <animateTransform
            attributeName="transform"
            type="translate"
            values={move}
            dur={sec(moveDur)}
            begin={sec(moveBegin)}
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values={blink}
            dur={sec(blinkDur)}
            begin={sec(blinkBegin)}
            repeatCount="indefinite"
          />
        </circle>
      ))}
    </g>
  );
}

// waits, streaks along `path`, then fades. the tail gradient (#shG) comes from SharedDefs
export function Shooting({ tail, width, r, path, keyTimes, dur, fade }) {
  return (
    <g opacity="0">
      <line
        x1="0"
        y1="0"
        x2={tail[0]}
        y2={tail[1]}
        stroke="url(#shG)"
        strokeWidth={width}
        strokeLinecap="round"
      />
      <circle r={r} fill="#fff" />
      <animateTransform
        attributeName="transform"
        type="translate"
        values={path}
        keyTimes={keyTimes}
        dur={dur}
        repeatCount="indefinite"
      />
      <animate
        attributeName="opacity"
        values={fade}
        keyTimes={keyTimes}
        dur={dur}
        repeatCount="indefinite"
      />
    </g>
  );
}
