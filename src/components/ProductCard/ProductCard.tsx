import { SecondaryButton, Rating, BestSeller } from '../../components';
import type { Product } from '../../types';

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const {name, description, price, best_seller, rating, img_name} = product;
  return (
    <div className="product-card">
      <BestSeller isBestSeller={best_seller} />
      <img src={`/assets/${img_name}`} alt="headphones" />
      <div className="bottom">
        <h1>{name}</h1>
        <p>
          {description}
        </p>
        <Rating stars={rating} />
        <div className="price-row">
          <span>${price}</span>
          <SecondaryButton>
            <span>Add to cart</span>
            <i className="bi bi-plus"></i>
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
};
