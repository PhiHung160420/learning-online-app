export interface IAction {
  type: string;
  payload?: any;
};

export interface IThemeState {
  appTheme: any,
  error: any
};

export const types = {
  LOADING_ACTION: 'LOADING_ACTION',
  TOGGLE_THEME_BEGIN: 'TOGGLE_THEME_BEGIN',
  TOGGLE_THEME_SUCCESS: 'TOGGLE_THEME_SUCCESS',
  TOGGLE_THEME_FAILURE: 'TOGGLE_THEME_FAILURE',
};