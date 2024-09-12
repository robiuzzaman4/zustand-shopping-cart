"use client";

import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/cart-store";

const CartButton = () => {
  const { cartItems } = useCartStore((state) => state);
  return (
    <Button asChild variant="outline" size="sm" className="rounded-full">
      <Link href="/cart" className="flex items-center justify-center gap-2">
        <ShoppingCart size={16} />
        <p>{cartItems?.length}</p>
      </Link>
    </Button>
  );
};

export default CartButton;
