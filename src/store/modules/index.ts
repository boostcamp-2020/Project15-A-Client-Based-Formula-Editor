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
import {
  backgroundDropdownReducer,
  BackgroundState,
} from './backgroundDropdown';
import { graphReducer, GraphState } from './graph';
import { leftSectionReducer, LeftSectionState } from './leftSection';
import { mathQuillReducer, MathQuillState } from './mathQuill';
import { paintDropdownReducer, PaintState } from './paintDropdown';
import { tabReducer, TabState } from './tab';

export interface RootState {
  alertReducer: AlertModeState;
  backgroundDropdownReducer: BackgroundState;
  fontAlignReducer: AlignState;
  fontColorDropdownReducer: FontColorState;
  fontDeclineReducer: DeclineState;
  fontSizeDropdownReducer: FontSizeDropdownState;
  getMathQuillReducer: MathQuillContainerState;
  graphReducer: GraphState;
  leftSectionReducer: LeftSectionState;
  mathQuillReducer: MathQuillState;
  paintDropdownReducer: PaintState;
  tabReducer: TabState;
}
export default combineReducers({
  alertReducer,
  backgroundDropdownReducer,
  fontAlignReducer,
  fontColorDropdownReducer,
  fontDeclineReducer,
  fontSizeDropdownReducer,
  graphReducer,
  leftSectionReducer,
  mathQuillReducer,
  getMathQuillReducer,
  paintDropdownReducer,
  tabReducer,
});
