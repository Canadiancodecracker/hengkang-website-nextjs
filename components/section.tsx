import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  eyebrow?: string;
  title: string;
  description?: string;
  dark?: boolean;
  centered?: boolean;
  className?: string;
}

export function Section({
  children,
  eyebrow,
  title,
  description,
  dark = false,
  centered = false,
  className = ""
}: SectionProps) {
  return (
    <section className={`py-16 lg:py-24 ${dark ? "section-dark" : ""} ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className={`mb-12 ${centered ? "text-center max-w-3xl mx-auto" : "max-w-2xl"}`}>
          {eyebrow && (
            <div className={`text-sm font-semibold uppercase tracking-widest mb-3 ${dark ? "text-green-400" : "text-green-600"
              }`}>
              {eyebrow}
            </div>
          )}
          <h2 className={`heading-lg ${dark ? "text-white" : "text-primary"}`}>
            {title}
          </h2>
          {description && (
            <p className={`mt-4 text-lg leading-relaxed ${dark ? "text-white/70" : "text-muted"
              }`}>
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

interface SectionWithImageProps {
  children: ReactNode;
  eyebrow?: string;
  title: string;
  description?: string;
  image: ReactNode;
  imagePosition?: "left" | "right";
  dark?: boolean;
}

export function SectionWithImage({
  children,
  eyebrow,
  title,
  description,
  image,
  imagePosition = "right",
  dark = false
}: SectionWithImageProps) {
  return (
    <section className={`py-16 lg:py-24 ${dark ? "section-dark" : ""}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${imagePosition === "left" ? "lg:[&>*:first-child]:order-2" : ""
          }`}>
          <div>
            {eyebrow && (
              <div className={`text-sm font-semibold uppercase tracking-widest mb-3 ${dark ? "text-green-400" : "text-green-600"
                }`}>
                {eyebrow}
              </div>
            )}
            <h2 className={`heading-lg ${dark ? "text-white" : "text-primary"}`}>
              {title}
            </h2>
            {description && (
              <p className={`mt-4 text-lg leading-relaxed ${dark ? "text-white/70" : "text-muted"
                }`}>
                {description}
              </p>
            )}
            <div className="mt-8">
              {children}
            </div>
          </div>
          <div className="relative">
            {image}
          </div>
        </div>
      </div>
    </section>
  );
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  breadcrumb?: { label: string; href?: string }[];
  backgroundImage?: string;
  compact?: boolean;
}

export function PageHero({
  title,
  subtitle,
  description,
  breadcrumb,
  backgroundImage,
  compact = false
}: PageHeroProps) {
  return (
    <section className={`relative overflow-hidden ${compact ? "py-12 lg:py-16" : "py-16 lg:py-24"}`}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      {backgroundImage && (
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      <div className="absolute inset-0 hero-pattern opacity-30" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {breadcrumb && breadcrumb.length > 0 && (
          <nav className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-white/60">
              {breadcrumb.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  {i > 0 && <span>/</span>}
                  {item.href ? (
                    <a href={item.href} className="hover:text-white transition">
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-white">{item.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className="max-w-3xl">
          {subtitle && (
            <div className="text-sm font-semibold uppercase tracking-widest text-green-400 mb-3">
              {subtitle}
            </div>
          )}
          <h1 className="heading-xl text-white">
            {title}
          </h1>
          {description && (
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

interface CtaBannerProps {
  title: string;
  description?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  dark?: boolean;
}

export function CtaBanner({
  title,
  description,
  primaryCta,
  secondaryCta,
  dark = true
}: CtaBannerProps) {
  return (
    <section className={`py-16 lg:py-20 ${dark ? "section-dark" : "bg-subtle"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h2 className={`heading-md ${dark ? "text-white" : "text-primary"}`}>
              {title}
            </h2>
            {description && (
              <p className={`mt-2 text-lg ${dark ? "text-white/70" : "text-muted"}`}>
                {description}
              </p>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a href={primaryCta.href} className={dark ? "btn-accent" : "btn-primary"}>
              {primaryCta.label}
            </a>
            {secondaryCta && (
              <a
                href={secondaryCta.href}
                className={`btn-secondary ${dark ? "border-white/30 text-white hover:bg-white/10" : ""}`}
              >
                {secondaryCta.label}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
