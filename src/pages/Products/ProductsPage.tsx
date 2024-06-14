import { Filter, ProductsCount } from "./components";
import { Products } from "../../components";

export const ProductsPage = () => {
  console.log('products page rendered')
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
