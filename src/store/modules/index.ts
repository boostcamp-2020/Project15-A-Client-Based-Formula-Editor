import { combineReducers } from 'redux';
import { fontColorDropdownHandler, State } from './fontColorDropdown';
import { drawerDropdownHandler, IState } from './drawerDropdown';
import { fontDropDownReducer, FontDropDownState } from './font-dropdown';

export interface rootState {
  drawerDropdownHandler: IState;
  fontColorDropdownHandler: State;
}
export interface RootState {
  fontDropDownReducer: FontDropDownState;
}
export default combineReducers({
  drawerDropdownHandler,
  fontDropDownReducer,
  fontColorDropdownHandler,                             
});
