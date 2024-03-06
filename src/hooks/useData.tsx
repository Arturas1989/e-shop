import { DocumentData, collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../db/firebase';
import { credentialsNotSet } from '../utils/helpers';
import type { Collection } from '../types';


export const useData = <T extends DocumentData>(colName: Collection) => {
  const [colData, setColData] = useState<T[] | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (credentialsNotSet(db.app.options)) {
      setError(`${colName} failed to fetch`);
    } else {
      const colRef = collection(db, colName);
      getDocs(colRef).then((fireData) => {
        setColData(fireData.docs.map((doc) => doc.data() as T));
      });
    }
  }, [colName]);
  return [colData, error] as [T[] | null, string];
};
