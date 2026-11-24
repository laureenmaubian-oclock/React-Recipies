import Mascot from './Mascot';
import type { Recipe } from '../types/recipe';
import { NavLink } from 'react-router';

type SidebarProps = {
    recipes: Recipe[];
};

function Sidebar({ recipes }: SidebarProps) {
    return (
        <nav className="sidebar">

            <ul>
                <NavLink to="/">Accueil</NavLink>

                {recipes.map((recipe) => (
                    <li key={recipe.id}>
                        <NavLink to={`/recipe/${recipe.slug}`}>{recipe.title}</NavLink>
                    </li>
                ))}
            </ul>
            <Mascot />
        </nav>
    );
}

export default Sidebar;