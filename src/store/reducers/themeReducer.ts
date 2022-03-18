import { IThemeState } from './../actions/types';
import {types} from 'store/actions/types';
import { selectedTheme } from 'utils/themes';

const initThemeState: IThemeState = {
  appTheme: selectedTheme,
  error: null
};

const themeReducer = (state: IThemeState = initThemeState, action: any) => {
  switch (action.type) {
    case types.TOGGLE_THEME_BEGIN:
      return {
        ...state,
        error: null
      }
    case types.TOGGLE_THEME_SUCCESS:
      return {
        ...state,
        appTheme: action.payload.selectedTheme
      }
    case types.TOGGLE_THEME_FAILURE:
      return {
        ...state,
        error: action.payload.error
      }
    default:
      return state;
  }
};

export default themeReducer;