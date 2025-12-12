import {Locale} from "@/i18n/locales";
import {getPage} from "@/lib/content/fs";
import {MdPage} from "@/components/md-page";

export default async function Sustainability({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  const page = getPage(locale, "sustainability");
  return <MdPage title={page.title} summary={page.summary} body={page.body} />;
}
