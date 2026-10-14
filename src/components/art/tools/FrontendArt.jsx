import { IMG } from '../../../assets';
import { Shooting, Twinkle } from '../svg';

export default function FrontendArt() {
  return (
    <>
      <img src={IMG.toolFrontend} alt="" />
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
          begin="-2.1s"
          dots={[
            [97.1, 37.7, 1.5],
            [11.2, 108.4, 1.4],
            [188.2, 236.9, 1.1],
            [43.3, 29.4, 1.1],
            [164.3, 15.7, 1.3],
            [136, 74.9, 0.9],
            [218.8, 72, 1.2],
            [11.8, 167.1, 1],
            [174, 114.1, 1],
          ]}
        />
        <Twinkle
          fill="#FFFFFF"
          values="0.2;1;0.3"
          dur="4.4s"
          begin="-0.3s"
          dots={[
            [195.3, 18.1, 1.4],
            [21, 22.7, 1],
            [173.1, 99.2, 1],
            [92.5, 204, 1.1],
            [17.9, 51.5, 1.4],
            [238.3, 174.7, 0.9],
            [294.1, 29.5, 1.2],
            [229.4, 143.3, 1.2],
            [252, 236.2, 1.4],
          ]}
        />
        <Twinkle
          fill="#FFFFFF"
          values="0.2;1;0.3"
          dur="5.3s"
          begin="-4.3s"
          dots={[
            [160.8, 91.4, 1.4],
            [127.4, 206.7, 1.1],
            [292.9, 11.6, 1.1],
            [54.2, 145.4, 1.1],
            [204.1, 106.9, 1.4],
            [73.2, 143.6, 1.5],
            [125.4, 189.3, 1],
            [262.6, 78.4, 1],
            [142.2, 166, 1],
          ]}
        />
        <Twinkle
          fill="#FFFFFF"
          values="0.2;1;0.3"
          dur="3.8s"
          begin="-0.9s"
          dots={[
            [17.4, 126.9, 1.2],
            [37.1, 55.8, 1.3],
            [257.5, 72.4, 1.1],
            [191.7, 93.1, 0.9],
            [94.2, 146.4, 1.2],
            [157.6, 218.8, 1.1],
            [45.6, 122.2, 1.2],
            [208.6, 148.6, 1.5],
            [18.2, 175.4, 1.3],
          ]}
        />
        <Shooting
          tail={[42.4, -22.5]}
          width={1.4}
          r={1.3}
          path="230 26;230 26;221.5 30.5;60 116;60 116"
          keyTimes="0;0.5;0.5;0.5;1"
          dur="17s"
          fade="0;0;1;0;0"
        />
      </svg>
      <svg
        className="fx"
        aria-hidden="true"
        style={{ inset: 0, width: '100%', height: '100%' }}
        viewBox="0 0 300 360"
        preserveAspectRatio="none"
      >
        <defs>
          <radialGradient id="tfG">
            <stop offset="0" stopColor="#FFB547" stopOpacity="0.8" />
            <stop offset="0.45" stopColor="#FFB547" stopOpacity="0.25" />
            <stop offset="1" stopColor="#FFB547" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="tfM">
            <stop offset="0" stopColor="#FFE2A8" stopOpacity="0.7" />
            <stop offset="0.45" stopColor="#FFE2A8" stopOpacity="0.2" />
            <stop offset="1" stopColor="#FFE2A8" stopOpacity="0" />
          </radialGradient>
          <filter id="tfB" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" />
          </filter>
        </defs>
        <ellipse cx="115" cy="95" rx="62" ry="62" fill="url(#tfM)">
          <animate
            attributeName="opacity"
            values="0.45;0.9;0.55;0.85;0.45"
            dur="6.2s"
            begin="0s"
            repeatCount="indefinite"
          />
        </ellipse>
        <ellipse cx="132" cy="262" rx="74" ry="40" fill="url(#tfG)">
          <animate
            attributeName="opacity"
            values="0.35;0.85;0.5;0.8;0.35"
            dur="4.6s"
            begin="0s"
            repeatCount="indefinite"
          />
        </ellipse>
        <g filter="url(#tfB)">
          <ellipse cx="126" cy="190" rx="7" ry="11" fill="#FFF1D8">
            <animate
              attributeName="cy"
              values="192;152;104"
              dur="7.0s"
              begin="0s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="rx"
              values="6;13;20"
              dur="7.0s"
              begin="0s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="ry"
              values="9;15;22"
              dur="7.0s"
              begin="0s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0;0.34;0"
              dur="7.0s"
              begin="0s"
              repeatCount="indefinite"
            />
          </ellipse>
          <ellipse cx="138" cy="190" rx="7" ry="11" fill="#FFF1D8">
            <animate
              attributeName="cy"
              values="192;152;104"
              dur="8.4s"
              begin="-2.4s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="rx"
              values="6;13;20"
              dur="8.4s"
              begin="-2.4s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="ry"
              values="9;15;22"
              dur="8.4s"
              begin="-2.4s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0;0.34;0"
              dur="8.4s"
              begin="-2.4s"
              repeatCount="indefinite"
            />
          </ellipse>
          <ellipse cx="132" cy="190" rx="7" ry="11" fill="#FFF1D8">
            <animate
              attributeName="cy"
              values="192;152;104"
              dur="7.6s"
              begin="-4.8s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="rx"
              values="6;13;20"
              dur="7.6s"
              begin="-4.8s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="ry"
              values="9;15;22"
              dur="7.6s"
              begin="-4.8s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0;0.34;0"
              dur="7.6s"
              begin="-4.8s"
              repeatCount="indefinite"
            />
          </ellipse>
          <ellipse cx="142" cy="190" rx="7" ry="11" fill="#FFF1D8">
            <animate
              attributeName="cy"
              values="192;152;104"
              dur="9.0s"
              begin="-6.6s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="rx"
              values="6;13;20"
              dur="9.0s"
              begin="-6.6s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="ry"
              values="9;15;22"
              dur="9.0s"
              begin="-6.6s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0;0.34;0"
              dur="9.0s"
              begin="-6.6s"
              repeatCount="indefinite"
            />
          </ellipse>
        </g>
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
            values="126 186;128.1 111;132 36"
            keyTimes="0;0.5;1"
            dur="9.5s"
            begin="0s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            keyTimes="0;0.14;0.78;1"
            dur="9.5s"
            begin="0s"
            repeatCount="indefinite"
          />
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="-14;14;-14"
              dur="7.6s"
              begin="0s"
              repeatCount="indefinite"
            />
            <g transform="scale(1.0)">
              <g
                style={{
                  filter:
                    'drop-shadow(0 1px 1.2px rgba(28,14,6,0.85)) drop-shadow(0 0 4px rgba(255,205,130,0.75))',
                }}
              >
                <rect x="-17" y="-8" width="34" height="16" rx="8" fill="#FFB547" />
                <rect
                  x="-9"
                  y="-1.6"
                  width="18"
                  height="3.2"
                  rx="1.6"
                  fill="#3A2208"
                  opacity="0.55"
                />
              </g>
            </g>
          </g>
        </g>
        <g>
          <animateTransform
            attributeName="transform"
            type="translate"
            values="138 186;146.4 106;162 26"
            keyTimes="0;0.5;1"
            dur="11s"
            begin="-1.4s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            keyTimes="0;0.14;0.78;1"
            dur="11s"
            begin="-1.4s"
            repeatCount="indefinite"
          />
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="-14;14;-14"
              dur="8.8s"
              begin="-1.4s"
              repeatCount="indefinite"
            />
            <g transform="scale(1.0)">
              <g
                style={{
                  filter:
                    'drop-shadow(0 1px 1.2px rgba(28,14,6,0.85)) drop-shadow(0 0 4px rgba(255,205,130,0.75))',
                }}
              >
                <path
                  d="M-6 -9 L-6 8 L-1.5 4 L1.5 11 L4.5 9.6 L1.6 3 L7 3 Z"
                  fill="#F3E9D2"
                  stroke="#1A1030"
                  strokeWidth="1"
                  strokeLinejoin="round"
                />
              </g>
            </g>
          </g>
        </g>
        <g>
          <animateTransform
            attributeName="transform"
            type="translate"
            values="128 186;120.3 116;106 46"
            keyTimes="0;0.5;1"
            dur="8.5s"
            begin="-2.6s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            keyTimes="0;0.14;0.78;1"
            dur="8.5s"
            begin="-2.6s"
            repeatCount="indefinite"
          />
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="-14;14;-14"
              dur="6.8s"
              begin="-2.6s"
              repeatCount="indefinite"
            />
            <g transform="scale(1.0)">
              <g
                style={{
                  filter:
                    'drop-shadow(0 1px 1.2px rgba(28,14,6,0.85)) drop-shadow(0 0 4px rgba(255,205,130,0.75))',
                }}
              >
                <text
                  y="5"
                  textAnchor="middle"
                  fontFamily="DM Mono, monospace"
                  fontWeight="500"
                  fontSize="15"
                  fill="#8FDCFF"
                >
                  &lt;/&gt;
                </text>
              </g>
            </g>
          </g>
        </g>
        <g>
          <animateTransform
            attributeName="transform"
            type="translate"
            values="144 186;154.5 121;174 56"
            keyTimes="0;0.5;1"
            dur="10s"
            begin="-4.1s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            keyTimes="0;0.14;0.78;1"
            dur="10s"
            begin="-4.1s"
            repeatCount="indefinite"
          />
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="-14;14;-14"
              dur="8s"
              begin="-4.1s"
              repeatCount="indefinite"
            />
            <g transform="scale(1.0)">
              <g
                style={{
                  filter:
                    'drop-shadow(0 1px 1.2px rgba(28,14,6,0.85)) drop-shadow(0 0 4px rgba(255,205,130,0.75))',
                }}
              >
                <path d="M0 7 C-13 -2 -9 -12 0 -5 C9 -12 13 -2 0 7Z" fill="#FF8A6B" />
              </g>
            </g>
          </g>
        </g>
        <g>
          <animateTransform
            attributeName="transform"
            type="translate"
            values="132 186;121.5 111;102 36"
            keyTimes="0;0.5;1"
            dur="12s"
            begin="-5.2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            keyTimes="0;0.14;0.78;1"
            dur="12s"
            begin="-5.2s"
            repeatCount="indefinite"
          />
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="-14;14;-14"
              dur="9.6s"
              begin="-5.2s"
              repeatCount="indefinite"
            />
            <g transform="scale(1.0)">
              <g
                style={{
                  filter:
                    'drop-shadow(0 1px 1.2px rgba(28,14,6,0.85)) drop-shadow(0 0 4px rgba(255,205,130,0.75))',
                }}
              >
                <rect x="-16" y="-12" width="32" height="24" rx="4" fill="rgba(243,233,210,0.94)" />
                <rect x="-11" y="-7" width="22" height="8" rx="2" fill="#8FB4FF" />
                <rect x="-11" y="4" width="15" height="2.6" rx="1.3" fill="#7A6A55" />
              </g>
            </g>
          </g>
        </g>
        <g>
          <animateTransform
            attributeName="transform"
            type="translate"
            values="140 186;144.9 118;154 50"
            keyTimes="0;0.5;1"
            dur="9s"
            begin="-6.4s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            keyTimes="0;0.14;0.78;1"
            dur="9s"
            begin="-6.4s"
            repeatCount="indefinite"
          />
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="-14;14;-14"
              dur="7.2s"
              begin="-6.4s"
              repeatCount="indefinite"
            />
            <g transform="scale(1.0)">
              <g
                style={{
                  filter:
                    'drop-shadow(0 1px 1.2px rgba(28,14,6,0.85)) drop-shadow(0 0 4px rgba(255,205,130,0.75))',
                }}
              >
                <rect x="-14" y="-7" width="28" height="14" rx="7" fill="#5BE38F" opacity="0.92" />
                <circle cx="7" cy="0" r="5" fill="#F3E9D2" />
              </g>
            </g>
          </g>
        </g>
        <g>
          <animateTransform
            attributeName="transform"
            type="translate"
            values="130 186;125.1 108;116 30"
            keyTimes="0;0.5;1"
            dur="11.5s"
            begin="-7.7s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            keyTimes="0;0.14;0.78;1"
            dur="11.5s"
            begin="-7.7s"
            repeatCount="indefinite"
          />
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="-14;14;-14"
              dur="9.2s"
              begin="-7.7s"
              repeatCount="indefinite"
            />
            <g transform="scale(1.0)">
              <g
                style={{
                  filter:
                    'drop-shadow(0 1px 1.2px rgba(28,14,6,0.85)) drop-shadow(0 0 4px rgba(255,205,130,0.75))',
                }}
              >
                <text
                  y="6"
                  textAnchor="middle"
                  fontFamily="DM Mono, monospace"
                  fontWeight="500"
                  fontSize="17"
                  fill="#FFB547"
                >
                  {'{'} {'}'}
                </text>
              </g>
            </g>
          </g>
        </g>
        <g>
          <animateTransform
            attributeName="transform"
            type="translate"
            values="136 186;147.9 114;170 42"
            keyTimes="0;0.5;1"
            dur="8s"
            begin="-3.3s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            keyTimes="0;0.14;0.78;1"
            dur="8s"
            begin="-3.3s"
            repeatCount="indefinite"
          />
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="-14;14;-14"
              dur="6.4s"
              begin="-3.3s"
              repeatCount="indefinite"
            />
            <g transform="scale(0.8)">
              <g
                style={{
                  filter:
                    'drop-shadow(0 1px 1.2px rgba(28,14,6,0.85)) drop-shadow(0 0 4px rgba(255,205,130,0.75))',
                }}
              >
                <path
                  d="M0 -9 C1 -3 3 -1 9 0 C3 1 1 3 0 9 C-1 3 -3 1 -9 0 C-3 -1 -1 -3 0 -9Z"
                  fill="#FFE9B8"
                />
              </g>
            </g>
          </g>
        </g>
        <g>
          <animateTransform
            attributeName="transform"
            type="translate"
            values="138 186;135.2 111;130 36"
            keyTimes="0;0.5;1"
            dur="13s"
            begin="-9.1s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            keyTimes="0;0.14;0.78;1"
            dur="13s"
            begin="-9.1s"
            repeatCount="indefinite"
          />
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="-14;14;-14"
              dur="10.4s"
              begin="-9.1s"
              repeatCount="indefinite"
            />
            <g transform="scale(1.0)">
              <g
                style={{
                  filter:
                    'drop-shadow(0 1px 1.2px rgba(28,14,6,0.85)) drop-shadow(0 0 4px rgba(255,205,130,0.75))',
                }}
              >
                <rect x="-16" y="-2" width="32" height="4" rx="2" fill="rgba(243,233,210,0.5)" />
                <rect x="-16" y="-2" width="20" height="4" rx="2" fill="#FF8A6B" />
                <circle cx="4" cy="0" r="5.5" fill="#F3E9D2" />
              </g>
            </g>
          </g>
        </g>
        <g>
          <animateTransform
            attributeName="transform"
            type="translate"
            values="130 186;118.8 121;98 56"
            keyTimes="0;0.5;1"
            dur="7.5s"
            begin="-8.4s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            keyTimes="0;0.14;0.78;1"
            dur="7.5s"
            begin="-8.4s"
            repeatCount="indefinite"
          />
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="-14;14;-14"
              dur="6s"
              begin="-8.4s"
              repeatCount="indefinite"
            />
            <g transform="scale(0.8)">
              <g
                style={{
                  filter:
                    'drop-shadow(0 1px 1.2px rgba(28,14,6,0.85)) drop-shadow(0 0 4px rgba(255,205,130,0.75))',
                }}
              >
                <path
                  d="M0 -9 C1 -3 3 -1 9 0 C3 1 1 3 0 9 C-1 3 -3 1 -9 0 C-3 -1 -1 -3 0 -9Z"
                  fill="#FFE9B8"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </>
  );
}
