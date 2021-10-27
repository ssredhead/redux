
import React, { useEffect } from 'react';
// Implement the import statements below.
import { useSelector } from 'react-redux';

// Add the selector to the below import statement 
import { loadData, selectFilteredAllRecipes } from './allRecipesSlice.js';
import { addRecipe } from '../favoriteRecipes/favoriteRecipesSlice.js';
import FavoriteButton from "../../components/FavoriteButton";
import Recipe from "../../components/Recipe";
const favoriteIconURL = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/favorite.svg';

//useSelector() accomplishes two things:
//It returns data from the Redux store using selectors
//It subscribes a child component of <Provider /> to changes in the store. React, not Redux, will re-render the component if the data from the selector changes.

//Call useSelector() inside the component definitiong and assign its returned value to a variable to accomplish these functions.

export const AllRecipes = () => {
  // Implement allRecipes variable.
  const allRecipes = useSelector(selectFilteredAllRecipes);
  
  const onFirstRender = () => {
    // dispatch(loadData());
  }
  useEffect(onFirstRender, []);

  const onAddRecipeHandler = (recipe) => {
    // dispatch(addRecipe(recipe));
  };

  return (
    <div className="recipes-container">
      {allRecipes.map((recipe) => (
        <Recipe recipe={recipe} key={recipe.id}>
          <FavoriteButton
            onClickHandler={() => onAddRecipeHandler(recipe)}
            icon={favoriteIconURL}
          >
            Add to Favorites
          </FavoriteButton>
        </Recipe>
      ))}
    </div>
  );
};


