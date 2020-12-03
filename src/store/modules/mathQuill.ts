import { createAction, handleActions } from 'redux-actions';

const MATHQUILL = 'mathquill/MATHQUILL' as const;
const CLEAR = 'CLEAR';
const CHANGE = 'CHANGE';

export const mathQuill = createAction(MATHQUILL);
export const clear = createAction(CLEAR);
export const change = createAction(CHANGE, (latex: string) => latex);

type Action =
  | ReturnType<typeof mathQuill>
  | ReturnType<typeof clear>
  | ReturnType<typeof change>;

export interface MathQuillState {
  mathQuiiFunc: any;
  latex: string;
}

const initialState = {
  latex: 'Hello',
  mathQuiiFunc: 0,
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
  },
  initialState
);
