import { Locale } from "@/i18n/locales";
import { getPage } from "@/lib/content/fs";
import { MdPage } from "@/components/md-page";

export default async function About({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const page = getPage(locale, "about");
  const isZh = locale === "zh";

  return (
    <MdPage
      title={page.title}
      subtitle={page.heroHeadline}
      description={page.heroDescription}
      body={page.body}
      locale={locale}
      breadcrumb={[
        { label: isZh ? "首页" : "Home", href: `/${locale}` },
        { label: isZh ? "关于恒康" : "About" }
      ]}
    />
  );
}
