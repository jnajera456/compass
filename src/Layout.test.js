import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';

beforeEach(() => {
  window.scrollTo = jest.fn();
});

test('moves focus to the destination heading after route navigation', async () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<h1 tabIndex="-1">Home page</h1>} />
          <Route
            path="/academic-stress"
            element={<h1 tabIndex="-1">Academic Stress</h1>}
          />
        </Route>
      </Routes>
    </MemoryRouter>
  );

  fireEvent.click(screen.getByRole('link', { name: /academic stress/i }));

  await waitFor(() => {
    expect(
      screen.getByRole('heading', { name: /academic stress/i })
    ).toHaveFocus();
  });
  expect(window.scrollTo).toHaveBeenCalledWith({
    top: 0,
    left: 0,
    behavior: 'auto',
  });
});
