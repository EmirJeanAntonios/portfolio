import Header from "@/components/Header";
import "../globals.css";
import type { Metadata } from "next";
import { NextIntlClientProvider, useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";

export const metadata: Metadata = {
  title: "Emir Jean Antonios",
  description: "Emir Jean Antonios' portfolio",
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className="grid grid-rows-layout h-screen">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="container mx-auto min-h-full">{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
