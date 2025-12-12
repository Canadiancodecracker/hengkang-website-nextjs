import Link from "next/link";
import {Locale} from "@/i18n/locales";
import {Container} from "@/components/container";
import {getProducts} from "@/lib/content/fs";

const catLabel = (locale: Locale, c: string) => {
  const map = {
    en: { api: "Pharmaceutical APIs", "food-additive": "Food Additives", "feed-additive": "Feed Additives" },
    zh: { api: "原料药（API）", "food-additive": "食品添加剂", "feed-additive": "饲料添加剂" }
  } as const;
  return (map[locale] as any)[c] ?? c;
};

export default async function Products({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  const products = getProducts(locale);

  return (
    <main className="py-12">
      <Container>
        <div className="max-w-3xl">
          <h1 className="text-3xl font-semibold tracking-tight">{locale === "zh" ? "产品" : "Products"}</h1>
          <p className="mt-4 text-base text-black/70">
            {locale === "zh" ? "按类别浏览产品，并在每个产品页面下载技术资料。" : "Browse by category and download technical documents on each product page."}
          </p>
        </div>

        <div className="mt-10 grid gap-4">
          {products.map((p) => (
            <Link
              key={p.slug}
              href={`/${locale}/products/${p.slug}`}
              className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="text-xs font-medium text-black/50">{catLabel(locale, p.category)}</div>
              <div className="mt-2 text-lg font-semibold tracking-tight">{p.name}</div>
              <p className="mt-3 text-sm text-black/70">{p.shortDescription}</p>
            </Link>
          ))}
        </div>
      </Container>
    </main>
  );
}
