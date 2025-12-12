import createMiddleware from "next-intl/middleware";
import {locales, defaultLocale} from "./i18n/locales";

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: "always"
});

export const config = {
  matcher: ["/((?!_next|favicon.ico|admin|robots.txt|sitemap.xml).*)"]
};
