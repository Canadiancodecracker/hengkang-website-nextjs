import { Locale } from "@/i18n/locales";
import { getProducts } from "@/lib/content/fs";
import { PageHero, CtaBanner } from "@/components/section";
import { ProductCard } from "@/components/cards";
import Link from "next/link";

const catLabel = (locale: Locale, c: string) => {
  const map = {
    en: {
      pharmaceutical: "Pharmaceutical APIs",
      nutrition: "Nutrition Ingredients",
      "animal-nutrition": "Animal Nutrition",
      materials: "Industrial Materials",
      surfactant: "Surfactants"
    },
    zh: {
      pharmaceutical: "医药原料药",
      nutrition: "营养添加剂",
      "animal-nutrition": "动物营养",
      materials: "工业材料",
      surfactant: "表面活性剂"
    }
  } as const;
  return (map[locale] as any)[c] ?? c;
};

const categories = [
  { key: "pharmaceutical", icon: "💊" },
  { key: "nutrition", icon: "🏃" },
  { key: "animal-nutrition", icon: "🐔" },
  { key: "materials", icon: "🔧" },
  { key: "surfactant", icon: "🧴" },
];

export default async function Products({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const products = getProducts(locale);
  const isZh = locale === "zh";

  // Group products by category
  const groupedProducts = products.reduce((acc, p) => {
    if (!acc[p.category]) acc[p.category] = [];
    acc[p.category].push(p);
    return acc;
  }, {} as Record<string, typeof products>);

  return (
    <main>
      <PageHero
        title={isZh ? "产品中心" : "Product Center"}
        subtitle={isZh ? "产品矩阵" : "Our Portfolio"}
        description={isZh
          ? "秉承'规范、高能、创新、发展'的经营理念，坚持'品质至上，永无止境'的质量方针，为全球客户提供优质产品。"
          : "Operating with our principles of standardization, efficiency, innovation, and development, committed to quality first and continuous improvement."
        }
        breadcrumb={[
          { label: isZh ? "首页" : "Home", href: `/${locale}` },
          { label: isZh ? "产品中心" : "Products" }
        ]}
      />

      {/* Category Filter */}
      <div className="bg-white border-b border-border sticky top-16 lg:top-20 z-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center gap-2 py-4 overflow-x-auto scrollbar-hide">
            <span className="text-sm text-muted flex-shrink-0">
              {isZh ? "分类：" : "Categories:"}
            </span>
            {categories.map((cat) => (
              groupedProducts[cat.key] && (
                <a
                  key={cat.key}
                  href={`#${cat.key}`}
                  className="flex-shrink-0 px-4 py-2 text-sm font-medium rounded-full border border-border hover:border-green-500 hover:text-green-600 transition"
                >
                  <span className="mr-1.5">{cat.icon}</span>
                  {catLabel(locale, cat.key)}
                  <span className="ml-1.5 text-xs text-muted">
                    ({groupedProducts[cat.key].length})
                  </span>
                </a>
              )
            ))}
          </div>
        </div>
      </div>

      {/* Products by Category */}
      <div className="bg-subtle py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {categories.map((cat) => (
            groupedProducts[cat.key] && (
              <section key={cat.key} id={cat.key} className="mb-16 last:mb-0 scroll-mt-32">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{cat.icon}</span>
                  <h2 className="text-2xl font-bold text-primary">
                    {catLabel(locale, cat.key)}
                  </h2>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {groupedProducts[cat.key].map((p) => (
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
              </section>
            )
          ))}
        </div>
      </div>

      {/* Documentation CTA */}
      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-border card-hover">
              <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-primary">
                {isZh ? "技术数据表 (TDS)" : "Technical Data Sheets"}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {isZh ? "详细的产品规格和技术参数" : "Detailed specifications and technical parameters"}
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-border card-hover">
              <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="font-semibold text-primary">
                {isZh ? "安全数据表 (SDS)" : "Safety Data Sheets"}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {isZh ? "产品安全和处理信息" : "Product safety and handling information"}
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-border card-hover">
              <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-primary">
                {isZh ? "分析报告 (COA)" : "Certificate of Analysis"}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {isZh ? "批次分析和质量证书" : "Batch analysis and quality certificates"}
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title={isZh ? "需要产品样品或报价？" : "Need product samples or quotation?"}
        description={isZh ? "联系我们的销售团队获取更多信息" : "Contact our sales team for more information"}
        primaryCta={{
          label: isZh ? "联系销售" : "Contact Sales",
          href: `/${locale}/contact`
        }}
      />
    </main>
  );
}
