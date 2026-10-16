import { Fireflies, Twinkle } from '../svg';

// oil lamps round the rangoli flicker one by one. the wall lamps and tower windows flicker in two
// shared groups to keep it cheap
// cx, cy, rx, ry, flicker seconds, delay
const DIYAS = [
  [1260, 958, 40, 40, 2.8, -0.6],
  [339, 958, 40, 40, 2.1, -2.4],
  [339, 923, 40, 40, 1.8, -1.6],
  [1260, 923, 40, 40, 2.4, -2.1],
];

// [cx, cy] of the lamps in the wall, and of the windows in the gopuram
const WALL = [
  [40, 850],
  [102, 850],
  [164, 850],
  [226, 850],
  [288, 850],
  [350, 850],
  [412, 850],
  [474, 850],
  [536, 850],
  [598, 850],
  [970, 850],
  [1032, 850],
  [1094, 850],
  [1156, 850],
  [1218, 850],
  [1280, 850],
  [1342, 850],
  [1404, 850],
  [1466, 850],
  [1528, 850],
  [1590, 850],
];
const TOWER = [
  [681, 700],
  [760, 700],
  [839, 700],
  [918, 700],
  [693, 636],
  [764, 636],
  [835, 636],
  [906, 636],
  [706, 574],
  [768, 574],
  [831, 574],
  [893, 574],
  [745, 517],
  [800, 517],
  [854, 517],
  [754, 462],
  [800, 462],
  [845, 462],
  [762, 411],
  [800, 411],
  [837, 411],
  [770, 363],
  [800, 363],
  [829, 363],
];

function Lamps({ points, rx, ry, dur, begin }) {
  return (
    <g>
      <animate
        attributeName="opacity"
        values="0.55;1;0.65;0.95;0.55"
        dur={`${dur}s`}
        begin={`${begin}s`}
        repeatCount="indefinite"
      />
      {points.map(([cx, cy]) => (
        <ellipse key={`${cx}-${cy}`} cx={cx} cy={cy} rx={rx} ry={ry} fill="url(#wy1)" />
      ))}
    </g>
  );
}

