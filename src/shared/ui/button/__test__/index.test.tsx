import { Button } from 'shared/ui/button';
import { render } from '@testing-library/react';

describe('<Button/>', () => {
  it('should render button children', () => {
    const testChildren = 'test texts';
    const { getByText } = render(<Button children="test texts" />);
    expect(getByText(testChildren)).toBeInTheDocument();
  });
});
