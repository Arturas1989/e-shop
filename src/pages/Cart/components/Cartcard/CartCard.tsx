import { useState } from 'react';
import { AddCount } from '../../../../components';
import { useCartContext } from '../../../../contexts/cartContext';
import { deleteFromCart } from '../../../../services/Cart';
import { Product } from '../../../../types';

type CartCardProps = {
  product: Product;
};

export const CartCard = ({ product }: CartCardProps) => {
  const { img_name, name, price, id, quantity } = product;
  const [count, setCount] = useState<number | string>(quantity!);
  const {cart, setCart} = useCartContext()!;

  const handleDelete = (productId: string) => {
    if(cart) deleteFromCart(productId, cart, setCart);
  }
  return (
    <div className="card-container card">
      <div className="left-col">
        <img src={`/assets/${img_name}`} alt="cart product" />
        <div className="product-container">
          <p>{name}</p>
          <button onClick={() => handleDelete(id)} id={id}>Remove</button>
        </div>
      </div>
      <div className="right-col">
        <AddCount id={id} count={count} setCount={setCount} />
        <p>{quantity!*price}$</p>
      </div>
    </div>
  );
};
