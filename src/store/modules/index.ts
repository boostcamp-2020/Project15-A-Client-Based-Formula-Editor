import { combineReducers } from 'redux';
import { alertReducer, AlertModeState } from './alert';
import { fontAlignReducer, AlignState } from './fontAlign';
import { fontColorDropdownHandler, State } from './fontColorDropdown';
import { paintDropdownReducer, PaintState } from './paintDropdown';
import { fontDropDownReducer, FontDropDownState } from './fontSizeDropdown';
import { mathQuillReducer, MathQuillState } from './mathQuill';
import { tabReducer, TabState } from './tab';
import {
  backgroundDropdownReducer,
  BackgroundState,
} from './backgroundDropdown';
import { graphHandler, GraphState } from './graph';
import { declineHandler, DeclineState } from './fontDecline';
import { getMathQuillReducer, MathQuillContainerState } from './getMathQuill';

export interface RootState {
  alertReducer: AlertModeState;
  backgroundDropdownReducer: BackgroundState;
  fontAlignReducer: AlignState;
  fontColorDropdownHandler: State;
  fontDropDownReducer: FontDropDownState;
  tabReducer: TabState;
  mathQuillReducer: MathQuillState;
  paintDropdownReducer: PaintState;
  graphHandler: GraphState;
  declineHandler: DeclineState;
  getMathQuillReducer: MathQuillContainerState;
}
export default combineReducers({
  alertReducer,
  backgroundDropdownReducer,
  fontAlignReducer,
  fontColorDropdownHandler,
  paintDropdownReducer,
  fontDropDownReducer,
  tabReducer,
  graphHandler,
  declineHandler,
  mathQuillReducer,
  getMathQuillReducer,
});
