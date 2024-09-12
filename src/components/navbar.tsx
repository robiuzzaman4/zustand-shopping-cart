"use client";

import React from "react";
import Container from "@/components/container";
import Link from "next/link";
import { ShoppingBag, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cart-store";

const Navbar = () => {
  const { cartItems } = useCartStore((state) => state);
  return (
    <nav className="w-full fixed top-0 bg-background border-b">
      <Container className="h-14 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-medium tracking-tighter"
        >
          <ShoppingBag />
          Zustify
        </Link>
        <Button asChild variant="outline" size="sm" className="rounded-full">
          <Link href="/cart" className="flex items-center justify-center gap-2">
            <ShoppingCart size={16} />
            <p>{cartItems?.length}</p>
          </Link>
        </Button>
      </Container>
    </nav>
  );
};

export default Navbar;
