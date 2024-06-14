import { Loading } from "../../../components";
import { useProductsContext } from "../../../contexts/productContext";

export const ProductsCount = () => {
  const {products, isProductsLoading} = useProductsContext()!
  return (
    isProductsLoading ? <h2>All products ({products?.length})</h2> : <Loading />
  )
};
