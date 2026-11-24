import mouse from '../assets/decorations/mouse.png';
import { useState } from 'react';


const messages = [
  "On se fait quoi aujourd'hui ... ?",
  "Un cookie, ça ne se refuse pas !",
  "Le bonheur commence en cuisine !",
  "Une pincée de magie et beaucoup d'amour !",
  "Pssst... On fait un gâteau ?",
  "Mais où est passé le caramel beurré salé ... ?",
  "J'ai déjà préchauffé le four !",
];
function Mascot() {
  const [message, setMessage] = useState(
    () => messages[Math.floor(Math.random() * messages.length)]
  );

  function changeMessage() {
    const otherMessages = messages.filter(
      (text) => text !== message
    );

    const randomIndex = Math.floor(
      Math.random() * otherMessages.length
    );

    setMessage(otherMessages[randomIndex]);
  }


  return (
    <div className="mascot">

      <p className="mascot-message">
        {message}
      </p>

      <button
        type="button"
        className="mascot-button"
        onClick={changeMessage}
        aria-label="Faire parler la petite souris"
      >
        <img src={mouse} alt="Petite souris pâtissière" />
      </button>

    </div>
  );
}

export default Mascot;