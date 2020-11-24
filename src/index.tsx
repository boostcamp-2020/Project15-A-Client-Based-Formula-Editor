import React from 'react';
import ReactDOM from 'react-dom';
import App from '@src/App';
import { createStore } from 'redux';
import reducer from '@src/stores';
import { Provider } from 'react-redux';

const store = createStore(reducer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
