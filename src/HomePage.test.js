import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';

const originalPublicUrl = process.env.PUBLIC_URL;

beforeAll(() => {
  process.env.PUBLIC_URL = '/compass';
});

afterAll(() => {
  if (originalPublicUrl === undefined) {
    delete process.env.PUBLIC_URL;
    return;
  }
  process.env.PUBLIC_URL = originalPublicUrl;
});

test('renders links to all four category pages', () => {
  render(
    <MemoryRouter basename="/compass" initialEntries={['/compass/']}>
      <HomePage />
    </MemoryRouter>
  );
  expect(
    screen.getByRole('link', { name: /academic stress/i })
  ).toHaveAttribute('href', '/compass/academic-stress');
  expect(
    screen.getByRole('link', { name: /emotional well-being/i })
  ).toHaveAttribute('href', '/compass/emotional-wellbeing');
  expect(
    screen.getByRole('link', { name: /social challenges/i })
  ).toHaveAttribute('href', '/compass/social-challenges');
  expect(screen.getByRole('link', { name: /life balance/i })).toHaveAttribute(
    'href',
    '/compass/life-balance'
  );
  expect(
    screen.getByRole('img', {
      name: /compass logo combining a profile and navigation needle/i,
    })
  ).toHaveAttribute('src', '/compass/compass-mark.svg');
  expect(
    screen.getByRole('heading', {
      level: 1,
      name: /find your way through college life/i,
    })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('link', { name: /explore the four directions/i })
  ).toHaveAttribute('href', '#directions');
});
