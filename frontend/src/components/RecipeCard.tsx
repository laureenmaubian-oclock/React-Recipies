import macaron from '../assets/recipes/Img-macaron-framboisier.png';
import { NavLink } from 'react-router';

type RecipeCardProps = {
    title: string;
    difficulty: string;
    thumbnail: string;
    description: string;
    preparationTime?: number;
    slug: string;
};

function RecipeCard({
    title,
    difficulty,
    thumbnail,
    description,
    preparationTime,
    slug,
}: RecipeCardProps) {
    return (
        <article className="recipe-card">
            <img
                src={title === 'Macaron framboisier' ? macaron : thumbnail}
                alt={title}
            />

            <div className="recipe-card-content">
                <h2>{title}</h2>
                <p>Difficulté : {difficulty}</p>
                <p>{description}</p>
                <p>
                    Préparation : {preparationTime !== undefined
                        ? `${preparationTime} min`
                        : 'Non renseigné'}
                </p>
                <NavLink to={`/recipe/${slug}`} className="recipe-link">
                    Voir la recette
                </NavLink>
            </div>
        </article>
    );
}

export default RecipeCard;