import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { Product } from '../../types';
import { CartContextProvider } from '../../contexts/cartContext';

describe('ProductCard components renders', () => {
  test('renders correctly', () => {
    const product: Product = {
      id: '',
      name: 'headphones',
      description: 'this is headphones',
      price: 99,
      rating: 5,
      best_seller: false,
      img_name: 'headphones.jpg',
      isFeatured: false
    }
    const tree = renderer
      .create(
        <CartContextProvider>
          <BrowserRouter>
            <ProductCard product={product} />
          </BrowserRouter>
        </CartContextProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});