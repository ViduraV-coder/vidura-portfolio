import { useMemo } from 'react';

// hover a work card and its screenshot scrolls down the page, pauses, scrolls back up and repeats.
// the scrolling is a css animation (animations.css) that runs while the card has "is-previewing".
// this hook is the way out: when the pointer leaves, the page eases back to the top instead of
// jumping. keyboard focus counts as hover
export default function useScrollPreview() {
  return useMemo(() => {
    const shotIn = (card) => card.querySelector('.wframe__shot');

    function start(card) {
      const shot = shotIn(card);
      if (!shot) return;
      shot.style.transition = 'none';
      shot.style.transform = '';
      card.classList.add('is-previewing');
    }

    function stop(card) {
      if (!card.classList.contains('is-previewing')) return;
      const shot = shotIn(card);
      // pin the picture to wherever the animation has got to, then let it glide up
      const y = new DOMMatrix(getComputedStyle(shot).transform).m42;
      shot.style.transition = 'none';
      shot.style.transform = `translateY(${y}px)`;
      card.classList.remove('is-previewing');
      shot.getBoundingClientRect(); // let the browser register the pinned position
      shot.style.transition = '';
      shot.style.transform = 'translateY(0)';
    }

    return {
      onMouseEnter: (event) => start(event.currentTarget),
      onMouseLeave: (event) => stop(event.currentTarget),
      onFocus: (event) => {
        if (event.target.matches(':focus-visible')) start(event.currentTarget);
      },
      onBlur: (event) => stop(event.currentTarget),
    };
  }, []);
}
