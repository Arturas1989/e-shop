import { Filter, ProductsCount } from "./components";
import { Products } from "../../components";

export const ProductsPage = () => {
  return (
    <main className="products-page">
      <section className="products-top">
        <ProductsCount />
        <Filter />
      </section>
      <section>
        <Products/>
      </section>
    </main>
  )
};
