import loadingReducer from 'store/reducers/LoadingReducer';
import { combineReducers } from 'redux';
import themeReducer from 'store/reducers/themeReducer';

export default {
  rootReducer: combineReducers({
    loading: loadingReducer,
    theme: themeReducer
  }),
};