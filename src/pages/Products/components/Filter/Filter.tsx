import { useState } from 'react';
import { FilterOpenButton, InputGroup } from '../../components';
import { useInitialData, useFilter } from '../../../../hooks';
import { useFilterParams } from '../../../../hooks/Filter/useFilterParams';
import { type Product, FilterFields } from '../../../../types';

type FilterProps = {
  setData: React.Dispatch<React.SetStateAction<Product[] | null>>;
  productData: Product[] | null;
};

export const Filter = ({ setData, productData }: FilterProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const { fields, setFields } = useFilterParams();
  const products = useInitialData(productData);
  
  useFilter({ products, fields, setData });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFields((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.type === 'checkbox' &&
        prev[e.target.name as keyof FilterFields]
          ? ''
          : e.target.id,
    }));
  };

  return (
    <div>
      {isVisible && (
        <div className="filter" data-testid="filter">
          <div className="filter-top">
            <h2>Filters</h2>
            <button
              data-testid="filter-close"
              onClick={() => setIsVisible(false)}
            >
              <i className="bi bi-x-lg"></i>
            </button>
          </div>
          <div className="filter-group">
            <h3>sort by</h3>
            <InputGroup
              handleChange={handleChange}
              fields={fields}
              className="input-group"
              type="radio"
              name="price"
              id="asc"
            >
              Price - Low to High
            </InputGroup>
            <InputGroup
              handleChange={handleChange}
              fields={fields}
              className="input-group"
              type="radio"
              name="price"
              id="desc"
            >
              Price - High to Low
            </InputGroup>
          </div>
          <div className="filter-group">
            <h3>rating</h3>
            <InputGroup
              handleChange={handleChange}
              fields={fields}
              className="input-group"
              type="radio"
              name="stars"
              id="4"
            >
              4 Stars & Above
            </InputGroup>
            <InputGroup
              handleChange={handleChange}
              fields={fields}
              className="input-group"
              type="radio"
              name="stars"
              id="3"
            >
              3 Stars & Above
            </InputGroup>
            <InputGroup
              handleChange={handleChange}
              fields={fields}
              className="input-group"
              type="radio"
              name="stars"
              id="2"
            >
              2 Stars & Above
            </InputGroup>
            <InputGroup
              handleChange={handleChange}
              fields={fields}
              className="input-group"
              type="radio"
              name="stars"
              id="1"
            >
              1 Star & Above
            </InputGroup>
          </div>
          <div className="filter-group">
            <h3>other filters</h3>
            <InputGroup
              handleChange={handleChange}
              fields={fields}
              className="input-group"
              type="checkbox"
              name="best_seller"
              id="best_seller"
            >
              Best Seller Only
            </InputGroup>
            <InputGroup
              handleChange={handleChange}
              fields={fields}
              className="input-group"
              type="checkbox"
              name="in_stock"
              id="in_stock"
            >
              INSTOCK Only
            </InputGroup>
          </div>
          <button
            data-testid="clear-filter"
            onClick={() =>
              setFields({ price: '', stars: '', best_seller: '', in_stock: '' })
            }
          >
            <span>clear filter</span>
          </button>
        </div>
      )}
      <FilterOpenButton setIsVisible={setIsVisible} />
    </div>
  );
};
