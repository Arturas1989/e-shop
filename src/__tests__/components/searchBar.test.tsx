import renderer from 'react-test-renderer';
import { fireEvent, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { SearchBar } from '../../components';
import { CartContextProvider } from '../../contexts/cartContext';
import { ProductContextProvider } from '../../contexts/productContext';
import { renderHeader } from './loginMenu.test';

describe('test description', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(
        <CartContextProvider>
          <ProductContextProvider>
            <BrowserRouter>
              <SearchBar />
            </BrowserRouter>
          </ProductContextProvider>
        </CartContextProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('search bar visible class changes correctly in the header by clicking header search icon', () => {
    renderHeader();
    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();

    expect(header).toHaveClass('search-not-visible');

    const headerSearchIcon = screen.getAllByTestId('search-icon')[0];
    expect(headerSearchIcon).toBeInTheDocument();

    fireEvent.click(headerSearchIcon);
    expect(header).not.toHaveClass('search-not-visible');
  });

  test('search bar visible class changes correctly in the header by clicking menu search icon', () => {
    renderHeader();
    
    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();

    expect(header).toHaveClass('search-not-visible');

    const menuSearchIcon = screen.getAllByTestId('search-icon')[0];
    expect(menuSearchIcon).toBeInTheDocument();

    fireEvent.click(menuSearchIcon);
    expect(header).not.toHaveClass('search-not-visible');
  });
});
