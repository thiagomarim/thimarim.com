"use client";

import Link from "next/link";
import NavItem from "./nav-items";
import Image from "next/image";
import { Button } from "../ui/button";

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
    <header className="w-full flex items-center justify-center">
      <div className="fixed top-0 flex items-center gap-6 sm:gap-[50px] mt-6 px-5 py-[14px] border border-border rounded-2xl w-max bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <Link href="/">
          <Image src="/logo.svg" alt="Logo Pessoal" width={101} height={24} />
        </Link>
        <nav className="flex items-center gap-6 sm:gap-[50px]">
          {NAV_ITEMS.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
          <Link href="#contact">
            <Button variant={"default"} size={"sm"}>
              Contato
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
