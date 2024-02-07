import Home from "@/views/Home/Home";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations('Index');
  return (
    <Home/>
  );
}
