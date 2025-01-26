import { combineReducers } from 'redux';
import { SET_RECIPES, SET_FAVORITES, SET_FILTER } from './actions';

const recipesReducer = (state = [], action) => {
  switch (action.type) {
    case SET_RECIPES:
      return action.payload;
    default:
      return state;
  }
};

const favoritesReducer = (state = [], action) => {
  switch (action.type) {
    case SET_FAVORITES:
      return [...state, action.payload];
    default:
      return state;
  }
};

const filterReducer = (state = '', action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  recipes: recipesReducer,
  favorites: favoritesReducer,
  filter: filterReducer,
});

export default rootReducer;