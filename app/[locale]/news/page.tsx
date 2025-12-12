import Link from "next/link";
import {Locale} from "@/i18n/locales";
import {Container} from "@/components/container";
import {getPosts} from "@/lib/content/fs";

export default async function News({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  const posts = getPosts(locale);

  return (
    <main className="py-12">
      <Container>
        <div className="max-w-3xl">
          <h1 className="text-3xl font-semibold tracking-tight">{locale === "zh" ? "新闻与媒体" : "News & media"}</h1>
          <p className="mt-4 text-base text-black/70">
            {locale === "zh" ? "新闻稿、行业动态与活动信息。" : "Press releases, industry news and events."}
          </p>
        </div>

        <div className="mt-10 grid gap-4">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/${locale}/news/${p.slug}`}
              className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="text-xs font-medium text-black/50">{p.date} • {p.category.toUpperCase()}</div>
              <div className="mt-2 text-lg font-semibold tracking-tight">{p.title}</div>
              <p className="mt-3 text-sm text-black/70">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </Container>
    </main>
  );
}
