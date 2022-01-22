import "./Recipe.css";

function Recipe({ recipe }) {
  return (
    recipe.recipe.image.match(/\.(jpeg|jpg|png|gif)$/) != null && (
      <div className="recipeTile">
        <img
          src={recipe.recipe.image}
          className="recipe__image"
          onClick={() => window.open(recipe.recipe.url)}
        />
        <p className="recipe__title">{recipe.recipe.label}</p>
      </div>
    )
  );
}

export default Recipe;
