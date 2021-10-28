import { createSlice } from '@reduxjs/toolkit';
import { selectSearchTerm } from '../searchTerm/searchTermSlice.js';

//createSlice() uses a library called Immer that lets you use array.push() instead of the spread operator when writing reducers, because it keeps track of the changes previously made.

/* Modify the options.reducers.addRecipe method. */
const options = {
  name: "favoriteRecipes",
  initialState: [],
  reducers: {
    addRecipe: (state, action) => {
      return state.push(action.payload)
    },
    removeRecipe: (state, action) => {
      return state.filter(recipe => recipe.id !== action.payload.id)
    },
  },
}
export const favoriteRecipesSlice = createSlice(options);

export const selectFavoriteRecipes = (state) => state.favoriteRecipes;

export const selectFilteredFavoriteRecipes = (state) => {
  const favoriteRecipes = selectFavoriteRecipes(state);
  const searchTerm = selectSearchTerm(state);

  return favoriteRecipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};