import { combineReducers } from 'redux';
import { alertReducer, AlertModeState } from './alert';
import { fontAlignReducer, AlignState } from './fontAlign';
import { fontColorDropdownReducer, FontColorState } from './fontColorDropdown';
import { declineHandler, DeclineState } from './fontDecline';
import { paintDropdownReducer, PaintState } from './paintDropdown';
import { fontDropDownReducer, FontDropDownState } from './fontSizeDropdown';
import { mathQuillReducer, MathQuillState } from './mathQuill';
import { tabReducer, TabState } from './tab';
import {
  backgroundDropdownReducer,
  BackgroundState,
} from './backgroundDropdown';
import { graphHandler, GraphState } from './graph';
import { getMathQuillReducer, MathQuillContainerState } from './getMathQuill';

export interface RootState {
  alertReducer: AlertModeState;
  backgroundDropdownReducer: BackgroundState;
  fontAlignReducer: AlignState;
  fontColorDropdownReducer: FontColorState;
  declineHandler: DeclineState;
  fontDropDownReducer: FontDropDownState;
  tabReducer: TabState;
  mathQuillReducer: MathQuillState;
  paintDropdownReducer: PaintState;
  graphHandler: GraphState;
  getMathQuillReducer: MathQuillContainerState;
}
export default combineReducers({
  alertReducer,
  backgroundDropdownReducer,
  fontAlignReducer,
  fontColorDropdownReducer,
  declineHandler,
  paintDropdownReducer,
  fontDropDownReducer,
  tabReducer,
  graphHandler,
  mathQuillReducer,
  getMathQuillReducer,
});
