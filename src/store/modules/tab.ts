import { createAction, handleActions } from 'redux-actions';
import localstorage from '@src/utils/localstorage';

const CHANGE_TAB = 'tab/CHANGE_TAB' as const;
const ADD_TAB = 'tab/ADD_TAB' as const;
const UPDATE_TAB = 'tab/UPDATE_TAB' as const;

export const changeTab = createAction(CHANGE_TAB);
export const addTab = createAction(ADD_TAB);
export const updateTab = createAction(UPDATE_TAB);

type Action =
  | ReturnType<typeof changeTab>
  | ReturnType<typeof addTab>
  | ReturnType<typeof updateTab>;

export interface TabState {
  lastId: number;
  selectedTabId: number;
  tabList: {
    id: number;
    title: string;
    latex: string;
    fontColor: string;
    fontSize: number;
    fontAlign: string;
    fontDecline: boolean;
  }[];
}

const initialState = {
  lastId: localstorage.getLastId(),
  selectedTabId: 1,
  tabList: [
    {
      id: 1,
      title: 'TAB1',
      latex: 'blank',
      fontColor: 'black',
      fontSize: 15,
      fontAlign: 'center',
      fontDecline: true,
    },
  ],
};

export const tabReducer = handleActions(
  {
    [CHANGE_TAB]: (state, action: Action) => {
      return { ...state, selectedTabId: action.payload };
    },
    [ADD_TAB]: (state) => {
      return {
        ...state,
        lastId: state.lastId + 1,
        tabList: state.tabList.concat({
          id: state.lastId + 1,
          title: `TAB${state.lastId + 1}`,
          latex: 'blank',
          fontColor: 'black',
          fontSize: 15,
          fontDecline: false,
          fontAlign: 'center',
        }),
      };
    },
    [UPDATE_TAB]: (state, action: Action) => {
      return {
        ...state,
        tabList: action.payload,
      };
    },
  },
  initialState
);
