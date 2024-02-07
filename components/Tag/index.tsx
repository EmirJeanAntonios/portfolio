import { FunctionComponent } from "react";

interface TagProps {
  children?: React.ReactNode;
}

const Tag: FunctionComponent<TagProps> = ({ children }) => {
  return <span className="inline-block px-2 py-1 rounded-sm text-xs bg-sky-300 text-sky-900 cursor-pointer hover:bg-white hover:text-sky-950 transition">{children}</span>;
};

export default Tag;
