import { combineReducers } from 'redux';
import { fontDropDownReducer, FontDropDownState } from './font-dropdown';

export default combineReducers({
  fontDropDownReducer,
});

export interface RootState {
  fontDropDownReducer: FontDropDownState;
}
