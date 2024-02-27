import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { ProductCard } from '../../components/ProductCard/ProductCard';

describe('footer components renders', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <ProductCard />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});