import { useSearchParams } from 'react-router-dom';

export const useFilterParams = () => {
  const [filterParams, setFilterParams] = useSearchParams({
    price: '',
    stars: '',
    best_seller: '',
    in_stock: '',
  })
  
  return { filterParams, setFilterParams };
};
