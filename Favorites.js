import React from 'react';
import { useSelector } from 'react-redux';
import RecipeItem from './recipeItem';

const Favorites = () => {
  const { favoriteRecipes } = useSelector((state) => state.recipes);

  if (favoriteRecipes.length === 0) {
    return <div>No favorite recipes yet.</div>;
  }

  return (
    <div className="favorites">
      <h3>Your Favorite Recipes</h3>
      <div className="favorite-recipes-list">
        {favoriteRecipes.map((recipe) => (
          <RecipeItem key={recipe.idMeal} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
