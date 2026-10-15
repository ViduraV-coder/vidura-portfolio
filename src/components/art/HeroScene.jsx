// the hero painting is four layers that drift at slightly different speeds (cWin, cRoom, cPer, cMon)
import { IMG } from '../../assets';
import useMediaQuery from '../../hooks/useMediaQuery';
import { Shooting, Twinkle } from './svg';

// On a phone only a slice of the picture is on screen (the person and the desk, roughly 42% to 90%
// of the way across), so phones get a cut-down copy of the room and of the window's right edge
// instead of the full pictures. The numbers are where that slice sits inside the full frame.
const PHONE = '(max-width: 700px)';
const ROOM_FULL = { src: IMG.heroRoom, left: 0, width: '100%' };
const ROOM_PHONE = { src: IMG.heroRoomPhone, left: '38.038%', width: '53.947%' };
const WINDOW_FULL = { src: IMG.heroWindow, left: '0%', width: '45.455%' };
const WINDOW_PHONE = { src: IMG.heroWindowPhone, left: '35.407%', width: '10.048%' };

export default function HeroScene() {
  const phone = useMediaQuery(PHONE);
  const room = phone ? ROOM_PHONE : ROOM_FULL;
  const win = phone ? WINDOW_PHONE : WINDOW_FULL;

  return (
    <>
      <div className="cam">
        {/* window view */}
        <div className="lay" style={{ animation: 'cWin 24s ease-in-out infinite alternate' }}>
          <img
            src={win.src}
            alt=""
            style={{ left: win.left, top: '0%', width: win.width, height: '55.26%' }}
          />
          <svg
            aria-hidden="true"
            className="fx"
            style={{ left: '0%', top: '0%', width: '45.455%', height: '55.26%' }}
            viewBox="0 0 760 520"
            preserveAspectRatio="none"
          >
            <Twinkle
              fill="#FFFFFF"
              values="0.25;0.9;0.35"
              dur="3.1s"
              begin="-0.5s"
              dots={[
                [63, 9, 1.6],
                [164, 153, 1.4],
                [647.6, 84.7, 1.2],
                [487.9, 13.1, 1.7],
                [28.8, 84.4, 1.7],
                [698.4, 174.3, 1.5],
                [593.8, 71.3, 1.5],
              ]}
            />
            <Twinkle
              fill="#FFFFFF"
              values="0.05;0.75;0.15000000000000002"
              dur="4.2s"
              begin="-1s"
              dots={[
                [100, 12, 1.3],
                [213, 108, 1.5],
                [359.4, 105.3, 1.1],
                [687.7, 169, 1.7],
                [312.8, 148.4, 1.2],
                [589.4, 125.6, 1.2],
                [671, 149.2, 1],
              ]}
            />
            <Twinkle
              fill="#FFFFFF"
              values="0.25;0.9;0.35"
              dur="5.0s"
              begin="-5s"
              dots={[
                [41, 33, 1.6],
                [531, 129, 1],
                [135.8, 92.5, 1.3],
                [117, 8.5, 1.4],
                [367.2, 114.2, 1.1],
                [226.2, 44.8, 1.9],
                [8.4, 41.4, 1.3],
              ]}
            />
            <Twinkle
              fill="#FFFFFF"
              values="0.05;0.75;0.15000000000000002"
              dur="3.7s"
              begin="-0.6s"
              dots={[
                [603, 40, 1.7],
                [212, 48, 1],
                [73.1, 57.3, 1.1],
                [373.6, 16.1, 1.7],
                [353.8, 118, 1.4],
                [208, 17.9, 1.1],
                [637.9, 85.4, 1.6],
              ]}
            />
            <Twinkle
              fill="#FFFFFF"
              values="0.05;0.75;0.15000000000000002"
              dur="4.8s"
              begin="-2.3s"
              dots={[
                [666, 7, 1.7],
                [321, 100.6, 1.2],
                [70.7, 142.8, 1.9],
                [139.6, 46.9, 1.8],
                [324.5, 53, 1.7],
                [538.3, 73.7, 1.7],
                [686.4, 73.2, 1.5],
              ]}
            />
            <Twinkle
              fill="#FFC25E"
              values="0.05;1;0.15000000000000002"
              dur="5.0s"
              begin="-3.6s"
              dots={[
                [447, 327, 1.9],
                [447, 341, 2.2],
                [439, 360, 1.7],
                [293, 340, 2.3],
                [131, 303, 2.3],
                [374, 290, 1.9],
                [409, 333, 1.8],
                [216, 296, 1.9],
                [456, 330, 1.8],
                [479, 335, 2.4],
                [236, 289, 1.8],
                [383, 371, 1.5],
              ]}
            />
            <Twinkle
              fill="#FFC25E"
              values="0.25;1;0.35"
              dur="3.7s"
              begin="-0.3s"
              dots={[
                [157, 275, 2.4],
                [447, 251, 1.9],
                [456, 212, 1.9],
                [584, 316, 2],
                [447, 313, 2.2],
                [447, 195, 1.7],
                [447, 283, 2],
                [243, 279, 2],
                [447, 271, 2.1],
                [184, 334, 1.7],
                [184, 353, 1.7],
                [130, 360, 1.8],
              ]}
            />
            <Twinkle
              fill="#FFC25E"
              values="0.15;1;0.25"
              dur="4.8s"
              begin="-4.4s"
              dots={[
                [367, 324, 2.3],
                [173, 335, 1.7],
                [183, 250, 1.7],
                [298, 276, 2.3],
                [456, 371, 1.7],
                [343, 306, 1.9],
                [523, 290, 1.6],
                [548, 269, 1.5],
                [456, 314, 2],
                [456, 225, 2.1],
                [715, 308, 1.7],
                [195, 270, 2.3],
              ]}
            />
            <Twinkle
              fill="#FFC25E"
              values="0.25;1;0.35"
              dur="6.1s"
              begin="-1s"
              dots={[
                [420, 280, 1.5],
                [534, 314, 1.8],
                [447, 209, 2],
                [447, 298, 2.1],
                [490, 310, 2.3],
                [149, 357, 1.7],
                [406, 308, 2],
                [597, 282, 1.9],
                [456, 356, 1.9],
                [121, 306, 2.2],
                [484, 270, 1.6],
                [478, 310, 1.8],
              ]}
            />
            <Twinkle
              fill="#FFC25E"
              values="0.25;0.9;0.35"
              dur="3.1s"
              begin="-2.6s"
              dots={[
                [447, 354, 1.5],
                [715, 338, 1.7],
                [715, 355, 1.9],
                [354, 324, 2.3],
                [456, 343, 2.1],
                [322, 334, 1.6],
                [420, 333, 1.6],
                [617, 290, 2.2],
                [447, 371, 1.5],
                [173, 354, 1.6],
                [447, 229, 2.1],
                [333, 289, 2.3],
              ]}
            />
            <Shooting
              tail={[54.7, -24.7]}
              width={1.8}
              r={1.6}
              path="430 18;430 18;419.5 22.8;220 113;220 113"
              keyTimes="0;0.3;0.3;0.4;1"
              dur="17s"
              fade="0;0;1;0;0"
            />
            <Shooting
              tail={[49.4, -21.7]}
              width={1.6}
              r={1.4}
              path="690 60;690 60;677.5 65.5;440 170;440 170"
              keyTimes="0;0.6;0.6;0.7;1"
              dur="23s"
              fade="0;0;1;0;0"
            />
            <g fill="#8FB4FF">
              <circle cx="150" cy="300" r="1.6">
                <animate
                  attributeName="opacity"
                  values="0.1;0.9;0.1"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          </svg>
          <div
            className="mist"
            style={{
              left: '-6%',
              top: '36%',
              width: '34%',
              height: '14%',
              animation: 'mistDrift 46s ease-in-out infinite alternate',
            }}
          />
          <div
            className="mist"
            style={{
              left: '16%',
              top: '42%',
              width: '30%',
              height: '12%',
              opacity: 0.8,
              animation: 'mistDrift2 58s ease-in-out infinite alternate',
            }}
          />
        </div>
        {/* room, with the window cut out */}
        <div className="lay" style={{ animation: 'cRoom 24s ease-in-out infinite alternate' }}>
          <img
            src={room.src}
            alt="Illustrated attic room at night"
            style={{ left: room.left, top: 0, width: room.width, height: '100%' }}
          />
          <img
            src={IMG.cat}
            alt=""
            style={{
              left: '35.347%',
              top: '45.058%',
              width: '14.175%',
              height: '11.477%',
              transformOrigin: '50% 100%',
              animation: 'catB 4.2s ease-in-out infinite',
            }}
          />
          <svg
            aria-hidden="true"
            className="fx"
            style={{ inset: 0, width: '100%', height: '100%' }}
            viewBox="0 0 1672 941"
            preserveAspectRatio="none"
          >
            <defs>
              <defs>
                <radialGradient id="hLamp">
                  <stop offset="0" stopColor="#FFC15E" stopOpacity="0.8" />
                  <stop offset="0.35" stopColor="#FF9F3A" stopOpacity="0.3" />
                  <stop offset="1" stopColor="#FF8A20" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="hCyan">
                  <stop offset="0" stopColor="#5CC8FF" stopOpacity="0.55" />
                  <stop offset="1" stopColor="#5CC8FF" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="hGreen">
                  <stop offset="0" stopColor="#55E08A" stopOpacity="0.5" />
                  <stop offset="1" stopColor="#55E08A" stopOpacity="0" />
                </radialGradient>
              </defs>
            </defs>
            <g style={{ opacity: 'var(--lamp)' }}>
              <circle cx="790" cy="352" r="150" fill="url(#hLamp)">
                <animate
                  attributeName="opacity"
                  values="0.75;0.95;0.8;1;0.78"
                  dur="5s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="r"
                  values="150;158;152;160;150"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="1500" cy="272" r="130" fill="url(#hLamp)">
                <animate
                  attributeName="opacity"
                  values="0.8;1;0.75;0.95;0.8"
                  dur="5.6s"
                  begin="-2s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
            <g>
              <circle cx="1470" cy="96" r="3.4" fill="#FFD27A">
                <animate
                  attributeName="opacity"
                  values="1;0.35;1"
                  dur="2.4s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="1504" cy="99" r="3.4" fill="#FFD27A">
                <animate
                  attributeName="opacity"
                  values="0.4;1;0.4"
                  dur="2.8s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="1538" cy="100" r="3.4" fill="#FFD27A">
                <animate
                  attributeName="opacity"
                  values="1;0.4;1"
                  dur="3.1s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="1572" cy="99" r="3.4" fill="#FFD27A">
                <animate
                  attributeName="opacity"
                  values="0.5;1;0.5"
                  dur="2.6s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="1606" cy="97" r="3.4" fill="#FFD27A">
                <animate
                  attributeName="opacity"
                  values="1;0.4;1"
                  dur="3.4s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="1640" cy="95" r="3.4" fill="#FFD27A">
                <animate
                  attributeName="opacity"
                  values="0.4;1;0.4"
                  dur="2.2s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
            <ellipse cx="952" cy="135" rx="95" ry="135" fill="url(#hCyan)">
              <animate
                attributeName="opacity"
                values="0.55;0.9;0.6;1;0.7"
                dur="3.6s"
                repeatCount="indefinite"
              />
            </ellipse>
            <ellipse cx="1612" cy="485" rx="95" ry="75" fill="url(#hGreen)">
              <animate
                attributeName="opacity"
                values="0.5;0.9;0.55"
                dur="4s"
                repeatCount="indefinite"
              />
            </ellipse>
            <g fontFamily="DM Mono, monospace" fill="#8FDCFF" textAnchor="middle">
              <text x="540" y="400" fontSize="26">
                <tspan>
                  {'{'} {'}'}
                </tspan>
                <animate
                  attributeName="opacity"
                  values="0;0.9;0"
                  dur="7s"
                  repeatCount="indefinite"
                />
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0 0;0 -90"
                  dur="7s"
                  repeatCount="indefinite"
                />
              </text>
              <text x="600" y="400" fontSize="22">
                <tspan>&lt;/&gt;</tspan>
                <animate
                  attributeName="opacity"
                  values="0;0.9;0"
                  dur="7s"
                  begin="-2.4s"
                  repeatCount="indefinite"
                />
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0 0;0 -110"
                  dur="7s"
                  begin="-2.4s"
                  repeatCount="indefinite"
                />
              </text>
              <text x="480" y="400" fontSize="20">
                <tspan>=&gt;</tspan>
                <animate
                  attributeName="opacity"
                  values="0;0.9;0"
                  dur="7s"
                  begin="-4.6s"
                  repeatCount="indefinite"
                />
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0 0;0 -80"
                  dur="7s"
                  begin="-4.6s"
                  repeatCount="indefinite"
                />
              </text>
            </g>
            <g fontFamily="Fraunces, serif" fontStyle="italic" fill="#FFE2B0" textAnchor="middle">
              <text x="632" y="440" fontSize="22">
                <tspan>z</tspan>
                <animate
                  attributeName="opacity"
                  values="0;0.9;0"
                  dur="5s"
                  repeatCount="indefinite"
                />
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0 0;10 -30"
                  dur="5s"
                  repeatCount="indefinite"
                />
              </text>
              <text x="656" y="410" fontSize="28">
                <tspan>z</tspan>
                <animate
                  attributeName="opacity"
                  values="0;0.9;0"
                  dur="5s"
                  begin="-1.7s"
                  repeatCount="indefinite"
                />
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0 0;10 -34"
                  dur="5s"
                  begin="-1.7s"
                  repeatCount="indefinite"
                />
              </text>
              <text x="684" y="372" fontSize="34">
                <tspan>z</tspan>
                <animate
                  attributeName="opacity"
                  values="0;0.9;0"
                  dur="5s"
                  begin="-3.3s"
                  repeatCount="indefinite"
                />
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0 0;10 -40"
                  dur="5s"
                  begin="-3.3s"
                  repeatCount="indefinite"
                />
              </text>
            </g>
            <g fill="#FFD9A0" opacity="0.85">
              <circle cx="900" cy="520" r="2.4">
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0 0;22 -34;0 0"
                  dur="11s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="1000" cy="430" r="2">
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0 0;-18 -26;0 0"
                  dur="9s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="1330" cy="610" r="2.4">
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0 0;20 -30;0 0"
                  dur="12s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="1390" cy="380" r="2">
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0 0;-24 -20;0 0"
                  dur="10s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="760" cy="620" r="2.2">
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0 0;16 -28;0 0"
                  dur="13s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="1180" cy="210" r="2">
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0 0;-20 -24;0 0"
                  dur="9.5s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="1260" cy="130" r="2.2">
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0 0;18 -22;0 0"
                  dur="11.5s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          </svg>
        </div>
        {/* me at the desk */}
        <div className="lay" style={{ animation: 'cPer 24s ease-in-out infinite alternate' }}>
          <div
            style={{
              position: 'absolute',
              left: '37.321%',
              top: '7.333%',
              width: '50%',
              height: '92.561%',
              transformOrigin: '50% 100%',
              animation: 'pBreath 5.2s ease-in-out infinite',
            }}
          >
            <img
              src={IMG.heroPerson}
              alt="The developer typing at his desk"
              style={{ left: 0, top: 0, width: '100%', height: '100%' }}
            />
            <img
              src={IMG.heroHandL}
              alt=""
              style={{
                left: '0%',
                top: '70.264%',
                width: '24.163%',
                height: '12.285%',
                animation: 'tapL 1.35s ease-in-out infinite',
              }}
            />
            <img
              src={IMG.heroHandR}
              alt=""
              style={{
                left: '23.684%',
                top: '78.76%',
                width: '24.043%',
                height: '12.629%',
                animation: 'tapR 1.8s ease-in-out -0.4s infinite',
              }}
            />
          </div>
        </div>
        {/* monitor, the closest layer */}
        <div className="lay" style={{ animation: 'cMon 24s ease-in-out infinite alternate' }}>
          <img
            src={IMG.heroMonitor}
            alt=""
            style={{ left: '6.998%', top: '39.851%', width: '30.443%', height: '60.149%' }}
          />
        </div>
      </div>
    </>
  );
}
