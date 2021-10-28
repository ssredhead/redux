import { createSlice } from '@reduxjs/toolkit';
import { selectSearchTerm } from '../searchTerm/searchTermSlice.js';

/*createSlice() has one parameter: option with the following properties
name: a string used as the prefix for generated action type.
initialState: the initial state value for the reducer.
reducers: an object of methods, where the keys determine 
the action type strings that can update the state, 
and whose methods are reducers that will be executed when the action type is dispatched. 
These are sometimes called "case reducers" because they are similar to a case in a switch statement.
*/

//With createSlice() you can:
//Write the case reducers as functions inside of an object, instead of having to write a switch/case statement.
//Action creators that correspond to each case reducer function provided will be automatically generated, so they don't need to be generated.
//No default handler needed.

/* Create your Slice object here. */
const options = {
  name: 'favoriteRecipes', //prefix of action
  initialState: [],
  reducers: {
    addRecipe: (state, action) => {
      return [...state, action.payload];
    },
    removeRecipe: (state, action) => {
      return state.filter(recipe => recipe.id !== action.payload.id);
    }
  }
};

//call createSlice()
export const favoriteRecipesSlice = createSlice(options);

/* Do not delete the code below...*/

export const selectFavoriteRecipes = (state) => state.favoriteRecipes;

export const selectFilteredFavoriteRecipes = (state) => {
  const favoriteRecipes = selectFavoriteRecipes(state);
  const searchTerm = selectSearchTerm(state);

  return favoriteRecipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};