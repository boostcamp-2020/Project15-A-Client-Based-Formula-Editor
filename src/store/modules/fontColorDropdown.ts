import { createAction, handleActions } from 'redux-actions';

const CHANGE_FONTCOLOR = 'fontColorDropdown/CHANGE_COLOR' as const;
const SHOW_FONTCOLOR_DROPDOWN = 'fontColorDropdown/SHOW_FONTCOLOR_DROPDOWN' as const;
const CLOSE_FONTCOLOR_DROPDOWN = 'fontColorDropdown/CLOSE_FONTCOLOR_DROPDOWN' as const;

export const changeFontColor = createAction(
  CHANGE_FONTCOLOR,
  (value: string) => value
);
export const showFontColorDropdown = createAction(SHOW_FONTCOLOR_DROPDOWN);
export const closeFontColorDropdown = createAction(CLOSE_FONTCOLOR_DROPDOWN);

type Action =
  | ReturnType<typeof changeFontColor>
  | ReturnType<typeof showFontColorDropdown>
  | ReturnType<typeof closeFontColorDropdown>;

export interface FontColorState {
  fontColorDropdown: boolean;
  fontColor: string;
}

const initialState: FontColorState = {
  fontColorDropdown: false,
  fontColor: 'black',
};

export const fontColorDropdownReducer = handleActions(
  {
    [CHANGE_FONTCOLOR]: (
      state: FontColorState = initialState,
      action: Action
    ) => {
      return { ...state, fontColorDropdown: false, fontColor: action.payload };
    },
    [SHOW_FONTCOLOR_DROPDOWN]: (state: FontColorState = initialState) => {
      return { ...state, fontColorDropdown: !state.fontColorDropdown };
    },
    [CLOSE_FONTCOLOR_DROPDOWN]: (state: FontColorState = initialState) => {
      return { ...state, fontColorDropdown: false };
    },
  },
  initialState
);
