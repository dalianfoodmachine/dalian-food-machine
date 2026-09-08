import type { Metadata } from "next";
import Link from "next/link";

type PageProps = { params: Promise<{ locale: string }> };

// Describes this website, not the archived shop's account/checkout policy.
// next-intl routing currently retains its default NEXT_LOCALE preference cookie.
const copy = {
  "zh-TW": {
    title: "隱私權與資料使用",
    description:
      "了解大連食品機械形象網站的資料使用：郵件草稿、外部商城與 LINE、YouTube 嵌入播放器，以及語言偏好設定。",
    eyebrow: "把資料的去向，說清楚",
    heading: "隱私權與資料使用",
    lead: "你可以先了解設備，再決定是否與我們聯絡。這裡說明本網站實際使用資料的方式，讓你知道填寫的內容會去哪裡。",
    sections: [
      {
        title: "這份說明適用在哪裡？",
        paragraphs: [
          "本說明適用於大連食品機械有限公司的企業形象網站，包含產品資訊、品牌故事、維護說明、選購指南與聯絡頁。官方商城為外部網站，其會員、訂購、付款及資料使用方式，請查閱商城自己的說明。",
        ],
      },
      {
        title: "聯絡表單只協助建立郵件草稿",
        paragraphs: [
          "聯絡頁的姓名、電子郵件、產品與訊息欄位，在目前頁面中由你的瀏覽器處理。本網站沒有接收這份表單的 API，也沒有將內容存入網站資料庫、Cookie 或瀏覽器本機儲存空間。",
          "按下「開啟郵件草稿」後，瀏覽器會透過 mailto 連結，將填寫內容交給你設定的郵件程式，收件人為 dalianfood@gmail.com。你仍需在郵件程式中確認並自行寄出；本網站無法確認郵件程式是否開啟或郵件是否寄送。",
          "郵件程式可能依你自己的設定儲存或同步草稿；瀏覽器也可能提供自動填寫或頁面還原。這些行為由你使用的軟體與服務控制，不是本網站建立的表單儲存功能。",
        ],
      },
      {
        title: "你主動聯絡之後",
        paragraphs: [
          "當你自行寄出郵件、撥打電話或透過 LINE 聯絡，我們會收到你在該管道提供的資料，並用於回覆產品、試機、維護或其他相關詢問。郵件與對話會由各自的通訊服務處理。",
          "請只提供協助處理詢問所需要的資料。若想了解已提供資料的使用情形，或提出查詢、更正、刪除需求，可以使用下方聯絡方式與我們確認處理。",
        ],
      },
      {
        title: "外部商城、LINE 與地圖連結",
        paragraphs: [
          "前往官方商城、加入 LINE 官方帳號，或開啟 Google Maps，會離開本網站或開啟對應應用程式。後續登入、購物、付款、對話與位置查詢，適用各外部服務的隱私說明及設定。",
          "聯絡頁的地圖是一般外部連結，沒有嵌入地圖，也不會向你要求裝置定位權限。電話連結會交由裝置的撥號功能處理；郵件連結則交由郵件程式處理。",
        ],
      },
      {
        title: "首頁的 YouTube 影片",
        paragraphs: [
          "首頁嵌入大連食品的官方 YouTube 影片，並使用 YouTube iframe API 控制播放器。載入播放器、API 或播放影片時，瀏覽器會直接向 YouTube／Google 發出請求，傳送 IP 位址、瀏覽器資訊及相關請求資料。即使尚未按下播放，載入播放器與 API 仍可能產生這些連線。",
          "YouTube／Google 也可能依其服務與你的設定使用 Cookie 或其他儲存技術。這些資料由該服務依 Google 隱私政策處理；本網站未自行建立廣告追蹤，不代表嵌入的第三方服務不會處理資料。",
        ],
        link: {
          label: "閱讀 Google 隱私政策（外部網站）",
          href: "https://policies.google.com/privacy?hl=zh-TW",
        },
      },
      {
        title: "語言偏好、搜尋與基本連線",
        paragraphs: [
          "網站以 /zh-TW 與 /en 路徑提供不同語言。語言功能會在需要記住選擇時使用 NEXT_LOCALE 偏好 Cookie，這不是廣告追蹤 Cookie；你可以透過瀏覽器設定清除或管理。",
          "設備與 FAQ 搜尋在目前頁面內篩選內容，不會建立搜尋帳號或將搜尋字詞提交給本網站的搜尋服務。本網站未自行加入廣告像素或訪客行為追蹤程式。",
          "載入網站仍需要瀏覽器與代管服務交換基本連線資料，例如 IP 位址、請求路徑及瀏覽器資訊，才能提供頁面與檔案。這與儲存聯絡表單或追蹤廣告行為不同。",
        ],
      },
      {
        title: "說明更新與聯絡方式",
        paragraphs: [
          "若網站日後新增資料收集或互動功能，會配合實際行為更新本頁。對本說明或你提供的聯絡資料有疑問，請聯絡大連食品機械有限公司。",
        ],
      },
    ],
    phone: "電話：03-486-3785",
    email: "電子郵件：dalianfood@gmail.com",
    address: "桃園市新屋區濱海路永興段337號",
    contact: "前往聯絡我們",
  },
  en: {
    title: "Privacy and data use",
    description:
      "How the Dalian Food Machine website handles data: email drafts, external shop and LINE links, embedded YouTube video and language preferences.",
    eyebrow: "KNOW WHERE YOUR INFORMATION GOES",
    heading: "Privacy and data use",
    lead: "Explore the equipment before deciding whether to get in touch. This page explains how this website actually handles information, including where your form entries go.",
    sections: [
      {
        title: "What does this notice cover?",
        paragraphs: [
          "This notice covers the DALIAN FOOD MACHINE CO., LTD. company website, including product information, our story, equipment care, buying guidance and the contact page. The official shop is a separate website. Consult its own information about accounts, orders, payments and data use.",
        ],
      },
      {
        title: "The contact form only helps create an email draft",
        paragraphs: [
          "Your name, email, product and message entries are processed by your browser on the current page. This website has no API that receives this form and does not save its contents to a website database, cookies or browser local storage.",
          "Selecting “Open email draft” passes the entries through a mailto link to your configured email app, addressed to dalianfood@gmail.com. You must review and send the message in that app yourself. This website cannot confirm whether the email app opened or whether the message was sent.",
          "Your email app may save or synchronise drafts according to your settings. Your browser may also offer autofill or restore page contents. These behaviours are controlled by your software and service providers, rather than a form-storage feature on this website.",
        ],
      },
      {
        title: "When you choose to contact us",
        paragraphs: [
          "When you send an email, call us or contact us on LINE, we receive the details you share through that channel and use them to respond to your equipment, trial, maintenance or related enquiry. Emails and conversations are processed by their respective communication services.",
          "Please share only the information needed to help with your enquiry. To ask about information you have provided, or to request access, correction or deletion, use the contact details below so we can discuss and handle your request.",
        ],
      },
      {
        title: "External shop, LINE and map links",
        paragraphs: [
          "Visiting the official shop, adding the official LINE account or opening Google Maps takes you outside this website or into the corresponding app. Subsequent sign-in, purchases, payments, conversations and location searches are subject to those services’ privacy information and settings.",
          "The contact page uses an ordinary external map link. It does not embed a map or request your device location. Phone links use your device’s calling function, and email links use your email app.",
        ],
      },
      {
        title: "The YouTube video on the homepage",
        paragraphs: [
          "The homepage embeds Dalian’s official YouTube video and uses the YouTube iframe API to control the player. Loading the player or API, or playing the video, sends requests directly from your browser to YouTube / Google, including your IP address, browser information and related request data. Loading the player and API may make these connections even before you press play.",
          "YouTube / Google may also use cookies or other storage technologies according to its services and your settings. That service processes the information under the Google Privacy Policy. The absence of advertising tracking built by this website does not mean that embedded third-party services do not process data.",
        ],
        link: {
          label: "Read the Google Privacy Policy (external website)",
          href: "https://policies.google.com/privacy?hl=en",
        },
      },
      {
        title: "Language preferences, search and basic connections",
        paragraphs: [
          "The /zh-TW and /en paths provide the two site languages. The language feature uses a NEXT_LOCALE preference cookie when needed to remember your selection. It is not an advertising cookie, and you can clear or manage it through your browser settings.",
          "Equipment and FAQ searches filter content within the current page. They do not create a search account or submit keywords to a search service on this website. This website does not add its own advertising pixels or visitor behaviour tracking scripts.",
          "Loading the website still requires the browser and hosting service to exchange basic connection information, such as an IP address, requested path and browser information, to deliver pages and files. This is separate from storing contact forms or tracking advertising behaviour.",
        ],
      },
      {
        title: "Updates and contact details",
        paragraphs: [
          "If the website introduces new data collection or interactive features, this page will be updated to describe the actual behaviour. Contact DALIAN FOOD MACHINE CO., LTD. with questions about this notice or information you have shared.",
        ],
      },
    ],
    phone: "Phone: +886 3 486 3785",
    email: "Email: dalianfood@gmail.com",
    address:
      "No. 337, Yongxing Section, Binhai Road, Xinwu District, Taoyuan City, Taiwan",
    contact: "Go to the contact page",
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
      canonical: `/${language}/privacy`,
      languages: {
        "zh-TW": "/zh-TW/privacy",
        en: "/en/privacy",
        "x-default": "/zh-TW/privacy",
      },
    },
  };
}

