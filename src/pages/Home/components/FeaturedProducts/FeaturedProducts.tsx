import { useEffect } from 'react';
import { Products } from '../../../../components/Products/Products';
import { useData } from '../../../../hooks/useData';
import { Product } from '../../../../types';
import { toast } from 'react-toastify';

export const FeaturedProducts = () => {
  const [products, error] = useData<Product>('products');

  useEffect(() => {
    if (error) toast.error(error);
  },[error]);

  return (
    <section className="feature">
      <h2>Featured products</h2>
      <Products products={products} />
    </section>
  );
};
