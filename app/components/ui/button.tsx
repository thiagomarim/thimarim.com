import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  secondary?: boolean;
}

export default function Button({ icon, secondary, children }: ButtonProps) {
  return (
    <button
      className={twMerge(
        "px-4 py-2 text-emerald-400 bg-emerald-950 hover:bg-emerald-800 border border-emerald-400 transition-colors rounded-lg text-base font-medium flex items-center gap-2",
        secondary &&
          "bg-opacity-0 text-sm hover:bg-opacity-0 hover:underline hover:underline-offset-4 p-0 text-gray-50 border-none"
      )}
    >
      {children}
      {icon}
    </button>
  );
}
