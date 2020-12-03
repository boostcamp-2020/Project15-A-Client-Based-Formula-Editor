import { createAction, handleActions } from 'redux-actions';

const GET_MATHQUILL_CONTAINER = ' GET_MATHQUILL_CONTAINER';

export const getMathQuillContainer = createAction(GET_MATHQUILL_CONTAINER);

export interface MathQuillContainerState {
  mathQuillContainer: any;
}

const initialState = {
  mathQuillContainer: '',
};

export const getMathQuillReducer = handleActions(
  {
    [GET_MATHQUILL_CONTAINER]: (state = initialState, action: any) => {
      return { ...state, mathQuillContainer: action.payload };
    },
  },
  initialState
);
