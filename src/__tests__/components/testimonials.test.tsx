import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Testimonials } from '../../pages/Home';

describe('Testimonial test', () => {
  test('render test', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Testimonials />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});