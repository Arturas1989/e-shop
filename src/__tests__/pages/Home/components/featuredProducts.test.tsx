import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { FeaturedProducts } from '../../../../pages/Home';

describe('FeaturedProducts components renders', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <FeaturedProducts />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});