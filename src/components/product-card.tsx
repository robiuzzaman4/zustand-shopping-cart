"use client";

import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { Product } from "@/types";
import { useCartStore } from "@/store/cart-store";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { cartItems, addToCart, toatalCartItems, toatalCartItemsPrice } = useCartStore((state) => state);
  console.log("cartItems", cartItems, toatalCartItems, "$" + toatalCartItemsPrice);

  return (
    <div className="bg-secondary p-1 rounded-xl">
      <Card className="rounded-lg shadow">
        <CardContent className="space-y-6">
          <span className="flex items-center justify-between gap-3">
            <CardTitle>{product.name}</CardTitle>
            <CardTitle>${product.price}</CardTitle>
          </span>
          <Image
            src={product.img}
            alt={product.name}
            height={1080}
            width={1080}
            className="aspect-square rounded-md"
            priority
          />
          <Button
            onClick={() => addToCart(product)}
            className="w-full flex items-center justify-center gap-2"
          >
            Add to Cart <ShoppingCart size={16} />{" "}
          </Button>

          <span className="w-full hidden grid-cols-5 gap-3">
            <Button variant="outline">
              <Minus size={16} className="shrink-0" />
            </Button>
            <div className="col-span-3 h-full w-full grid place-items-center">
              <CardTitle>1</CardTitle>
            </div>
            <Button>
              <Plus size={16} className="shrink-0" />
            </Button>
          </span>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductCard;
