import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Register } from '../../../../pages';

describe('Register page test', () => {
  test('render test', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Register />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});