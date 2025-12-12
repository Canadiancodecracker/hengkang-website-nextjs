import Link from "next/link";
import Image from "next/image";
import { Locale } from "@/i18n/locales";

const footerLinks = {
  company: [
    { en: "About Hengkang", zh: "关于恒康", href: "/about" },
    { en: "Certifications", zh: "资质荣誉", href: "/about#certifications" },
    { en: "Factory Tour", zh: "厂区环境", href: "/about#factory" },
    { en: "Our Team", zh: "员工风采", href: "/about#team" },
  ],
  products: [
    { en: "Metformin HCl", zh: "盐酸二甲双胍", href: "/products/metformin-hydrochloride" },
    { en: "Creatine Monohydrate", zh: "一水肌酸", href: "/products/creatine-monohydrate" },
    { en: "Guanidineacetic Acid", zh: "胍基乙酸", href: "/products/guanidineacetic-acid" },
    { en: "DICY Curing Agent", zh: "超细双氰胺", href: "/products/dicy-curing-agent" },
  ],
  resources: [
    { en: "Technical Innovation", zh: "技术创新", href: "/innovation" },
    { en: "Sustainability", zh: "可持续发展", href: "/sustainability" },
    { en: "News Center", zh: "新闻中心", href: "/news" },
    { en: "Careers", zh: "人力资源", href: "/careers" },
  ],
  contact: [
    { en: "Contact Us", zh: "联系我们", href: "/contact" },
  ]
};

const stats = [
  { en: "Founded 2013", zh: "成立于2013年", icon: "🏭" },
  { en: "130,000 m² Facility", zh: "占地13万平方米", icon: "📐" },
  { en: "¥200M Capital", zh: "注册资金2亿元", icon: "💰" },
  { en: "GMP Certified", zh: "GMP认证", icon: "✓" },
];

export function Footer({ locale }: { locale: Locale }) {
  const isZh = locale === "zh";

  return (
    <footer className="bg-primary text-white">
      {/* Stats bar */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-2xl">{stat.icon}</span>
                <span className="text-sm font-medium text-white/80">
                  {isZh ? stat.zh : stat.en}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-6 lg:mb-0">
            <Link href={`/${locale}`} className="block mb-6">
              <Image
                src="/uploads/logo.png"
                alt={isZh ? "宁夏恒康科技" : "Hengkang Technology"}
                width={140}
                height={42}
                className="brightness-0 invert opacity-90 hover:opacity-100 transition"
              />
            </Link>
            <p className="text-sm text-white/60 leading-relaxed mb-6">
              {isZh
                ? "充分利用氰胺产业的地域优势，打造世界优质的医药原料、动物营养、食品保健、新型材料等绿色制造产业基地。"
                : "Leveraging regional advantages in cyanamide chemistry to build a world-class green manufacturing base for pharmaceutical APIs, nutrition ingredients, and specialty chemicals."
              }
            </p>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">
              {isZh ? "关于恒康" : "Company"}
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <Link
                    href={`/${locale}${link.href}`}
                    className="text-sm text-white/60 hover:text-white transition"
                  >
                    {isZh ? link.zh : link.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">
              {isZh ? "产品中心" : "Products"}
            </h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link, i) => (
                <li key={i}>
                  <Link
                    href={`/${locale}${link.href}`}
                    className="text-sm text-white/60 hover:text-white transition"
                  >
                    {isZh ? link.zh : link.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">
              {isZh ? "资源中心" : "Resources"}
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, i) => (
                <li key={i}>
                  <Link
                    href={`/${locale}${link.href}`}
                    className="text-sm text-white/60 hover:text-white transition"
                  >
                    {isZh ? link.zh : link.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">
              {isZh ? "联系方式" : "Contact"}
            </h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>
                  {isZh
                    ? "银川生物科技园(贺兰工业区)洪胜东路"
                    : "Hongsheng East Road, Helan Industrial Park, Yinchuan, Ningxia"
                  }
                </span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:sales@hengkangchina.com" className="hover:text-white transition">
                  sales@hengkangchina.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+8618809507730" className="hover:text-white transition">
                  +86 188 0950 7730
                </a>
              </li>
            </ul>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-green-400 hover:text-green-300 transition"
            >
              {isZh ? "查看更多联系方式" : "View all contacts"}
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
            <div>
              © {new Date().getFullYear()} {isZh ? "宁夏恒康科技有限公司" : "Ningxia Hengkang Technology Co., Ltd."} ·
              <a
                href="https://beian.miit.gov.cn/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 hover:text-white/70 transition"
              >
                宁ICP备18001017号
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span>{isZh ? "医药原料" : "Pharmaceutical APIs"}</span>
              <span>•</span>
              <span>{isZh ? "动物营养" : "Animal Nutrition"}</span>
              <span>•</span>
              <span>{isZh ? "绿色制造" : "Green Manufacturing"}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
