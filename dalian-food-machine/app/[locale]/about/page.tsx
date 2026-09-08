import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ExhibitionRecords from "@/components/website/ExhibitionRecords";

type PageProps = { params: Promise<{ locale: string }> };

// Source: 素材/舊網站內容/{01-關於大連,daliantw/關於我們}.md.
// The award belongs to the cooked-egg peeling machine; no award year is assumed.
const copy = {
  "zh-TW": {
    title: "關於大連食品",
    description:
      "大連食品 1980 年成立於桃園，從事食品機械研發、製造，提供選機、試機及維修服務。",
    eyebrow: "我們的故事・始於 1980",
    heading: "關於大連食品",
    lead: "我們在桃園做食品機械，從 1980 年做到現在。水餃怎麼包、餡量怎麼調、機器放不放得下，這些實際的問題，就是我們和客人一起確認的事。",
    imageAlt: "兩位工作人員共同檢查食品機械的內部結構",
    imageCaption: "廠內紀錄：一起檢查機台，確認組裝細節。",
    originLabel: "從一個想法開始",
    originTitle: "做好機械，是為了把食物做好。",
    origin: [
      "1980 年，詹介文先生創立大連食品機械。看見當時台灣食品機械在技術、衛生與安全上的改善空間，他投入研發與製造，從實際的食品製作需求出發，尋找更合適的設備做法。",
      "從麵點包製到蛋品處理，我們持續投入食品機械的設計、製造與銷售服務。設備的價值，除了完成一個動作，更在於能不能融入你的配方、空間與每天的工作節奏。",
    ],
    awardLabel: "一段值得記住的歷程",
    awardTitle: "一台熟蛋剝殼機，走上國際發明展。",
    award:
      "大連食品研發的熟蛋剝殼機曾代表台灣參加德國紐倫堡世界發明展，獲得發明創作銀牌獎，並獲經濟部頒發榮譽獎牌。這份肯定提醒我們：好的研發，來自對日常難題的認真回應。",
    valuesTitle: "在意的事，始終很實在。",
    values: [
      {
        title: "先了解你做的食物",
        text: "麵皮、餡料、成品大小與期待的份量，都是評估設備的起點。讓機器配合製作需求，從實際試作確認適用性。",
      },
      {
        title: "把設備放進工作日常",
        text: "從機械可行性評估、工作流程規劃，到製造、安裝與測試，將空間和工序一起考慮。",
      },
      {
        title: "使用之後，也有人可問",
        text: "需要操作、清潔或維護協助時，備好機型與問題描述，透過電話或 LINE 和我們一起確認下一步。",
      },
    ],
    ctaTitle: "想看看機器？先跟我們約個時間。",
    ctaText:
      "不論是準備開店，還是想讓熟悉的工作輕鬆一些，都可以先聊聊你正在做的食物。",
    contact: "聊聊我的需求",
    products: "看看有哪些設備",
  },
  en: {
    title: "About Dalian Food Machine",
    description:
      "Founded in Taoyuan, Taiwan in 1980, Dalian Food Machine brings equipment design, manufacturing and support to people who care about the food they make.",
    eyebrow: "OUR STORY · SINCE 1980",
    heading: "About Dalian Food Machine",
    lead: "A worktable and a familiar recipe can be the beginning of a small food business. We want to make repetitive tasks more manageable, so the people behind the food can spend more time on what they love.",
    imageAlt:
      "Two staff members inspecting the internal mechanism of a food machine",
    imageCaption:
      "From Taoyuan, Taiwan, with care for both the equipment and the people who use it.",
    originLabel: "WHERE IT BEGAN",
    originTitle: "Better equipment begins with the food.",
    origin: [
      "Dalian Food Machine was founded in 1980. Seeing opportunities to improve technology, hygiene and safety in Taiwan’s food machinery, our founder invested in research and manufacturing, starting with the practical needs of food makers.",
      "From dumpling forming to egg processing, we continue to design, manufacture and support food equipment. A machine’s value lies not only in the task it performs, but in how well it fits your recipe, workspace and everyday routine.",
    ],
    awardLabel: "A MOMENT IN OUR HISTORY",
    awardTitle: "An egg peeling machine on an international stage.",
    award:
      "Dalian’s cooked-egg peeling machine represented Taiwan at the international invention exhibition in Nuremberg, Germany, where it received a silver medal for invention. It also received an honorary medal from Taiwan’s Ministry of Economic Affairs. That recognition reminds us that useful innovation starts with taking everyday problems seriously.",
    valuesTitle: "The things we care about are practical.",
    values: [
      {
        title: "Start with your food",
        text: "Wrappers, filling, finished size and desired output are the starting points for choosing equipment. Suitability should be confirmed through a trial with your actual product.",
      },
      {
        title: "Consider the whole working day",
        text: "From feasibility and workflow planning to manufacturing, installation and testing, we consider both the available space and the steps involved in making your food.",
      },
      {
        title: "Keep the conversation going",
        text: "For help with operation, cleaning or maintenance, have your model and a description of the issue ready. Reach us by phone or LINE to work out the next step.",
      },
    ],
    ctaTitle: "Want to see a machine? Arrange a visit.",
    ctaText:
      "Whether you are opening a shop or making a familiar routine easier, tell us about the food you want to make.",
    contact: "Talk about my needs",
    products: "Explore the equipment",
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
      canonical: `/${language}/about`,
      languages: {
        "zh-TW": "/zh-TW/about",
        en: "/en/about",
        "x-default": "/zh-TW/about",
      },
    },
  };
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  const language = locale === "en" ? "en" : "zh-TW";
  const t = copy[language];

  return (
    <div className="inner-page text-[#3e3027]">
      <section className="container page-intro">
        <span className="eyebrow">{t.eyebrow}</span>
        <h1 className="max-w-4xl">{t.heading}</h1>
        <p className="muted mt-6 max-w-3xl text-lg leading-relaxed">{t.lead}</p>
        <a href="#exhibitions" className="text-link">
          {language === "en" ? "See past exhibitions" : "看看參展紀錄"} ↓
        </a>
      </section>
      <section className="section about-origin" aria-labelledby="our-origin">
        <div className="container grid-2 items-center">
          <figure>
            <Image
              src="/media/story.webp"
              alt={t.imageAlt}
              width={1200}
              height={900}
              sizes="(max-width: 800px) 100vw, 50vw"
              className="aspect-[4/3] w-full rounded-3xl object-cover"
            />
            <figcaption className="muted mt-4 text-sm">
              {t.imageCaption}
            </figcaption>
          </figure>
          <div>
            <p className="eyebrow">{t.originLabel}</p>
            <h2 id="our-origin" className="section-title">
              {t.originTitle}
            </h2>
            <div className="prose">
              {t.origin.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section" aria-labelledby="our-award">
        <div className="container">
          <div className="about-award-panel rounded-3xl border border-[#3e3027]/15 p-7 text-[#fffcf7] sm:p-12">
            <p className="mb-4 text-sm font-semibold tracking-widest text-[#fffcf7]/75">
              {t.awardLabel}
            </p>
            <h2
              id="our-award"
              className="max-w-3xl text-3xl leading-snug font-semibold sm:text-4xl"
            >
              {t.awardTitle}
            </h2>
            <p className="mt-6 max-w-3xl leading-loose text-[#fffcf7]/90">
              {t.award}
            </p>
          </div>
        </div>
      </section>
      <ExhibitionRecords locale={language} />
      <section className="section" aria-labelledby="our-values">
        <div className="container">
          <h2 id="our-values" className="section-title">
            {t.valuesTitle}
          </h2>
          <div className="grid-3 mt-8">
            {t.values.map((value, index) => (
              <article key={value.title} className="card">
                <p
                  aria-hidden="true"
                  className="mb-6 text-sm font-semibold text-[#9b4a24]"
                >
                  0{index + 1}
                </p>
                <h3 className="mb-3 text-xl font-semibold">{value.title}</h3>
                <p className="muted leading-relaxed">{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section
        className="section border-t border-[#3e3027]/15"
        aria-labelledby="story-next"
      >
        <div className="container">
          <h2 id="story-next" className="section-title">
            {t.ctaTitle}
          </h2>
          <p className="muted mt-4 max-w-2xl">{t.ctaText}</p>
          <div className="mt-7 flex flex-wrap gap-4">
            <Link href={`/${language}/contact`} className="button">
              {t.contact}
            </Link>
            <Link href={`/${language}/products`} className="button secondary">
              {t.products}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
