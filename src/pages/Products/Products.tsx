import { useData } from "../../hooks/useData";
import { DataInfo, Product } from "../../types";
import { ProductsCount } from "./components/ProductsCount";

type ProductsProps = {
  name?: string;
};

export const Products = ({ name }: ProductsProps) => {
  const dataInfo: DataInfo = {
    collectionName: 'products',
    onlyFeatured: false,
  }
  const [products] = useData<Product>(dataInfo);
  return (
    <main>
      <section className="products-top">
        <ProductsCount productsCount={products?.length}/>
      </section>
    </main>
  )
};
