import { IMG } from '../../assets';

// side is 'left' or 'right', whichever edge of the section the branch hangs from
export default function Foliage({ side, top, width, delay, img }) {
  return (
    <div
      className={`foliage foliage--${side}`}
      style={{ [side]: -34, top, width, animationDelay: `${delay}s` }}
    >
      <img src={IMG[img]} alt="" loading="lazy" />
    </div>
  );
}
