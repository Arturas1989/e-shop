import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Register } from '../../../../pages';
import { CartContextProvider } from '../../../../contexts/cartContext';

describe('Register page test', () => {
  test('render test', () => {
    const tree = renderer
      .create(
        <CartContextProvider>
          <BrowserRouter>
            <Register />
          </BrowserRouter>
        </CartContextProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
