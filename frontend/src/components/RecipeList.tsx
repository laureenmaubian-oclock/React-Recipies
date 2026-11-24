import RecipeCard from './RecipeCard';

function RecipeList() {
  return (
    <section className="recipe-list">
      <h1>Les recettes O'Recipes</h1>
      <p>2 recettes disponibles</p>

      <div className="recipe-grid">
        <RecipeCard
          title="Cookies au beurre de cacahuète"
          difficulty="Facile"
          thumbnail="https://www.sunny-delices.fr/wp-content/uploads/2022/09/cookies-beurre-cacahouettes-sans-gluten-680x451.jpg"
          description="Pour 10 cookies"
          preparationTime={15}
        />

        <RecipeCard
          title="Amandier"
          difficulty="Facile"
          thumbnail="https://www.sunny-delices.fr/wp-content/uploads/2020/11/amandier-sans-gluten.jpg"
          description="Pour 6 personnes"
          preparationTime={20}
        />
      </div>
    </section>
  );
}

export default RecipeList;