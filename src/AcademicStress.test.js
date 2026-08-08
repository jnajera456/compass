import { render, screen } from '@testing-library/react';
import AcademicStress from './pages/AcademicStress';

test('renders topic sections and a verified sources list', () => {
  render(<AcademicStress />);
  expect(
    screen.getByRole('heading', { name: /^academic stress$/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { name: /procrastination/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { name: /^sources$/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('link', { name: /american psychological association/i })
  ).toHaveAttribute('href', 'https://www.apa.org/topics/stress');
});
