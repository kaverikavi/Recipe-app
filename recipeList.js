import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setRecipes, setLoading, setError } from '../redux/recipesSlice';
import { fetchRecipes } from '../api/fetchRecipes';
import RecipeItem from './recipeItem';
import RecipeList from './components/RecipeList'; // Correct path and capitalization


const RecipeList = () => {
  const dispatch = useDispatch();
  const { filteredRecipes, loading, error } = useSelector((state) => state.recipes);

  useEffect(() => {
    const loadRecipes = async () => {
      try {
        dispatch(setLoading(true));
        const recipes = await fetchRecipes();
        dispatch(setRecipes(recipes));
      } catch (err) {
        dispatch(setError('Failed to load recipes.'));
      } finally {
        dispatch(setLoading(false));
      }
    };

    loadRecipes();
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="recipe-list">
      {filteredRecipes.map((recipe) => (
        <RecipeItem key={recipe.idMeal} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
