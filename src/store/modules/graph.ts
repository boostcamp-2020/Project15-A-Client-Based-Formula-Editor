import { createAction, handleActions } from 'redux-actions';

const CLICK_GRAPHBUTTON = 'graph/CLICK_GRAPHBUTTON';
export const clickButton = createAction(CLICK_GRAPHBUTTON);

export interface GraphState {
  visible: boolean;
}
const initialState: GraphState = {
  visible: false,
};

export const graphReducer = handleActions(
  {
    [CLICK_GRAPHBUTTON]: (state: GraphState) => {
      return { ...state, visible: !state.visible };
    },
  },
  initialState
);
