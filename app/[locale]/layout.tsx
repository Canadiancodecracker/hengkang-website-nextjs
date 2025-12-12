import "@/app/globals.css";
import {ReactNode} from "react";
import {NextIntlClientProvider} from "next-intl";
import {notFound} from "next/navigation";
import {locales, Locale} from "@/i18n/locales";
import requestConfig from "@/i18n/request";
import {Header} from "@/components/header";
import {Footer} from "@/components/footer";

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  if (!locales.includes(locale as any)) notFound();

  const cfg = await requestConfig({locale});
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={cfg.locale} messages={cfg.messages}>
          <Header locale={cfg.locale as Locale} />
          {children}
          <Footer locale={cfg.locale as Locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
