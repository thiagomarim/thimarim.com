import * as React from "react";
import Link from "next/link";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/app/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-[10px] text-sm font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-button text-buttonText hover:bg-[#fff] font-semibold",
        secondary:
          "bg-buttonSecondary text-buttonSecondaryText hover:bg-[#2F2F2F] font-semibold",
        link: "bg-transparent underline-offset-4 hover:underline text-title hover:text-[#CDCDCE] hover:bg-transparent",
      },
      size: {
        sm: "h-8 px-3 rounded-lg text-[13px]",
        default: "h-10 px-4 text-[15px] font-medium",
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
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, href, variant, size, ...props }, ref) => {
    if (href) {
      return (
        <Link
          href={href}
          className={cn(buttonVariants({ variant, size, className }))}
        >
          {children}
        </Link>
      );
    }
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
