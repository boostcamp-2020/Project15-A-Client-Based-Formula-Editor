import { createAction, handleActions } from 'redux-actions';

const TOGGLE = 'fontDropdown/TOGGLE' as const;
const CHANGE_FONT_SIZE = 'fontDropdown/CHANGE_FONT_SIZE' as const;
const CLOSE = 'fontDropdown/CLOSE' as const;

export const toggle = createAction(TOGGLE);
export const changeFontSize = createAction(CHANGE_FONT_SIZE);
export const closeDropdown = createAction(CLOSE);

type Action =
  | ReturnType<typeof toggle>
  | ReturnType<typeof changeFontSize>
  | ReturnType<typeof closeDropdown>;

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
      return { ...state, dropDown: 'close', selectedFontSize: action.payload };
    },
    [CLOSE]: (state) => {
      return { ...state, dropDown: 'close' };
    },
  },
  initialState
);
