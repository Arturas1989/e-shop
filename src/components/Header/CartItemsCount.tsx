import { useCartContext } from "../../contexts/cartContext";
import { Loading } from "../Loading/Loading";

export const CartItemsCount = () => {
  console.log('items count render')
  const {cart, isLoading} = useCartContext()!;
  return (
    isLoading ? <Loading /> :
    <i className="bi bi-cart-fill">
      <div className="cart-items">{cart?.getProductsCount()}</div>
    </i>
  );
};
