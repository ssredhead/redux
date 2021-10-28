import { fetchRecipes } from '../../app/api'
import { createAsyncThunk } from "@reduxjs/toolkit";

//createAsyncThunk dispatches actions for each promised lifecycle state: pending, fulfilled, and rejected.

//the function produces an action type for each promise lifecycle state.
/**Ex.
 * for 'resourceType/actionType'
 * 'resourceType/actionType/pending' (actionType.pending)
 * 'resourceType/actionType/fulfilled' (actionType.fulfilled)
 * 'resourceType/actionType/rejected' (actionType.rejected)
 */

const loadRecipes = createAsyncThunk(
  'allRecipes/loadRecipes',
  (arg, thunkAPI) => {
    const response = await fetchRecipes();
    return response.data
  }
)

// The above call to createAsyncThunk will generate what three action types?
// 1. 'allRecipes/loadRecipes/pending'
// 2. 'allRecipes/loadRecipes/fulfilled'
// 3. 'allRecipes/loadRecipes/rejected'
