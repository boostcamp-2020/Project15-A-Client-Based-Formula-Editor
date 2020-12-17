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
  mathQuiiFunc: any;
  latex: string;
  history: string[];
  historyIdx: number;
}

const initialState = {
  latex: 'Hello',
  mathQuiiFunc: 0,
  history: ['Hello'],
  historyIdx: 0,
};

export const mathQuillReducer = handleActions(
  {
    [MATHQUILL]: (state: MathQuillState = initialState, action: Action) => {
      return { ...state, mathQuiiFunc: action.payload };
    },
    [CLEAR]: (state = initialState) => {
      if (state.history[state.historyIdx] === '') return { ...state };

      return {
        ...state,
        latex: '',
        history: [...state.history, ''],
        historyIdx: state.historyIdx + 1,
      };
    },
    [CHANGE]: (state: MathQuillState = initialState, action: Action) => {
      if (state.history[state.historyIdx] === action.payload)
        return { ...state };

      return {
        ...state,
        latex: action.payload,
        history: [...state.history, action.payload],
        historyIdx: state.historyIdx + 1,
      };
    },
    [INSERT]: (state: MathQuillState = initialState) => {
      const newLatex = state.mathQuiiFunc.latex();
      if (state.history[state.historyIdx] === newLatex) return { ...state };
      if (state.historyIdx !== state.history.length - 1) {
        return {
          ...state,
          latex: newLatex,
          history: [state.history.slice(0, state.historyIdx + 1), newLatex],
          historyIdx: state.historyIdx + 1,
        };
      }

      return { ...state, latex: state.mathQuiiFunc.latex() };
    },
    [UNDO]: (state: MathQuillState = initialState) => {
      if (state.historyIdx === 0) return state;

      return {
        ...state,
        latex: state.history[state.historyIdx - 1],
        historyIdx: state.historyIdx - 1,
      };
    },
    [REDO]: (state: MathQuillState = initialState) => {
      if (state.historyIdx === state.history.length - 1) return { ...state };

      return {
        ...state,
        latex: state.history[state.historyIdx + 1],
        historyIdx: state.historyIdx + 1,
      };
    },
    [LOAD_HISTORY]: (state: MathQuillState = initialState, action) => {
      return {
        ...state,
        history: [...action.payload.history],
        historyIdx: action.payload.historyIdx,
      };
    },
  },
  initialState
);
