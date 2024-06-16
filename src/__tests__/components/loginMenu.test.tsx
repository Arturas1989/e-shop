import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from '../../components';
import { CartContextProvider } from '../../contexts/cartContext';
import { ProductContextProvider } from '../../contexts/productContext';

export const renderHeader = () => {
  render(
    <CartContextProvider>
      <ProductContextProvider>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </ProductContextProvider>
    </CartContextProvider>
  );
}
describe('login menu test', () => {
  test('login menu renders on click', () => {
    renderHeader();
    const accountIcon = screen.getByTestId('account-icon');
    expect(accountIcon).toBeInTheDocument();

    fireEvent.click(accountIcon);

    const loginMenu = screen.getByTestId('login-menu');
    expect(loginMenu).toBeInTheDocument();

    fireEvent.click(accountIcon);

    expect(loginMenu).not.toBeInTheDocument();

  });

  test('login menu disapears on other element click', () => {
    renderHeader();
    const accountIcon = screen.getByTestId('account-icon');
    fireEvent.click(accountIcon);

    const loginMenu = screen.getByTestId('login-menu');
    expect(loginMenu).toBeInTheDocument();

    fireEvent.click(document.body);
    expect(loginMenu).not.toBeInTheDocument();

  });

  test('search bar isn\'t displayed when login menu displayed', () => {
    renderHeader();

    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();
    expect(header).toHaveClass('search-not-visible');

    const searchIcon = screen.getAllByTestId('search-icon')[0];
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