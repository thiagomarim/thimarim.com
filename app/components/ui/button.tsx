import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  secondary?: boolean;
}

export default function Button({
  secondary,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        "px-4 py-2 text-emerald-400 bg-emerald-950 hover:bg-emerald-800 border border-emerald-400 transition-colors rounded-lg text-base font-medium flex items-center gap-2",
        className,
        secondary &&
          "bg-opacity-0 text-sm hover:bg-opacity-0 hover:underline hover:underline-offset-4 p-0 text-gray-50 border-none"
      )}
      {...props}
    >
      {children}
    </button>
  );
}
