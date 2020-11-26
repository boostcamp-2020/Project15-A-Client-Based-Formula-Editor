import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import store from '@src/store';
import App from '@src/App';

ReactDOM.render(
  <Provider store={store as any}>
    <App />
  </Provider>,
  document.getElementById('root')
);
