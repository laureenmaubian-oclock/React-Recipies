import logo from '../assets/logo.png';
import { useState } from 'react';
import type { SubmitEvent } from 'react';

function Header() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isLogged, setIsLogged] = useState(false);

    async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });

            if (!response.ok) {
                setMessage('Identifiants incorrects');
                return;
            }

            const data = await response.json();

            if (data.logged) {
                setMessage(`Bienvenue ${data.pseudo} !`);
                setIsLogged(true);
                setPassword('');

            }
        } catch (error) {
            console.error(error);
            setMessage('Une erreur est survenue');
        }
    }

    function handleLogout() {
        setIsLogged(false);
        setEmail('');
        setPassword('');
        setMessage('');
    }

    return (
        <header className="header">
            <img src={logo} alt="Logo O'Recipes" />

            {isLogged ? (
                <div className="logged-user">
                    <p>{message}</p>
                    <button type="button" onClick={handleLogout}>
                        Déconnexion
                    </button>
                </div>
            ) : (


                <form className="login-form" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Adresse Email"
                        aria-label="Adresse email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Mot de passe"
                        aria-label="Mot de passe"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <button type="submit">OK</button>
                    {message && <p className="login-message">{message}</p>}
                </form>
            )}

        </header>
    );
}

export default Header;