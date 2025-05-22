import React from "react";
import { cn } from "../lib/utils";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const Title: React.FC<Props> = ({ className, children }) => {
  return <h1 className={cn("font-bold text-xl", className)}>{children}</h1>;
};
