import { createAction, handleActions } from 'redux-actions';

const SHOW_BACKGROUND_DROPDOWN = 'backgroundDropdown/SHOW_BACKGROUND_DROPDOWN' as const;
const GET_CANVAS = 'backgroundDropdown/GET_CANVAS' as const;
const SHOW_WINTER = 'backgroundDropdown/SHOW_WINTER' as const;
const SHOW_SUMMER = 'backgroundDropdown/SHOW_SUMMER' as const;
const CLOSE_BACKGROUND_DROPDOWN = 'backgroundDropdown/CLOSE_BACKGROUND_DROPDOWN' as const;

export const showBackgroundDropdown = createAction(SHOW_BACKGROUND_DROPDOWN);
export const getCanvas = createAction(GET_CANVAS);
export const showWinter = createAction(SHOW_WINTER);
export const showSummer = createAction(SHOW_SUMMER);
export const closeBackgroundDropdown = createAction(CLOSE_BACKGROUND_DROPDOWN);

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

export const backgroundDropdownReducer = handleActions(
  {
    [SHOW_BACKGROUND_DROPDOWN]: (state: BackgroundState = initialState) => {
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
    [SHOW_WINTER]: (state: BackgroundState = initialState) => {
      return {
        ...state,
        winterBackground: !state.winterBackground,
      };
    },
    [SHOW_SUMMER]: (state: BackgroundState = initialState) => {
      return {
        ...state,
        summerBackground: !state.summerBackground,
      };
    },
    [CLOSE_BACKGROUND_DROPDOWN]: (state: BackgroundState = initialState) => {
      return { ...state, backgroundDropdown: false };
    },
  },
  initialState
);
