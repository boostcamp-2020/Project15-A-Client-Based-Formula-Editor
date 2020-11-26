import { combineReducers } from 'redux';
import { fontColorDropdownHandler, State } from './fontColorDropdown';
import { drawerDropdownHandler, IState } from './drawerDropdown';
import { fontDropDownReducer, FontDropDownState } from './font-dropdown';
import { tabReducer, TabState } from './tab';
import {
  BackgroundDropdownHandler,
  BackgroundState,
} from './backgroundDropdown';

export interface rootState {
  drawerDropdownHandler: IState;
  fontColorDropdownHandler: State;
  BackgroundDropdownHandler: BackgroundState;
}
export interface RootState {
  fontDropDownReducer: FontDropDownState;
  tabReducer: TabState;
}
export default combineReducers({
  drawerDropdownHandler,
  fontDropDownReducer,
  fontColorDropdownHandler,
  tabReducer,
  BackgroundDropdownHandler,
});
