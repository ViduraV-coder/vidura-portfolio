import { IMG } from '../../assets';

// offset pulls it up and left so the glow of the lantern lands on the left/top point
export default function Spark({ left, top, width, offset, delay, dx }) {
  return (
    <div
      className="spark"
      style={{
        left,
        top,
        width,
        margin: `${offset}px 0 0 ${offset}px`,
        animationDelay: `${delay}s`,
        '--dx': `${dx}px`,
      }}
    >
      <img src={IMG.lantern} alt="" loading="lazy" />
    </div>
  );
}
