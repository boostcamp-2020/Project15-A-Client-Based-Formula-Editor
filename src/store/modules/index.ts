import { combineReducers } from 'redux';
import { fontColorDropdownHandler, State } from './fontColorDropdown';
import { drawerDropdownHandler, IState } from './drawerDropdown';
import { fontDropDownReducer, FontDropDownState } from './font-dropdown';
import { mathQuillReducer, MathQuillState } from './mathQuill';
import { tabReducer, TabState } from './tab';
import {
  BackgroundDropdownHandler,
  BackgroundState,
} from './backgroundDropdown';
import { graphHandler, GraphState } from './graph';
import { declineHandler, DeclineState } from './fontDecline';
import { fontAlignHandler, AlignState } from './fontAlign';
import { getMathQuillReducer, MathQuillContainerState } from './getMathQuill';

export interface RootState {
  fontDropDownReducer: FontDropDownState;
  tabReducer: TabState;
  mathQuillReducer: MathQuillState;
  drawerDropdownHandler: IState;
  fontColorDropdownHandler: State;
  BackgroundDropdownHandler: BackgroundState;
  graphHandler: GraphState;
  declineHandler: DeclineState;
  fontAlignHandler: AlignState;
  getMathQuillReducer: MathQuillContainerState;
}
export default combineReducers({
  drawerDropdownHandler,
  fontDropDownReducer,
  fontColorDropdownHandler,
  tabReducer,
  BackgroundDropdownHandler,
  graphHandler,
  declineHandler,
  fontAlignHandler,
  mathQuillReducer,
  getMathQuillReducer,
});
