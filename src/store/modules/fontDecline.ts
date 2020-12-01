import { createAction, handleActions } from 'redux-actions';

const DECLINE_STATE = 'DECLINE_STATE' as const;
// IState를 설정한다.
export interface DeclineState {
  isDecline: boolean;
}

export const decline = createAction(DECLINE_STATE);
// action의 리턴값 설정

// 모듈의 초기 상태를 정의합니다.
const initialState: DeclineState = {
  isDecline: false,
};

// handleActions 의 첫번째 파라미터는 액션을 처리하는 함수들로 이뤄진 객체이고
// 두번째 파라미터는 초기 상태입니다.
export const declineHandler = handleActions(
  {
    [DECLINE_STATE]: (state = initialState, action: any): DeclineState => {
      return {
        ...state,
        isDecline: !state.isDecline,
      };
    },
  },
  initialState
);
