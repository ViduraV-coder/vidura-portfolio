// one long night sky behind work, toolkit, journey and contact
import { IMG } from '../../assets';
import {
  AMBER_FIREFLIES,
  BLUE_FIREFLIES,
  SHOOTING_STARS,
  SKY_HEIGHT,
  SKY_WIDTH,
} from '../../data/fireflies';
import { BAND_EDGES, PAD_BOTTOM, PAD_TOP } from '../../data/skyBands';
import { useSkyActive } from '../../lib/skyState';
import { Fireflies, Shooting } from './svg';

// the sky used to be one svg as tall as the page. browsers only pause svg animations per svg and a
// page-sized one is always on screen somewhere, so all ~130 fireflies ran all the time (phones felt it).
// bands let usePauseOffscreenSvg sleep the ones you can't see. edges are in data/skyBands.js

// "off" hides a band while the webgl fireflies run. hidden counts as off screen so usePauseOffscreenSvg
// stops it too, and it wakes up again if webgl goes away
function SkyBand({ from, to, off }) {
  const top = Math.max(0, from - PAD_TOP);
  const bottom = Math.min(SKY_HEIGHT, to + PAD_BOTTOM);
  const inBand = (y) => y >= from && y < to;

  return (
    <svg
      className="fx"
      aria-hidden="true"
      style={{
        left: 0,
        top: `${(top / SKY_HEIGHT) * 100}%`,
        width: '100%',
        height: `${((bottom - top) / SKY_HEIGHT) * 100}%`,
        display: off ? 'none' : undefined,
      }}
      viewBox={`0 ${top} ${SKY_WIDTH} ${bottom - top}`}
      preserveAspectRatio="xMidYMin slice"
    >
      <Fireflies fill="#CFE4FF" items={BLUE_FIREFLIES.filter((f) => inBand(f[1]))} />
      <Fireflies fill="#FFD9A0" items={AMBER_FIREFLIES.filter((f) => inBand(f[1]))} />
      {SHOOTING_STARS.filter((s) => inBand(parseFloat(s.path.split(' ')[1]))).map((s) => (
        <Shooting key={s.path} {...s} />
      ))}
    </svg>
  );
}

function SkyBands() {
  const off = useSkyActive();
  return BAND_EDGES.slice(0, -1).map((from, i) => (
    <SkyBand key={from} from={from} to={BAND_EDGES[i + 1]} off={off} />
  ));
}

export default function StoryBackdrop() {
  return (
    <>
      <div className="sGlobal" aria-hidden="true">
        <div
          style={{
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            background: `url(${IMG.storySky}) 0 0 / 100% 100% no-repeat`,
          }}
        />
        <div
          style={{
            left: 0,
            right: 0,
            top: 0,
            height: 4428,
            background: `url(${IMG.storyStarsA}) 0 0 / 640px 640px repeat`,
            opacity: 0.9,
            animation: 'starsTw 5.2s ease-in-out infinite',
            WebkitMaskImage: 'linear-gradient(180deg,#000 0%,#000 52%,transparent 100%)',
            maskImage: 'linear-gradient(180deg,#000 0%,#000 52%,transparent 100%)',
          }}
        />
        <div
          style={{
            left: 0,
            right: 0,
            top: 0,
            height: 4428,
            background: `url(${IMG.storyStarsB}) 210px 330px / 640px 640px repeat`,
            animation: 'starsTw 7.4s ease-in-out -2.6s infinite',
            WebkitMaskImage: 'linear-gradient(180deg,#000 0%,#000 48%,transparent 100%)',
            maskImage: 'linear-gradient(180deg,#000 0%,#000 48%,transparent 100%)',
          }}
        />
        <img
          className="sMoon"
          src={IMG.storyMoon}
          alt=""
          loading="lazy"
          data-soon=""
          style={{
            right: -20,
            top: -120,
            width: 560,
            height: 'auto',
            animation: 'aBob 9s ease-in-out infinite',
          }}
        />
        <div
          className="mist"
          style={{
            left: '-12%',
            top: '5.5%',
            width: '70%',
            height: '2.2%',
            animation: 'mistDrift 60s ease-in-out infinite alternate',
          }}
        />
        <div
          className="mist"
          style={{
            left: '36%',
            top: '18%',
            width: '80%',
            height: '2%',
            animation: 'mistDrift2 72s ease-in-out infinite alternate',
          }}
        />
        <div
          className="mist"
          style={{
            left: '-10%',
            top: '33%',
            width: '74%',
            height: '2.2%',
            animation: 'mistDrift 64s ease-in-out -18s infinite alternate',
          }}
        />
        <div
          className="mistV"
          style={{
            left: '30%',
            top: '43%',
            width: '84%',
            height: '2%',
            animation: 'mistDrift2 76s ease-in-out -30s infinite alternate',
          }}
        />
        <div
          className="mistV"
          style={{
            left: '-14%',
            top: '54%',
            width: '80%',
            height: '2.2%',
            animation: 'mistDrift 58s ease-in-out -22s infinite alternate',
          }}
        />
        <div
          className="mistV"
          style={{
            left: '22%',
            top: '64%',
            width: '86%',
            height: '2%',
            animation: 'mistDrift2 70s ease-in-out -10s infinite alternate',
          }}
        />
        <div
          className="mistR"
          style={{
            left: '-8%',
            top: '72%',
            width: '78%',
            height: '2.2%',
            animation: 'mistDrift 62s ease-in-out -40s infinite alternate',
          }}
        />
        <SkyBands />
      </div>
    </>
  );
}
