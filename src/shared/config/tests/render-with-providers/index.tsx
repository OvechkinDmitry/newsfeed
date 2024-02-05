import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { ReactNode } from 'react';

export interface RenderWithProvidersOptions{
   route?: string;
}

export const renderWithProviders = (children: ReactNode, options: RenderWithProvidersOptions = {}) => {
  const { route = '/' } = options;
  return render(<MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>);
};
