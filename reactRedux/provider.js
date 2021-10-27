import React from 'react';
import ReactDOM from 'react-dom';
// Import Provider component
import { Provider } from 'react-redux';

//The <Provider> component from react-redux gives the application access to the store without the need to pass the store directly to the React components through props.
//Simply wrap it around the <App/> component in the index.js render.

import { App } from './app/App.js';
import { store } from './app/store.js';

//no longer inside a render() function = no subscribing to changes in Redux store.
ReactDOM.render(
  // Wrap root application with Provider component below.
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);