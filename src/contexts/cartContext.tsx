import { ReactNode, createContext, useContext } from "react";
import { Cart } from "../services/Cart";
import { useCart } from "../hooks";

type CartContextProviderProps = {
  children: ReactNode;
};

type CartContextValue = {
  cart: Cart | null;
  setCart: React.Dispatch<React.SetStateAction<Cart | null>>;
  isLoading: boolean;
} | null;

const CartContext = createContext<CartContextValue>(null);

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const {cart, setCart, isLoading} = useCart();
  return (
    <CartContext.Provider value={{cart, setCart, isLoading}}>
      {children}
    </CartContext.Provider>
  )
};

export const useCartContext = () => useContext(CartContext);
