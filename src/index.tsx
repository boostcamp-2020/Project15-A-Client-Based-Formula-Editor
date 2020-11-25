import React from 'react';
import ReactDOM from 'react-dom';
import App from '@src/App';
import store from '@src/stores';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
