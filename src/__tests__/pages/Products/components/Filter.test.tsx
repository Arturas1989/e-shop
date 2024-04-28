import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Filter } from '../../../../pages/Products/components';

describe('Filter tests', () => {
  test('filter open close tests', () => {
    render(
      <BrowserRouter>
        <Filter/>
      </BrowserRouter>
    )
    const filter_open = screen.getByTestId("filter-open");
    fireEvent.click(filter_open);

    const filter = screen.queryByTestId('filter');
    expect(filter).toBeInTheDocument();

    fireEvent.click(filter_open);
    expect(filter).not.toBeInTheDocument();
    
    fireEvent.click(filter_open);
    const filter_close = screen.getByTestId('filter-close');
    fireEvent.click(filter_close);
    expect(filter).not.toBeInTheDocument();
  });

  test('clear filter on button click', () => {
    render(
      <BrowserRouter>
        <Filter/>
      </BrowserRouter>
    )
    const filter_open = screen.getByTestId("filter-open");
    fireEvent.click(filter_open);

    const priceSortInputs = screen.getAllByTestId('price');
    const starsInputs = screen.getAllByTestId('stars');
    const bestSellerInput = screen.getByTestId('best_seller');
    const inStockInput = screen.getByTestId('in_stock');

    fireEvent.click(priceSortInputs[0]);
    fireEvent.click(starsInputs[0]);
    fireEvent.click(bestSellerInput);
    fireEvent.click(inStockInput);

    expect(priceSortInputs[0]).toBeChecked();
    expect(starsInputs[0]).toBeChecked();
    expect(bestSellerInput).toBeChecked();
    expect(inStockInput).toBeChecked();

    const clearFilterButton = screen.getByTestId('clear-filter');
    fireEvent.click(clearFilterButton);

    expect(priceSortInputs[0]).not.toBeChecked();
    expect(starsInputs[0]).not.toBeChecked();
    expect(bestSellerInput).not.toBeChecked();
    expect(inStockInput).not.toBeChecked();
    
  });
});