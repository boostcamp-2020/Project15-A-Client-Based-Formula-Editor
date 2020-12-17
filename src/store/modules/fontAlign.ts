import { createAction, handleActions } from 'redux-actions';

const SHOW_FONTALIGN_DROPDOWN = 'fontAlign/SHOW_FONTALIGN_DROPDOWN';
const CHANGE_FONTALIGN = 'fontAlign/CHANGE_FONTALIGN';
const CLOSE_FONTALIGN_DROPDOWN = 'fontAlign/CLOSE_FONTALIGN_DROPDOWN';

export const showFontAlignDropdown = createAction(SHOW_FONTALIGN_DROPDOWN);
export const changeFontAlign = createAction(
  CHANGE_FONTALIGN,
  (value: string) => value
);
export const closeFontAlignDropdown = createAction(CLOSE_FONTALIGN_DROPDOWN);

type Action =
  | ReturnType<typeof showFontAlignDropdown>
  | ReturnType<typeof changeFontAlign>
  | ReturnType<typeof closeFontAlignDropdown>;

export interface AlignState {
  fontAlignDropdown: boolean;
  fontAlign: string;
}

const initialState: AlignState = {
  fontAlignDropdown: false,
  fontAlign: 'center',
};

export const fontAlignReducer = handleActions(
  {
    [CHANGE_FONTALIGN]: (state: AlignState = initialState, action: Action) => {
      return { ...state, fontAlignDropdown: false, fontAlign: action.payload };
    },
    [SHOW_FONTALIGN_DROPDOWN]: (state: AlignState = initialState) => {
      return { ...state, fontAlignDropdown: !state.fontAlignDropdown };
    },
    [CLOSE_FONTALIGN_DROPDOWN]: (state: AlignState = initialState) => {
      return { ...state, fontAlignDropdown: false };
    },
  },
  initialState
);
