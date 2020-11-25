import { combineReducers } from 'redux';
import { fontColorDropdownHandler, State } from './fontColorDropdown';

export interface rootState {
  fontColorDropdownHandler: State;
}
export default combineReducers({
  fontColorDropdownHandler,
});
