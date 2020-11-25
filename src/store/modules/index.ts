import { combineReducers } from 'redux';
import { drawerDropdownHandler, IState } from './drawerDropdown';

export interface rootState {
  drawerDropdownHandler: IState;
}
export default combineReducers({
  drawerDropdownHandler,
});
