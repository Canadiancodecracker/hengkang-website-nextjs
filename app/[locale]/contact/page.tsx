import { Locale } from "@/i18n/locales";
import { PageHero } from "@/components/section";
import { TeamCard } from "@/components/cards";

const salesContacts = {
  international: [
    { name: "苏女士 / Ms. Su", role: "International Sales", phone: "+86 188 0950 7730", email: "sarahsu@hengkangchina.com" },
    { name: "赵先生 / Mr. Zhao", role: "International Sales", phone: "+86 137 0959 1246", email: "zhaojun@hengkangchina.com" },
    { name: "王女士 / Ms. Wang", role: "International Sales", phone: "+86 133 0959 3959", email: "sissiwang@hengkangchina.com" },
  ],
  domestic: [
    { name: "吴先生 / Mr. Wu", role: "Domestic Sales", phone: "+86 139 9530 3145", email: "wuli@hengkangchina.com" },
    { name: "张先生 / Mr. Zhang", role: "Domestic Sales", phone: "+86 138 9536 2037", email: "zhangyuanliang@hengkangchina.com" },
  ],
  other: [
    { name: "张先生 / Mr. Zhang Xiaohu", role: "General Inquiry", phone: "+86 135 1958 6609", email: "zhangxiaohu@hengkangchina.com" },
    { name: "Mark 刁先生 / Mr. Mark Diao", role: "Business Development", phone: "+86 137 0950 3682", email: "MarkDiao@hengkangchina.com" },
  ]
};

export default async function Contact({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const isZh = locale === "zh";

  return (
    <main>
      <PageHero
        title={isZh ? "联系我们" : "Contact Us"}
        subtitle={isZh ? "联系方式" : "Get in Touch"}
        description={isZh
          ? "欢迎业务咨询、样品申请与技术资料索取。我们通常在1个工作日内回复。"
          : "For business inquiries, sample requests, and technical documentation. We typically respond within 1 business day."
        }
        breadcrumb={[
          { label: isZh ? "首页" : "Home", href: `/${locale}` },
          { label: isZh ? "联系我们" : "Contact" }
        ]}
      />

      <div className="py-12 lg:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-subtle rounded-2xl p-8">
                <h2 className="text-xl font-bold text-primary mb-6">
                  {isZh ? "发送询盘" : "Send an Inquiry"}
                </h2>
                <form className="grid gap-5" method="post" action="#">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        {isZh ? "姓名 *" : "Name *"}
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition"
                        placeholder={isZh ? "您的姓名" : "Your name"}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        {isZh ? "邮箱 *" : "Email *"}
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition"
                        placeholder={isZh ? "您的邮箱" : "Your email"}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        {isZh ? "公司/机构" : "Company/Organization"}
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition"
                        placeholder={isZh ? "公司名称" : "Company name"}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        {isZh ? "电话" : "Phone"}
                      </label>
                      <input
                        type="tel"
                        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition"
                        placeholder={isZh ? "联系电话" : "Phone number"}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      {isZh ? "产品兴趣" : "Product Interest"}
                    </label>
                    <select
                      className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition"
                    >
                      <option value="">{isZh ? "选择产品" : "Select a product"}</option>
                      <option value="metformin">{isZh ? "盐酸二甲双胍" : "Metformin Hydrochloride"}</option>
                      <option value="creatine">{isZh ? "一水肌酸" : "Creatine Monohydrate"}</option>
                      <option value="gaa">{isZh ? "胍基乙酸 (GAA)" : "Guanidineacetic Acid (GAA)"}</option>
                      <option value="dicy">{isZh ? "超细双氰胺 (DICY)" : "DICY Curing Agent"}</option>
                      <option value="other">{isZh ? "其他" : "Other"}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      {isZh ? "需求说明 *" : "Message *"}
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition resize-none"
                      placeholder={isZh ? "请描述您的需求，包括用量、规格要求等" : "Please describe your requirements, including volume, specifications, etc."}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-xs text-muted">
                      {isZh ? "* 为必填项" : "* Required fields"}
                    </p>
                    <button
                      type="submit"
                      className="btn-accent"
                    >
                      {isZh ? "提交询盘" : "Submit Inquiry"}
                      <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              {/* Address Card */}
              <div className="p-6 rounded-2xl border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-primary">
                    {isZh ? "公司地址" : "Company Address"}
                  </h3>
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  {isZh
                    ? "银川生物科技园(原暖泉工业区)洪胜东路\n宁夏 • 银川 • 贺兰工业园区"
                    : "Hongsheng East Road, Yinchuan Biotech Park (formerly Nuanquan Industrial Zone)\nHelan Industrial Park, Yinchuan, Ningxia, China"
                  }
                </p>
              </div>

              {/* Email Card */}
              <div className="p-6 rounded-2xl border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-primary">
                    {isZh ? "电子邮件" : "Email"}
                  </h3>
                </div>
                <a href="mailto:sales@hengkangchina.com" className="text-sm text-green-600 hover:underline">
                  sales@hengkangchina.com
                </a>
              </div>

              {/* Hours Card */}
              <div className="p-6 rounded-2xl border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-primary">
                    {isZh ? "工作时间" : "Business Hours"}
                  </h3>
                </div>
                <p className="text-sm text-muted">
                  {isZh
                    ? "周一至周五: 8:30 - 17:30 (CST)\n周六至周日: 休息"
                    : "Mon-Fri: 8:30 AM - 5:30 PM (CST)\nSat-Sun: Closed"
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sales Team Section */}
      <div className="py-12 lg:py-16 bg-subtle">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-primary mb-8">
            {isZh ? "销售团队联系方式" : "Sales Team Contacts"}
          </h2>

          {/* International Sales */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">🌍</span>
              {isZh ? "国际销售 (含外贸公司)" : "International Sales (incl. Trading Companies)"}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {salesContacts.international.map((c) => (
                <TeamCard key={c.email} {...c} />
              ))}
            </div>
          </div>

          {/* Domestic Sales */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center text-red-600">🇨🇳</span>
              {isZh ? "国内销售" : "Domestic Sales (China)"}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {salesContacts.domestic.map((c) => (
                <TeamCard key={c.email} {...c} />
              ))}
            </div>
          </div>

          {/* Other Contacts */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-green-600">📞</span>
              {isZh ? "其他联系方式" : "Other Contacts"}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {salesContacts.other.map((c) => (
                <TeamCard key={c.email} {...c} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Map Section Placeholder */}
      <div className="h-80 bg-subtle flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-3">🗺️</div>
          <p className="text-muted">
            {isZh ? "地图导航 - 即将上线" : "Map Navigation - Coming Soon"}
          </p>
        </div>
      </div>
    </main>
  );
}
