import { createAction, handleActions } from 'redux-actions';
// action_type
const CHANGE_FONTALIGN = 'CHANGE_ALIGN';
const CHANGE_FONTALIGN_STATE = 'CHANGE_FONTALIGN_STATE';
const CLOSE = 'fontAlign/CLOSE';

export const changeFontAlign = createAction(
  CHANGE_FONTALIGN,
  (value: string) => value
);
export const changeDropdownState = createAction(CHANGE_FONTALIGN_STATE);
export const closeDropdown = createAction(CLOSE);

export interface AlignState {
  isAlign: boolean;
  fontAlign: string;
}

const initialState: AlignState = {
  isAlign: false,
  fontAlign: 'center',
};

export const fontAlignHandler = handleActions(
  {
    [CHANGE_FONTALIGN]: (state: AlignState = initialState, action: any) => {
      return { ...state, isAlign: false, fontAlign: action.payload };
    },
    [CHANGE_FONTALIGN_STATE]: (state: AlignState) => {
      return { ...state, isAlign: !state.isAlign };
    },
    [CLOSE]: (state: AlignState) => {
      return { ...state, isAlign: false };
    },
  },
  initialState
);
