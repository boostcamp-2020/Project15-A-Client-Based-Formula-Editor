import { createAction, handleActions } from 'redux-actions';

const MATHQUILL = 'mathquill/MATHQUILL' as const;

export const mathQuill = createAction(MATHQUILL);

type Action = ReturnType<typeof mathQuill>;

export interface MathQuillState {
  mathQuiiFunc: any;
}

const initialState = {
  mathQuill: 0,
};

export const mathQuillReducer = handleActions(
  {
    [MATHQUILL]: (state, action: Action) => {
      return { ...state, mathQuiiFunc: action.payload };
    },
  },
  initialState
);
