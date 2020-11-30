import { createAction, handleActions } from 'redux-actions';

const TOGGLE = 'font-dropdown/TOGGLE' as const;
const CHANGE_FONT_SIZE = 'font-dropdown/CHANGE_FONT_SIZE' as const;

export const toggle = createAction(TOGGLE);
export const changeFontSize = createAction(CHANGE_FONT_SIZE);

type Action = ReturnType<typeof toggle> | ReturnType<typeof changeFontSize>;

export interface FontDropDownState {
  dropDown: string;
  selectedFontSize: number;
}

const initialState = {
  dropDown: 'close',
  selectedFontSize: 15,
};

export const fontDropDownReducer = handleActions(
  {
    [TOGGLE]: (state) => {
      if (state.dropDown === 'open') return { ...state, dropDown: 'close' };
      return { ...state, dropDown: 'open' };
    },

    [CHANGE_FONT_SIZE]: (state, action: Action) => {
      return { ...state, selectedFontSize: action.payload };
    },
  },
  initialState
);
