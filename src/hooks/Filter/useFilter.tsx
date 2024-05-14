import { useEffect, useMemo } from 'react';
import { FilterFields, Product } from '../../types';

type useFilterProps = {
  fields: FilterFields;
  products: Product[] | null;
  setData: React.Dispatch<React.SetStateAction<Product[] | null>>;
};

export const useFilter = ({ fields, products, setData }: useFilterProps) => {
  const funcMap: {
    [K in keyof FilterFields]: (newData: Product[]) => Product[];
  } = useMemo(() => {
    return {
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
      let filterUrl = window.location.pathname + '?';
      for (field in fields) {
        filterUrl += `${field}=${fields[field]}&`;
        if (fields[field]) {
          newData = funcMap[field](newData);
        }
      }
      window.history.pushState(null, '', filterUrl.substring(0, filterUrl.length - 1))
      setData(newData);
    }
  }, [products, setData, fields, funcMap]);
};
