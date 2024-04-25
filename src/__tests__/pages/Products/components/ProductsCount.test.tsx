import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ProductsCount } from '../../../../pages/Products/components/ProductsCount';

describe('ProductsCount tests', () => {
  test('loading component renders when data is loading', () => {
    render(
      <BrowserRouter>
        <ProductsCount isLoaded={false} productsCount={1} />
      </BrowserRouter>
    )

    const loading = screen.getByTestId('loading');

    expect(loading).toBeInTheDocument();
  });

  test('loading component doesn\'t render when data is loaded', () => {
    render(
      <BrowserRouter>
        <ProductsCount isLoaded={true} productsCount={1} />
      </BrowserRouter>
    )

    const loading = screen.queryByTestId('loading');

    expect(loading).not.toBeInTheDocument();
  });
});