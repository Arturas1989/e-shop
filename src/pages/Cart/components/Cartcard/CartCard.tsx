import { useCartContext } from '../../../../contexts/cartContext';
import { deleteFromCart } from '../../../../services/Cart';
import { Product } from '../../../../types';

type CartCardProps = {
  product: Product;
};

export const CartCard = ({ product }: CartCardProps) => {
  const { img_name, name, price, id } = product;
  const {cart, setCart} = useCartContext()!;

  const handleDelete = (productId: string) => {
    if(cart) deleteFromCart(productId, cart, setCart);
  }
  return (
    <div className="card-container">
      <div className="left-col">
        <img src={`/assets/${img_name}`} alt="cart product" />
        <div className="product-container">
          <p>{name}</p>
          <button onClick={() => handleDelete(id)} id={id}>Remove</button>
        </div>
      </div>
      <p className="right-col">{price}$</p>
    </div>
  );
};