export default async function PrivacyPage({ params }: PageProps) {
  const { locale } = await params;
  const language = locale === "en" ? "en" : "zh-TW";
  const t = copy[language];

  return (
    <div className="inner-page text-[#3e3027]">
      <section className="container page-intro">
        <span className="eyebrow">{t.eyebrow}</span>
        <h1>{t.heading}</h1>
        <p className="muted mt-6 max-w-3xl text-lg leading-relaxed">{t.lead}</p>
      </section>
      <div className="container section">
        <div className="prose">
          {t.sections.map((section, index) => (
            <section
              key={section.title}
              aria-labelledby={`privacy-section-${index}`}
            >
              <h2 id={`privacy-section-${index}`}>{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.link && (
                <a className="text-link" href={section.link.href}>
                  {section.link.label}
                  <span aria-hidden="true"> ↗</span>
                </a>
              )}
            </section>
          ))}
          <address className="mt-8 flex flex-col items-start gap-4 border-t border-[#3e3027]/15 pt-6 not-italic">
            <a
              href="mailto:dalianfood@gmail.com"
              className="text-link break-all"
            >
              {t.email}
            </a>
            <a href="tel:034863785" className="text-link">
              {t.phone}
            </a>
            <p className="muted">{t.address}</p>
          </address>
          <Link href={`/${language}/contact`} className="button mt-5">
            {t.contact}
          </Link>
        </div>
      </div>
    </div>
  );
}
