import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

type PageProps = { params: Promise<{ locale: string }> };

// Sources: 素材/舊網站內容/01-關於大連.md and daliantw/{退款政策,保固維修}.md.
// A discussion guide, without carrying historical shipping or payment terms forward.
const copy = {
  "zh-TW": {
    title: "選購指南",
    description:
      "從製作需求、配方試作、配置報價到交機準備，四個步驟找到適合自己的食品機械。",
    eyebrow: "讓第一步，踏實一點",
    heading: "選購指南，從你想做的食物開始。",
    lead: "不用先背熟規格。帶著你的配方、想做的份量，還有對未來小店的想像，一步一步確認適合的設備。",
    imageAlt: "花紋瓷盤上不同外形的水餃成品",
    introTitle: "先認識你的日常，再選一台機器。",
    introText:
      "同樣是水餃，麵皮尺寸、餡料特性與成品形狀都可能不同。實際試作與工作空間的確認，比只比較一個產量數字更有幫助。",
    stepsTitle: "四個步驟，把想法變成合適的配置。",
    steps: [
      {
        title: "聊聊你的製作需求",
        text: "告訴我們要做水餃、雲吞、鍋貼，還是其他食品。從目前最花時間的工序、每批預計份量與可用人手開始，確認希望設備協助的地方。",
        checklist: [
          "食品種類、成品大小與形狀",
          "每批或每日需求量、目前製作方式",
          "工作桌、動線與可用空間",
        ],
      },
      {
        title: "用實際配方確認適用性",
        text: "麵皮與餡料會影響成型、封口和出餡。先與我們確認是否安排試機，以及需準備的原料與條件，再依試作結果討論模具及機型。",
        checklist: [
          "麵皮尺寸、厚度與餡料特性",
          "期望的成品重量、外觀與口感",
          "試作安排、攜帶材料與確認項目",
        ],
      },
      {
        title: "確認配置與完整報價",
        text: "決定前，把機型、模具、配件與服務範圍逐一確認。價格、稅費、付款條件、運送與安裝內容，以正式商城訂單或雙方確認的報價為準。",
        checklist: [
          "機型、電壓、尺寸與配件清單",
          "付款方式、運送及安裝相關費用",
          "保固內容、售後窗口與訂購條件",
        ],
      },
      {
        title: "準備交機與安心使用",
        text: "配送前確認收貨地點、進出通道、工作桌與電源條件。到貨時核對外觀、機型、配件及隨附手冊；操作與清潔方式不確定時，先聯絡我們確認再開機。",
        checklist: [
          "交貨安排依備貨狀況及雙方確認為準",
          "樓層、搬運動線與現場條件",
          "驗收、操作說明、清潔保養與憑證留存",
        ],
      },
    ],
    note: "交貨與安裝時間需依機型、配置、備貨及配送條件確認，本頁不承諾固定送達天數。",
    beforeTitle: "訂購前，別漏掉這幾件事。",
    before: [
      {
        title: "把總費用一起問清楚",
        text: "除了機台價格，也請確認模具、選配、稅費、運輸、搬運與現場服務是否包含在報價中。",
      },
      {
        title: "留下可以核對的資料",
        text: "保留訂單、報價、購買憑證、保證書與配件清單。到貨若有損傷、缺件或規格疑問，先拍照並聯絡購買窗口。",
      },
      {
        title: "確認購買管道的條件",
        text: "官方商城的付款、配送與退換貨說明，請在下單前查看當次訂單適用內容；經銷商訂單請向原購買窗口確認。",
      },
    ],
    ctaTitle: "還在想哪一台適合你？",
    ctaText: "先說說想做的食物就好。我們一起把問題問清楚，再決定下一步。",
    contact: "討論我的需求",
    products: "瀏覽設備",
    shop: "前往官方商城（外部網站）",
    care: "查看保固與維護說明",
  },
  en: {
    title: "Buying guide",
    description:
      "Four steps from your food and recipe to trials, quotations and delivery preparation, helping you choose suitable food equipment.",
    eyebrow: "A CONSIDERED FIRST STEP",
    heading: "Buying guide. Start with the food you want to make.",
    lead: "You do not need to memorise a specification sheet. Bring your recipe, the quantities you have in mind and your plans for the business. We can work through the equipment choices together.",
    imageAlt: "Dumplings in different shapes on a patterned ceramic plate",
    introTitle: "Understand your working day before choosing a machine.",
    introText:
      "Even dumplings differ in wrapper size, filling consistency and shape. A trial with your own product and a check of your workspace can tell you more than comparing a single output figure.",
    stepsTitle: "Four steps from an idea to a suitable setup.",
    steps: [
      {
        title: "Describe what you want to make",
        text: "Tell us whether you make dumplings, wontons, potstickers or another food. Start with the task taking the most time, your planned batch size and available staff, so we can understand where equipment could help.",
        checklist: [
          "Food type, finished size and shape",
          "Batch or daily quantities and your current process",
          "Worktable, workflow and available space",
        ],
      },
      {
        title: "Check suitability with your recipe",
        text: "Wrappers and filling affect forming, sealing and portioning. Contact us to discuss whether to arrange a trial and what ingredients and conditions it requires, then review the mould and model against the results.",
        checklist: [
          "Wrapper dimensions, thickness and filling characteristics",
          "Desired finished weight, appearance and texture",
          "Trial arrangements, ingredients and points to verify",
        ],
      },
      {
        title: "Agree on the setup and quotation",
        text: "Confirm the model, moulds, accessories and scope of service before deciding. Prices, taxes, payment terms, shipping and installation are subject to the official shop order or the quotation agreed with you.",
        checklist: [
          "Model, voltage, dimensions and accessory list",
          "Payment terms, shipping and installation charges",
          "Warranty, support contact and ordering terms",
        ],
      },
      {
        title: "Prepare for delivery and daily use",
        text: "Confirm the delivery location, access route, worktable and power supply in advance. On arrival, check the condition, model, accessories and supplied manual. Ask us about any operation or cleaning instructions you are unsure of before switching on.",
        checklist: [
          "Delivery depends on availability and agreed arrangements",
          "Floor access, handling route and site requirements",
          "Acceptance checks, instructions, care and purchase records",
        ],
      },
    ],
    note: "Delivery and installation timing depend on the model, configuration, availability and transport requirements. This page does not promise a fixed number of days to delivery.",
    beforeTitle: "A few things to confirm before ordering.",
    before: [
      {
        title: "Ask about the total cost",
        text: "Alongside the machine price, check whether moulds, options, taxes, transport, handling and on-site services are included in the quotation.",
      },
      {
        title: "Keep the supporting documents",
        text: "Retain your order, quotation, proof of purchase, warranty document and accessory list. If anything arrives damaged, missing or different from the agreed specifications, take photos and contact your seller.",
      },
      {
        title: "Check the terms for your purchase channel",
        text: "Before placing an order in the official shop, read the payment, delivery and return information applicable to that order. For dealer purchases, confirm the terms with your original seller.",
      },
    ],
    ctaTitle: "Still deciding which machine fits?",
    ctaText:
      "Start by telling us about your food. We can work through the questions before you decide on the next step.",
    contact: "Discuss my needs",
    products: "Browse equipment",
    shop: "Visit the official shop (external website)",
    care: "Read about warranty and care",
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
      canonical: `/${language}/purchasing`,
      languages: {
        "zh-TW": "/zh-TW/purchasing",
        en: "/en/purchasing",
        "x-default": "/zh-TW/purchasing",
      },
    },
  };
}

