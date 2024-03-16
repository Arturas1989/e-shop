import renderer from 'react-test-renderer';
import { fireEvent, screen, render } from '@testing-library/react';
import { Header } from '../../components';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../db/firebase';

describe('header components renders', () => {
  test('renders correctly', () => {
    initializeApp(firebaseConfig);
    const tree = renderer
      .create(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('hamburger renders correctly and items on click changes correctly', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const hamburger = screen.getByTestId('hamburger');
    expect(hamburger).toBeInTheDocument();

    fireEvent.click(hamburger);
    const closeIcon = screen.getByText('close menu');
    expect(closeIcon).toBeInTheDocument();

    const menu = screen.getByTestId('menu');
    expect(menu).toBeInTheDocument();

    fireEvent.click(hamburger);
    const hamburgerIcon = screen.getByText('menu');
    expect(hamburgerIcon).toBeInTheDocument();
  });
});
