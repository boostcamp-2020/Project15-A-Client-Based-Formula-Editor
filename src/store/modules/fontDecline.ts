import { createAction, handleActions } from 'redux-actions';

const CHANGE_DECLINE = 'fontDecline/CHANGE_DECLINE' as const;

export interface DeclineState {
  fontDecline: boolean;
}

export const changeDecline = createAction(CHANGE_DECLINE);

const initialState: DeclineState = {
  fontDecline: false,
};

export const fontDeclineReducer = handleActions(
  {
    [CHANGE_DECLINE]: (state: DeclineState = initialState) => {
      return {
        ...state,
        fontDecline: !state.fontDecline,
      };
    },
  },
  initialState
);
