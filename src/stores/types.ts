export const DROPDOWN_STATE = 'DROPDOWN_STATE';
export interface IState {
  isDropdownShow: boolean;
  isClick: boolean;
}
export interface ChangeDropdownState {
  type: typeof DROPDOWN_STATE;
  isDropdownShow: boolean;
}
export type ChangeDropdownStateActionType = ChangeDropdownState;
