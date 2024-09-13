import CartItems from "@/components/cart-items";
import Container from "@/components/container";
import React from "react";

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
