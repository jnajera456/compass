import { fireEvent, render, screen } from '@testing-library/react';
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

beforeEach(() => {
  window.scrollTo = jest.fn();
  window.requestAnimationFrame = callback => {
    callback();
    return 1;
  };
});

function renderHeader() {
  return render(
    <MemoryRouter basename="/compass" initialEntries={['/compass/']}>
      <Header />
    </MemoryRouter>
  );
}

test('renders primary navigation with home and category links', () => {
  renderHeader();
  expect(
    screen.getByRole('navigation', { name: /primary/i })
  ).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /^home$/i })).toHaveAttribute(
    'href',
    '/compass'
  );
  expect(
    screen.getByRole('link', { name: /academic stress/i })
  ).toHaveAttribute('href', '/compass/academic-stress');
  expect(
    screen.getByRole('link', { name: /compass home/i }).querySelector('img')
  ).toHaveAttribute('src', '/compass/compass.svg');
});

test('toggles the responsive menu and returns focus on Escape', () => {
  renderHeader();

  const menuButton = screen.getByRole('button', { name: /menu/i });
  expect(menuButton).toHaveAttribute('aria-expanded', 'false');

  fireEvent.click(menuButton);
  expect(menuButton).toHaveAttribute('aria-expanded', 'true');

  fireEvent.keyDown(document, { key: 'Escape' });
  expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  expect(menuButton).toHaveFocus();
});

test('closes the responsive menu when the current route is selected', () => {
  renderHeader();

  const menuButton = screen.getByRole('button', { name: /menu/i });
  fireEvent.click(menuButton);
  fireEvent.click(screen.getByRole('link', { name: /^home$/i }));

  expect(menuButton).toHaveAttribute('aria-expanded', 'false');
});
