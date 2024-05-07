import renderer from 'react-test-renderer';
import { fireEvent, screen, render } from '@testing-library/react';
import { Header } from '../../components';
import { BrowserRouter } from 'react-router-dom';
import { CartContextProvider } from '../../contexts/cartContext';

describe('header components renders', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(
        <CartContextProvider>
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        </CartContextProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('hamburger renders correctly and items on click changes correctly', () => {
    render(
      <CartContextProvider>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </CartContextProvider>
    );
    const hamburger = screen.getByTestId('hamburger');
    expect(hamburger).toBeInTheDocument();

    fireEvent.click(hamburger);
    const closeIcon = screen.getByText('close menu');
    expect(closeIcon).toBeInTheDocument();

    const menu = screen.getByTestId('menu');
    expect(menu).toBeInTheDocument();

    fireEvent.click(hamburger);
    const hamburgerIcon = screen.getByText('menu');
    expect(hamburgerIcon).toBeInTheDocument();
  });
});
