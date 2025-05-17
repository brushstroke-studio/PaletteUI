"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative",
  {
    variants: {
      variant: {
        default: "",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
      elevation: {
        none: "",
        low: "",
        medium: "",
        high: "",
      },
    },
    compoundVariants: [
      {
        variant: "default",
        elevation: "low",
        className:
          "bg-primary text-primary-foreground hover:bg-primary/90 border border-primary/30 shadow-sm before:absolute before:inset-0 before:rounded-md before:border-t before:border-white/20 before:bg-gradient-to-b before:from-white/10 before:to-transparent",
      },
      {
        variant: "default",
        elevation: "medium",
        className:
          "bg-primary text-primary-foreground hover:bg-primary/90 border border-primary/40 shadow before:absolute before:inset-0 before:rounded-md before:border-t before:border-white/30 before:bg-gradient-to-b before:from-white/15 before:to-transparent",
      },
      {
        variant: "default",
        elevation: "high",
        className:
          "bg-primary text-primary-foreground hover:bg-primary/90 border border-primary/50 shadow-md before:absolute before:inset-0 before:rounded-md before:border-t before:border-white/40 before:bg-gradient-to-b before:from-white/20 before:to-transparent",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
      elevation: "medium",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const RaisedButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, elevation, asChild = false, ...props }, ref) => {
    const Comp = "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, elevation, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
RaisedButton.displayName = "RaisedButton";

export { RaisedButton, buttonVariants };
