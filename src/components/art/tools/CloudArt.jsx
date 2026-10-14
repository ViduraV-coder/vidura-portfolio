import { IMG } from '../../../assets';
import { Shooting, Twinkle } from '../svg';

export default function CloudArt() {
  return (
    <>
      <img src={IMG.toolCloud} alt="" />
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
          begin="-2s"
          dots={[
            [77.7, 150.8, 1],
            [220.2, 28.6, 1.1],
            [4.3, 60.7, 1.4],
            [284.8, 174.6, 1.4],
            [109.3, 94.6, 1.4],
            [166.3, 164.7, 1],
            [76, 101.1, 1.4],
            [58.3, 80.6, 1.1],
            [13, 31.2, 1.3],
          ]}
        />
        <Twinkle
          fill="#FFFFFF"
          values="0.2;1;0.3"
          dur="4.4s"
          begin="-0.6s"
          dots={[
            [205.2, 186.9, 1.5],
            [159.4, 47.1, 1.3],
            [44, 191.7, 1.3],
            [77, 187, 1],
            [94.1, 25.8, 1.3],
            [40.5, 148.9, 1.2],
            [181.6, 87.1, 1.3],
            [22, 143.3, 1.1],
            [241.8, 184.4, 1.3],
          ]}
        />
        <Twinkle
          fill="#FFFFFF"
          values="0.2;1;0.3"
          dur="5.3s"
          begin="-1.8s"
          dots={[
            [55.7, 50.7, 1.1],
            [88.4, 94.9, 1],
            [242.9, 177.3, 1.3],
            [146, 166.1, 1],
            [245.9, 175.6, 1],
            [133, 38.9, 0.9],
            [39.2, 108, 1.3],
            [286.1, 85.7, 1.2],
          ]}
        />
        <Twinkle
          fill="#FFFFFF"
          values="0.2;1;0.3"
          dur="3.8s"
          begin="-2.1s"
          dots={[
            [44.1, 49.5, 0.9],
            [251.3, 133.8, 1.2],
            [247.9, 163.8, 1.1],
            [169.2, 94.5, 1],
            [295.7, 152, 0.9],
            [60.8, 115, 1.5],
            [70.6, 51.8, 1],
            [215.7, 205.3, 1.1],
          ]}
        />
        <Shooting
          tail={[-43.4, -20.4]}
          width={1.4}
          r={1.3}
          path="60 24;60 24;68.5 28;230 104;230 104"
          keyTimes="0;0.3;0.3;0.4;1"
          dur="19s"
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
            type="translate"
            values="0 0;0 -3.2;0 0"
            dur="7s"
            repeatCount="indefinite"
          />
          <g transform="translate(150 306)">
            <g>
              <animateTransform
                attributeName="transform"
                type="scale"
                values="1 1;1.004 1.03;1 1"
                dur="4.2s"
                repeatCount="indefinite"
              />
              <g transform="translate(-150 -306)">
                <image href={IMG.toolCat} x="49.5" y="216.0" width="201.0" height="90.0" />
              </g>
            </g>
          </g>
        </g>
      </svg>
      <svg
        className="fx"
        aria-hidden="true"
        style={{ inset: 0, width: '100%', height: '100%', overflow: 'hidden' }}
        viewBox="0 0 300 360"
        preserveAspectRatio="none"
      >
        <defs>
          <radialGradient id="tcG">
            <stop offset="0" stopColor="#FFE2A8" stopOpacity="0.7" />
            <stop offset="0.45" stopColor="#FFE2A8" stopOpacity="0.2" />
            <stop offset="1" stopColor="#FFE2A8" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="tcL">
            <stop offset="0" stopColor="#FFC15E" stopOpacity="0.8" />
            <stop offset="0.45" stopColor="#FFC15E" stopOpacity="0.25" />
            <stop offset="1" stopColor="#FFC15E" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="230" cy="75" rx="70" ry="70" fill="url(#tcG)">
          <animate
            attributeName="opacity"
            values="0.5;1;0.6;0.95;0.5"
            dur="6.0s"
            begin="0s"
            repeatCount="indefinite"
          />
        </ellipse>
        <ellipse cx="150" cy="268" rx="96" ry="40" fill="url(#tcL)">
          <animate
            attributeName="opacity"
            values="0.2;0.5;0.25;0.45;0.2"
            dur="5.2s"
            begin="0s"
            repeatCount="indefinite"
          />
        </ellipse>
        <circle cx="34" cy="312" r="2" fill="none" stroke="#5BE38F" strokeWidth="1.2">
          <animate attributeName="r" values="2;13" dur="4.8s" begin="0s" repeatCount="indefinite" />
          <animate
            attributeName="opacity"
            values="0.9;0"
            dur="4.8s"
            begin="0s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="34" cy="312" r="2.4" fill="#5BE38F">
          <animate
            attributeName="opacity"
            values="0.2;1;0.2"
            dur="4.8s"
            begin="0s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="262" cy="300" r="2" fill="none" stroke="#5BE38F" strokeWidth="1.2">
          <animate
            attributeName="r"
            values="2;13"
            dur="4.8s"
            begin="-1.8s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.9;0"
            dur="4.8s"
            begin="-1.8s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="262" cy="300" r="2.4" fill="#5BE38F">
          <animate
            attributeName="opacity"
            values="0.2;1;0.2"
            dur="4.8s"
            begin="-1.8s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="214" cy="338" r="2" fill="none" stroke="#5BE38F" strokeWidth="1.2">
          <animate
            attributeName="r"
            values="2;13"
            dur="4.8s"
            begin="-3.4s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.9;0"
            dur="4.8s"
            begin="-3.4s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="214" cy="338" r="2.4" fill="#5BE38F">
          <animate
            attributeName="opacity"
            values="0.2;1;0.2"
            dur="4.8s"
            begin="-3.4s"
            repeatCount="indefinite"
          />
        </circle>
        <g>
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="46 276;52.3 161;64 46"
              keyTimes="0;0.5;1"
              dur="15s"
              begin="0s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0;1;1;0"
              keyTimes="0;0.12;0.8;1"
              dur="15s"
              begin="0s"
              repeatCount="indefinite"
            />
            <g>
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="-5;5;-5"
                dur="12s"
                begin="0s"
                repeatCount="indefinite"
              />
              <g transform="scale(1.0)">
                <image
                  href={IMG.lantern}
                  x="-31"
                  y="-38.4"
                  width="62"
                  height="76.8"
                  style={{ filter: 'hue-rotate(0deg)' }}
                />
              </g>
            </g>
          </g>
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="110 276;105.1 151;96 26"
              keyTimes="0;0.5;1"
              dur="18s"
              begin="-5.5s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0;1;1;0"
              keyTimes="0;0.12;0.8;1"
              dur="18s"
              begin="-5.5s"
              repeatCount="indefinite"
            />
            <g>
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="-5;5;-5"
                dur="14.4s"
                begin="-5.5s"
                repeatCount="indefinite"
              />
              <g transform="scale(1.0)">
                <image
                  href={IMG.lantern}
                  x="-37"
                  y="-45.9"
                  width="74"
                  height="91.6"
                  style={{ filter: 'hue-rotate(0deg)' }}
                />
              </g>
            </g>
          </g>
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="210 276;219.1 166;236 56"
              keyTimes="0;0.5;1"
              dur="13s"
              begin="-9.2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0;1;1;0"
              keyTimes="0;0.12;0.8;1"
              dur="13s"
              begin="-9.2s"
              repeatCount="indefinite"
            />
            <g>
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="-5;5;-5"
                dur="10.4s"
                begin="-9.2s"
                repeatCount="indefinite"
              />
              <g transform="scale(1.0)">
                <image
                  href={IMG.lantern}
                  x="-28"
                  y="-34.7"
                  width="56"
                  height="69.3"
                  style={{ filter: 'hue-rotate(-26deg)' }}
                />
              </g>
            </g>
          </g>
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="170 276;166.5 156;160 36"
              keyTimes="0;0.5;1"
              dur="20s"
              begin="-13s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0;1;1;0"
              keyTimes="0;0.12;0.8;1"
              dur="20s"
              begin="-13s"
              repeatCount="indefinite"
            />
            <g>
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="-5;5;-5"
                dur="16s"
                begin="-13s"
                repeatCount="indefinite"
              />
              <g transform="scale(1.0)">
                <image
                  href={IMG.lantern}
                  x="-33"
                  y="-40.9"
                  width="66"
                  height="81.7"
                  style={{ filter: 'hue-rotate(0deg)' }}
                />
              </g>
            </g>
          </g>
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="252 276;256.9 176;266 76"
              keyTimes="0;0.5;1"
              dur="16s"
              begin="-3s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0;1;1;0"
              keyTimes="0;0.12;0.8;1"
              dur="16s"
              begin="-3s"
              repeatCount="indefinite"
            />
            <g>
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="-5;5;-5"
                dur="12.8s"
                begin="-3s"
                repeatCount="indefinite"
              />
              <g transform="scale(1.0)">
                <image
                  href={IMG.lantern}
                  x="-25"
                  y="-31"
                  width="50"
                  height="61.9"
                  style={{ filter: 'hue-rotate(165deg)' }}
                />
              </g>
            </g>
          </g>
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="84 276;91 171;104 66"
              keyTimes="0;0.5;1"
              dur="17s"
              begin="-8s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0;1;1;0"
              keyTimes="0;0.12;0.8;1"
              dur="17s"
              begin="-8s"
              repeatCount="indefinite"
            />
            <g>
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="-5;5;-5"
                dur="13.6s"
                begin="-8s"
                repeatCount="indefinite"
              />
              <g transform="scale(1.0)">
                <image
                  href={IMG.lantern}
                  x="-23"
                  y="-28.5"
                  width="46"
                  height="57"
                  style={{ filter: 'hue-rotate(80deg)' }}
                />
              </g>
            </g>
          </g>
        </g>
        <text
          x="66"
          y="232"
          fontFamily="Fraunces, serif"
          fontStyle="italic"
          fontSize="19"
          fill="#FFE6B0"
        >
          <animate
            attributeName="opacity"
            values="0;0.95;0"
            dur="4.6s"
            begin="0s"
            repeatCount="indefinite"
          />
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0;12 -30"
            dur="4.6s"
            begin="0s"
            repeatCount="indefinite"
          />
          z
        </text>
        <text
          x="80"
          y="216"
          fontFamily="Fraunces, serif"
          fontStyle="italic"
          fontSize="15"
          fill="#FFE6B0"
        >
          <animate
            attributeName="opacity"
            values="0;0.95;0"
            dur="4.6s"
            begin="-1.5s"
            repeatCount="indefinite"
          />
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0;12 -30"
            dur="4.6s"
            begin="-1.5s"
            repeatCount="indefinite"
          />
          z
        </text>
        <text
          x="92"
          y="202"
          fontFamily="Fraunces, serif"
          fontStyle="italic"
          fontSize="12"
          fill="#FFE6B0"
        >
          <animate
            attributeName="opacity"
            values="0;0.95;0"
            dur="4.6s"
            begin="-3s"
            repeatCount="indefinite"
          />
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0;12 -30"
            dur="4.6s"
            begin="-3s"
            repeatCount="indefinite"
          />
          z
        </text>
      </svg>
    </>
  );
}
