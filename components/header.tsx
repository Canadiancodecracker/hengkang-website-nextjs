"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {useTranslations} from "next-intl";
import {Locale, locales} from "@/i18n/locales";

function switchLocale(pathname: string, nextLocale: Locale) {
  const parts = pathname.split("/").filter(Boolean);
  // expected: [locale, ...rest]
  const rest = parts.slice(1);
  return `/${nextLocale}/${rest.join("/")}`;
}

export function Header({locale}: {locale: Locale}) {
  const t = useTranslations();
  const pathname = usePathname();

  const otherLocale = locale === "en" ? "zh" : "en";
  const href = pathname ? switchLocale(pathname, otherLocale as Locale) : `/${otherLocale}`;

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href={`/${locale}`} className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-black" aria-hidden />
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-tight">Ningxia Hengkang</div>
            <div className="text-xs text-black/60">Green • Innovation • Quality</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          <Link className="text-black/80 hover:text-black" href={`/${locale}`}>{t("nav.home")}</Link>
          <Link className="text-black/80 hover:text-black" href={`/${locale}/about`}>{t("nav.about")}</Link>
          <Link className="text-black/80 hover:text-black" href={`/${locale}/products`}>{t("nav.products")}</Link>
          <Link className="text-black/80 hover:text-black" href={`/${locale}/innovation`}>{t("nav.innovation")}</Link>
          <Link className="text-black/80 hover:text-black" href={`/${locale}/sustainability`}>{t("nav.sustainability")}</Link>
          <Link className="text-black/80 hover:text-black" href={`/${locale}/news`}>{t("nav.news")}</Link>
          <Link className="text-black/80 hover:text-black" href={`/${locale}/careers`}>{t("nav.careers")}</Link>
          <Link className="text-black/80 hover:text-black" href={`/${locale}/contact`}>{t("nav.contact")}</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={`/${locale}/contact`}
            className="hidden rounded-full bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/90 md:inline-flex"
          >
            {t("ui.cta.contactSales")}
          </Link>

          <Link
            href={href}
            className="rounded-full border border-black/10 px-3 py-2 text-xs font-medium text-black/80 hover:bg-black/5"
            aria-label={t("ui.language")}
          >
            {t("ui.language")}
          </Link>
        </div>
      </div>
    </header>
  );
}
