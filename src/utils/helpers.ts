import { FirebaseOptions } from "@firebase/app";
import { Product } from "../types";

export const credentialsNotSet = (options: FirebaseOptions) => {
  for (const option in options) {
    if (!options[option as keyof FirebaseOptions]) return true;
  }
  return false;
};

export const filterBySearch = (products: Product[], searchVal: string) => {
  return products.filter(product => product.description.includes(searchVal) 
  || product.name.includes(searchVal));
}

export const isNumber = (val: string) => {
  if(!val.length) return true;
  if(val === '0') return false;
  const char = val[val.length - 1];
  return char.charCodeAt(0) >= '0'.charCodeAt(0) && char.charCodeAt(0) <= '9'.charCodeAt(0);
}