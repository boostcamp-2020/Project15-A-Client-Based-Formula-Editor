import { ChangeDropdownDrawer } from './actions';
import { ChangeDropdownStateActionType, DROPDOWN_STATE, IState } from './types';

const initialState: IState = {
  isDropdownShow: false,
  isClick: false,
};

const reducer = (
  state = initialState,
  action: ChangeDropdownStateActionType
): IState => {
  switch (action.type) {
    case DROPDOWN_STATE:
      return {
        ...state,
        isDropdownShow: !state.isDropdownShow,
      };
    default:
      return state;
  }
};
export default reducer;
