import React from 'react';
import ReactDOM from 'react-dom';
import App from '@src/App';
import store from '@src/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store as any}>
    <App />
  </Provider>,
  document.getElementById('root')
);
