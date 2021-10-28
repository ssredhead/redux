import { fetchRecipes } from '../../app/api'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//creatAsyncThunk() takes two parameters:
//an action type string (resourceType/actionName)
//an asynchronous callback
//the function generates a thunk action creator that will run the provided callback and automatically dispatch promise lifecycle actions as appropriate so that you don't have to dispatch pending/fulfilled/rejected actions by hand.

//old asynchronous action creator
// const loadRecipes = () => {
//   return async (dispatch) => {
//     const recipes = await fetchRecipes()
//     dispatch({type: 'allRecipes/addRecipes', payload: recipes})
//   }
// };

const loadRecipes = createAsyncThunk(
  'allRecipes/loadRecipes', //action type
  async (arg, thunkAPI) => { //payload creator
    const data = await fetchRecipes()
    const json = await data.json()
    return json
  }
)

export const allRecipesSlice = createSlice({
  name: 'allRecipes',
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
