import Header from '@/components/Header'
import "../globals.css"
import type { Metadata } from 'next'
import { useTranslations } from 'next-intl';


export const metadata: Metadata = {
  title: 'Emir Jean Antonios',
  description: 'Emir Jean Antonios\' portfolio',
}

export default function RootLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode,
  params: {locale:string}
}) {
  const t = useTranslations('Header');
  const translations = {
    about: t("about"),
    experience:t("experience")
  }
  return (
    <html lang={locale}>
      <body className='grid grid-rows-layout h-screen'>
        <Header translations={translations} />
        <main className='container mx-auto min-h-full'>
        {children}
        </main>
      </body>
    </html>
  )
}
