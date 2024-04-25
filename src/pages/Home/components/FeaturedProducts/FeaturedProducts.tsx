import { Products } from '../../../../components/Products/Products';
import { useData } from '../../../../hooks/useData';
import { DataInfo, Product } from '../../../../types';
import { Heading, Loading } from '../../../../components';

export const FeaturedProducts = () => {
  const dataInfo: DataInfo = {
    collectionName: 'products',
    onlyFeatured: true
  }
  const [products, isLoaded] = useData<Product>(dataInfo);

  return (
    <section className="feature">
      <Heading>Featured products</Heading>
      {isLoaded ? <Products products={products}/> : <Loading />}
    </section>
  );
};
