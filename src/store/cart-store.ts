import { Product } from "@/types";
import { toast } from "sonner";
import { create } from "zustand";
import { persist } from "zustand/middleware";

// state types
export type TState = {
  cartItems: Product[];
};

// action types
type TActions = {
  addToCart: (product: Product) => void; // add product
  removeFromCart: (itemId: string) => void; // remove product quantity
  deleteFromCart: (itemId: string) => void; // delete product
};

const INITIAL_STATE: TState = {
  cartItems: [],
};

export const useCartStore = create<TState & TActions>()(
  persist(
    (set, get) => ({
      cartItems: INITIAL_STATE.cartItems,

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
          });
          toast.success(
            `Item added: ${product?.name} - ${existingItem?.quantity + 1}`
          );
        } else {
          set({
            cartItems: [
              ...cartItems,
              { ...product, quantity: product?.quantity + 1 },
            ],
          });
          toast.success(
            `Item added: ${product?.name} - ${product?.quantity + 1}`
          );
        }
      },
      // remove from cart actions
      removeFromCart: (itemId: string) => {
        const cartItems = get().cartItems;
        const existingItem = cartItems?.find((item) => item?.id === itemId);

        if (existingItem) {
          if (existingItem.quantity > 1) {
            const updatedCartItems = cartItems.map((item) =>
              item.id === itemId
                ? { ...item, quantity: item.quantity - 1 }
                : item
            );
            set({
              cartItems: updatedCartItems,
            });
            toast.success(
              `Item removed: ${existingItem?.name} - ${
                existingItem?.quantity - 1
              }`
            );
          } else {
            set({
              cartItems: cartItems.filter((item) => item.id !== itemId),
            });
            toast.success(
              `Item removed: ${existingItem?.name} - ${
                existingItem?.quantity - 1
              }`
            );
          }
        }
      },
      // delete from cart actions
      deleteFromCart: (itemId: string) => {
        const cartItems = get().cartItems;
        const existingItem = cartItems?.find((item) => item?.id === itemId);

        if (existingItem) {
          set({
            cartItems: cartItems?.filter((item) => item?.id !== itemId),
          });
          toast.success(
            `Item deleted from cart`
          );
        }
      },
    }),
    {
      name: "cart-storage", // Unique name in localStorage
    }
  )
);
