import { createAction, handleActions } from 'redux-actions';

const MATHQUILL = 'mathquill/MATHQUILL' as const;
const CLEAR = 'CLEAR';
const CHANGE = 'CHANGE';
const INSERT = 'CLICK_BUTTON';
const SHOW_OTHER_SECTION = 'SHOW_OTHER_SECTION';

export const mathQuill = createAction(MATHQUILL);
export const clear = createAction(CLEAR);
export const change = createAction(CHANGE, (latex: string) => latex);
export const insert = createAction(INSERT);
export const show = createAction(SHOW_OTHER_SECTION);

type Action =
  | ReturnType<typeof mathQuill>
  | ReturnType<typeof clear>
  | ReturnType<typeof change>
  | ReturnType<typeof insert>
  | ReturnType<typeof show>;
export interface MathQuillState {
  mathQuiiFunc: any;
  latex: string;
  name: string;
}

const initialState = {
  latex: 'Hello',
  mathQuiiFunc: 0,
  name: '',
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
    [SHOW_OTHER_SECTION]: (state = initialState, action: Action) => {
      return { ...state, name: action.payload };
    },
  },
  initialState
);
