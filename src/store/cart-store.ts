import { Product } from "@/types";
import { createStore } from "zustand/vanilla";

// state types
type TState = {
  cartItems: Product[];
  toatalCartItems: number;
  toatalCartItemsPrice: number;
};

// action types
type TActions = {
  addToCart: (product: Product) => void; // add product
  removeFromCart: (itemId: string) => void; // remove product quantity
  deleteFromItem: (itemId: string) => void; // delete product
};

const INITIAL_STATE: TState = {
  cartItems: [],
  toatalCartItems: 0,
  toatalCartItemsPrice: 0,
};

export const createCartStore = () =>
  createStore<TState & TActions>()((set, get) => ({
    cartItems: INITIAL_STATE.cartItems,
    toatalCartItems: INITIAL_STATE.toatalCartItems,
    toatalCartItemsPrice: INITIAL_STATE.toatalCartItemsPrice,

    // add to cart actions
    addToCart: (product: Product) => {
      const cartItems = get().cartItems;
      const existingItem = cartItems?.find((item) => item?.id === product?.id);

      if (existingItem) {
        const updatedCart = cartItems.map((item) =>
          item?.id === product?.id
            ? { ...item, quantity: item?.quantity + 1 }
            : item
        );
        set({
          cartItems: updatedCart,
          toatalCartItems: get().toatalCartItems + 1,
          toatalCartItemsPrice: get().toatalCartItemsPrice + product?.price,
        });
      }
    },
    removeFromCart: (itemId: string) => ({}),
    deleteFromItem: (itemId: string) => ({}),
  }));
