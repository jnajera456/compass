import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './components/Header';

test('renders primary navigation with home and category links', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
  expect(
    screen.getByRole('navigation', { name: /primary/i })
  ).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /^home$/i })).toHaveAttribute(
    'href',
    '/'
  );
  expect(
    screen.getByRole('link', { name: /academic stress/i })
  ).toHaveAttribute('href', '/academic-stress');
});
