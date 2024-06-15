import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

interface NavItemsProps {
  label: string;
  href: string;
}

export default function NavItem({ label, href }: NavItemsProps) {
  const path = usePathname();

  return (
    <Link href={href} className="relative">
      <span
        className={twMerge(
          "text-zinc-400 hover:text-gray-50 transition-colors uppercase tracking-[1.2px] text-xs",
          path === href &&
            "text-gray-50 after:content-[''] after:absolute after:top-[26px] after:left-0 after:m-auto after:right-0 after:h-[1px] after:w-5 after:bg-gray-50"
        )}
      >
        {label}
      </span>
    </Link>
  );
}
