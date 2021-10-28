import { createAsyncThunk } from "@reduxjs/toolkit" 
import { searchRecipes } from './api'

const searchRecipesByName = createAsyncThunk(
  'recipes/searchRecipesByName',
  (recipeName, thunkAPI) => {
    const response = await searchRecipes(recipeName)
    return response.data
  }
)