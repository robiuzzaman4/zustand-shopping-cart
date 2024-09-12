import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full max-w-xl mx-auto grid place-items-center gap-6 py-20">
      <span className="grid gap-2">
        <h1 className="text-3xl md:text-4xl font-medium tracking-tighter text-center md:leading-tight">
          Zustify - world best online shopping center.
        </h1>
        <p className="text-sm font-normal text-muted-foreground text-center">
          Browse, add to cart, and shop effortlessly, all in one place!
        </p>
      </span>
      <Button asChild className="rounded-full">
        <Link href="#products">
          Explore Now
        </Link>
      </Button>
    </div>
  );
};

export default Hero;
