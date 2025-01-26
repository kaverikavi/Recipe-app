import React from 'react';
import { useDispatch } from 'react-redux';
import { setFavorites } from '../redux/actions';

const RecipeCard = ({ recipe }) => {
  const dispatch = useDispatch();

  const addToFavorites = () => {
    dispatch(setFavorites(recipe));
  };

  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.title} />
      <h3>{recipe.title}</h3>
      <button onClick={addToFavorites}>Add to Favorites</button>
    </div>
  );
};

export default RecipeCard;