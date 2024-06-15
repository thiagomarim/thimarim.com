import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon?: ReactNode;
  secondary?: boolean;
}

export default function Button({ text, icon, secondary }: ButtonProps) {
  return (
    <button
      className={twMerge(
        "px-4 py-2 bg-emerald-600 hover:bg-emerald-700 transition-colors rounded-lg text-base font-medium flex items-center gap-2",
        secondary && "bg-opacity-0 text-sm"
      )}
    >
      <span>{text}</span>
      {icon}
    </button>
  );
}
