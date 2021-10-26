import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './app/App.js';
//import store's state to be used later in <App/>
import { store } from './app/store';

/** Ducks structure with react added in
 * src/
|-- index.js
|-- app/
    |-- App.js (+) -top-level app component
    |-- store.js
|-- components/ -generics used by features
    |-- FavoriteButton.js (+)
    |-- Recipe.js (+)
|-- features/
    |-- allRecipes/
        |-- AllRecipes.js (+) -renders recipes
        |-- allRecipesSlice.js
    |-- favoriteRecipes/
        |-- FavoriteRecipes.js (+) -etc.
        |-- favoriteRecipesSlice.js
    |-- searchTerm/
        |-- SearchTerm.js (+) -etc.
        |-- searchTermSlice.js
  
  slice-specific components are in the same folder as the features. The generic components used by multiple features live in components. And the overall application component lives alongside index.js in app/
 */

const render = () => {
  // Pass `state` and `dispatch` props to <App />
  //remember not to call dispatch, just to hook it up. Calling it (i.e. dispatch()) would trigger it.
  ReactDOM.render(
    <App 
      state={store.getState()}
      dispatch={store.dispatch}
    />,
    document.getElementById('root')
  )
}
render();
// Subscribe render to changes to the `store`
//subscribe store to render to re-render whenever there is a state change
store.subscribe(render);