import { Product } from "../../../types";

type TotalProps = {
  products: Product[] | null;
};

export const Total = ({ products }: TotalProps) => {
  let total;
  if(products)total = products.reduce((acc, product) => acc + product.price * product.quantity!, 0);
  return (
    <div className="total-row">
      <h2>Total amount:</h2>
      <span>{total}$</span>
    </div>
  )
};

