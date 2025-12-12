import {Locale} from "@/i18n/locales";
import {Container} from "@/components/container";

export default async function Contact({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;

  const copy = locale === "zh"
    ? {
        title: "联系我们",
        lead: "欢迎业务咨询、样品申请与技术资料索取。我们通常在 1 个工作日内回复。",
        form: {name: "姓名", email: "邮箱", company: "公司/机构", message: "需求说明", send: "提交"}
      }
    : {
        title: "Contact us",
        lead: "For inquiries, samples, and technical documents. We typically respond within 1 business day.",
        form: {name: "Name", email: "Email", company: "Company/Organization", message: "Message", send: "Send"}
      };

  return (
    <main className="py-12">
      <Container>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">{copy.title}</h1>
            <p className="mt-4 text-base text-black/70">{copy.lead}</p>

            <div className="mt-8 rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold">{locale === "zh" ? "公司地址" : "Address"}</div>
              <p className="mt-2 text-sm text-black/70">
                {locale === "zh"
                  ? "宁夏 • 银川 • 生物科技园（请在 CMS 中填写具体地址与联系方式）"
                  : "Ningxia • Yinchuan • Biotech Park (fill exact address/contacts in CMS)"}
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
            <form className="grid gap-4" method="post" action="#">
              <input className="rounded-2xl border border-black/10 px-4 py-3 text-sm" placeholder={copy.form.name} />
              <input className="rounded-2xl border border border-black/10 px-4 py-3 text-sm" placeholder={copy.form.email} />
              <input className="rounded-2xl border border-black/10 px-4 py-3 text-sm" placeholder={copy.form.company} />
              <textarea className="min-h-[140px] rounded-2xl border border-black/10 px-4 py-3 text-sm" placeholder={copy.form.message} />
              <button className="rounded-full bg-black px-5 py-3 text-sm font-medium text-white hover:bg-black/90" type="submit">
                {copy.form.send}
              </button>
              <p className="text-xs text-black/50">
                {locale === "zh" ? "提示：此示例表单需要你们接入邮件/CRM 或 API 才能真正发送。" : "Note: Connect this form to email/CRM or an API to make it functional."}
              </p>
            </form>
          </div>
        </div>
      </Container>
    </main>
  );
}
