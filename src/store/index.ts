import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {AnyAction, applyMiddleware, createStore} from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';
import modules from './modules';

const middleware = applyMiddleware(thunk);

const store = createStore(modules.rootReducer, middleware);

export default store;

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof modules.rootReducer>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>