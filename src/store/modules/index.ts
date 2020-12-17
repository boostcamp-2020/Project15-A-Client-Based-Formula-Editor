import { combineReducers } from 'redux';
import { alertReducer, AlertModeState } from './alert';
import { fontAlignReducer, AlignState } from './fontAlign';
import { fontColorDropdownReducer, FontColorState } from './fontColorDropdown';
import { fontDeclineReducer, DeclineState } from './fontDecline';
import {
  fontSizeDropdownReducer,
  FontSizeDropdownState,
} from './fontSizeDropdown';
import { getMathQuillReducer, MathQuillContainerState } from './getMathQuill';
import { tabReducer, TabState } from './tab';
import {
  backgroundDropdownReducer,
  BackgroundState,
} from './backgroundDropdown';
import { graphReducer, GraphState } from './graph';
import { mathQuillReducer, MathQuillState } from './mathQuill';
import { paintDropdownReducer, PaintState } from './paintDropdown';

export interface RootState {
  alertReducer: AlertModeState;
  backgroundDropdownReducer: BackgroundState;
  fontAlignReducer: AlignState;
  fontColorDropdownReducer: FontColorState;
  fontDeclineReducer: DeclineState;
  fontSizeDropdownReducer: FontSizeDropdownState;
  mathQuillReducer: MathQuillState;
  tabReducer: TabState;
  graphReducer: GraphState;
  paintDropdownReducer: PaintState;
  getMathQuillReducer: MathQuillContainerState;
}
export default combineReducers({
  alertReducer,
  backgroundDropdownReducer,
  fontAlignReducer,
  fontColorDropdownReducer,
  fontDeclineReducer,
  paintDropdownReducer,
  fontSizeDropdownReducer,
  tabReducer,
  graphReducer,
  mathQuillReducer,
  getMathQuillReducer,
});
