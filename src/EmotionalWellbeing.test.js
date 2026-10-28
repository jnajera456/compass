import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import EmotionalWellbeing from './pages/EmotionalWellbeing';

beforeEach(() => {
  Element.prototype.scrollIntoView = jest.fn();
  window.matchMedia = jest.fn().mockReturnValue({ matches: true });
  window.requestAnimationFrame = callback => {
    callback();
    return 1;
  };
  window.cancelAnimationFrame = jest.fn();
});

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

test('opens and focuses Low Mood from its hash', async () => {
  const { container } = render(
    <MemoryRouter
      initialEntries={['/emotional-wellbeing#lowMoodSection']}
    >
      <EmotionalWellbeing />
    </MemoryRouter>
  );

  await waitFor(() => {
    expect(container.querySelector('#lowMoodSection')).toHaveAttribute('open');
  });
  expect(
    screen.getByRole('heading', { name: /low mood/i }).closest('summary')
  ).toHaveFocus();
});
