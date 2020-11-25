import React from 'react';
import ReactDOM from 'react-dom';
import App from '@src/App';
import {Provider} from 'react-redux';
import store from './store'

ReactDOM.render(
<Provider store={store as any}>
    <App />
  </Provider>, 
document.getElementById('root'));
