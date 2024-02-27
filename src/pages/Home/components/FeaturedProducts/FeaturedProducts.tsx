import { ProductCard } from "../../../../components/ProductCard/ProductCard";

type FeaturedProductsProps = {
  name?: string;
};

export const FeaturedProducts = ({ name }: FeaturedProductsProps) => {
  return (

    <section className="feature">
      <h2>Featured products</h2>
      <div className="products">
        <ProductCard name="headphones" />
        <ProductCard name="printer" />
        <ProductCard name="laptop" />
      </div>
    </section>
  )
};
