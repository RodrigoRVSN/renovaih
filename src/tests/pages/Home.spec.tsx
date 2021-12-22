import Home from '@App/pages';
import { render } from '@testing-library/react';

const data = {
  name: 'Rodrigo Victor',
};

describe('Home page', () => {
  it('should renders correctly', () => {
    render(<Home data={data} />);
  });
});
