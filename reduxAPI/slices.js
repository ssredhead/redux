//In Redux, the top-level state properties are called slices.
//Each slice represents a different feature of the entire application.
//A slice can be any data value, like an array of objects or a string.

//Best Practice: most redux apps begin with an initialState with two key features:
//1) Plan out the general structure of the state
//2) Provide an initial state value to the reducer function.

const initialState = {
  allRecipes: [],
  favoriteRecipes: [],
  searchTerm: ''
};