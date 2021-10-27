import allRecipesData from '../../../data.js'
import { selectSearchTerm } from '../searchTerm/searchTermSlice.js';

//selector functions define the data from the store that each React component needs access to.
//It is a pure function that selects data from the Redux store's state.

//A selector:
//Takes state as an argument
//Returns what is needed by the component from state.

export const loadData = () => {
  return {
    type: 'allRecipes/loadData',
    payload: allRecipesData
  }
}

const initialState = [];
export const allRecipesReducer = (allRecipes = initialState, action) => {
  switch (action.type) {
    case 'allRecipes/loadData':
      return action.payload;
    case 'favoriteRecipes/addRecipe':
      return allRecipes.filter(recipe => recipe.id !== action.payload.id);
    case 'favoriteRecipes/removeRecipe':
      return [...allRecipes, action.payload]
    default:
      return allRecipes;
  }
}

// Implement the selectors
export const selectAllRecipes = (state) => {
  return state.allRecipes;
}

export const selectFilteredAllRecipes = (state) => {
  const allRecipes = selectAllRecipes(state);
  const searchTerm = selectSearchTerm(state);
  return allRecipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()));
}


// This code is for testing the seletors only.
const testState = {
  allRecipes: allRecipesData,
  searchTerm: 'ch'
}

const testSelectAllRecipes = () => {
  console.log('All Recipes')
  console.log(selectAllRecipes(testState));
}

const testSelectFilteredAllRecipes = () => {
  console.log('\nRecipes filtered by searchTerm')
  console.log(selectFilteredAllRecipes(testState));
}

// Uncomment these to test each selector.
testSelectAllRecipes();
testSelectFilteredAllRecipes(); 