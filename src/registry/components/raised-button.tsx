"use client";

import { cn } from "@/lib/utils";
import {
  getContrastColor,
  getLuminance,
  parseColor,
} from "@/registry/utils/colorUtils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center dark:bg-zinc-500 dark:text-white whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative bg-primary text-primary-foreground hover:bg-primary/90 border border-primary/50 shadow-md before:absolute before:inset-0 before:rounded-md before:border-t before:border-white/40 before:bg-gradient-to-b before:from-white/20 before:to-transparent cursor-pointer",
  {
    variants: {
      variant: {
        default: "",
        // Keep existing variants and add more if needed
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  color?: string; // Add color prop for custom colors
}

const RaisedButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, color, style = {}, ...props },
    ref
  ) => {
    const Comp = "button";

    // Generate dynamic styles based on the color prop
    const dynamicStyles = React.useMemo(() => {
      if (!color) return {};

      try {
        const rgb = parseColor(color);
        if (!rgb) return {};

        const luminance = getLuminance(rgb);
        const textColor = getContrastColor(luminance);
        const borderOpacity = 0.5; // High elevation border opacity
        const hoverOpacity = 0.9;
        const whiteBorderOpacity = 0.4; // High elevation white border opacity
        const whiteGradientOpacity = 0.2; // High elevation white gradient opacity
        const shadowOpacity = 0.2; // Shadow opacity
        const shadowSpread = "0px"; // Shadow spread
        const shadowBlur = "5px"; // Shadow blur

        return {
          backgroundColor: color,
          color: textColor,
          borderColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${borderOpacity})`,
          "--hover-bg": `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${hoverOpacity})`,
          "--border": `rgba(255, 255, 255, ${whiteBorderOpacity})`,
          "--gradient": `rgba(255, 255, 255, ${whiteGradientOpacity})`,
          "--shadow-color": `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${shadowOpacity})`,
          boxShadow: `0 4px ${shadowBlur} ${shadowSpread} var(--shadow-color)`,
          transition: "all 0.2s ease-in-out",
        };
      } catch (e) {
        console.error("Error processing color:", e);
        return {};
      }
    }, [color]);

    // Dynamically generate classes based on if we have a custom color
    const computedClassName = cn(
      buttonVariants({ variant, size, className }),
      color &&
        "hover:bg-[color:var(--hover-bg)] before:border-[color:var(--border)] before:from-[color:var(--gradient)]"
    );

    return (
      <Comp
        className={computedClassName}
        ref={ref}
        style={{
          ...style,
          ...dynamicStyles,
        }}
        {...props}
      />
    );
  }
);
RaisedButton.displayName = "RaisedButton";

export { buttonVariants, RaisedButton };
