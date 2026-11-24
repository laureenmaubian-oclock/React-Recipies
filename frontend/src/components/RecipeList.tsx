import RecipeCard from './RecipeCard';
import type { Recipe } from '../types/recipe';

type RecipeListProps = {
  recipes: Recipe[];
};

function RecipeList({ recipes }: RecipeListProps) {
  return (
    <section className="recipe-list">
      <h1>Les recettes O'Recipes</h1>
      <p>{recipes.length} recettes disponibles</p>

      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            title={recipe.title}
            difficulty={recipe.difficulty}
            thumbnail={recipe.thumbnail}
            description={recipe.description}
            preparationTime={recipe.preparationTime}
            slug={recipe.slug}
          />
        ))}

      </div>
    </section>
  );
}

export default RecipeList;