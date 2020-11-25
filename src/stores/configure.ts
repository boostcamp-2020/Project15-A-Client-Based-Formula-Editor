import { createStore } from 'redux';
import modules from './modules';

const configure = () => {
  const store = createStore(modules);
  return store;
};

export default configure;
