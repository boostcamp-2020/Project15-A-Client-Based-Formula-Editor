import { createAction, handleActions } from 'redux-actions';

const GET_MATHQUILL_CONTAINER = ' GET_MATHQUILL_CONTAINER';
const SET_CROP_CONTAINER = 'SET_CROP_CONTAINER';
const SHOW_SAVE_CONTAINER = 'SHOW_SAVE_CONTAINER';
const DELETE_CROP_CONTAINER = 'DELETE_CROP_CONTAINER';
const SHOW_COMPLETE_CONTAINER = 'SHOW_COMPLETE_CONTAINER';
const DELETE_COMPLETE_CONTAINER = 'DELETE_COMPLETE_CONTAINER';
const CROP_CONTAINER = 'CROP_CONTAINER';

export const getMathQuillContainer = createAction(GET_MATHQUILL_CONTAINER);
export const setCropContainer = createAction(SET_CROP_CONTAINER);
export const setSaveContainer = createAction(SHOW_SAVE_CONTAINER);
export const deleteCropContainer = createAction(DELETE_CROP_CONTAINER);
export const showCompleteContainer = createAction(SHOW_COMPLETE_CONTAINER);
export const deleteCompleteContainer = createAction(DELETE_COMPLETE_CONTAINER);
export const cropContainer = createAction(CROP_CONTAINER);

export interface MathQuillContainerState {
  mathQuillContainer: any;
  click: boolean;
  saveClick: boolean;
  completeShow: boolean;
  cropUrl: any;
}

const initialState = {
  mathQuillContainer: '',
  click: false,
  saveClick: false,
  completeShow: false,
  cropUrl: '',
};

export const getMathQuillReducer = handleActions(
  {
    [GET_MATHQUILL_CONTAINER]: (state = initialState, action: any) => {
      return { ...state, mathQuillContainer: action.payload };
    },
    [SET_CROP_CONTAINER]: (state = initialState, action: any) => {
      return { ...state, click: true };
    },
    [DELETE_CROP_CONTAINER]: (state = initialState, action: any) => {
      return { ...state, click: false };
    },
    [SHOW_SAVE_CONTAINER]: (state = initialState, action: any) => {
      return { ...state, saveClick: !state.saveClick };
    },
    [SHOW_COMPLETE_CONTAINER]: (state = initialState, action: any) => {
      return { ...state, completeShow: true };
    },
    [DELETE_COMPLETE_CONTAINER]: (state = initialState, action: any) => {
      return { ...state, completeShow: false };
    },
    [CROP_CONTAINER]: (state = initialState, action: any) => {
      return { ...state, cropUrl: action.payload };
    },
  },
  initialState
);
