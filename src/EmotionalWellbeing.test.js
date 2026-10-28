import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import EmotionalWellbeing from './pages/EmotionalWellbeing';

test('renders emotional well-being topics and a verified sources list', () => {
  const { container } = render(
    <MemoryRouter>
      <EmotionalWellbeing />
    </MemoryRouter>
  );
  expect(
    screen.getByRole('heading', { name: /emotional well-being/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { name: /^anxiety$/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { name: /^sources$/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('link', { name: /anxiety disorders/i })
  ).toHaveAttribute(
    'href',
    'https://www.nimh.nih.gov/health/topics/anxiety-disorders'
  );
  expect(container.querySelector('details')).toHaveAttribute('open');
});
