import {types} from './types';

export const loadingAction = ({payload}: any) => ({
  type: types.LOADING_ACTION,
  payload,
});