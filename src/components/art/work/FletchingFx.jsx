import { Fireflies, Twinkle } from '../svg';

// lamps along the quay, the ship's bridge and the two lamp posts on the near bank.
// cx, cy, rx, ry, pulse seconds, delay
const GLOWS = [
  [70, 646, 62, 72, 5.4, 0],
  [260, 646, 62, 72, 6.1, -1.8],
  [450, 646, 62, 72, 5.0, -3.1],
  [640, 646, 62, 72, 6.6, -0.9],
  [830, 646, 62, 72, 5.7, -2.4],
  [1415, 690, 78, 66, 4.2, -1.1],
  [144, 640, 90, 90, 7.0, -2.0],
  [1456, 636, 90, 90, 6.4, -4.0],
];

// red lights on top of the three cranes. cx, cy, blink seconds, delay
const BEACONS = [
  [255, 390, 2.4, 0],
  [575, 390, 2.9, -1.1],
  [845, 390, 2.6, -1.9],
];

export default function FletchingFx() {
  return (
    <svg
      className="fx"
      aria-hidden="true"
      style={{ inset: 0, width: '100%', height: '100%', overflow: 'hidden' }}
      viewBox="0 0 1600 1000"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="wf1">
          <stop offset="0" stopColor="#FFD28A" stopOpacity="0.75" />
          <stop offset="0.45" stopColor="#FFD28A" stopOpacity="0.25" />
          <stop offset="1" stopColor="#FFD28A" stopOpacity="0" />
        </radialGradient>
      </defs>
      <Twinkle
        fill="#FFFFFF"
        values="0.2;1;0.3"
        dur="3.4s"
        begin="-0.8s"
        dots={[
          [222.3, 280.3, 1],
          [413.0, 165.5, 1.8],
          [756.1, 127.8, 1.2],
          [158.3, 13.2, 1.8],
          [693.8, 252.5, 1],
          [1109.4, 90.8, 1.2],
          [944.0, 37.3, 1.5],
          [58.3, 12.3, 2.1],
          [24.5, 291.3, 1.2],
          [1541.1, 240.6, 2.1],
        ]}
      />
      <Twinkle
        fill="#FFFFFF"
        values="0.2;1;0.3"
        dur="4.6s"
        begin="-2.1s"
        dots={[
          [1520.5, 313.0, 1],
          [154.7, 121.7, 1.2],
          [1172.8, 222.3, 1.5],
          [407.5, 73.2, 1],
          [928.3, 55.6, 1.8],
          [1018.8, 266.0, 2.1],
          [1510.0, 181.4, 1.8],
          [803.3, 297.8, 1],
          [585.1, 307.8, 1.8],
          [679.3, 292.2, 1.2],
        ]}
      />
      <Twinkle
        fill="#FFFFFF"
        values="0.2;1;0.3"
        dur="5.2s"
        begin="-3.3s"
        dots={[
          [386.0, 181.4, 1.5],
          [1457.2, 158.5, 2.1],
          [113.5, 8.3, 1.8],
          [419.8, 80.4, 1.8],
          [864.7, 183.2, 1.8],
          [1019.7, 53.1, 1.2],
          [1381.5, 174.6, 1],
          [1070.8, 24.9, 2.1],
          [77.6, 258.3, 1.5],
          [756.9, 238.3, 1.8],
        ]}
      />
      {GLOWS.map(([cx, cy, rx, ry, dur, begin]) => (
        <ellipse key={`${cx}-${cy}`} cx={cx} cy={cy} rx={rx} ry={ry} fill="url(#wf1)">
          <animate
            attributeName="opacity"
            values="0.55;0.95;0.6;0.9;0.55"
            dur={`${dur}s`}
            begin={`${begin}s`}
            repeatCount="indefinite"
          />
        </ellipse>
      ))}
      {BEACONS.map(([cx, cy, dur, begin]) => (
        <circle key={cx} cx={cx} cy={cy} r="3.2" fill="#FF6A5A">
          <animate
            attributeName="opacity"
            values="1;0.15;1"
            dur={`${dur}s`}
            begin={`${begin}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}
      <Fireflies
        fill="#FFE0A8"
        items={[
          [330, 842, 2.4, '0 0;12 -20;-8 -40;0 0', 11.5, -3, '0.2;1;0.35;0.9;0.2', 3.1, -1.2],
          [610, 868, 2.0, '0 0;-14 -16;10 -32;0 0', 13.0, -7, '0.2;1;0.35;0.9;0.2', 2.7, -0.6],
          [905, 850, 2.8, '0 0;18 -24;-12 -48;0 0', 12.2, -5, '0.2;1;0.35;0.9;0.2', 3.8, -2.4],
          [1180, 872, 2.2, '0 0;-10 -22;8 -44;0 0', 10.4, -1, '0.2;1;0.35;0.9;0.2', 3.3, -1.8],
          [1290, 838, 2.6, '0 0;14 -18;-9 -36;0 0', 13.6, -9, '0.2;1;0.35;0.9;0.2', 2.9, -0.3],
          [480, 905, 2.0, '0 0;9 -14;-6 -28;0 0', 9.6, -4, '0.2;1;0.35;0.9;0.2', 3.5, -2.9],
        ]}
      />
    </svg>
  );
}
