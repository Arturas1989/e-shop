import { type ReactNode } from "react";
import { useCartContext } from "../../../contexts/cartContext";
import { Cart } from "../../../services/Cart";

type SecondaryButtonProps = {
  id?: string;
  children: ReactNode;
};

export const SecondaryButton = ({ id, children }: SecondaryButtonProps) => {
  const {cart, setCart} = useCartContext()!;
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = e.currentTarget as EventTarget & {id: string};
    const addToCart = async(cart: Cart, id: string, quantity: number) => {
      const newCart = cart.makeCopy();
      await newCart.addToCart(id, quantity);
      setCart(newCart);
    }
    if(cart) addToCart(cart, target.id, 1)
  }
  return (
    <button id={id} onClick={(e) => handleClick(e)} className="secondary-button">
      {children}
    </button>
  )
};
