import { createAction, handleActions } from 'redux-actions';

const MATHQUILL = 'mathquill/MATHQUILL' as const;
const CLEAR = 'mathquill/CLEAR' as const;
const CHANGE = 'mathquill/CHANGE' as const;
const INSERT = 'mathquill/CLICK_BUTTON' as const;
const UNDO = 'mathquill/UNDO' as const;
const REDO = 'mathquill/REDO' as const;
const LOAD_HISTORY = 'mathquill/LOAD_HISTORY' as const;

export const mathQuill = createAction(MATHQUILL);
export const clear = createAction(CLEAR);
export const change = createAction(CHANGE, (latex: string) => latex);
export const insert = createAction(INSERT);
export const undo = createAction(UNDO);
export const redo = createAction(REDO);
export const loadHistory = createAction(LOAD_HISTORY);

type Action =
  | ReturnType<typeof mathQuill>
  | ReturnType<typeof clear>
  | ReturnType<typeof change>
  | ReturnType<typeof insert>
  | ReturnType<typeof undo>
  | ReturnType<typeof redo>
  | ReturnType<typeof loadHistory>;

export interface MathQuillState {
  latex: string;
  mathQuiiFunc: any;
  preLaTex: string[];
  nextLaTex: string[];
}

const initialState = {
  latex: 'Hello',
  mathQuiiFunc: 0,
  preLaTex: [] as string[],
  nextLaTex: [] as string[],
};

export const mathQuillReducer = handleActions(
  {
    [MATHQUILL]: (state: MathQuillState = initialState, action: Action) => {
      return { ...state, mathQuiiFunc: action.payload };
    },
    [CLEAR]: (state = initialState) => {
      if (state.latex === '') return { ...state };

      return {
        ...state,
        latex: '',
        preLaTex: [...state.preLaTex, state.latex],
        nextLaTex: [],
      };
    },
    [CHANGE]: (state: MathQuillState = initialState, action: Action) => {
      if (state.latex === action.payload) {
        return { ...state };
      }

      return {
        ...state,
        latex: action.payload,
        preLaTex: [...state.preLaTex, state.latex],
        nextLaTex: [],
      };
    },
    [UNDO]: (state: MathQuillState = initialState) => {
      if (state.preLaTex.length === 0) return { ...state };

      const newLatex = state.preLaTex.pop();

      return {
        ...state,
        latex: newLatex,
        nextLaTex: [...state.nextLaTex, state.latex],
      };
    },
    [REDO]: (state: MathQuillState = initialState) => {
      if (state.nextLaTex.length === 0) return { ...state };

      const newLaTex = state.nextLaTex.pop();

      return {
        ...state,
        latex: newLaTex,
        preLaTex: [...state.preLaTex, state.latex],
      };
    },
    [LOAD_HISTORY]: (state: MathQuillState = initialState, action) => {
      return {
        ...state,
        preLaTex: [...action.payload.preLaTex],
        nextLaTex: [...action.payload.nextLaTex],
      };
    },
  },
  initialState
);
