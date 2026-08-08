import { render, screen } from '@testing-library/react';
import Resources from './pages/Resources';

test('renders crisis lines and the professional-help disclaimer', () => {
  render(<Resources />);
  expect(
    screen.getByRole('heading', { name: /988 suicide and crisis lifeline/i })
  ).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /call 988/i })).toHaveAttribute(
    'href',
    'tel:988'
  );
  expect(
    screen.getByText(/not a substitute for professional help/i)
  ).toBeInTheDocument();
});
