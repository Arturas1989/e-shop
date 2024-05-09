import { Product } from '../../../../types';

type CartCardProps = {
  product: Product;
};

export const CartCard = ({ product }: CartCardProps) => {
  const { img_name, name, price } = product;
  return (
    <div className="card-container">
      <div className="left-col">
        <img src={`/assets/${img_name}`} alt="cart product" />
        <div className="product-container">
          <p>{name}</p>
          <button>Remove</button>
        </div>
      </div>
      <p className="right-col">{price}$</p>
    </div>
  );
};
