import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Header, SearchBar } from '../../components';

describe('test description', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <SearchBar />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('search bar visible class changes correctly in the header', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();

    expect(header).toHaveClass('search-not-visible');

    const searchIcon = screen.getByTestId('search-icon');
    expect(searchIcon).toBeInTheDocument();

    fireEvent.click(searchIcon);
    expect(header).not.toHaveClass('search-not-visible');
    
  });
});