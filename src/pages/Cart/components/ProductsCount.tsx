import { useCartContext } from "../../../contexts/cartContext";
import { useCartProducts } from "../../../hooks";

export const ProductsCount = () => {
  const {cart} = useCartContext()!;
  const [, products] = useCartProducts(cart);

  return (
    <span>({products?.length})</span>
  )
};
