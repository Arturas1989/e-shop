import { DocumentData, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../db/firebase";
import type { Collection } from "../types/db/Collection";

export const useData = <T extends DocumentData>(colName: Collection) => {
  const [colData, setColData] = useState<T[] | null>(null);
  useEffect(() => {
    const colRef = collection(db, 'products')
    getDocs(colRef).then(fireData => {
      setColData(fireData.docs.map(doc => doc.data() as T));
    })
  }, [])
  return colData;
}