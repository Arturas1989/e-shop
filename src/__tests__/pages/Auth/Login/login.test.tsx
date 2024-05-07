import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Login } from '../../../../pages';
import { CartContextProvider } from '../../../../contexts/cartContext';

describe('Login page test', () => {
  test('render test', () => {
    const tree = renderer
      .create(
        <CartContextProvider>
          <BrowserRouter>
            <Login />
          </BrowserRouter>
        </CartContextProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
