import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ProductsCount } from '../../../../pages/Products/components/ProductsCount';
import { ProductContextProvider } from '../../../../contexts/productContext';

const renderProductsCount = () => {
  return render(
    <ProductContextProvider>
      <BrowserRouter>
        <ProductsCount />
      </BrowserRouter>
    </ProductContextProvider>
  )
}

describe('ProductsCount tests', () => {

  test('loading component renders when data is loading', () => {
    renderProductsCount();

    const loading = screen.getByTestId('loading');
    expect(loading).toBeInTheDocument();
  });
});