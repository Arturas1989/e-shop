import {Rating, BestSeller, AddContainer } from '../../components';
import type { Product } from '../../types';

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const {id, name, description, price, best_seller, rating, img_name} = product;
  
  return (
    <div className="product-card">
      <BestSeller isBestSeller={best_seller} />
      <div className="img-container">
        <img src={`/assets/${img_name}`} alt="headphones" />
      </div>
      <div className="bottom">
        <h1>{name}</h1>
        <p>
          {description}
        </p>
        <Rating stars={rating} />
        <div className="price-row">
          <span>${price}</span>
          <AddContainer id={id}/>
        </div>
      </div>
    </div>
  );
};
