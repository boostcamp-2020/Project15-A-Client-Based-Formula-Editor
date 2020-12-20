import { createAction, handleActions } from 'redux-actions';

const CHANGE_DECLINE = 'fontDecline/CHANGE_DECLINE' as const;
const LOAD_DECLINE = 'fontDecline/LOAD_DECLINE' as const;

export const changeDecline = createAction(CHANGE_DECLINE);
export const loadDeline = createAction(LOAD_DECLINE);
type Action = ReturnType<typeof changeDecline> | ReturnType<typeof loadDeline>;

export interface DeclineState {
  fontDecline: boolean;
}

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
    [LOAD_DECLINE]: (state: DeclineState = initialState, action: Action) => {
      return {
        ...state,
        fontDecline: action.payload,
      };
    },
  },
  initialState
);
