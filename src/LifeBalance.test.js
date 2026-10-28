import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LifeBalance from './pages/LifeBalance';

test('renders life balance topics and a verified sources list', () => {
  const { container } = render(
    <MemoryRouter>
      <LifeBalance />
    </MemoryRouter>
  );
  expect(
    screen.getByRole('heading', { name: /life balance/i })
  ).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /^sleep$/i })).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { name: /^sources$/i })
  ).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /about sleep/i })).toHaveAttribute(
    'href',
    'https://www.cdc.gov/sleep/about/index.html'
  );
  expect(container.querySelector('details')).toHaveAttribute('open');
});
