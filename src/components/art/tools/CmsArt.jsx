import { IMG } from '../../../assets';
import { Fireflies, Shooting, Twinkle } from '../svg';

export default function CmsArt() {
  return (
    <>
      <img src={IMG.toolCms} alt="" />
      <svg
        className="fx"
        aria-hidden="true"
        style={{ inset: 0, width: '100%', height: '100%' }}
        viewBox="0 0 300 360"
        preserveAspectRatio="none"
      >
        <Twinkle
          fill="#FFFFFF"
          values="0.2;1;0.3"
          dur="3.2s"
          begin="-0.3s"
          dots={[
            [164.6, 142.6, 1.5],
            [226.5, 176.5, 1],
            [286.6, 2.1, 1],
            [97.5, 29.8, 1.4],
            [272.8, 103.7, 1.3],
            [178.4, 183.6, 0.9],
            [29.4, 71.7, 1.2],
            [235.8, 154.6, 1.4],
          ]}
        />
        <Twinkle
          fill="#FFFFFF"
          values="0.2;1;0.3"
          dur="4.4s"
          begin="-0.7s"
          dots={[
            [224.2, 164.4, 1.4],
            [82.2, 69.7, 1.1],
            [216.5, 71.2, 1.2],
            [49.2, 14, 1.1],
            [246.7, 184.8, 0.9],
            [151, 143.8, 1.1],
            [255.9, 84, 1.2],
            [5.4, 126.4, 1.3],
          ]}
        />
        <Twinkle
          fill="#FFFFFF"
          values="0.2;1;0.3"
          dur="5.3s"
          begin="-2.9s"
          dots={[
            [85.8, 183.5, 1],
            [215.2, 111.2, 1.3],
            [7.6, 128.3, 1.1],
            [253.8, 15.8, 1.4],
            [148.6, 75, 1],
            [266.7, 157.7, 1.4],
            [204.2, 49.4, 1],
          ]}
        />
        <Twinkle
          fill="#FFFFFF"
          values="0.2;1;0.3"
          dur="3.8s"
          begin="-2.1s"
          dots={[
            [170, 142, 1.1],
            [225.1, 69.2, 1.2],
            [15.5, 44.6, 1.3],
            [48.2, 14.6, 1.4],
            [116.7, 50.3, 0.9],
            [201.2, 104.2, 1.4],
            [174.9, 41.7, 1.3],
          ]}
        />
        <Shooting
          tail={[43.4, -20.5]}
          width={1.4}
          r={1.3}
          path="240 30;240 30;230.5 34.5;50 120;50 120"
          keyTimes="0;0.6;0.6;0.6;1"
          dur="17s"
          fade="0;0;1;0;0"
        />
      </svg>
      <svg
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
        viewBox="0 0 300 360"
        preserveAspectRatio="none"
      >
        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="-1.4 150 270;1.6 150 270;-1.4 150 270"
            dur="6.4s"
            repeatCount="indefinite"
          />
          <image href={IMG.toolLeaves} x="45" y="132" width="210" height="210" />
        </g>
      </svg>
      <svg
        className="fx"
        aria-hidden="true"
        style={{ inset: 0, width: '100%', height: '100%' }}
        viewBox="0 0 300 360"
        preserveAspectRatio="none"
      >
        <defs>
          <radialGradient id="tkG">
            <stop offset="0" stopColor="#FFB547" stopOpacity="0.7" />
            <stop offset="0.45" stopColor="#FFB547" stopOpacity="0.2" />
            <stop offset="1" stopColor="#FFB547" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="150" cy="326" rx="110" ry="30" fill="url(#tkG)">
          <animate
            attributeName="opacity"
            values="0.3;0.7;0.4;0.65;0.3"
            dur="5.0s"
            begin="0s"
            repeatCount="indefinite"
          />
        </ellipse>
        <Fireflies
          fill="#FFE2A8"
          items={[
            [
              148.3,
              233.5,
              2.2,
              '0 0;-4.3 -13.2;2.8 -26.5;0 0',
              11.4,
              -4.1,
              '0.2;1;0.35;0.9;0.2',
              3.1,
              -2,
            ],
            [
              98.9,
              175.1,
              2,
              '0 0;12.5 -12.7;-8.3 -25.4;0 0',
              10.4,
              -4.5,
              '0.2;1;0.35;0.9;0.2',
              2.5,
              -2.2,
            ],
            [
              218.6,
              194.5,
              1.7,
              '0 0;11.6 -15.8;-7.7 -31.6;0 0',
              12.3,
              -9.4,
              '0.2;1;0.35;0.9;0.2',
              3.6,
              -4.7,
            ],
            [
              53.6,
              256.9,
              1.7,
              '0 0;-1.8 -7.5;1.2 -15.1;0 0',
              10.6,
              -0.1,
              '0.2;1;0.35;0.9;0.2',
              3.1,
              -0.1,
            ],
            [
              255,
              299.8,
              1.8,
              '0 0;-9.5 -7.6;6.3 -15.1;0 0',
              9.5,
              -5.9,
              '0.2;1;0.35;0.9;0.2',
              3.6,
              -3,
            ],
            [9.4, 223.1, 1.8, '0 0;-2 -10.5;1.3 -21.1;0 0', 8.7, -6, '0.2;1;0.35;0.9;0.2', 3.7, -3],
            [
              188.6,
              211.1,
              2.4,
              '0 0;-2.8 -10.4;1.9 -20.7;0 0',
              14.4,
              -2.3,
              '0.2;1;0.35;0.9;0.2',
              4,
              -1.1,
            ],
            [
              281.5,
              277.8,
              1.9,
              '0 0;-1.8 -13.4;1.2 -26.8;0 0',
              13.6,
              -2.4,
              '0.2;1;0.35;0.9;0.2',
              3.6,
              -1.2,
            ],
            [
              221.5,
              185.7,
              1.6,
              '0 0;9.9 -10.7;-6.6 -21.4;0 0',
              11.4,
              -2.9,
              '0.2;1;0.35;0.9;0.2',
              2.8,
              -1.5,
            ],
          ]}
        />
      </svg>
      <svg
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
        viewBox="0 0 300 360"
        preserveAspectRatio="none"
      >
        <g>
          <animateTransform
            attributeName="transform"
            type="translate"
            values="106.1 172;92.5 98;67.1 24"
            keyTimes="0;0.5;1"
            dur="16s"
            begin="0s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            keyTimes="0;0.16;0.74;1"
            dur="16s"
            begin="0s"
            repeatCount="indefinite"
          />
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="-6;6;-6"
              dur="12.2s"
              begin="0s"
              repeatCount="indefinite"
            />
            <g transform="scale(1.0)">
              <g
                style={{
                  filter: 'drop-shadow(0 1px 1.4px rgba(20,8,30,0.7)) drop-shadow(0 0 4px #FFB547)',
                }}
              >
                <rect
                  x="-30.3"
                  y="-8"
                  width="60.6"
                  height="16"
                  rx="8"
                  fill="rgba(243,233,210,0.94)"
                />
                <circle cx="-23.3" cy="0" r="2.6" fill="#FFB547" />
                <text
                  x="4"
                  y="3.5"
                  textAnchor="middle"
                  fontFamily="DM Mono, monospace"
                  fontWeight="500"
                  fontSize="8.4"
                  fill="#241435"
                >
                  WordPress
                </text>
              </g>
            </g>
          </g>
        </g>
        <g>
          <animateTransform
            attributeName="transform"
            type="translate"
            values="131.4 172;126.9 98;118.4 24"
            keyTimes="0;0.5;1"
            dur="16s"
            begin="-2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            keyTimes="0;0.16;0.74;1"
            dur="16s"
            begin="-2s"
            repeatCount="indefinite"
          />
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="-6;6;-6"
              dur="12.5s"
              begin="-2s"
              repeatCount="indefinite"
            />
            <g transform="scale(1.0)">
              <g
                style={{
                  filter: 'drop-shadow(0 1px 1.4px rgba(20,8,30,0.7)) drop-shadow(0 0 4px #5BE38F)',
                }}
              >
                <rect
                  x="-24.9"
                  y="-8"
                  width="49.8"
                  height="16"
                  rx="8"
                  fill="rgba(243,233,210,0.94)"
                />
                <circle cx="-17.9" cy="0" r="2.6" fill="#5BE38F" />
                <text
                  x="4"
                  y="3.5"
                  textAnchor="middle"
                  fontFamily="DM Mono, monospace"
                  fontWeight="500"
                  fontSize="8.4"
                  fill="#241435"
                >
                  Shopify
                </text>
              </g>
            </g>
          </g>
        </g>
        <g>
          <animateTransform
            attributeName="transform"
            type="translate"
            values="171.5 172;176.1 98;184.5 24"
            keyTimes="0;0.5;1"
            dur="16s"
            begin="-4s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            keyTimes="0;0.16;0.74;1"
            dur="16s"
            begin="-4s"
            repeatCount="indefinite"
          />
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="-6;6;-6"
              dur="11.7s"
              begin="-4s"
              repeatCount="indefinite"
            />
            <g transform="scale(1.0)">
              <g
                style={{
                  filter: 'drop-shadow(0 1px 1.4px rgba(20,8,30,0.7)) drop-shadow(0 0 4px #8FDCFF)',
                }}
              >
                <rect
                  x="-24.9"
                  y="-8"
                  width="49.8"
                  height="16"
                  rx="8"
                  fill="rgba(243,233,210,0.94)"
                />
                <circle cx="-17.9" cy="0" r="2.6" fill="#8FDCFF" />
                <text
                  x="4"
                  y="3.5"
                  textAnchor="middle"
                  fontFamily="DM Mono, monospace"
                  fontWeight="500"
                  fontSize="8.4"
                  fill="#241435"
                >
                  Webflow
                </text>
              </g>
            </g>
          </g>
        </g>
        <g>
          <animateTransform
            attributeName="transform"
            type="translate"
            values="196.9 172;210.5 98;235.9 24"
            keyTimes="0;0.5;1"
            dur="16s"
            begin="-6s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            keyTimes="0;0.16;0.74;1"
            dur="16s"
            begin="-6s"
            repeatCount="indefinite"
          />
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="-6;6;-6"
              dur="12.7s"
              begin="-6s"
              repeatCount="indefinite"
            />
            <g transform="scale(1.0)">
              <g
                style={{
                  filter: 'drop-shadow(0 1px 1.4px rgba(20,8,30,0.7)) drop-shadow(0 0 4px #E58FD0)',
                }}
              >
                <rect
                  x="-22.2"
                  y="-8"
                  width="44.4"
                  height="16"
                  rx="8"
                  fill="rgba(243,233,210,0.94)"
                />
                <circle cx="-15.2" cy="0" r="2.6" fill="#E58FD0" />
                <text
                  x="4"
                  y="3.5"
                  textAnchor="middle"
                  fontFamily="DM Mono, monospace"
                  fontWeight="500"
                  fontSize="8.4"
                  fill="#241435"
                >
                  Framer
                </text>
              </g>
            </g>
          </g>
        </g>
        <g>
          <animateTransform
            attributeName="transform"
            type="translate"
            values="105.5 172;91.8 98;66.5 24"
            keyTimes="0;0.5;1"
            dur="16s"
            begin="-8s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            keyTimes="0;0.16;0.74;1"
            dur="16s"
            begin="-8s"
            repeatCount="indefinite"
          />
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="-6;6;-6"
              dur="12.6s"
              begin="-8s"
              repeatCount="indefinite"
            />
            <g transform="scale(1.0)">
              <g
                style={{
                  filter: 'drop-shadow(0 1px 1.4px rgba(20,8,30,0.7)) drop-shadow(0 0 4px #FFB547)',
                }}
              >
                <rect
                  x="-35.7"
                  y="-8"
                  width="71.4"
                  height="16"
                  rx="8"
                  fill="rgba(243,233,210,0.94)"
                />
                <circle cx="-28.7" cy="0" r="2.6" fill="#FFB547" />
                <text
                  x="4"
                  y="3.5"
                  textAnchor="middle"
                  fontFamily="DM Mono, monospace"
                  fontWeight="500"
                  fontSize="8.4"
                  fill="#241435"
                >
                  GoHighLevel
                </text>
              </g>
            </g>
          </g>
        </g>
        <g>
          <animateTransform
            attributeName="transform"
            type="translate"
            values="137.2 172;132.6 98;124.2 24"
            keyTimes="0;0.5;1"
            dur="16s"
            begin="-10s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            keyTimes="0;0.16;0.74;1"
            dur="16s"
            begin="-10s"
            repeatCount="indefinite"
          />
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="-6;6;-6"
              dur="10.6s"
              begin="-10s"
              repeatCount="indefinite"
            />
            <g transform="scale(1.0)">
              <g
                style={{
                  filter: 'drop-shadow(0 1px 1.4px rgba(20,8,30,0.7)) drop-shadow(0 0 4px #5BE38F)',
                }}
              >
                <rect
                  x="-27.6"
                  y="-8"
                  width="55.2"
                  height="16"
                  rx="8"
                  fill="rgba(243,233,210,0.94)"
                />
                <circle cx="-20.6" cy="0" r="2.6" fill="#5BE38F" />
                <text
                  x="4"
                  y="3.5"
                  textAnchor="middle"
                  fontFamily="DM Mono, monospace"
                  fontWeight="500"
                  fontSize="8.4"
                  fill="#241435"
                >
                  CRM sync
                </text>
              </g>
            </g>
          </g>
        </g>
        <g>
          <animateTransform
            attributeName="transform"
            type="translate"
            values="164.9 172;169.5 98;177.9 24"
            keyTimes="0;0.5;1"
            dur="16s"
            begin="-12s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            keyTimes="0;0.16;0.74;1"
            dur="16s"
            begin="-12s"
            repeatCount="indefinite"
          />
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="-6;6;-6"
              dur="11.5s"
              begin="-12s"
              repeatCount="indefinite"
            />
            <g transform="scale(1.0)">
              <g
                style={{
                  filter: 'drop-shadow(0 1px 1.4px rgba(20,8,30,0.7)) drop-shadow(0 0 4px #8FDCFF)',
                }}
              >
                <rect
                  x="-24.9"
                  y="-8"
                  width="49.8"
                  height="16"
                  rx="8"
                  fill="rgba(243,233,210,0.94)"
                />
                <circle cx="-17.9" cy="0" r="2.6" fill="#8FDCFF" />
                <text
                  x="4"
                  y="3.5"
                  textAnchor="middle"
                  fontFamily="DM Mono, monospace"
                  fontWeight="500"
                  fontSize="8.4"
                  fill="#241435"
                >
                  webhook
                </text>
              </g>
            </g>
          </g>
        </g>
        <g>
          <animateTransform
            attributeName="transform"
            type="translate"
            values="198.8 172;212.4 98;237.8 24"
            keyTimes="0;0.5;1"
            dur="16s"
            begin="-14s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            keyTimes="0;0.16;0.74;1"
            dur="16s"
            begin="-14s"
            repeatCount="indefinite"
          />
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="-6;6;-6"
              dur="12.3s"
              begin="-14s"
              repeatCount="indefinite"
            />
            <g transform="scale(1.0)">
              <g
                style={{
                  filter: 'drop-shadow(0 1px 1.4px rgba(20,8,30,0.7)) drop-shadow(0 0 4px #E58FD0)',
                }}
              >
                <rect
                  x="-27.6"
                  y="-8"
                  width="55.2"
                  height="16"
                  rx="8"
                  fill="rgba(243,233,210,0.94)"
                />
                <circle cx="-20.6" cy="0" r="2.6" fill="#E58FD0" />
                <text
                  x="4"
                  y="3.5"
                  textAnchor="middle"
                  fontFamily="DM Mono, monospace"
                  fontWeight="500"
                  fontSize="8.4"
                  fill="#241435"
                >
                  REST API
                </text>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </>
  );
}
