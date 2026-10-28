import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AcademicStress from './pages/AcademicStress';

beforeEach(() => {
  Element.prototype.scrollIntoView = jest.fn();
  window.matchMedia = jest.fn().mockReturnValue({ matches: true });
  window.requestAnimationFrame = callback => {
    callback();
    return 1;
  };
  window.cancelAnimationFrame = jest.fn();
});

function renderAcademicStress(initialEntry = '/academic-stress') {
  return render(
    <MemoryRouter initialEntries={[initialEntry]}>
      <AcademicStress />
    </MemoryRouter>
  );
}

test('renders topic disclosures and a verified sources list', () => {
  const { container } = renderAcademicStress();
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
  expect(container.querySelector('#procrastinationSection')).toHaveAttribute(
    'open'
  );
  expect(container.querySelector('#timeSection')).not.toHaveAttribute('open');
});

test('opens and focuses a topic from the initial hash', async () => {
  const { container } = renderAcademicStress('/academic-stress#timeSection');

  await waitFor(() => {
    expect(container.querySelector('#timeSection')).toHaveAttribute('open');
  });
  expect(
    screen.getByRole('heading', { name: /time management/i }).closest('summary')
  ).toHaveFocus();
  expect(Element.prototype.scrollIntoView).toHaveBeenCalled();
});

test('opens a new disclosure when selected', async () => {
  const { container } = renderAcademicStress();
  fireEvent.click(screen.getByText('Time Management').closest('summary'));

  await waitFor(() => {
    expect(container.querySelector('#timeSection')).toHaveAttribute('open');
  });
});

test('allows the active disclosure to close', () => {
  const { container } = renderAcademicStress();
  fireEvent.click(screen.getByText('Procrastination').closest('summary'));

  expect(
    container.querySelector('#procrastinationSection')
  ).not.toHaveAttribute('open');
});

test('falls back to the first topic for an invalid hash', () => {
  const { container } = renderAcademicStress(
    '/academic-stress#not-a-real-topic'
  );

  expect(container.querySelector('#procrastinationSection')).toHaveAttribute(
    'open'
  );
});
