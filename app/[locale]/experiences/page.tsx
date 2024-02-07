import Experience from "@/views/Experiences/Experiences";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("Experiences")
  return (
   <Experience title={t("title")}/>
  );
}
