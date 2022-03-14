import loadingReducer from 'store/reducers/LoadingReducer';
import { combineReducers } from 'redux';

export default {
  rootReducer: combineReducers({
    loading: loadingReducer
  }),
};