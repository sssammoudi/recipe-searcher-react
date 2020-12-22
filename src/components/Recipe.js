import React from "react";
import "./Recipe.css";

function Recipe(recipe) {
  const __recipe = recipe.recipe;
  return (
    <div className="recipe">
      <h1>{__recipe.label}</h1>
      <h3>calories:</h3>
      <h4>{Math.floor(__recipe.calories)}kcal</h4>

      <ol>
        <h3>Ingredients: </h3>
        {__recipe.ingredients.map((ingredient) => (
          <h4>—{ingredient.text}</h4>
        ))}
      </ol>
      <img src={__recipe.image} alt={__recipe.label} />
    </div>
  );
}

export default Recipe;
