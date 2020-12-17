import { combineReducers } from 'redux';
import { alertReducer, AlertModeState } from './alert';
import { fontColorDropdownHandler, State } from './fontColorDropdown';
import { paintDropdownReducer, PaintState } from './paintDropdown';
import { fontDropDownReducer, FontDropDownState } from './fontDropdown';
import { mathQuillReducer, MathQuillState } from './mathQuill';
import { tabReducer, TabState } from './tab';
import {
  backgroundDropdownReducer,
  BackgroundState,
} from './backgroundDropdown';
import { graphHandler, GraphState } from './graph';
import { declineHandler, DeclineState } from './fontDecline';
import { fontAlignReducer, AlignState } from './fontAlign';
import { getMathQuillReducer, MathQuillContainerState } from './getMathQuill';

export interface RootState {
  alertReducer: AlertModeState;
  backgroundDropdownReducer: BackgroundState;
  fontDropDownReducer: FontDropDownState;
  tabReducer: TabState;
  mathQuillReducer: MathQuillState;
  paintDropdownReducer: PaintState;
  fontColorDropdownHandler: State;
  graphHandler: GraphState;
  declineHandler: DeclineState;
  fontAlignReducer: AlignState;
  getMathQuillReducer: MathQuillContainerState;
}
export default combineReducers({
  alertReducer,
  backgroundDropdownReducer,
  paintDropdownReducer,
  fontDropDownReducer,
  fontColorDropdownHandler,
  tabReducer,
  graphHandler,
  declineHandler,
  fontAlignReducer,
  mathQuillReducer,
  getMathQuillReducer,
});
