"use client";

import Link from "next/link";
import NavItem from "./nav-items";
import Image from "next/image";

export const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projetos",
    href: "/all-projects",
  },
];

export default function Header() {
  return (
    <header className="flex items-center justify-center  ">
      <div className="flex items-center gap-[50px] mt-6 px-5 py-[14px] border border-border rounded-2xl w-max">
        <Link href="/">
          <Image src="/logo.svg" alt="Logo Pessoal" width={101} height={24} />
        </Link>
        <nav className="flex items-center gap-[50px]">
          {NAV_ITEMS.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </nav>
      </div>
    </header>
  );
}
