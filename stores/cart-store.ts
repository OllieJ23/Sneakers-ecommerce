import { create } from "zustand";

export interface CartItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
  image: string;
  size: number;
}

interface CartState {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: number, size: number) => void;
  clearCart: () => void;
  increaseQuantity: (itemId: number, size: number) => void;
  decreaseQuantity: (itemId: number, size: number) => void;
  totalCartItems: () => number;
  initializeCart: () => void;
}

const useCartStore = create<CartState>((set, get) => ({
  cart: [],
  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === item.id && cartItem.size === item.size,
      );
      let updatedCart;
      if (existingItem) {
        updatedCart = state.cart.map((cartItem) =>
          cartItem.id === item.id && cartItem.size === item.size
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem,
        );
      } else {
        updatedCart = [...state.cart, { ...item, quantity: item.quantity }];
      }
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { cart: updatedCart };
    }),
  removeFromCart: (itemId, size) =>
    set((state) => {
      const updatedCart = state.cart.filter(
        (item) => !(item.id === itemId && item.size === size),
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { cart: updatedCart };
    }),
  clearCart: () =>
    set(() => {
      localStorage.removeItem("cart");
      return { cart: [] };
    }),
  increaseQuantity: (itemId, size) =>
    set((state) => {
      const updatedCart = state.cart.map((item) =>
        item.id === itemId && item.size === size
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { cart: updatedCart };
    }),
  decreaseQuantity: (itemId, size) =>
    set((state) => {
      const updatedCart = state.cart
        .map((item) =>
          item.id === itemId && item.size === size && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { cart: updatedCart };
    }),
  totalCartItems: () =>
    get().cart.reduce((total, item) => total + item.quantity, 0),
  initializeCart: () => {
    const storedCart =
      typeof window !== "undefined" ? localStorage.getItem("cart") : null;
    if (storedCart) {
      set({ cart: JSON.parse(storedCart) });
    }
  },
}));

export default useCartStore;
