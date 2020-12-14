import { createAction, handleActions } from 'redux-actions';
// action_type

const CHANGE_DROPDOWN = 'CHANGE_DROPDOWN_STATE';
const GET_CANVAS = 'GET_CANVAS';
const WINTER_DROPDOWN = 'WINTER_DROPDOWN';
const SUMMER_DROPDOWN = 'SUMMER_DROPDOWN';
const CLOSE = 'backgroundDropdown/CLOSE';

export const backgroundDropdown = createAction(CHANGE_DROPDOWN);
export const getCanvas = createAction(GET_CANVAS);
export const winterDropdown = createAction(WINTER_DROPDOWN);
export const summerDropdown = createAction(SUMMER_DROPDOWN);
export const closeDropdown = createAction(CLOSE);

export interface BackgroundState {
  isBackgroundDropdownShow: boolean;
  backgroundCanvas: any;
  winterDropdownShow: boolean;
  summerDropdownShow: boolean;
}
const initialState: BackgroundState = {
  isBackgroundDropdownShow: false,
  backgroundCanvas: '',
  winterDropdownShow: false,
  summerDropdownShow: false,
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
    [SUMMER_DROPDOWN]: (state: BackgroundState = initialState, action: any) => {
      return {
        ...state,
        summerDropdownShow: !state.summerDropdownShow,
      };
    },
    [CLOSE]: (state: BackgroundState) => {
      return { ...state, isBackgroundDropdownShow: false };
    },
  },
  initialState
);
