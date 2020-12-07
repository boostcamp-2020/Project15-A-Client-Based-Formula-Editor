import { createAction, handleActions } from 'redux-actions';

const GET_MATHQUILL_CONTAINER = ' GET_MATHQUILL_CONTAINER';
const SET_CROP_CONTAINER = 'SET_CROP_CONTAINER';

export const getMathQuillContainer = createAction(GET_MATHQUILL_CONTAINER);
export const setCropContainer = createAction(SET_CROP_CONTAINER);

export interface MathQuillContainerState {
  mathQuillContainer: any;
  click: boolean;
}

const initialState = {
  mathQuillContainer: '',
  click: false,
};

export const getMathQuillReducer = handleActions(
  {
    [GET_MATHQUILL_CONTAINER]: (state = initialState, action: any) => {
      return { ...state, mathQuillContainer: action.payload };
    },
    [SET_CROP_CONTAINER]: (state = initialState, action: any) => {
      return { ...state, click: !state.click };
    },
  },
  initialState
);
