import { Loading } from '../../../components';
import { useCartContext } from '../../../contexts/cartContext';
import { useCartProducts } from '../../../hooks';
import { CartContainer } from './CartContainer';

export const CartProducts = () => {
  const { cart } = useCartContext()!;
  const [isLoading, products] = useCartProducts(cart);
  
  return (
    <section className="cards">
      {isLoading ? <Loading /> : <CartContainer products={products}/>}
    </section>
  );
};
