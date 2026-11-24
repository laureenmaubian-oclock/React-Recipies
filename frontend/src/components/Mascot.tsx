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
function Mascot () {
  const [message] = useState (
    () => messages[Math.floor(Math.random() * messages.length)]
  );

  
  return (
    <div className="mascot">
      <p className="mascot-message">
        {message}
      </p>

      <img src={mouse} alt="Petite souris pâtissière" />
    </div>
  );
}

export default Mascot;