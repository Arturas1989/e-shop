import { DocumentData, collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../db/firebase';
import { credentialsNotSet } from '../utils/helpers';
import type { DataInfo } from '../types';
import { toast } from 'react-toastify';



export const useData = <T extends DocumentData>(dataInfo: DataInfo) => {
  type UseData = [
    T[] | null, 
    boolean, 
    React.Dispatch<React.SetStateAction<T[] | null>>
  ];
  const {collectionName, onlyFeatured} = dataInfo
  const [data, setData] = useState<T[] | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (credentialsNotSet(db.app.options)) {
      toast.error(`${collectionName} failed to fetch`)
      setIsLoaded(true);
    } else {
      const colRef = collection(db, collectionName);
      getDocs(colRef).then((fireData) => {
        let data = fireData.docs.map((doc) => {
            let docData: unknown = {...doc.data(), id: doc.id as string};
            return docData as T;
          }
        );
        if(onlyFeatured) data = data.filter(product => product.isFeatured);
        setData(data);
        setIsLoaded(true);
      });
    }
  }, [collectionName, onlyFeatured]);
  return [data, isLoaded, setData] as UseData;
};
