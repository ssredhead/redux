import { createStore, combineReducers } from 'redux';

// Import the slice reducers here.
import { allRecipesReducer } from '../features/allRecipes/allRecipesSlice';
import { favoriteRecipesReducer } from '../features/favoriteRecipes/favoriteRecipesSlice';
import { searchTermReducer } from '../features/searchTerm/searchTermSlice';

//Redux Ducks Pattern for a project:
/**
 * src/
 * |-- index.js
 * |-- app/
 *    |-- store.js
 * |-- features/
 *    |-- featureA/
 *        |-- featureASlice.js
 *    |-- featureB/
 *        |-- featureBSlice.js
 */

const reducers = {
  allRecipes: allRecipesReducer,
  favoriteRecipes: favoriteRecipesReducer,
  searchTerm: searchTermReducer
};

// Declare and export store based on combinedReducers.
export const store = createStore(combineReducers(reducers));


