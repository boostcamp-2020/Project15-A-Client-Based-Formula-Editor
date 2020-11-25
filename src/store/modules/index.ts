import { combineReducers } from 'redux';
import { drawerDropdownHandler, IState } from './drawerDropdown';
import { fontDropDownReducer, FontDropDownState } from './font-dropdown';
export interface rootState {
  drawerDropdownHandler: IState;
}
export interface RootState {
  fontDropDownReducer: FontDropDownState;
}
export default combineReducers({
  drawerDropdownHandler,
  fontDropDownReducer,
});
