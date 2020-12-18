import { createAction, handleActions } from 'redux-actions';

const CHANGE_PAINT_DROPDOWN = 'paintDropdown/CHANGE_PAINT_DROPDOWN' as const;
const CLOSE_DROPDOWN = 'paintDropdown/CLOSE_DROPDOWN' as const;
const CHANGE_LATEX = 'paintDropdown/CHANGE_LATEX' as const;

export const showPaintDropdown = createAction(CHANGE_PAINT_DROPDOWN);
export const closePaint = createAction(CLOSE_DROPDOWN);
export const changeLatex = createAction(CHANGE_LATEX);

type Action =
  | ReturnType<typeof showPaintDropdown>
  | ReturnType<typeof closePaint>
  | ReturnType<typeof changeLatex>;

export interface PaintState {
  paintDropdown: boolean;
  latexContainer: any;
}

const initialState: PaintState = {
  paintDropdown: false,
  latexContainer: '',
};

export const paintDropdownReducer = handleActions(
  {
    [CHANGE_PAINT_DROPDOWN]: (state: PaintState = initialState): PaintState => {
      return {
        ...state,
        paintDropdown: !state.paintDropdown,
      };
    },

    [CLOSE_DROPDOWN]: (state: PaintState = initialState): PaintState => {
      return { ...state, paintDropdown: false };
    },

    [CHANGE_LATEX]: (
      state: PaintState = initialState,
      action: Action
    ): PaintState => {
      return {
        ...state,
        latexContainer: action.payload,
      };
    },
  },
  initialState
);
