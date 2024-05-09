import { Loading, SecondaryButton } from '../../../components';
import { useCartContext } from '../../../contexts/cartContext';
import { useCartProducts } from '../../../hooks';
import { CartCard } from './Cartcard/CartCard';
import { Total } from './Total';

type CartProductsProps = {
  name?: string;
};

export const CartProducts = ({ name }: CartProductsProps) => {
  const { cart } = useCartContext()!;
  const [isLoading, products] = useCartProducts(cart);
  console.log(products);
  return (
    <section className="cards">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {products?.map((product) => (
            <CartCard key={product.id} product={product} />
          ))}
          <Total products={products} />
          <SecondaryButton>
            Place order<i className="bi bi-arrow-right"></i>
          </SecondaryButton>
        </>
      )}
    </section>
  );
};
