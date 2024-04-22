import { DocumentData, collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../db/firebase';
import { credentialsNotSet } from '../utils/helpers';
import type { DataInfo } from '../types';


export const useData = <T extends DocumentData>(dataInfo: DataInfo) => {

  const {collectionName, onlyFeatured} = dataInfo
  const [colData, setColData] = useState<T[] | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (credentialsNotSet(db.app.options)) {
      setError(`${collectionName} failed to fetch`);
    } else {
      const colRef = collection(db, collectionName);
      getDocs(colRef).then((fireData) => {
        let data = fireData.docs.map((doc) => doc.data() as T);
        if(onlyFeatured) data = data.filter(product => product.isFeatured);
        setColData(data);
      });
    }
  }, [collectionName, onlyFeatured]);
  return [colData, error] as [T[] | null, string];
};
