import Mascot from './Mascot';
import type { Recipe } from '../types/recipe';

type SidebarProps = {
    recipes: Recipe[];
};

function Sidebar({ recipes }: SidebarProps) {
    return (
        <nav className="sidebar">

            <ul>
                <li>Accueil</li>

                {recipes.map((recipe) => (
                    <li key={recipe.id}>{recipe.title}</li>
                ))}
            </ul>
            <Mascot />
        </nav>
    );
}

export default Sidebar;