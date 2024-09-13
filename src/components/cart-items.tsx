"use client";

import { useCartStore } from "@/store/cart-store";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Trash } from "lucide-react";

const CartItems = () => {
  const { cartItems, deleteFromCart } = useCartStore((state) => state);
  return (
    <div className="w-full grid gap-6">
      {cartItems?.map((item) => (
        <div key={item?.id} className="w-full bg-secondary p-1 rounded-xl">
          <div className="h-full w-full p-6 rounded-lg bg-background space-y-6 shadow relative">
            <div className="flex flex-col sm:flex-row gap-4">
              <Image
                src={item?.img}
                alt={item?.name}
                height={1080}
                width={1080}
                className="aspect-square rounded-md size-20 border"
                priority
              />
              <span className="flex flex-col gap-1">
                <h3 className="text-xl font-medium tracking-tighter">
                  {item?.name} - ${item?.price}
                </h3>
                <h3 className="text-base font-medium tracking-tighter text-muted-foreground">
                  Quantity: {item?.quantity}
                </h3>
                <h3 className="text-base font-medium tracking-tighter text-muted-foreground">
                  Total Price: ${item?.price * item?.quantity}
                </h3>
              </span>
            </div>
            <Button
              onClick={() => deleteFromCart(item?.id)}
              className="absolute top-0 right-6 text-rose-500 hover:text-rose-500"
              variant="outline"
              size="sm"
            >
              <Trash size={16} />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
