import { PRODUCTS } from "@/constants";
import React from "react";
import ProductCard from "@/components/product-card";

const Products = () => {
  return (
    <div className="grid gap-6 py-20 scroll-mt-10" id="products">
      <h1 className="text-2xl font-medium tracking-tighter md:leading-tight">
        Featured Products:
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
