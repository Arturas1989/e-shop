import { ReactNode, createContext, useContext } from "react";
import { Cart } from "../services/Cart";
import { useCart, useCartProducts } from "../hooks";
import { Product } from "../types";

type CartContextProviderProps = {
  children: ReactNode;
};

type CartContextValue = {
  cart: Cart | null;
  setCart: React.Dispatch<React.SetStateAction<Cart | null>>;
  isCartLoading: boolean;
  isProductsLoading: boolean;
  products: Product[] | null;
  setProducts: React.Dispatch<React.SetStateAction<Product[] | null>>;
} | null;

const CartContext = createContext<CartContextValue>(null);

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const {cart, setCart, isCartLoading} = useCart();
  const [isProductsLoading, products, setProducts] = useCartProducts(cart);
  return (
    <CartContext.Provider value={{cart, setCart, isCartLoading, isProductsLoading, products, setProducts}}>
      {children}
    </CartContext.Provider>
  )
};

export const useCartContext = () => useContext(CartContext);
