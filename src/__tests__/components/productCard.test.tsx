import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { Product } from '../../types';

describe('ProductCard components renders', () => {
  test('renders correctly', () => {
    const product: Product = {
      name: 'headphones',
      description: 'this is headphones',
      price: 99,
      rating: 5,
      best_seller: false,
      img_name: 'headphones.jpg'
    }
    const tree = renderer
      .create(
        <BrowserRouter>
          <ProductCard product={product} />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});