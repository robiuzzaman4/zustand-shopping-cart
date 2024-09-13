import CartItems from "@/components/cart-items";
import Container from "@/components/container";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Shopping Cart",
  description: "Shopping Cart Items",
};

const CartPage = () => {
  return (
    <section className="w-full py-16">
      <Container className="grid gap-6">
        <h1 className="text-2xl font-medium tracking-tighter md:leading-tight">
          Cart
        </h1>
        <CartItems />
      </Container>
    </section>
  );
};

export default CartPage;
