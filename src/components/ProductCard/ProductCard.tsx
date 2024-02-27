import { BestSeller } from './BestSeller/BestSeller';
import { Rating } from './Rating/Rating';

type ProductCardProps = {
  name?: string;
};

export const ProductCard = ({ name }: ProductCardProps) => {
  return (
    <div className="product-card">
      <BestSeller isBestSeller={true} />
      <img src={`/assets/${name}.png`} alt="headphones" />
      <div className="bottom">
        <h1>headphones</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          magni sunt quidem impedit voluptate praesentium maiores? Recusandae,
          sequi, reiciendis iste in dolorum molestiae odio exercitationem autem
          nulla ad maiores repellendus.
        </p>
        <Rating stars={5} />
        <div className="price-row">
          <span>$99</span>
          <button>
            <span>Add to cart</span>
            <i className="bi bi-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
