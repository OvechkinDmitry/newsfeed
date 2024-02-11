import { configureStore } from '@reduxjs/toolkit';

// @todo заменить any на тип
export function createReduxStore(preloadedState?: any) {
  return configureStore({
    reducer: {},
    devTools: __IS_DEV__,
    preloadedState,
  });
}
