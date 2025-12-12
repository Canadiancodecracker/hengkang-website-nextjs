import {Locale} from "@/i18n/locales";
import {getPost} from "@/lib/content/fs";
import {Container} from "@/components/container";
import Link from "next/link";

export default async function PostDetail({
  params
}: {
  params: Promise<{locale: Locale; slug: string}>;
}) {
  const {locale, slug} = await params;
  const p = getPost(locale, slug);

  return (
    <main className="py-12">
      <Container>
        <div className="max-w-3xl">
          <div className="text-xs font-medium text-black/50">{p.date} • {p.category.toUpperCase()}</div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">{p.title}</h1>
          <p className="mt-4 text-base text-black/70">{p.excerpt}</p>

          <div className="mt-8">
            <Link className="text-sm font-medium text-black/80 hover:text-black" href={`/${locale}/news`}>
              {locale === "zh" ? "← 返回新闻列表" : "← Back to news"}
            </Link>
          </div>

          <article className="prose prose-neutral mt-10">
            {p.body.split("\n").map((line, idx) => <p key={idx}>{line}</p>)}
          </article>
        </div>
      </Container>
    </main>
  );
}
