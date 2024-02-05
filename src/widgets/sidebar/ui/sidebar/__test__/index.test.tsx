import { fireEvent, render } from '@testing-library/react';
import { Sidebar } from 'widgets/sidebar/ui/sidebar/sidebar';
import { RenderWithRouter } from 'shared/config/tests';

describe('<Sidebar/>', () => {
  it('should handle toggling', () => {
    const { getByTestId, container } = render(<RenderWithRouter><Sidebar /></RenderWithRouter>);
    const button = container.querySelector('.button');
    fireEvent.click(button);
    expect(getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
