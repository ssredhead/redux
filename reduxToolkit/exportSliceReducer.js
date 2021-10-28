import { createSlice } from '@reduxjs/toolkit';
import { selectSearchTerm } from './searchTermSlice.js';

/*
When an action with a specific type is dispatched, 
the slice will execute the slice.reducer() to check if the dispatched action's type matches on of the slice.actions case reducers. 
If so, it will run the matching case reducer function and if not, it will return the current state. 
This is the same as the old actions switch/case statements, just simpler.
Finally, slice.reducer is exported to be passed to the store and used to combine into the full state.
*/

export const favoriteRecipesSlice = createSlice({
  name: "favoriteRecipes",
  initialState: [],
  reducers: {
    addRecipe: (state, action) => {
      state.push(action.payload);
    },
    removeRecipe: (state, action) => {
      return state.filter(recipe => recipe.id !== action.payload.id)
    },
  },
});

export const selectFavoriteRecipes = (state) => state.favoriteRecipes;

export const selectFilteredFavoriteRecipes = (state) => {
  const favoriteRecipes = selectFavoriteRecipes(state);
  const searchTerm = selectSearchTerm(state);

  return favoriteRecipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export const {addRecipe, removeRecipe} = favoriteRecipesSlice.actions;

// Console.log slice pieces
console.log(favoriteRecipesSlice);

export default favoriteRecipesSlice.reducer;
