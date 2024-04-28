import type { Product } from '../../types';
import { ProductCard } from '../ProductCard/ProductCard';

type ProductsProps = {
  products: Product[] | null;
};

export const Products = ({ products }: ProductsProps) => {
  return (
    <div className="products">
      {products &&
        products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
    </div>
  );
};
