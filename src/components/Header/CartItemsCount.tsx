import { useCartContext } from "../../contexts/cartContext";
import { Loading } from "../Loading/Loading";

export const CartItemsCount = () => {
  console.log('items count render')
  const {cart, isLoading} = useCartContext()!;
  const count = cart?.products ? Object.keys(cart?.products).length : 0;
  return (
    isLoading ? <Loading /> :
    <i className="bi bi-cart-fill">
      <div className="cart-items">{count}</div>
    </i>
  );
};
