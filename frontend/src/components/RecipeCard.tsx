import macaron from '../assets/recipes/Img-macaron-framboisier.png';

type RecipeCardProps = {
    title: string;
    difficulty: string;
    thumbnail: string;
    description: string;
    preparationTime?: number;
};

function RecipeCard({
    title,
    difficulty,
    thumbnail,
    description,
    preparationTime,
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
                <button type="button">Voir la recette</button>
            </div>
        </article>
    );
}

export default RecipeCard;