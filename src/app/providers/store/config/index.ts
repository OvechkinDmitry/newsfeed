import { combineReducers, configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/store/config/types';
import { User } from 'entities/user';

const rootReducer = combineReducers<StateSchema>({
  user: User.reducer,
});

export function createReduxStore(preloadedState?: any) {
  return configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState,
  });
}
