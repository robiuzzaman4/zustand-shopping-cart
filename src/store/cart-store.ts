import { Product } from "@/types";
import { createStore } from "zustand/vanilla";

// state types
type TState = {
  items: Product[];
  totalItems: number;
  totalPrice: number;
};

// action types
type TActions = {
  addToCart: (item: Product) => void; // add product
  removeFromCart: (itemId: string) => void; // remove product quantity
  deleteFromItem: (itemId: string) => void; // delete product
};

const INITIAL_STATE: TState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

export const createCartStore = () =>
  createStore<TState & TActions>()((set) => ({
    items: INITIAL_STATE.items,
    totalItems: INITIAL_STATE.totalItems,
    totalPrice: INITIAL_STATE.totalPrice,
    addToCart: (item: Product) => ({}),
    removeFromCart: (itemId: string) => ({}),
    deleteFromItem: (itemId: string) => ({}),
  }));
