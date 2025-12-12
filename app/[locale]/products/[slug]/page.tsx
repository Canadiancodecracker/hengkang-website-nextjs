import {Locale} from "@/i18n/locales";
import {getProduct} from "@/lib/content/fs";
import {Container} from "@/components/container";
import Link from "next/link";

export default async function ProductDetail({
  params
}: {
  params: Promise<{locale: Locale; slug: string}>;
}) {
  const {locale, slug} = await params;
  const p = getProduct(locale, slug);

  return (
    <main className="py-12">
      <Container>
        <div className="max-w-3xl">
          <div className="text-xs font-medium text-black/50">{p.category}</div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">{p.name}</h1>
          <p className="mt-4 text-base text-black/70">{p.shortDescription}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={`/${locale}/contact`} className="rounded-full bg-black px-5 py-3 text-sm font-medium text-white hover:bg-black/90">
              {locale === "zh" ? "索取报价/样品" : "Request quote / sample"}
            </Link>
            <Link href={`/${locale}/products`} className="rounded-full border border-black/10 px-5 py-3 text-sm font-medium text-black/80 hover:bg-black/5">
              {locale === "zh" ? "返回产品列表" : "Back to products"}
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold">{locale === "zh" ? "亮点" : "Highlights"}</div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-black/70">
                {p.highlights.map((x) => <li key={x}>{x}</li>)}
              </ul>
            </div>

            <div className="mt-6 rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold">{locale === "zh" ? "应用" : "Applications"}</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.applications.map((x) => (
                  <span key={x} className="rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs text-black/70">
                    {x}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold">{locale === "zh" ? "关键指标" : "Key specifications"}</div>
              <div className="mt-4 divide-y divide-black/10 text-sm">
                {p.specs.map((s) => (
                  <div key={s.item} className="flex items-start justify-between gap-6 py-3">
                    <div className="text-black/60">{s.item}</div>
                    <div className="font-medium text-black">{s.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold">{locale === "zh" ? "包装" : "Packaging"}</div>
              <div className="mt-4 space-y-2 text-sm text-black/70">
                {p.packaging.map((pk) => (
                  <div key={pk.type + pk.net} className="flex items-center justify-between gap-6">
                    <div>{pk.type}</div>
                    <div className="font-medium text-black">{pk.net}</div>
                  </div>
                ))}
              </div>
            </div>

            {p.documents?.length ? (
              <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold">{locale === "zh" ? "资料下载" : "Downloads"}</div>
                <div className="mt-4 grid gap-2 text-sm">
                  {p.documents.map((d) => (
                    <a key={d.label} className="rounded-2xl border border-black/10 px-4 py-3 hover:bg-black/5" href={d.file}>
                      <div className="font-medium">{d.label}</div>
                      <div className="text-xs text-black/50">{d.type}</div>
                    </a>
                  ))}
                </div>
              </div>
            ) : null}
          </aside>
        </div>
      </Container>
    </main>
  );
}
