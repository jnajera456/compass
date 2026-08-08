import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ComingSoon from './pages/ComingSoon';

test('renders the title and a back-to-home link', () => {
  render(
    <MemoryRouter>
      <ComingSoon title="Life Balance" />
    </MemoryRouter>
  );
  expect(
    screen.getByRole('heading', { name: /life balance/i })
  ).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /back to home/i })).toHaveAttribute(
    'href',
    '/'
  );
});
