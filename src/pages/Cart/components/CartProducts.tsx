import { Loading } from '../../../components';
import { useCartContext } from '../../../contexts/cartContext';
import { CartContainer } from './CartContainer';

export const CartProducts = () => {
  const { isCartLoading, products } = useCartContext()!;
  
  return (
    <section className="cards">
      {isCartLoading ? <Loading /> : <CartContainer products={products}/>}
    </section>
  );
};
