// head and body are separate layers so they move on their own; eyelids blink, glasses glint
import { IMG } from '../../assets';
import { Shooting, Twinkle } from './svg';

export default function AboutPortrait() {
  return (
    <>
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: 580,
          borderRadius: '230px 230px 28px 28px',
          overflow: 'hidden',
          border: '6px solid #F3E9D2',
          boxShadow: '0 40px 80px -30px rgba(0,0,0,0.9), 0 0 60px -10px rgba(143,180,255,0.22)',
          background: '#0B1340',
          isolation: 'isolate',
        }}
      >
        <img
          src={IMG.aboutCity}
          alt=""
          style={{
            position: 'absolute',
            left: -214,
            top: -26,
            height: 640,
            width: 'auto',
            maxWidth: 'none',
            display: 'block',
          }}
        />
        <svg
          className="fx"
          aria-hidden="true"
          style={{ inset: 0, width: '100%', height: '100%' }}
          viewBox="0 0 460 580"
          preserveAspectRatio="none"
        >
          <Twinkle
            fill="#FFFFFF"
            values="0.2;1;0.3"
            dur="3.2s"
            begin="-2.1s"
            dots={[
              [175.3, 83.1, 1.6],
              [336.5, 207.5, 1.5],
              [332.7, 60.3, 1.3],
              [386.9, 77.7, 1.7],
              [316.9, 352.8, 1.9],
              [389.4, 108.5, 1.1],
              [10, 48.6, 1.3],
              [301.4, 115.9, 1.6],
              [50.3, 237.8, 1.6],
            ]}
          />
          <Twinkle
            fill="#FFFFFF"
            values="0.2;1;0.3"
            dur="4.4s"
            begin="-1.8s"
            dots={[
              [76.4, 329, 1.4],
              [359.4, 238.2, 1.9],
              [301.1, 223.5, 1.2],
              [334.1, 263.6, 1.1],
              [24.6, 114.4, 1.6],
              [67.1, 240.4, 1.2],
              [210.9, 262.2, 1.8],
              [63.9, 23.7, 1.2],
              [58.7, 320.1, 1.8],
            ]}
          />
          <Twinkle
            fill="#FFFFFF"
            values="0.2;1;0.3"
            dur="5.3s"
            begin="-2s"
            dots={[
              [265.9, 248.4, 1.8],
              [386.1, 158.2, 1.7],
              [27.4, 282.4, 1.6],
              [57.5, 241.2, 1.1],
              [285.2, 219, 1.1],
              [187.3, 238.8, 0.9],
              [195.8, 268, 1.1],
              [18.2, 310.5, 1.6],
            ]}
          />
          <Twinkle
            fill="#FFFFFF"
            values="0.2;1;0.3"
            dur="3.8s"
            begin="-0.2s"
            dots={[
              [254.4, 138.1, 1.1],
              [71.3, 53.9, 1.5],
              [15.2, 312.1, 1.1],
              [56.9, 328.8, 1.2],
              [83.8, 319.6, 1.1],
              [226.9, 142.1, 1.6],
              [248.3, 316.9, 1],
              [402.3, 270.5, 1.9],
            ]}
          />
          <Twinkle
            fill="#FFC25E"
            values="0.3;1;0.4"
            dur="3.6s"
            dots={[
              [40, 520, 1.8],
              [96, 540, 1.8],
              [410, 500, 1.8],
              [360, 548, 1.8],
            ]}
          />
          <Shooting
            tail={[54.9, -24.2]}
            width={1.8}
            r={1.6}
            path="430 60;430 60;413 67.5;90 210;90 210"
            keyTimes="0;0.4;0.4;0.5;1"
            dur="16s"
            fade="0;0;1;0;0"
          />
        </svg>
        <div
          className="mist"
          style={{
            left: '-20%',
            top: '56%',
            width: '80%',
            height: '22%',
            animation: 'mistDrift 40s ease-in-out infinite alternate',
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: '-22%',
            bottom: '-14%',
            width: '100%',
            height: '76%',
            pointerEvents: 'none',
            mixBlendMode: 'screen',
            background:
              'radial-gradient(ellipse at 38% 62%, rgba(255,176,86,0.40) 0%, rgba(255,176,86,0.14) 42%, rgba(255,176,86,0) 68%)',
            animation: 'abGlow 6.2s ease-in-out infinite',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: '50%',
            bottom: 0,
            width: 422,
            marginLeft: -211,
            aspectRatio: '1086 / 1448',
            transformOrigin: '50% 100%',
            animation: 'abBreath 5.6s ease-in-out infinite',
            filter: 'drop-shadow(0 0 18px rgba(255,181,71,0.22))',
          }}
        >
          <img
            src={IMG.aboutBody}
            alt=""
            style={{
              position: 'absolute',
              left: 0,
              top: '43.37%',
              width: '100%',
              height: '56.63%',
              display: 'block',
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '100%',
              height: '47.652%',
              transformOrigin: '50.2% 92.8%',
              animation: 'abHead 6.4s ease-in-out infinite',
            }}
          >
            <img
              src={IMG.aboutHead}
              alt="Portrait of Vidura, smiling with his arms crossed"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                display: 'block',
              }}
            />
            <img
              src={IMG.aboutBlinkL}
              alt=""
              style={{
                position: 'absolute',
                left: '37.937%',
                top: '51.884%',
                width: '8.103%',
                height: '9.565%',
                opacity: 0,
                animation: 'abBlink 5.4s linear infinite',
              }}
            />
            <img
              src={IMG.aboutBlinkR}
              alt=""
              style={{
                position: 'absolute',
                left: '51.565%',
                top: '50.725%',
                width: '8.103%',
                height: '9.275%',
                opacity: 0,
                animation: 'abBlink 5.4s linear infinite',
              }}
            />
            <svg
              className="fx"
              aria-hidden="true"
              style={{ inset: 0, width: '100%', height: '100%' }}
              viewBox="0 0 1086 690"
              preserveAspectRatio="none"
            >
              <defs>
                <clipPath id="abLens">
                  <path d="M412 372 L430 364 L470 360 L500 364 L508 378 L510 410 L500 428 L470 436 L440 434 L412 424 L404 400 Z" />
                  <path d="M556 366 L580 354 L620 350 L650 356 L662 372 L660 400 L648 418 L620 426 L590 424 L566 410 L554 388 Z" />
                </clipPath>
                <linearGradient id="abSheen" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0" stopColor="#FFFFFF" stopOpacity="0" />
                  <stop offset="0.5" stopColor="#FFFFFF" stopOpacity="0.55" />
                  <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
                </linearGradient>
              </defs>
              <g clipPath="url(#abLens)">
                <g>
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="0 0;0 0;380 0;380 0"
                    keyTimes="0;0.7;0.9;1"
                    dur="8s"
                    repeatCount="indefinite"
                  />
                  <polygon points="340,330 392,330 366,460 314,460" fill="url(#abSheen)" />
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background: 'linear-gradient(180deg, rgba(7,11,31,0) 62%, rgba(7,11,31,0.55) 100%)',
          }}
        />
      </div>
    </>
  );
}
