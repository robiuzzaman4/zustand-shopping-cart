import { Product } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

// state types
export type TState = {
  cartItems: Product[];
  toatalCartItemsPrice: number;
};

// action types
type TActions = {
  addToCart: (product: Product) => void; // add product
  // removeFromCart: (itemId: string) => void; // remove product quantity
  // deleteFromItem: (itemId: string) => void; // delete product
};

const INITIAL_STATE: TState = {
  cartItems: [],
  toatalCartItemsPrice: 0,
};

export const useCartStore = create<TState & TActions>()(
  persist(
    (set, get) => ({
      cartItems: INITIAL_STATE.cartItems,
      toatalCartItemsPrice: INITIAL_STATE.toatalCartItemsPrice,

      // add to cart actions
      addToCart: (product: Product) => {
        const cartItems = get().cartItems;
        const existingItem = cartItems?.find(
          (item) => item?.id === product?.id
        );

        if (existingItem) {
          const updatedCartItems = cartItems.map((item) =>
            item?.id === product?.id
              ? { ...item, quantity: item?.quantity + 1 }
              : item
          );
          set({
            cartItems: updatedCartItems,
            toatalCartItemsPrice: get().toatalCartItemsPrice + product?.price,
          });
        } else {
          set({
            cartItems: [
              ...cartItems,
              { ...product, quantity: product?.quantity + 1 },
            ],
            toatalCartItemsPrice: get().toatalCartItemsPrice + product?.price,
          });
        }
      },
      // removeFromCart: (itemId: string) => ({}),
      // deleteFromItem: (itemId: string) => ({}),
    }),
    {
      name: "cart-storage", // Unique name in localStorage
    }
  )
);
