import { render, screen } from '@testing-library/react';
import LifeBalance from './pages/LifeBalance';

test('renders life balance topics and a verified sources list', () => {
  render(<LifeBalance />);
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
});
