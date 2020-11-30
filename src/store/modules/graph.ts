import { createAction, handleActions } from 'redux-actions';

const CLICK_GRAPHBUTTON = 'CLICK_GRAPHBUTTON';
export const clickButton = createAction(CLICK_GRAPHBUTTON);

export interface GraphState {
  visible: boolean;
}
const initialState: GraphState = {
  visible: false,
};

export const graphHandler = handleActions(
  {
    [CLICK_GRAPHBUTTON]: (state: GraphState) => {
      return { ...state, visible: !state.visible };
    },
  },
  initialState
);
