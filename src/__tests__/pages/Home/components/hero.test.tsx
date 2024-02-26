import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Hero } from '../../../../pages/Home/components/Hero/Hero';

describe('footer components renders', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Hero />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});