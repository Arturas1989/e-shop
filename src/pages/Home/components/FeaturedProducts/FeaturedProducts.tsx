import { useEffect } from 'react';
import { Products } from '../../../../components/Products/Products';
import { useData } from '../../../../hooks/useData';
import { DataInfo, Product } from '../../../../types';
import { toast } from 'react-toastify';
import { Heading } from '../../../../components';

export const FeaturedProducts = () => {
  const dataInfo: DataInfo = {
    collectionName: 'products',
    onlyFeatured: true
  }
  const [products, error] = useData<Product>(dataInfo);

  useEffect(() => {
    if (error) toast.error(error);
  },[error]);

  return (
    <section className="feature">
      <Heading>Featured products</Heading>
      <Products products={products} />
    </section>
  );
};
