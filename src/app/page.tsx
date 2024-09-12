import React from "react";
import Hero from "@/components/hero";
import Container from "@/components/container";
import Products from "@/components/products";

const HomePage = () => {
  return (
    <section className="w-full py-16">
      <Container>
        <Hero />
        <Products />
      </Container>
    </section>
  );
};

export default HomePage;
