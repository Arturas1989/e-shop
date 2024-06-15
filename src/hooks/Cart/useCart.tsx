import { useEffect, useState } from 'react';
import { Cart } from '../../services/Cart';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const useCart = () => {
  const [cart, setCart] = useState<Cart | null>(null);
  const [isCartLoading, setIsCartLoading] = useState(true);
  const auth = getAuth();
  useEffect(() => {
    const getProducts = async () => {
      const cartObj = new Cart();
      await cartObj.fillEmpty();
      setCart(cartObj);
      setIsCartLoading(false);
    };
    onAuthStateChanged(auth, (_) => {
      getProducts();
    });
  }, [auth]);

  return { cart, setCart, isCartLoading };
};
