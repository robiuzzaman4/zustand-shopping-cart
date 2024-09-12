import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn("w-full max-w-screen-lg mx-auto px-4", className)}>
      {children}
    </div>
  );
};

export default Container;
