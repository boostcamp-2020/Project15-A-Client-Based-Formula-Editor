import { createAction, handleActions } from 'redux-actions';

const MATHQUILL = 'mathquill/MATHQUILL' as const;
const CLEAR = 'CLEAR';
const CHANGE = 'CHANGE';
const INSERT = 'CLICK_BUTTON';

export const mathQuill = createAction(MATHQUILL);
export const clear = createAction(CLEAR);
export const change = createAction(CHANGE, (latex: string) => latex);
export const insert = createAction(INSERT);

type Action =
  | ReturnType<typeof mathQuill>
  | ReturnType<typeof clear>
  | ReturnType<typeof change>
  | ReturnType<typeof insert>;

export interface MathQuillState {
  mathQuiiFunc: any;
  latex: string;
}

const initialState = {
  mathQuiiFunc: 0,
  latex: '',
};

export const mathQuillReducer = handleActions(
  {
    [MATHQUILL]: (state = initialState, action: Action) => {
      return { ...state, mathQuiiFunc: action.payload };
    },
    [CLEAR]: (state = initialState, action: Action) => {
      return { ...state, latex: '' };
    },
    [CHANGE]: (state = initialState, action: Action) => {
      return { ...state, latex: action.payload };
    },
    [INSERT]: (state = initialState, action: Action) => {
      return { ...state, latex: state.mathQuiiFunc.latex() };
    },
  },
  initialState
);
