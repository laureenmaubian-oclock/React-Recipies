import { useParams } from 'react-router';
import type { Recipe } from '../types/recipe';
import macaron from '../assets/recipes/Img-macaron-framboisier.png';

type RecipePageProps = {
    recipes: Recipe[];
};

function RecipePage({ recipes }: RecipePageProps) {
    const { slug } = useParams();
    const recipe = recipes.find((recipe) => recipe.slug === slug);

    return (
        <section className="recipe-page">
            {recipe && (
                <>
                    <div className="recipe-header">
                        <img
                            src={recipe.title === 'Macaron framboisier' ? macaron : recipe.thumbnail}
                            alt={recipe.title}
                        />

                        <div className="recipe-info">
                            <h1>{recipe.title}</h1>
                            <p>Recette de {recipe.author}</p>
                            <p>Difficulté : {recipe.difficulty}</p>
                            <p>{recipe.description}</p>
                        </div>
                    </div>

                    <div className="recipe-details">
                        <div className="recipe-ingredients">
                            <h2>Ingrédients</h2>

                            <ul>
                                {recipe.ingredients.map((ingredient) => (
                                    <li key={ingredient.id}>
                                        {ingredient.quantity} {ingredient.unit} {ingredient.name}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="recipe-instructions">
                            <h2>Préparation</h2>

                            <ol>
                                {recipe.instructions.map((instruction) => (
                                    <li key={instruction}>{instruction}</li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </>
            )}
        </section>
    );
}

export default RecipePage;