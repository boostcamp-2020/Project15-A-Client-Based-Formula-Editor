import { createAction, handleActions } from 'redux-actions';

const DROPDOWN_STATE = 'DROPDOWN_STATE' as const;
const CLOSE = 'drawerDropdown/CLOSE';
// IState를 설정한다.
export interface IState {
  isDropdownShow: boolean;
  isClick: boolean;
}

export const dropdown = createAction(DROPDOWN_STATE);
export const closeDropdown = createAction(CLOSE);

// action의 리턴값 설정

// 모듈의 초기 상태를 정의합니다.
const initialState: IState = {
  isDropdownShow: false,
  isClick: false,
};

// handleActions 의 첫번째 파라미터는 액션을 처리하는 함수들로 이뤄진 객체이고
// 두번째 파라미터는 초기 상태입니다.
export const drawerDropdownHandler = handleActions(
  {
    [DROPDOWN_STATE]: (state = initialState): IState => {
      return {
        ...state,
        isDropdownShow: !state.isDropdownShow,
      };
    },
    [CLOSE]: (state = initialState) => {
      return { ...state, isDropdownShow: false };
    },
  },
  initialState
);
