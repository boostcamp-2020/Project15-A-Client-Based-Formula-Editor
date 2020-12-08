import { createAction, handleActions } from 'redux-actions';
// action_type

const CHANGE_DROPDOWN = 'CHANGE_DROPDOWN_STATE';
const GET_CANVAS = 'GET_CANVAS';

export const backgroundDropdown = createAction(CHANGE_DROPDOWN);
export const getCanvas = createAction(GET_CANVAS);

export interface BackgroundState {
  isBackgroundDropdownShow: boolean;
  backgroundCanvas: any;
}
const initialState: BackgroundState = {
  isBackgroundDropdownShow: false,
  backgroundCanvas: '',
};

export const BackgroundDropdownHandler = handleActions(
  {
    [CHANGE_DROPDOWN]: (state: BackgroundState = initialState) => {
      return {
        ...state,
        isBackgroundDropdownShow: !state.isBackgroundDropdownShow,
      };
    },
    [GET_CANVAS]: (state: BackgroundState = initialState, action: any) => {
      return {
        ...state,
        backgroundCanvas: action.payload,
      };
    },
  },
  initialState
);