export default function NatyaFx() {
  return (
    <svg
      className="fx"
      aria-hidden="true"
      style={{ inset: 0, width: '100%', height: '100%', overflow: 'hidden' }}
      viewBox="0 0 1600 1000"
      preserveAspectRatio="xMidYMax slice"
    >
      <defs>
        <radialGradient id="wy1">
          <stop offset="0" stopColor="#FFC060" stopOpacity="0.8" />
          <stop offset="0.45" stopColor="#FFB347" stopOpacity="0.28" />
          <stop offset="1" stopColor="#FFB347" stopOpacity="0" />
        </radialGradient>
      </defs>
      <Twinkle
        fill="#FFFFFF"
        values="0.2;1;0.3"
        dur="3.2s"
        begin="-0.6s"
        dots={[
          [790.5, 46.2, 2.1],
          [574.5, 275.8, 1.5],
          [880.6, 323.9, 2.1],
          [1337.0, 149.2, 1.8],
          [1279.5, 94.9, 1.5],
          [315.2, 190.8, 1.8],
          [623.8, 74.2, 1.2],
          [610.6, 186.3, 1.2],
          [676.7, 48.5, 1.2],
          [1532.2, 285.5, 2.1],
          [1367.8, 144.9, 1.2],
        ]}
      />
      <Twinkle
        fill="#FFFFFF"
        values="0.2;1;0.3"
        dur="4.4s"
        begin="-1.9s"
        dots={[
          [1368.7, 17.4, 1.0],
          [315.7, 94.2, 1.0],
          [244.7, 131.6, 1.5],
          [1168.1, 71.6, 1.8],
          [308.9, 307.8, 2.1],
          [741.9, 71.6, 2.1],
          [1243.4, 274.4, 1.5],
          [303.9, 109.2, 1.2],
          [481.5, 54.7, 1.0],
          [1518.4, 264.4, 2.1],
          [511.7, 74.0, 1.8],
        ]}
      />
      <Twinkle
        fill="#FFFFFF"
        values="0.2;1;0.3"
        dur="5.3s"
        begin="-3.4s"
        dots={[
          [1339.6, 292.9, 2.1],
          [1427.7, 272.2, 1.8],
          [492.1, 231.0, 2.1],
          [1431.3, 53.6, 1.5],
          [1361.8, 103.0, 1.8],
          [1231.7, 277.6, 1.2],
          [906.1, 80.0, 1.8],
          [175.4, 135.0, 1.8],
          [417.2, 82.8, 1.8],
          [286.3, 61.9, 1.8],
          [1497.0, 281.3, 1.2],
        ]}
      />
      <ellipse cx="800" cy="700" rx="330" ry="250" fill="url(#wy1)">
        <animate
          attributeName="opacity"
          values="0.35;0.6;0.4;0.55;0.35"
          dur="9s"
          repeatCount="indefinite"
        />
      </ellipse>
      <ellipse cx="800" cy="750" rx="110" ry="100" fill="url(#wy1)">
        <animate
          attributeName="opacity"
          values="0.5;0.9;0.6;0.85;0.5"
          dur="5.6s"
          repeatCount="indefinite"
        />
      </ellipse>
      <Lamps points={WALL.filter((_, i) => i % 2 === 0)} rx={30} ry={30} dur={3.4} begin={-0.8} />
      <Lamps points={WALL.filter((_, i) => i % 2 === 1)} rx={30} ry={30} dur={4.1} begin={-2.2} />
      <Lamps points={TOWER.filter((_, i) => i % 2 === 0)} rx={22} ry={26} dur={4.6} begin={-1.4} />
      <Lamps points={TOWER.filter((_, i) => i % 2 === 1)} rx={22} ry={26} dur={5.4} begin={-3.1} />
      {DIYAS.map(([cx, cy, rx, ry, dur, begin]) => (
        <ellipse key={`${cx}-${cy}`} cx={cx} cy={cy} rx={rx} ry={ry} fill="url(#wy1)">
          <animate
            attributeName="opacity"
            values="0.55;0.95;0.6;0.9;0.55"
            dur={`${dur}s`}
            begin={`${begin}s`}
            repeatCount="indefinite"
          />
        </ellipse>
      ))}
      <Fireflies
        fill="#FFE0A8"
        items={[
          [1256, 880, 2.4, '0 0;9 -18;10 -35;0 0', 10.6, -4.3, '0.2;1;0.35;0.9;0.2', 3.4, -3.0],
          [697, 865, 2.2, '0 0;1 -23;-4 -38;0 0', 9.7, -6.5, '0.2;1;0.35;0.9;0.2', 3.5, -1.4],
          [915, 864, 2.4, '0 0;13 -21;10 -32;0 0', 11.2, -8.3, '0.2;1;0.35;0.9;0.2', 3.0, -2.0],
          [1022, 875, 2.6, '0 0;11 -16;4 -47;0 0', 10.5, -1.5, '0.2;1;0.35;0.9;0.2', 3.5, -0.3],
          [1115, 881, 2.0, '0 0;11 -17;-9 -32;0 0', 11.2, -1.1, '0.2;1;0.35;0.9;0.2', 3.8, -2.7],
          [863, 953, 2.8, '0 0;-3 -21;8 -42;0 0', 12.7, -0.8, '0.2;1;0.35;0.9;0.2', 3.6, -1.4],
          [636, 895, 2.0, '0 0;8 -22;-11 -30;0 0', 9.5, -9.0, '0.2;1;0.35;0.9;0.2', 3.5, -0.3],
          [1201, 912, 2.6, '0 0;6 -15;-2 -38;0 0', 13.0, -5.8, '0.2;1;0.35;0.9;0.2', 3.6, -0.7],
        ]}
      />
      <Fireflies
        fill="#FF9FB8"
        items={[
          [210, 150, 3, '0 0;24 120;-16 250;0 0', 17, -3, '0.7;1;0.8;1;0.7', 4, -1],
          [520, 90, 2.6, '0 0;-22 130;18 270;0 0', 19, -9, '0.7;1;0.8;1;0.7', 4.6, -2],
          [1010, 130, 3, '0 0;20 110;-14 240;0 0', 16, -6, '0.7;1;0.8;1;0.7', 3.8, -0.5],
          [1380, 80, 2.8, '0 0;-26 125;12 255;0 0', 20, -12, '0.7;1;0.8;1;0.7', 4.2, -3],
        ]}
      />
    </svg>
  );
}
