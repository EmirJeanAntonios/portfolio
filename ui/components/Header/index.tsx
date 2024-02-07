"use client";
import { FunctionComponent, useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { Link, usePathname, useRouter } from "@/navigation";
import { useLocale } from "next-intl";
import NavigationLink from "../NavigationLink";
import classNames from "classnames";
type translation = {
  [key: string]: string | undefined;
};
interface HeaderProps {
  translations: translation;
}

interface IRoute {
  name: string;
  href: string;
}

//TODO: get this from backend
const routes: Array<IRoute> = [
  {
    name: "about",
    href: "/about-me",
  },
  {
    name: "experience",
    href: "/experiences",
  },
];

const Header: FunctionComponent<HeaderProps> = ({ translations }) => {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="container p-4 xl:p-0 mx-auto flex justify-between items-center">
      <Link href={"/"}>
        <h2 className="text-xl font-bold">Emir Jean Antonios</h2>
      </Link>
      <div
        className={classNames(
          "fixed top-0 bottom-0 left-0 opacity-0 z-10 pointer-events-none bg-sky-500 transition-opacity w-full lg:w-auto",
          "lg:static lg:opacity-100 lg:bg-transparent lg:pointer-events-auto",
          isMenuOpen && "pointer-events-auto opacity-100"
        )}
      >
        <nav>
          <ul
            className={classNames(
              "flex gap-8 flex-col p-16 text-center",
              "lg:flex-row lg:bg-transparent lg:text-left lg:p-0",
              "child:text-white child:font-bold lg:child:font-normal lg:child:text-inherit"
            )}
          >
            <li>
              <NavigationLink href={"/about-me"}>{translations["about"]}</NavigationLink>
            </li>
            <li>
              <NavigationLink href={"/experiences"}>{translations["experience"]}</NavigationLink>
            </li>
            <li
              className="cursor-pointer"
              onClick={() => {
                router.replace(pathname, {
                  locale: locale == "tr" ? "en" : "tr",
                });
              }}
            >
              {locale == "tr" ? "EN" : "TR"}
            </li>
          </ul>
        </nav>
      </div>
      <div
        className="lg:hidden relative z-20 text-black text-3xl"
        onClick={() => {
          setMenuOpen(!isMenuOpen);
        }}
      >
        {isMenuOpen ? <FaXmark /> : <FaBars />}
      </div>
    </header>
  );
};

export default Header;
