import { createSlice } from '@reduxjs/toolkit';
import { selectSearchTerm } from './searchTermSlice.js';

/*parts of createSlice():
name: holds the value of the string that is used as a prefix for the generated action types.
reducer: the complete reducer function.
actions: holds the auto-generated action creators.
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

/* Begin coding below here. */
console.log(favoriteRecipesSlice.name);
for (const action in favoriteRecipesSlice.actions) {
  console.log(action);
}

//export actions separately to keep with the ducks pattern
export const { addRecipe, removeRecipe } = favoriteRecipesSlice.actions;
