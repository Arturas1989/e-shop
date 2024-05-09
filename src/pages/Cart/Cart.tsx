import { Heading } from "../../components";
import { ProductsCount, CartProducts } from "./components";

type CartProps = {
  name?: string;
};

export const Cart = ({ name }: CartProps) => {
  return (
    <main className="cart">
      <Heading>My Cart <ProductsCount/></Heading>
      <CartProducts />
    </main>
  )
};
