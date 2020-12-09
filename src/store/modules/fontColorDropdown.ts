import { createAction, handleActions } from 'redux-actions';
// action_type
const CHANGE_COLOR = 'CHANGE_COLOR';
const CHANGE_DROPDOWN_STATE = 'CHANGE_DROPOWN_STATE';
const CLOSE = 'fontColorDropdown/CLOSE';
export const changeColor = createAction(CHANGE_COLOR, (value: string) => value);
export const changeDropdownState = createAction(CHANGE_DROPDOWN_STATE);
export const closeDropdown = createAction(CLOSE);

export interface State {
  isActive: boolean;
  fontColor: string;
}

const initialState: State = {
  isActive: false,
  fontColor: 'black',
};

export const fontColorDropdownHandler = handleActions(
  {
    [CHANGE_COLOR]: (state: State = initialState, action: any) => {
      return { ...state, isActive: false, fontColor: action.payload };
    },
    [CHANGE_DROPDOWN_STATE]: (state: State) => {
      return { ...state, isActive: !state.isActive };
    },
    [CLOSE]: (state: State) => {
      return { ...state, isActive: false };
    },
  },
  initialState
);
