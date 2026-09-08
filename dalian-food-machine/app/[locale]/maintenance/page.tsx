import type { Metadata } from "next";
import Link from "next/link";
import SupportContent from "@/components/website/SupportContent";

type PageProps = { params: Promise<{ locale: string }> };

// Sources: 素材/舊網站內容/daliantw/{日常清潔,操作指南,保固維修}.md.
// Historical rates, free-service counts and turnaround examples are not offers.
const copy = {
  "zh-TW": {
    title: "設備維護與常見問題",
    description:
      "桌上輕型水餃機 FAQ、日常清潔、使用手冊與保固諮詢。先停機斷電，再安心確認下一步。",
    eyebrow: "陪你安心使用",
    heading: "設備維護，讓每一天的開工更安心。",
    lead: "忙碌的廚房，需要可靠的節奏。從收工後的清潔，到遇到問題時的第一步，我們把常用的照顧方式整理在這裡。",
    safetyTitle: "檢查之前，先停機、斷電。",
    safety:
      "清潔、拆卸、排除卡料或檢查前，請關閉電源、拔除插頭，等待所有活動部件完全停止。緊急停止鈕不能取代拔除電源。電控箱、線路與電氣維修交由專業人員；不要繞過安全開關，也不要在機器運轉中伸手或用工具調整。",
    careTitle: "把收工後的幾分鐘，留給設備。",
    care: [
      {
        title: "每次使用後清潔",
        text: "斷電後，依隨機手冊拆卸可清洗的餡料總成、料斗、模具及充餡棒；使用溫水與中性清潔劑清理食品殘留，特別留意充餡棒與輸送部位的死角。",
      },
      {
        title: "分清楚哪些能碰水",
        text: "主機面板、馬達、電控箱不可直接沖水。白色 PE 零件（進料底座、充皮棒、推料棒）不可泡水；外殼以柔軟濕布擦拭，避免水分進入電源接頭。",
      },
      {
        title: "乾燥、復裝與潤滑",
        text: "零件洗後徹底擦乾或晾乾，整機完全乾燥前不得接電。依手冊確認復裝、間隙及指定潤滑部位，使用原廠指定的潤滑油；不可用沙拉油、麻油等食用油替代。保養頻率依機型與使用狀況向技術人員確認。",
      },
    ],
    downloadsTitle: "手冊與型錄，隨手查閱。",
    downloadsIntro:
      "先核對機型與手冊版本。文件內的規格、配件及服務資訊若與你的機台不同，請聯絡我們確認適用內容。",
    manual: "使用手冊",
    manualText: "操作、拆洗與保養前，先閱讀對應機型的說明。",
    manualLink: "索取適用機型手冊",
    catalog: "產品型錄",
    catalogText: "了解設備與應用方向，實際配置及報價另行確認。",
    catalogLink: "開啟產品型錄（PDF）",
    warrantyTitle: "保固與維修，先一起確認狀況。",
    warrantyIntro:
      "保固範圍與期限，以購買時的保證書、訂單及雙方確認的條件為準。請保留購買憑證；透過經銷商購買的機台，可先聯絡原購買窗口。",
    service: [
      {
        title: "準備機台資料",
        text: "提供機型、序號、購買資料、發生狀況與已做的檢查。可拍攝停機後的外觀與成品照片，不必為了錄影而再次啟動故障機台。",
      },
      {
        title: "由技術人員判斷",
        text: "先透過電話或 LINE 說明問題，由技術人員確認是否能依手冊處理，或需要安排返廠、零件更換與到場檢修。",
      },
      {
        title: "確認方式再安排",
        text: "零件、工資、往返運送與到場交通等可能分別計費；是否屬保固及實際費用、排程，均須事先確認。寄回前請取得包裝與寄送指示，不保證固定完修或往返天數。",
      },
    ],
    contact: "聯絡維護窗口",
    phone: "撥打 03-486-3785",
    line: "透過 LINE 詢問",
  },
  en: {
    title: "Equipment care and FAQs",
    description:
      "Tabletop dumpling machine FAQs, daily cleaning, manuals and warranty enquiries. Stop and disconnect power before checking your machine.",
    eyebrow: "CARE & SUPPORT",
    heading: "Equipment care, for a calmer start to the day.",
    lead: "A busy kitchen needs a dependable rhythm. From cleaning at the end of a shift to the first step when something goes wrong, find practical care guidance here.",
    safetyTitle: "Before you check anything, stop and disconnect power.",
    safety:
      "Before cleaning, dismantling, clearing a blockage or inspecting the machine, switch off, unplug and wait for all moving parts to stop. The emergency stop does not replace disconnecting power. Leave control boxes, wiring and electrical repairs to qualified professionals. Never bypass safety switches or reach into a running machine with hands or tools to make adjustments.",
    careTitle: "Give your equipment a little time at the end of the day.",
    care: [
      {
        title: "Clean after every use",
        text: "Disconnect power, then remove washable filling assemblies, hopper parts, moulds and filling rods as instructed in the supplied manual. Remove food residue with warm water and neutral detergent, paying attention to recesses in the filling rod and feed system.",
      },
      {
        title: "Know what can get wet",
        text: "Do not hose down the main panel, motor or control box. Do not soak white PE parts, including the feed base, wrapper rod and pusher rod. Wipe the exterior with a soft damp cloth and keep moisture out of power connectors.",
      },
      {
        title: "Dry, reassemble and lubricate",
        text: "Wipe parts dry or let them dry thoroughly. Do not reconnect power until the entire machine is dry. Follow the manual for assembly, clearances and lubrication points, and use the lubricant specified by the manufacturer. Never substitute cooking oil. Confirm maintenance frequency for your model and usage with a technician.",
      },
    ],
    downloadsTitle: "Keep the manual close at hand.",
    downloadsIntro:
      "Check the model and manual version first. If specifications, accessories or service information in a document differ from your machine, contact us to confirm what applies.",
    manual: "User manual",
    manualText:
      "Read the instructions for your model before operating, dismantling or cleaning it.",
    manualLink: "Request the manual for your model",
    catalog: "Product catalogue",
    catalogText:
      "Explore equipment and applications. Confirm the actual configuration and quotation with us.",
    catalogLink: "Open product catalogue (PDF)",
    warrantyTitle: "Warranty and repairs begin with understanding the issue.",
    warrantyIntro:
      "Warranty scope and duration depend on the warranty document, order and agreed terms supplied with your purchase. Keep your proof of purchase. For equipment bought through a dealer, contact your original seller first.",
    service: [
      {
        title: "Prepare the machine details",
        text: "Have the model, serial number, purchase information, symptoms and checks already completed ready. Photos of the stopped machine and finished food can help. Do not restart a faulty machine just to record a video.",
      },
      {
        title: "Let a technician assess it",
        text: "Describe the issue by phone or LINE. A technician can determine whether the manual provides a suitable remedy or whether a factory return, replacement part or on-site inspection is needed.",
      },
      {
        title: "Agree on the arrangements",
        text: "Parts, labour, shipping and technician travel may be charged separately. Confirm warranty eligibility, costs and scheduling in advance. Obtain packing and shipping instructions before returning equipment. There is no fixed repair or round-trip delivery time promised here.",
      },
    ],
    contact: "Contact the support team",
    phone: "Call +886 3 486 3785",
    line: "Ask us on LINE",
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
      canonical: `/${language}/maintenance`,
      languages: {
        "zh-TW": "/zh-TW/maintenance",
        en: "/en/maintenance",
        "x-default": "/zh-TW/maintenance",
      },
    },
  };
}

