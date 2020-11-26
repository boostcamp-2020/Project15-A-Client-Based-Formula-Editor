import { createAction, handleActions } from 'redux-actions';
// action_type

const CHANGE_DROPDOWN = 'CHANGE_DROPDOWN_STATE';

export const backgroundDropdown = createAction(CHANGE_DROPDOWN);

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
  },
  initialState
);
