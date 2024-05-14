import { useEffect, useState } from 'react';
import { FilterFields, Star } from '../../types';

const checkFields = (fields: FilterFields) => {
  const validations = {
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

export const useFilterParams = () => {
  const [fields, setFields] = useState<FilterFields>({
    price: '',
    stars: '',
    best_seller: '',
    in_stock: '',
  });
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const price = searchParams.get('price' as keyof FilterFields) || '';
    const stars = (searchParams.get('stars' as keyof FilterFields) || '') as Star;
    const best_seller = searchParams.get('best_seller' as keyof FilterFields) || '';
    const in_stock = searchParams.get('in_stock' as keyof FilterFields) || '';
    const paramsFields = { price, stars, best_seller, in_stock };
    checkFields(paramsFields);
    setFields(paramsFields);
  }, []);
  return { fields, setFields };
};
