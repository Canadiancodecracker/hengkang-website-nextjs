import {Locale} from "@/i18n/locales";
import {getHome, getPosts, getProducts} from "@/lib/content/fs";
import {HeroCarousel} from "@/components/hero-carousel";
import {Section} from "@/components/section";
import {FeatureCard, PostCard} from "@/components/cards";
import Link from "next/link";

export default async function Home({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  const home = getHome(locale);
  const posts = getPosts(locale).slice(0, 3);
  const products = getProducts(locale).slice(0, 3);

  return (
    <main>
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <HeroCarousel
          locale={locale}
          slides={home.heroSlides.map((s) => ({
            ...s,
            ctaHref: s.ctaHref.startsWith("/") ? `/${locale}${s.ctaHref}` : s.ctaHref
          }))}
        />
      </div>

      <Section
        eyebrow={locale === "zh" ? "我们的价值" : "Our pillars"}
        title={home.heroHeadline}
        description={home.heroSubheadline}
      >
        <div className="grid gap-6 md:grid-cols-3">
          {home.pillars.map((p) => (
            <div key={p.title} className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold">{p.title}</div>
              <p className="mt-3 text-sm text-black/70">{p.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-4 rounded-3xl border border-black/10 bg-white p-6 shadow-sm sm:grid-cols-3">
          {home.kpis.map((k) => (
            <div key={k.label}>
              <div className="text-2xl font-semibold tracking-tight">{k.value}</div>
              <div className="mt-1 text-sm text-black/60">{k.label}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow={locale === "zh" ? "产品矩阵" : "Product portfolio"}
        title={locale === "zh" ? "面向制药与营养的关键原料" : "Key ingredients for pharma and nutrition"}
        description={locale === "zh" ? "按行业标准组织产品信息，提供可下载的技术资料与规范化询盘流程。" : "Structured product pages with technical downloads and a streamlined inquiry path."}
      >
        <div className="grid gap-6 md:grid-cols-3">
          {products.map((p) => (
            <FeatureCard
              key={p.slug}
              title={p.name}
              description={p.shortDescription}
              href={`/${locale}/products/${p.slug}`}
            />
          ))}
        </div>

        <div className="mt-8">
          <Link className="text-sm font-medium text-black/80 hover:text-black" href={`/${locale}/products`}>
            {locale === "zh" ? "查看全部产品 →" : "View all products →"}
          </Link>
        </div>
      </Section>

      <Section
        eyebrow={locale === "zh" ? "创新与可持续" : "Innovation & sustainability"}
        title={home.storyCtaTitle}
        description={home.storyCtaDescription}
      >
        <div className="grid gap-6 md:grid-cols-2">
          {home.featuredCategories.map((c) => (
            <FeatureCard key={c.title} title={c.title} description={c.description} href={`/${locale}${c.href}`} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow={locale === "zh" ? "最新动态" : "Latest"}
        title={locale === "zh" ? "新闻与媒体" : "News & media"}
        description={locale === "zh" ? "关注我们的新闻、行业动态与活动。" : "Press releases, industry updates, and events."}
      >
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <PostCard
              key={p.slug}
              title={p.title}
              excerpt={p.excerpt}
              href={`/${locale}/news/${p.slug}`}
              meta={`${p.date} • ${p.category.toUpperCase()}`}
            />
          ))}
        </div>

        <div className="mt-8">
          <Link className="text-sm font-medium text-black/80 hover:text-black" href={`/${locale}/news`}>
            {locale === "zh" ? "进入新闻中心 →" : "Go to News Center →"}
          </Link>
        </div>
      </Section>

      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="rounded-3xl border border-black/10 bg-black p-10 text-white">
          <div className="text-xs font-medium uppercase tracking-widest text-white/70">
            {locale === "zh" ? "业务咨询" : "Business inquiry"}
          </div>
          <div className="mt-3 text-2xl font-semibold tracking-tight">
            {locale === "zh" ? "需要样品、技术资料或报价？" : "Need samples, technical documents, or a quotation?"}
          </div>
          <p className="mt-4 text-white/80">
            {locale === "zh" ? "我们的团队将在 1 个工作日内响应您的需求。" : "Our team will respond within 1 business day."}
          </p>
          <div className="mt-8">
            <Link href={`/${locale}/contact`} className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black hover:bg-white/90">
              {locale === "zh" ? "联系恒康 →" : "Contact Hengkang →"}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
