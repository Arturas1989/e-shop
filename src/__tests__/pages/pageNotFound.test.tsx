import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { PageNotFound } from '../../pages';

describe('footer components renders', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <PageNotFound />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});