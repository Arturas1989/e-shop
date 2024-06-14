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