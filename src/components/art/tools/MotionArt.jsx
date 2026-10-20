import { IMG } from '../../../assets';
import { Shooting, Twinkle } from '../svg';

export default function MotionArt() {
  return (
    <>
      <img src={IMG.toolMotion} alt="" loading="lazy" decoding="async" data-soon="" />
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
          begin="-0.8s"
          dots={[
            [164.4, 114.1, 1.1],
            [31.1, 146.8, 1.5],
            [219.1, 147.6, 1.4],
            [202.2, 98.5, 1.3],
            [227, 193.7, 1.5],
            [110.2, 45.9, 1.3],
            [140, 308.6, 1.1],
            [289.7, 67.7, 1.4],
            [45.2, 302.3, 1.4],
            [188.4, 291.1, 0.9],
            [8.3, 63.6, 1.1],
            [259.7, 66.6, 1.1],
          ]}
        />
        <Twinkle
          fill="#FFFFFF"
          values="0.2;1;0.3"
          dur="4.4s"
          begin="-3.9s"
          dots={[
            [253.5, 95.2, 1.1],
            [67.4, 115.4, 1.4],
            [51.1, 143.2, 1.2],
            [153.6, 72.6, 1.2],
            [193.5, 131.1, 1.2],
            [45, 112.4, 1.5],
            [197.8, 105.9, 1.4],
            [83.5, 320.9, 1.2],
            [287.9, 287, 1],
            [284.7, 169.9, 1.1],
            [150, 41.9, 1.2],
            [190.2, 289.2, 1.4],
          ]}
        />
        <Twinkle
          fill="#FFFFFF"
          values="0.2;1;0.3"
          dur="5.3s"
          begin="-5.3s"
          dots={[
            [153.1, 113.5, 1.1],
            [299.6, 108.7, 1.6],
            [122.4, 261.6, 1.5],
            [123.2, 259.4, 1.2],
            [185.4, 256.5, 1.1],
            [20.8, 131.3, 1.1],
            [262.5, 230.7, 1.5],
            [6.6, 304.8, 1],
            [217.4, 250.7, 1.4],
            [2.5, 57.5, 1.4],
            [33.8, 54.6, 1],
          ]}
        />
        <Twinkle
          fill="#FFFFFF"
          values="0.2;1;0.3"
          dur="3.8s"
          begin="-0.1s"
          dots={[
            [124.6, 321.4, 1.3],
            [182.3, 138.5, 0.9],
            [168.8, 64.8, 1.3],
            [154.7, 248.3, 1.6],
            [29.8, 309.4, 1.2],
            [124.5, 216.3, 1.1],
            [290.2, 242.3, 1],
            [273.1, 44.8, 1.1],
            [92.4, 2.4, 1.1],
            [134.7, 76.1, 1],
            [10.1, 258.6, 1.4],
          ]}
        />
        <Shooting
          tail={[48.3, -24.1]}
          width={1.6}
          r={1.4}
          path="250 40;250 40;240 45;50 140;50 140"
          keyTimes="0;0.2;0.2;0.3;1"
          dur="18s"
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
          <radialGradient id="tmG">
            <stop offset="0" stopColor="#FFC15E" stopOpacity="0.9" />
            <stop offset="0.45" stopColor="#FFC15E" stopOpacity="0.28" />
            <stop offset="1" stopColor="#FFC15E" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="tmC">
            <stop offset="0" stopColor="#8FDCFF" stopOpacity="0.8" />
            <stop offset="0.45" stopColor="#8FDCFF" stopOpacity="0.2" />
            <stop offset="1" stopColor="#8FDCFF" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="tmL">
            <stop offset="0" stopColor="#FFB547" stopOpacity="0.8" />
            <stop offset="0.45" stopColor="#FFB547" stopOpacity="0.22" />
            <stop offset="1" stopColor="#FFB547" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="tmR" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#8FDCFF" />
            <stop offset="1" stopColor="#FFC15E" />
          </linearGradient>
          <linearGradient id="tmF1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#FFF4D6" />
            <stop offset="1" stopColor="#FFB547" />
          </linearGradient>
          <linearGradient id="tmF2" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#FFC15E" />
            <stop offset="1" stopColor="#C8642A" />
          </linearGradient>
          <linearGradient id="tmF3" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#FFB547" />
            <stop offset="1" stopColor="#8E3F22" />
          </linearGradient>
          <linearGradient id="tmF4" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#E88A3C" />
            <stop offset="1" stopColor="#6A2E24" />
          </linearGradient>
          <filter id="tmB" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>
        <ellipse cx="172" cy="182" rx="60" ry="52" fill="url(#tmL)">
          <animate
            attributeName="opacity"
            values="0.5;0.95;0.6;1;0.55"
            dur="3.4s"
            begin="0s"
            repeatCount="indefinite"
          />
        </ellipse>
        <ellipse cx="120" cy="200" rx="96" ry="78" fill="url(#tmL)" opacity="0.3">
          <animate
            attributeName="opacity"
            values="0.18;0.45;0.22"
            dur="5.6s"
            repeatCount="indefinite"
          />
        </ellipse>
        <circle cx="196.1" cy="99.3" r="1.3" fill="#FFE2A8">
          <animate
            attributeName="opacity"
            values="0;0.9;0"
            dur="7.9s"
            begin="-7.4s"
            repeatCount="indefinite"
          />
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 8;-1.9 -16"
            dur="7.9s"
            begin="-7.3s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="48.6" cy="259.1" r="1.1" fill="#FFE2A8">
          <animate
            attributeName="opacity"
            values="0;0.9;0"
            dur="6.7s"
            begin="-2.3s"
            repeatCount="indefinite"
          />
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 8;2.6 -16"
            dur="6.7s"
            begin="-0.2s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="89.7" cy="91.9" r="1.1" fill="#FFE2A8">
          <animate
            attributeName="opacity"
            values="0;0.9;0"
            dur="5.3s"
            begin="-1.2s"
            repeatCount="indefinite"
          />
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 8;-4.5 -16"
            dur="5.3s"
            begin="-4.1s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="94.9" cy="235.8" r="1.7" fill="#FFE2A8">
          <animate
            attributeName="opacity"
            values="0;0.9;0"
            dur="8.6s"
            begin="-8.1s"
            repeatCount="indefinite"
          />
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 8;1.5 -16"
            dur="8.6s"
            begin="-5.8s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="178.7" cy="182.4" r="1.4" fill="#FFE2A8">
          <animate
            attributeName="opacity"
            values="0;0.9;0"
            dur="5.6s"
            begin="-3s"
            repeatCount="indefinite"
          />
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 8;-6.4 -16"
            dur="5.6s"
            begin="-0.5s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="53.2" cy="208.6" r="1.5" fill="#FFE2A8">
          <animate
            attributeName="opacity"
            values="0;0.9;0"
            dur="8.2s"
            begin="-3.5s"
            repeatCount="indefinite"
          />
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 8;-9.4 -16"
            dur="8.2s"
            begin="-0s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="137.9" cy="180" r="1.1" fill="#FFE2A8">
          <animate
            attributeName="opacity"
            values="0;0.9;0"
            dur="6.8s"
            begin="-0.8s"
            repeatCount="indefinite"
          />
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 8;-6.4 -16"
            dur="6.8s"
            begin="-0.9s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="127.9" cy="142.2" r="1.3" fill="#FFE2A8">
          <animate
            attributeName="opacity"
            values="0;0.9;0"
            dur="7.2s"
            begin="-4s"
            repeatCount="indefinite"
          />
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 8;4.9 -16"
            dur="7.2s"
            begin="-5.6s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="46.9" cy="253.2" r="1.6" fill="#FFE2A8">
          <animate
            attributeName="opacity"
            values="0;0.9;0"
            dur="8.4s"
            begin="-3.8s"
            repeatCount="indefinite"
          />
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 8;9 -16"
            dur="8.4s"
            begin="-6.8s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="63" cy="206.8" r="1.6" fill="#FFE2A8">
          <animate
            attributeName="opacity"
            values="0;0.9;0"
            dur="8.4s"
            begin="-7.6s"
            repeatCount="indefinite"
          />
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 8;0.6 -16"
            dur="8.4s"
            begin="-5.6s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="33.7" cy="202.9" r="1.6" fill="#FFE2A8">
          <animate
            attributeName="opacity"
            values="0;0.9;0"
            dur="5.6s"
            begin="-5s"
            repeatCount="indefinite"
          />
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 8;-2.6 -16"
            dur="5.6s"
            begin="-0.4s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="27.8" cy="177.8" r="1.6" fill="#FFE2A8">
          <animate
            attributeName="opacity"
            values="0;0.9;0"
            dur="5.6s"
            begin="-3.4s"
            repeatCount="indefinite"
          />
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 8;0 -16"
            dur="5.6s"
            begin="-3.8s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="47.1" cy="167.9" r="1.4" fill="#FFE2A8">
          <animate
            attributeName="opacity"
            values="0;0.9;0"
            dur="5.2s"
            begin="-4.1s"
            repeatCount="indefinite"
          />
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 8;-6.9 -16"
            dur="5.2s"
            begin="-3.6s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="198.9" cy="145" r="1.1" fill="#FFE2A8">
          <animate
            attributeName="opacity"
            values="0;0.9;0"
            dur="5.8s"
            begin="-4.9s"
            repeatCount="indefinite"
          />
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 8;-8.4 -16"
            dur="5.8s"
            begin="-4.5s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="67.1" cy="218.5" r="1.7" fill="#FFE2A8">
          <animate
            attributeName="opacity"
            values="0;0.9;0"
            dur="8.5s"
            begin="-1.6s"
            repeatCount="indefinite"
          />
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 8;1 -16"
            dur="8.5s"
            begin="-2.7s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="177.5" cy="140.2" r="1.3" fill="#FFE2A8">
          <animate
            attributeName="opacity"
            values="0;0.9;0"
            dur="5.7s"
            begin="-0.5s"
            repeatCount="indefinite"
          />
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 8;-5.5 -16"
            dur="5.7s"
            begin="-4s"
            repeatCount="indefinite"
          />
        </circle>
        <g>
          <animateTransform
            attributeName="transform"
            type="translate"
            values="80 166;80 152;80 166"
            dur="5.6s"
            repeatCount="indefinite"
          />
          <g transform="scale(1.3)">
            <ellipse rx="64" ry="58" fill="url(#tmG)">
              <animate
                attributeName="opacity"
                values="0.55;1;0.6;0.95;0.55"
                dur="4.4s"
                repeatCount="indefinite"
              />
            </ellipse>
            <g filter="url(#tmB)" opacity="0.7">
              <path d="M0 -27 L-15 0 L0 27 L15 0 Z" fill="#FFB547" />
            </g>
            <g transform="rotate(0)">
              <g>
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  values="1 1;0.05 1;-1 1;0.05 1;1 1"
                  dur="7.0s"
                  begin="0s"
                  repeatCount="indefinite"
                />
                <ellipse
                  rx="36"
                  ry="36"
                  fill="none"
                  stroke="url(#tmR)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </g>
            </g>
            <g transform="rotate(90)">
              <g>
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  values="1 1;1 0.05;1 -1;1 0.05;1 1"
                  dur="9.0s"
                  begin="-2s"
                  repeatCount="indefinite"
                />
                <ellipse
                  rx="36"
                  ry="36"
                  fill="none"
                  stroke="url(#tmR)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </g>
            </g>
            <g transform="rotate(55)">
              <g>
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  values="1 1;0.05 1;-1 1;0.05 1;1 1"
                  dur="11.0s"
                  begin="-5s"
                  repeatCount="indefinite"
                />
                <ellipse
                  rx="30"
                  ry="30"
                  fill="none"
                  stroke="rgba(255,233,184,0.85)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </g>
            </g>
            <g transform="rotate(-35)">
              <g>
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  values="1 1;0.05 1;-1 1;0.05 1;1 1"
                  dur="13.0s"
                  begin="-3s"
                  repeatCount="indefinite"
                />
                <ellipse
                  rx="44"
                  ry="44"
                  fill="none"
                  stroke="rgba(143,220,255,0.65)"
                  strokeWidth="1.0"
                  strokeLinecap="round"
                />
              </g>
            </g>
            <g>
              <polygon points="0,-27 -15,0 0,4" fill="url(#tmF1)" />
              <polygon points="0,-27 15,0 0,4" fill="url(#tmF2)" />
              <polygon points="-15,0 0,4 0,27" fill="url(#tmF3)" />
              <polygon points="15,0 0,4 0,27" fill="url(#tmF4)" />
              <polygon points="0,-27 -4,-6 0,-3 4,-6" fill="#FFFFFF" opacity="0.55" />
              <path
                d="M0 -27 L-15 0 L0 27 L15 0 Z"
                fill="none"
                stroke="rgba(255,240,200,0.7)"
                strokeWidth="0.8"
                strokeLinejoin="round"
              />
            </g>
            <circle r="2.6" fill="#FFF4D6">
              <animateMotion
                dur="5.2s"
                repeatCount="indefinite"
                path="M-36 0 A36 12 0 1 1 36 0 A36 12 0 1 1 -36 0"
              />
            </circle>
            <circle r="2" fill="#8FDCFF">
              <animateMotion
                dur="7.4s"
                begin="-2s"
                repeatCount="indefinite"
                path="M0 -40 A12 40 0 1 1 0 40 A12 40 0 1 1 0 -40"
              />
            </circle>
          </g>
        </g>
      </svg>
    </>
  );
}
