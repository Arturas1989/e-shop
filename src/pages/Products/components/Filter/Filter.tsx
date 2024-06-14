import { useState } from 'react';
import { FilterOpenButton, InputGroup } from '../../components';
import { useInitialData, useFilter, useFilterParams } from '../../../../hooks';
import { useProductsContext } from '../../../../contexts/productContext';

export const Filter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const {products: productData, setProducts: setData} = useProductsContext()!

  const { filterParams, setFilterParams } = useFilterParams();
  const products = useInitialData(productData);
  
  useFilter({ products, filterParams, setData });

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
              setFilterParams={setFilterParams}
              filterParams={filterParams}
              className="input-group"
              type="radio"
              name="price"
              id="asc"
            >
              Price - Low to High
            </InputGroup>
            <InputGroup
              setFilterParams={setFilterParams}
              filterParams={filterParams}
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
              setFilterParams={setFilterParams}
              filterParams={filterParams}
              className="input-group"
              type="radio"
              name="stars"
              id="4"
            >
              4 Stars & Above
            </InputGroup>
            <InputGroup
              setFilterParams={setFilterParams}
              filterParams={filterParams}
              className="input-group"
              type="radio"
              name="stars"
              id="3"
            >
              3 Stars & Above
            </InputGroup>
            <InputGroup
              setFilterParams={setFilterParams}
              filterParams={filterParams}
              className="input-group"
              type="radio"
              name="stars"
              id="2"
            >
              2 Stars & Above
            </InputGroup>
            <InputGroup
              setFilterParams={setFilterParams}
              filterParams={filterParams}
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
              setFilterParams={setFilterParams}
              filterParams={filterParams}
              className="input-group"
              type="checkbox"
              name="best_seller"
              id="best_seller"
            >
              Best Seller Only
            </InputGroup>
            <InputGroup
              setFilterParams={setFilterParams}
              filterParams={filterParams}
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
              setFilterParams({
                price: '',
                stars: '',
                best_seller: '',
                in_stock: '',
              })
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
