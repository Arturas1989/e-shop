import { type Auth, getAuth } from 'firebase/auth';
import {
  Timestamp,
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../db/firebase';
import { CartProducts, DBCart, DBUser, Product } from '../types';

export class Cart {
  private auth: Auth;
  private cartId: string | null;
  private userId: string | undefined;
  public products: CartProducts | null;
  public displayProducts: Product[] | null;

  constructor() {
    this.auth = getAuth();
    this.userId = this.auth.currentUser?.uid;
    this.cartId = null;
    this.products = null;
    this.displayProducts = null;
  }

  makeCopy() {
    const cart = new Cart();
    cart.auth = this.auth;
    cart.cartId = this.cartId;
    cart.products = this.products ? { ...this.products } : null;
    return cart;
  }

  async fillEmpty() {
    if (!this.cartId) await this.setCartId();
    if (!this.products) await this.setProducts();
  }

  async getAllProducts() {
    if (this.products) {
      const colRef = collection(db, 'products');
      const products = await getDocs(colRef).then((fireData) => {
        return fireData.docs
          .map((doc) => {
            let docData: unknown = {
              ...doc.data(),
              id: doc.id,
              quantity: this.products ? this.products[doc.id] || 0 : 0,
            };
            return docData as Product;
          })
          .filter((product) => product.id in this.products!);
      });
      this.displayProducts = products;
      return products;
    }
    return [];
  }

  async setProducts() {
    await this.setCartId();
    if (this.cartId) {
      const cartRef = doc(db, 'carts', this.cartId);
      const cartSnap = await getDoc(cartRef);
      if (cartSnap.exists()) {
        const cartData = cartSnap.data() as DBCart;
        this.products = JSON.parse(cartData.products);
      }
      return cartRef;
    }
    return null;
  }

  async updateCart(productId: string, quantity: number) {
    const cartRef = await this.setProducts();
    if (this.products && cartRef) {
      this.products[productId] = this.products[productId] + quantity || quantity;
      await updateDoc(cartRef, {
        products: JSON.stringify(this.products),
      });
    }
  }

  deleteDisplayProduct(productId: string) {
    if (this.displayProducts) {
      this.displayProducts = this.displayProducts.filter(
        (product) => product.id !== productId
      );
    }
  }

  async deleteCartItem(productId: string) {
    if (this.cartId) {
      const cartRef = doc(db, 'carts', this.cartId);
      if (this.products) delete this.products[productId];

      await updateDoc(cartRef, {
        products: JSON.stringify(this.products),
      });
    }
  }

  async updateUser() {
    if (this.userId && this.cartId) {
      const userRef = doc(db, 'users', this.userId);
      await updateDoc(userRef, {
        currentCartId: this.cartId,
      });
    }
  }

  async createCart(productId: string, quantity: number) {
    if (this.userId) {
      const docRef = await addDoc(collection(db, 'carts'), {
        userId: this.userId,
        products: JSON.stringify(this.products),
        timestamp: Timestamp.fromDate(new Date()),
      } as DBCart);
      this.cartId = docRef.id;
      this.products = { [productId]: quantity };
      await this.getAllProducts();
    }
  }

  async setCartId() {
    if (this.userId) {
      const usersRef = doc(db, 'users', this.userId);
      const userSnap = await getDoc(usersRef);
      if (userSnap.exists()) {
        const userData = userSnap.data() as DBUser;
        this.cartId = userData.currentCartId;
      }
    } else {
      this.cartId = null;
    }
  }

  async addToCart(productId: string, quantity: number) {
    if (this.userId) {
      const usersRef = doc(db, 'users', this.userId);
      const userSnap = await getDoc(usersRef);
      if (userSnap.exists()) {
        const userData = userSnap.data() as DBUser;
        this.cartId = userData.currentCartId;
        this.cartId
          ? await this.updateCart(productId, quantity)
          : await this.createCart(productId, quantity);
        await this.updateUser();
      }
    }
  }
}
