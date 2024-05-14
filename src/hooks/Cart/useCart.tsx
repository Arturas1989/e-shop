import { useEffect, useState } from 'react';
import { Cart } from '../../services/Cart';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const useCart = () => {
  const [cart, setCart] = useState<Cart | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();
  useEffect(() => {
    const getProducts = async () => {
      const cartObj = new Cart();
      await cartObj.fillEmpty();
      setCart(cartObj);
      setIsLoading(false);
    };
    onAuthStateChanged(auth, (_) => {
      getProducts();
    });
  }, [auth]);

  return { cart, setCart, isLoading };
};
