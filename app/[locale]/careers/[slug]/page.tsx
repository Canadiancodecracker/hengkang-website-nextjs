import {Locale} from "@/i18n/locales";
import {getJob} from "@/lib/content/fs";
import {Container} from "@/components/container";
import Link from "next/link";

export default async function JobDetail({params}: {params: Promise<{locale: Locale; slug: string}>}) {
  const {locale, slug} = await params;
  const j = getJob(locale, slug);

  return (
    <main className="py-12">
      <Container>
        <div className="max-w-3xl">
          <div className="text-xs font-medium text-black/50">{j.department} • {j.location}</div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">{j.title}</h1>
          <p className="mt-4 text-base text-black/70">{j.excerpt}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${j.applyEmail}`} className="rounded-full bg-black px-5 py-3 text-sm font-medium text-white hover:bg-black/90">
              {locale === "zh" ? "邮件申请" : "Apply via email"}
            </a>
            <Link href={`/${locale}/careers`} className="rounded-full border border-black/10 px-5 py-3 text-sm font-medium text-black/80 hover:bg-black/5">
              {locale === "zh" ? "返回职位列表" : "Back to roles"}
            </Link>
          </div>

          <article className="prose prose-neutral mt-10">
            {j.body.split("\n").map((line, idx) => <p key={idx}>{line}</p>)}
          </article>
        </div>
      </Container>
    </main>
  );
}
