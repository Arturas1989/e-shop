import { calcCartTotal } from "../../../services/Cart";
import { Product } from "../../../types";

type TotalProps = {
  products: Product[] | null;
};

export const Total = ({ products }: TotalProps) => {
  let total;
  if(products) total = calcCartTotal(products);
  return (
    <div className="total-row">
      <h2>Total amount:</h2>
      <span>{total}$</span>
    </div>
  )
};

