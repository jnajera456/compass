import { render, screen } from '@testing-library/react';
import SocialChallenges from './pages/SocialChallenges';

test('renders social challenges topics and a verified sources list', () => {
  render(<SocialChallenges />);
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
});
