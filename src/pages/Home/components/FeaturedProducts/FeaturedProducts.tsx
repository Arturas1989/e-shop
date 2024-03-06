import { Products } from '../../../../components/Products/Products';
import { useData } from '../../../../hooks/useData';
import { Product } from '../../../../types';

export const FeaturedProducts = () => {
  
  const products = useData<Product>('products');

  return (
    <section className="feature">
      <h2>Featured products</h2>
      <Products products={products}/>
    </section>
  );
};
