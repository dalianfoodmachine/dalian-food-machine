import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/site";
import ContactForm from "@/components/website/ContactForm";

type PageProps = {
  params: Promise<{ locale: string }>;
  searchParams?: Promise<{ product?: string | string[] }>;
};

// Verified against 素材/舊網站內容/00-公司資訊.md and the supplied contact details.
const address = "桃園市新屋區濱海路永興段337號";
const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
const copy = {
  "zh-TW": {
    title: "聯絡我們",
    description:
      "聯絡大連食品機械，討論設備選購、配方試作或維護需求。電話 03-486-3785，LINE @dalianltd，桃園市新屋區。",
    eyebrow: "從一段對話開始",
    heading: "聯絡我們，聊聊你的下一步。",
    lead: "選機器、約試做，或是機台用起來有問題，都可以找我們。先告訴我們你想做什麼；如果是維修，記得附上機型和遇到的狀況。",
    infoTitle: "找到我們",
    company: "大連食品機械有限公司",
    phone: "電話",
    phoneValue: "03-486-3785",
    email: "電子郵件",
    line: "LINE 官方帳號",
    lineAction: "加入 @dalianltd，開始對話",
    location: "辦公室／廠區",
    address,
    map: "在 Google Maps 查看位置（外部網站）",
    visit: "如需到訪或討論試機，請先透過電話或 LINE 確認安排。",
    prepareTitle: "先準備一點資訊，討論更具體。",
    prepare: [
      "選購：想做的食品、每批份量與工作空間。",
      "試作：麵皮、餡料特性與期望的成品。",
      "維護：機型、序號、問題描述與停機後的照片。",
    ],
    support: "先查看常見問題與維護說明",
  },
  en: {
    title: "Contact us",
    description:
      "Contact Dalian Food Machine about equipment, recipe trials or maintenance. Call +886 3 486 3785 or reach LINE @dalianltd in Xinwu, Taoyuan, Taiwan.",
    eyebrow: "IT STARTS WITH A CONVERSATION",
    heading: "Contact us. Let’s talk about your next step.",
    lead: "Opening a small shop, making preparation more manageable or looking for help with a familiar machine? Tell us what you have in mind, and we can work out where to begin.",
    infoTitle: "Get in touch",
    company: "DALIAN FOOD MACHINE CO., LTD.",
    phone: "Phone",
    phoneValue: "+886 3 486 3785",
    email: "Email",
    line: "Official LINE account",
    lineAction: "Add @dalianltd and start a conversation",
    location: "Office / factory",
    address:
      "No. 337, Yongxing Section, Binhai Road, Xinwu District, Taoyuan City, Taiwan",
    map: "View location on Google Maps (external website)",
    visit:
      "For a visit or a possible machine trial, please contact us by phone or LINE to confirm arrangements first.",
    prepareTitle: "A few details make the conversation more useful.",
    prepare: [
      "Buying: your food, batch size and available workspace.",
      "Trials: wrapper and filling characteristics and the result you want.",
      "Maintenance: model, serial number, symptoms and photos taken with the machine stopped.",
    ],
    support: "Read the FAQs and care guidance first",
  },
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const language = locale === "en" ? "en" : "zh-TW";
  const t = copy[language];
  return {
    title: t.title,
    description: t.description,
    alternates: {
      canonical: `/${language}/contact`,
      languages: {
        "zh-TW": "/zh-TW/contact",
        en: "/en/contact",
        "x-default": "/zh-TW/contact",
      },
    },
  };
}

export default async function ContactPage({ params, searchParams }: PageProps) {
  const { locale } = await params;
  const language = locale === "en" ? "en" : "zh-TW";
  const t = copy[language];
  const { product } = (await searchParams) ?? {};
  const selected = products.find((item) => item.slug === product);
  const initialProduct =
    selected?.name[language === "en" ? 1 : 0] ??
    (product === "manual"
      ? language === "en"
        ? "Request a user manual"
        : "索取使用手冊"
      : "");

  return (
    <div className="inner-page text-[#3e3027]">
      <section className="container page-intro">
        <span className="eyebrow">{t.eyebrow}</span>
        <h1 className="max-w-4xl">{t.heading}</h1>
        <p className="muted mt-6 max-w-3xl text-lg leading-relaxed">{t.lead}</p>
      </section>
      <section className="section" aria-labelledby="contact-info">
        <div className="container contact-grid items-start">
          <div className="min-w-0">
            <h2 id="contact-info" className="section-title">
              {t.infoTitle}
            </h2>
            <p className="mb-7 font-semibold">{t.company}</p>
            <address className="not-italic">
              <dl className="space-y-6">
                <div>
                  <dt className="muted mb-2 text-sm">{t.phone}</dt>
                  <dd>
                    <a href="tel:034863785" className="text-link">
                      {t.phoneValue}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="muted mb-2 text-sm">{t.email}</dt>
                  <dd>
                    <a
                      href="mailto:dalianfood@gmail.com"
                      className="text-link break-all"
                    >
                      dalianfood@gmail.com
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="muted mb-2 text-sm">{t.line}</dt>
                  <dd>
                    <a
                      href="https://line.me/R/ti/p/@dalianltd"
                      className="text-link"
                    >
                      {t.lineAction}
                      <span aria-hidden="true"> ↗</span>
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="muted mb-2 text-sm">{t.location}</dt>
                  <dd className="leading-relaxed">{t.address}</dd>
                </div>
              </dl>
            </address>
            <a href={mapUrl} className="text-link mt-5">
              {t.map}
              <span aria-hidden="true"> ↗</span>
            </a>
            <p className="muted mt-4 text-sm leading-relaxed">{t.visit}</p>
            <aside
              className="mt-9 rounded-2xl bg-[#3e3027]/5 p-6"
              aria-labelledby="contact-prepare"
            >
              <h3 id="contact-prepare" className="mb-4 text-lg font-semibold">
                {t.prepareTitle}
              </h3>
              <ul className="list-disc space-y-3 pl-5 text-sm marker:text-[#9b4a24]">
                {t.prepare.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link
                href={`/${language}/maintenance`}
                className="text-link mt-6"
              >
                {t.support}
              </Link>
            </aside>
          </div>
          <ContactForm
            key={initialProduct}
            locale={language}
            initialProduct={initialProduct}
          />
        </div>
      </section>
    </div>
  );
}
