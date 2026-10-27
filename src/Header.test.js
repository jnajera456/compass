import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './components/Header';

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

test('renders primary navigation with home and category links', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
  expect(
    screen.getByRole('navigation', { name: /primary/i })
  ).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /^home$/i })).toHaveAttribute(
    'href',
    '/'
  );
  expect(
    screen.getByRole('link', { name: /academic stress/i })
  ).toHaveAttribute('href', '/academic-stress');
  expect(
    screen.getByRole('link', { name: /compass home/i }).querySelector('img')
  ).toHaveAttribute('src', '/compass/compass.svg');
});
