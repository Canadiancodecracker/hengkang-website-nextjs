import Link from "next/link";
import Image from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
  image?: string;
  badge?: string;
}

export function FeatureCard({ title, description, href, icon, image, badge }: FeatureCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col rounded-2xl border border-border bg-white overflow-hidden card-hover"
    >
      {image && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
          {badge && (
            <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold bg-green-500 text-white rounded-full">
              {badge}
            </span>
          )}
        </div>
      )}
      <div className="flex-1 p-6">
        {icon && (
          <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mb-4 text-green-600 group-hover:bg-green-100 transition">
            {icon}
          </div>
        )}
        <h3 className="text-lg font-semibold text-primary group-hover:text-green-600 transition">
          {title}
        </h3>
        <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-3">
          {description}
        </p>
        <div className="mt-4 flex items-center gap-2 text-sm font-medium text-green-600 group-hover:gap-3 transition-all">
          <span>Learn more</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

interface ProductCardProps {
  name: string;
  nameZh?: string;
  formula?: string;
  cas?: string;
  description: string;
  href: string;
  image?: string;
  tags?: string[];
}

export function ProductCard({ name, nameZh, formula, cas, description, href, image, tags }: ProductCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-2xl border border-border bg-white overflow-hidden card-hover"
    >
      <div className="relative h-40 bg-gradient-to-br from-subtle to-green-50 flex items-center justify-center overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="text-6xl font-bold text-green-200 group-hover:text-green-300 transition">
            {formula || name[0]}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      </div>
      <div className="flex-1 p-5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-semibold text-primary group-hover:text-green-600 transition">
              {name}
            </h3>
            {nameZh && (
              <div className="text-sm text-muted">{nameZh}</div>
            )}
          </div>
          {cas && (
            <span className="text-xs font-mono text-muted bg-subtle px-2 py-1 rounded">
              {cas}
            </span>
          )}
        </div>
        <p className="mt-3 text-sm text-muted leading-relaxed line-clamp-2">
          {description}
        </p>
        {tags && tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 bg-green-50 text-green-700 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <div className="mt-4 flex items-center gap-2 text-sm font-medium text-green-600 group-hover:gap-3 transition-all">
          <span>View details</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

interface PostCardProps {
  title: string;
  excerpt: string;
  href: string;
  meta: string;
  image?: string;
  category?: string;
}

export function PostCard({ title, excerpt, href, meta, image, category }: PostCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-2xl border border-border bg-white overflow-hidden card-hover"
    >
      {image && (
        <div className="relative h-44 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex-1 p-5">
        <div className="flex items-center gap-2 mb-3">
          {category && (
            <span className="text-xs font-semibold px-2 py-1 bg-accent-light/10 text-accent-light rounded-full">
              {category}
            </span>
          )}
          <span className="text-xs text-muted">{meta}</span>
        </div>
        <h3 className="font-semibold text-primary group-hover:text-green-600 transition line-clamp-2">
          {title}
        </h3>
        <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-2">
          {excerpt}
        </p>
        <div className="mt-4 flex items-center gap-2 text-sm font-medium text-green-600 group-hover:gap-3 transition-all">
          <span>Read more</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

interface StatCardProps {
  value: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
}

export function StatCard({ value, label, description, icon }: StatCardProps) {
  return (
    <div className="relative p-6 rounded-2xl bg-white border border-border card-hover">
      {icon && (
        <div className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center text-green-600">
          {icon}
        </div>
      )}
      <div className="stat-value">{value}</div>
      <div className="mt-2 font-semibold text-primary">{label}</div>
      {description && (
        <p className="mt-1 text-sm text-muted">{description}</p>
      )}
    </div>
  );
}

interface TeamCardProps {
  name: string;
  role: string;
  email?: string;
  phone?: string;
  image?: string;
}

export function TeamCard({ name, role, email, phone, image }: TeamCardProps) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-border card-hover">
      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
        {image ? (
          <Image src={image} alt={name} width={56} height={56} className="rounded-full object-cover" />
        ) : (
          <span className="text-white text-lg font-bold">{name[0]}</span>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-semibold text-primary">{name}</div>
        <div className="text-sm text-muted">{role}</div>
        {email && (
          <a href={`mailto:${email}`} className="text-sm text-green-600 hover:underline truncate block">
            {email}
          </a>
        )}
        {phone && (
          <a href={`tel:${phone}`} className="text-sm text-muted hover:text-primary">
            {phone}
          </a>
        )}
      </div>
    </div>
  );
}
