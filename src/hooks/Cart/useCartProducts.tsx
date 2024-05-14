import { useEffect, useState } from 'react';
import { Product } from '../../types';
import { Cart } from '../../services/Cart';

type UseCartProducts = [
  boolean,
  Product[] | null,
  React.Dispatch<React.SetStateAction<Product[] | null>>
];

export const useCartProducts = (cart: Cart | null): UseCartProducts => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<null | Product[]>(null);

  useEffect(() => {
    if (cart) {
      const getProducts = async () => {
        const cartProducts = await cart.getAllProducts();
        setIsLoading(false);
        setProducts(cartProducts);
      };
      getProducts();
    }
  }, [cart]);

  return [isLoading, products, setProducts];
};
