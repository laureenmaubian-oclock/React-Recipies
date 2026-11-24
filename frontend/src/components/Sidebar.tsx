import Mascot from './Mascot';



function Sidebar() {
  return (
    <nav className="sidebar">

      <ul>
        <li>Accueil</li>
        <li>Cookies au beurre de cacahuète</li>
        <li>Macaron framboisier</li>
        <li>Tarte au citron meringuée</li>
        <li>Amandier</li>
        <li>Fondant au chocolat sans gluten</li>
        <li>Tarte banoffee</li>
      </ul>
      <Mascot />
    </nav>
  );
}

export default Sidebar;