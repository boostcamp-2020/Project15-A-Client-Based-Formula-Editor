import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import store from '@src/store';

import MainPage from '@src/MainPage';

ReactDOM.render(
  <Provider store={store as any}>
    <MainPage />
  </Provider>,
  document.getElementById('root')
);
