import { Provider } from 'react-redux';
import { ReactNode } from 'react';
import { createReduxStore } from 'app/providers/store';

interface Props {
    children: ReactNode,
    // @todo заменить после поялвения типа
    preloadedState?: any,
}

export const StoreProvider = ({ children, preloadedState }: Props) => {
  const store = createReduxStore(preloadedState);
  return <Provider store={store}>{children}</Provider>;
};
