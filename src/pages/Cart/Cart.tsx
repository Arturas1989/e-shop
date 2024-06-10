import { Heading } from "../../components";
import { ProductsCount, CartProducts } from "./components";

export const Cart = () => {
  return (
    <main className="cart">
      <Heading>My Cart <ProductsCount/></Heading>
      <CartProducts />
    </main>
  )
};
