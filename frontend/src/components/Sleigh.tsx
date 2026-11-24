import sleigh from '../assets/decorations/sleigh.png';
import { useState, useRef } from 'react';

function Sleigh() {
  const [reversed, setReversed] = useState(false);
  const sleighRef = useRef<HTMLButtonElement>(null);

  function changeDirection() {
    const animation = sleighRef.current?.getAnimations()[0];
    if (animation) {
      animation.reverse();
    }
    setReversed((previous) => !previous);
  }

  return (
    <button
        ref={sleighRef}
      type="button"
      className={`sleigh ${reversed ? 'reversed' : ''}`}
      onClick={changeDirection}
      aria-label="Changer la direction du traîneau"
    >
      <img src={sleigh} alt="" />
    </button>
  );
}

export default Sleigh;