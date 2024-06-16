import { useProductsContext } from '../../contexts/productContext';
import { ProductCard } from '../ProductCard/ProductCard';

type ProductsProps = {
  type?: string
}
export const Products = ({type}: ProductsProps) => {
  const { products, featuredProducts } = useProductsContext()!;
  let productsToDisplay = products
  if(type === 'featuredProducts'){
    productsToDisplay = featuredProducts;
  }
    return (
      <div className="products">
        {productsToDisplay &&
          productsToDisplay.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
      </div>
    );
  
};
