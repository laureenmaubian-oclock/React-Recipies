type RecipeCardProps = {
  title: string;
  difficulty: string;
  thumbnail: string;
  description: string;
  preparationTime: number;
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
      <img src={thumbnail} alt={title} />

      <div className="recipe-card-content">
        <h2>{title}</h2>
        <p>Difficulté : {difficulty}</p>
        <p>{description}</p>
        <p>Préparation : {preparationTime} min</p>
        <button type="button">Voir la recette</button>
      </div>
    </article>
  );
}

export default RecipeCard;