export default async function PurchasingPage({ params }: PageProps) {
  const { locale } = await params;
  const language = locale === "en" ? "en" : "zh-TW";
  const t = copy[language];

  return (
    <div className="inner-page text-[#3e3027]">
      <section className="container page-intro">
        <span className="eyebrow">{t.eyebrow}</span>
        <h1 className="max-w-4xl">{t.heading}</h1>
        <p className="muted mt-6 max-w-3xl text-lg leading-relaxed">{t.lead}</p>
      </section>
      <section className="section" aria-labelledby="buying-start">
        <div className="container grid-2 items-center">
          <Image
            src="/media/food.webp"
            alt={t.imageAlt}
            width={1600}
            height={1600}
            sizes="(max-width: 680px) 100vw, 50vw"
            className="aspect-square w-full rounded-3xl object-cover"
          />
          <div>
            <h2 id="buying-start" className="section-title">
              {t.introTitle}
            </h2>
            <p className="muted leading-loose">{t.introText}</p>
            <Link href={`/${language}/products`} className="text-link">
              {t.products}
              <span aria-hidden="true"> →</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="section" aria-labelledby="buying-steps">
        <div className="container">
          <h2 id="buying-steps" className="section-title">
            {t.stepsTitle}
          </h2>
          <ol className="grid-2 mt-8 list-none" aria-labelledby="buying-steps">
            {t.steps.map((step, index) => (
              <li key={step.title} className="card">
                <span
                  aria-hidden="true"
                  className="mb-6 flex size-12 items-center justify-center rounded-full bg-[#3e3027] text-sm font-semibold text-[#fffcf7]"
                >
                  0{index + 1}
                </span>
                <h3 className="mb-4 text-2xl font-semibold">{step.title}</h3>
                <p className="muted leading-relaxed">{step.text}</p>
                <ul className="mt-5 list-disc space-y-2 pl-5 text-sm marker:text-[#9b4a24]">
                  {step.checklist.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
          <p className="muted mt-6 max-w-3xl text-sm">{t.note}</p>
        </div>
      </section>
      <section
        className="section border-t border-[#3e3027]/15"
        aria-labelledby="before-ordering"
      >
        <div className="container">
          <h2 id="before-ordering" className="section-title">
            {t.beforeTitle}
          </h2>
          <div className="grid-3 mt-8">
            {t.before.map((item) => (
              <article key={item.title}>
                <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
                <p className="muted leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>
          <Link
            href={`/${language}/maintenance#warranty`}
            className="text-link mt-7"
          >
            {t.care}
            <span aria-hidden="true"> →</span>
          </Link>
        </div>
      </section>
      <section className="section bg-[#3e3027]/5" aria-labelledby="buying-next">
        <div className="container">
          <h2 id="buying-next" className="section-title">
            {t.ctaTitle}
          </h2>
          <p className="muted max-w-2xl">{t.ctaText}</p>
          <div className="mt-7 flex flex-wrap items-center gap-5">
            <Link href={`/${language}/contact`} className="button">
              {t.contact}
            </Link>
            <a href="https://www.daliantw.com/" className="text-link">
              {t.shop}
              <span aria-hidden="true"> ↗</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
