import { handleActions } from 'redux-actions';

const DROPDOWN_STATE = 'DROPDOWN_STATE';
// IState를 설정한다.
export interface IState {
  isDropdownShow: boolean;
  isClick: boolean;
}
// 액션 타입을 정의해줍니다.
export interface ChangeDropdownState {
  type: typeof DROPDOWN_STATE;
  isDropdownShow: boolean;
}

// action의 리턴값 설정
export const ChangeDropdownDrawer = (
  isDropdownShow: boolean
): ChangeDropdownState => {
  return {
    type: DROPDOWN_STATE,
    isDropdownShow,
  };
};

// 모듈의 초기 상태를 정의합니다.
const initialState: IState = {
  isDropdownShow: false,
  isClick: false,
};
// handleActions 의 첫번째 파라미터는 액션을 처리하는 함수들로 이뤄진 객체이고
// 두번째 파라미터는 초기 상태입니다.
export const drawerDropdownHandler = handleActions(
  {
    [DROPDOWN_STATE]: (state = initialState, action: any): IState => {
      return {
        ...state,
        isDropdownShow: !state.isDropdownShow,
      };
    },
  },
  initialState
);
