import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full max-w-xl mx-auto grid place-items-center gap-6 py-20">
      <span className="grid gap-2">
        <h1 className="text-3xl md:text-4xl font-medium tracking-tighter text-center md:leading-tight">
          Zustify - state management with next.js & zustand.
        </h1>
        <p className="text-sm font-normal text-muted-foreground text-center">
          An example of shopping cart state management with next.js, typescript & zustand.
        </p>
      </span>
      <Button asChild className="rounded-full">
        <Link href="#products">Explore Now</Link>
      </Button>
    </div>
  );
};

export default Hero;
