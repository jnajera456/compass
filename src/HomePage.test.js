import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';

test('renders the Academic Stress navigation link', () => {
  render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  );
  const link = screen.getByText(/academic stress/i);
  expect(link).toBeInTheDocument();
});
