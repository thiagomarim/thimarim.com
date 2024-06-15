"use client";

import Link from "next/link";
import NavItem from "./nav-items";

export const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projetos",
    href: "/projetos",
  },
];

export default function Header() {
  return (
    <header className="container sticky h-16 flex items-center justify-between">
      <Link href="/">
        <span className="text-xl font-bold">thimarim</span>
      </Link>
      <nav className="flex items-center gap-8">
        {NAV_ITEMS.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
      </nav>
    </header>
  );
}
