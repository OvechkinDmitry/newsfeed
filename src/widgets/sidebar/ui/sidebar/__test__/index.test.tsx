import { fireEvent, render } from '@testing-library/react';
import { Sidebar } from 'widgets/sidebar/ui/sidebar/sidebar';
import { renderWithProviders } from 'shared/config/tests';

describe('<Sidebar/>', () => {
  it('should handle toggling', () => {
    const { getByTestId, container } = renderWithProviders(<Sidebar />);
    const button = container.querySelector('.button');
    fireEvent.click(button);
    expect(getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
