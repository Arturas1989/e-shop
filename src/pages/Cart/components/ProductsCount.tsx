import { useCartContext } from "../../../contexts/cartContext";

export const ProductsCount = () => {
  const { cart } = useCartContext()!;

  return (
    <span>({cart?.getProductsCount()})</span>
  )
};
