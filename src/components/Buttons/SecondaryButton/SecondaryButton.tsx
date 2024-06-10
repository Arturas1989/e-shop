import { type ReactNode } from "react";
import { useCartContext } from "../../../contexts/cartContext";
import { addToCart } from "../../../services/Cart";

type SecondaryButtonProps = {
  id?: string;
  children: ReactNode;
};

export const SecondaryButton = ({ id, children }: SecondaryButtonProps) => {
  const {cart, setCart} = useCartContext()!;
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = e.currentTarget as EventTarget & {id: string};
    if(cart) addToCart(cart, target.id, 1, setCart);
  }
  return (
    <button id={id} onClick={(e) => handleClick(e)} className="secondary-button">
      {children}
    </button>
  )
};
