import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Header, SearchBar } from '../../components';
import { CartContextProvider } from '../../contexts/cartContext';

describe('test description', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(
        <CartContextProvider>
          <BrowserRouter>
            <SearchBar />
          </BrowserRouter>
        </CartContextProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('search bar visible class changes correctly in the header by clicking header search icon', () => {
    render(
      <CartContextProvider>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </CartContextProvider>
    );
    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();

    expect(header).toHaveClass('search-not-visible');

    const headerSearchIcon = screen.getByTestId('search-icon');
    expect(headerSearchIcon).toBeInTheDocument();

    fireEvent.click(headerSearchIcon);
    expect(header).not.toHaveClass('search-not-visible');
  });

  test('search bar visible class changes correctly in the header by clicking menu search icon', () => {
    render(
      <CartContextProvider>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </CartContextProvider>
    );
    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();

    expect(header).toHaveClass('search-not-visible');

    const menuSearchIcon = screen.getByTestId('search-icon2');
    expect(menuSearchIcon).toBeInTheDocument();

    fireEvent.click(menuSearchIcon);
    expect(header).not.toHaveClass('search-not-visible');
  });
});
