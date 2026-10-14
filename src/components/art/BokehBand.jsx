// out of focus city lights along the bottom of the work section
import { IMG } from '../../assets';

export default function BokehBand() {
  return (
    <>
      <div
        style={{
          left: '-3%',
          right: '-3%',
          bottom: 20,
          height: 600,
          background: `url(${IMG.storyBokeh}) center bottom / 100% auto no-repeat`,
          opacity: 0.95,
          WebkitMaskImage:
            'linear-gradient(0deg,transparent 0%,#000 26%,#000 60%,transparent 100%)',
          maskImage: 'linear-gradient(0deg,transparent 0%,#000 26%,#000 60%,transparent 100%)',
          animation: 'bokDrift 30s ease-in-out infinite alternate',
        }}
      />
    </>
  );
}
