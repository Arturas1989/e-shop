import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Login } from '../../../../pages';

describe('Login page test', () => {
  test('render test', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});