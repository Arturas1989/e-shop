import { Products } from '../../../../components/Products/Products';
import { Heading, Loading } from '../../../../components';
import { useProductsContext } from '../../../../contexts/productContext';

export const FeaturedProducts = () => {
  const {isFeaturedProductsLoading} = useProductsContext()!

  return (
    <section className="feature">
      <Heading>Featured products</Heading>
      {isFeaturedProductsLoading ? <Products type="featuredProducts"/> : <Loading />}
    </section>
  );
};
