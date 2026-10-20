// same moon as the main sky, tinted pink
import { IMG } from '../../assets';

export default function JourneyMoon() {
  return (
    <>
      <img
        src={IMG.storyMoon}
        alt=""
        loading="lazy"
        data-soon=""
        style={{
          left: -130,
          top: '33%',
          width: 520,
          height: 'auto',
          filter: 'sepia(0.55) saturate(1.55) hue-rotate(-14deg) brightness(1.04)',
          opacity: 0.92,
          animation: 'aBob 11s ease-in-out -3s infinite',
        }}
      />
    </>
  );
}
