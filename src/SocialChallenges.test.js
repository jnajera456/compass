import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SocialChallenges from './pages/SocialChallenges';

beforeEach(() => {
  Element.prototype.scrollIntoView = jest.fn();
  window.matchMedia = jest.fn().mockReturnValue({ matches: true });
  window.requestAnimationFrame = callback => {
    callback();
    return 1;
  };
  window.cancelAnimationFrame = jest.fn();
});

test('renders social challenges topics and a verified sources list', () => {
  const { container } = render(
    <MemoryRouter>
      <SocialChallenges />
    </MemoryRouter>
  );
  expect(
    screen.getByRole('heading', { name: /social challenges/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { name: /making friends/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { name: /^sources$/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('link', { name: /social anxiety disorder/i })
  ).toHaveAttribute(
    'href',
    'https://www.nimh.nih.gov/health/publications/social-anxiety-disorder-more-than-just-shyness'
  );
  expect(container.querySelector('details')).toHaveAttribute('open');
});

test('opens and focuses Roommate Conflict from its hash', async () => {
  const { container } = render(
    <MemoryRouter
      initialEntries={['/social-challenges#roommateSection']}
    >
      <SocialChallenges />
    </MemoryRouter>
  );

  await waitFor(() => {
    expect(container.querySelector('#roommateSection')).toHaveAttribute('open');
  });
  expect(
    screen
      .getByRole('heading', { name: /roommate conflict/i })
      .closest('summary')
  ).toHaveFocus();
});
