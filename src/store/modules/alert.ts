import { createAction, handleActions } from 'redux-actions';

const CHANGE_ALERT_MODE = 'alert/CHANGE_ALERT_MODE' as const;

export const changeAlertMode = createAction(CHANGE_ALERT_MODE);

type Action = ReturnType<typeof changeAlertMode>;

export interface AlertModeState {
  mode: number;
  toggle: boolean;
}

const initialState = {
  mode: 0,
  toggle: false,
};

export const alertReducer = handleActions(
  {
    [CHANGE_ALERT_MODE]: (state, action: Action) => {
      if (state.toggle)
        return { ...state, mode: action.payload, toggle: false };
      return { ...state, mode: action.payload, toggle: true };
    },
  },
  initialState
);
