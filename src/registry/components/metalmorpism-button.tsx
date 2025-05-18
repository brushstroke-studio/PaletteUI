import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 relative text-white",
  {
    variants: {
      size: {
        default: "h-14 px-8 rounded-[28px]",
        sm: "h-10 px-6 rounded-[22px] text-sm",
        lg: "h-16 px-10 rounded-[32px] text-lg",
        icon: "h-12 w-12 rounded-full",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

function Button({ className, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <div
      className={cn(
        "inline-block mb-6 relative p-[3px] shadow-[0_0_16px_0_rgba(0,0,0,0.08),_inset_0_0_1px_1px_rgba(0,0,0,0.25)] rounded-full transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]",
        size === "sm" ? "p-[2px]" : "",
        size === "lg" ? "p-[4px]" : "",
        className
      )}
      style={{
        background: "linear-gradient(180deg, #fff, #4d4d4d 50%, #ffcdf7 88%)",
        border: "1px solid rgba(0, 0, 0, 0.5)",
      }}
    >
      {/* Inner button */}
      <Comp
        className={cn(buttonVariants({ size, className }))}
        style={{
          background: "linear-gradient(180deg, #c4c4c4, #797a7a)",
          zIndex: 1,
        }}
        {...props}
      />

      {/* Highlight overlay */}
      <div
        className={cn(
          "absolute top-0 bottom-0 left-0 right-0 z-[2] opacity-[0.12]",
          size === "icon" ? "rounded-full" : "rounded-[28px]",
          size === "sm" ? "rounded-[22px]" : "",
          size === "lg" ? "rounded-[32px]" : ""
        )}
        style={{
          background:
            "radial-gradient(125.34% 30.72% at 50.16% 50%, hsla(0, 0%, 100%, 0.2) 0%, #ffffff 100%)",
        }}
      />

      {/* Shadow 1 (blur 24px, opacity 0.5) */}
      <div
        className="absolute left-0 right-0 bottom-1 z-0 mx-auto rounded-[100px] w-[106px] h-4 opacity-50"
        style={{
          background:
            "linear-gradient(92deg, #5ba1ff -36.06%, #e975ff 22.63%, #ff6161 77.25%, #ffaa54 126.98%)",
          filter: "blur(24px)",
        }}
      />

      {/* Shadow 2 (blur 12px, same gradient) */}
      <div
        className="absolute left-0 right-0 bottom-1 z-0 mx-auto rounded-[100px] w-[106px] h-4 opacity-50"
        style={{
          background:
            "linear-gradient(92deg, #5ba1ff -36.06%, #e975ff 22.63%, #ff6161 77.25%, #ffaa54 126.98%)",
          filter: "blur(12px)",
        }}
      />

      {/* Shadow 3 (blur 24px, opacity 0.25) */}
      <div
        className="absolute left-0 right-0 bottom-1 z-0 mx-auto rounded-[100px] w-[106px] h-4 opacity-25"
        style={{
          background:
            "linear-gradient(92deg, #5ba1ff -36.06%, #e975ff 22.63%, #ff6161 77.25%, #ffaa54 126.98%)",
          filter: "blur(24px)",
        }}
      />
    </div>
  );
}

export { Button, buttonVariants };
