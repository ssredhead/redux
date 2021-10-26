import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './app/App.js';
// Import the store here.
import { store } from './app/store';

//Index.js is the "entry point" for the application because it points to index.html, and is responsible for rendering the top-level <App />

// Pass state and dispatch props to the <App /> component.
const render = () => {
  ReactDOM.render(
    <App 
      state={store.getState()}
      dispatch={store.dispatch}
    />,
    document.getElementById('root')
  )
};
render();

// Subscribe render to the store.
store.subscribe(render);