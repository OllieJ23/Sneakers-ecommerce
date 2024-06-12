import { create } from "zustand";

interface QuantityState {
  quantity: number;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
  setQuantity: (value: number) => void;
}

const useQuantityStore = create<QuantityState>((set) => ({
  quantity: 1,
  increaseQuantity: () => set((state) => ({ quantity: state.quantity + 1 })),
  decreaseQuantity: () => {
    set((state) => {
      if (state.quantity === 1) return state;
      return { quantity: state.quantity - 1 };
    });
  },
  setQuantity: (value) => set({ quantity: value }),
}));

export default useQuantityStore;
