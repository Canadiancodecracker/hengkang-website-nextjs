import Link from "next/link";
import {Locale} from "@/i18n/locales";
import {Container} from "@/components/container";
import {getJobs} from "@/lib/content/fs";

export default async function Careers({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  const jobs = getJobs(locale);

  return (
    <main className="py-12">
      <Container>
        <div className="max-w-3xl">
          <h1 className="text-3xl font-semibold tracking-tight">{locale === "zh" ? "加入我们" : "Careers"}</h1>
          <p className="mt-4 text-base text-black/70">
            {locale === "zh" ? "与我们一起推动绿色制造与高质量产品的全球化发展。" : "Join us to advance green manufacturing and high-quality ingredients."}
          </p>
        </div>

        <div id="culture" className="mt-10 rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
          <div className="text-sm font-semibold">{locale === "zh" ? "恒康文化" : "Life at Hengkang"}</div>
          <p className="mt-3 text-sm text-black/70">
            {locale === "zh"
              ? "专业、务实、持续改进。我们重视合规、质量与创新，倡导安全与责任。"
              : "Professional, pragmatic, continuously improving. We value compliance, quality and innovation—built on safety and responsibility."}
          </p>
        </div>

        <div className="mt-8 grid gap-4">
          {jobs.map((j) => (
            <Link key={j.slug} href={`/${locale}/careers/${j.slug}`} className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="text-xs font-medium text-black/50">{j.department} • {j.location}</div>
              <div className="mt-2 text-lg font-semibold tracking-tight">{j.title}</div>
              <p className="mt-3 text-sm text-black/70">{j.excerpt}</p>
            </Link>
          ))}
        </div>
      </Container>
    </main>
  );
}
