import { FunctionComponent } from "react";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return <header className="container mx-auto flex justify-between items-center">
    <h2 className="text-xl font-bold">Emir Jean Antonios</h2>
    <div>
        <ul className="flex gap-8">
            <li>About Me</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>CV</li>
        </ul>
    </div>
  </header>;
};

export default Header;
