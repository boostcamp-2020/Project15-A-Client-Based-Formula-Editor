import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from '@src/App';
import store from './store';

ReactDOM.render(
  <Provider store={store as any}>
    <App />
  </Provider>,
  document.getElementById('root')
);
