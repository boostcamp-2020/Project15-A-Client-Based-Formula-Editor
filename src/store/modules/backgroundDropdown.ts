import { createAction, handleActions } from 'redux-actions';
// action_type

const CHANGE_DROPDOWN = 'CHANGE_DROPDOWN_STATE';
const CLOSE = 'backgroundDropdown/CLOSE';
export const backgroundDropdown = createAction(CHANGE_DROPDOWN);
export const closeDropdown = createAction(CLOSE);

export interface BackgroundState {
  isBackgroundDropdownShow: boolean;
}
const initialState: BackgroundState = {
  isBackgroundDropdownShow: false,
};

export const BackgroundDropdownHandler = handleActions(
  {
    [CHANGE_DROPDOWN]: (state: BackgroundState = initialState) => {
      return {
        ...state,
        isBackgroundDropdownShow: !state.isBackgroundDropdownShow,
      };
    },
    [CLOSE]: (state: BackgroundState) => {
      return { ...state, isBackgroundDropdownShow: false };
    },
  },
  initialState
);
