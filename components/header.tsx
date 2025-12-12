"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { Locale, locales } from "@/i18n/locales";
import { useState, useEffect } from "react";

function switchLocale(pathname: string, nextLocale: Locale) {
  const parts = pathname.split("/").filter(Boolean);
  const rest = parts.slice(1);
  return `/${nextLocale}/${rest.join("/")}`;
}

const navLinks = [
  { key: "about", href: "/about", hasSubmenu: true },
  { key: "products", href: "/products", hasSubmenu: true },
  { key: "innovation", href: "/innovation", hasSubmenu: false },
  { key: "sustainability", href: "/sustainability", hasSubmenu: false },
  { key: "news", href: "/news", hasSubmenu: false },
  { key: "careers", href: "/careers", hasSubmenu: false },
  { key: "contact", href: "/contact", hasSubmenu: false },
];

export function Header({ locale }: { locale: Locale }) {
  const t = useTranslations();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const otherLocale = locale === "en" ? "zh" : "en";
  const href = pathname ? switchLocale(pathname, otherLocale as Locale) : `/${otherLocale}`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="hidden lg:block bg-primary text-white/80 text-xs">
        <div className="mx-auto max-w-7xl px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span>{locale === "zh" ? "宁夏银川市贺兰工业园区" : "Helan Industrial Park, Yinchuan, Ningxia, China"}</span>
            <span className="text-white/40">|</span>
            <a href="mailto:sales@hengkangchina.com" className="hover:text-white transition">sales@hengkangchina.com</a>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href={href}
              className="flex items-center gap-1.5 hover:text-white transition"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              <span>{locale === "zh" ? "English" : "中文"}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-soft border-b border-border"
          : "bg-white border-b border-transparent"
          }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href={`/${locale}`} className="flex items-center gap-3 group">
              <div className="relative w-32 h-10 lg:w-40 lg:h-12 flex items-center overflow-hidden">
                <Image
                  src="/uploads/logo.png"
                  alt={locale === "zh" ? "宁夏恒康科技" : "Hengkang Technology"}
                  width={160}
                  height={48}
                  className="object-contain h-full w-auto"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.key}
                  href={`/${locale}${link.href}`}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${pathname?.includes(link.href)
                    ? "text-green-600 bg-green-50"
                    : "text-primary/80 hover:text-primary hover:bg-subtle"
                    }`}
                >
                  {t(`nav.${link.key}`)}
                </Link>
              ))}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center gap-3">
              <Link
                href={`/${locale}/contact`}
                className="hidden md:inline-flex btn-accent text-sm"
              >
                {t("ui.cta.contactSales")}
              </Link>

              {/* Mobile language toggle */}
              <Link
                href={href}
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-border text-sm font-medium text-primary/80 hover:bg-subtle transition"
              >
                {locale === "zh" ? "EN" : "中"}
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-border hover:bg-subtle transition"
                aria-label="Toggle menu"
              >
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full bg-white border-b border-border shadow-lg transition-all duration-300 ${mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
        >
          <nav className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={`/${locale}${link.href}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 text-base font-medium rounded-lg transition ${pathname?.includes(link.href)
                  ? "text-green-600 bg-green-50"
                  : "text-primary/80 hover:text-primary hover:bg-subtle"
                  }`}
              >
                {t(`nav.${link.key}`)}
              </Link>
            ))}
            <Link
              href={`/${locale}/contact`}
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 btn-accent text-center"
            >
              {t("ui.cta.contactSales")}
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
