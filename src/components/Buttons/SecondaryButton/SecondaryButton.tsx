import { type ReactNode } from "react";
import { useCartContext } from "../../../contexts/cartContext";
import { addToCart } from "../../../services/Cart";

type SecondaryButtonProps = {
  id?: string;
  count?: number | string;
  disabled?: boolean
  children: ReactNode;
};

export const SecondaryButton = ({ id, children, count, disabled }: SecondaryButtonProps) => {
  const {cart, setCart} = useCartContext()!;
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = e.currentTarget as EventTarget & {id: string};
    if(cart && count) addToCart(cart, target.id, +count, setCart);
  }
  return (
    <button id={id} onClick={(e) => handleClick(e)} className="secondary-button" disabled={disabled}>
      {children}
    </button>
  )
};
