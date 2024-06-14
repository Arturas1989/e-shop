import { useEffect, useMemo } from 'react';
import { FilterFields, Product, Star } from '../../types';
import { filterBySearch } from '../../utils/helpers';

const resetOnInvalid = (fields: FilterFields) => {
  const validations = {
    query: () => true,
    price: (price: string) => ['asc', 'desc'].includes(price),
    stars: (star: string) => ['1', '2', '3', '4'].includes(star),
    best_seller: (best_seller: string) => best_seller === 'best_seller',
    in_stock: (in_stock: string) => in_stock === 'in_stock',
  };

  let field: keyof FilterFields;
  for (field in fields) {
    const isValid = validations[field](fields[field]);
    if (!isValid) fields[field] = '';
  }
};

type useFilterProps = {
  filterParams: URLSearchParams;
  products: Product[] | null;
  setData: React.Dispatch<React.SetStateAction<Product[] | null>>;
};

export const useFilter = ({ filterParams, products, setData }: useFilterProps) => {
  const fields = useMemo(() => {
    const filterFields: FilterFields = {
      query: filterParams.get('query') || '',
      price: filterParams.get('price') || '',
      stars: (filterParams.get('stars') || '') as Star,
      best_seller: filterParams.get('best_seller') || '',
      in_stock: filterParams.get('in_stock') || '',
    }

    resetOnInvalid(filterFields);

    return filterFields;
  }, [filterParams])

  const funcMap: {
    [K in keyof FilterFields]: (newData: Product[]) => Product[];
  } = useMemo(() => {
    return {
      query: (newData: Product[]) => filterBySearch(newData, fields.query),
      price: (newData: Product[]) => {
        if (fields.price === 'asc') {
          newData.sort((product1, product2) => product1.price - product2.price);
        } else {
          newData.sort((product1, product2) => product2.price - product1.price);
        }
        return newData;
      },
      stars: (newData: Product[]) =>
        newData.filter((product) => product.rating >= +fields.stars),
      best_seller: (newData: Product[]) =>
        newData.filter((product) => product.best_seller),
      in_stock: (newData: Product[]) =>
        newData.filter((product) => product.best_seller),
    };
  }, [fields.price, fields.stars]);

  useEffect(() => {
    if (products) {
      let newData: Product[] = [...products];
      let field: keyof FilterFields;
      for (field in fields) {
        if (fields[field]) {
          newData = funcMap[field](newData);
        }
      }
      setData(newData);
    }
  }, [products, setData, fields, funcMap]);
};
