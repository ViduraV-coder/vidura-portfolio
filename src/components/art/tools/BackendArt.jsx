import { IMG } from '../../../assets';

export default function BackendArt() {
  return (
    <>
      <img src={IMG.toolBackend} alt="" />
      <svg
        className="fx"
        aria-hidden="true"
        style={{ inset: 0, width: '100%', height: '100%' }}
        viewBox="0 0 300 360"
        preserveAspectRatio="none"
      >
        <defs>
          <radialGradient id="tbG">
            <stop offset="0" stopColor="#5BE38F" stopOpacity="0.55" />
            <stop offset="0.45" stopColor="#5BE38F" stopOpacity="0.18" />
            <stop offset="1" stopColor="#5BE38F" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="tbL">
            <stop offset="0" stopColor="#FFC15E" stopOpacity="0.9" />
            <stop offset="0.45" stopColor="#FFC15E" stopOpacity="0.3" />
            <stop offset="1" stopColor="#FFC15E" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="tbS" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#7DFFB0" stopOpacity="0" />
            <stop offset="0.5" stopColor="#7DFFB0" stopOpacity="0.2" />
            <stop offset="1" stopColor="#7DFFB0" stopOpacity="0" />
          </linearGradient>
          <filter id="tbF" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="0.55" />
          </filter>
          <clipPath id="tbC">
            <rect x="146" y="138" width="154" height="142" />
          </clipPath>
        </defs>
        <ellipse cx="43" cy="84" rx="60" ry="60" fill="url(#tbL)">
          <animate
            attributeName="opacity"
            values="0.5;0.95;0.7;1;0.55"
            dur="3.4s"
            begin="0s"
            repeatCount="indefinite"
          />
        </ellipse>
        <ellipse cx="224" cy="208" rx="120" ry="96" fill="url(#tbG)">
          <animate
            attributeName="opacity"
            values="0.5;1;0.65;0.95;0.5"
            dur="3.8s"
            begin="0s"
            repeatCount="indefinite"
          />
        </ellipse>
        <g filter="url(#tbF)" clipPath="url(#tbC)">
          <text
            x="154"
            y="158.0"
            fontFamily="DM Mono, monospace"
            fontWeight="500"
            fontSize="9.4"
            fill="#BFFFD8"
            opacity="0"
          >
            $ npm run build
            <animate
              attributeName="opacity"
              values="0;0;1;1;0"
              keyTimes="0;0;0.1;0.93;1"
              dur="15.0s"
              repeatCount="indefinite"
            />
          </text>
          <text
            x="154"
            y="173.5"
            fontFamily="DM Mono, monospace"
            fontWeight="500"
            fontSize="9.4"
            fill="#5BE38F"
            opacity="0"
          >
            ✓ compiled in 1.2s
            <animate
              attributeName="opacity"
              values="0;0;1;1;0"
              keyTimes="0;0.1;0.1;0.93;1"
              dur="15.0s"
              repeatCount="indefinite"
            />
          </text>
          <text
            x="154"
            y="189.0"
            fontFamily="DM Mono, monospace"
            fontWeight="500"
            fontSize="9.4"
            fill="#BFFFD8"
            opacity="0"
          >
            $ docker compose up -d
            <animate
              attributeName="opacity"
              values="0;0;1;1;0"
              keyTimes="0;0.2;0.2;0.93;1"
              dur="15.0s"
              repeatCount="indefinite"
            />
          </text>
          <text
            x="154"
            y="204.5"
            fontFamily="DM Mono, monospace"
            fontWeight="500"
            fontSize="9.4"
            fill="#5BE38F"
            opacity="0"
          >
            ✓ api ✓ db ✓ cache
            <animate
              attributeName="opacity"
              values="0;0;1;1;0"
              keyTimes="0;0.3;0.3;0.93;1"
              dur="15.0s"
              repeatCount="indefinite"
            />
          </text>
          <text
            x="154"
            y="220.0"
            fontFamily="DM Mono, monospace"
            fontWeight="500"
            fontSize="9.4"
            fill="#8FDCFF"
            opacity="0"
          >
            GET /stars 200 4ms
            <animate
              attributeName="opacity"
              values="0;0;1;1;0"
              keyTimes="0;0.4;0.4;0.93;1"
              dur="15.0s"
              repeatCount="indefinite"
            />
          </text>
          <text
            x="154"
            y="235.5"
            fontFamily="DM Mono, monospace"
            fontWeight="500"
            fontSize="9.4"
            fill="#8FDCFF"
            opacity="0"
          >
            POST /ship 201 12ms
            <animate
              attributeName="opacity"
              values="0;0;1;1;0"
              keyTimes="0;0.5;0.5;0.93;1"
              dur="15.0s"
              repeatCount="indefinite"
            />
          </text>
          <text
            x="154"
            y="251.0"
            fontFamily="DM Mono, monospace"
            fontWeight="500"
            fontSize="9.4"
            fill="#5BE38F"
            opacity="0"
          >
            all systems calm
            <animate
              attributeName="opacity"
              values="0;0;1;1;0"
              keyTimes="0;0.6;0.6;0.93;1"
              dur="15.0s"
              repeatCount="indefinite"
            />
          </text>
          <text
            x="154"
            y="272.5"
            fontFamily="DM Mono, monospace"
            fontWeight="500"
            fontSize="15"
            letterSpacing="1"
            fill="#7DFFB0"
            opacity="0"
          >
            KEEP PUSHING
            <animate
              attributeName="opacity"
              values="0;0;1;1;0"
              keyTimes="0;0.7;0.7;0.93;1"
              dur="15.0s"
              repeatCount="indefinite"
            />
          </text>
          <rect x="154" y="258" width="6" height="11" fill="#9CFFC4">
            <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
          </rect>
        </g>
        <rect x="146" y="138" width="154" height="14" fill="url(#tbS)" clipPath="url(#tbC)">
          <animate attributeName="y" values="128;276;128" dur="4.6s" repeatCount="indefinite" />
        </rect>
        <circle cx="160" cy="293" r="2.2" fill="#5BE38F">
          <animate
            attributeName="opacity"
            values="0.2;1;0.3"
            dur="1.6s"
            begin="0s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="169" cy="293" r="2.2" fill="#FFB547">
          <animate
            attributeName="opacity"
            values="0.2;1;0.3"
            dur="2.3s"
            begin="-0.7s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="178" cy="293" r="2.2" fill="#5BE38F">
          <animate
            attributeName="opacity"
            values="0.2;1;0.3"
            dur="3.1s"
            begin="-1.4s"
            repeatCount="indefinite"
          />
        </circle>
        <g filter="url(#tbF)">
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="165.3 144;165.9 92;167.1 40"
              keyTimes="0;0.5;1"
              dur="12s"
              begin="0s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0;1;1;0"
              keyTimes="0;0.18;0.7;1"
              dur="12s"
              begin="0s"
              repeatCount="indefinite"
            />
            <g>
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="-3;3;-3"
                dur="11.1s"
                begin="0s"
                repeatCount="indefinite"
              />
              <g transform="scale(1.0)">
                <text
                  textAnchor="middle"
                  fontFamily="DM Mono, monospace"
                  fontWeight="500"
                  fontSize="10"
                  fill="#5BE38F"
                >
                  200 OK
                </text>
              </g>
            </g>
          </g>
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="211.1 144;212.4 92;215 40"
              keyTimes="0;0.5;1"
              dur="12s"
              begin="-2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0;1;1;0"
              keyTimes="0;0.18;0.7;1"
              dur="12s"
              begin="-2s"
              repeatCount="indefinite"
            />
            <g>
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="-3;3;-3"
                dur="9.5s"
                begin="-2s"
                repeatCount="indefinite"
              />
              <g transform="scale(1.0)">
                <text
                  textAnchor="middle"
                  fontFamily="DM Mono, monospace"
                  fontWeight="500"
                  fontSize="10.9"
                  fill="#5BE38F"
                >
                  POST /ship
                </text>
              </g>
            </g>
          </g>
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="256.8 144;259.2 92;263.6 40"
              keyTimes="0;0.5;1"
              dur="12s"
              begin="-4s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0;1;1;0"
              keyTimes="0;0.18;0.7;1"
              dur="12s"
              begin="-4s"
              repeatCount="indefinite"
            />
            <g>
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="-3;3;-3"
                dur="9.3s"
                begin="-4s"
                repeatCount="indefinite"
              />
              <g transform="scale(1.0)">
                <text
                  textAnchor="middle"
                  fontFamily="DM Mono, monospace"
                  fontWeight="500"
                  fontSize="11.3"
                  fill="#5BE38F"
                >
                  ✓ migrated
                </text>
              </g>
            </g>
          </g>
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="168.3 144;158.4 92;140 40"
              keyTimes="0;0.5;1"
              dur="12s"
              begin="-6s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0;1;1;0"
              keyTimes="0;0.18;0.7;1"
              dur="12s"
              begin="-6s"
              repeatCount="indefinite"
            />
            <g>
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="-3;3;-3"
                dur="10.3s"
                begin="-6s"
                repeatCount="indefinite"
              />
              <g transform="scale(1.0)">
                <text
                  textAnchor="middle"
                  fontFamily="DM Mono, monospace"
                  fontWeight="500"
                  fontSize="9.8"
                  fill="#5BE38F"
                >
                  db: ready
                </text>
              </g>
            </g>
          </g>
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="214.6 144;214.3 92;213.8 40"
              keyTimes="0;0.5;1"
              dur="12s"
              begin="-8s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0;1;1;0"
              keyTimes="0;0.18;0.7;1"
              dur="12s"
              begin="-8s"
              repeatCount="indefinite"
            />
            <g>
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="-3;3;-3"
                dur="10.4s"
                begin="-8s"
                repeatCount="indefinite"
              />
              <g transform="scale(1.0)">
                <text
                  textAnchor="middle"
                  fontFamily="DM Mono, monospace"
                  fontWeight="500"
                  fontSize="9.7"
                  fill="#5BE38F"
                >
                  uptime 99.9%
                </text>
              </g>
            </g>
          </g>
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="256 144;241.9 92;215.7 40"
              keyTimes="0;0.5;1"
              dur="12s"
              begin="-10s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0;1;1;0"
              keyTimes="0;0.18;0.7;1"
              dur="12s"
              begin="-10s"
              repeatCount="indefinite"
            />
            <g>
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="-3;3;-3"
                dur="11.1s"
                begin="-10s"
                repeatCount="indefinite"
              />
              <g transform="scale(1.0)">
                <text
                  textAnchor="middle"
                  fontFamily="DM Mono, monospace"
                  fontWeight="500"
                  fontSize="10.3"
                  fill="#5BE38F"
                >
                  tests: 128 ✓
                </text>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </>
  );
}
