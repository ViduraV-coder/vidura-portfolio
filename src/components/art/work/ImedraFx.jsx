import { Fireflies, Twinkle } from '../svg';

// the pharmacy sign, the upstairs windows, the two street lamps and the van's headlight.
// cx, cy, rx, ry, pulse seconds, delay
const WINDOWS = [
  [671, 592, 70, 62, 5.4, -0.9],
  [801, 592, 70, 62, 6.6, -1.1],
  [931, 592, 70, 62, 5.1, -2.2],
];
const LAMPS = [
  [472, 560, 96, 96, 6.8, -0.6],
  [1192, 548, 96, 96, 6.4, -3.8],
];

export default function ImedraFx() {
  return (
    <svg
      className="fx"
      aria-hidden="true"
      style={{ inset: 0, width: '100%', height: '100%', overflow: 'hidden' }}
      viewBox="0 0 1600 1000"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="wi1">
          <stop offset="0" stopColor="#FFD28A" stopOpacity="0.75" />
          <stop offset="0.45" stopColor="#FFD28A" stopOpacity="0.25" />
          <stop offset="1" stopColor="#FFD28A" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="wi2">
          <stop offset="0" stopColor="#6BFFB4" stopOpacity="0.85" />
          <stop offset="0.4" stopColor="#37F59A" stopOpacity="0.3" />
          <stop offset="1" stopColor="#37F59A" stopOpacity="0" />
        </radialGradient>
      </defs>
      <Twinkle
        fill="#FFFFFF"
        values="0.2;1;0.3"
        dur="3.2s"
        begin="-0.6s"
        dots={[
          [1533.8, 468.9, 1.8],
          [877.9, 46.7, 1.2],
          [1583.2, 340.0, 2.1],
          [945.7, 298.1, 1.2],
          [963.0, 56.3, 1.0],
          [636.4, 302.1, 1.8],
          [240.2, 67.3, 2.1],
          [774.8, 120.4, 1.0],
          [684.8, 181.9, 1.5],
          [1438.3, 15.5, 2.1],
          [401.8, 226.1, 1.2],
        ]}
      />
      <Twinkle
        fill="#FFFFFF"
        values="0.2;1;0.3"
        dur="4.4s"
        begin="-1.9s"
        dots={[
          [1305.2, 401.6, 1.0],
          [348.7, 163.1, 2.1],
          [961.8, 69.9, 1.5],
          [1544.2, 268.1, 1.8],
          [1149.1, 22.8, 2.1],
          [1572.9, 437.4, 1.0],
          [816.2, 171.3, 1.2],
          [27.3, 46.2, 1.8],
          [1367.2, 275.5, 1.8],
          [211.8, 47.9, 2.1],
          [470.9, 399.4, 1.5],
        ]}
      />
      <Twinkle
        fill="#FFFFFF"
        values="0.2;1;0.3"
        dur="5.3s"
        begin="-3.4s"
        dots={[
          [620.2, 220.7, 1.5],
          [510.8, 308.7, 1.2],
          [1440.2, 16.0, 1.8],
          [1366.6, 205.1, 2.1],
          [17.5, 412.0, 2.1],
          [359.3, 398.3, 1.8],
          [1421.3, 58.5, 1.5],
          [1563.7, 361.6, 1.5],
          [957.1, 37.2, 1.8],
          [508.6, 381.2, 1.2],
          [173.6, 464.8, 1.5],
        ]}
      />
      {WINDOWS.map(([cx, cy, rx, ry, dur, begin]) => (
        <ellipse key={`${cx}-${cy}`} cx={cx} cy={cy} rx={rx} ry={ry} fill="url(#wi1)">
          <animate
            attributeName="opacity"
            values="0.55;0.95;0.6;0.9;0.55"
            dur={`${dur}s`}
            begin={`${begin}s`}
            repeatCount="indefinite"
          />
        </ellipse>
      ))}
      {LAMPS.map(([cx, cy, rx, ry, dur, begin]) => (
        <ellipse key={`${cx}-${cy}`} cx={cx} cy={cy} rx={rx} ry={ry} fill="url(#wi1)">
          <animate
            attributeName="opacity"
            values="0.55;0.95;0.6;0.9;0.55"
            dur={`${dur}s`}
            begin={`${begin}s`}
            repeatCount="indefinite"
          />
        </ellipse>
      ))}
      <ellipse cx="800" cy="790" rx="250" ry="84" fill="url(#wi1)">
        <animate
          attributeName="opacity"
          values="0.4;0.7;0.45;0.65;0.4"
          dur="7.4s"
          repeatCount="indefinite"
        />
      </ellipse>
      <ellipse cx="800" cy="392" rx="200" ry="180" fill="url(#wi2)">
        <animate
          attributeName="opacity"
          values="0.6;1;0.7;0.95;0.6"
          dur="4.2s"
          repeatCount="indefinite"
        />
      </ellipse>
      <ellipse cx="1099" cy="919" rx="120" ry="34" fill="url(#wi1)">
        <animate
          attributeName="opacity"
          values="0.5;0.9;0.55"
          dur="3.6s"
          repeatCount="indefinite"
        />
      </ellipse>
      <Fireflies
        fill="#BFFFE0"
        items={[
          [1358, 867, 2.8, '0 0;-2 -14;1 -43;0 0', 10.6, -0.6, '0.2;1;0.35;0.9;0.2', 3.3, -1.2],
          [1035, 913, 2.6, '0 0;-13 -23;2 -39;0 0', 10.5, -8.6, '0.2;1;0.35;0.9;0.2', 3.5, -2.7],
          [905, 807, 2.4, '0 0;6 -15;-1 -44;0 0', 11.8, -2.0, '0.2;1;0.35;0.9;0.2', 2.7, -0.7],
          [1397, 886, 2.8, '0 0;-11 -23;8 -37;0 0', 12.1, -0.7, '0.2;1;0.35;0.9;0.2', 3.7, -2.1],
          [695, 929, 2.6, '0 0;-2 -16;-11 -30;0 0', 13.2, -6.2, '0.2;1;0.35;0.9;0.2', 2.7, -0.7],
          [1147, 895, 2.4, '0 0;4 -22;0 -38;0 0', 12.9, -7.9, '0.2;1;0.35;0.9;0.2', 3.0, -1.1],
          [485, 873, 2.4, '0 0;12 -15;-6 -30;0 0', 12.5, -1.7, '0.2;1;0.35;0.9;0.2', 3.8, -1.9],
        ]}
      />
      <Fireflies
        fill="#FFE0A8"
        items={[
          [1239, 861, 2.4, '0 0;-11 -23;3 -38;0 0', 11.0, -9.6, '0.2;1;0.35;0.9;0.2', 3.6, -1.4],
          [1438, 932, 2.2, '0 0;5 -19;5 -28;0 0', 10.4, -2.9, '0.2;1;0.35;0.9;0.2', 2.9, -2.5],
          [1061, 820, 2.4, '0 0;11 -20;0 -42;0 0', 11.7, -4.4, '0.2;1;0.35;0.9;0.2', 2.8, -3.0],
          [1026, 841, 2.2, '0 0;3 -17;-3 -45;0 0', 10.9, -1.9, '0.2;1;0.35;0.9;0.2', 2.9, -2.9],
          [928, 844, 2.0, '0 0;6 -21;7 -41;0 0', 12.4, -6.9, '0.2;1;0.35;0.9;0.2', 2.9, -0.6],
        ]}
      />
    </svg>
  );
}
