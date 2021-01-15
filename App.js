import React from "react";

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import Providers from "./navigation/index";
import reducers from './reducers';

const App = () => {
  const state = createStore(reducers, {}, applyMiddleware(reduxThunk))

  return (
    <Provider store={state}>
      <Providers />
    </Provider>
  );
};

export default App;
