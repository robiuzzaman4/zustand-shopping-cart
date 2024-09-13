import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const brandIcons = [
  { label: "Next.js", src: "/icons/nextjs.svg" },
  { label: "Zustand", src: "/icons/zustand.svg" },
  { label: "TypeScript", src: "/icons/typescript.svg" },
];

const Hero = () => {
  return (
    <div className="w-full max-w-xl mx-auto grid place-items-center gap-6 py-20">
      <div className="flex items-center gap-2">
        {brandIcons.map((icon, index) => (
          <TooltipProvider key={index} delayDuration={100}>
            <Tooltip>
              <TooltipTrigger asChild className="hover:cursor-pointer">
                <Image
                  src={icon?.src as string}
                  alt={icon?.label as string}
                  height={720}
                  width={720}
                  className="aspect-square rounded-md size-8"
                  priority
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>{icon?.label}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
      <span className="grid gap-2">
        <h1 className="text-3xl md:text-4xl font-medium tracking-tighter text-center md:leading-tight">
          Zustify - State management with Next.js & Zustand.
        </h1>
        <p className="text-sm font-normal text-muted-foreground text-center">
          An example of, shopping cart state management with localStorage persistence by using Next.js, Zustand & TypeScript.
        </p>
      </span>
      <Button asChild className="rounded-full">
        <Link href="https://github.com/robiuzzaman4/zustify" target="_blank">
          View on Github
        </Link>
      </Button>
    </div>
  );
};

export default Hero;
