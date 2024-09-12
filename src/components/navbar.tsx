import React from "react";
import Container from "@/components/container";
import Link from "next/link";
import { ShoppingBag, ShoppingCart } from "lucide-react";

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
        <Link href="/cart">
          <ShoppingCart />
        </Link>
      </Container>
    </nav>
  );
};

export default Navbar;
