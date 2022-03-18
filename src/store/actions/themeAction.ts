import { lightTheme } from './../../utils/themes/index';
import { AppThunk } from 'store';
import { darkTheme } from 'utils/themes';
import {IAction, types} from './types';
import I18n from 'utils/language/i18n';

export const toggleThemeBegin = (): IAction => ({
  type: types.TOGGLE_THEME_BEGIN
});

export const toggleThemeSuccess = (selectedTheme: any): IAction => ({
  type: types.TOGGLE_THEME_SUCCESS,
  payload: {selectedTheme}
});

export const toggleThemeFailure = (error: string) : IAction => ({
  type: types.TOGGLE_THEME_FAILURE,
  payload: {error}
});

export const toggleTheme = (themeType: string): AppThunk => {
  return dispatch => { 
    dispatch(toggleThemeBegin());

    switch(themeType) {
      case 'dark': 
        dispatch(toggleThemeSuccess(darkTheme));
        break;
      case 'light':
        dispatch(toggleThemeSuccess(lightTheme));
        break;
      default: 
        dispatch(toggleThemeFailure(I18n.t('THEME_ACTION_INVALID_THEME_TYPE')));
    }
  }
};