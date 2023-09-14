import Link from "next/link";
import { FunctionComponent } from "react";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <header className="container mx-auto flex justify-between items-center">
      <Link href={"/"}>
        <h2 className="text-xl font-bold">Emir Jean Antonios</h2>
      </Link>
      <div>
        <ul className="flex gap-8">
          <li>
            <Link href={"about-me"}>About Me</Link>
          </li>
          <li>
            <Link href={"experiences"}>Experiences</Link>
          </li>
          <li>
            Skills
          </li>
          <li>Projects</li>
          <li>CV</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
