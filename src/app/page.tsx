import React from "react";
import Hero from "@/components/hero";
import Container from "@/components/container";

const HomePage = () => {
  return (
    <section className="w-full py-16">
      <Container>
        <Hero />
      </Container>
    </section>
  );
};

export default HomePage;
