import { createStore } from 'redux';
import modules from './modules';

const configureStore = () => {
  // const store = createStore(modules);
  const store = createStore(modules);

  return store;
};

export default configureStore;
