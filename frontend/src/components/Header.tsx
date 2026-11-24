import logo from '../assets/logo.png';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo O'Recipes" />

      <form className="login-form">
        <input
          type="email"
          placeholder="Adresse Email"
          aria-label="Adresse email"
        />
        <input
          type="password"
          placeholder="Mot de passe"
          aria-label="Mot de passe"
        />
        <button type="button">OK</button>
      </form>
    </header>
  );
}

export default Header;