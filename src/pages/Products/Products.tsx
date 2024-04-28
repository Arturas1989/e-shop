import { useData } from "../../hooks/useData";
import { DataInfo, Product } from "../../types";
import { Filter, ProductsCount } from "./components";

type ProductsProps = {
  name?: string;
};

export const Products = ({ name }: ProductsProps) => {
  const dataInfo: DataInfo = {
    collectionName: 'products',
    onlyFeatured: false,
  }
  const [products, isLoaded] = useData<Product>(dataInfo);
  console.log('products renders')
  return (
    <main>
      <section className="products-top">
        <ProductsCount productsCount={products?.length} isLoaded={isLoaded} />
        <Filter />
      </section>
    </main>
  )
};
