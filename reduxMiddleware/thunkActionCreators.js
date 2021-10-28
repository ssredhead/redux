import { fetchRecipes } from '../../app/api'
import { createSlice } from "@reduxjs/toolkit";

//async calls don't work with traditional redux because:
//async logic returns promises, and store.dispatch expect a palin object with a type property.
//async operations create side effects (violating reducers as pure functions).

//redux-thunk is a middleware that lets you write action creators that return thunks, which handle asynchronous operations, in addition to the plain objects as before.

//thinks can perform async operations and can be used to delay dispatching an action, or to dispatch an action only if certain conditions are met.

//Thunk action creator
const loadRecipes = () => {
  return async(dispatch) => {
    //fetch the recipes and dispatch an action here
    const recipes = await fetchRecipes();
    dispatch({
      type: 'allRecipes/addRecipes',
      payload: recipes
    });
  }
}

export const allRecipesSlice = createSlice({
  name: "allRecipes",
  initialState: {
    recipes: [],
    isLoading: false,
    hasError: false,
  },
  reducers: {
    addRecipes(state, action) {
      state.recipes = action.payload
    }
  },  
});

export default allRecipesSlice.reducer;
