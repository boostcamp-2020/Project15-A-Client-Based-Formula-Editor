import { createAction, handleActions } from 'redux-actions';
// action_type

const CHANGE_DROPDOWN = 'CHANGE_DROPDOWN_STATE';
const GET_CANVAS = 'GET_CANVAS';
const WINTER_DROPDOWN = 'WINTER_DROPDOWN';

export const backgroundDropdown = createAction(CHANGE_DROPDOWN);
export const getCanvas = createAction(GET_CANVAS);
export const winterDropdown = createAction(WINTER_DROPDOWN);

export interface BackgroundState {
  isBackgroundDropdownShow: boolean;
  backgroundCanvas: any;
  winterDropdownShow: boolean;
}
const initialState: BackgroundState = {
  isBackgroundDropdownShow: false,
  backgroundCanvas: '',
  winterDropdownShow: false,
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
    [WINTER_DROPDOWN]: (state: BackgroundState = initialState, action: any) => {
      return {
        ...state,
        winterDropdownShow: !state.winterDropdownShow,
      };
    },
  },
  initialState
);
