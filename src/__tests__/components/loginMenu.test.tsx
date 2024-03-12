import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Header, SearchBar } from '../../components';

describe('login menu test', () => {
  test('login menu renders on click', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const accountIcon = screen.getByTestId('account-icon');
    expect(accountIcon).toBeInTheDocument();

    fireEvent.click(accountIcon);

    const loginMenu = screen.getByTestId('login-menu');
    expect(loginMenu).toBeInTheDocument();

    fireEvent.click(accountIcon);

    expect(loginMenu).not.toBeInTheDocument();

  });

  test('search bar isn\'t displayed when login menu displayed', () => {
    render(
      <BrowserRouter>
        <Header />
        <SearchBar />
      </BrowserRouter>
    );

    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();
    expect(header).toHaveClass('search-not-visible');

    const searchIcon = screen.getByTestId('search-icon');
    expect(searchIcon).toBeInTheDocument();
    fireEvent.click(searchIcon);

    expect(header).not.toHaveClass('search-not-visible');

    const accountIcon = screen.getByTestId('account-icon');
    expect(accountIcon).toBeInTheDocument();

    fireEvent.click(accountIcon);

    const loginMenu = screen.getByTestId('login-menu');
    expect(loginMenu).toBeInTheDocument();
    expect(header).toHaveClass('search-not-visible');

  });
});