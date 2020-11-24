import { combineReducers } from 'redux';
import { IState } from './types';
import reducer from './reducer';

export interface rootState {
  reducer: IState;
}
const rootReducer = combineReducers({
  reducer,
});
export default rootReducer;
