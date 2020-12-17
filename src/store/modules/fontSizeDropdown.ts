import { createAction, handleActions } from 'redux-actions';

const SHOW_FONT_SIZE_DROPDOWN = 'fontSizeDropdown/SHOW_FONT_SIZE_DROPDOWN' as const;
const CHANGE_FONT_SIZE = 'fontSizeDropdown/CHANGE_FONT_SIZE' as const;
const CLOSE_FONT_SIZE_DROPDOWN = 'fontSizeDropdown/CLOSE_FONT_SIZE_DROPDOWN' as const;

export const showFontSizeDropdown = createAction(SHOW_FONT_SIZE_DROPDOWN);
export const changeFontSize = createAction(CHANGE_FONT_SIZE);
export const closeFontSizeDropdown = createAction(CLOSE_FONT_SIZE_DROPDOWN);

type Action =
  | ReturnType<typeof showFontSizeDropdown>
  | ReturnType<typeof changeFontSize>
  | ReturnType<typeof closeFontSizeDropdown>;

export interface FontSizeDropdownState {
  fontSizeDropdown: boolean;
  selectedFontSize: number;
}

const initialState = {
  fontSizeDropdown: false,
  selectedFontSize: 15,
};

export const fontSizeDropdownReducer = handleActions(
  {
    [SHOW_FONT_SIZE_DROPDOWN]: (
      state: FontSizeDropdownState = initialState
    ) => {
      return { ...state, fontSizeDropdown: !state.fontSizeDropdown };
    },

    [CHANGE_FONT_SIZE]: (
      state: FontSizeDropdownState = initialState,
      action: Action
    ) => {
      return {
        ...state,
        fontSizeDropdown: false,
        selectedFontSize: action.payload,
      };
    },
    [CLOSE_FONT_SIZE_DROPDOWN]: (
      state: FontSizeDropdownState = initialState
    ) => {
      return { ...state, fontSizeDropdown: false };
    },
  },
  initialState
);
