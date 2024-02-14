import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

test('Page Not Found', () => {
  const badRoute = '/abc';

  render(
    <MemoryRouter initialEntries={[badRoute]}>
      <App />
    </MemoryRouter>
  );
  
  expect(screen.getByText(/page not found/i)).toBeInTheDocument();
});

test('Home', () => {
  const homeRoute = '/';

  render(
    <MemoryRouter initialEntries={[homeRoute]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByTestId('home')).toBeInTheDocument();
});
