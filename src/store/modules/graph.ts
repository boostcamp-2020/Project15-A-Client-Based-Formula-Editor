import { createAction, handleActions } from 'redux-actions';

const CLICK_GRAPH_BUTTON = 'graph/CLICK_GRAPH_BUTTON' as const;

export const clickGraphButton = createAction(CLICK_GRAPH_BUTTON);

export interface GraphState {
  visible: boolean;
}
const initialState: GraphState = {
  visible: false,
};

export const graphReducer = handleActions(
  {
    [CLICK_GRAPH_BUTTON]: (state: GraphState = initialState) => {
      return { ...state, visible: !state.visible };
    },
  },
  initialState
);
