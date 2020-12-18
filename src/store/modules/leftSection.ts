import { createAction, handleActions } from 'redux-actions';

const CHANGE_FOMULAR = 'mathquill/CHANGE_FOMULAR' as const;

export const changeFomula = createAction(CHANGE_FOMULAR);

type Action = ReturnType<typeof changeFomula>;

export interface LeftSectionState {
  name: string;
}

const initialState = {
  name: '',
};

export const leftSectionReducer = handleActions(
  {
    [CHANGE_FOMULAR]: (
      state: LeftSectionState = initialState,
      action: Action
    ) => {
      return { ...state, name: action.payload };
    },
  },
  initialState
);
