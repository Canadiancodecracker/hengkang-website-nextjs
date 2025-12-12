import {getRequestConfig} from "next-intl/server";
import {defaultLocale, locales} from "./locales";

export default getRequestConfig(async ({requestLocale}) => {
  const locale = await requestLocale;
  const safeLocale = locales.includes(locale as any) ? (locale as any) : defaultLocale;
  return {
    locale: safeLocale,
    messages: (await import(`../messages/${safeLocale}.json`)).default
  };
});
