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
          "text-text hover:text-title transition-colors text-sm font-medium",
          path === href && "text-title hover:text-[#CDCDCE] transition-colors"
        )}
      >
        {label}
      </span>
    </Link>
  );
}
