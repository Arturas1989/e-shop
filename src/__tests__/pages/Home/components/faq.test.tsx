import renderer from 'react-test-renderer';
import { fireEvent, screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Faq } from '../../../../pages/Home';

describe('Faq tests', () => {
  test('render test', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Faq />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('question expand test', () => {
      render(
        <BrowserRouter>
          <Faq />
        </BrowserRouter>
      )
      const expandIcon = screen.getAllByTestId('expand-control-icon')[0];
      
      fireEvent.click(expandIcon);
      const expandedAnswer = screen.getAllByTestId('expanded-answer')[0];
      expect(expandedAnswer).toBeInTheDocument();

      fireEvent.click(expandIcon);
      expect(expandedAnswer).not.toBeInTheDocument();
  });
});