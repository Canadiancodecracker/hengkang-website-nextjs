import Link from "next/link";

export function FeatureCard({
  title,
  description,
  href
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link href={href} className="group block rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="text-base font-semibold tracking-tight">{title}</div>
      <p className="mt-3 text-sm text-black/70">{description}</p>
      <div className="mt-5 text-sm font-medium text-black/80 group-hover:text-black">Learn more →</div>
    </Link>
  );
}

export function PostCard({
  title,
  excerpt,
  href,
  meta
}: {
  title: string;
  excerpt: string;
  href: string;
  meta: string;
}) {
  return (
    <Link href={href} className="group block rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="text-xs font-medium text-black/50">{meta}</div>
      <div className="mt-2 text-base font-semibold tracking-tight">{title}</div>
      <p className="mt-3 text-sm text-black/70">{excerpt}</p>
      <div className="mt-5 text-sm font-medium text-black/80 group-hover:text-black">Read →</div>
    </Link>
  );
}
