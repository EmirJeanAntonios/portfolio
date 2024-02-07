import About from "@/views/About/About";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("About");
  return (
    <About
      translations={{
        content1: t("content1"),
        content2: t("content2"),
        content3: t("content3"),
        content4: t("content4"),
        title: t("title"),
      }}
    />
  );
}
