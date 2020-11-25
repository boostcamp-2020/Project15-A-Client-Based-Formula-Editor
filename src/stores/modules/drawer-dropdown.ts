import { createAction, handleActions } from 'redux-actions';

const DROPDOWN = 'DROPDOWN';
const dropdownEvent = createAction(DROPDOWN);
interface InitialState {
  openState: boolean;
}

const initialState: InitialState = {
  openState: false,
};

export default dropdownEvent;
