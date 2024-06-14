import { ReactNode, createContext, useContext } from "react";
import { DataInfo, Product } from "../types";
import { useData } from "../hooks";

type ProductContextProviderProps = {
  children: ReactNode;
};

type ProductContextValue = {
  products: Product[] | null;
  setProducts: React.Dispatch<React.SetStateAction<Product[] | null>>;
  isProductsLoading: boolean;
  featuredProducts: Product[] | null;
  setFeatured: React.Dispatch<React.SetStateAction<Product[] | null>>;
  isFeaturedProductsLoading: boolean;
} | null;

const ProductContext = createContext<ProductContextValue>(null);

export const ProductContextProvider = ({ children }: ProductContextProviderProps) => {
  const productsInfo: DataInfo = {
    collectionName: 'products',
    onlyFeatured: false,
  }
  const [products, isProductsLoading, setProducts] = useData<Product>(productsInfo);
  const featuredInfo: DataInfo = {
    collectionName: 'products',
    onlyFeatured: true
  }
  const [featuredProducts, isFeaturedProductsLoading, setFeatured] = useData<Product>(featuredInfo);

  const contextVal = {
    products, isProductsLoading, setProducts, featuredProducts, setFeatured, isFeaturedProductsLoading
  }
  return (
    <ProductContext.Provider value={contextVal}>
      {children}
    </ProductContext.Provider>
  )
};

export const useProductsContext = () => useContext(ProductContext);
