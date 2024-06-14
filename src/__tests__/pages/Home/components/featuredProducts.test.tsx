import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { FeaturedProducts } from '../../../../pages/Home';
import { ProductContextProvider } from '../../../../contexts/productContext';

describe('Products tests', () => {
  test('FeaturedProducts component renders correctly', () => {
    const tree = renderer
      .create(
        <ProductContextProvider>
          <BrowserRouter>
            <FeaturedProducts />
          </BrowserRouter>
        </ProductContextProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});