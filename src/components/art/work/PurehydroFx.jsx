import { Fireflies, Twinkle } from '../svg';

export default function PurehydroFx() {
  return (
    <svg
      className="fx"
      aria-hidden="true"
      style={{ inset: 0, width: '100%', height: '100%', overflow: 'hidden' }}
      viewBox="0 0 1600 1000"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="wp1">
          <stop offset="0" stopColor="#EAFBE8" stopOpacity="0.7" />
          <stop offset="0.45" stopColor="#EAFBE8" stopOpacity="0.2" />
          <stop offset="1" stopColor="#EAFBE8" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="wp2">
          <stop offset="0" stopColor="#FFB547" stopOpacity="0.8" />
          <stop offset="0.45" stopColor="#FFB547" stopOpacity="0.28" />
          <stop offset="1" stopColor="#FFB547" stopOpacity="0" />
        </radialGradient>
      </defs>
      <Twinkle
        fill="#FFFFFF"
        values="0.2;1;0.3"
        dur="3.2s"
        begin="-2.9s"
        dots={[
          [1459.7, 207.6, 1.3],
          [257.7, 13.8, 2.2],
          [1233.3, 272.4, 1],
          [340.5, 322.5, 1.3],
          [1433, 118.3, 1.1],
          [1510.4, 403.7, 1.5],
          [1462, 106.8, 2],
          [672.9, 25.7, 1.5],
          [1511.6, 56.9, 1.5],
          [64.4, 16.1, 1.7],
          [432.1, 396.5, 1.1],
          [1072.3, 221.1, 2.2],
          [574.4, 1.9, 1.1],
        ]}
      />
      <Twinkle
        fill="#FFFFFF"
        values="0.2;1;0.3"
        dur="4.4s"
        begin="-1.9s"
        dots={[
          [905.3, 148.4, 1.8],
          [885.5, 50, 1.9],
          [1203.1, 395.6, 1.1],
          [1473.7, 26.9, 1.5],
          [23.7, 239, 1.5],
          [794.3, 389.8, 1.4],
          [1465.3, 355.6, 1.1],
          [1585.8, 259.6, 1.8],
          [486.8, 415, 1.5],
          [1141.9, 32.5, 1.4],
          [679.7, 141.2, 1.8],
          [8.5, 416.2, 1.5],
          [1394, 247, 1.5],
        ]}
      />
      <Twinkle
        fill="#FFFFFF"
        values="0.2;1;0.3"
        dur="5.3s"
        begin="-2.2s"
        dots={[
          [181.8, 149.3, 1.9],
          [994.7, 154.5, 1.2],
          [1594.7, 68.1, 0.9],
          [268.9, 385.6, 1.3],
          [302.2, 162.2, 1.4],
          [1100.2, 230.8, 0.9],
          [977.3, 214.1, 1.7],
          [716.9, 6.5, 1.6],
          [1120.1, 226.7, 1.2],
          [1590, 90.8, 1.6],
          [842.8, 118.9, 1.1],
          [874.6, 200.6, 1.7],
        ]}
      />
      <Twinkle
        fill="#FFFFFF"
        values="0.2;1;0.3"
        dur="3.8s"
        begin="-0.8s"
        dots={[
          [276.5, 51.2, 1.8],
          [1450.8, 275.4, 1.2],
          [473.5, 123, 2],
          [168.2, 34.2, 2.1],
          [522.9, 343.6, 1],
          [1036.2, 275.8, 2.1],
          [489.1, 403.7, 1.1],
          [662.2, 400.5, 2.1],
          [216.7, 264.8, 2.1],
          [85.7, 147.3, 1.2],
          [23.5, 15.8, 1.8],
          [527.9, 401.5, 1.1],
        ]}
      />
      <ellipse cx="1150" cy="210" rx="300" ry="300" fill="url(#wp1)">
        <animate
          attributeName="opacity"
          values="0.5;0.95;0.6;0.9;0.5"
          dur="7.0s"
          begin="0s"
          repeatCount="indefinite"
        />
      </ellipse>
      <ellipse cx="330" cy="730" rx="80" ry="90" fill="url(#wp2)">
        <animate
          attributeName="opacity"
          values="0.3;0.9;0.4;0.8;0.3"
          dur="3.8s"
          begin="0.0s"
          repeatCount="indefinite"
        />
      </ellipse>
      <ellipse cx="330" cy="796" rx="10" ry="3" fill="none" stroke="#CFF7EA" strokeWidth="1.6">
        <animate
          attributeName="rx"
          values="10;110"
          dur="5.2s"
          begin="0s"
          repeatCount="indefinite"
        />
        <animate attributeName="ry" values="3;26" dur="5.2s" begin="0s" repeatCount="indefinite" />
        <animate
          attributeName="opacity"
          values="0.75;0"
          dur="5.2s"
          begin="0s"
          repeatCount="indefinite"
        />
      </ellipse>
      <ellipse cx="330" cy="796" rx="10" ry="3" fill="none" stroke="#CFF7EA" strokeWidth="1.6">
        <animate
          attributeName="rx"
          values="10;110"
          dur="5.2s"
          begin="-2.2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="ry"
          values="3;26"
          dur="5.2s"
          begin="-2.2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.75;0"
          dur="5.2s"
          begin="-2.2s"
          repeatCount="indefinite"
        />
      </ellipse>
      <ellipse cx="560" cy="850" rx="80" ry="90" fill="url(#wp2)">
        <animate
          attributeName="opacity"
          values="0.3;0.9;0.4;0.8;0.3"
          dur="4.5s"
          begin="-0.9s"
          repeatCount="indefinite"
        />
      </ellipse>
      <ellipse cx="560" cy="916" rx="10" ry="3" fill="none" stroke="#CFF7EA" strokeWidth="1.6">
        <animate
          attributeName="rx"
          values="10;110"
          dur="5.2s"
          begin="-1.3s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="ry"
          values="3;26"
          dur="5.2s"
          begin="-1.3s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.75;0"
          dur="5.2s"
          begin="-1.3s"
          repeatCount="indefinite"
        />
      </ellipse>
      <ellipse cx="560" cy="916" rx="10" ry="3" fill="none" stroke="#CFF7EA" strokeWidth="1.6">
        <animate
          attributeName="rx"
          values="10;110"
          dur="5.2s"
          begin="-3.5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="ry"
          values="3;26"
          dur="5.2s"
          begin="-3.5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.75;0"
          dur="5.2s"
          begin="-3.5s"
          repeatCount="indefinite"
        />
      </ellipse>
      <ellipse cx="880" cy="780" rx="80" ry="90" fill="url(#wp2)">
        <animate
          attributeName="opacity"
          values="0.3;0.9;0.4;0.8;0.3"
          dur="5.199999999999999s"
          begin="-1.8s"
          repeatCount="indefinite"
        />
      </ellipse>
      <ellipse cx="880" cy="846" rx="10" ry="3" fill="none" stroke="#CFF7EA" strokeWidth="1.6">
        <animate
          attributeName="rx"
          values="10;110"
          dur="5.2s"
          begin="-2.6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="ry"
          values="3;26"
          dur="5.2s"
          begin="-2.6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.75;0"
          dur="5.2s"
          begin="-2.6s"
          repeatCount="indefinite"
        />
      </ellipse>
      <ellipse cx="880" cy="846" rx="10" ry="3" fill="none" stroke="#CFF7EA" strokeWidth="1.6">
        <animate
          attributeName="rx"
          values="10;110"
          dur="5.2s"
          begin="-4.8s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="ry"
          values="3;26"
          dur="5.2s"
          begin="-4.8s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.75;0"
          dur="5.2s"
          begin="-4.8s"
          repeatCount="indefinite"
        />
      </ellipse>
      <ellipse cx="1380" cy="760" rx="80" ry="90" fill="url(#wp2)">
        <animate
          attributeName="opacity"
          values="0.3;0.9;0.4;0.8;0.3"
          dur="5.8999999999999995s"
          begin="-2.7s"
          repeatCount="indefinite"
        />
      </ellipse>
      <ellipse cx="1380" cy="826" rx="10" ry="3" fill="none" stroke="#CFF7EA" strokeWidth="1.6">
        <animate
          attributeName="rx"
          values="10;110"
          dur="5.2s"
          begin="-3.9s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="ry"
          values="3;26"
          dur="5.2s"
          begin="-3.9s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.75;0"
          dur="5.2s"
          begin="-3.9s"
          repeatCount="indefinite"
        />
      </ellipse>
      <ellipse cx="1380" cy="826" rx="10" ry="3" fill="none" stroke="#CFF7EA" strokeWidth="1.6">
        <animate
          attributeName="rx"
          values="10;110"
          dur="5.2s"
          begin="-6.1s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="ry"
          values="3;26"
          dur="5.2s"
          begin="-6.1s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.75;0"
          dur="5.2s"
          begin="-6.1s"
          repeatCount="indefinite"
        />
      </ellipse>
      <ellipse cx="1210" cy="875" rx="80" ry="90" fill="url(#wp2)">
        <animate
          attributeName="opacity"
          values="0.3;0.9;0.4;0.8;0.3"
          dur="6.6s"
          begin="-3.6s"
          repeatCount="indefinite"
        />
      </ellipse>
      <ellipse cx="1210" cy="941" rx="10" ry="3" fill="none" stroke="#CFF7EA" strokeWidth="1.6">
        <animate
          attributeName="rx"
          values="10;110"
          dur="5.2s"
          begin="-5.2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="ry"
          values="3;26"
          dur="5.2s"
          begin="-5.2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.75;0"
          dur="5.2s"
          begin="-5.2s"
          repeatCount="indefinite"
        />
      </ellipse>
      <ellipse cx="1210" cy="941" rx="10" ry="3" fill="none" stroke="#CFF7EA" strokeWidth="1.6">
        <animate
          attributeName="rx"
          values="10;110"
          dur="5.2s"
          begin="-7.4s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="ry"
          values="3;26"
          dur="5.2s"
          begin="-7.4s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.75;0"
          dur="5.2s"
          begin="-7.4s"
          repeatCount="indefinite"
        />
      </ellipse>
      <Fireflies
        fill="#DFFFC8"
        items={[
          [
            232.5,
            547.8,
            2.2,
            '0 0;-13.5 -13.5;9 -27;0 0',
            10.5,
            -2.1,
            '0.2;1;0.35;0.9;0.2',
            4.4,
            -1,
          ],
          [
            785.7,
            528.3,
            2.6,
            '0 0;13.3 -24.1;-8.9 -48.2;0 0',
            10.7,
            -2.8,
            '0.2;1;0.35;0.9;0.2',
            4.3,
            -1.4,
          ],
          [
            65.7,
            817.9,
            2.5,
            '0 0;10.5 -12.3;-7 -24.5;0 0',
            8.4,
            -0.8,
            '0.2;1;0.35;0.9;0.2',
            2.5,
            -0.4,
          ],
          [
            297,
            510.2,
            2.3,
            '0 0;8.8 -13.8;-5.9 -27.6;0 0',
            8.2,
            -5.4,
            '0.2;1;0.35;0.9;0.2',
            3.5,
            -2.7,
          ],
          [
            1481.8,
            450.8,
            2.3,
            '0 0;16.1 -25.8;-10.7 -51.6;0 0',
            15,
            -8,
            '0.2;1;0.35;0.9;0.2',
            3.9,
            -4,
          ],
          [
            252.6,
            781.8,
            2.9,
            '0 0;0.5 -22;-0.3 -44;0 0',
            11.8,
            -4.3,
            '0.2;1;0.35;0.9;0.2',
            4.3,
            -2.1,
          ],
          [
            1555.8,
            741.1,
            2.2,
            '0 0;12.9 -22.5;-8.6 -44.9;0 0',
            13,
            -5.2,
            '0.2;1;0.35;0.9;0.2',
            3.2,
            -2.6,
          ],
          [
            368.5,
            556.4,
            2.3,
            '0 0;11.5 -23;-7.7 -46;0 0',
            13.1,
            -6.2,
            '0.2;1;0.35;0.9;0.2',
            3.4,
            -3.1,
          ],
          [
            82.6,
            553.1,
            2.8,
            '0 0;-0.7 -13.8;0.4 -27.5;0 0',
            11.9,
            -5.6,
            '0.2;1;0.35;0.9;0.2',
            2.7,
            -2.8,
          ],
          [
            1318.5,
            515.9,
            2.4,
            '0 0;8.5 -25.8;-5.7 -51.5;0 0',
            9.8,
            -2.3,
            '0.2;1;0.35;0.9;0.2',
            2.4,
            -1.2,
          ],
          [
            943.7,
            618.3,
            3.1,
            '0 0;13.1 -17.3;-8.7 -34.5;0 0',
            13,
            -4,
            '0.2;1;0.35;0.9;0.2',
            4.3,
            -2,
          ],
          [
            569.2,
            560.5,
            2.8,
            '0 0;14.2 -15.6;-9.5 -31.3;0 0',
            13.5,
            -12.2,
            '0.2;1;0.35;0.9;0.2',
            3,
            -6.1,
          ],
          [
            428.1,
            452.7,
            3,
            '0 0;17 -26;-11.3 -51.9;0 0',
            10.6,
            -6.4,
            '0.2;1;0.35;0.9;0.2',
            4,
            -3.2,
          ],
          [
            831.1,
            637.4,
            2.2,
            '0 0;-1.2 -21.5;0.8 -43.1;0 0',
            13.3,
            -0.9,
            '0.2;1;0.35;0.9;0.2',
            3.9,
            -0.5,
          ],
          [
            743,
            723.3,
            2.9,
            '0 0;20.4 -15.9;-13.6 -31.9;0 0',
            8.6,
            -8.2,
            '0.2;1;0.35;0.9;0.2',
            3.2,
            -4.1,
          ],
          [
            589.8,
            798.2,
            2.4,
            '0 0;21.5 -22.6;-14.3 -45.2;0 0',
            10.2,
            -2,
            '0.2;1;0.35;0.9;0.2',
            2.3,
            -1,
          ],
          [
            634.6,
            541.3,
            2.1,
            '0 0;8.5 -18.3;-5.7 -36.6;0 0',
            10.2,
            -5.2,
            '0.2;1;0.35;0.9;0.2',
            4.1,
            -2.6,
          ],
          [
            1324,
            606.8,
            2.5,
            '0 0;1.7 -21;-1.2 -42;0 0',
            12.2,
            -2.7,
            '0.2;1;0.35;0.9;0.2',
            2.6,
            -1.4,
          ],
        ]}
      />
    </svg>
  );
}
