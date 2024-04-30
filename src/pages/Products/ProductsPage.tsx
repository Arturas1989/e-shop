import { useData } from "../../hooks/useData";
import { DataInfo, Product } from "../../types";
import { Filter, ProductsCount } from "./components";
import { Products } from "../../components";

type ProductsProps = {
  name?: string;
};

export const ProductsPage = ({ name }: ProductsProps) => {
  const dataInfo: DataInfo = {
    collectionName: 'products',
    onlyFeatured: false,
  }
  const [products, isLoaded] = useData<Product>(dataInfo);
  return (
    <main className="products-page">
      <section className="products-top">
        <ProductsCount productsCount={products?.length} isLoaded={isLoaded} />
        <Filter />
      </section>
      <section>
        <Products products={products} />
      </section>
    </main>
  )
};
