import { fireEvent, render } from '@testing-library/react';
import { Sidebar } from 'widgets/sidebar/ui/sidebar/sidebar';

describe('<Sidebar/>', () => {
  it('should handle toggling', () => {
    const { getByText, getByTestId } = render(<Sidebar />);
    const button = getByText('collapse');
    fireEvent.click(button);
    expect(getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
