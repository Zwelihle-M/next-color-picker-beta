import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva("", {
  variants: {
    variant: {
      default: "",
    },
    size: {
      sm: "text-2xl md:text-4xl",
      md: "text-4xl md:text-7xl",
      lg: "text-7xl md:text-9xl",
    },
    tracking: {
      tight: "tracking-tight",
      tighter: "tracking-tighter",
      wide: "tracking-wide",
      wider: "tracking-wider",
      widest: "tracking-widest",
    },
    fontWeight: {
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    font: {
      Degular: "font-Degular",
      IFKica: "font-IFKica",
    },
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  href?: string;
}

const Heading = React.forwardRef<HTMLHeadingElement, ButtonProps>(
  (
    { className, children, size, tracking, fontWeight, font, ...props },
    ref
  ) => {
    return (
      <h1
        className={cn(
          headingVariants({ size, tracking, fontWeight, font, className })
        )}
        ref={ref}
        {...props}
      >
        {children}
      </h1>
    );
  }
);
Heading.displayName = "Heading";

export { Heading, headingVariants };

//
