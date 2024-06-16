import { useCartContext } from "../../contexts/cartContext";
import { useCartProducts } from "../../hooks";
import { Loading } from "../Loading/Loading";

export const CartItemsCount = () => {
  const {cart} = useCartContext()!;
  const [isLoading, products] = useCartProducts(cart);
  return (
    isLoading ? <Loading /> :
    <i className="bi bi-cart-fill">
      <div className="cart-items">{products?.length}</div>
    </i>
  );
};
