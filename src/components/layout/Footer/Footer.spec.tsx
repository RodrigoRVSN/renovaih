import { render, screen } from '@testing-library/react';
import { Footer } from '@App/components/layout/Footer';
import { socialList } from './Footer.config';

describe('<Footer />', () => {
  it('Should render footer correctly', () => {
    render(<Footer />);

    socialList.forEach((contact) => {
      expect(screen.getByText(contact.title)).toBeInTheDocument();
    });
  });
});
