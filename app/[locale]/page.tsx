import { Locale } from "@/i18n/locales";
import { getHome, getPosts, getProducts } from "@/lib/content/fs";
import { HeroCarousel } from "@/components/hero-carousel";
import { Section, CtaBanner } from "@/components/section";
import { FeatureCard, ProductCard, PostCard, StatCard } from "@/components/cards";
import Link from "next/link";
import Image from "next/image";

export default async function Home({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const home = getHome(locale);
  const posts = getPosts(locale).slice(0, 3);
  const products = getProducts(locale).slice(0, 4);
  const isZh = locale === "zh";

  return (
    <main>
      {/* Hero Carousel */}
      <HeroCarousel
        locale={locale}
        slides={home.heroSlides.map((s) => ({
          ...s,
          ctaHref: s.ctaHref.startsWith("/") ? `/${locale}${s.ctaHref}` : s.ctaHref
        }))}
      />

      {/* Value Pillars Section */}
      <Section
        eyebrow={isZh ? "我们的价值" : "Why Hengkang"}
        title={home.heroHeadline}
        description={home.heroSubheadline}
        className="bg-white"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {home.pillars.map((p, i) => (
            <div
              key={p.title}
              className="group relative p-8 rounded-2xl border border-border bg-white card-hover overflow-hidden"
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-100 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-5">
                  {i === 0 && (
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                  {i === 1 && (
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  )}
                  {i === 2 && (
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-primary">{p.title}</h3>
                <p className="mt-3 text-muted leading-relaxed">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Products Section */}
      <Section
        eyebrow={isZh ? "产品矩阵" : "Our Products"}
        title={isZh ? "面向制药与营养的关键原料" : "Key ingredients for pharma, nutrition & materials"}
        description={isZh
          ? "秉承'规范、高能、创新、发展'的经营理念，为全球客户提供优质产品。"
          : "Operating with standardization, efficiency, innovation, and development principles to serve global customers."
        }
        className="section-subtle"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard
              key={p.slug}
              name={p.name}
              nameZh={p.nameZh}
              formula={p.formula}
              cas={p.cas}
              description={p.shortDescription}
              href={`/${locale}/products/${p.slug}`}
              tags={p.tags?.slice(0, 2)}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href={`/${locale}/products`}
            className="btn-secondary"
          >
            {isZh ? "查看全部产品" : "View all products"}
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </Section>

      {/* About Section with Image */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm font-semibold uppercase tracking-widest text-green-600 mb-3">
                {isZh ? "关于恒康" : "About Hengkang"}
              </div>
              <h2 className="heading-lg text-primary">
                {isZh ? "宁夏恒康科技有限公司" : "Ningxia Hengkang Technology"}
              </h2>
              <p className="mt-4 text-lg text-muted leading-relaxed">
                {isZh
                  ? "成立于2013年，位于宁夏贺兰工业园区，占地面积13万平方米，注册资金2亿元，是集胍盐类中间体、医药原料、动物营养、食品保健、新型材料等产品的研发、生产、销售为一体的高新技术企业。"
                  : "Founded in 2013 in Helan Industrial Park, Ningxia, with a 130,000 m² facility and ¥200 million registered capital. We are a high-tech enterprise integrating R&D, production, and sales of guanidine intermediates, pharmaceutical APIs, animal nutrition, and advanced materials."
                }
              </p>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div>
                  <div className="stat-value">2013</div>
                  <div className="text-sm text-muted mt-1">{isZh ? "成立年份" : "Founded"}</div>
                </div>
                <div>
                  <div className="stat-value">130K m²</div>
                  <div className="text-sm text-muted mt-1">{isZh ? "厂区面积" : "Facility Size"}</div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href={`/${locale}/about`} className="btn-primary">
                  {isZh ? "了解更多" : "Learn more"}
                </Link>
                <Link href={`/${locale}/contact`} className="btn-secondary">
                  {isZh ? "联系我们" : "Contact us"}
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-subtle">
                <Image
                  src="/uploads/about/company.png"
                  alt="Hengkang Factory"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-card p-6 max-w-xs">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div className="font-semibold text-primary">
                    {isZh ? "国家高新技术企业" : "National High-Tech Enterprise"}
                  </div>
                </div>
                <p className="text-sm text-muted">
                  {isZh
                    ? "GMP认证 · 瞪羚企业 · 专精特新"
                    : "GMP Certified · Gazelle Enterprise · Specialized SME"
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation & Sustainability Section */}
      <Section
        eyebrow={isZh ? "创新与可持续" : "Innovation & Sustainability"}
        title={home.storyCtaTitle}
        description={home.storyCtaDescription}
        className="bg-white"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {home.featuredCategories.map((c) => (
            <FeatureCard
              key={c.title}
              title={c.title}
              description={c.description}
              href={`/${locale}${c.href}`}
              icon={
                c.href.includes("innovation") ? (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              }
            />
          ))}
        </div>
      </Section>

      {/* News Section */}
      <Section
        eyebrow={isZh ? "新闻中心" : "News & Media"}
        title={isZh ? "最新动态" : "Latest Updates"}
        description={isZh ? "关注公司动态和行业资讯。" : "Stay updated with company news and industry insights."}
        className="section-subtle"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <PostCard
              key={p.slug}
              title={p.title}
              excerpt={p.excerpt}
              href={`/${locale}/news/${p.slug}`}
              meta={p.date}
              category={p.category.toUpperCase()}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href={`/${locale}/news`} className="btn-secondary">
            {isZh ? "进入新闻中心" : "Go to News Center"}
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </Section>

      {/* CTA Banner */}
      <CtaBanner
        title={isZh ? "需要样品、技术资料或报价？" : "Need samples, technical documents, or a quotation?"}
        description={isZh ? "我们的团队将在1个工作日内响应您的需求。" : "Our team will respond within 1 business day."}
        primaryCta={{
          label: isZh ? "联系恒康" : "Contact Hengkang",
          href: `/${locale}/contact`
        }}
        secondaryCta={{
          label: isZh ? "浏览产品" : "Browse Products",
          href: `/${locale}/products`
        }}
      />
    </main>
  );
}
