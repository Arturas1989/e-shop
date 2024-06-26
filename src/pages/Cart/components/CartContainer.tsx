import { Product } from "../../../types";
import { CartCard } from "./Cartcard/CartCard";
import { Total } from "./Total";

type CartContainerProps = {
  products: Product[] | null;
};

export const CartContainer = ({ products }: CartContainerProps) => {
  return (
    <>
      {products?.map((product) => (
        <CartCard key={product.id} product={product} />
      ))}
      <Total products={products} />
    </>
  );
};
