// /components/ui/Container.tsx
import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  narrow?: boolean;
}

export function Container({ narrow, className, children, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 md:px-8",
        narrow ? "max-w-3xl" : "max-w-[1200px]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
