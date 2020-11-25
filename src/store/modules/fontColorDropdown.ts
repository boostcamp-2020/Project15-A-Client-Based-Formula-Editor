import { createAction, handleActions } from 'redux-actions';
// action_type
const CHANGE_COLOR = 'CHANGE_COLOR';
const CHANGE_DROPDOWN_STATE = 'CHANGE_DROPOWN_STATE';

export const changeColor = createAction(CHANGE_COLOR, (value: string) => value);
export const changeDropdownState = createAction(CHANGE_DROPDOWN_STATE);

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
      return { ...state, fontColor: action.payload };
    },
    [CHANGE_DROPDOWN_STATE]: (state: State) => {
      return { ...state, isActive: !state.isActive };
    },
  },
  initialState
);
