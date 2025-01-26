export const SET_RECIPES = 'SET_RECIPES';
export const SET_FAVORITES = 'SET_FAVORITES';
export const SET_FILTER = 'SET_FILTER';

export const setRecipes = (recipes) => ({ type: SET_RECIPES, payload: recipes });
export const setFavorites = (recipe) => ({ type: SET_FAVORITES, payload: recipe });
export const setFilter = (filter) => ({ type: SET_FILTER, payload: filter });
