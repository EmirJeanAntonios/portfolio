"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FunctionComponent, useMemo } from "react";

interface HeaderProps {}

interface IRoute {
  name: string;
  href: string;
}

//TODO: get this from backend
const routes: Array<IRoute> = [
  {
    name: "About Me",
    href: "/about-me",
  },
  {
    name: "Experiences",
    href: "/experiences",
  },
];

const Header: FunctionComponent<HeaderProps> = () => {
  const pathname = usePathname();

  return (
    <header className="container mx-auto flex justify-between items-center">
      <Link href={"/"}>
        <h2 className="text-xl font-bold">Emir Jean Antonios</h2>
      </Link>
      <div>
        <ul className="flex gap-8">
          {routes.map((route) => (
            <li key={route.name}>
              <Link  href={route.href} className={pathname === route.href ? "font-bold text-sky-500 transition" : ""}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
