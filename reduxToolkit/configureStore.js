import { createStore, combineReducers } from 'redux';
import favoriteRecipesReducer from '../features/favoriteRecipes/favoriteRecipesSlice.js';
import searchTermReducer from '../features/searchTerm/searchTermSlice.js';
import allRecipesReducer from '../features/allRecipes/allRecipesSlice.js';
//import configureStore
import { configureStore } from '@reduxjs/toolkit';

/**
 * configureStore() simplifies the store setup process.
 * It wraps around the Redux library's createStore() method and handles most of the store setup automatically.
 * 
 * It accepts a single object parameter that should have a reducer property that defines either a function to be used as the root reducer, or an object of slice reducers which will be combined to create a root reducer.
 * 
 * configureStore does the following:
 * It combines the slice reducers into the root reducer function, which will handle a root statement that looks like {sliceA, sliceB} removing the need to call combineReducers()
 * It creates a Redux store using that root reducer, removing the need to call createStore()
 * It automatically adds a lot of middleware and checks
 * It automatically sets up the Redux DevTools Extension connection.
 */

// export default createStore(combineReducers({
//   favoriteRecipes: favoriteRecipesReducer,
//   searchTerm: searchTermReducer,
//   allRecipes: allRecipesReducer
// }));
export default configureStore({
  reducer: {
    favoriteRecipes: favoriteRecipesReducer,
    searchTerm: searchTermReducer,
    allRecipes: allRecipesReducer
  }
});