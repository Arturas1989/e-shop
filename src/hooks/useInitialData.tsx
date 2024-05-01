import { useEffect, useState } from 'react';
import { Product } from '../types';

export const useInitialData = (data: Product[] | null) => {
  const [initialData, setInitialData] = useState<null | Product[]>(null);
  const [isSet, setIsSet] = useState(false);
  useEffect(() => {
    if (data) {
      if(!isSet) {
        const dataCopy = [...data];
        setInitialData(dataCopy);
        setIsSet(true);
      }
    }
  }, [data, isSet]);

  return initialData;
};
