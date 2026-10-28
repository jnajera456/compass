import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LifeBalance from './pages/LifeBalance';

beforeEach(() => {
  Element.prototype.scrollIntoView = jest.fn();
  window.matchMedia = jest.fn().mockReturnValue({ matches: true });
  window.requestAnimationFrame = callback => {
    callback();
    return 1;
  };
  window.cancelAnimationFrame = jest.fn();
});

test('renders life balance topics and a verified sources list', () => {
  const { container } = render(
    <MemoryRouter>
      <LifeBalance />
    </MemoryRouter>
  );
  expect(
    screen.getByRole('heading', { name: /life balance/i })
  ).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /^sleep$/i })).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { name: /^sources$/i })
  ).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /about sleep/i })).toHaveAttribute(
    'href',
    'https://www.cdc.gov/sleep/about/index.html'
  );
  expect(container.querySelector('details')).toHaveAttribute('open');
});

test('opens and focuses Money Stress from its hash', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/life-balance#moneySection']}>
      <LifeBalance />
    </MemoryRouter>
  );

  await waitFor(() => {
    expect(container.querySelector('#moneySection')).toHaveAttribute('open');
  });
  expect(
    screen.getByRole('heading', { name: /money stress/i }).closest('summary')
  ).toHaveFocus();
});
