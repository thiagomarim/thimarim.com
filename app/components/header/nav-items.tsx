import { cn } from "@/app/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemsProps {
  label: string;
  href: string;
}

export default function NavItem({ label, href }: NavItemsProps) {
  const path = usePathname();

  return (
    <Link href={href} className="relative">
      <span
        className={cn(
          "text-paragraph hover:text-title transition-colors text-sm font-medium",
          path === href && "text-title hover:text-[#CDCDCE] transition-colors"
        )}
      >
        {label}
      </span>
    </Link>
  );
}
