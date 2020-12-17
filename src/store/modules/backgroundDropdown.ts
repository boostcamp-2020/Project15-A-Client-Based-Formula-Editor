import { createAction, handleActions } from 'redux-actions';

const CHANGE_DROPDOWN = 'backgroundDropdown/CHANGE_DROPDOWN' as const;
const GET_CANVAS = 'backgroundDropdown/GET_CANVAS' as const;
const WINTER_DROPDOWN = 'backgroundDropdown/WINTER_DROPDOWN' as const;
const SUMMER_DROPDOWN = 'backgroundDropdown/SUMMER_DROPDOWN' as const;
const CLOSE_DROPDOWN = 'backgroundDropdown/CLOSE_DROPDOWN' as const;

export const showBackgroundDropdown = createAction(CHANGE_DROPDOWN);
export const getCanvas = createAction(GET_CANVAS);
export const showWinter = createAction(WINTER_DROPDOWN);
export const showSummer = createAction(SUMMER_DROPDOWN);
export const closeBackgroundDropdown = createAction(CLOSE_DROPDOWN);

type Action =
  | ReturnType<typeof showBackgroundDropdown>
  | ReturnType<typeof getCanvas>
  | ReturnType<typeof showWinter>
  | ReturnType<typeof showSummer>
  | ReturnType<typeof closeBackgroundDropdown>;

export interface BackgroundState {
  backgroundDropdown: boolean;
  backgroundCanvas: any;
  winterBackground: boolean;
  summerBackground: boolean;
}
const initialState: BackgroundState = {
  backgroundDropdown: false,
  backgroundCanvas: '',
  winterBackground: false,
  summerBackground: false,
};

export const BackgroundDropdownHandler = handleActions(
  {
    [CHANGE_DROPDOWN]: (state: BackgroundState = initialState) => {
      return {
        ...state,
        backgroundDropdown: !state.backgroundDropdown,
      };
    },
    [GET_CANVAS]: (state: BackgroundState = initialState, action: Action) => {
      return {
        ...state,
        backgroundCanvas: action.payload,
      };
    },
    [WINTER_DROPDOWN]: (state: BackgroundState = initialState) => {
      return {
        ...state,
        winterBackground: !state.winterBackground,
      };
    },
    [SUMMER_DROPDOWN]: (state: BackgroundState = initialState) => {
      return {
        ...state,
        summerBackground: !state.summerBackground,
      };
    },
    [CLOSE_DROPDOWN]: (state: BackgroundState = initialState) => {
      return { ...state, backgroundDropdown: false };
    },
  },
  initialState
);
