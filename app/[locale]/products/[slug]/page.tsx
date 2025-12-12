import { Locale } from "@/i18n/locales";
import { getProduct } from "@/lib/content/fs";
import { PageHero, CtaBanner } from "@/components/section";
import Link from "next/link";

export default async function ProductDetail({
  params
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const p = getProduct(locale, slug);
  const isZh = locale === "zh";

  return (
    <main>
      <PageHero
        title={p.name}
        subtitle={p.category.toUpperCase()}
        description={p.shortDescription}
        breadcrumb={[
          { label: isZh ? "首页" : "Home", href: `/${locale}` },
          { label: isZh ? "产品" : "Products", href: `/${locale}/products` },
          { label: p.name }
        ]}
        compact
      />

      <div className="py-12 lg:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Quick Info */}
              <div className="flex flex-wrap gap-4">
                {p.nameZh && (
                  <div className="px-4 py-2 rounded-lg bg-subtle">
                    <span className="text-xs text-muted">中文名</span>
                    <div className="font-semibold text-primary">{p.nameZh}</div>
                  </div>
                )}
                {p.cas && (
                  <div className="px-4 py-2 rounded-lg bg-subtle">
                    <span className="text-xs text-muted">CAS No.</span>
                    <div className="font-mono font-semibold text-primary">{p.cas}</div>
                  </div>
                )}
                {p.formula && (
                  <div className="px-4 py-2 rounded-lg bg-subtle">
                    <span className="text-xs text-muted">{isZh ? "分子式" : "Formula"}</span>
                    <div className="font-mono font-semibold text-primary">{p.formula}</div>
                  </div>
                )}
                {p.molecularWeight && (
                  <div className="px-4 py-2 rounded-lg bg-subtle">
                    <span className="text-xs text-muted">{isZh ? "分子量" : "MW"}</span>
                    <div className="font-semibold text-primary">{p.molecularWeight}</div>
                  </div>
                )}
              </div>

              {/* Tags */}
              {p.tags && p.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-green-50 text-green-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Body content (from markdown) */}
              {p.body && (
                <div className="prose prose-lg max-w-none prose-headings:text-primary prose-a:text-green-600 prose-table:text-sm">
                  <div dangerouslySetInnerHTML={{ __html: simpleMarkdown(p.body) }} />
                </div>
              )}

              {/* Highlights */}
              {p.highlights && p.highlights.length > 0 && (
                <div className="p-6 rounded-2xl border border-border bg-subtle">
                  <h3 className="font-semibold text-primary mb-4">
                    {isZh ? "产品亮点" : "Highlights"}
                  </h3>
                  <ul className="space-y-2">
                    {p.highlights.map((x) => (
                      <li key={x} className="flex items-start gap-3 text-sm">
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-muted">{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Applications */}
              {p.applications && p.applications.length > 0 && (
                <div className="p-6 rounded-2xl border border-border">
                  <h3 className="font-semibold text-primary mb-4">
                    {isZh ? "应用领域" : "Applications"}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {p.applications.map((x) => (
                      <span key={x} className="px-3 py-1.5 text-sm border border-border rounded-full hover:bg-subtle transition">
                        {x}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* CTA Card */}
              <div className="p-6 rounded-2xl bg-gradient-hero text-white">
                <h3 className="font-semibold mb-2">
                  {isZh ? "需要此产品？" : "Interested in this product?"}
                </h3>
                <p className="text-sm text-white/70 mb-4">
                  {isZh ? "联系我们获取报价、样品或技术资料" : "Contact us for quotation, samples, or technical documents"}
                </p>
                <Link
                  href={`/${locale}/contact`}
                  className="block w-full text-center btn-accent"
                >
                  {isZh ? "联系销售" : "Contact Sales"}
                </Link>
              </div>

              {/* Specifications */}
              {p.specs && p.specs.length > 0 && (
                <div className="p-6 rounded-2xl border border-border">
                  <h3 className="font-semibold text-primary mb-4">
                    {isZh ? "关键规格" : "Key Specifications"}
                  </h3>
                  <div className="divide-y divide-border text-sm">
                    {p.specs.map((s) => (
                      <div key={s.item} className="flex justify-between gap-4 py-3">
                        <span className="text-muted">{s.item}</span>
                        <span className="font-medium text-primary">{s.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Packaging */}
              {p.packaging && p.packaging.length > 0 && (
                <div className="p-6 rounded-2xl border border-border">
                  <h3 className="font-semibold text-primary mb-4">
                    {isZh ? "包装规格" : "Packaging"}
                  </h3>
                  <div className="space-y-2 text-sm">
                    {p.packaging.map((pk) => (
                      <div key={pk.type + pk.net} className="flex justify-between gap-4">
                        <span className="text-muted">{pk.type}</span>
                        <span className="font-medium text-primary">{pk.net}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Documents */}
              {p.documents && p.documents.length > 0 && (
                <div className="p-6 rounded-2xl border border-border">
                  <h3 className="font-semibold text-primary mb-4">
                    {isZh ? "资料下载" : "Downloads"}
                  </h3>
                  <div className="space-y-2">
                    {p.documents.map((d) => (
                      <a
                        key={d.label}
                        href={d.file}
                        className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-subtle transition"
                      >
                        <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-primary">{d.label}</div>
                          <div className="text-xs text-muted">{d.type}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Back to products */}
              <Link
                href={`/${locale}/products`}
                className="flex items-center gap-2 text-sm text-muted hover:text-primary transition"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                {isZh ? "返回产品列表" : "Back to products"}
              </Link>
            </aside>
          </div>
        </div>
      </div>

      <CtaBanner
        title={isZh ? "需要更多产品信息？" : "Need more product information?"}
        description={isZh ? "我们可提供COA、TDS、SDS等技术文件" : "We can provide COA, TDS, SDS and other technical documents"}
        primaryCta={{
          label: isZh ? "联系我们" : "Contact Us",
          href: `/${locale}/contact`
        }}
      />
    </main>
  );
}

// Simple markdown to HTML converter
function simpleMarkdown(md: string): string {
  return md
    .replace(/^### (.*$)/gm, '<h3 class="text-lg font-semibold mt-6 mb-3 text-primary">$1</h3>')
    .replace(/^## (.*$)/gm, '<h2 class="text-xl font-bold mt-8 mb-4 text-primary">$1</h2>')
    .replace(/^# (.*$)/gm, '<h1 class="text-2xl font-bold mt-10 mb-6 text-primary">$1</h1>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-green-600 hover:underline">$1</a>')
    .replace(/^\- (.*$)/gm, '<li class="ml-4">$1</li>')
    .replace(/(<li.*<\/li>\n?)+/g, '<ul class="list-disc list-inside my-4 space-y-1">$&</ul>')
    .replace(/\|(.+)\|/g, (match) => {
      const cells = match.split('|').filter(c => c.trim() && !c.includes('---'));
      if (cells.length === 0) return '';
      return '<tr>' + cells.map(c => `<td class="border border-border px-3 py-2">${c.trim()}</td>`).join('') + '</tr>';
    })
    .replace(/(<tr>.*<\/tr>\n?)+/g, '<table class="w-full border-collapse border border-border my-4">$&</table>')
    .replace(/^> (.*$)/gm, '<blockquote class="border-l-4 border-green-500 pl-4 italic my-4 text-muted">$1</blockquote>')
    .replace(/^---$/gm, '<hr class="my-6 border-border" />')
    .replace(/\n\n/g, '</p><p class="my-3 text-muted">')
    .replace(/`(.*?)`/g, '<code class="bg-subtle px-1.5 py-0.5 rounded text-sm font-mono">$1</code>');
}
