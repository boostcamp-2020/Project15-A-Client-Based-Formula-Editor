import { createAction, handleActions } from 'redux-actions';

const GET_MATHQUILL_CONTAINER = 'saveMode/GET_MATHQUILL_CONTAINER' as const;
const CLICK_SAVE_BUTTON = 'saveMode/CLICK_SAVE_BUTTON' as const;
const SHOW_CROP_MODAL = 'saveMode/SHOW_CROP_MODAL' as const;
const EXIT_CROP_MODAL = 'saveMode/EXIT_CROP_MODAL' as const;
const SHOW_MORE_BUTTON = 'saveMode/SHOW_MORE_BUTTON' as const;
const HIDDEN_MORE_BUTTON = 'saveMode/HIDDEN_MORE_BUTTON' as const;
const CROP_IMAGE = 'saveMode/CROP_CONTAINER' as const;

export const getMathQuillContainer = createAction(GET_MATHQUILL_CONTAINER);
export const clickSaveButton = createAction(CLICK_SAVE_BUTTON);
export const showCropModal = createAction(SHOW_CROP_MODAL);
export const exitCropModal = createAction(EXIT_CROP_MODAL);
export const showMoreButton = createAction(SHOW_MORE_BUTTON);
export const hiddenMoreButton = createAction(HIDDEN_MORE_BUTTON);
export const cropImage = createAction(CROP_IMAGE);

type Action =
  | ReturnType<typeof getMathQuillContainer>
  | ReturnType<typeof clickSaveButton>
  | ReturnType<typeof showCropModal>
  | ReturnType<typeof exitCropModal>
  | ReturnType<typeof showMoreButton>
  | ReturnType<typeof hiddenMoreButton>
  | ReturnType<typeof cropImage>;

export interface SaveModeState {
  mathQuillContainer: any;
  cropModal: boolean;
  saveButtonActive: boolean;
  moreButtonActive: boolean;
  cropUrl: string;
}

const initialState = {
  mathQuillContainer: '',
  cropModal: false,
  saveButtonActive: false,
  moreButtonActive: false,
  cropUrl: '',
};

export const saveModeReducer = handleActions(
  {
    [GET_MATHQUILL_CONTAINER]: (
      state: SaveModeState = initialState,
      action: Action
    ) => {
      return { ...state, mathQuillContainer: action.payload };
    },
    [CLICK_SAVE_BUTTON]: (state: SaveModeState = initialState) => {
      return { ...state, saveButtonActive: !state.saveButtonActive };
    },
    [SHOW_CROP_MODAL]: (state: SaveModeState = initialState) => {
      return { ...state, cropModal: true };
    },
    [EXIT_CROP_MODAL]: (state: SaveModeState = initialState) => {
      return { ...state, cropModal: false };
    },
    [SHOW_MORE_BUTTON]: (state: SaveModeState = initialState) => {
      return { ...state, moreButtonActive: true };
    },
    [HIDDEN_MORE_BUTTON]: (state: SaveModeState = initialState) => {
      return { ...state, moreButtonActive: false };
    },
    [CROP_IMAGE]: (state: SaveModeState = initialState, action: Action) => {
      return { ...state, cropUrl: action.payload };
    },
  },
  initialState
);
