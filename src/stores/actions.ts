import { ChangeDropdownStateActionType, DROPDOWN_STATE } from './types';

export const ChangeDropdownDrawer = (
  isDropdownShow: boolean
): ChangeDropdownStateActionType => {
  return {
    type: DROPDOWN_STATE,
    isDropdownShow,
  };
};