export default async function MaintenancePage({ params }: PageProps) {
  const { locale } = await params;
  const language = locale === "en" ? "en" : "zh-TW";
  const t = copy[language];

  return (
    <div className="inner-page text-[#3e3027]">
      <section className="container page-intro">
        <span className="eyebrow">{t.eyebrow}</span>
        <h1 className="max-w-4xl">{t.heading}</h1>
        <p className="muted mt-6 max-w-3xl text-lg leading-relaxed">{t.lead}</p>
        <aside
          aria-labelledby="support-safety"
          className="mt-9 max-w-4xl rounded-2xl border-l-4 border-[#9b4a24] bg-[#9b4a24]/10 p-6"
        >
          <h2 id="support-safety" className="mb-3 text-xl font-semibold">
            {t.safetyTitle}
          </h2>
          <p className="leading-relaxed">{t.safety}</p>
        </aside>
      </section>
      <SupportContent locale={language} />
      <section className="section" aria-labelledby="daily-care">
        <div className="container">
          <h2 id="daily-care" className="section-title">
            {t.careTitle}
          </h2>
          <div className="grid-3 mt-8">
            {t.care.map((item) => (
              <article key={item.title} className="card">
                <h3 className="mb-4 text-xl font-semibold">{item.title}</h3>
                <p className="muted leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section
        id="downloads"
        className="section scroll-mt-28"
        aria-labelledby="support-downloads"
      >
        <div className="container">
          <h2 id="support-downloads" className="section-title">
            {t.downloadsTitle}
          </h2>
          <p className="muted mt-4 max-w-3xl">{t.downloadsIntro}</p>
          <div className="grid-2 mt-8">
            {[
              {
                title: t.manual,
                text: t.manualText,
                label: t.manualLink,
                href: `/${language}/contact?product=manual`,
              },
              {
                title: t.catalog,
                text: t.catalogText,
                label: t.catalogLink,
                href: "/media/catalog.pdf",
              },
            ].map((item) => (
              <article
                key={item.href}
                className="card flex flex-col items-start"
              >
                <p className="eyebrow">
                  {item.href.endsWith(".pdf") ? "PDF" : "SUPPORT"}
                </p>
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="muted mt-3 mb-6 flex-1">{item.text}</p>
                <a href={item.href} className="button secondary">
                  {item.label}
                  <span aria-hidden="true"> ↗</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section
        id="warranty"
        className="section scroll-mt-28 border-t border-[#3e3027]/15"
        aria-labelledby="support-warranty"
      >
        <div className="container">
          <h2 id="support-warranty" className="section-title">
            {t.warrantyTitle}
          </h2>
          <p className="muted mt-4 max-w-3xl leading-relaxed">
            {t.warrantyIntro}
          </p>
          <ol className="grid-3 mt-8 list-none">
            {t.service.map((item, index) => (
              <li key={item.title}>
                <p
                  aria-hidden="true"
                  className="mb-3 text-sm font-semibold text-[#9b4a24]"
                >
                  0{index + 1}
                </p>
                <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
                <p className="muted leading-relaxed">{item.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link href={`/${language}/contact`} className="button">
              {t.contact}
            </Link>
            <a href="tel:034863785" className="button secondary">
              {t.phone}
            </a>
            <a href="https://line.me/R/ti/p/@dalianltd" className="text-link">
              {t.line}
              <span aria-hidden="true"> ↗</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
