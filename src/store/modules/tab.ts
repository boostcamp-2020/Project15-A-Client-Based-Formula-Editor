import { createAction, handleActions } from 'redux-actions';

const CHANGE_TAB = 'tab/CHANGE_TAB' as const;
const ADD_TAB = 'tab/ADD_TAB' as const;

export const changeTab = createAction(CHANGE_TAB);
export const addTab = createAction(ADD_TAB);

type Action = ReturnType<typeof changeTab> | ReturnType<typeof addTab>;

export interface TabState {
  lastId: number;
  selectedTabId: number;
  tabList: { id: number; title: string }[];
}

const initialState = {
  lastId: 1,
  selectedTabId: 1,
  tabList: [{ id: 1, title: 'TAB1' }],
};

export const tabReducer = handleActions(
  {
    [CHANGE_TAB]: (state, action: Action) => {
      return { ...state, selectedTabId: action.payload };
    },
    [ADD_TAB]: (state, action: Action) => {
      return {
        ...state,
        lastId: state.lastId + 1,
        tabList: state.tabList.concat({ id: state.lastId + 1, title: 'TAB1' }),
      };
    },
  },
  initialState
);
