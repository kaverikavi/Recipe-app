import React from 'react';
import { useSelector } from 'react-redux';

const RecipeDetails = () => {
  const recipe = useSelector((state) => state.recipes.selectedRecipe);

  if (!recipe) return <div>Select a recipe to view details.</div>;

  return (
    <div className="recipe-details">
      <h2>{recipe.strMeal}</h2>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <h3>Ingredients</h3>
      <ul>
        {Object.keys(recipe)
          .filter((key) => key.includes('strIngredient') && recipe[key])
          .map((key) => (
            <li key={key}>{recipe[key]}</li>
          ))}
      </ul>
      <h3>Instructions</h3>
      <p>{recipe.strInstructions}</p>
      <p>Preparation Time: {recipe.strPrepTime}</p>
      <p>Serving Size: {recipe.strServingSize}</p>
    </div>
  );
};

export default RecipeDetails;
