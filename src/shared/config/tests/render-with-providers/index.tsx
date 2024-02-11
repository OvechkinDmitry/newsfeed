import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { StoreProvider } from 'app/providers/store';

export interface RenderWithProvidersOptions{
   route?: string;
   initialState?: any;
}

export const renderWithProviders = (children: ReactNode, options: RenderWithProvidersOptions = {}) => {
  const { route = '/', initialState } = options;
  return render(
    <StoreProvider preloadedState={initialState}>
      <MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>
    </StoreProvider>,
  );
};
