import { createAction, handleActions } from 'redux-actions';

// 액션 타입을 정의해줍니다.
const DROPDOWN_STATE = 'DROPDOWN_STATE';
export interface IState {
  isDropdownShow: boolean;
  isClick: boolean;
}
export interface ChangeDropdownState {
  type: typeof DROPDOWN_STATE;
  isDropdownShow: boolean;
}
export type ChangeDropdownStateActionType = ChangeDropdownState;

export const ChangeDropdownDrawer = (
  isDropdownShow: boolean
): ChangeDropdownStateActionType => {
  return {
    type: DROPDOWN_STATE,
    isDropdownShow,
  };
};

// 액션 생성 함수를 만듭니다.
export const drawerDropdown = createAction(DROPDOWN_STATE);

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
      return { ...state, isDropdownShow: !state.isDropdownShow };
    },
    // action 객체를 참조하지 않으니까 이렇게 생략을 할 수도 있겠죠?
    // state 부분에서 비구조화 할당도 해주어서 코드를 더욱 간소화시켰습니다.
  },
  initialState
);
