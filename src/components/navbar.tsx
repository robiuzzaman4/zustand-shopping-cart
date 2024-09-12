"use client";

import React from "react";
import Container from "@/components/container";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import CartButton from "./cart-button";

const Navbar = () => {
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
        <CartButton/>
      </Container>
    </nav>
  );
};

export default Navbar;
