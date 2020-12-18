import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import store from '@src/store';
import MainPage from '@src/MainPage';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

ReactDOM.render(
  <DndProvider backend={HTML5Backend}>
    <Provider store={store}>
      <MainPage />
    </Provider>
  </DndProvider>,
  document.getElementById('root')
);
